
function start() {
    if (timeFrame > 1){
    console.log('jogo rodando')
    } else {
    timeFrame = 100
    pnt.innerHTML = 0
    produzirFrame()
    }    
}
//adicionar classe no elemento criado pra atribuir estilos
var canvas = document.createElement('canvas')
//anexa no body
canvas.className = ('canvas')
canvas.width = (window.innerWidth-10)
canvas.height = (window.innerHeight-80)
//atribuir metodo 2d na canvas pra conseguir desenhar
if (canvas.getContext) {
    var ctx = canvas.getContext('2d')

} else {
    window.alert('sem suporte para o navegador')
}
document.body.appendChild(canvas)
var pnt = document.querySelector('#pontos')

//x e y onde o circulo é gerado
var xPlayer
var yPlayer
//x e y onde foi clicado
var xMouse
var yMouse
//controle de acerto
var acerto = false
//time e função de inicio
var timeFrame

//instancia um objeto para ser usado
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
        ctx.fillStyle = '#CCCCCC'
        ctx.fill()
        ctx.lineWidth = 5
        ctx.strokeStyle = this.color
        ctx.stroke()
        ctx.closePath()
    }
}
//função que gera a redução do circulo, encerra e marca ponto
function produzirFrame() {

    const player = new Player(
        (((innerWidth-10)/ 10) * (Math.floor(Math.random() * 9) + 1)),
        (((innerHeight-60) / 10) * (Math.floor(Math.random() * 9) + 1)),
        50,
        ('#' + Math.floor(Math.random() * 16777215).toString(16))
        )
    xPlayer = player.x
    yPlayer = player.y
        var frame = setInterval(() => {
        player.radius = player.radius - 1
        player.draw()
        if (player.radius == 5) {
            clearInterval(frame)
            ctx.clearRect(0, 0, innerWidth, innerHeight)
            xPlayer = yPlayer = xMouse = yMouse = 10000
            timeFrame = 0
            pontos = pnt.innerHTML
            if (pontos < 10){
                alert(`Very little, try again! you scored ${pontos} points`)
            } else {
            alert(`Congratulations!! you scored ${pontos} points`)
            }
        } else if (acerto) {
            clearInterval(frame)
            ctx.clearRect(0, 0, innerWidth, innerHeight)
            produzirFrame()
            acerto = false
           
            }
        }, timeFrame -= 4)
    }
//função/metodo para relacionar os encontros de Xs e Ys (toque e circulo gerado)
canvas.addEventListener('click', (event) => {
    const react = canvas.getBoundingClientRect()
    xMouse = event.clientX - react.left
    yMouse = event.clientY - react.top
    acertou(xMouse, yMouse, xPlayer, yPlayer)
})
//função marca ponto
function acertou(x1, y1, x2, y2) {
    compareXUm = (Math.floor(x1 / 100))
    compareXDois = (Math.floor(x2 / 100))
    compareYUm = (Math.floor(y1 / 100))
    compareYDois = (Math.floor(y2 / 100))

    if (compareXUm == compareXDois & compareYUm == compareYDois) {
        if (((parseInt(pnt.innerHTML))%2)==0){
        document.getElementById('pontos').style.backgroundColor = '#ff7F50'
        } else {
        document.getElementById('pontos').style.backgroundColor = '#ffff00'
    }

        console.log('acertou')
        acerto = true
        pnt.innerHTML = parseInt(pnt.innerHTML) + 1
    }
}

/* codigos deixado de lado ou substituido no processo de criação
//document.body.innerHTML += '<canvas class='canvas'></canvas>'
//document.getElementsByClassName('canvas').innerHTML = '<canvas id='someId'></canvas>';
    //(innerWidth * Math.random()),
    //(innerHeight * Math.random()),
    //(innerWidth/10)*(Math.floor(Math.random()*9)+1),
    //(innerHeight/10)*(Math.floor(Math.random()*9)+1),
var touch = {
    x: innerWidth/2,
    y: innerHeight/2,
    radius: 50,
    color: 'blue',
    draw: function () {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        ctx.fillStyle = '#CCCCCC'
        ctx.fill()
        ctx.lineWidth = 10
        ctx.strokeStyle = this.color
        ctx.stroke()
        ctx.closePath()
    }
}
function produzirFrame (){
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
}




function getMousePosition(canvas, event) {
  let rect = canvas.getBoundingClientRect();
  let x = event.clientX - rect.left;
  let y = event.clientY - rect.top;
  console.log('Coordinate x: ' + x, 
              'Coordinate y: ' + y);
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