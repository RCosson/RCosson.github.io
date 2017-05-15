setTimeout( function(){
  $(document).ready(function() {
    $(".top").slideDown(1100).removeClass('.hidden');
  });

  $(document).ready(function() {
    $(".bottom").slideDown(1100).removeClass('.hidden');
  });

  $(document).ready(function(){
      setTimeout(function(){
        $('.titles').fadeIn(750).removeClass('.hidden');
        $('.nav').slideDown(750).removeClass('.hidden');
       },
    1200);
  });
}  , 400 );
