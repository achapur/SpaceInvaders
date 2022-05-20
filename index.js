// const bgMusic = new Audio("sounds/8bit.mp3");bgMusic.level = 0.5;
const scoreEl = document.querySelector("#scoreEl")
const shotsLeftEl = document.querySelector("#shotsLeftEl")
const canvas = document.querySelector("canvas")
const c = canvas.getContext("2d")
console.log(shotsLeftEl)
canvas.width = innerWidth // viene de window. Como si tuviera window.inner...
canvas.height = innerHeight

class Player {
    constructor (){

        this.velocity = {
            x:0,
            y:0 // no para SpaceInvaders
        }
        this.rotation = 0
        const image = new Image ()
        image.src= "./Images/golfer.png"
        
        const scale = .45
        this.image= image
        this.width = image.width * scale
        this.height = image.height * scale
        this.position = {
            x: canvas.width/2 - this.width/2,
            y: canvas.height - this.height - 20
        
    }
}

    draw(){  
        c.save()
        c.translate(
            player.position.x + player.width/2,
            player.position.y + player.height/2
            )
            c.rotate(this.rotation)
            c.translate(
               - player.position.x - player.width/2,
                -player.position.y - player.height/2
                )
        c.drawImage(this.image,this.position.x,this.position.y,this.width,this.height)
        c.restore()
     }
    update(){
        if(this.image){
        this.draw()
        this.position.x += this.velocity.x
    }
    }
   }

class Projectile {
    constructor({position,velocity}){
        this.position = position
        this.velocity = velocity
        this.radius = 3
    }
    draw(){
        c.beginPath()
        c.arc(this.position.x,this.position.y,this.radius,0,Math.PI*2)
        c.fillStyle="white"
        c.fill()
        c.closePath()
    }
    update(){
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
    }
}

class Particle {
    constructor({position,velocity,radius,color}){
        this.position = position;
        this.velocity = velocity;
        this.radius =  radius
        this.color = color
        this.opacity = 1
    }
    draw(){
        c.save()
        c.globalAlpha = this.opacity
        c.beginPath()
        c.arc(this.position.x,this.position.y,this.radius,0,Math.PI*2)
        c.fillStyle=this.color
        c.fill()
        c.closePath()
        c.restore()
    }
    update(){
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        this.opacity-=.01
    }
}

class Bogey {
    constructor ({position}){

        this.velocity = {
            x:0,
            y:0 // no para SpaceInvaders
        }

        const image = new Image ()
        image.src= "./Images/Bogey.png"
      
        const scale = .05
        this.image= image
        this.width = image.width * scale
        this.height = image.height * scale
        this.position = {
            x: position.x,
            y: position.y
        
    }
}

    draw(){  
        c.drawImage(this.image,this.position.x,this.position.y,this.width,this.height)
     }
    update({velocity}){
        if(this.image){
        this.draw()
        this.position.x += velocity.x
        this.position.y += velocity.y
    }
    }
   }



   
   class Grid {
    constructor(){
        this.position= {
            x: 0,
            y: 0
        }
        this.velocity= {
            x:3,
            y:0
        }
        this.invaders = []
        const rows= Math.floor(Math.random()*5+2) // minimo 2 filas y max 7
        const columns = Math.floor(Math.random()*8+5)
        this.width = columns *70
        for(let i = 0; i<columns;i++){
            for(let y = 0; y<rows;y++){
            this.invaders.push(new Bogey({position:{
                x:i*60,
                y:y*70
            }}))
        }
    }
            console.log(this.invaders)
       
    }
    update(){
        this.position.x += this.velocity.x,
        this.position.y += this.velocity.y
        this.velocity.y = 0
        if(this.position.x + this.width>canvas.width || this.position.x <=0 ){
            this.velocity.x = -this.velocity.x
            this.velocity.y = 30
        }
    }
}

