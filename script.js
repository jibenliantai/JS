let lists = document.getElementsByClassName("pull-down-list")
console.log(lists);

const pullDownButton = document.getElementById("lists")
console.log(pullDownButton)

pullDownButton.addEventListener("mouseover",function() {
    pullDownButton.setAttribute("style","background-color:blue;")
});

pullDownButton.addEventListener("mouseout",function() {
    pullDownButton.setAttribute("style","background-color:red;")
});

pullDownButton.addEventListener("click",function() {
    pullDownButton.setAttribute("style","background-color:green;")
});