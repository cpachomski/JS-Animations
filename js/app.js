console.log('Tesing 1 2 1 2');




$('#show-text-btn').click(function(){
  $('p').velocity(
  {
    opacity:1
  },
  {
    duration: 2000,
    easing: 'ease-out'
  })

});

$('#squish-box-btn').click(function(){
  squishBox($('#squish-box1'), 'ease-in');
  squishBox($('#squish-box2'), 'ease-out');
  squishBox($('#squish-box3'), 'ease-in-out')
  squishBox($('#squish-box4'), 'spring');


});




var squishBox = function(e, easingType){
  initWidth = e.width();
    e.velocity(
      {
        width: '100px'

      },
      {
        duration:1000,
        easing:'' + easingType
      }
    ).velocity(
      {
        width: initWidth + 'px'
      },
      {
        duration:4000,
        easing: '' + easingType 
      }
    )
}












