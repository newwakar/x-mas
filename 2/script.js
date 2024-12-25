$('#button').on('click', function() {
  var 
  box=document.getElementById("Layer_1"),
  present=document.getElementById("present"),
  button=document.getElementById("button"),
      top=document.getElementById("top"),
   tree=document.getElementById("tree"),
       star = document.getElementById("star"),
      tr1=document.getElementById("tr1"),
      tr2=document.getElementById("tr2"),
      tr3=document.getElementById("tr3"),
      tr4=document.getElementById("tr4"),
      ballred1=document.getElementById("ballred1"),
      ballred2=document.getElementById("ballred2"),
      ballred3=document.getElementById("ballred3"),
      ballred4=document.getElementById("ballred4"),
      ballred5=document.getElementById("ballred5"),
      ballred6=document.getElementById("ballred6");
       
  var tl = new TimelineLite()
  tl
  .to(button, 1, {
 scale: 0.1, opacity:0})
  .fromTo(box,0.10, {x:-10},{x:20,repeat:5,yoyo:true,ease:Sine.easeInOut})
  .to(top, 1, {
    x:-620, y:620, rotation: -55
  })
    
.to(ballred1, 0.1, {x:280, y:120})
.to(ballred2, 0.1, {x:670, y:120})
.to(ballred3, 0.1, {x:710, y:310})
.to(ballred4, 0.1, {x:240, y:310})
.to(ballred5, 0.1, {x:160, y:530})
.to(ballred6, 0.1, {x:800, y:530})
  
  .to(tree, 0.2, {x:-100})
  .to(tree, 2, {autoAlpha: 1, ease: Bounce.easeInOut, y:-330})
  .to(tree, 2, {scale: 1.5 }, 'scale')
  
  .to(present, 2, {scale: 0.3,transformOrigin:"40% 85%;" }, 'scale')
  .to(top, 0.5, {
    x:0, y:40, rotation:0
  })
  
  
  
  // .to(tr4, 0.2, {y:100}) 
  // .to(tr4, 0.2, {autoAlpha: 1}) 

  
//   .to(tr4, 1, {y:90}) 
//   .to(tr4, 1, {y:-50}, 'first')
//   .to(tr3, 1, {autoAlpha: 1, y:-50}, 'first+=0.1')
//   .to([tr4,tr3], 1, {y:-160}, 'second')
//   .to(tr2, 1, { autoAlpha: 1, y:-160}, 'second')
//   .to([tr4, tr3, tr2], 1, {y:-330}, 'third')
//   .to(tr1, 1, { autoAlpha: 1, y:-330}, 
//    'third')
  .to(star, 2, {autoAlpha: 1, x:480, y:-260, scale: 5, ease:Bounce.easeOut}, "zoom")
.to(star, 2.1, {autoAlpha: 1, scale: 3, transformOrigin:"50% 50%;"})

.to(star, 1, {rotation: 360, scale: 4.2, transformOrigin:"50% 50%;", fill:"rgb(255,216,0)", repeatDelay:0.1, repeat:-1, yoyo:true})

  
.to(ballred1, 0.3, {autoAlpha: 1})
.to(ballred2, 0.3, {autoAlpha: 1})
.to(ballred3, 0.3, {autoAlpha: 1})
.to(ballred4, 0.3, {autoAlpha: 1})
.to(ballred5, 0.3, {autoAlpha: 1})
.to(ballred6, 0.3, {autoAlpha: 1})
  
.fromTo (ballred4, 2, {rotation:20},{rotation:-20,transformOrigin:"top center", ease:Power2.easeInOut, repeatDelay:0.1, repeat:-1, yoyo:true })
 
.fromTo ([ballred5, ballred3, ballred1], 4, {rotation:10},{rotation:-10,transformOrigin:"top center", ease:Power2.easeInOut, repeatDelay:0.1, repeat:-1, yoyo:true }, 'swing')
.fromTo ([ballred6, ballred4, ballred2], 4, {rotation:-10},{rotation:10,transformOrigin:"top center", ease:Power2.easeInOut, repeatDelay:0.1, repeat:-1, yoyo:true }, 'swing')

});
