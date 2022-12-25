const contents =document.getElementById("ul-el")
const msg=document.getElementById("input-el");
const butt=document.getElementById("button-el")
const del=document.getElementById("delete-button")
let array=[]
let storagefiles = JSON.parse(localStorage.getItem("array"));
if (storagefiles){
    array=storagefiles;
    renderleads()
}
del.addEventListener("click",function()
{
    array.pop();
    renderleads()
})

msg.addEventListener("keypress",function(event)
{
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("button-el").click();

}
if (event.key=="Delete"){
    event.preventDefault();
    document.getElementById("delete-button").click()
}
})
butt.addEventListener("click",function ()
{
    array.push(msg.value)
    msg.value=""
    localStorage.setItem("array",JSON.stringify(array))
    renderleads()
})
function renderleads()
{
let items=""
for(let i =0;i<array.length;i++)
{
    items+="<li>"+array[i]+"</li>"
}
contents.innerHTML = items
}