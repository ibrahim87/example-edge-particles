/***********************
* Adobe Edge Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // insert code to be run when the composition is fully loaded here
         var stageWidth = $(window).width();
         var stageHeight = $(window).height();
         sym.getSymbolElement().height(stageHeight);
         sym.getSymbolElement().width(stageWidth);
         
         function Particle() {
         	this.speed;
         	this.left;
         	this.width;
         	this.fromY;
         	this.opacity;
         	this.opacityBounceSpeed;
         	this.rotate;
         	this.particle = sym.createChildSymbol("particleContainer_sym", "Stage"); //create the particle
         	this.randomize = function() {
         		//console.log("randomize");
         		this.speed = 6;
         		this.left = Math.floor(Math.random()*stageWidth);
         		this.width = Math.floor(Math.random()*30+10);
         		this.fromY = Math.floor(Math.random()*stageHeight);
         		this.opacity = Math.random()*0.8+0.20;
         		this.opacityBounceSpeed = Math.random()*4.6+3;
         		this.rotate = Math.floor(Math.random()*360);
         		//reposition
         		this.particle.getSymbolElement().css({"position":"absolute","top":this.fromY,"left":this.left}); //position the particle
         		this.particle.getSymbol("particle_sym").$("particle_img").css("opacity",0); //set the initial opacity to zero
         		this.particle.getSymbol("particle_sym").$("particle_img").css("width",this.width); //set the width
         		this.particle.getSymbol("particle_sym").$("particle_img").css("height",this.width); //set the height
         	}
         	this.test = function() {console.log("repeat")};
         }
         
         var numberOfItems = 30;
         var particles = [];
         //var tl = new TimelineMax({repeat:-1}); //fades in dna
         //tl.pause();
         var ontest = function() {console.log("repeat")};
         var delay = 0.16;
         for (var i=0; i < numberOfItems; i++) {
         	particles[i] = new Particle();
         	particles[i].randomize();
         	//console.log(particles[i].rotate);
         	//var speed = 6;
         	//var left = Math.floor(Math.random()*stageWidth);
         	//var width = Math.floor(Math.random()*30+10);
         	//var fromY = Math.floor(Math.random()*stageHeight);
         	//var opacity = Math.random()*0.8+0.20;
         	//var opacityBounceSpeed = Math.random()*4.6+3;
         	//var rotate = Math.floor(Math.random()*360);
         	//particles[i] = sym.createChildSymbol("particleContainer_sym", "Stage"); //create the particle
         	//particles[i].getSymbolElement().css({"position":"absolute","top":fromY,"left":left}); //position the particle
         	//particles[i].getSymbol("particle_sym").$("particle_img").css("opacity",0); //set the initial opacity to zero
         	//console.log(particles[i].getSymbol("particle_sym").$("particle_img"));
         	//particles[i].getSymbol("particle_sym").$("particle_img").css("width",width); //set the width
         	//particles[i].getSymbol("particle_sym").$("particle_img").css("height",width); //set the height
         	//particles[i].getSymbol("particle_sym").$("particle_div").css("background-size","100%"); //make the background image particle fill the div container
         	var ptl = new TimelineMax({repeat:-1,delay:i*delay,onRepeat:ontest}); //create the individual particle's timeline
         	//var ptl = new TimelineMax({repeat:-1,delay:i*delay});
         	ptl.insert(TweenMax.to(particles[i].particle.getSymbol("particle_sym").$("particle_img"),1,{css:{"opacity":particles[i].opacity}}),0);
         	ptl.insert(TweenMax.to(particles[i].particle.getSymbol("particle_sym").getSymbolElement(),0,{css:{rotation:particles[i].rotate}}),0); //random rotate
         	ptl.insert(TweenMax.to(particles[i].particle.getSymbol("particle_sym").$("particle_img"),particles[i].speed,{css:{"left":"100"}}),0);
         	ptl.insert(TweenMax.to(particles[i].particle.getSymbol("particle_sym").$("particle_img"),particles[i].opacityBounceSpeed,{css:{"opacity":0},ease:Bounce.easeOut}),1);
         	ptl.play();
         	//tl.append(ptl, -speed*.98);
         }
         //tl.play();
         
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

//=========================================================
   (function(symbolName) {

   })("particle_sym");
   //Edge symbol end:'particle_sym'

//=========================================================
   (function(symbolName) {

   })("particleContainer_sym");
   //Edge symbol end:'particleContainer_sym'

})(jQuery, AdobeEdge, "EDGE-987993415");