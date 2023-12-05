document.addEventListener("DOMContentLoaded", function() {
    const addFieldBtn = document.getElementById("addFieldBtn");
    const fieldsContainer = document.getElementById("fieldsContainer");
    const saveFormBtn = document.getElementById("saveFormBtn");
    const saveTime = document.getElementById("saveTime");
    

    addFieldBtn.addEventListener("click", function(e) {
        e.preventDefault();
        const newField = document.createElement("div");
        newField.innerHTML = `
            <label for="newField">New Field:</label>
            <input type="text" class="newFieldContent">
            <select class="fieldType">
                <option value="text">Text</option>
                <option value="number">Number</option>
                <option value="date">Date</option>
                <option value="time">Time</option>
                <option value="image">Image</option>
                <option value="pdf">PDF</option>
            </select>
            <br><br>
        `;
        fieldsContainer.appendChild(newField);
    });

    saveFormBtn.addEventListener("click", function(e) {
        e.preventDefault();
        const currentTime = new Date().toLocaleString();
        saveTime.textContent = `Form saved on: ${currentTime}`;   
    });  
});
