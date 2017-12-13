$(document).ready(function(){
	$('.section1, .footer').hide();
  $('.preload').show();
  splash(2000);
  //funcion pagina splash
  function splash(time){
    setTimeout(function(){
    $('.preload').fadeOut(); 
    }, time);
    $('.section1, .footer').delay(3500).fadeIn();
  }  

   $('.modal').modal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      inDuration: 300, // Transition in duration
      outDuration: 200, // Transition out duration
      startingTop: '4%', // Starting top style attribute
      endingTop: '10%', // Ending top style attribute
      ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
        console.log(modal, trigger);
      },
    });
/*
  $('.food').mouseover(function(){
    $('.comida').show();
  }).mouseout(function(){
    $('.comida').hide();
  });*/

  $('#chinese').click(function(){
    $('#dropdown1').hide();
    $('.arabicFood').hide();
    $('.veganFood').hide();
  });

  $('#arabic').click(function(){
    $('#dropdown1').hide();
    $('.chineseFood').hide();
    $('.veganFood').hide();
  });

  $('#vegan').click(function(){
    $('#dropdown1').hide();
    $('.arabicFood').hide();
    $('.chineseFood').hide();
  });

  $('.filter-btn').click(function(){
    $('#dropdown1').show();
    $('.food').show();
  });


  
});

/*
$('.category_list .category_item[category="all"]').addClass('ct_item-active');

$('.category_item').click(function(){


  var catProduct = $(this).attr('category');
  $('.category_item').removeClass('ct_item-active');
  $(this).addClas('ct_item-active');

  //ocultando productos
  $('.product-item').hide();
  //mostrando 
  $('.product-item[category="'+catProducts+'"]').show()
})

$('.category_item[category="all"]').click(function(){
  $('.product-item').show();
})
*/

