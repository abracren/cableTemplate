 $(document).foundation();
	
	$("#Menu1").mouseover(function()  {
  $( "#Menu1Content" ).animate({
    height:'400px',
    visibility:'visible',
	'margin-bottom':'-500px'
  }, {
    duration: 100,
  });
  $( ".disa" ).fadeIn('slow');
});
$("#Menu1").mouseout(function(){
 $( "#Menu1Content" ).css('visibility','visible');
});
$("#Menu1Content").mouseout(function()  {
  $( "#Menu1Content" ).animate({
   
    visibility:'hidden',
	 height:'0px'
  }, {
    duration: 500,
  });
    $( ".disa" ).fadeOut('fast');
});