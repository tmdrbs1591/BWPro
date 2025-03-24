
var Engine = Matter.Engine,
Render = Matter.Render,
Runner = Matter.Runner,
Bodies = Matter.Bodies,
World = Matter.World;

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
    render : { fillStyle: '#E6B143'}
                      
})


World.add(world,[leftWall,rightWall,ground,top]);

Render.run(render);
Runner.run(engine);