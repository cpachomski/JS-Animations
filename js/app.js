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
  $('#squish-box').velocity(
      {
        width: '100px'

      },
      {
        duration:1000,
        easing:'spring'
      }
    )

});
