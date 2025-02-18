(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[0,0,1885,1080],[0,1082,694,1080],[696,1082,694,1080],[1392,1089,694,1080],[2542,1089,385,473],[2088,1537,431,305],[2929,1515,588,284],[3825,2075,178,199],[2880,1801,198,582],[3824,1104,264,347],[2929,1089,459,386],[3825,1818,210,255],[2379,1929,206,256],[2587,1929,180,225],[3519,1515,445,301],[2521,1564,357,363],[3375,1818,296,288],[1887,0,1651,1087],[3673,1818,150,564],[3540,553,429,549],[3540,0,436,551],[3080,1801,293,360],[2088,1089,452,446],[3390,1104,432,409],[2088,1844,289,235]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.bg = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bin_green = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bin_red = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bin_yellow = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.compostable_cup = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.landfill_candywrapper = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.landfill_chips = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.landfill_plasticbag = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.landfill_straw = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.medal = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.organic_burger = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.organic_core = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.organic_egg = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.organic_paper = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.organic_peel = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.organic_sandwich1 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.organic_sandwich2 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.organic_teabag = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.recycle_bottle = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.recycle_can = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.recycle_fruitbox = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.recycle_milk = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.recycle_tincan = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.recycle_yoghurt = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.tick = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.tick();
	this.instance.setTransform(-47.35,-38.5,0.3276,0.3276);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.3,-38.5,94.69999999999999,77);


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.tick();
	this.instance.setTransform(-47.35,-38.5,0.3276,0.3276);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.3,-38.5,94.69999999999999,77);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Al7F8QieidABjfQgBjeCeidQCdieDeABQDfgBCdCeQCeCdgBDeQABDfieCdQidCejfgBQjeABidieg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-53.7,-53.7,107.5,107.5), null);


(lib.roll2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.organic_sandwich2();
	this.instance.setTransform(-40.4,-39.3,0.273,0.273);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.roll2, new cjs.Rectangle(-40.4,-39.3,80.8,78.6), null);


(lib.plasticstraw_bg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF33").s().p("AkJGLQhvijAAjoQAAjmBvikQBuikCbAAQCcAABuCkQBvCkAADmQAADohvCjQhuCkicAAQibAAhuikg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.plasticstraw_bg, new cjs.Rectangle(-37.7,-55.9,75.4,111.8), null);


(lib.paper = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.organic_paper();
	this.instance.setTransform(-31.05,-65.05,0.4257,0.4257,12.5043);

	this.instance_1 = new lib.organic_paper();
	this.instance_1.setTransform(-24.6,-56.15,0.4257,0.4257,14.9972);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.paper, new cjs.Rectangle(-51.8,-65,101.19999999999999,121.2), null);


(lib.milkbox = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.recycle_milk();
	this.instance.setTransform(-42.95,-44.65,0.2669,0.2669,-4.7354);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.milkbox, new cjs.Rectangle(-42.9,-51.1,85.9,102.2), null);


(lib.fruitbox = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.recycle_fruitbox();
	this.instance.setTransform(-20.95,-48.5,0.1504,0.1504,14.9947);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fruitbox, new cjs.Rectangle(-42.4,-48.5,84.8,97), null);


(lib.egg_bg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF33").s().p("AkTFYQhziPAAjJQAAjJBziOQByiOChAAQCiAAByCOQBzCOAADJQAADJhzCPQhyCOiiAAQihAAhyiOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.1,-48.6,78.2,97.2);


(lib.can = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.recycle_can();
	this.instance.setTransform(-39.1,-50,0.1823,0.1823);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.can, new cjs.Rectangle(-39.1,-50,78.2,100.1), null);


