 $(document).foundation();

//orbit

// dropdown navigation
  $('#primary-navigation a').mouseover(function() {
    $('#primary-navigation li').removeClass('active1');
    $('.dropDown').hide();
    $('.dropDownBack').hide();
    $(this).parent().addClass('active1');
    var i = '#dd-' + $(this).parent().attr('id');
    if ($(i).length > 0) {
      $('.dropDownBack').show();
      $('.dropDownContent').show();
      $('.dropDownBack .content').css('height', $(i).height() + 50);
	  
      $(i).show();
    };
  });
  
  $('.dropDown a').mouseover(function(){
  $('.dropDown').show();
   $('.dropDownContent').show();
  });
 	$('.dropDownContent').mouseleave(function(){
		try{$('.dropDown').hide();} catch(e){};
		try{$('.dropDownBack').hide();} catch(e){};
		try{$('.dropDownContent').hide();} catch(e){};
		
		try{$('#primary-navigation li').removeClass('active');} catch(e){};
	});
	/*
	$(document).ready(function(){
	var viewportWidth = $(window).width();
	
	var Tempo= viewportWidth/100*30;
	var sliderTop=(1*Tempo)*-1; 
	$('.sliderSub').css('margin-top',sliderTop+"px")
	console.log(sliderTop);
	});
	*/