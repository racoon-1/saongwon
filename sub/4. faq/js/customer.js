$(document).ready(function(){


    $('.tab_menu').each(function(a){
        $(this).attr({
            "data-num": a,
        });
    }).click(function(){

        var i = $(this).attr("data-num");

        $('.cus_info').css({
            display:"none",
        });

        $('.check').css({
            borderBottom: 'none',
        });
        

        $('.cus_info').eq(i).css({
            display: 'block',
        });

        $('.check').eq(i).css({
            borderBottom: '3px solid #09AB72',
        })

    });

    $('.cus_info').each(function(a){
        $(this).attr({
            "data-num": a,
        });
    });







})