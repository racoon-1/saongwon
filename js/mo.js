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