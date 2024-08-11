document.addEventListener("DOMContentLoaded", () => {
    const notesContainer = document.querySelector(".notes-container");
    const createBtn = document.querySelector("button");

    loadNotes();

    createBtn.addEventListener("click", () => {
        let inputBox = document.createElement("p");
        let img = document.createElement("img");
        inputBox.className = "input-box";
        inputBox.setAttribute("contenteditable", "true");
        img.src = "images/delete.png";
        img.addEventListener("click", () => {
            notesContainer.removeChild(inputBox);
            saveNotes();
        });
        notesContainer.appendChild(inputBox).appendChild(img);
        saveNotes();
    });

    function saveNotes() {
        const notes = [];
        const inputBoxes = document.querySelectorAll(".input-box");
        inputBoxes.forEach(inputBox => {
            notes.push(inputBox.innerHTML);
        });
        localStorage.setItem("notes", JSON.stringify(notes));
    }

    
    function loadNotes() {
        const savedNotes = JSON.parse(localStorage.getItem("notes"));
        if (savedNotes) {
            savedNotes.forEach(note => {
                let inputBox = document.createElement("p");
                let img = document.createElement("img");
                inputBox.className = "input-box";
                inputBox.setAttribute("contenteditable", "true");
                inputBox.innerHTML = note;
                img.src = "images/delete.png";
                img.addEventListener("click", () => {
                    notesContainer.removeChild(inputBox);
                    saveNotes();
                });
                notesContainer.appendChild(inputBox).appendChild(img);
            });
        }
    }
});
