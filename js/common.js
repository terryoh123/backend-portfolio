// 포트폴리오 인터랙션 공통 스크립트

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  const overlay = document.getElementById("drawerOverlay");
  const drawers = document.querySelectorAll(".drawer");

  /* ===== 1. 이미지 확대 모달 (이벤트 위임 적용 🔥) ===== */
  document.addEventListener("click", function (e) {
    const targetImg = e.target.closest(".shot img");
    if (targetImg && modal && modalImg) {
      modal.classList.add("active");
      modalImg.src = targetImg.src;
    }
  });

  if (modal) {
    modal.addEventListener("click", () => {
      modal.classList.remove("active");
    });
  }

  /* ===== 2. Drawer 제어 (프로젝트 상세 보기) ===== */
  const projectCards = document.querySelectorAll(".project");

  projectCards.forEach(card => {
    card.addEventListener("click", () => {
      const projectId = card.getAttribute("data-project-id");
      const targetDrawer = document.getElementById(`drawer-${projectId}`);

      if (targetDrawer && overlay) {
        // 모든 다른 드로어 비활성화
        drawers.forEach(d => d.classList.remove("active"));

        // 대상 드로어 및 오버레이 활성화
        targetDrawer.classList.add("active");
        overlay.classList.add("active");
        document.body.classList.add("drawer-open");
      }
    });
  });

  // 드로어 닫기 공통 함수
  function closeAllDrawers() {
    drawers.forEach(d => d.classList.remove("active"));
    if (overlay) overlay.classList.remove("active");
    document.body.classList.remove("drawer-open");
  }

  // 닫기 버튼 클릭 이벤트
  document.querySelectorAll(".drawer-close, [data-close]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      closeAllDrawers();
    });
  });

  // 오버레이(바깥 어두운 영역) 클릭 이벤트
  if (overlay) {
    overlay.addEventListener("click", closeAllDrawers);
  }

  /* ===== 3. 전역 단축키 (ESC 키로 모달 및 드로어 닫기) ===== */
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (modal && modal.classList.contains("active")) {
        modal.classList.remove("active");
      } else {
        closeAllDrawers();
      }
    }
  });
});
