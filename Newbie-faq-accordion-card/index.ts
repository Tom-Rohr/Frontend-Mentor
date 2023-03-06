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
