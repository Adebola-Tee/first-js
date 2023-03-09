(function (){
const pictures=[
    "1",
    "2",
    "3",
    "4",
    "5"
];

const buttons=document.querySelectorAll(".btn")
const imgDiv=document.querySelector(".img-container")

let counter = 0
buttons.forEach(function (button){
    button.addEventListener("click", function(e){
    if (button.classList.contains('btn-left')){
        counter--
        if(counter<0){
            counter=pictures.length - 1
        }
        imgDiv.style.background =`url('images/${pictures[counter]}.jpg') center/cover fixed no-repeat`
    }
    if (button.classList.contains('btn-right')){
        counter++
        if(counter>pictures.length -1 ){
            counter=0
        }
        imgDiv.style.background =`url('images/${pictures[counter]}.jpg') center/cover fixed no-repeat`
    }
})
})
})();

const curso= document.querySelector(".cursor");
var timeout;
//cursor movement
document.addEventListener("mousemove", (e)=>{
    let x= e.pageX;
    let y=e.pageY;

    curso.style.top=y +'px';
    curso.style.left=x +'px';
    curso.style.display='block';
//stop animation
function mouseStopped(){
curso.style.display='none';
}
//hide animation
clearTimeout(timeout);
timeout=setTimeout(mouseStopped, 1000 );
});
//stop animation off screen
document.addEventListener("mouseout", ()=>{
    curso.style.display='none';
})