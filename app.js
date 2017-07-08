var width = 400;
var height = 400;

var canvas = document.getElementById('canvas');
var out = document.getElementById('out');
var application = new PIXI.Application({
  view: canvas,
  width: width,
  height: height,
  backgroundColor: 0x888888
});

var stage = application.stage;

var container = new PIXI.Container();
stage.addChild(container);

var plane = new PIXI.Graphics();
container.addChild(plane);
plane.beginFill(0xff0088, 1);
plane.drawRect(0, 0, width, height);

var lastLog = [];
var log = [];

var pointerHandler = event => {
  var type = event.type;
  var identifier = event.data.identifier;
  if (type === lastLog[0] && identifier === lastLog[1]) {
    log.push(1);
    return;
  }
  var currentLog = [type, identifier];
  log.push(currentLog);
  lastLog = currentLog;
};

var pointerEndHandler = event => {
  var json = JSON.stringify(log);
  out.innerText = json;
  prompt('copy this text', json);
};

container.interactive = true;
container.on('pointerdown', pointerHandler);
container.on('pointermove', pointerHandler);
container.on('pointerup', pointerHandler);
container.on('pointerout', pointerHandler);
container.on('pointerover', pointerHandler);
container.on('pointertap', pointerHandler);
container.on('pointerupoutside', pointerHandler);
container.on('pointercancel', pointerHandler);

container.on('pointercancel', pointerEndHandler);
container.on('pointerup', pointerEndHandler);
container.on('pointerupoutside', pointerEndHandler);
