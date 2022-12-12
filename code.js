let form = document.getElementById("lomake");
form.addEventListener("submit", showName);

/**
 * 
 * @param {Event} event 
 */
function showName(event){
    event.preventDefault();

    const borderElement = document.createElement("div");
    borderElement.id = "box";
    document.body.appendChild(borderElement);

    
    let date = new Date().toLocaleDateString("fi-FI");
    let formData = new FormData(form);
    let dateANDname = (date) +" "+ (formData.get("name"));
    let note = formData.get("note");
    let h = document.createElement("h3");
    let r = document.createElement("p");
    h.textContent = dateANDname;
    r.textContent = note;

    borderElement.appendChild(h);
    borderElement.appendChild(r);


    const list = borderElement.classList;
    if (document.getElementById('checkbox').checked) {
        list.add("myStyle");
    } 
}




