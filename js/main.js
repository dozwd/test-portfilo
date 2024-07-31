$(function(){
    $("h1").on('click',function(){
        $(this).css({'color':'red'})
    })






})

const tit = document.getElementById("title")
console.log(tit)
tit.addEventListener("click",function(){
    this.style.color="blue"
})