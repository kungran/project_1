window.onload = function () {
  //min
  //menu area
  //topmenu
  // index 페이지의 메뉴 항목을 찾아서 해당 항목에 active 클래스를 추가합니다.
  const currentPage = "sub.html"; // 현재 페이지의 URL을 설정합니다.
  const topMenu = document.querySelector(".top-menu");
  const topMenuLi = document.querySelectorAll(".top-menu > li");

  topMenuLi.forEach((li) => {
    const link = li.querySelector("a"); // 각 li 요소의 하위 a 요소를 찾습니다.
    const href = link.getAttribute("href"); // a 요소의 href 속성 값을 가져옵니다.

    // 만약 현재 페이지의 URL이 해당 li 요소의 href 속성 값과 일치한다면 active 클래스를 추가합니다.
    if (href === currentPage) {
      li.classList.add("active");
    }
  });

  topMenu.addEventListener("mouseleave", () => {
    topMenuLi.forEach((item) => {
      const link = item.querySelector("a");
      const href = link.getAttribute("href");
      if (href === currentPage) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  });

  topMenuLi.forEach((li) => {
    li.addEventListener("click", () => {
      // 클릭된 li에만 active 클래스를 추가하고 다른 li에서는 제거합니다.
      topMenuLi.forEach((item) => {
        if (item === li) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      });
    });

    li.addEventListener("mouseover", () => {
      // 호버한 메뉴 항목에 .active 클래스를 추가하고 이전에 추가된 클래스를 제거합니다.
      topMenuLi.forEach((item) => {
        if (item === li) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      });
    });
  });
  //top menu scroll logo hidden
  const topLogo = document.querySelector(".logo");
  const langBox = document.querySelector(".lang");
  let scy = 0;

  window.addEventListener("scroll", function () {
    // 새로 고침 / url 입력해서 html 출력시
    // 1.스크롤바의 픽셀 위치값을 파악해서
    scy = this.document.documentElement.scrollTop;
    const innerWidth = window.innerWidth;
    // 2.class 적용 여부 결정
    if (innerWidth > 780) {
      if (scy > 0) {
        topLogo.classList.add("logoh");
        langBox.classList.add("logoh");
      } else {
        topLogo.classList.remove("logoh");
        langBox.classList.remove("logoh");
      }
    }
  });
  //language
  const langToggle = document.querySelector(".lang-more");
  const langM = document.querySelector(".lang > li:last-of-type");
  langToggle.addEventListener("click", () => {
    langM.classList.toggle("show");
  });
  langM.addEventListener("click", () => {
    langM.classList.remove("show");
  });
  //qna swiper
  //반응형 스와이퍼

  let ww = window.innerWidth;
  let swQna = null; // null로 초기화

  responsiveSwiper();

  function initSwiper(effect) {
    if (swQna !== null) {
      swQna.destroy(); // 기존 슬라이더가 존재하면 파괴
    }

    let slidesPerViewValue = 1; // 슬라이드 당 보여질 개수 기본값
    let spaceBetweenValue = 20; // 슬라이드 사이의 간격 기본값

    if (ww < 780) {
      slidesPerViewValue = 1; // 980px 미만일 때 1.1개의 슬라이드를 보여줌
      spaceBetweenValue = 20; // 980px 미만일 때 슬라이드 사이의 간격을 10px로 설정
    }

    swQna = new Swiper(".sw-qna", {
      fadeEffect: { crossFade: true },
      speed: 500,
      loop: false,
      slidesPerView: slidesPerViewValue, // slidesPerView 설정
      spaceBetween: spaceBetweenValue,
      on: {
        slideChange: function () {
          const idx = this.realIndex;
          for (let menu of menus) {
            menu.classList.remove("act");
          }
          menus[idx].classList.add("act");
        },
      },
      effect: effect,
    });

    return swQna;
  }

  function responsiveSwiper() {
    if (ww < 780) {
      initSwiper("cards");
    } else if (ww >= 780) {
      initSwiper("fade");
    }
  }

  window.addEventListener("resize", function () {
    ww = window.innerWidth;
    responsiveSwiper();
  });

  const menus = document.querySelectorAll(".sub-qna-wrapper .qna-click-list .fn-qcl");
  function getElementIndex(element) {
    return Array.from(element.parentElement.children).indexOf(element);
  }
  // 메뉴 항목에 대한 이벤트 핸들러 설정
  menus.forEach((menu, idx) => {
    menu.addEventListener("mouseover", () => {
      const fnMenuActive = document.querySelector(".qna-menu-list > li.qna-menu-list-focus");

      if (fnMenuActive) {
        fnMenuActive.classList.remove("qna-menu-list-focus"); // 기존에 활성화된 메뉴를 비활성화합니다.
      }

      const currentMenu = document.querySelectorAll(".qna-menu-list > li")[idx];
      currentMenu.classList.add("qna-menu-list-focus"); // 현재 메뉴를 활성화합니다.
      swQna.slideTo(idx);
    });
  });

  // ran

  // hun
};