(lib.binhit_red = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3ybNMAAAg2ZMAvlAAAMAAAA2Zg");
	this.shape.setTransform(0.025,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.binhit_red, new cjs.Rectangle(-152.3,-174.1,304.70000000000005,348.2), null);


(lib.banana_bg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmLFOQikiLAAjDQAAjDCkiKQCkiKDnAAQDoAACjCKQClCKAADDQAADDilCLQijCKjoAAQjnAAikiKg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.banana_bg, new cjs.Rectangle(-55.9,-47.2,111.9,94.4), null);


(lib.apple_bg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlIFJQiIiIAAjBQAAjACIiIQCIiIDAAAQDBAACICIQCJCIgBDAQABDBiJCIQiICJjBgBQjAABiIiJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.apple_bg, new cjs.Rectangle(-46.5,-46.5,93.1,93.1), null);


(lib.yoghurt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.recycle_yoghurt();
	this.instance.setTransform(-36.45,-34.5,0.1687,0.1687);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.instance_1 = new lib.apple_bg();
	this.instance_1.setTransform(-0.55,-1.1,0.7648,0.7648);
	this.instance_1.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.yoghurt, new cjs.Rectangle(-36.4,-36.7,72.9,71.2), null);


(lib.tincan = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.recycle_tincan();
	this.instance.setTransform(-0.45,-65.85,0.2074,0.2074,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.instance_1 = new lib.Symbol1();
	this.instance_1.setTransform(-3,-1);
	this.instance_1.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tincan, new cjs.Rectangle(-65.8,-65.8,131.7,131.7), null);


(lib.tick_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(55));

	// Layer_1
	this.redbin_tick = new lib.Tween1();
	this.redbin_tick.name = "redbin_tick";
	this.redbin_tick.alpha = 0.0117;

	this.redbin_tick_1 = new lib.Tween2();
	this.redbin_tick_1.name = "redbin_tick_1";
	this.redbin_tick_1.setTransform(0.35,-40.5);
	this.redbin_tick_1.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.redbin_tick}]}).to({state:[{t:this.redbin_tick}]},1).to({state:[{t:this.redbin_tick}]},1).to({state:[{t:this.redbin_tick}]},1).to({state:[{t:this.redbin_tick}]},1).to({state:[{t:this.redbin_tick}]},1).to({state:[{t:this.redbin_tick}]},1).to({state:[{t:this.redbin_tick}]},1).to({state:[{t:this.redbin_tick}]},1).to({state:[{t:this.redbin_tick}]},1).to({state:[{t:this.redbin_tick}]},1).to({state:[{t:this.redbin_tick}]},1).to({state:[{t:this.redbin_tick}]},1).to({state:[{t:this.redbin_tick}]},1).to({state:[{t:this.redbin_tick}]},1).to({state:[{t:this.redbin_tick}]},1).to({state:[{t:this.redbin_tick}]},1).to({state:[{t:this.redbin_tick}]},1).to({state:[{t:this.redbin_tick}]},1).to({state:[{t:this.redbin_tick}]},1).to({state:[{t:this.redbin_tick}]},1).to({state:[{t:this.redbin_tick}]},1).to({state:[{t:this.redbin_tick}]},1).to({state:[{t:this.redbin_tick}]},1).to({state:[{t:this.redbin_tick}]},1).to({state:[{t:this.redbin_tick}]},1).to({state:[{t:this.redbin_tick}]},1).to({state:[{t:this.redbin_tick}]},1).to({state:[{t:this.redbin_tick}]},1).to({state:[{t:this.redbin_tick}]},1).to({state:[{t:this.redbin_tick}]},1).to({state:[{t:this.redbin_tick}]},1).to({state:[{t:this.redbin_tick}]},1).to({state:[{t:this.redbin_tick}]},1).to({state:[{t:this.redbin_tick}]},1).to({state:[{t:this.redbin_tick}]},1).to({state:[{t:this.redbin_tick}]},1).to({state:[{t:this.redbin_tick}]},1).to({state:[{t:this.redbin_tick}]},1).to({state:[{t:this.redbin_tick}]},1).to({state:[{t:this.redbin_tick}]},1).to({state:[{t:this.redbin_tick}]},1).to({state:[{t:this.redbin_tick}]},1).to({state:[{t:this.redbin_tick}]},1).to({state:[{t:this.redbin_tick}]},1).to({state:[{t:this.redbin_tick}]},1).to({state:[{t:this.redbin_tick}]},1).to({state:[{t:this.redbin_tick}]},1).to({state:[{t:this.redbin_tick}]},1).to({state:[{t:this.redbin_tick}]},1).to({state:[{t:this.redbin_tick}]},1).to({state:[{t:this.redbin_tick}]},1).to({state:[{t:this.redbin_tick}]},1).to({state:[{t:this.redbin_tick}]},1).to({state:[{t:this.redbin_tick_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.redbin_tick).wait(1).to({alpha:0},0).wait(1).to({x:0.0165,y:-1.4548,alpha:0.3306},0).wait(1).to({x:0.0332,y:-2.923,alpha:0.6643},0).wait(1).to({x:0.05,y:-4.4,alpha:1},0).wait(1).to({x:0.0627,y:-5.8763},0).wait(1).to({x:0.0754,y:-7.3509},0).wait(1).to({x:0.088,y:-8.8185},0).wait(1).to({x:0.1005,y:-10.2738},0).wait(1).to({x:0.1129,y:-11.7118},0).wait(1).to({x:0.125,y:-13.1278},0).wait(1).to({x:0.137,y:-14.5174},0).wait(1).to({x:0.1487,y:-15.8768},0).wait(1).to({x:0.1601,y:-17.2025},0).wait(1).to({x:0.1711,y:-18.4917},0).wait(1).to({x:0.1819,y:-19.7421},0).wait(1).to({x:0.1923,y:-20.9517},0).wait(1).to({x:0.2023,y:-22.1194},0).wait(1).to({x:0.212,y:-23.2441},0).wait(1).to({x:0.2213,y:-24.3253},0).wait(1).to({x:0.2302,y:-25.363},0).wait(1).to({x:0.2387,y:-26.3572},0).wait(1).to({x:0.2469,y:-27.3083},0).wait(1).to({x:0.2547,y:-28.2169},0).wait(1).to({x:0.2622,y:-29.0839},0).wait(1).to({x:0.2693,y:-29.9099},0).wait(1).to({x:0.276,y:-30.6962},0).wait(1).to({x:0.2825,y:-31.4437},0).wait(1).to({x:0.2886,y:-32.1535},0).wait(1).to({x:0.2944,y:-32.8269},0).wait(1).to({x:0.2998,y:-33.4649},0).wait(1).to({x:0.305,y:-34.0687},0).wait(1).to({x:0.3099,y:-34.6395},0).wait(1).to({x:0.3146,y:-35.1784},0).wait(1).to({x:0.3189,y:-35.6866},0).wait(1).to({x:0.3231,y:-36.1651},0).wait(1).to({x:0.3269,y:-36.615},0).wait(1).to({x:0.3305,y:-37.0373},0).wait(1).to({x:0.334,y:-37.433},0).wait(1).to({x:0.3371,y:-37.8031},0).wait(1).to({x:0.3401,y:-38.1485},0).wait(1).to({x:0.3429,y:-38.47},0).wait(1).to({x:0.3454,y:-38.7686},0).wait(1).to({x:0.3478,y:-39.045},0).wait(1).to({x:0.35,y:-39.3},0).wait(1).to({y:-39.4754,alpha:0.8555},0).wait(1).to({y:-39.6375,alpha:0.722},0).wait(1).to({y:-39.7867,alpha:0.5992},0).wait(1).to({y:-39.9233,alpha:0.4866},0).wait(1).to({y:-40.0478,alpha:0.3841},0).wait(1).to({y:-40.1605,alpha:0.2913},0).wait(1).to({y:-40.2617,alpha:0.208},0).wait(1).to({y:-40.3518,alpha:0.1338},0).wait(1).to({y:-40.4311,alpha:0.0684},0).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.3,-79,95,117.5);


(lib.teabag = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.organic_teabag();
	this.instance.setTransform(-43.4,-28.55,0.0526,0.0526);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.instance_1 = new lib.apple_bg();
	this.instance_1.setTransform(0.05,-0.6,0.7583,0.7583);
	this.instance_1.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.teabag, new cjs.Rectangle(-43.4,-35.9,86.9,70.6), null);


(lib.roll1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.organic_sandwich1();
	this.instance.setTransform(-48.75,38.1,0.2431,0.2431,-83.4969);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.instance_1 = new lib.apple_bg();
	this.instance_1.setTransform(-0.55,-1.15,0.6735,1);
	this.instance_1.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.roll1, new cjs.Rectangle(-48.7,-48.1,97.5,96.2), null);


(lib.plasticstraw = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.landfill_straw();
	this.instance.setTransform(-16.15,-47.5,0.1632,0.1632);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.instance_1 = new lib.plasticstraw_bg();
	this.instance_1.setTransform(4,-2.35);
	this.instance_1.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.plasticstraw, new cjs.Rectangle(-33.7,-58.2,75.4,111.80000000000001), null);


(lib.plasticbottle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.recycle_bottle();
	this.instance.setTransform(8.2,-53.95,0.2655,0.1802,29.9988);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.instance_1 = new lib.apple_bg();
	this.instance_1.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.plasticbottle, new cjs.Rectangle(-46.5,-53.9,93.1,107.9), null);


(lib.plasticbag = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.landfill_plasticbag();
	this.instance.setTransform(-53.95,-60.3,0.6062,0.6062);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.instance_1 = new lib.apple_bg();
	this.instance_1.setTransform(6.2,-2.25,0.7583,1);
	this.instance_1.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.plasticbag, new cjs.Rectangle(-53.9,-60.3,107.9,120.69999999999999), null);


(lib.egg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.organic_egg();
	this.instance.setTransform(-39.1,-48.55,0.3796,0.3796);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.instance_1 = new lib.egg_bg("synched",0);
	this.instance_1.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.egg, new cjs.Rectangle(-39.1,-48.6,78.2,97.2), null);


(lib.cup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.compostable_cup();
	this.instance.setTransform(-39,-44,0.193,0.193);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.instance_1 = new lib.apple_bg();
	this.instance_1.setTransform(-1.65,0.05,0.7583,1);
	this.instance_1.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cup, new cjs.Rectangle(-39,-46.5,74.3,93.8), null);


(lib.chocwrapper = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.landfill_candywrapper();
	this.instance.setTransform(-52.15,-36.9,0.242,0.242);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.instance_1 = new lib.apple_bg();
	this.instance_1.setTransform(0.05,-0.55);
	this.instance_1.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.chocwrapper, new cjs.Rectangle(-52.1,-47.1,104.30000000000001,93.1), null);


(lib.chippacket = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.landfill_chips();
	this.instance.setTransform(-65,-19,0.2074,0.2074,-9.4928);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.instance_1 = new lib.apple_bg();
	this.instance_1.setTransform(0,0,1.2299,0.7583);
	this.instance_1.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.chippacket, new cjs.Rectangle(-65,-39.1,130,78.2), null);


(lib.burger = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.organic_burger();
	this.instance.setTransform(-45.7,-21.35,0.1683,0.1683,-14.9936);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.instance_1 = new lib.Symbol1();
	this.instance_1.setTransform(0,0,1,0.907);
	this.instance_1.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.burger, new cjs.Rectangle(-53.7,-48.7,107.5,97.5), null);


(lib.bin_yellow_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bin_yellow();
	this.instance.setTransform(-150,-231.05,0.4323,0.4279);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.instance_1 = new lib.binhit_red();
	this.instance_1.setTransform(2.3,-59.35,1,1.1839);
	this.instance_1.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bin_yellow_1, new cjs.Rectangle(-150,-265.4,304.7,496.5), null);


(lib.bin_red_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bin_red();
	this.instance.setTransform(-150,-233.45,0.4323,0.4323);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.instance_1 = new lib.binhit_red();
	this.instance_1.setTransform(2.3,-59.35,1,1.1953);
	this.instance_1.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bin_red_1, new cjs.Rectangle(-150,-267.4,304.7,500.9), null);


(lib.bin_green_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bin_green();
	this.instance.setTransform(-150,-233.45,0.4323,0.4323);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.instance_1 = new lib.binhit_red();
	this.instance_1.setTransform(2.3,-59.35,1,1.1724);
	this.instance_1.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bin_green_1, new cjs.Rectangle(-150,-263.4,304.7,496.9), null);


(lib.banana = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.organic_peel();
	this.instance.setTransform(-63.55,-43,0.2857,0.2858);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.instance_1 = new lib.banana_bg();
	this.instance_1.setTransform(1.95,13.05);
	this.instance_1.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.banana, new cjs.Rectangle(-63.5,-43,127.1,103.3), null);


(lib.apple = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.organic_core();
	this.instance.setTransform(-39.1,-47.45,0.3724,0.3724);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.instance_1 = new lib.apple_bg();
	this.instance_1.setTransform(0.95,4.9);
	this.instance_1.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.apple, new cjs.Rectangle(-45.6,-47.4,93.1,98.9), null);


// stage content:
(lib._2025_Interactive110241 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {game:0,certificate:1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1];
	// timeline functions:
	this.frame_0 = function() {
		// Initialize the frame
		this.stop();
		
		// Define constants for better readability
		const MOVE_SPEED = 1.5; // Speed at which the objects move left
		const FAST_MOVE_SPEED = 30; // Speed to quickly move to the right side
		const BUFFER_SPACE = 20; // Minimum space between objects
		const START_Y_POSITION = 130; // Starting Y position 130 pixels lower from the top
		const BOB_AMOUNT = 10; // Amount to bob up and down
		const MIN_BOB_TIME = 400; // Minimum time for one bob cycle
		const MAX_BOB_TIME = 800; // Maximum time for one bob cycle
		
		// Define variables and initialize them
		var score = 0;
		var itemsRemaining = 0; // Counter for items remaining
		var attempts = 1; // Counter for attempts
		var offsetX, offsetY;
		var draggedObject = null;
		var dragStartTime = 0;
		var originalPositions = {};
		var hoveredBin = null;
		var isPaused = false; // Game paused flag
		
		// Define bins and their positions
		var bins = {
		    bin_red: this.bin_red,
		    bin_yellow: this.bin_yellow,
		    bin_green: this.bin_green
		};
		
		var binNames = {
		    bin_red: 'landfill',
		    bin_yellow: 'recycling',
		    bin_green: 'organics'
		};
		
		var binItems = {
		    bin_red: ['plasticbag', 'chippacket', 'plasticstraw', 'chocwrapper'],
		    bin_yellow: ['tincan', 'plasticbottle', 'can', 'fruitbox', 'milkbox', 'yoghurt', 'paper'],
		    bin_green: ['roll1', 'cup', 'burger', 'egg', 'banana', 'apple', 'roll2', 'teabag', 'paper']
		};
		
		var itemDescriptions = {
		    egg: 'Egg shell',
		    plasticbag: 'Plastic bag',
		    roll1: 'Sandwich',
		    cup: 'Biodegradable cup',
		    tincan: 'Tin can',
		    burger: 'Burger',
		    plasticbottle: 'Plastic bottle',
		    banana: 'Banana peel',
		    chippacket: 'Chip packet',
		    apple: 'Apple core',
		    roll2: 'Sandwich',
		    can: 'Drink can',
		    paper: 'Paper',
		    fruitbox: 'Fruit box',
		    plasticstraw: 'Plastic straw',
		    milkbox: 'Milk container',
		    chocwrapper: 'Chocolate wrapper',
		    yoghurt: 'Yoghurt container',
		    teabag: 'Teabag'
		};
		
		// Setup the canvas and sounds
		createjs.Touch.enable(stage);
		stage.mouseMoveOutside = true;
		
		// Define the objects array with all movie clip symbols
		var draggableObjects = [
		    this.egg,
		    this.plasticbag,
		    this.roll1,
		    this.cup,
		    this.tincan,
		    this.burger,
		    this.plasticbottle,
		    this.banana,
		    this.chippacket,
		    this.apple,
		    this.roll2,
		    this.can,
		    this.paper,
		    this.fruitbox,
		    this.plasticstraw,
		    this.milkbox,
		    this.chocwrapper,
		    this.yoghurt,
		    this.teabag
		];
		
		// Initialize positions and set spacing
		var initialX = 0;
		itemsRemaining = draggableObjects.length; // Set initial items remaining count
		draggableObjects.forEach(function(object) {
		    object.x = initialX;
		    object.y = START_Y_POSITION; // Set Y position 120 pixels lower from the top
		    object.respawned = false; // Initialize the respawned flag
		    initialX += object.getBounds().width + BUFFER_SPACE; // Spacing between objects
		    originalPositions[object.name] = { x: object.x, y: object.y };
		    object.initialY = object.y; // Store the initial Y position for bobbing
		    startBobbing(object); // Start bobbing animation
		});
		
		// Add event listeners for all draggable objects
		draggableObjects.forEach(function(object) {
		    object.on("mousedown", startDrag);
		    object.on("pressmove", dragObject);
		    object.on("pressup", stopDrag);
		});
		
		// Add ticker for continuous movement
		createjs.Ticker.framerate = 60;
		createjs.Ticker.addEventListener("tick", handleTick);
		
		// Display text for Attempts
		var attemptsText = new createjs.Text("Attempts: " + attempts, "30px 'Caveat Brush'", "#000000");
		attemptsText.textAlign = "left"; // left-align the text
		attemptsText.x = 50; // Position it left
		attemptsText.y = 15;
		stage.addChild(attemptsText);
		
		// Display text for items remaining
		var itemsRemainingText = new createjs.Text("Waste remaining: " + itemsRemaining, "30px 'Caveat Brush'", "#000000");
		itemsRemainingText.textAlign = "left"; // Align to match the attempts text
		itemsRemainingText.x = 700; // Position it right, assuming 1024px width
		itemsRemainingText.y = attemptsText.y;
		stage.addChild(itemsRemainingText);
		
		// Function to update text position considering the stage scaling
		function updateTextPosition(text, yOffset = 0) {
		    var stageScaleX = stage.scaleX || 1;
		    var stageScaleY = stage.scaleY || 1;
		    text.x = (stage.canvas.width / 2) / stageScaleX; // Center horizontally
		    text.y = ((stage.canvas.height / 2) + yOffset) / stageScaleY; // Center vertically with offset
		}
		
		// Display initial instruction text
		var instructionText = new createjs.Text("Drag items into correct bin", "40px 'Caveat Brush'", "#000000");
		instructionText.textAlign = "center";
		instructionText.textBaseline = "middle";
		updateTextPosition(instructionText, 0);
		instructionText.alpha = 1;
		stage.addChild(instructionText);
		
		// Hide the restart button initially
		var restartButton = new createjs.Container();
		var restartButtonBackground = new createjs.Shape();
		restartButtonBackground.graphics.beginFill("#e6094b").drawRoundRect(0, 0, 200, 50, 10);
		var restartButtonText = new createjs.Text("RESTART", "bold 30px 'Caveat Brush'", "#FFFFFF");
		restartButtonText.textAlign = "center";
		restartButtonText.textBaseline = "middle";
		restartButtonText.x = 100;
		restartButtonText.y = 25;
		restartButton.addChild(restartButtonBackground, restartButtonText);
		restartButton.regX = 100;
		restartButton.regY = 25;
		restartButton.cursor = "pointer";
		restartButton.visible = false;
		restartButton.on("click", resetGame);
		stage.addChild(restartButton);
		
		// Functions for dragging functionality
		function startDrag(event) {
		    if (isPaused) return;
		
		    // Fade out instruction text when an item is dragged
		    createjs.Tween.get(instructionText).to({ alpha: 0 }, 500);
		
		    draggedObject = event.currentTarget;
		    dragStartTime = createjs.Ticker.getTime();
		    var localCoords = draggedObject.globalToLocal(event.stageX, event.stageY);
		    offsetX = localCoords.x;
		    offsetY = localCoords.y;
		    // Update original position to the current position
		    originalPositions[draggedObject.name] = { x: draggedObject.x, y: draggedObject.y };
		    createjs.Tween.removeTweens(draggedObject); // Stop bobbing when dragging
		}
		
		function dragObject(event) {
		    if (isPaused) return;
		
		    var localCoords = draggedObject.parent.globalToLocal(event.stageX, event.stageY);
		    draggedObject.x = localCoords.x - offsetX;
		    draggedObject.y = localCoords.y - offsetY;
		    stage.update();
		
		    checkHoverBin(draggedObject);
		}
		
		function stopDrag(event) {
		    if (isPaused) return;
		
		    var object = event.currentTarget;
		
		    if (hoveredBin) {
		        revertBinSize(hoveredBin);
		        hoveredBin = null;
		    }
		
		    if (!checkBin(object)) {
		        // If the item is not placed in a bin, animate it back to its original position
		        createjs.Tween.get(object).to({
		            x: originalPositions[object.name].x,
		            y: originalPositions[object.name].y
		        }, 500, createjs.Ease.quadOut).call(function() {
		            originalPositions[object.name] = { x: object.x, y: object.y };
		            object.initialY = object.y; // Update initialY for bobbing
		            startBobbing(object); // Restart bobbing after stopping drag
		        });
		    } else {
		        object.initialY = object.y; // Update initialY for bobbing
		        startBobbing(object); // Restart bobbing after stopping drag
		    }
		
		    object.alpha = 1; // Reset item opacity
		    draggedObject = null;
		}
		
		// Function to handle continuous movement
		function handleTick(event) {
		    if (isPaused) return;
		
		    var stageWidth = stage.canvas.width;
		
		    draggableObjects.forEach(function(object) {
		        if (object !== draggedObject && object.parent) { // Continue moving all objects except the one being dragged and those already removed
		            var moveSpeed = MOVE_SPEED;
		
		            // Check if the object is offscreen before activating fast speed
		            if (object.respawned && object.x < -object.getBounds().width) {
		                var noObjectsToLeft = draggableObjects.every(function(otherObject) {
		                    return otherObject === object || !otherObject.parent || otherObject.x >= object.x;
		                });
		
		                if (noObjectsToLeft) {
		                    moveSpeed = FAST_MOVE_SPEED;
		                }
		            }
		
		            object.x -= moveSpeed;
		            if (object.x < -object.getBounds().width) {
		                // Move to the right of the rightmost object
		                var rightmostX = Math.max.apply(null, draggableObjects.map(function(obj) {
		                    return obj.parent ? obj.x + obj.getBounds().width : 0;
		                }));
		                object.x = rightmostX + BUFFER_SPACE;
		                object.respawned = true; // Set the respawned flag
		                object.initialY = START_Y_POSITION; // Reset initialY for bobbing
		            }
		        }
		    });
		    stage.update();
		}
		
		// Function to start bobbing animation
		function startBobbing(object) {
		    var bobTime = Math.random() * (MAX_BOB_TIME - MIN_BOB_TIME) + MIN_BOB_TIME; // Randomize bob time
		    function bobUp() {
		        createjs.Tween.get(object).to({ y: object.initialY - BOB_AMOUNT }, bobTime, createjs.Ease.sineInOut).call(bobDown);
		    }
		    function bobDown() {
		        createjs.Tween.get(object).to({ y: object.initialY + BOB_AMOUNT }, bobTime, createjs.Ease.sineInOut).call(bobUp);
		    }
		    bobUp(); // Start the bobbing animation
		}
		
		// Function to check if the object is released over a bin
		function checkBin(object) {
		    var objectBounds = object.getTransformedBounds();
		
		    for (var bin in bins) {
		        var binBounds = bins[bin].getTransformedBounds();
		
		        if (objectBounds.x + objectBounds.width / 2 > binBounds.x &&
		            objectBounds.x + objectBounds.width / 2 < binBounds.x + binBounds.width &&
		            objectBounds.y + objectBounds.height / 2 > binBounds.y &&
		            objectBounds.y + objectBounds.height / 2 < binBounds.y + binBounds.height) {
		
		            if (binItems[bin].includes(object.name)) {
		                score++;
		                itemsRemaining--;
		                console.log("Correct bin! Score: " + score);
		                // Make the object invisible
		                object.visible = false;
		                showScoreText("CORRECT!");
		                updateItemsRemainingText(); // Update items remaining count
		                checkCompletion();
		
		                // Flash the bin
		                flashBin(bins[bin]);
		
		                return true;
		            } else {
		                console.log("Game Over! Incorrect bin.");
		                // Display contamination explanation and pause game
		                showContaminationText(object, bin);
		                return false;
		            }
		        }
		    }
		    return false;
		}
		
		// Function to flash the bin
		function flashBin(bin) {
		    createjs.Tween.get(bin)
		        .to({ alpha: 0 }, 100) // Fade out quickly
		        .to({ alpha: 1 }, 100) // Fade back in
		        .to({ alpha: 0 }, 100) // Fade out again
		        .to({ alpha: 1 }, 100) // Fade back in
		        .to({ alpha: 0 }, 100) // Fade out one more time
		        .to({ alpha: 1 }, 100); // Fade back in
		}
		
		// Function to check if an item is hovering over a bin
		function checkHoverBin(object) {
		    if (isPaused) return;
		
		    var hovered = false;
		    for (var bin in bins) {
		        var binBounds = bins[bin].getTransformedBounds();
		        var objectBounds = object.getTransformedBounds();
		
		        if (objectBounds.x + objectBounds.width / 2 > binBounds.x &&
		            objectBounds.x + objectBounds.width / 2 < binBounds.x + binBounds.width &&
		            objectBounds.y + objectBounds.height / 2 > binBounds.y &&
		            objectBounds.y + objectBounds.height / 2 < binBounds.y + binBounds.height) {
		
		            enlargeBin(bins[bin]);
		            object.alpha = 0.5;
		            hovered = true;
		            hoveredBin = bins[bin];
		        }
		    }
		
		    if (!hovered && hoveredBin) {
		        revertBinSize(hoveredBin);
		        object.alpha = 1;
		        hoveredBin = null;
		    }
		}
		
		// Function to enlarge a bin
		function enlargeBin(bin) {
		    bin.scaleX = 1.1;
		    bin.scaleY = 1.1;
		}
		
		// Function to revert bin size
		function revertBinSize(bin) {
		    bin.scaleX = 1;
		    bin.scaleY = 1;
		}
		
		// Function to pause the game
		function pauseGame() {
		    isPaused = true;
		}
		
		// Function to reset the game
		function resetGame() {
		    isPaused = false;
		    itemsRemaining = draggableObjects.length;
		    score = 0;
		    attempts++; // Increment attempts by 1
		    attemptsText.text = "Attempts: " + attempts; // Update the attempts display text
		
		    // Reset positions and visibility of all items
		    var initialX = 0;
		    draggableObjects.forEach(function(object) {
		        object.visible = true;
		        object.alpha = 1; // Reset the alpha
		        object.x = initialX;
		        object.y = START_Y_POSITION; // Reset Y position
		        object.respawned = false;
		        initialX += object.getBounds().width + BUFFER_SPACE; // Reset spacing between objects
		        originalPositions[object.name] = { x: object.x, y: object.y };
		        object.initialY = object.y; // Store the initial Y position for bobbing
		        createjs.Tween.removeTweens(object); // Remove existing tweens
		        startBobbing(object); // Restart bobbing animation
		    });
		
		    updateItemsRemainingText();
		    if (contaminationText) stage.removeChild(contaminationText);
		    if (contaminationHeaderText) stage.removeChild(contaminationHeaderText);
		    restartButton.visible = false; // Hide the restart button
		    stage.update();
		}
		
		// Function to display "CONTAMINATION!" text with an explanation
		var contaminationText;
		var contaminationHeaderText;
		function showContaminationText(object, bin) {
		    pauseGame();
		    object.visible = false; // Make the object invisible
		    var correctBin = Object.keys(binItems).find(key => binItems[key].includes(object.name));
		    var message = itemDescriptions[object.name] + " should not go into " + binNames[bin] + ", put it in " + binNames[correctBin] + ".";
		
		    // Add large CONTAMINATION! header text
		    contaminationHeaderText = new createjs.Text("CONTAMINATION!", "bold 50px 'Caveat Brush'", "#FF0000");
		    contaminationHeaderText.textAlign = "center";
		    contaminationHeaderText.textBaseline = "middle";
		    updateTextPosition(contaminationHeaderText, -150); // Move up 50 pixels more
		    contaminationHeaderText.alpha = 0;
		
		    stage.addChild(contaminationHeaderText);
		
		    createjs.Tween.get(contaminationHeaderText)
		        .to({ alpha: 1 }, 500);
		
		    // Add contamination message text
		    contaminationText = new createjs.Text(message, "bold 30px 'Caveat Brush'", "#FF0000");
		    contaminationText.textAlign = "center";
		    contaminationText.textBaseline = "middle";
		    updateTextPosition(contaminationText, -50); // Move up 50 pixels more
		    contaminationText.alpha = 0;
		
		    stage.addChild(contaminationText);
		
		    createjs.Tween.get(contaminationText)
		        .to({ alpha: 1 }, 500);
		
		    // Center the restart button below the contamination text
		    restartButton.visible = true;
		    updateTextPosition(restartButton, 50); // Move up 50 pixels more
		}
		
		// Function to display "CORRECT!" text
		function showScoreText(scoreText) {
		    var scoreDisplay = new createjs.Text(scoreText, "bold 50px 'Caveat Brush'", "#2cc934");
		    scoreDisplay.textAlign = "center";
		    scoreDisplay.textBaseline = "middle";
		    updateTextPosition(scoreDisplay);
		    scoreDisplay.alpha = 0;
		
		    stage.addChild(scoreDisplay);
		
		    createjs.Tween.get(scoreDisplay)
		        .to({ alpha: 1, y: scoreDisplay.y - 100 }, 1000)  // Fade in and move up
		        .wait(500)
		        .to({ alpha: 0 }, 500)  // Fade out
		        .call(function() {
		            stage.removeChild(scoreDisplay);
		        });
		}
		
		// Function to update the items remaining text
		function updateItemsRemainingText() {
		    itemsRemainingText.text = "Waste remaining: " + itemsRemaining;
		}
		
		// Function to check if all items are placed in bins
		function checkCompletion() {
		    if (itemsRemaining <= 0) {
		        var completionText = new createjs.Text("100% Correct!", "bold 60px 'Caveat Brush'", "#2cc934");
		        completionText.textAlign = "center";
		        completionText.textBaseline = "middle";
		        updateTextPosition(completionText);
		        completionText.alpha = 0;
		        stage.addChild(completionText);
		
		        createjs.Tween.get(completionText)
		            .to({ alpha: 1 }, 500)
		            .wait(2000)
		            .to({ alpha: 0 }, 500)
		            .call(function() {
		                stage.removeChild(completionText);
		                itemsRemainingText.visible = false;
		                stage.play();
		            });
		    }
		}
	}
	this.frame_1 = function() {
		// Initialize the frame
		this.stop();
		
		// CreateJS stage and canvas
		var stage = this.stage;
		
		// Function to update text position considering the stage scaling
		function updateTextPosition(text, x, y) {
		    text.x = x;
		    text.y = y;
		}
		
		// Get the current date
		var currentDate = new Date().toLocaleDateString();
		
		// Add the text "This certifies that"
		var certificateTextTop = new createjs.Text("This certifies that", "40px 'Caveat Brush'", "#000000");
		certificateTextTop.textAlign = "center";
		updateTextPosition(certificateTextTop, 512, 300); // Center horizontally and position at 300
		stage.addChild(certificateTextTop);
		
		var certificateTextBottom = new createjs.Text("has successfully completed waste sorting on " + currentDate, "40px 'Caveat Brush'", "#000000");
		certificateTextBottom.textAlign = "center";
		certificateTextBottom.lineWidth = 10000;
		updateTextPosition(certificateTextBottom, 512, 400); // Center horizontally and position at 400
		stage.addChild(certificateTextBottom);
		
		// Generate a unique serial number that adds up to 50
		function generateSerialNumber() {
		    let digits = Array(10).fill(0);
		    let sum = 0;
		    for (let i = 0; i < 9; i++) {
		        let digit = Math.floor(Math.random() * 10);
		        digits[i] = digit;
		        sum += digit;
		    }
		    digits[9] = 50 - sum;
		    return digits.join('');
		}
		var serialNumber = generateSerialNumber();
		
		// Display the serial number
		var serialNumberText = new createjs.Text("#" + serialNumber, "12px Arial", "#000000");
		serialNumberText.x = 50;
		serialNumberText.y = 50;
		stage.addChild(serialNumberText);
		
		// Create a div for the HTML input field
		var inputDiv = document.createElement('div');
		inputDiv.style.position = 'absolute';
		inputDiv.style.left = '50%'; // Center horizontally
		inputDiv.style.top = '450px'; // Y Position adjusted for new canvas height
		inputDiv.style.transform = 'translateX(-50%)'; // Center alignment
		inputDiv.style.width = '40%';
		inputDiv.style.textAlign = 'center';
		document.body.appendChild(inputDiv);
		
		// Create the HTML input field for the student's full name
		var nameInput = document.createElement('input');
		nameInput.type = 'text';
		nameInput.placeholder = '(Type your full name)';
		nameInput.style.fontSize = '32px'; // 20% smaller than 40px
		nameInput.style.fontFamily = "'Caveat Brush', cursive";
		nameInput.style.textAlign = 'center';
		nameInput.style.width = '100%';
		nameInput.style.color = '#1489a6';
		nameInput.style.border = 'none';
		nameInput.style.outline = 'none';
		inputDiv.appendChild(nameInput);
		
		// Create the name text that will be displayed on the certificate
		var nameText = new createjs.Text("", "40px 'Caveat Brush'", "#1489a6");
		nameText.textAlign = "center";
		updateTextPosition(nameText, 512, 350); // Center horizontally and position at 350
		stage.addChild(nameText);
		
		// Update the certificate with the student's name
		function updateCertificate() {
		    var name = nameInput.value;
		    nameText.text = name;
		    console.log("Certificate updated with name:", name);
		    updateDownloadButton(); // Update the download button's appearance and functionality
		    stage.update();
		}
		
		// Listen for input events to update the certificate
		nameInput.addEventListener('input', updateCertificate);
		
		// Function to sanitize filename
		function sanitizeFileName(name) {
		    return name.replace(/[^a-z0-9]/gi, '_').toLowerCase();
		}
		
		// Create a button for taking a screenshot
		var screenshotButton = new createjs.Container();
		var screenshotButtonBackground = new createjs.Shape();
		screenshotButtonBackground.graphics.beginFill("#1489a6").drawRoundRect(0, 0, 200, 50, 10);
		var screenshotButtonText = new createjs.Text("DOWNLOAD", "bold 30px 'Caveat Brush'", "#FFFFFF");
		screenshotButtonText.textAlign = "center";
		screenshotButtonText.textBaseline = "middle";
		screenshotButtonText.x = 100;
		screenshotButtonText.y = 25;
		screenshotButton.addChild(screenshotButtonBackground, screenshotButtonText);
		screenshotButton.regX = 100;
		screenshotButton.regY = 25;
		screenshotButton.cursor = "pointer";
		updateTextPosition(screenshotButton, 512, 550); // Center horizontally and position at 500
		stage.addChild(screenshotButton);
		
		// Initial state: semi-transparent and disabled
		screenshotButton.alpha = 0.5;
		screenshotButton.mouseEnabled = false;
		
		// Add the screenshot button functionality
		screenshotButton.on("click", function() {
		    console.log("Screenshot button clicked");
		    var name = nameInput.value.trim();
		    var sanitizedFileName = sanitizeFileName(name) || "certificate";
		    var fileName = sanitizedFileName + "_certificate.png";
		    
		    // Hide buttons before taking screenshot
		    screenshotButton.visible = false;
		    restartButton.visible = false;
		    stage.update();
		    
		    // Capture the screenshot
		    setTimeout(function() {
		        var link = document.createElement("a");
		        link.href = stage.canvas.toDataURL("image/png");
		        link.download = fileName;
		        link.click();
		        
		        // Show buttons again after taking screenshot
		        screenshotButton.visible = true;
		        restartButton.visible = true;
		        stage.update();
		    }, 100);
		});
		
		// Function to update the download button's appearance and functionality
		function updateDownloadButton() {
		    if (nameInput.value.trim() === "") {
		        screenshotButton.alpha = 0.5;
		        screenshotButton.mouseEnabled = false;
		    } else {
		        screenshotButton.alpha = 1;
		        screenshotButton.mouseEnabled = true;
		    }
		}
		
		// Create a small green restart button
		var restartButton = new createjs.Container();
		var restartButtonBackground = new createjs.Shape();
		restartButtonBackground.graphics.beginFill("#2cc934").drawRoundRect(0, 0, 100, 30, 10);
		var restartButtonText = new createjs.Text("RESTART", "bold 20px 'Caveat Brush'", "#FFFFFF");
		restartButtonText.textAlign = "center";
		restartButtonText.textBaseline = "middle";
		restartButtonText.x = 50;
		restartButtonText.y = 15;
		restartButton.addChild(restartButtonBackground, restartButtonText);
		restartButton.regX = 50;
		restartButton.regY = 15;
		restartButton.cursor = "pointer";
		updateTextPosition(restartButton, 50 + 50, 550); // Adjusted Y position
		stage.addChild(restartButton);
		
		// Add the restart button functionality
		restartButton.on("click", function() {
		    console.log("Restart button clicked");
		    // Restart the game logic here
		    // Add your game restart code here
		    // For example, you can reload the page or call a function to reset the game
		    location.reload();
		});
		
		// Update the stage to reflect all changes
		stage.update();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// menu
	this.instance = new lib.medal();
	this.instance.setTransform(452,131,0.4424,0.4424);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3399CC").s().p("AgSFuQgggQgDglQgRj/AIkGQhBALgxgBQgYgBgPgNQgQgNgEgTQgDgTADgRQAEgTAQgNQAPgMAYABQBFABB7gaICggdQAmgFAQAeQAPAegQAhQgQAhglAEQgrAFhGAPQgKEQATENQACAlgeAQQgPAIgQAAQgPAAgQgIg");
	this.shape.setTransform(734.7189,71.9518);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3399CC").s().p("ABnFYQgVgNgLgZQgrhng5hwIgdAHIACBOIACBOQABAYgNAPQgMAPgTAEQgSAEgTgEQgSgEgOgPQgNgPAAgYIgEiVIgEiVIgCgsIgEgwIgDguIAAgwIAGgrQAIgfAXgTQAXgUAfgFQAegGAgAEQAgAEAaAMQBKAgAnBKQAoBLgTBNQgQBDgzArQA6ByA1B9QAJAWgPAZQgQAZgXAGQgIACgIAAQgPAAgOgJgAg8jdIgHALIgCASIACAUIACAXIABAVIACAgIABAkIAAAhQA3gRAUgvQARgigLgjQgKgkghgTIgYgJIgEgBQgGAAgDAEg");
	this.shape_1.setTransform(690.6592,72.6491);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3399CC").s().p("ADAFxQgjgGgOgkIgihcIgihdQhjADhXANIgjCkQgHAlgiAHQghAHgbgYQgbgYAHgkQAxj6A+jbIAIgiIAKgpIANgnIATglQAKgOAQgLQAQgLAVgCQAWgCATAKQARAKAMARIAXApIASAtIAOAuIALAjICsHNQANAkgZAXQgUASgaAAIgPgCgAguhrIgPA8IgNAxIgIAbIBvgKIgTg5IgVhFIgWg8g");
	this.shape_2.setTransform(641.2706,70.5222);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3399CC").s().p("AjfE+QgTgEgOgQQgNgQgBgWQgKkBApkJQACgPANgMQANgMAPgEQAQgEASAEQARAEAKAMIA5BQQAuBCAcAcIAhg3IAjhCIAcg1QANgVAagHQAagGAWAMQAXAMAFAZQA2EBALEGQABAXgMAPQgNAQgSAEQgSADgTgDQgSgEgOgQQgNgPgBgXQgHibgZiiQgiA7giAfQgPAOgWADQgUADgSgLQgxgfg7hOQgPCnAGCvQABAWgMAQQgMAQgSAEQgJACgJAAQgKAAgJgCg");
	this.shape_3.setTransform(584.2047,69.4233);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3399CC").s().p("Ah/FGQgVgiASgkQAKgWAYgJQAjgQARgVQARgUACgVQABgUgKgbIgXgvIgfgwIgagqQgqhRAMhIQAPhRBCgpQBBgoBWADQAXABAPAMQAPAOAEASQAEATgEATQgEASgPAMQgPANgXgBQgpgBgYAIQgXAJgFATIgFAkQABASAMAeIAXAvIAbAsIAUAiQAnBIgGBAQgLB7ieBCQgNAGgLAAQgZAAgPgZg");
	this.shape_4.setTransform(538.158,73.1847);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3399CC").s().p("AgFFhIgagBIgYgFIgYgGIgVgKIgTgOIgPgTIgNgZIgRhAIgJhGIgEhIIAAhGIgBhCIgBgxIgCg9IAEg4QADghANgXQAMgXAVgOQAUgNAdgFIAzgGIA8AEIA0AJIA0AKQAlAIAHAiQAHAhgXAcQgYAaglgIIgbgGIgdgHIgbgDIgbAAIgXAJQgMAHgIAMQgIAMgBAeIADBMIAFAxIAiADIAkgEQAagEAWALQAWANAHAXQAHAYgNAYQgOAZgYAFQgxAJgygEIAHAwIAJAiIALAWIANAPIASAJIAZADIAjAAQAXgBAQAMQAQANADATQADASgDASQgDATgQANQgQAOgXAAIgZABIgaAAg");
	this.shape_5.setTransform(476.7303,66);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3399CC").s().p("AgSFuQgggQgDglQgRj/AIkGQhBALgxgBQgYgBgPgNQgQgNgEgTQgDgTADgRQAEgTAQgNQAPgMAYABQBFABB7gaICggdQAmgFAQAeQAPAegQAhQgQAhglAEQgrAFhGAPQgKEQATENQACAlgeAQQgPAIgQAAQgPAAgQgIg");
	this.shape_6.setTransform(432.3189,71.9518);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3399CC").s().p("Ah/FGQgVgiASgkQAKgWAYgJQAjgQARgVQARgUACgVQABgUgKgbIgXgvIgfgwIgagqQgqhRAMhIQAPhRBCgpQBBgoBWADQAXABAPAMQAPAOAEASQAEATgEATQgEASgPAMQgPANgXgBQgpgBgYAIQgXAJgFATIgFAkQABASAMAeIAXAvIAbAsIAUAiQAnBIgGBAQgLB7ieBCQgNAGgLAAQgZAAgPgZg");
	this.shape_7.setTransform(392.958,73.1847);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3399CC").s().p("ADAFxQgjgGgOgkIgihcIgihdQhjADhXANIgjCkQgHAlgiAHQghAHgbgYQgbgYAHgkQAxj6A+jbIAIgiIAKgpIANgnIATglQAKgOAQgLQAQgLAVgCQAWgCATAKQARAKAMARIAXApIASAtIAOAuIALAjICsHNQANAkgZAXQgUASgaAAIgPgCgAguhrIgPA8IgNAxIgIAbIBvgKIgTg5IgVhFIgWg8g");
	this.shape_8.setTransform(350.0706,70.5222);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3399CC").s().p("ACeFZQgYgBgOgRQg9hIglg6IgqhWIgOAYIgPAZIgLARQgrA3g3A5QgWATgXgBQgXgBgTgSQgSgSgCgZIgnniQgDglAfgQQAegQAgAQQAgAQAFAlIALCeIAOCgIBBhWQAngwAqAFIAOAEIAPAGIALAKIAKALIAJANIAHAMIAHAOIAHAOIAzBWIA2mVQAEgmAhgQQAhgQAeAQQAeAQgFAmQgjEkgsEjQgEAVgUANQgRAMgVAAIgFgBg");
	this.shape_9.setTransform(290.2659,66.9078);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]},1).wait(1));

	// items
	this.teabag = new lib.teabag();
	this.teabag.name = "teabag";
	this.teabag.setTransform(1962.5,106.55);

	this.yoghurt = new lib.yoghurt();
	this.yoghurt.name = "yoghurt";
	this.yoghurt.setTransform(1812.6,107.45,1,0.9997);

	this.chocwrapper = new lib.chocwrapper();
	this.chocwrapper.name = "chocwrapper";
	this.chocwrapper.setTransform(1667.25,114.85,1,0.9997);

	this.milkbox = new lib.milkbox();
	this.milkbox.name = "milkbox";
	this.milkbox.setTransform(1513.2,104.05,1,0.9997);

	this.plasticstraw = new lib.plasticstraw();
	this.plasticstraw.name = "plasticstraw";
	this.plasticstraw.setTransform(1400.25,112.1,1,0.9997);

	this.fruitbox = new lib.fruitbox();
	this.fruitbox.name = "fruitbox";
	this.fruitbox.setTransform(1287.65,111.1,1,0.9997);

	this.paper = new lib.paper();
	this.paper.name = "paper";
	this.paper.setTransform(1151.4,109.1,1,0.9997);

	this.can = new lib.can();
	this.can.name = "can";
	this.can.setTransform(1020.1,101.95,1,0.9997);

	this.roll2 = new lib.roll2();
	this.roll2.name = "roll2";
	this.roll2.setTransform(883.4,112.25,1,0.9997);

	this.apple = new lib.apple();
	this.apple.name = "apple";
	this.apple.setTransform(750.9,107.4,1,0.9997);

	this.chippacket = new lib.chippacket();
	this.chippacket.name = "chippacket";
	this.chippacket.setTransform(574.95,112.45,1,0.9997);

	this.banana = new lib.banana();
	this.banana.name = "banana";
	this.banana.setTransform(404.55,95.95,1,0.9997);

	this.plasticbottle = new lib.plasticbottle();
	this.plasticbottle.name = "plasticbottle";
	this.plasticbottle.setTransform(265.6,98.25,1,0.9997);

	this.burger = new lib.burger();
	this.burger.name = "burger";
	this.burger.setTransform(-17.3,106.75,1,0.9997);

	this.tincan = new lib.tincan();
	this.tincan.name = "tincan";
	this.tincan.setTransform(-156.85,110.15,1,0.9997);

	this.cup = new lib.cup();
	this.cup.name = "cup";
	this.cup.setTransform(-321.5,97.15,1,0.9997);

	this.roll1 = new lib.roll1();
	this.roll1.name = "roll1";
	this.roll1.setTransform(-469.5,100.05,1,0.9997);

	this.plasticbag = new lib.plasticbag();
	this.plasticbag.name = "plasticbag";
	this.plasticbag.setTransform(-628.05,104.95,1,0.9997);

	this.egg = new lib.egg();
	this.egg.name = "egg";
	this.egg.setTransform(125.1,106.3,1,0.9997);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CC0000").s().p("AgDBoQgFgDgCgFQgDgFAAgGQABgFAEgFQANgOAFgRQAEgQgDgQQgDgOgIgRQgJgRgKgMQgKgNgNgNQgFgFAAgGQgBgFADgFQADgFAFgDQAEgDAGABQAGAAAFAFQAQARANASQANATAKAWQAJAVADAUQACAVgHAWQgIAWgSATQgEAEgGABIgDAAQgEAAgDgCg");
	this.shape_10.setTransform(-170.4813,367.9089);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CC0000").s().p("AglBeQgJgFgBgLIgDhUIgCgOIgBgQIgBgPIACgPQACgNAJgIQAJgHALgBQALAAAMAFQASAIAJAOQAKAOAAAPQABAPgHAPQgGAOgNALIAQAJIAQAJQAEACACAEQADADAAAEIgBAIQgBAEgDADIgGAEQgEACgEAAQgEAAgEgDIgVgLIgTgLIABARIABASQABALgJAFQgFACgEAAQgFAAgFgCgAgRgtIABANIABAIIABATQAGgDAFgGQAEgGABgHQACgHgCgHQgCgGgGgFQgEgDgDAAQgEAAAAAKg");
	this.shape_11.setTransform(-182.425,370.2477);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CC0000").s().p("AgiBKQgEgBgEgEQgEgEgBgEQgBgIAAgJIAAgUIABgRQAAgcgCggQgBgIAFgFQAFgIAKAAIA0ACQAGAAAFADQAFAEABAFQABAGgBAFQgBAFgFAEQgFAEgGAAIgigBIABASIAQAAQAFAAAEADQAEACACAEQADAFAAAEQAAAHgGAFQgFAGgHAAIgQAAIgCAWIAZgEIAVgEQAMgCAEAMQADAKgHAJQgEAHgIABIgRACIgQADIgRACIgFAAIgMgBg");
	this.shape_12.setTransform(-194.0939,369.5813);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CC0000").s().p("Ag5BNQgFgEgBgJQgBgyAFgxQACgLAIgFQAIgEAKAEQAHAEAFAGQAFAGAGAKIAHAOQASAcAIAJIACgdIABgfIAAgdQAAgHAEgFQADgEAGgBQAFgCAFACQAGABADAEQAEAFAAAHQgBAvgEApIAAALIgBALIgCAKQgBAGgDAEIgHAIQgFADgFAAIgJgDIgJgGIgKgJIgHgJIgIgLIgGgJIgMgPIAAAwQAAANgLAEIgIABQgGAAgGgFg");
	this.shape_13.setTransform(-207.1661,369.0821);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CC0000").s().p("AgFBVQgJgEgBgLQgEgwABguQAAgLAKgFQAIgEAJAEQAJAFAAALQgCAuAEAwQABALgIAEQgFACgEAAQgEAAgFgCgAgPg3QgFgGAAgHQAAgHAFgFQAFgGAIAAQAIAAAEAGQAFAFAAAHQAAAHgFAGQgEAFgIAAQgIAAgFgFg");
	this.shape_14.setTransform(-217.1947,367.0875);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CC0000").s().p("Ag3BQQgIgHACgLQAKg1ASgtIADgIIAEgKIAEgKIAFgJIAGgHQAEgDAEgBQAFgBAFABIAIAFQADACAEAGIAEAJIAEALIABAEQAQAtAPAzQABAFgBAEQgBAEgDADIgGAFQgDACgEAAIgIgBQgDgBgDgDQgDgDgBgFIgIgZIgjgCIgJAoQgCALgKACIgEAAQgIAAgGgFgAAIgCIgHgWIgBABIAAABIAAABIgGASIAOABg");
	this.shape_15.setTransform(-226.52,369.4097);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CC0000").s().p("AgHBhQgKgEgBgLQgGhHAEhJIgkAAQgHAAgEgEQgFgDgBgGQgBgFABgFQABgGAFgEQAEgDAHAAIBxgBQAHAAAFAEQAEAEABAFQABAGgBAFQgBAFgEAEQgFAEgHAAIgVAAIgUAAQgFBJAHBHQABALgJAFQgEACgEAAQgEAAgFgDg");
	this.shape_16.setTransform(-240.425,371.0816);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CC0000").s().p("Ag5BNQgFgEgBgJQgBgyAFgxQACgLAIgFQAIgEAKAEQAHAEAFAGQAFAGAGAKIAHAOQASAcAIAJIACgdIABgfIAAgdQAAgHAEgFQADgEAGgBQAFgCAFACQAGABADAEQAEAFAAAHQgBAvgEApIAAALIgBALIgCAKQgBAGgDAEIgHAIQgFADgFAAIgJgDIgJgGIgKgJIgHgJIgIgLIgGgJIgMgPIAAAwQAAANgLAEIgIABQgGAAgGgFg");
	this.shape_17.setTransform(-255.1161,369.0821);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CC0000").s().p("AAABXQgWgBgTgKQgPgIgKgNQgKgNgFgQQgFgPABgPQAAgRAHgPQAHgPAMgMQANgLAPgGQAPgFAQgBQAQgBAQAHQAFACADAEIADABQAVALAMAWQALAVAAAYQgBAYgMAVQgLATgVAJQgTAJgUAAIgDAAgAgFgxQgMABgKAGQgLAHgGALQgIAQAEATQAFATAOALQALAHAOACQANACANgFQANgFAHgLQAIgMAAgPQABgNgHgNQgHgNgNgGQgEgCgCgDQgKgDgIAAIgFAAg");
	this.shape_18.setTransform(-271.4073,370.0479);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CC0000").s().p("AAABWQgQgCgQgJQgQgIgLgQQgLgQgDgUQgDgPADgPQADgPAHgNQAGgNALgKQAKgLANgFQAMgFAPACQAPABAPAKQAGADACAGQABAGgBAFQgCAFgEAEQgDAEgGABQgGAAgGgDQgNgIgKADQgLADgHAKQgIAKgCANQgDAMACAMQAFATAOAKQAOALARgBQARgBAPgMQAIgIAKAEQAKADACAJQADAJgIAIQgPANgSAGQgOAFgOAAIgJgBg");
	this.shape_19.setTransform(-288.1506,367.8327);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CC0000").s().p("AgZBMQgJgCgFgJQgDgHgCgJIgCgWIAAgQIgEgiIgDgiQgBgJAGgFQAGgEAHAAQAFgBAFABQANACALAFQALAEALAHQALAHAIAKQAIAKADAMQAGAUgHAVQgHAVgRAOQgHAGgIAEIgSAHQgFACgFAAIgIgBgAgNgYIABAMIABAKIABANIACANIAAAIIAAAGQALgFAHgLQAIgLAAgLQgBgYgfgLg");
	this.shape_20.setTransform(-309.7437,369.4368);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CC0000").s().p("AgiBKQgEgBgEgEQgEgEgBgEQgBgIAAgJIAAgUIABgRQAAgcgCggQgBgIAFgFQAFgIAKAAIA0ACQAGAAAFADQAFAEABAFQABAGgBAFQgBAFgFAEQgFAEgGAAIgigBIABASIAQAAQAFAAAEADQAEACACAEQADAFAAAEQAAAHgGAFQgFAGgHAAIgQAAIgCAWIAZgEIAVgEQAMgCAEAMQADAKgHAJQgEAHgIABIgRACIgQADIgRACIgFAAIgMgBg");
	this.shape_21.setTransform(-321.1439,369.5813);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CC0000").s().p("AgIBcQgHAAgEgDIgKgEQgFgDgDgGQgDgFgBgHQgDgVgBgZIAAguIAAgtQAAgHADgEQADgFAGgCQAFgBAFABQAGACAEAFQAEAEAAAHIACBUIAAAIIgBAMIAAALQABAGABACQADADAEABIAIACIALgBIAJAAQAHAAAFAEQAEADABAGQABAFgBAFQgBAFgEAEQgFAEgHAAIgMABIgOAAg");
	this.shape_22.setTransform(-331.6,368.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CC0000").s().p("AgHBcQgIAAgFgDIgJgEQgFgDgDgGQgCgFgCgHQgDgVgBgZIgBguIAAgtQAAgHAEgEQAEgFAFgCQAGgBAEABQAGACAEAFQAEAEAAAHIACBUIAAAIIAAAMIAAALQAAAGACACQACADAEABIAJACIAKgBIAKAAQAGAAAEAEQAFADABAGQABAFgBAFQgBAFgFAEQgEAEgGAAIgNABIgOAAg");
	this.shape_23.setTransform(-341.9,368.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CC0000").s().p("AgFBVQgJgEgBgLQgEgwABguQAAgLAKgFQAIgEAJAEQAJAFAAALQgCAuAEAwQABALgIAEQgFACgEAAQgEAAgFgCgAgPg3QgFgGAAgHQAAgHAFgFQAFgGAIAAQAIAAAEAGQAFAFAAAHQAAAHgFAGQgEAFgIAAQgIAAgFgFg");
	this.shape_24.setTransform(-350.4447,367.0875);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CC0000").s().p("AglBMQgJgFgBgLIgEg8IgEg6QgBgHAGgGQAGgGAHAAQAmAEAmgDQALgBAEAIQAFAJgFAJQgEAKgLABQgdADgbgCIAAAJIABAJIABAJQAMAAAKgCQAIgCAGAEQAHADABAIQACAGgDAGQgEAHgHACQgQADgOAAIADAlQAAALgIAFQgFACgEAAQgFAAgFgCg");
	this.shape_25.setTransform(-358.9644,370.2356);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CC0000").s().p("AgHBhQgKgEgBgLQgGhHAEhJIgkAAQgHAAgEgEQgFgDgBgGQgBgFABgFQABgGAFgEQAEgDAHAAIBxgBQAHAAAFAEQAEAEABAFQABAGgBAFQgBAFgEAEQgFAEgHAAIgVAAIgUAAQgFBJAHBHQABALgJAFQgEACgEAAQgEAAgFgDg");
	this.shape_26.setTransform(-380.425,371.0816);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CC0000").s().p("AglBeQgJgFgBgLIgDhUIgCgOIgBgQIgBgPIACgPQACgNAJgIQAJgHALgBQALAAAMAFQASAIAJAOQAKAOAAAPQABAPgHAPQgGAOgNALIAQAJIAQAJQAEACACAEQADADAAAEIgBAIQgBAEgDADIgGAEQgEACgEAAQgEAAgEgDIgVgLIgTgLIABARIABASQABALgJAFQgFACgEAAQgFAAgFgCgAgRgtIABANIABAIIABATQAGgDAFgGQAEgGABgHQACgHgCgHQgCgGgGgFQgEgDgDAAQgEAAAAAKg");
	this.shape_27.setTransform(-393.625,370.2477);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CC0000").s().p("AgSBKQgLgFgHgJQgHgJgGgMQgFgMgDgNIgEgaIgCgaIABgWQAAgLAKgEQAJgFAJAFQAJAEgBALIAAAPIAAATIACAWIAEATQADAKAFAHQAFAGAHACQAJACAHgHQAGgIACgMQADgNAAgNQAAgPgBgMIgDgRQgBgHACgFQACgFAFgDQAFgDAGAAQAFAAAFADQAFAEABAGQAEAOABARQACASgCASQgDAUgFAQQgGAQgNALQgNAMgSABIgEABQgKAAgJgFg");
	this.shape_28.setTransform(-406.9679,369.4052);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#CC0000").s().p("AgnBbQgJgFgBgLQgFhGAAhFQAAgHADgEQAEgFAGgBQAFgBAFABQAGABADAFQAEAEAAAHIABA1IAQgBIAPgBIAAg+QAAgHAEgEQAEgFAFgBQAGgBAFABQAFABAEAFQADAEAAAHQgBBKAGBKQABALgJAEQgIAEgKgEQgJgEgCgLIgDgzIgeACIADAzQAAALgIAFQgFACgEAAQgFAAgFgCg");
	this.shape_29.setTransform(-420.32,368.6125);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#CC0000").s().p("AgbBCQgPgKgIgRQgIgQAAgSQAAgRAIgRQAGgNAIgKQAIgKALgGQALgHALAAQAMAAAOAHQAFADADAGQACAFgCAFQgCAFgDAEQgEAEgGABQgGABgGgDQgIgDgFADQgGADgEAIQgFAIgCAJQgDAJABAJQAAAJACAFQADAFAEAEIAIAGQAEACAFgBQAFgBAEgFQAHgIABgRIgKABIgJAAQgGAAgFgEQgEgDgBgFQgCgFACgFQABgGAEgEQAFgDAGAAIAIgBIALAAIAJAAIAKACIAIAEQAEADACAEQADAHAAAJQAAAKgBAKIgFARQgGAQgOALQgNAKgQAAIgBAAQgOAAgQgKg");
	this.shape_30.setTransform(-433.225,368.8995);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#CC0000").s().p("AAABXQgWgBgTgKQgPgIgKgNQgKgNgFgQQgFgPABgPQAAgRAHgPQAHgPAMgMQANgLAPgGQAPgFAQgBQAQgBAQAHQAFACADAEIADABQAVALAMAWQALAVAAAYQgBAYgMAVQgLATgVAJQgTAJgUAAIgDAAgAgFgxQgMABgKAGQgLAHgGALQgIAQAEATQAFATAOALQALAHAOACQANACANgFQANgFAHgLQAIgMAAgPQABgNgHgNQgHgNgNgGQgEgCgCgDQgKgDgIAAIgFAAg");
	this.shape_31.setTransform(-448.7073,370.0479);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#CC0000").s().p("AADBhQgEgCgEgEQgEgEgBgFQgBgGADgGQAQgdALgtIgIAEQgFABgFAAQgEAAgFgBIgJgEIgJgGIgIgIIgIgJIgHgJIgHgIIgGgHQgHgIADgKQAEgKAJgDQAJgCAIAHIAKAMIAQAUIAJAJQAEABAHgKQAIgKAFgLIAJgRQAEgJAJgDQAJgDAHAEQAIAFgBAKQgKBqgjA9QgDAGgGACIgGABIgFAAg");
	this.shape_32.setTransform(-465.0248,369.1306);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#CC0000").s().p("AglBMQgJgFgBgLIgEg8IgEg6QgBgHAGgGQAGgGAHAAQAmAEAmgDQALgBAEAIQAFAJgFAJQgEAKgLABQgdADgbgCIAAAJIABAJIABAJQAMAAAKgCQAIgCAGAEQAHADABAIQACAGgDAGQgEAHgHACQgQADgOAAIADAlQAAALgIAFQgFACgEAAQgFAAgFgCg");
	this.shape_33.setTransform(-485.2144,370.2356);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#CC0000").s().p("AgHBcQgIAAgFgDIgJgEQgFgDgDgGQgCgFgCgHQgDgVgBgZIAAguIAAgtQAAgHADgEQAEgFAFgCQAGgBAEABQAGACAEAFQAEAEAAAHIACBUIAAAIIAAAMIAAALQAAAGABACQADADAEABIAJACIAKgBIAJAAQAHAAAEAEQAFADABAGQABAFgBAFQgBAFgFAEQgEAEgHAAIgMABIgOAAg");
	this.shape_34.setTransform(-496.15,368.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#CC0000").s().p("Ag3BQQgIgHACgLQAKg1ASgtIADgIIAEgKIAEgKIAFgJIAGgHQAEgDAEgBQAFgBAFABIAIAFQADACAEAGIAEAJIAEALIABAEQAQAtAPAzQABAFgBAEQgBAEgDADIgGAFQgDACgEAAIgIgBQgDgBgDgDQgDgDgBgFIgIgZIgjgCIgJAoQgCALgKACIgEAAQgIAAgGgFgAAIgCIgHgWIgBABIAAABIAAABIgGASIAOABg");
	this.shape_35.setTransform(-508.32,369.4097);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#CC0000").s().p("AgnBbQgJgFgBgLQgFhGAAhFQAAgHADgEQAEgFAGgBQAFgBAFABQAGABADAFQAEAEAAAHIABA1IAQgBIAPgBIAAg+QAAgHAEgEQAEgFAFgBQAGgBAFABQAFABAEAFQADAEAAAHQgBBKAGBKQABALgJAEQgIAEgKgEQgJgEgCgLIgDgzIgeACIADAzQAAALgIAFQgFACgEAAQgFAAgFgCg");
	this.shape_36.setTransform(-521.17,368.6125);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#CC0000").s().p("AgMAMQgFgFAAgHQAAgGAFgGQAFgFAHAAQAJAAAEAFQAFAGAAAGQAAAHgFAFQgEAGgJAAQgHAAgFgGg");
	this.shape_37.setTransform(-537.625,375.225);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#CC0000").s().p("AgbBCQgPgKgIgRQgIgQAAgSQAAgRAIgRQAGgNAIgKQAIgKALgGQALgHALAAQAMAAAOAHQAFADADAGQACAFgCAFQgCAFgDAEQgEAEgGABQgGABgGgDQgIgDgFADQgGADgEAIQgFAIgCAJQgDAJABAJQAAAJACAFQADAFAEAEQAEAEAEACQAEACAFgBQAFgBAEgFQAHgIABgRIgKABIgJAAQgGAAgFgEQgEgDgBgFQgCgFACgFQABgGAEgEQAFgDAGAAIAIgBIALAAIAJAAIAKACIAIAEQAEADACAEQADAHAAAJQAAAKgBAKIgFARQgGAQgOALQgNAKgQAAIgBAAQgOAAgQgKg");
	this.shape_38.setTransform(-546.225,368.8995);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#CC0000").s().p("AgMAMQgFgFAAgHQAAgGAFgGQAFgFAHAAQAJAAAEAFQAFAGAAAGQAAAHgFAFQgEAGgJAAQgHAAgFgGg");
	this.shape_39.setTransform(-554.825,375.225);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#CC0000").s().p("AgiBKQgEgBgEgEQgEgEgBgEQgBgIAAgJIAAgUIABgRQAAgcgCggQgBgIAFgFQAFgIAKAAIA0ACQAGAAAFADQAFAEABAFQABAGgBAFQgBAFgFAEQgFAEgGAAIgigBIABASIAQAAQAFAAAEADQAEACACAEQADAFAAAEQAAAHgGAFQgFAGgHAAIgQAAIgCAWIAZgEIAVgEQAMgCAEAMQADAKgHAJQgEAHgIABIgRACIgQADIgRACIgFAAIgMgBg");
	this.shape_40.setTransform(-562.3939,369.5813);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#CC0000").s().p("AAeBqQgegMgWgZQgXgagFgeQgDgQAEgQQADgQAJgPQAJgPAJgLQAKgMAMgNQAEgDAEgCQAEgBAEABIAHADQADACACADIADAHQABAEgBAEQgBAEgEAEIgQAQIgNAQQgGAKgDAKQgEAKAAALQgBAVAPAVQARAWAWAJQAKAEABAKQACALgGAHQgEAFgGAAQgDAAgEgCg");
	this.shape_41.setTransform(-574.8457,369.2644);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#CC0000").s().p("AgiBKQgEgBgEgEQgEgEgBgEQgBgIAAgJIAAgUIABgRQAAgcgCggQgBgIAFgFQAFgIAKAAIA0ACQAGAAAFADQAFAEABAFQABAGgBAFQgBAFgFAEQgFAEgGAAIgigBIABASIAQAAQAFAAAEADQAEACACAEQADAFAAAEQAAAHgGAFQgFAGgHAAIgQAAIgCAWIAZgEIAVgEQAMgCAEAMQADAKgHAJQgEAHgIABIgRACIgQADIgRACIgFAAIgMgBg");
	this.shape_42.setTransform(-115.8439,338.9313);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#CC0000").s().p("AgHBhQgKgEgBgLQgGhHAEhJIgkAAQgHAAgEgEQgFgDgBgGQgBgFABgFQABgGAFgEQAEgDAHAAIBxgBQAHAAAFAEQAEAEABAFQABAGgBAFQgBAFgEAEQgFAEgHAAIgVAAIgUAAQgFBJAHBHQABALgJAFQgEACgEAAQgEAAgFgDg");
	this.shape_43.setTransform(-129.125,340.4316);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#CC0000").s().p("AgQBnQgGgBgDgEQgEgEgCgFQgCgFADgGQACgFAGgDQAMgHAFgJQAEgJgCgKQgCgJgFgLIgLgVQgGgKgFgMQgFgMAAgJQAAgYARgQQARgPAXACQALABAEAJQAFAKgFAIQgEAJgLgBQgHAAgFABQgEABgCADIgCAHIAAAJIAEAKIAEAKIAFAKIAFAIIAEAGQANAYADAQQABALgDAKQgCAJgHAIQgGAHgIAGQgIAGgJAFQgFACgEAAIgDAAg");
	this.shape_44.setTransform(-140.9607,339.3307);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#CC0000").s().p("Ag3BQQgIgHACgLQAKg1ASgtIADgIIAEgKIAEgKIAFgJIAGgHQAEgDAEgBQAFgBAFABIAIAFQADACAEAGIAEAJIAEALIABAEQAQAtAPAzQABAFgBAEQgBAEgDADIgGAFQgDACgEAAIgIgBQgDgBgDgDQgDgDgBgFIgIgZIgjgCIgJAoQgCALgKACIgEAAQgIAAgGgFgAAIgCIgHgWIgBABIAAABIAAABIgGASIAOABg");
	this.shape_45.setTransform(-151.62,338.7597);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#CC0000").s().p("AAtBYQgHgCgEgGQgWgfgUguIgRAkIgSAkQgEAHgHACQgHACgHgEQgHgEgBgHQgPg8gIhBQgBgLAJgEQAIgFAKAFQAJAEACALQADAgAHAhIAPgdIAPgfQACgEAEgDQADgCAEAAIAIACQADABADAEIAFAGQASAsAOAZQAMgyAKgwQACgLAKgCQAJgCAIAHQAIAGgCALQgOBGgSBHQgCAIgGADQgEACgFAAIgFgBg");
	this.shape_46.setTransform(-168.3907,337.0778);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#CC0000").s().p("AgZBMQgJgCgFgJQgDgHgCgJIgCgWIAAgQIgEgiIgDgiQgBgJAGgFQAGgEAHAAQAFgBAFABQANACALAFQALAEALAHQALAHAIAKQAIAKADAMQAGAUgHAVQgHAVgRAOQgHAGgIAEIgSAHQgFACgFAAIgIgBgAgNgYIABAMIABAKIABANIACANIAAAIIAAAGQALgFAHgLQAIgLAAgLQgBgYgfgLg");
	this.shape_47.setTransform(-192.4437,338.7868);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#CC0000").s().p("AgiBKQgEgBgEgEQgEgEgBgEQgBgIAAgJIAAgUIABgRQAAgcgCggQgBgIAFgFQAFgIAKAAIA0ACQAGAAAFADQAFAEABAFQABAGgBAFQgBAFgFAEQgFAEgGAAIgigBIABASIAQAAQAFAAAEADQAEACACAEQADAFAAAEQAAAHgGAFQgFAGgHAAIgQAAIgCAWIAZgEIAVgEQAMgCAEAMQADAKgHAJQgEAHgIABIgRACIgQADIgRACIgFAAIgMgBg");
	this.shape_48.setTransform(-203.8439,338.9313);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#CC0000").s().p("AgHBhQgKgEgBgLQgGhHAEhJIgkAAQgHAAgEgEQgFgDgBgGQgBgFABgFQABgGAFgEQAEgDAHAAIBxgBQAHAAAFAEQAEAEABAFQABAGgBAFQgBAFgEAEQgFAEgHAAIgVAAIgUAAQgFBJAHBHQABALgJAFQgEACgEAAQgEAAgFgDg");
	this.shape_49.setTransform(-217.125,340.4316);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#CC0000").s().p("Ag3BQQgIgHACgLQAKg1ASgtIADgIIAEgKIAEgKIAFgJIAGgHQAEgDAEgBQAFgBAFABIAIAFQADACAEAGIAEAJIAEALIABAEQAQAtAPAzQABAFgBAEQgBAEgDADIgGAFQgDACgEAAIgIgBQgDgBgDgDQgDgDgBgFIgIgZIgjgCIgJAoQgCALgKACIgEAAQgIAAgGgFgAAIgCIgHgWIgBABIAAABIAAABIgGASIAOABg");
	this.shape_50.setTransform(-231.07,338.7597);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#CC0000").s().p("Ag5BNQgFgEgBgJQgBgyAFgxQACgLAIgFQAIgEAKAEQAHAEAFAGQAFAGAGAKIAHAOQASAcAIAJIACgdIABgfIAAgdQAAgHAEgFQADgEAGgBQAFgCAFACQAGABADAEQAEAFAAAHQgBAvgEApIAAALIgBALIgCAKQgBAGgDAEIgHAIQgFADgFAAIgJgDIgJgGIgKgJIgHgJIgIgLIgGgJIgMgPIAAAwQAAANgLAEIgIABQgGAAgGgFg");
	this.shape_51.setTransform(-244.7661,338.4321);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#CC0000").s().p("AgFBVQgJgEgBgLQgEgwABguQAAgLAKgFQAIgEAJAEQAJAFAAALQgCAuAEAwQABALgIAEQgFACgEAAQgEAAgFgCgAgPg3QgFgGAAgHQAAgHAFgFQAFgGAIAAQAIAAAEAGQAFAFAAAHQAAAHgFAGQgEAFgIAAQgIAAgFgFg");
	this.shape_52.setTransform(-254.7947,336.4375);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#CC0000").s().p("AhRBhQgJgEgBgLQgGg7ABg0IAAgHIAAgIIABgIIABgIIACgIIAEgGIAFgFQAGgEAGAAQAFAAAFADIAIAGIAIAJQAXAdAUAVQARgqAfgkQAEgFAHAAQAHgBAGAEQAFAEACAGQAQBMAEBOQABAMgLAEQgLAEgJgIQgFgFgBgHQgDg1gJg0QgRAbgJAfQgDAKgKACQgKADgHgHQgXgVgSgTIgMgQIABAQIAAAQIAAAIQABAfADAlQABALgIAEQgFACgFAAQgEAAgFgCg");
	this.shape_53.setTransform(-267.9537,339.4847);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#CC0000").s().p("Ag3BQQgIgHACgLQAKg1ASgtIADgIIAEgKIAEgKIAFgJIAGgHQAEgDAEgBQAFgBAFABIAIAFQADACAEAGIAEAJIAEALIABAEQAQAtAPAzQABAFgBAEQgBAEgDADIgGAFQgDACgEAAIgIgBQgDgBgDgDQgDgDgBgFIgIgZIgjgCIgJAoQgCALgKACIgEAAQgIAAgGgFgAAIgCIgHgWIgBABIAAABIAAABIgGASIAOABg");
	this.shape_54.setTransform(-285.12,338.7597);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#CC0000").s().p("AgHBhQgKgEgBgLQgGhHAEhJIgkAAQgHAAgEgEQgFgDgBgGQgBgFABgFQABgGAFgEQAEgDAHAAIBxgBQAHAAAFAEQAEAEABAFQABAGgBAFQgBAFgEAEQgFAEgHAAIgVAAIgUAAQgFBJAHBHQABALgJAFQgEACgEAAQgEAAgFgDg");
	this.shape_55.setTransform(-299.025,340.4316);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#CC0000").s().p("Ag5BNQgFgEgBgJQgBgyAFgxQACgLAIgFQAIgEAKAEQAHAEAFAGQAFAGAGAKIAHAOQASAcAIAJIACgdIABgfIAAgdQAAgHAEgFQADgEAGgBQAFgCAFACQAGABADAEQAEAFAAAHQgBAvgEApIAAALIgBALIgCAKQgBAGgDAEIgHAIQgFADgFAAIgJgDIgJgGIgKgJIgHgJIgIgLIgGgJIgMgPIAAAwQAAANgLAEIgIABQgGAAgGgFg");
	this.shape_56.setTransform(-313.7161,338.4321);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#CC0000").s().p("AAABXQgWgBgTgKQgPgIgKgNQgKgNgFgQQgFgPABgPQAAgRAHgPQAHgPAMgMQANgLAPgGQAPgFAQgBQAQgBAQAHQAFACADAEIADABQAVALAMAWQALAVAAAYQgBAYgMAVQgLATgVAJQgTAJgUAAIgDAAgAgFgxQgMABgKAGQgLAHgGALQgIAQAEATQAFATAOALQALAHAOACQANACANgFQANgFAHgLQAIgMAAgPQABgNgHgNQgHgNgNgGQgEgCgCgDQgKgDgIAAIgFAAg");
	this.shape_57.setTransform(-330.0073,339.3979);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#CC0000").s().p("AAABWQgQgCgQgJQgQgIgLgQQgLgQgDgUQgDgPADgPQADgPAHgNQAGgNALgKQAKgLANgFQAMgFAPACQAPABAPAKQAGADACAGQABAGgBAFQgCAFgEAEQgDAEgGABQgGAAgGgDQgNgIgKADQgLADgHAKQgIAKgCANQgDAMACAMQAFATAOAKQAOALARgBQARgBAPgMQAIgIAKAEQAJADADAJQADAJgIAIQgPANgSAGQgOAFgOAAIgJgBg");
	this.shape_58.setTransform(-346.7506,337.1827);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#CC0000").s().p("AgHBhQgKgEgBgLQgGhHAEhJIgkAAQgHAAgEgEQgFgDgBgGQgBgFABgFQABgGAFgEQAEgDAHAAIBxgBQAHAAAFAEQAEAEABAFQABAGgBAFQgBAFgEAEQgFAEgHAAIgVAAIgUAAQgFBJAHBHQABALgJAFQgEACgEAAQgEAAgFgDg");
	this.shape_59.setTransform(-369.925,340.4316);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#CC0000").s().p("AgSBKQgLgFgHgJQgHgJgGgMQgFgMgDgNIgEgaIgCgaIABgWQAAgLAKgEQAJgFAJAFQAJAEgBALIAAAPIAAATIACAWIAEATQADAKAFAHQAFAGAHACQAJACAHgHQAGgIACgMQADgNAAgNQAAgPgBgMIgDgRQgBgHACgFQACgFAFgDQAFgDAGAAQAFAAAFADQAFAEABAGQAEAOABARQACASgCASQgDAUgFAQQgGAQgNALQgNAMgSABIgEABQgKAAgJgFg");
	this.shape_60.setTransform(-384.4179,338.7552);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#CC0000").s().p("AAABXQgWgBgTgKQgPgIgKgNQgKgNgFgQQgFgPABgPQAAgRAHgPQAHgPAMgMQANgLAPgGQAPgFAQgBQAQgBAQAHQAFACADAEIADABQAVALAMAWQALAVAAAYQgBAYgMAVQgLATgVAJQgTAJgUAAIgDAAgAgFgxQgMABgKAGQgLAHgGALQgIAQAEATQAFATAOALQALAHAOACQANACANgFQANgFAHgLQAIgMAAgPQABgNgHgNQgHgNgNgGQgEgCgCgDQgKgDgIAAIgFAAg");
	this.shape_61.setTransform(-400.5073,339.3979);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#CC0000").s().p("Ag0BBQgCgHAAgIIAAgTIABgQIAAgVIAAgZIAAgWQAAgGADgFQAEgIAIgCQALgEALgBQAKgCALABQAMABAKAEQAJADAIAJQAHAIADANQAGAdgZANQAFAFADAJQAIATgLARQgLASgUAHQgTAGgOAAQgVAAgHgQgAgSAsQAKgBAFgCQAGgEAAgGQABgFgEgFQgFgDgGgCIgGAAgAgHgsIgKABIAAAIIAAAIIAAAHQAXgCADgEQAFgFABgDQABgEgCgCIgEgDIgHgBIgGgBg");
	this.shape_62.setTransform(-415.6419,337.9834);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#CC0000").s().p("Ag3BQQgIgHACgLQAKg1ASgtIADgIIAEgKIAEgKIAFgJIAGgHQAEgDAEgBQAFgBAFABIAIAFQADACAEAGIAEAJIAEALIABAEQAQAtAPAzQABAFgBAEQgBAEgDADIgGAFQgDACgEAAIgIgBQgDgBgDgDQgDgDgBgFIgIgZIgjgCIgJAoQgCALgKACIgEAAQgIAAgGgFgAAIgCIgHgWIgBABIAAABIAAABIgGASIAOABg");
	this.shape_63.setTransform(-428.57,338.7597);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#CC0000").s().p("AgiBKQgEgBgEgEQgEgEgBgEQgBgIAAgJIAAgUIABgRQAAgcgCggQgBgIAFgFQAFgIAKAAIA0ACQAGAAAFADQAFAEABAFQABAGgBAFQgBAFgFAEQgFAEgGAAIgigBIABASIAQAAQAFAAAEADQAEACACAEQADAFAAAEQAAAHgGAFQgFAGgHAAIgQAAIgCAWIAZgEIAVgEQAMgCAEAMQADAKgHAJQgEAHgIABIgRACIgQADIgRACIgFAAIgMgBg");
	this.shape_64.setTransform(-448.0939,338.9313);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#CC0000").s().p("AhRBhQgJgEgBgLQgGg7ABg0IAAgHIAAgIIABgIIABgIIACgIIAEgGIAFgFQAGgEAGAAQAFAAAFADIAIAGIAIAJQAXAdAUAVQARgqAfgkQAEgFAHAAQAHgBAGAEQAFAEACAGQAQBMAEBOQABAMgLAEQgLAEgJgIQgFgFgBgHQgDg1gJg0QgRAbgJAfQgDAKgKACQgKADgHgHQgXgVgSgTIgMgQIABAQIAAAQIAAAIQABAfADAlQABALgIAEQgFACgFAAQgEAAgFgCg");
	this.shape_65.setTransform(-464.2537,339.4847);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#CC0000").s().p("Ag3BQQgIgHACgLQAKg1ASgtIADgIIAEgKIAEgKIAFgJIAGgHQAEgDAEgBQAFgBAFABIAIAFQADACAEAGIAEAJIAEALIABAEQAQAtAPAzQABAFgBAEQgBAEgDADIgGAFQgDACgEAAIgIgBQgDgBgDgDQgDgDgBgFIgIgZIgjgCIgJAoQgCALgKACIgEAAQgIAAgGgFgAAIgCIgHgWIgBABIAAABIAAABIgGASIAOABg");
	this.shape_66.setTransform(-481.42,338.7597);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#CC0000").s().p("AgbBCQgPgKgIgRQgIgQAAgSQAAgRAIgRQAGgNAIgKQAIgKALgGQALgHALAAQAMAAAOAHQAFADADAGQACAFgCAFQgCAFgDAEQgEAEgGABQgGABgGgDQgIgDgFADQgGADgEAIQgFAIgCAJQgDAJABAJQAAAJACAFQADAFAEAEIAIAGQAEACAFgBQAFgBAEgFQAHgIABgRIgKABIgJAAQgGAAgFgEQgEgDgBgFQgCgFACgFQABgGAEgEQAFgDAGAAIAIgBIALAAIAJAAIAKACIAIAEQAEADACAEQADAHAAAJQAAAKgBAKIgFARQgGAQgOALQgNAKgQAAIgBAAQgOAAgQgKg");
	this.shape_67.setTransform(-494.275,338.2495);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#CC0000").s().p("AglBeQgJgFgBgLIgDhUIgCgOIgBgQIgBgPIACgPQACgNAJgIQAJgHALgBQALAAAMAFQASAIAJAOQAKAOAAAPQABAPgHAPQgGAOgNALIAQAJIAQAJQAEACACAEQADADAAAEIgBAIQgBAEgDADIgGAEQgEACgEAAQgEAAgEgDIgVgLIgTgLIABARIABASQABALgJAFQgFACgEAAQgFAAgFgCgAgRgtIABANIABAIIABATQAGgDAFgGQAEgGABgHQACgHgCgHQgCgGgGgFQgEgDgDAAQgEAAAAAKg");
	this.shape_68.setTransform(-514.075,339.5977);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#CC0000").s().p("AgiBKQgEgBgEgEQgEgEgBgEQgBgIAAgJIAAgUIABgRQAAgcgCggQgBgIAFgFQAFgIAKAAIA0ACQAGAAAFADQAFAEABAFQABAGgBAFQgBAFgFAEQgFAEgGAAIgigBIABASIAQAAQAFAAAEADQAEACACAEQADAFAAAEQAAAHgGAFQgFAGgHAAIgQAAIgCAWIAZgEIAVgEQAMgCAEAMQADAKgHAJQgEAHgIABIgRACIgQADIgRACIgFAAIgMgBg");
	this.shape_69.setTransform(-525.7439,338.9313);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#CC0000").s().p("AgnBbQgJgFgBgLQgFhGAAhFQAAgHADgEQAEgFAGgBQAFgBAFABQAGABADAFQAEAEAAAHIABA1IAQgBIAPgBIAAg+QAAgHAEgEQAEgFAFgBQAGgBAFABQAFABAEAFQADAEAAAHQgBBKAGBKQABALgJAEQgIAEgKgEQgJgEgCgLIgDgzIgeACIADAzQAAALgIAFQgFACgEAAQgFAAgFgCg");
	this.shape_70.setTransform(-537.97,337.9625);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#CC0000").s().p("AgHBhQgKgEgBgLQgGhHAEhJIgkAAQgHAAgEgEQgFgDgBgGQgBgFABgFQABgGAFgEQAEgDAHAAIBxgBQAHAAAFAEQAEAEABAFQABAGgBAFQgBAFgEAEQgFAEgHAAIgVAAIgUAAQgFBJAHBHQABALgJAFQgEACgEAAQgEAAgFgDg");
	this.shape_71.setTransform(-551.925,340.4316);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#CC0000").s().p("AAABXQgWgBgTgKQgPgIgKgNQgKgNgFgQQgFgPABgPQAAgRAHgPQAHgPAMgMQANgLAPgGQAPgFAQgBQAQgBAQAHQAFACADAEIADABQAVALAMAWQALAVAAAYQgBAYgMAVQgLATgVAJQgTAJgUAAIgDAAgAgFgxQgMABgKAGQgLAHgGALQgIAQAEATQAFATAOALQALAHAOACQANACANgFQANgFAHgLQAIgMAAgPQABgNgHgNQgHgNgNgGQgEgCgCgDQgKgDgIAAIgFAAg");
	this.shape_72.setTransform(-568.5073,339.3979);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#CC0000").s().p("Ag5BNQgFgEgBgJQgBgyAFgxQACgLAIgFQAIgEAKAEQAHAEAFAGQAFAGAGAKIAHAOQASAcAIAJIACgdIABgfIAAgdQAAgHAEgFQADgEAGgBQAFgCAFACQAGABADAEQAEAFAAAHQgBAvgEApIAAALIgBALIgCAKQgBAGgDAEIgHAIQgFADgFAAIgJgDIgJgGIgKgJIgHgJIgIgLIgGgJIgMgPIAAAwQAAANgLAEIgIABQgGAAgGgFg");
	this.shape_73.setTransform(-584.8661,338.4321);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#CC0000").s().p("AA4BrQgKgCgEgKIgKgbIgKgbQgcABgaAEIgKAvQgCALgKACQgJACgIgHQgIgHACgKQAOhJASg/IADgKIADgMIADgLIAGgLQADgEAEgDQAFgDAGgBQAGAAAGADQAEADAEAEIAGAMIAGANIAEAOIADAKIAyCFQAEALgIAGQgFAGgIAAIgEgBgAgNgeIgEARIgEANIgCAIIAfgDIgFgQIgGgTIgGgSg");
	this.shape_74.setTransform(-599.7429,337.4605);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#CC0000").s().p("AguAPQgGgGAAgHQAAgGAGgFQAFgFAHgBQAigEAjgBQALAAAFAJQAEAJgEAIQgFAJgLAAQgjACgiADIgCABQgFAAgFgGg");
	this.shape_75.setTransform(-613.4625,338.3628);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#CC0000").s().p("AgQBnQgGgBgDgEQgEgEgCgFQgCgFADgGQACgFAGgDQAMgHAFgJQAEgJgCgKQgCgJgFgLIgLgVQgGgKgFgMQgFgMAAgJQAAgYARgQQARgPAXACQALABAEAJQAFAKgFAIQgEAJgLgBQgHAAgFABQgEABgCADIgCAHIAAAJIAEAKIAEAKIAFAKIAFAIIAEAGQANAYADAQQABALgDAKQgCAJgHAIQgGAHgIAGQgIAGgJAFQgFACgEAAIgDAAg");
	this.shape_76.setTransform(-225.2107,308.6807);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#CC0000").s().p("AgHBhQgKgEgBgLQgGhHAEhJIgkAAQgHAAgEgEQgFgDgBgGQgBgFABgFQABgGAFgEQAEgDAHAAIBxgBQAHAAAFAEQAEAEABAFQABAGgBAFQgBAFgEAEQgFAEgHAAIgVAAIgUAAQgFBJAHBHQABALgJAFQgEACgEAAQgEAAgFgDg");
	this.shape_77.setTransform(-236.825,309.7816);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#CC0000").s().p("AglBeQgJgFgBgLIgDhUIgCgOIgBgQIgBgPIACgPQACgNAJgIQAJgHALgBQALAAAMAFQASAIAJAOQAKAOAAAPQABAPgHAPQgGAOgNALIAQAJIAQAJQAEACACAEQADADAAAEIgBAIQgBAEgDADIgGAEQgEACgEAAQgEAAgEgDIgVgLIgTgLIABARIABASQABALgJAFQgFACgEAAQgFAAgFgCgAgRgtIABANIABAIIABATQAGgDAFgGQAEgGABgHQACgHgCgHQgCgGgGgFQgEgDgDAAQgEAAAAAKg");
	this.shape_78.setTransform(-250.025,308.9477);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#CC0000").s().p("Ag3BQQgIgHACgLQAKg1ASgtIADgIIAEgKIAEgKIAFgJIAGgHQAEgDAEgBQAFgBAFABIAIAFQADACAEAGIAEAJIAEALIABAEQAQAtAPAzQABAFgBAEQgBAEgDADIgGAFQgDACgEAAIgIgBQgDgBgDgDQgDgDgBgFIgIgZIgjgCIgJAoQgCALgKACIgEAAQgIAAgGgFgAAIgCIgHgWIgBABIAAABIAAABIgGASIAOABg");
	this.shape_79.setTransform(-262.82,308.1097);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#CC0000").s().p("AgHBhQgKgEgBgLQgGhHAEhJIgkAAQgHAAgEgEQgFgDgBgGQgBgFABgFQABgGAFgEQAEgDAHAAIBxgBQAHAAAFAEQAEAEABAFQABAGgBAFQgBAFgEAEQgFAEgHAAIgVAAIgUAAQgFBJAHBHQABALgJAFQgEACgEAAQgEAAgFgDg");
	this.shape_80.setTransform(-276.725,309.7816);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#CC0000").s().p("AgQBnQgGgBgDgEQgEgEgCgFQgCgFADgGQACgFAGgDQAMgHAFgJQAEgJgCgKQgCgJgFgLIgLgVQgGgKgFgMQgFgMAAgJQAAgYARgQQARgPAXACQALABAEAJQAFAKgFAIQgEAJgLgBQgHAAgFABQgEABgCADIgCAHIAAAJIAEAKIAEAKIAFAKIAFAIIAEAGQANAYADAQQABALgDAKQgCAJgHAIQgGAHgIAGQgIAGgJAFQgFACgEAAIgDAAg");
	this.shape_81.setTransform(-288.5607,308.6807);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#CC0000").s().p("AgiBKQgEgBgEgEQgEgEgBgEQgBgIAAgJIAAgUIABgRQAAgcgCggQgBgIAFgFQAFgIAKAAIA0ACQAGAAAFADQAFAEABAFQABAGgBAFQgBAFgFAEQgFAEgGAAIgigBIABASIAQAAQAFAAAEADQAEACACAEQADAFAAAEQAAAHgGAFQgFAGgHAAIgQAAIgCAWIAZgEIAVgEQAMgCAEAMQADAKgHAJQgEAHgIABIgRACIgQADIgRACIgFAAIgMgBg");
	this.shape_82.setTransform(-298.0939,308.2813);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#CC0000").s().p("AglBeQgJgFgBgLIgDhUIgCgOIgBgQIgBgPIACgPQACgNAJgIQAJgHALgBQALAAAMAFQASAIAJAOQAKAOAAAPQABAPgHAPQgGAOgNALIAQAJIAQAJQAEACACAEQADADAAAEIgBAIQgBAEgDADIgGAEQgEACgEAAQgEAAgEgDIgVgLIgTgLIABARIABASQABALgJAFQgFACgEAAQgFAAgFgCgAgRgtIABANIABAIIABATQAGgDAFgGQAEgGABgHQACgHgCgHQgCgGgGgFQgEgDgDAAQgEAAAAAKg");
	this.shape_83.setTransform(-309.675,308.9477);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#CC0000").s().p("AgHBhQgKgEgBgLQgGhHAEhJIgkAAQgHAAgEgEQgFgDgBgGQgBgFABgFQABgGAFgEQAEgDAHAAIBxgBQAHAAAFAEQAEAEABAFQABAGgBAFQgBAFgEAEQgFAEgHAAIgVAAIgUAAQgFBJAHBHQABALgJAFQgEACgEAAQgEAAgFgDg");
	this.shape_84.setTransform(-331.125,309.7816);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#CC0000").s().p("AgFBVQgJgEgBgLQgEgwABguQAAgLAKgFQAIgEAJAEQAJAFAAALQgCAuAEAwQABALgIAEQgFACgEAAQgEAAgFgCgAgPg3QgFgGAAgHQAAgHAFgFQAFgGAIAAQAIAAAEAGQAFAFAAAHQAAAHgFAGQgEAFgIAAQgIAAgFgFg");
	this.shape_85.setTransform(-341.4447,305.7875);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#CC0000").s().p("AgbBCQgPgKgIgRQgIgQAAgSQAAgRAIgRQAGgNAIgKQAIgKALgGQALgHALAAQAMAAAOAHQAFADADAGQACAFgCAFQgCAFgDAEQgEAEgGABQgGABgGgDQgIgDgFADQgGADgEAIQgFAIgCAJQgDAJABAJQAAAJACAFQADAFAEAEIAIAGQAEACAFgBQAFgBAEgFQAHgIABgRIgKABIgJAAQgGAAgFgEQgEgDgBgFQgCgFACgFQABgGAEgEQAFgDAGAAIAIgBIALAAIAJAAIAKACIAIAEQAEADACAEQADAHAAAJQAAAKgBAKIgFARQgGAQgOALQgNAKgQAAIgBAAQgOAAgQgKg");
	this.shape_86.setTransform(-358.375,307.5995);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#CC0000").s().p("Ag5BNQgFgEgBgJQgBgyAFgxQACgLAIgFQAIgEAKAEQAHAEAFAGQAFAGAGAKIAHAOQASAcAIAJIACgdIABgfIAAgdQAAgHAEgFQADgEAGgBQAFgCAFACQAGABADAEQAEAFAAAHQgBAvgEApIAAALIgBALIgCAKQgBAGgDAEIgHAIQgFADgFAAIgJgDIgJgGIgKgJIgHgJIgIgLIgGgJIgMgPIAAAwQAAANgLAEIgIABQgGAAgGgFg");
	this.shape_87.setTransform(-371.9661,307.7821);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#CC0000").s().p("AAABXQgWgBgTgKQgPgIgKgNQgKgNgFgQQgFgPABgPQAAgRAHgPQAHgPAMgMQANgLAPgGQAPgFAQgBQAQgBAQAHQAFACADAEIADABQAVALAMAWQALAVAAAYQgBAYgMAVQgLATgVAJQgTAJgUAAIgDAAgAgFgxQgMABgKAGQgLAHgGALQgIAQAEATQAFATAOALQALAHAOACQANACANgFQANgFAHgLQAIgMAAgPQABgNgHgNQgHgNgNgGQgEgCgCgDQgKgDgIAAIgFAAg");
	this.shape_88.setTransform(-388.2573,308.7479);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#CC0000").s().p("AglBeQgJgFgBgLIgDhUIgCgOIgBgQIgBgPIACgPQACgNAJgIQAJgHALgBQALAAAMAFQASAIAJAOQAKAOAAAPQABAPgHAPQgGAOgNALIAQAJIAQAJQAEACACAEQADADAAAEIgBAIQgBAEgDADIgGAEQgEACgEAAQgEAAgEgDIgVgLIgTgLIABARIABASQABALgJAFQgFACgEAAQgFAAgFgCgAgRgtIABANIABAIIABATQAGgDAFgGQAEgGABgHQACgHgCgHQgCgGgGgFQgEgDgDAAQgEAAAAAKg");
	this.shape_89.setTransform(-403.125,308.9477);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#CC0000").s().p("AAtBYQgHgCgEgGQgWgfgUguIgRAkIgSAkQgEAHgHACQgHACgHgEQgHgEgBgHQgPg8gIhBQgBgLAJgEQAIgFAKAFQAJAEACALQADAgAHAhIAPgdIAPgfQACgEAEgDQADgCAEAAIAIACQADABADAEIAFAGQASAsAOAZQAMgyAKgwQACgLAKgCQAJgCAIAHQAIAGgCALQgOBGgSBHQgCAIgGADQgEACgFAAIgFgBg");
	this.shape_90.setTransform(-419.7407,306.4278);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#CC0000").s().p("AgiBKQgEgBgEgEQgEgEgBgEQgBgIAAgJIAAgUIABgRQAAgcgCggQgBgIAFgFQAFgIAKAAIA0ACQAGAAAFADQAFAEABAFQABAGgBAFQgBAFgFAEQgFAEgGAAIgigBIABASIAQAAQAFAAAEADQAEACACAEQADAFAAAEQAAAHgGAFQgFAGgHAAIgQAAIgCAWIAZgEIAVgEQAMgCAEAMQADAKgHAJQgEAHgIABIgRACIgQADIgRACIgFAAIgMgBg");
	this.shape_91.setTransform(-443.2939,308.2813);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#CC0000").s().p("Ag5BNQgFgEgBgJQgBgyAFgxQACgLAIgFQAIgEAKAEQAHAEAFAGQAFAGAGAKIAHAOQASAcAIAJIACgdIABgfIAAgdQAAgHAEgFQADgEAGgBQAFgCAFACQAGABADAEQAEAFAAAHQgBAvgEApIAAALIgBALIgCAKQgBAGgDAEIgHAIQgFADgFAAIgJgDIgJgGIgKgJIgHgJIgIgLIgGgJIgMgPIAAAwQAAANgLAEIgIABQgGAAgGgFg");
	this.shape_92.setTransform(-456.3661,307.7821);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#CC0000").s().p("AAABXQgWgBgTgKQgPgIgKgNQgKgNgFgQQgFgPABgPQAAgRAHgPQAHgPAMgMQANgLAPgGQAPgFAQgBQAQgBAQAHQAFACADAEIADABQAVALAMAWQALAVAAAYQgBAYgMAVQgLATgVAJQgTAJgUAAIgDAAgAgFgxQgMABgKAGQgLAHgGALQgIAQAEATQAFATAOALQALAHAOACQANACANgFQANgFAHgLQAIgMAAgPQABgNgHgNQgHgNgNgGQgEgCgCgDQgKgDgIAAIgFAAg");
	this.shape_93.setTransform(-472.6573,308.7479);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#CC0000").s().p("AgHBhQgKgEgBgLQgGhHAEhJIgkAAQgHAAgEgEQgFgDgBgGQgBgFABgFQABgGAFgEQAEgDAHAAIBxgBQAHAAAFAEQAEAEABAFQABAGgBAFQgBAFgEAEQgFAEgHAAIgVAAIgUAAQgFBJAHBHQABALgJAFQgEACgEAAQgEAAgFgDg");
	this.shape_94.setTransform(-496.925,309.7816);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#CC0000").s().p("AgiBKQgEgBgEgEQgEgEgBgEQgBgIAAgJIAAgUIABgRQAAgcgCggQgBgIAFgFQAFgIAKAAIA0ACQAGAAAFADQAFAEABAFQABAGgBAFQgBAFgFAEQgFAEgGAAIgigBIABASIAQAAQAFAAAEADQAEACACAEQADAFAAAEQAAAHgGAFQgFAGgHAAIgQAAIgCAWIAZgEIAVgEQAMgCAEAMQADAKgHAJQgEAHgIABIgRACIgQADIgRACIgFAAIgMgBg");
	this.shape_95.setTransform(-509.7439,308.2813);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#CC0000").s().p("AgbBCQgPgKgIgRQgIgQAAgSQAAgRAIgRQAGgNAIgKQAIgKALgGQALgHALAAQAMAAAOAHQAFADADAGQACAFgCAFQgCAFgDAEQgEAEgGABQgGABgGgDQgIgDgFADQgGADgEAIQgFAIgCAJQgDAJABAJQAAAJACAFQADAFAEAEIAIAGQAEACAFgBQAFgBAEgFQAHgIABgRIgKABIgJAAQgGAAgFgEQgEgDgBgFQgCgFACgFQABgGAEgEQAFgDAGAAIAIgBIALAAIAJAAIAKACIAIAEQAEADACAEQADAHAAAJQAAAKgBAKIgFARQgGAQgOALQgNAKgQAAIgBAAQgOAAgQgKg");
	this.shape_96.setTransform(-521.975,307.5995);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#CC0000").s().p("AgSBKQgLgFgHgJQgHgJgGgMQgFgMgDgNIgEgaIgCgaIABgWQAAgLAKgEQAJgFAJAFQAJAEgBALIAAAPIAAATIACAWIAEATQADAKAFAHQAFAGAHACQAJACAHgHQAGgIACgMQADgNAAgNQAAgPgBgMIgDgRQgBgHACgFQACgFAFgDQAFgDAGAAQAFAAAFADQAFAEABAGQAEAOABARQACASgCASQgDAUgFAQQgGAQgNALQgNAMgSABIgEABQgKAAgJgFg");
	this.shape_97.setTransform(-543.0679,308.1052);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#CC0000").s().p("AAABXQgWgBgTgKQgPgIgKgNQgKgNgFgQQgFgPABgPQAAgRAHgPQAHgPAMgMQANgLAPgGQAPgFAQgBQAQgBAQAHQAFACADAEIADABQAVALAMAWQALAVAAAYQgBAYgMAVQgLATgVAJQgTAJgUAAIgDAAgAgFgxQgMABgKAGQgLAHgGALQgIAQAEATQAFATAOALQALAHAOACQANACANgFQANgFAHgLQAIgMAAgPQABgNgHgNQgHgNgNgGQgEgCgCgDQgKgDgIAAIgFAAg");
	this.shape_98.setTransform(-559.1573,308.7479);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#CC0000").s().p("AADBhQgEgCgEgEQgEgEgBgFQgBgGADgGQAQgdALgtIgIAEQgFABgFAAQgEAAgFgBIgJgEIgJgGIgIgIIgIgJIgHgJIgHgIIgGgHQgHgIADgKQAEgKAJgDQAJgCAIAHIAKAMIAQAUIAJAJQAEABAHgKQAIgKAFgLIAJgRQAEgJAJgDQAJgDAHAEQAIAFgBAKQgKBqgjA9QgDAGgGACIgGABIgFAAg");
	this.shape_99.setTransform(-575.4748,307.8306);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#CC0000").s().p("AglBMQgJgFgBgLIgEg8IgEg6QgBgHAGgGQAGgGAHAAQAmAEAmgDQALgBAEAIQAFAJgFAJQgEAKgLABQgdADgbgCIAAAJIABAJIABAJQAMAAAKgCQAIgCAGAEQAHADABAIQACAGgDAGQgEAHgHACQgQADgOAAIADAlQAAALgIAFQgFACgEAAQgFAAgFgCg");
	this.shape_100.setTransform(-595.6644,308.9356);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#CC0000").s().p("AgCBUQgGgCgDgEQgFgFAAgGQgChDAAhCQgBgGAEgFQADgEAGgCQAGgBAEABQAFACAEAEQADAFABAGIACCFQAAAGgCAFQgFAEgEACIgGAAIgEAAg");
	this.shape_101.setTransform(-604.85,306);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#CC0000").s().p("AguAPQgGgGAAgHQAAgGAGgFQAFgFAHgBQAigEAjgBQALAAAFAJQAEAJgEAIQgFAJgLAAQgjACgiADIgCABQgFAAgFgGg");
	this.shape_102.setTransform(-613.4625,307.7128);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#CC0000").s().p("AgKApQgFgGAAgHQAAgHAFgGQAFgGAHAAQAIAAAFAGQAFAGAAAHQAAAHgFAGQgFAFgIAAQgHAAgFgFgAgOgOQgFgHAAgGQAAgHAFgFQAFgGAIAAQAIAAAEAGQAFAFAAAHQAAAGgFAHQgEAFgIAAQgIAAgFgFg");
	this.shape_103.setTransform(-547.175,276.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#CC0000").s().p("AgQBnQgGgBgDgEQgEgEgCgFQgCgFADgGQACgFAGgDQAMgHAFgJQAEgJgCgKQgCgJgFgLIgLgVQgGgKgFgMQgFgMAAgJQAAgYARgQQARgPAXACQALABAEAJQAFAKgFAIQgEAJgLgBQgHAAgFABQgEABgCADIgCAHIAAAJIAEAKIAEAKIAFAKIAFAIIAEAGQANAYADAQQABALgDAKQgCAJgHAIQgGAHgIAGQgIAGgJAFQgFACgEAAIgDAAg");
	this.shape_104.setTransform(-554.1107,278.0307);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#CC0000").s().p("AgiBKQgEgBgEgEQgEgEgBgEQgBgIAAgJIAAgUIABgRQAAgcgCggQgBgIAFgFQAFgIAKAAIA0ACQAGAAAFADQAFAEABAFQABAGgBAFQgBAFgFAEQgFAEgGAAIgigBIABASIAQAAQAFAAAEADQAEACACAEQADAFAAAEQAAAHgGAFQgFAGgHAAIgQAAIgCAWIAZgEIAVgEQAMgCAEAMQADAKgHAJQgEAHgIABIgRACIgQADIgRACIgFAAIgMgBg");
	this.shape_105.setTransform(-563.6439,277.6313);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#CC0000").s().p("AgHBhQgKgEgBgLQgGhHAEhJIgkAAQgHAAgEgEQgFgDgBgGQgBgFABgFQABgGAFgEQAEgDAHAAIBxgBQAHAAAFAEQAEAEABAFQABAGgBAFQgBAFgEAEQgFAEgHAAIgVAAIgUAAQgFBJAHBHQABALgJAFQgEACgEAAQgEAAgFgDg");
	this.shape_106.setTransform(-576.925,279.1316);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#CC0000").s().p("AAABXQgWgBgTgKQgPgIgKgNQgKgNgFgQQgFgPABgPQAAgRAHgPQAHgPAMgMQANgLAPgGQAPgFAQgBQAQgBAQAHQAFACADAEIADABQAVALAMAWQALAVAAAYQgBAYgMAVQgLATgVAJQgTAJgUAAIgDAAgAgFgxQgMABgKAGQgLAHgGALQgIAQAEATQAFATAOALQALAHAOACQANACANgFQANgFAHgLQAIgMAAgPQABgNgHgNQgHgNgNgGQgEgCgCgDQgKgDgIAAIgFAAg");
	this.shape_107.setTransform(-593.5073,278.0979);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#CC0000").s().p("AApBhQgIgCgFgHIgYgjIgWgjIgTgeIAAADIAAADIAAACIAAABQABAcAFAfQABALgIAHQgIAHgJgCQgKgCgBgLQgIgzAAgpIgBgJIAAgKIABgJIACgJIAEgHIAHgHQAFgEAGABQAGABAFAFQAIAHAIALIARAaIAMAVIAHALIAJANIAIALIAEgzIAFg1QABgLAJgEQAKgFAJAFQAIAEgBALIgNCdQgBAJgGAFQgFAEgGAAIgDAAg");
	this.shape_108.setTransform(-610.8947,276.9958);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#00FF33").s().p("AgZCvQgLgJAAgSQAAgPALgKQAKgLAPAAQAPAAALALQALAKAAAPQAAARgLAKQgLAKgPAAQgOAAgLgKgAgTA6QgFgLgCgXIgIh0IgCgxQAAgUALgLQAKgMARAAQAVAAAHAPQAHAOAAAcIgCAgIgKB4QgCAVgGAMQgFALgMAAQgNAAgGgLg");
	this.shape_109.setTransform(-194.575,534.625);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#00FF33").s().p("AgYCqQgRgKgFgTQgEgSAAgfIAAh/IgJAAQgPAAgIgHQgHgHAAgKQAAgLAIgGQAIgHAPAAIAIAAIAAgoIABgZQAAgKAEgGQAEgHAIgEQAHgFAIAAQANAAAKAKQAGAGADAJIABAaIAAAuIAZAAQANAAAIAHQAHAGAAALQABANgLAFQgKAGgVAAIgMAAIAAB5IABAZQABAIAFAFQAFAFALAAIAPgCIAQgCQAIAAAHAHQAGAGAAAKQAAAQgSAIQgRAJghAAQgeAAgQgLg");
	this.shape_110.setTransform(-208.9,535.075);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#00FF33").s().p("AhaBkQgjgkAAg9QAAgoAQgfQAQggAegRQAegRApgBQAZAAAWAIQAWAIAPALQAPAMAHAOQAIAOAAALQAAAMgJAJQgIAIgNAAQgIAAgGgEIgMgOQgMgTgOgJQgNgJgVAAQgcAAgSAXQgSAXAAAnQAAATAFAQQAEAQAJALQAIAKANAGQAMAGAPAAQATAAAPgJQAOgKALgSQAGgMAIgGQAGgGALgBQAMAAAIAKQAIAJAAAKQAAANgHAOQgIAOgPANQgPANgYAIQgXAIgdAAQg9gBgigjg");
	this.shape_111.setTransform(-231.55,539.55);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#00FF33").s().p("AhaBjQgkgkAAg/QAAgdAJgZQAJgZARgSQAQgSAZgKQAZgKAdAAQAnAAAcARQAcAQAOAaQAOAbAAAbQAAAYgPAHQgOAIgaAAIiCAAQABAWAJASQAIARAPAJQAPAJARAAQAMAAAKgDQAKgDAJgGIARgNIAUgSQAFgFAKAAQAKAAAGAGQAHAGAAAKQAAAJgHAMQgHAMgPALQgOALgVAIQgWAHgcAAQg/AAgkglgAA+gUQgCgigQgRQgQgRgaAAQgYAAgQARQgQARgEAiIB4AAIAAAAg");
	this.shape_112.setTransform(-259.125,539.575);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#00FF33").s().p("AhSB+QgJgLAAgUIAAi5QABgsAggBQAQAAAIALQAHAKABAVQAMgVAMgKQAMgLAVAAQAVAAAUALQATAKAAASQABAMgJAIQgJAIgJAAIgRgEQgPgFgKAAQgPAAgJAIQgJAHgFAQQgFAOgCAWIgCAxIAAA4QAAAVgKAKQgJAKgOgBQgPABgKgKg");
	this.shape_113.setTransform(-280.1,539.6);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#00FF33").s().p("AhRB+QgKgLABgUIAAi5QgBgsAhgBQAQAAAIALQAHAKABAVQAMgVANgKQALgLAVAAQAVAAAUALQAUAKgBASQAAAMgIAIQgJAIgJAAIgSgEQgOgFgLAAQgOAAgIAIQgKAHgFAQQgFAOgCAWIgCAxIAAA4QAAAVgKAKQgJAKgPgBQgOABgJgKg");
	this.shape_114.setTransform(-299.3,539.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#00FF33").s().p("Ag2B+QgYgKgSgSQgRgTgJgYQgKgZAAgeQAAgdAKgZQAJgaARgSQASgRAYgKQAZgKAdAAQAeAAAZAKQAYAKASASQARATAKAYQAJAZAAAdQAAAegKAZQgJAZgRATQgSARgYAKQgZAJgeAAQgeAAgYgJgAgihLQgPAKgIAUQgIAUAAAZQAAAaAIAUQAIATAPALQAPAKATAAQAeAAASgXQASgXAAgoQAAgngSgXQgSgXgeAAQgTAAgPAKg");
	this.shape_115.setTransform(-324.925,539.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#00FF33").s().p("AgmC0QgWgFgUgMQgSgLgRgTQgNgRgKgUQgLgWgFgXQgEgYAAgbQAAgpAMgjQANgiAXgYQAXgYAggNQAfgNAjAAQAsAAAhARQAjASASAZQARAaABAXQAAAMgJAKQgJAJgMAAQgOAAgIgHQgGgGgJgQQgOgbgTgNQgTgNgcAAQgsgBgaAjQgbAhAAA+QAAAqALAbQANAcAVAOQAWANAbAAQAfAAAWgPQAVgPAMgfQAEgNAHgJQAHgKAPABQANgBAJAKQAKAJAAANQgBARgIAUQgJAUgSATQgRATgcAMQgcAMgmAAQgbAAgYgFg");
	this.shape_116.setTransform(-356.6,534.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.egg},{t:this.plasticbag},{t:this.roll1},{t:this.cup},{t:this.tincan},{t:this.burger},{t:this.plasticbottle},{t:this.banana},{t:this.chippacket},{t:this.apple},{t:this.roll2},{t:this.can},{t:this.paper},{t:this.fruitbox},{t:this.plasticstraw},{t:this.milkbox},{t:this.chocwrapper},{t:this.yoghurt},{t:this.teabag}]}).to({state:[]},1).wait(1));

	// bins
	this.tick_green = new lib.tick_1();
	this.tick_green.name = "tick_green";
	this.tick_green.setTransform(1032.9,528);

	this.tick_red = new lib.tick_1();
	this.tick_red.name = "tick_red";
	this.tick_red.setTransform(259.95,519.6);

	this.bin_green = new lib.bin_green_1();
	this.bin_green.name = "bin_green";
	this.bin_green.setTransform(870.7,583.05,0.9122,0.9122,0,0,0,0.1,0.1);

	this.bin_yellow = new lib.bin_yellow_1();
	this.bin_yellow.name = "bin_yellow";
	this.bin_yellow.setTransform(512.2,580.9,0.9122,0.9122,0,0,0,0.1,0.1);

	this.bin_red = new lib.bin_red_1();
	this.bin_red.name = "bin_red";
	this.bin_red.setTransform(153.65,583.05,0.9122,0.9122,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bin_red},{t:this.bin_yellow},{t:this.bin_green},{t:this.tick_red},{t:this.tick_green}]}).to({state:[]},1).wait(1));

	// BG
	this.shape_117 = new cjs.Shape();
	var sprImg_shape_117 = cjs.SpriteSheetUtils.extractFrame(ss["index_atlas_1"],0);
	sprImg_shape_117.onload = function(){
		this.shape_117.graphics.bf(sprImg_shape_117, null, new cjs.Matrix2D(0.685,0,0,0.685,-519.2,-328.6)).s().p("EhRHAzWMAAAhmrMCiOAAAMAABBmrg")
	}.bind(this);
	this.shape_117.setTransform(513.1625,319.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_117).wait(2));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-170,311,2176,484.9);
// library properties:
lib.properties = {
	id: 'D56260FF34E2924CA9CAFE5911B3E1C0',
	width: 1024,
	height: 640,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_1.png?1737606007753", id:"index_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['D56260FF34E2924CA9CAFE5911B3E1C0'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;