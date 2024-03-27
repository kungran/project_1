window.addEventListener("load", function () {
  // ran
  // Swiper 설정
  //   var swiper = new Swiper(".swiper-short", {
  //     loop: true,
  //     autoplay: {
  //       delay: 1000, //1초의 딜레이를 주고 자동 재생된다
  //     },
  //     // slidesPerView: 5,
  //     spaceBetween: 10, //여백

  //     pagination: {
  //       el: ".swiper-short .short-pn .swiper-pagination",
  //       type: "progressbar",
  //     },
  //     navigation: {
  //       nextEl: ".swiper-short .short-pn .swiper-button-next",
  //       prevEl: ".swiper-short .short-pn .swiper-button-prev",
  //     },
  //     breakpoints: {
  //       900: {
  //         //브라우저 화면너비 900이상일때
  //         slidesPerView: 5.8,
  //         spaceBetween: 50,
  //       },
  //       786: {
  //         slidesPerView: 4.7,
  //         spaceBetween: 30,
  //       },
  //       600: {
  //         slidesPerView: 4,
  //         spaceBetween: 20,
  //       },
  //       320: {
  //         slidesPerView: 3,
  //         spaceBetween: 20,
  //       },
  //       200: {
  //         slidesPerView: 2.3,
  //         spaceBetween: 20,
  //       },
  //     },
  //   });
  // 쇼츠 기능
  // 첫번째 모달 창 열기
  document.getElementById("youtube-link").addEventListener("click", function () {
    document.getElementById("youtube-modal").style.display = "block";
  });

  // 첫 번째 모달 창 닫기
  document.querySelectorAll("#youtube-modal .s-close").forEach(function (element) {
    element.addEventListener("click", function () {
      document.getElementById("youtube-modal").style.display = "none";
    });
  });

  // 두번째 모달 창 열기
  document.getElementById("youtube-link-2").addEventListener("click", function () {
    document.getElementById("youtube-modal-2").style.display = "block";
  });

  // 두 번째 모달 창 닫기
  document.querySelectorAll("#youtube-modal-2 .s-close").forEach(function (element) {
    element.addEventListener("click", function () {
      document.getElementById("youtube-modal-2").style.display = "none";
    });
  });

  // 세번째 모달 창 열기
  document.getElementById("youtube-link-3").addEventListener("click", function () {
    document.getElementById("youtube-modal-3").style.display = "block";
  });
  // 세번째 모달 창 닫기
  document.querySelectorAll("#youtube-modal-3 .s-close").forEach(function (element) {
    element.addEventListener("click", function () {
      document.getElementById("youtube-modal-3").style.display = "none";
    });
  });

  // 네번째 모달 창 열기
  document.getElementById("youtube-link-4").addEventListener("click", function () {
    document.getElementById("youtube-modal-4").style.display = "block";
  });
  // 네번째 모달 창 닫기
  document.querySelectorAll("#youtube-modal-4 .s-close").forEach(function (element) {
    element.addEventListener("click", function () {
      document.getElementById("youtube-modal-4").style.display = "none";
    });
  });

  // 다섯번째 모달 창 열기
  document.getElementById("youtube-link-5").addEventListener("click", function () {
    document.getElementById("youtube-modal-5").style.display = "block";
  });
  // 다섯번째 모달 창 닫기
  document.querySelectorAll("#youtube-modal-5 .s-close").forEach(function (element) {
    element.addEventListener("click", function () {
      document.getElementById("youtube-modal-5").style.display = "none";
    });
  });

  // 여섯번째 모달 창 열기
  document.getElementById("youtube-link-6").addEventListener("click", function () {
    document.getElementById("youtube-modal-6").style.display = "block";
  });
  // 여섯번째 모달 창 닫기
  document.querySelectorAll("#youtube-modal-6 .s-close").forEach(function (element) {
    element.addEventListener("click", function () {
      document.getElementById("youtube-modal-6").style.display = "none";
    });
  });

  // // ===== 퀵메뉴 신청조회 클릭
  // const searchBtn = document.getElementById("search-btn");
  // const searchModal = document.querySelector(".search-modal");

  // searchBtn.addEventListener("click", function (event) {
  //   // chat-text-box의 display 속성을 토글하여 나타내거나 숨김
  //   if (
  //     searchModal.style.display === "none" ||
  //     searchModal.style.display === ""
  //   ) {
  //     searchModal.style.display = "block";
  //   } else {
  //     searchModal.style.display = "none";
  //   }
  // });

  // // ===== 퀵메뉴 신청조회 닫기
  // const quickClose = document.getElementById("q-m-close");
  // const SearchModal = document.querySelector(".search-modal");

  // quickClose.addEventListener("click", function (event) {
  //   // chat-text-box의 display 속성을 토글하여 나타내거나 숨김
  //   if (
  //     SearchModal.style.display === "block" ||
  //     SearchModal.style.display === ""
  //   ) {
  //     SearchModal.style.display = "none";
  //   } else {
  //     SearchModal.style.display = "block";
  //   }
  // });
  // 비디오 영역 닫기 했을때 유투브 소리 안들리게 하기
  $("img").on("click", function () {
    var videoPath = "https://www.youtube.com/embed/" + $(this).attr("data-youtube-id");
          $(".popPage iframe").attr("src", videoPath);
          $(".youtubePop").css("display", "flex");
    });
    //비디오 팝업 닫기 버튼
    $(".popPageClose").on("click", function () {
    $(".youtubePop").hide();
    $(".youtubePop iframe").attr("src", "");
    });
  


  // FAQ 모달 창 열기
  document.getElementById("FAQ-btn").addEventListener("click", function () {
    document.getElementById("FAQ-modal").style.display = "block";
  });
  // FAQ 모달 창 닫기
  document.querySelectorAll("#FAQ-modal .q-m-close").forEach(function (element) {
    element.addEventListener("click", function () {
      document.getElementById("FAQ-modal").style.display = "none";
    });
  });
  // FAQ 모달 아코디언 메뉴기능
  $(document).ready(function(){
    $('.accordion-header').click(function(){
      $(this).next('.accordion-content').slideToggle();
      $('.accordion-content').not($(this).next()).slideUp();
    });
  });  

  //   신청조회 모달 창 열기
  document.getElementById("search-btn").addEventListener("click", function () {
    document.getElementById("search-modal").style.display = "block";
  });
  //   신청조회 모달 창 닫기
  document.querySelectorAll("#search-modal .q-m-close").forEach(function (element) {
    element.addEventListener("click", function () {
      document.getElementById("search-modal").style.display = "none";
    });
  });

  //   top 버튼 스크롤 기능
  const topBtn = document.getElementById("top-btn");

  topBtn.addEventListener("click", function (event) {
    event.preventDefault();

    console.log(window.scrollY);

    if (window.scrollY === 0) {
      window.scrollTo({
        top: 1050, //맨 아래 스크롤값 2952
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  });

  // 화살표 이미지 회전
  const topBtnImg = document.getElementById("top-btn-img");
  window.addEventListener("scroll", function (scTop) {
    scTop = window.document.documentElement.scrollTop;
    if (scTop > 0) {
      topBtnImg.classList.add("up");
    } else {
      topBtnImg.classList.remove("up");
    }
  });
});
