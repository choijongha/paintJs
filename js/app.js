const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const width = document.getElementById("jsRange");

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = width.value;

let painting = false;

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

$("#jsRange").change(function(event){
    ctx.lineWidth = width.value;
})
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
$("#jsCanvas").mousedown(function (event) {
        painting = true;
    });
$("#jsCanvas").mouseup(function(event) {
        painting = false;
    });
$("#jsCanvas").mouseleave(function(event) {
        painting = false;
    })
$(".controls__color:nth-child(1)").click(function(event) {
    ctx.strokeStyle = "white";
})
$(".controls__color:nth-child(2)").click(function(event) {
    ctx.strokeStyle = "#ff3b30";
})
$(".controls__color:nth-child(3)").click(function(event) {
    ctx.strokeStyle = "#ff9500";
})
$(".controls__color:nth-child(4)").click(function(event) {
    ctx.strokeStyle = "#ffcc00";
})
$(".controls__color:nth-child(5)").click(function(event) {
    ctx.strokeStyle = "#4cd963";
})
$(".controls__color:nth-child(6)").click(function(event) {
    ctx.strokeStyle = "#5ac8fa";
})
$(".controls__color:nth-child(7)").click(function(event) {
    ctx.strokeStyle = "#0579ff";
})
$(".controls__color:nth-child(8)").click(function(event) {
    ctx.strokeStyle = "#5856d6";
})
$(".controls__color:nth-child(9)").click(function(event) {
    ctx.strokeStyle = "#2c2c2c";
})
