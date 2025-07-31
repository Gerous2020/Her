window.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementsByClassName("imagesUs")[0];
  const cards = document.querySelectorAll(".usImage");
  const prevBtn = document.getElementById("prevBtn");
  const nxtBtn = document.getElementById("nxtBtn");

  let cardWidth = cards[0].offsetWidth + 20;
  console.log(cardWidth);

  function scrollToCenterCard(direction) {
    slider.scrollBy({
      left: direction * cardWidth,
      behavior: "smooth",
    });
  }
  function highlightCenterCard() {
    const center = slider.scrollLeft + slider.offsetWidth / 2;

    cards.forEach((card) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      card.addEventListener("click", () => {
        slider.scrollIntoView({
          inline: "center",
          behavior: "smooth",
        });
      });
      const distance = Math.abs(center - cardCenter);
      if (distance < card.offsetWidth / 2) {
        card.classList.add("active");
      } else {
        card.classList.remove("active");
      }
    });
  }

  slider.addEventListener("scroll", () => {
    highlightCenterCard();
  });

  highlightCenterCard();
  prevBtn.addEventListener("click", () => scrollToCenterCard(-1));
  nxtBtn.addEventListener("click", () => scrollToCenterCard(1));
});
