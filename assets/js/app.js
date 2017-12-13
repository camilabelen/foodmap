$(document).ready(function(){
	$('.section1, .footer').hide();
  $('.preload').show();
  splash(3000);
  //funcion pagina splash
  function splash(time){
    setTimeout(function(){
    $('.preload').fadeOut(); 
    }, time);
    $('.section1').delay(3500).fadeIn();
  }  
  
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

