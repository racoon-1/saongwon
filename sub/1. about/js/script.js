$(document).ready(function () {
  
  
  $(".tab1").click(function () {
    $(".introduce").show();
    $(".greeting").hide();
    $(".history").hide();
  });


  $(".tab2").click(function () {
    $(".greeting").show();
    $(".introduce").hide();
    $(".history").hide();
  });
  

  $(".tab3").click(function () {
    $(".history").show();
    $(".introduce").hide();
    $(".greeting").hide();
  });
  
    
  
  $(".item>li").mouseover(function () {
    $(this).css({
      color: "green",
      fontWeight: 700,
      fontSize: "18px",
    });
  });
  
    $(".item>li").mouseout(function () {
      $(this).css({
        color: "#1d1d1d",
        fontWeight: 500,
        fontSize: "16px",
      });
    });
  
  });
  

  $(document).ready(function(){

    $('.menubar').click(function(){
        $('.mo_menu_box').css({
            left: '0px',
        })
    })
    

    $('.mo_clickbox').click(function(){
        $('.mo_menu_box').css({
            left: '-500px',
        })
    });



})
  //end
  