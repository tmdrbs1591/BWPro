import {FRUITS} from "./fruits.js"

var Engine = Matter.Engine,
Render = Matter.Render,
Runner = Matter.Runner,
Bodies = Matter.Bodies,
World = Matter.World,
Body = Matter.Body;

//엔진선언
const engine = Engine.create();

//렌더 선언
const render =  Render.create({
    engine,
    element: document.body,
    options: {

        wireframes : false ,
        background : '#F7F4C8',
        width:620,
        height:850,
    }    
})

//벽배치를 위한 월드선언

const world = engine.world;

const leftWall = Bodies.rectangle(15,395,30,790,{
    isStatic: true, 
    render : { fillStyle: '#E6B143'}
                      
})
const rightWall = Bodies.rectangle(605,395,30,790,{
    isStatic: true, 
    render : { fillStyle: '#E6B143'}
                      
})

const ground = Bodies.rectangle(310,820,620,60,{
    isStatic: true, 
    render : { fillStyle: '#E6B143'}
                      
})

const top = Bodies.rectangle(310,150,620,2,{
    isStatic: true, 
    isSensor: true,
    render : { fillStyle: '#E6B143'}
                      
})


World.add(world,[leftWall,rightWall,ground,top]);

Render.run(render);
Runner.run(engine);
//현재 과일 값을 저장하는 변수 
let currentBody = null;
let currentFruit = null;

//키 조작을조작하는 변스

let disableAction = false;


function addFruit(){

    const index = Math.floor(Math.random() * 5);

    const fruit = FRUITS[index];

    const body = Bodies.circle(300,50,fruit.radius,{

        index : index,
        isSleeping : true,
        render:{
            sprite : {texture: `${fruit.name}.png`}
        },
        restitution : 0.4,
    });

    currentBody= body;
    currentFruit = fruit;

    World.add(world, body);
}
// 키보드 입력 받기
window.onkeydown = (event) => {

    if(disableAction)
    return;
    switch(event.code) {
        case "KeyA":
            Body.setPosition(currentBody, {
                x: currentBody.position.x - 10,
                y: currentBody.position.y,
            })
            break;

         case "KeyD":
              Body.setPosition(currentBody, {
                  x: currentBody.position.x + 10,
                  y: currentBody.position.y,
             })
           break;

           case "KeyS":
           currentBody.isSleeping = false;

           disableAction = true;

           setTimeout(()=>{
            addFruit();
            disableAction = false;
           },1000)
           break;
    }
}

addFruit();