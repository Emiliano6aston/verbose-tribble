import { Application, Assets, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 640,
	height: 480
});

Assets.add("myDino", "./dino.png");
Assets.add("mySample", "./sample.png");

Assets.load(["myDino", "mySample"]).then(()=>{
	
	const clampy: Sprite = Sprite.from("myDino");
	console.log("Hola");
	app.stage.addChild(clampy);

});

//clampy.anchor.set(0.5);

//clampy.x = 0; //app.screen.width / 2;
//clampy.y = 0; //app.screen.height / 2;