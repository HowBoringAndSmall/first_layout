//function
(function(){
    const menuItem = document.querySelector('.menu');
    const mobMenu = document.querySelector(".header_nav")
    const menuCloseItem = document.querySelector(".header_nav_close")
    menuItem.addEventListener("click", () =>{
        mobMenu.classList.add("header_nav_active");
    });
    menuCloseItem.addEventListener("click", () =>{
        mobMenu.classList.remove("header_nav_active");
    });
}());