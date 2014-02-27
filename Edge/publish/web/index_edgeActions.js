
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){var stageWidth=$(window).width();var stageHeight=$(window).height();sym.getSymbolElement().height(stageHeight);sym.getSymbolElement().width(stageWidth);function Particle(){this.speed;this.left;this.width;this.fromY;this.opacity;this.opacityBounceSpeed;this.rotate;this.particle=sym.createChildSymbol("particleContainer_sym","Stage");this.randomize=function(){this.speed=6;this.left=Math.floor(Math.random()*stageWidth);this.width=Math.floor(Math.random()*30+10);this.fromY=Math.floor(Math.random()*stageHeight);this.opacity=Math.random()*0.8+0.20;this.opacityBounceSpeed=Math.random()*4.6+3;this.rotate=Math.floor(Math.random()*360);this.particle.getSymbolElement().css({"position":"absolute","top":this.fromY,"left":this.left});this.particle.getSymbol("particle_sym").$("particle_img").css("opacity",0);this.particle.getSymbol("particle_sym").$("particle_img").css("width",this.width);this.particle.getSymbol("particle_sym").$("particle_img").css("height",this.width);}
this.test=function(){console.log("repeat")};}
var numberOfItems=30;var particles=[];var ontest=function(){console.log("repeat")};var delay=0.16;for(var i=0;i<numberOfItems;i++){particles[i]=new Particle();particles[i].randomize();var ptl=new TimelineMax({repeat:-1,delay:i*delay});ptl.insert(TweenMax.to(particles[i].particle.getSymbol("particle_sym").$("particle_img"),1,{css:{"opacity":particles[i].opacity}}),0);ptl.insert(TweenMax.to(particles[i].particle.getSymbol("particle_sym").getSymbolElement(),0,{css:{rotation:particles[i].rotate}}),0);ptl.insert(TweenMax.to(particles[i].particle.getSymbol("particle_sym").$("particle_img"),particles[i].speed,{css:{"left":"100"}}),0);ptl.insert(TweenMax.to(particles[i].particle.getSymbol("particle_sym").$("particle_img"),particles[i].opacityBounceSpeed,{css:{"opacity":0},ease:Bounce.easeOut}),1);ptl.play();}});
//Edge binding end
})("stage");
//=========================================================
(function(symbolName){})("particle_sym");
//=========================================================
(function(symbolName){})("particleContainer_sym");
//Edge symbol end:'particleContainer_sym'
})(jQuery,AdobeEdge,"EDGE-987993415");