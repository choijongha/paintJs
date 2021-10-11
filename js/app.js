const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const width = document.getElementById("jsRange");
// const colors = document.getElementsByClassName("controls__color")

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = width.value;

let painting = false;
let filling = false;
// function stopPainting() {
//     painting = false;
// }

// function startPainting() {
//     painting = true;
// }

// function onMouseMove(event) {
//     const x = event.offsetX;
//     const y = event.offsetY;
//     if(!painting) {
//         ctx.beginPath();
//         ctx.moveTo(x, y);
//     } else {
//         ctx.lineTo(x, y);
//         ctx.stroke();
//     }
// }
// function onMouseDown(event) {
//     painting = true;

// }

// if (canvas) {
//     canvas.addEventListener("mousemove", onMouseMove);
//     canvas.addEventListener("mousedown", startPainting);
//     canvas.addEventListener("mouseup", stopPainting);
//     canvas.addEventListener("mouseleave", stopPainting);
// }
$("#jsCanvas").mousemove(function (event) {
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
    });

$("#jsCanvas").mousedown(function () {
        painting = false;
    });
$("#jsCanvas").mouseup(function() {
        painting = true;
    });
$("#jsCanvas").mouseleave(function() {
        painting = false;
    })


// function changeColor(event) {
//     ctx.strokeStyle = event.target.style.backgroundColor;
// }

// Array.from(colors).forEach(color => color.addEventListener("click" , changeColor));

$(".controls__color").click(function(event) {
    ctx.strokeStyle = event.target.style.backgroundColor;
})
$("#jsRange").change(function(event){
    ctx.lineWidth = event.target.value;
})
$("#jsMode").click(function() {
    if(filling === false) {
        $("#jsMode").html("paint");
        filling = true;
    } else {
        $("#jsMode").html("fill")
        filling = false;
    }

})