//1. Grab items
const items = document.querySelectorAll('li.faq__faq-item')
//2. Add event listeners
items.forEach((item) => {
    item.addEventListener("click", () => {
        if(item.classList.contains("active")){
            item.classList.remove("active")
            return
        }
        else if(!item.classList.contains("active")){
            items.forEach(item => {
                if(item.classList.contains("active")){
                    item.classList.remove("active")
                }
            })
            item.classList.add("active")
        }
    })
})

//3.handleItemClick function -->

//3.1 Grab the clicked item

//3.2 Grab the itemDetail as we need to add maxHeight

//3.3 Check if item has .active class

//3.4 If it does, remove the maxHeight and remove the .active class

//3.5 If it does, add the maxHeight and add the .active class
