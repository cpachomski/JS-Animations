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
  

});













var squishBox = function(e, easingType){
  console.log(e)
    e.velocity(
      {
        width: '100px'

      },
      {
        duration:1000,
        easing:'spring'
      }
    ).velocity(
      {
        width: '400px'
      },
      {
        duration:4000,
        easing: '' + easingType 
      }
    )
}






