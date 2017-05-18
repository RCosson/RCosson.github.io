setTimeout( function(){
  $(document).ready(function(){
    $('.middle').slideDown(750).removeClass('.hidden');
    });
    $(document).ready(function(){
        setTimeout(function(){
          $('.info').fadeIn(750).removeClass('.hidden');
         },
      500);
    });
}  , 600 );
