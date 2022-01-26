let li = document.querySelectorAll("nav > ul > li");

li.forEach(item => {
    item.addEventListener("mouseover",function (e){
        item.children[1].style.display="block";
        // item.children[1].style.position="relative";//absolute
    })
    document.addEventListener("mouseout",function (e){
        item.children[1].style.display = "none";
    })
})