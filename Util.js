class Obj{
    constructor(x,y,w,h,a){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.a = a
    }
    draw(){
        let img = new Image()
        img.src = this.a
        des.drawImage(img,this.x,this.y,this.w,this.h)
    }
}
class Carro extends Obj {
    dir = 0
    vida = 5
    score = 0
    move(){
        this.x += this.dir
        if(this.x <= 2){
            this.x = 4
        }else if(this.x >= 536){
            this.x = 526
        }
    }
    colid(objeto){
        if((this.x < objeto.x + objeto.w)&&
           (this.x + this.w > objeto.x )&&
           (this.y < objeto.y + objeto.h)&&
           (this.y + this.h > objeto.y)){
            objeto.y = 911
            return true    
        }else{
            return false
        }
    }
}
let vel = 5
let firsTime = true
let secondTime = true
class Carro2 extends Obj{
    comeco1(){
        if((this.y <= -110)){
            this.y = -1000
        }
        this.y -= 5
    }
    comeco2(){
        if((this.y <= -110)){
            this.y = -1000
        }
        this.y -= 7
    }
    move1(){
        if((this.y == -1000)&&(firsTime==true)){
            this.y = -7000
            firsTime = false
        }
        this.y += 5
    }
    move2(){
        if((this.y == -1000)&&(secondTime==true)){
            this.y = -10000
            secondTime = false
        }
        this.y += 3
    }
    moveRandom(){
        if((this.y < -700)){
            this.y = -700
            vel = Math.floor(Math.random()*(20-5+1)+5)
            console.log("Velocidade alterada")
        }
        this.y += vel
    }
    move(){
        let vel = 5
        if(this.y >= 910){
            this.y = -110
            this.x = Math.floor(Math.random()*(560-0+1)+0)
            vel = Math.floor(Math.random()*(12-5+1)+5)
        }
        this.y += vel
    }
}
class Est extends Obj{
    des_quad(){
        des.beginPath()
        des.strokeStyle = this.a
        des.lineWidth = 5
        des.fillStyle = "yellow"
        des.rect(this.x,this.y,this.w,this.h)
        des.closePath()
        des.stroke()
        des.fill()
    }
    move(){
        let vel
        let firsTime = true
        if(firsTime == true){
            vel = 7
            firsTime = false
        }
        if(this.y >= 850){
            this.y = -50
            if(this.vel <= 12){
                this.vel += 1
            } else{
                this.vel = 12
            }
        }
        this.y += vel
    }
    moveRach(){
        let vel
        let firsTime = true
        if(firsTime == true){
            vel = 7
            firsTime = false
        }
        if(this.y >= 850){
            this.y = -120
            this.x = Math.floor(Math.random()*(560-0+1)+0)
            if(this.vel <= 12){
                this.vel += 1
            } else{
                this.vel = 12
            }
        }
        this.y += vel
    }
}
class Barr extends Obj{
        des_barr(){
            des.beginPath()
            des.strokeStyle = this.a
            des.lineWidth = 5
            des.fillStyle = "yellow"
            des.rect(this.x,this.y,this.w,this.h)
            des.closePath()
            des.stroke()
            des.fill()
        }
}