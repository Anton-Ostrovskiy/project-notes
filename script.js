const model = {
    tasks:[],
    addTask(title, description, setColor){
        const task = {title:title, text:description, id: new Date().getTime(), isChoose:false, color:setColor}
        this.tasks.push(task)
        view.renderTasks(this.tasks)
    },
    deleteTask(taskId){
        this.tasks = this.tasks.filter((task)=> {
            task.id !== taskId
        })
        view.renderTasks(this.tasks)
    },
    chooseTask(taskId) {
        this.tasks = this.tasks.map((task) => {
            if(task.id === taskId) {
                task.isChoose = !task.isChoose;
            }
            return task;
        })

        view.renderTasks(this.tasks);
    },
}
 
const view = {
    init(){
        
        const app = document.createElement("div");

        const title = document.createElement("h1");
        title.classList.add("title");
        title.textContent = "To-Do List";

        const form = document.createElement("form");
        form.classList.add("form");

        const labelInput = document.createElement("label")
        labelInput.setAttribute("for", "taskTitle");
        labelInput.textContent = "Название заметки ";

        const inputForm = document.createElement("input");
        inputForm.id = "taskTitle"
        inputForm.classList.add("input");
        inputForm.type = "text";
        inputForm.placeholder = "Напишите название новой заметки...";

        const labelTextarea = document.createElement("label");
        labelTextarea.setAttribute("for","taskDescription");
        labelTextarea.textContent = "Описание новой заметки";

        const textarea = document.createElement("textarea");
        textarea.id = "taskDescription";
        textarea.classList.add("textarea");

        const colorWrap = document.createElement("div");
        colorWrap.classList.add("colorWrap");

        const colorYellow = document.createElement("input");
        colorYellow.classList.add("color-yellow");
        colorYellow.setAttribute("checked", "");
        colorYellow.type = "radio";
        colorYellow.name = "color";
        colorYellow.value = "yellow";

        const colorGreen = document.createElement("input");
        colorGreen.classList.add("color-green");
        colorGreen.type = "radio";
        colorGreen.name = "color";
        colorGreen.value = "green";

        const colorBlue = document.createElement("input");
        colorBlue.classList.add("color-blue");
        colorBlue.type = "radio";
        colorBlue.name = "color";
        colorBlue.value = "blue";

        const colorRed = document.createElement("input");
        colorRed.classList.add("color-red");
        colorRed.type = "radio";
        colorRed.name = "color";
        colorRed.value = "red";

        const colorViolet = document.createElement("input");
        colorViolet.classList.add("color-violet");
        colorViolet.type = "radio";
        colorViolet.name = "color";
        colorViolet.value = "violet";

        const buttonElement = document.createElement("button");
        buttonElement.classList.add("button");
        buttonElement.textContent = "Добавить заметку";
        buttonElement.type = "submit";

        const list = document.createElement("ul")
        list.classList.add("list");

        document.body.append(app)
        app.append(title,form,list)
        form.append(labelInput, inputForm, labelTextarea, textarea, buttonElement, colorWrap)
        colorWrap.append(colorYellow,colorGreen,colorBlue,colorRed,colorViolet)

        this.renderTasks(model.tasks);

        const radioButtons = document.querySelectorAll('input[name="color"]');

        form.addEventListener("submit", (event)=> {
            event.preventDefault();
            const title = inputForm.value;
            const description = textarea.value;
            let setColor
            radioButtons.forEach((radio) => {
                if (radio.checked) {
                    setColor = radio.value;
                    console.log(setColor);
                    
                }
            });
            controller.addTask(title,description,setColor);
            inputForm.value = "";
            textarea.value = "";
        })

        list.addEventListener("click", (event)=> {
            const item = event.target;
            if(item.tagName = "li"){
                const taskId = Number(item.parentElement.id)
                controller.chooseTask(taskId)
            }
            if(item.classList.contains("delete-button")){
                const taskId = Number(item.parentElement.id);
                controller.deleteTask(taskId);
            }
        })
    },
    renderTasks(tasks){
        const list = document.querySelector(".list")

        list.replaceChildren();

        tasks.forEach((task) => {
            
            const li = document.createElement("li");
            li.id = task.id;
            li.className = `${task.color} ${task.isChoose ? 'done' : ''}`;

            const title = document.createElement("h3");
            title.classList.add("task-title");
            title.textContent = task.title;

            const deleteButton = document.createElement("button");
            deleteButton.classList.add("delete-button");
            deleteButton.textContent = "Delete 🗑";

            const text = document.createElement("p");
            text.classList.add("task-text");
            text.textContent = task.text;

            li.append(title,deleteButton,text);

            list.append(li);
        })
    }
}
 
const controller = {
    addTask(title, description,setColor){
        if(title.trim() !== "" && description.trim() !== "") {
            model.addTask(title,description,setColor);
        }
    },
    deleteTask(taskId){
        model.deleteTask(taskId);
    },
    chooseTask(taskId){
        model.chooseTask(taskId);
    }
}

view.init()