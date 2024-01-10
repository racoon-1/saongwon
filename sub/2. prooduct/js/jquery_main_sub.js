$(document).ready(function () {
  // $(".item>li").mouseover(function () {
  //   $(this).css({
  //     color: "green",
  //     fontWeight: 700,
  //     fontSize: "18px",
  //   });
  // });

  // $(".item>li").mouseout(function () {
  //   $(this).css({
  //     color: "#1d1d1d",
  //     fontWeight: 500,
  //     fontSize: "16px",
  //   });
  // });

  // const headerEl = document.querySelector(".in_header");

  // const mouesHandler = () => {
  //   // headerEl.classList.add("header_bottom");
  //   // console.log("호버");
  // };
  // headerEl.addEventListener("mouseover", mouesHandler);

  /////
  $(".menubar").click(function () {
    $(".mo_menu_box").css({
      left: "0px",
    });
  });

  $(".mo_clickbox").click(function () {
    $(".mo_menu_box").css({
      left: "-500px",
    });
  });
});
