let canvas = document.getElementById('des')
let des = canvas.getContext('2d')
const f1 = new Carro(100,660,60,100,'./img/carro2.png')
const chegada = new Est(0,-15000,600,120,'./img/linha-chegada.png')
const chegada2 = new Est(0,-26000,600,120,'./img/linha-chegada.png')
const chegada3 = new Est(0,-35000,600,120,'./img/linha-chegada.png')
const chegada4 = new Est(0,-46000,600,120,'./img/linha-chegada.png')
const c3 = new Carro2(360,-1000,60,100,'./img/carroPasseio.png')
const c4 = new Carro2(360,-1000,60,100,'./img/carro1.png')
const c1 = new Carro2(250,660,60,100,'./img/carro3.png')
const c2 = new Carro2(400,660,60,100,'./img/carro1.png')
const bg = new Est(296,32,8,40,'yellow')
const bg2 = new Est(296,132,8,40,'yellow')
const bg3 = new Est(296,232,8,40,'yellow')
const bg4 = new Est(296,332,8,40,'yellow')
const bg5 = new Est(296,432,8,40,'yellow')
const bg6 = new Est(296,532,8,40,'yellow')
const bg7 = new Est(296,632,8,40,'yellow')
const bg8 = new Est(296,732,8,40,'yellow')
const bg9 = new Est(296,832,8,40,'yellow')
const rachadura = new Est(300, 500, 150, 150,'./img/rachadura.png')
const rachadura2 = new Est(400, 700, 150, 150,'./img/rachadura.png')
const rachadura3 = new Est(400, 700, 150, 150,'./img/rachadura.png')
const barr = new Barr(0,0,10,800,'yellow')  
const barr2 = new Barr(590,0,10,800,'yellow')  
const heart = new Carro2(200,200,25,25,'./img/heart.png')
const coin = new Carro2(250,-1000,25,25,'./img/coin.png')
const cone = new Est(800, -1000, 50,50,'./img/cone.png')
const cone2 = new Est(1000, -1000, 50,50,'./img/cone.png')
const cone3 = new Est(1000, -1000, 50,50,'./img/cone.png')
let som1 = new Audio('./img/motor.wav')
let som2 = new Audio('./img/Daniel.wav')
let batida = new Audio('./img/batida.mp3')
som1.loop = true
som1.volume = 0.2
som2.loop = true
som2.volume = 0.2
batida.volume = 0.1
let jogo = 0
let fase = 0
let time = 0
let temporizadorCarro = 0
let temporizadorCarro2 = 0
document.addEventListener('keydown', (e)=>{
    if(e.key === 'ArrowLeft'){
        f1.dir -= 7
        
    }else if(e.key === 'ArrowRight'){
        f1.dir += 7
    }
})
document.addEventListener('keyup', (e)=>{
    if(e.key === 'ArrowLeft'){
        f1.dir = 0
    }else if(e.key === 'ArrowRight'){
        f1.dir = 0
    }
})
document.addEventListener('keypress', (e)=>{
    if(e.key === 'Enter'){
        jogo = 1
        som1.play()
        som2.pause()
    }
})
function colisao(){
    if((f1.colid(c1))||(f1.colid(c2))||(f1.colid(cone))||(f1.colid(cone2))||(f1.colid(cone3))||(f1.colid(c3))||(f1.colid(c4))){
        f1.vida -= 1
        batida.play()
    }else if((f1.colid(heart))&&(f1.vida<5)){
        f1.vida += 1
        if(f1.vida >= 5.5){
            f1.vida = 5
        }
    }else if(f1.colid(coin)){
        f1.score += 1
    }else if((f1.colid(rachadura))||(f1.colid(rachadura2))||(f1.colid(rachadura3))){
        f1.vida -= 0.5
        batida.play()
    }
}
function atualizar(){
    if(time <= 1500){
        c1.comeco1()
        c2.comeco2()
    }else{
        c1.move1()
        c2.move2()
    }
    if(time>1505){
        time = 1505
    }
    if(fase>=2){
        temporizadorCarro += 5
        if(temporizadorCarro >= 200){
            if(c3.y <= 910){
                c3.move()
            } else{
                temporizadorCarro = 0
                c3.y = -1200
            }
            desenhar(c3.draw())
        }
        rachadura2.moveRach()
        cone2.moveRach()
        console.log("Distância carro preto: ",c3.y)
        if(fase>=3){
            temporizadorCarro2 += 5
            if(temporizadorCarro2 >= 200){
                if(c4.y <= 910){
                    c4.move()
                } else{
                    temporizadorCarro2 = 0
                    c4.y = -1200
                }
                desenhar(c4.draw())
            }
            console.log("Distância carro amarelo: ",c4.y)
        }
        if(fase==4){
            rachadura3.move()
            desenhar(rachadura3.draw())
            cone3.move()
            desenhar(cone3.draw())
            console.log("Fazendo fase 4")
        }
    }
    time += 5
    f1.move()
    bg.move()
    bg2.move()
    bg3.move()
    bg4.move()
    bg5.move()
    bg6.move()
    bg7.move()
    bg8.move()
    bg9.move()
    coin.move()
    cone.moveRach()
    rachadura.moveRach()
    chegada.moveChegada()
    chegada2.moveChegada()
    chegada3.moveChegada()
    chegada4.moveChegada()
    if(f1.vida < 5){
        heart.move()
    }
    colisao()
    if(f1.vida <= 0){
        jogo = 3
    }
}
function desenhar(){
    des.fillText('Vidas: ',20,50)
    des.font = '30px Arial'
    des.fillText(f1.vida,110,50)
    des.fillText('Pontuação: ', 20,790)
    des.fillText(f1.score,180,790)
    bg.des_quad()
    bg2.des_quad()
    bg3.des_quad()
    bg4.des_quad()
    bg5.des_quad()
    bg6.des_quad()
    bg7.des_quad()
    bg8.des_quad()
    bg9.des_quad()
    if(fase >= 2){
        rachadura2.draw()
        cone2.draw()
    }
    if(fase >= 3){

    }
    if(fase == 4){

    }
    barr.des_barr()
    barr2.des_barr()
    coin.draw()
    cone.draw()
    rachadura.draw()
    chegada.draw()
    chegada2.draw()
    chegada3.draw()
    if(f1.vida<5){
        heart.draw()  
    }
    c1.draw()
    c2.draw()
    f1.draw()
}
function desenharCont(){
    let firsTime = true
    if((time >= 0)&&(time < 1000)&&(firsTime == true)){
        des.fillStyle = 'red'
        des.fillText('Prepare-se...',200,410)
    } else if((time >= 1000)&&(time < 1750)&&(firsTime == true)){
        des.fillStyle = 'orange'
        des.fillText('3',290,410)
    } else if((time >= 1750)&&(time < 2500)&&(firsTime == true)){
        des.fillStyle = 'coral'
        des.fillText('2',290,410)
    } else if((time >= 2500)&&(time < 4000)&&(firsTime == true)){
        des.fillStyle = 'yellow'
        des.fillText('1...',270,410)
    } else if((time >= 4000)&&(time < 4200)&&(firsTime == true)){
        des.fillStyle = 'green'
        des.fillText('Go!!!',250,410)
    } else if(time >= 4200){
        jogo = 2
        time = 0
        firsTime = false
    }
    time += 5
    bg.des_quad()
    bg2.des_quad()
    bg3.des_quad()
    bg4.des_quad()
    bg5.des_quad()
    bg6.des_quad()
    bg7.des_quad()
    bg8.des_quad()
    bg9.des_quad()
    barr.des_barr()
    barr2.des_barr()
    rachadura.draw()
    c1.draw()
    c2.draw()
    f1.draw()
}
function desenharInicio(){
    des.fillText('Corrida!',230,100)
    des.font = '45px Arial bolder'
    des.fillStyle = 'white'
    des.fillText('Pressione Enter para começar...',45,700,500)
}
function desenharGameOver(){
    des.fillText('GAME OVER!',160,400)
}
function desenharFim(){
    des.fillText('Parabéns!',160,400)
    des.fillText('Você ganhou!',160,300)
}
function main(){
    console.log("Distância da linha de chegada 1: ",chegada.y)
    console.log("Distância da linha de chegada 2: ",chegada2.y)
    console.log("Distância da linha de chegada 3: ",chegada3.y)
    console.log("Distância da linha de chegada 4: ",chegada4.y)
    if(fase == 3){
        console.log("Fase 3 iniciada")
    }
    if(fase == 4){
        console.log("Fase 4 iniciada")
    }
    if(jogo == 0){
        des.clearRect(0,0,600,800)
        desenharInicio()
        requestAnimationFrame(main)
    } else if(jogo == 1){
        des.clearRect(0,0,600,800)
        desenharCont()
        requestAnimationFrame(main)
    }else if(jogo == 2){
        des.clearRect(0,0,600,800)
        atualizar()
        desenhar()
        som2.play()
        requestAnimationFrame(main)
    }else if(jogo == 3){
        des.clearRect(0,0,600,800)
        desenharGameOver()
        requestAnimationFrame(main)
    }else if(jogo == 4){
        des.clearRect(0,0,600,800)
        desenharFim()
        requestAnimationFrame(main)
    }
    if(c1.y>=1500){
        c1.y = 1500
    }
    if(c2.y>=1500){
        c2.y = 1500
    }
    if(chegada.y>=1500){
        chegada.y = 1500
        fase = 2
    }
    if(chegada2.y>=1500){
        chegada2.y = 1500
        fase = 3
    }
    if(chegada3.y>=1500){
        chegada3.y = 1500
        fase = 4
    }
    if(chegada4.y>=1500){
        jogo = 4
    }
}
main()