const listItems = document.querySelectorAll("li");

 listItems.forEach(item => { 
    
    item.addEventListener("click", () => {
        listItems.forEach( el => el.classList.remove("active"));
        item.classList.add("active");
    })
 })