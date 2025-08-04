document.addEventListener("DOMContentLoaded", function () {
  const mainSlider = new bootstrap.Carousel(
    document.getElementById("mainSlider"),
    {
      interval: 5000,
      wrap: true,
      keyboard: true,
      pause: "hover",
      touch: true,
    }
  );

  const gridItems = document.querySelectorAll(".grid-item");

  gridItems.forEach((item, index) => {
    item.style.opacity = "0";
    item.style.transform = "translateY(20px)";

    setTimeout(() => {
      item.style.transition = "all 0.6s ease";
      item.style.opacity = "1";
      item.style.transform = "translateY(0)";
    }, index * 100);

    item.addEventListener("click", function () {
      const imageSrc = this.querySelector(".small-image").src;
      const overlayText = this.querySelector(".overlay-text").textContent;

      console.log("Clicked on:", overlayText, "Image:", imageSrc);

      this.style.transform = "scale(0.95)";
      setTimeout(() => {
        this.style.transform = "scale(1)";
      }, 150);
    });
  });

  const carousel = document.getElementById("mainSlider");
  const prevBtn = carousel.querySelector(".carousel-control-prev");
  const nextBtn = carousel.querySelector(".carousel-control-next");
  const indicators = carousel.querySelectorAll(".carousel-indicators button");

  [prevBtn, nextBtn].forEach((btn) => {
    btn.addEventListener("click", function () {
      this.style.transform = "scale(0.9)";
      setTimeout(() => {
        this.style.transform = "scale(1)";
      }, 150);
    });
  });

  indicators.forEach((indicator) => {
    indicator.addEventListener("click", function () {
      this.style.transform = "scale(1.3)";
      setTimeout(() => {
        this.style.transform = "scale(1)";
      }, 200);
    });
  });

  let controlsTimeout;
  const controls = carousel.querySelectorAll(
    ".carousel-control-prev, .carousel-control-next"
  );

  function showControls() {
    controls.forEach((control) => {
      control.style.opacity = "1";
    });
  }

  function hideControls() {
    controls.forEach((control) => {
      control.style.opacity = "0";
    });
  }

  carousel.addEventListener("mouseenter", showControls);
  carousel.addEventListener("touchstart", showControls);

  carousel.addEventListener("mouseleave", () => {
    controlsTimeout = setTimeout(hideControls, 2000);
  });

  carousel.addEventListener("mousemove", () => {
    clearTimeout(controlsTimeout);
    showControls();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      mainSlider.prev();
    } else if (e.key === "ArrowRight") {
      mainSlider.next();
    }
  });

  const carouselImages = carousel.querySelectorAll(".carousel-item img");
  carouselImages.forEach((img) => {
    img.addEventListener("load", function () {
      this.style.opacity = "0";
      this.style.transition = "opacity 0.5s ease";
      setTimeout(() => {
        this.style.opacity = "1";
      }, 100);
    });
  });

  carousel.addEventListener("slide.bs.carousel", function (e) {
    const activeItem = carousel.querySelector(".carousel-item.active");
    const nextItem = carousel.querySelectorAll(".carousel-item")[e.to];

    if (activeItem && nextItem) {
      activeItem.style.transition = "transform 0.6s ease";
      nextItem.style.transition = "transform 0.6s ease";
    }
  });

  if (window.innerWidth <= 768) {
    hideControls();
  }
});
