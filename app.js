var width = 600;
var height = 600;

var canvas = document.getElementById('canvas');
var application = new PIXI.Application({
  view: canvas,
  width: width,
  height: height,
  backgroundColor: 0x888888
});

var stage = application.stage;

var plane = new PIXI.Graphics();
stage.addChild(plane);
plane.beginFill(0xff0088, 1);
plane.drawRect(0, 0, width, height);
