var canvas = document.createElement('canvas')
//adicionar classe no elemento criado pra atribuir estilos
canvas.className = ('canvas')
//anexa no body
canvas.width = (window.innerWidth-10)
canvas.height = (window.innerHeight-80)
if (canvas.getContext) {
    var ctx = canvas.getContext('2d')

} else {
    window.alert('sem suporte para o navegador')
}
document.body.appendChild(canvas)
//document.body.innerHTML += '<canvas class="canvas"></canvas>'
//document.getElementsByClassName('canvas').innerHTML = '<canvas id="someId"></canvas>';
var pnt = document.querySelector('#pontos')

/*
var touch = {
    x: innerWidth/2,
    y: innerHeight/2,
    radius: 50,
    color: 'blue',
    draw: function () {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        ctx.fillStyle = "#CCCCCC"
        ctx.fill()
        ctx.lineWidth = 10
        ctx.strokeStyle = this.color
        ctx.stroke()
        ctx.closePath()
    }
}*/

class Player {
    constructor(x, y, radius, color) {
        this.x = x
        this.y = y
        this.radius = 50
        this.color = color
    }
    draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        ctx.fillStyle = "#CCCCCC"
        ctx.fill()
        ctx.lineWidth = 5
        ctx.strokeStyle = this.color
        ctx.stroke()
        ctx.closePath()
    }
}
var xPlayer
var yPlayer

    //(innerWidth * Math.random()),
    //(innerHeight * Math.random()),
    //(innerWidth/10)*(Math.floor(Math.random()*9)+1),
    //(innerHeight/10)*(Math.floor(Math.random()*9)+1),

    function produzirFrame() {

        const player = new Player(
            (((innerWidth-10)/ 10) * (Math.floor(Math.random() * 9) + 1)),
            (((innerHeight-60) / 10) * (Math.floor(Math.random() * 9) + 1)),
            50,
            ('#' + Math.floor(Math.random() * 16777215).toString(16)))
        xPlayer = player.x
        yPlayer = player.y
        var frame = setInterval(() => {
            player.radius = player.radius - 1
            player.draw()
            if (player.radius == 5) {
                clearInterval(frame)
                ctx.clearRect(0, 0, innerWidth, innerHeight)
            } else if (acerto) {
                clearInterval(frame)
                ctx.clearRect(0, 0, innerWidth, innerHeight)
                produzirFrame()
                acerto = false
            }
        }, timeFrame -= 5)
    }

//ctx.clearRect(0, 0, innerWidth, innerHeight)


/*function produzirFrame (){
var frame = setInterval(() => {
    touch.radius = touch.radius - 1
    touch.draw()
    if (touch.radius == 0){   
        ctx.clearRect(0, 0, innerWidth, innerHeight)
        clearInterval(frame)
        

        touch.radius = 50
        touch.y = (innerHeight/10)*(Math.floor(Math.random()*9)+1)
        touch.x = (innerWidth/10)*(Math.floor(Math.random()*9)+1)
        touch.color = ('#' + Math.floor(Math.random()*16777215).toString(16))   
    }
}, 100);
}*/

var acerto = false
var xMouse
var yMouse
canvas.addEventListener('click', (event) => {
    const react = canvas.getBoundingClientRect()
    xMouse = event.clientX - react.left
    yMouse = event.clientY - react.top
    acertou(xMouse, yMouse, xPlayer, yPlayer)
})

function acertou(x1, y1, x2, y2) {
    compareXUm = (Math.floor(x1 / 100))
    compareXDois = (Math.floor(x2 / 100))
    compareYUm = (Math.floor(y1 / 100))
    compareYDois = (Math.floor(y2 / 100))

    if (compareXUm == compareXDois & compareYUm == compareYDois) {
        console.log("acertou")
        acerto = true
        pnt.innerHTML = parseInt(pnt.innerHTML) + 1


    }
}
var timeFrame
function start() {
    timeFrame = 100
    pnt.innerHTML = 0
    produzirFrame()
}

/*
function getMousePosition(canvas, event) {
  let rect = canvas.getBoundingClientRect();
  let x = event.clientX - rect.left;
  let y = event.clientY - rect.top;
  console.log("Coordinate x: " + x, 
              "Coordinate y: " + y);
}

let canvasElem = document.querySelector("canvas");
 
canvasElem.addEventListener("mousedown", function(e)
{
  getMousePosition(canvasElem, e);
});

if (touch.radius == 0){   
  ctx.clearRect(0, 0, innerWidth, innerHeight)     
  touch.radius = 50
  touch.y = (innerHeight/10)*(Math.floor(Math.random()*9)+1)
  touch.x = (innerWidth/10)*(Math.floor(Math.random()*9)+1)
  touch.color = ('#' + Math.floor(Math.random()*16777215).toString(16))}*/