class Birdie{
    constructor({position,velocity}){
    this.position = position
    this.velocity = velocity
    const image = new Image ()
    image.src= "./Images/Birdie.png"
    this.opacity=1
  
  
    const scale = .05
    this.image= image
    this.width = image.width * scale
    this.height = image.height * scale
    this.position = {
        x: position.x,
        y: position.y
    }
}
draw(){  
    c.drawImage(this.image,this.position.x,this.position.y,this.width,this.height)
 }
update(){
        this.draw()
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y
    if
    (this.position.x + this.width + this.velocity.x >= canvas.width || 
       this.position.x              + this.velocity.x <= 0){
        this.velocity.x = -this.velocity.x
    } else if
    (this.position.y + this.width + this.velocity.y >= canvas.height || 
        this.position.y              + this.velocity.y <= 0){
            this.velocity.y = -this.velocity.y
        }

    
}
}
class Eagle{
    constructor({position,velocity}){
    this.position = position
    this.velocity = velocity
    const image = new Image ()
    image.src= "./Images/Birdie.png"
  
    const scale = .05
    this.image= image
    this.width = image.width * scale
    this.height = image.height * scale
    this.position = {
        x: position.x,
        y: position.y
    }
}
draw(){  
    c.drawImage(this.image,this.position.x,this.position.y,this.width,this.height)
 }
update(){
    this.draw()
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y
    if
    (this.position.x + this.width + this.velocity.x >= canvas.width || 
       this.position.x              + this.velocity.x <= 0){
        this.velocity.x = -this.velocity.x
    } else if
    (this.position.y + this.width + this.velocity.y >= canvas.height || 
        this.position.y              + this.velocity.y <= 0){
            this.velocity.y = -this.velocity.y
        }
}
}
class Albatross{
    constructor({position,velocity}){
    this.position = position
    this.velocity = velocity
    const image = new Image ()
    image.src= "./Images/Albatross.png"
  
    const scale = .2
    this.image= image
    this.width = image.width * scale
    this.height = image.height * scale
    this.position = {
        x: position.x,
        y: position.y
    }
}
draw(){  
    c.drawImage(this.image,this.position.x,this.position.y,this.width,this.height)
 }
update(){
    this.draw()
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y
    if
    (this.position.x + this.width + this.velocity.x >= canvas.width || 
       this.position.x              + this.velocity.x <= 0){
        this.velocity.x = -this.velocity.x
    } else if
    (this.position.y + this.width + this.velocity.y >= canvas.height || 
        this.position.y              + this.velocity.y <= 0){
            this.velocity.y = -this.velocity.y
        }
}
}
function randomBetween(min,max){
    return Math.random()*(max-min)+min
}
let birdieSpeed = 10
let eagleSpeed = 15
let albatrossSpeed = 20

const player = new Player()
const projectiles = []
const grids =[new Grid()]
const particles =[]
let birdies =[]
let eagles =[]
let albatrosss =[]

const keys = {
    a: {
        pressed:false
    },
    d: {
        pressed:false
    },
    space: {
        pressed:false
    },
}
//player.draw()

let frames = 0
let randomInterval = Math.floor((Math.random()*500))+500
console.log(randomInterval)
let score = 0
let shotsLeft = 72

function createParticles({object,color}){
    for (let i = 0; i<5;i++){
        particles.push(new Particle({
            position:{
                x:object.position.x + object.width/2,
                y:object.position.y +object.height/2
            },
            velocity:{
                x:(Math.random()-.5)*2,
                y:(Math.random()-.5)*2
            },
            radius:Math.random()*3,
            color:color  || "red"
        }))
    } 
}

