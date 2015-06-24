console.log('connected');


$('#to-yellow').click(function(){

  $('#div4').velocity("scroll", 1000);
});


$('#to-red').click(function(){

  $('#div4').velocity('reverse')

});

$('#box-1').click(function(){

  $('#box-1').velocity(
    {
      width: "0px",
      height:'0px',
      rotateZ: -180,
      opacity: 1
    },
    {
      duration:1000,
      easing: 'swing'
    }).velocity(
    {
      width:'500px',
      height: '200px'
    },
    {
      duration:2000,
      easing: 'ease-in-out',

    }
   );



});








