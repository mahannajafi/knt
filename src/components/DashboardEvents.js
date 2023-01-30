let menuItems = document.querySelectorAll(".dashboard")

menuItems.forEach((item , index) => {
    item.addEventListener('click' , () => {
        // alert("vhbi")
        for(let i = 0 ; i < menuItems.length ; i++){
            menuItems[i].style.backgroundColor = "#234E70FF"
            menuItems[i].style.color = "white"
        }
        menuItems[index].style.backgroundColor = "white"
        menuItems[index].style.color = "#234E70FF"
    })
})