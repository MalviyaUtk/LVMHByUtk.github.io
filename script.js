
let nav3a=document.querySelector(".nav3a")
let group=document.querySelector(".group")


nav3a.addEventListener("mouseover",function(){
    group.style.display="initial";
})


nav3a .addEventListener("mouseleave",function(){
    group.style.display="none"
})

let nav3b=document.querySelector(".nav3b")
let houses=document.querySelector(".houses")


nav3b.addEventListener("mouseover",function(){
    houses.style.display="initial";
})


nav3b .addEventListener("mouseleave",function(){
    houses.style.display="none"
})



const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});



