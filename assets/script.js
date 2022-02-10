var canvas = document.createElement('canvas')
//adicionar classe no elemento criado pra atribuir estilos
canvas.className = ('canvas')
//anexa no body
canvas.width = window.innerWidth
canvas.height = window.innerHeight
if (canvas.getContext) {
    var ctx = canvas.getContext('2d')

} else {
    window.alert('sem suporte para o navegador')
}
document.body.appendChild(canvas)
//document.body.innerHTML += '<canvas class="canvas"></canvas>'
//document.getElementsByClassName('canvas').innerHTML = '<canvas id="someId"></canvas>';
var pnt = document.querySelector('#pontos')


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
}

function primeiro (){
var frame = setInterval(() => {
    touch.radius = touch.radius - 1
    touch.draw()
    if (touch.radius == 0){   
        ctx.clearRect(0, 0, innerWidth, innerHeight)
        clearInterval(frame)
        primeiro()

        touch.radius = 50
        touch.y = (innerHeight/10)*(Math.floor(Math.random()*9)+1)
        touch.x = (innerWidth/10)*(Math.floor(Math.random()*9)+1)
        touch.color = ('#' + Math.floor(Math.random()*16777215).toString(16))   
    }
}, 100);
}


function start() {
    primeiro()
  }
  
  var xMouse
  var yMouse
  canvas.addEventListener('click', (event) => {
      const react = canvas.getBoundingClientRect()
      xMouse =  event.clientX - react.left
      yMouse = event.clientY - react.top
      acertou(xMouse, yMouse, touch.x, touch.y)
  })

  function acertou (x1, y1, x2, y2){
    compareXUm = (Math.floor(x1/100))
    compareXDois = (Math.floor(x2/100))
    compareYUm = (Math.floor(y1/100))
    compareYDois = (Math.floor(y2/100))

    if (compareXUm == compareXDois & compareYUm == compareYDois){
        console.log("acertou")
        pnt.innerHTML = parseInt(pnt.innerHTML) + 1       
        clearInterval(primeiro())
    }
  }
//teste
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