function animate(){
    requestAnimationFrame(animate)
    c.fillStyle="green"
    c.fillRect(0,0,canvas.width,canvas.height)

    if(frames%200 ===0 && birdies.length < 5){
        birdies.push(new Birdie({
            position:{
                x:Math.random()*(canvas.width -300),
                y:Math.random()*(canvas.height -300)
            },
            velocity:{
                x:(Math.random()-0.5)*birdieSpeed/2,
                y:(Math.random()-0.5)*birdieSpeed
            }
        }))
    }

    if(frames%450 ===0 && eagles.length < 3){
        eagles.push(new Eagle({
            position:{
                x:Math.random()*(canvas.width -300),
                y:Math.random()*(canvas.height -300)
            },
            velocity:{
                x:(Math.random()-0.5)*eagleSpeed,
                y:(Math.random()-0.5)*eagleSpeed
            }
        }))
    }

    if(frames%800 ===0 && albatrosss.length < 2){
        albatrosss.push(new Albatross({
            position:{
                x:Math.random()*(canvas.width -300),
                y:Math.random()*(canvas.height -300)
            },
            velocity:{
                x:(Math.random()-0.5)*albatrossSpeed*2,
                y:(Math.random()-0.5)*albatrossSpeed
            }
        }))
    }

    for (let i = birdies.length-1;i>=0;i--){
        let birdie = birdies[i]
        birdie.update()
    }
    for (let i = eagles.length-1;i>=0;i--){
        let eagle = eagles[i]
        eagle.update()
    }
    for (let i = albatrosss.length-1;i>=0;i--){
        let albatross = albatrosss[i]
        albatross.update()
    }
    player.update()
    particles.forEach((particle,i) =>{
        if(particle.opacity<=0){
            setTimeout(()=>{
                particles.splice(i,1)
            },0)
        }else{
            particle.update()
        }
        console.log(particles)
        particle.update()
    })
//-----------------------------------------------------------------------------------------------------------
    

for(let i=projectiles.length-1;i>=0;i--){
    const projectile = projectiles[i]
//eliminar projectile si choca con algo
    for(let j=birdies.length-1;j>=0;j--){
        const birdie = birdies[j]
        if(
            
            Math.hypot(
                projectile.position.x - birdie.position.x,
                projectile.position.y - birdie.position.y
                )<
                projectile.radius + birdie.width){
                    projectiles.splice(i,1)
                    birdies.splice(j,1)
                    score -= 1 
                    scoreEl.innerHTML = score
  
                }
    }
    for(let k=eagles.length-1;k>=0;k--){
        const eagle = eagles[k]
        if(
            Math.hypot(
                projectile.position.x - eagle.position.x,
                projectile.position.y - eagle.position.y
                )<
                projectile.radius + eagle.width){
                    projectiles.splice(i,1)
                    eagles.splice(k,1)
                    score -= 2
                    scoreEl.innerHTML = score
                }
    }
    for(let m=albatrosss.length-1;m>=0;m--){
        const albatross = albatrosss[m]
        if(
            
            Math.hypot(
                projectile.position.x - albatross.position.x,
                projectile.position.y - albatross.position.y
                )<
                projectile.radius + albatross.width){
                    projectiles.splice(i,1)
                    albatrosss.splice(m,1)
                    score -= 3
                    scoreEl.innerHTML = score
                }
    }
        if(projectile.position.y + projectile.radius<=0){
            projectiles.splice(i,1)
         } else{
            projectile.update()
        }
    }

grids.forEach((grid,gridIndex)=>{
    grid.update()
    grid.invaders.forEach((invader,i)=>{
        invader.update({velocity: grid.velocity})
        //projectiles hit enemy
        projectiles.forEach((projectile,j) =>{
            if(
                projectile.position.y - projectile.radius<=
                    invader.position.y + invader.height &&
                projectile.position.x + projectile.radius>=
                    invader.position.x && 
                projectile.position.x-projectile.radius<= 
                    invader.position.x +invader.width && projectile.position.y + 
                projectile.radius >= invader.position.y
                ){
                   
                setTimeout(()=>{
                    const invaderFound = grid.invaders.find(
                        (invader2) => invader2 === invader
                        )
                    const projectileFound = projectiles.find(
                        (projectile2) => projectile2 === projectile
                    )
                    //remove invader and projectile
                        if (invaderFound && projectileFound){ 
                            score += 1  
                            console.log("este es el score", score)
                            scoreEl.innerHTML = score
                    createParticles({
                        object:invader

                    })
                   grid.invaders.splice(i,1)
                   projectiles.splice(j,1) 
                   if(grid.invaders.length>0){
                       const firstInvader = grid.invaders[0]
                       const lastInvader = grid.invaders[grid.invaders.length-1]
                       grid.width = lastInvader.position.x - firstInvader.position.x + lastInvader.width
                       grid.position.x = firstInvader.position.x
                    }else{
                           grids.splice(gridIndex,1)                   
                }}
                },0)
            }
        })
    })
})

    if(keys.a.pressed && player.position.x >=0){
        player.velocity.x = -10
        player.rotation = -.15
    }else if(keys.d.pressed && player.position.x + player.width<=canvas.width){
    player.velocity.x = 10
    player.rotation = .15
    }else {
     player.velocity.x = 0
     player.rotation = 0
    }
    console.log(frames)
    //spawning enemies
    if (frames%randomInterval ===0){
        grids.push(new Grid)
        randomInterval = Math.floor((Math.random()*500)+500)
        let frames = 0
        console.log(randomInterval)
    }
    frames++
}

animate()

addEventListener('keydown',({key})=>{
  
    switch(key){
        case 'a':
            console.log("left")
            keys.a.pressed = true
            break;
        case 'd':
            console.log("right")
            keys.d.pressed = true
            break;
            case ' ':
                console.log("space")
                shotsLeft -= 1  
                console.log("te quedan", shotsLeft)
                shotsLeftEl.innerHTML = shotsLeft
            break;
    }
})


addEventListener('keyup',({key})=>{
    
    switch(key){
        case 'a':
            console.log("left")
            
            keys.a.pressed = false
            break
        case 'd':
            console.log("right")
            keys.d.pressed = false
            break
            case ' ':
                console.log("space")
                projectiles.push(new Projectile({
                    position:{
                        x:player.position.x+player.width/2,
                        y:player.position.y
                    },
                    velocity:{
                        x:0,
                        y:-10
                    }
                }))
            console.log(projectiles)
            break 
    }
})

