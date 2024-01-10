$(document).ready(function () {
  const subImgEl = document.querySelector(".sub_img");
  const productNameEl = document.querySelector(".product_name");
  const subTitlePEl = document.querySelector(".tag");
  const subTitelH2El = document.querySelector(".sub_title>h2");
  const subTextEl = document.querySelector(".sub_text");
  const bgEl = document.querySelectorAll(".contents_1 .bg");
  const bgEl2 = document.querySelectorAll(".contents_2 .bg");
  const bgEl3 = document.querySelectorAll(".contents_3 .bg");
  const bgEl4 = document.querySelectorAll(".contents_4 .bg");

  $(".tab1").click(function () {
    $(".contents_1").show();
    $(".contents_2").hide();
    $(".contents_3").hide();
    $(".contents_4").hide();

    subTitelH2El.innerText = "부침요리";
    productNameEl.innerHTML = "부침요리";
    subTitlePEl.innerHTML = `<span class=span>${"#전통전"}</span><span class=span>${"#산적"}</sapn><span class=span>${"#완자"}</span>`;
    subTextEl.innerHTML =
      " 우리나라의 전통 전을 <br/>사옹원의 노하우와 첨단설비 시스템을 통해 <br/>원재료의 맛과 식감을 살려서 먹을 수 있도록 만들었습니다.";
  });
  $(".tab2").click(function () {
    $(".contents_2").show();
    $(".contents_1").hide();
    $(".contents_3").hide();
    $(".contents_4").hide();
    subTitelH2El.innerText = "튀김요리";
    productNameEl.innerHTML = "튀김요리";
    subTitlePEl.innerHTML = `<span class=span>${"#김말이"}</span><span class=span>${"#고로케"}</span><span class=span>${"#오징어튀김"}</span><span class=span>${"#기타튀김"}</span>`;
    subTextEl.innerHTML =
      "사옹원 튀김은 독자적인 배터 특허 기술로<br/> 바삭한 식감과 고소함이 더해진 제품으로<br/>소비자 맛 평가 1위를 차지할 만큼 사랑받고 있는 대표제품입니다.";
  });

  $(".tab3").click(function () {
    $(".contents_3").show();
    $(".contents_2").hide();
    $(".contents_1").hide();
    $(".contents_4").hide();
    subTitelH2El.innerText = "간편식";
    productNameEl.innerHTML = "간편식";
    subTitlePEl.innerHTML = `<span class=span>${"#잡채"}</span><span class=span>${"#닭꼬치"}</sapn><span class=span>${"#피자"}</span>`;
    subTextEl.innerHTML =
      "손이 많이 가는 음식들을 <br/>빠르게 즐길 수 있도록 만든 간편식을 <br/> 사옹원은 보다 깨끗하고 안전하게 생산하고 있습니다.";
  });

  $(".tab4").click(function () {
    $(".contents_4").show();
    $(".contents_3").hide();
    $(".contents_1").hide();
    $(".contents_2").hide();
    subTitelH2El.innerText = "간식";
    productNameEl.innerHTML = "간식";
    subTitlePEl.innerHTML = `<span class=span>${"#호떡"}</span><span class=span>${"#빵"}</span><span class=span>${"#경단"}</span>`;
    subTextEl.innerHTML =
      "사옹원의 전통 간식들을 <br/>주변 사람들과 함께 즐기세요!";
  });

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

  bgEl[0].style.backgroundImage = "url('none')";
  bgEl[3].style.backgroundImage = "url('none')";
  bgEl[4].style.backgroundImage = "url('none')";
  bgEl[7].style.backgroundImage = "url('none')";
  bgEl[8].style.backgroundImage = "url('none')";

  bgEl2[0].style.backgroundImage = "url('none')";
  bgEl2[3].style.backgroundImage = "url('none')";
  bgEl2[4].style.backgroundImage = "url('none')";

  bgEl3[0].style.backgroundImage = "url('none')";

  bgEl4[0].style.backgroundImage = "url('none')";
  bgEl4[3].style.backgroundImage = "url('none')";

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

//end
