document.addEventListener("DOMContentLoaded", function () {
  const mobileFilterBtn = document.getElementById("mobileFilterBtn");
  const filtersPanel = document.querySelector(".filters-panel");
  const filtersHeader = document.querySelector(".filters-header");

  if (mobileFilterBtn) {
    mobileFilterBtn.addEventListener("click", function () {
      filtersPanel.classList.add("show");
      document.body.style.overflow = "hidden";
    });
  }

  const filterScreen = document.querySelector(".filter-screen");
  if (filterScreen) {
    filterScreen.addEventListener("click", function () {
      closeModal();
    });
  }

  const modalCloseBtn = document.getElementById("modalCloseBtn");
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", function () {
      closeModal();
    });
  }

  function closeModal() {
    filtersPanel.classList.remove("show");
    document.body.style.overflow = "";
  }

  const filterInputs = document.querySelectorAll(".filter-radio, .select-city");
  const activeFiltersBadge = document.querySelector(".active-filters-badge");
  const mobileFilterBadge = document.querySelector(".mobile-filter-badge");

  function updateFilterBadge() {
    let activeCount = 0;

    const selectedRadios = document.querySelectorAll(".filter-radio:checked");
    activeCount += selectedRadios.length;

    const citySelect = document.querySelector(".select-city");
    if (citySelect && citySelect.value !== "None") {
      activeCount += 1;
    }

    if (activeFiltersBadge) {
      activeFiltersBadge.textContent = activeCount.toString().padStart(2, "0");
    }
    if (mobileFilterBadge) {
      mobileFilterBadge.textContent = activeCount.toString().padStart(2, "0");
    }
  }

  filterInputs.forEach((input) => {
    input.addEventListener("change", updateFilterBadge);
  });

  updateFilterBadge();
});
