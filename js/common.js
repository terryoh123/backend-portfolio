// 이미지 확대 모달 공통 처리

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");

  if (!modal || !modalImg) return;

  document.querySelectorAll(".shot img").forEach(img => {
    img.addEventListener("click", () => {
      modal.classList.add("active");
      modalImg.src = img.src;
    });
  });

  modal.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  // ESC로 닫기 (추가 기능 🔥)
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      modal.classList.remove("active");
    }
  });
});
