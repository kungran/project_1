window.onload = function () {
    // 모달창
 // 모달을 숨기는 함수
function hideModal() {
    document.getElementById("popup").style.display = "none";
}

// "다시 보지 않기" 버튼 이벤트 리스너
document.getElementById("neverShowAgain").addEventListener("click", function() {
    // localStorage에 사용자의 선택 저장
    localStorage.setItem("hideModal", "true");
    hideModal();
});

// 페이지 로드 시 모달 상태 확인
window.onload = function() {
    // 사용자가 "다시 보지 않기"를 선택했는지 확인
    if(localStorage.getItem("hideModal") === "true") {
        hideModal();
    }
};

// "닫기" 버튼 이벤트 리스너 (선택적 구현)
document.getElementById("close").addEventListener("click", function() {
    hideModal();
});


//min

// ran

// hun

}
