window.addEventListener("load", function () {
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

//쇼츠 닫기버튼 클릭시 계속 재생되는 문제 해결
$(document).ready(function() {
    // 모든 모달에 대한 참조를 담을 객체
    var modals = {};
    // 모달 ID들을 배열로 초기화
    var modalIds = [
        'youtube-modal', 
        'youtube-modal-2', 
        'youtube-modal-3', 
        'youtube-modal-4', 
        'youtube-modal-5', 
        'youtube-modal-6'
    ];
    // 각 모달 ID에 대해 반복하며 modals 객체에 jQuery 객체로 저장
    $.each(modalIds, function(index, value) {
        modals[value] = $("#" + value);
    });
    // 모든 ".s-close" 버튼에 대한 클릭 이벤트 핸들러
    $(".s-close").click(function() {
        // 클릭된 버튼이 속한 모달의 ID를 찾음
        var modalId = $(this).closest(".s-modal").attr("id");
        // 해당 모달 내의 iframe의 src 속성을 빈 문자열로 설정
        modals[modalId].find("iframe").attr("src", "");
        // 선택적: 해당 모달을 숨김
        // modals[modalId].hide();
    });
});

  
  
  
  // FAQ 모달 열기
  document.getElementById("FAQ-btn").addEventListener("click", function () {
    document.getElementById("FAQ-modal").style.display = "block";
  });

  // FAQ 모달 닫기
  document.querySelectorAll("#FAQ-modal .q-m-close").forEach(function (element) {
    element.addEventListener("click", function () {
      document.getElementById("FAQ-modal").style.display = "none";
    });
  });

  // FAQ 모달 아코디언 메뉴기능
  $(document).ready(function () {
    $(".accordion-header").click(function () {
      $(this).next(".accordion-content").slideToggle();
      $(".accordion-content").not($(this).next()).slideUp();
    });
  });

  
  // 신청조회 모달 열기
  document.getElementById("search-btn").addEventListener("click", function () {
    document.getElementById("search-modal").style.display = "block";
  });
// 신청조회 모달 닫기
  document.querySelectorAll("#search-modal .q-m-close").forEach(function (element) {
    element.addEventListener("click", function () {
      document.getElementById("search-modal").style.display = "none";
    });
  });

  
  // 탑 버튼
  // ===== top으로 가는 버튼
  const topBtn = document.getElementById("quick_3");
  topBtn.addEventListener("click", function (event) {
    event.preventDefault();
    // 조건문 수정
    if (window.scrollY === 0) {
      window.scrollTo({
        top: 2952,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  });
  
  // 수직 스크롤 값 가져오기
  var scrollTop = window.scrollY || document.documentElement.scrollTop;

  // 수평 스크롤 값 가져오기
  var scrollLeft = window.scrollX || document.documentElement.scrollLeft;

  console.log("수직 스크롤 값: " + scrollTop);
  console.log("수평 스크롤 값: " + scrollLeft);
});
