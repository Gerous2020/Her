const urls = [
  "../Assets/her/1.jpg",
  "../Assets/her/2.jpg",
  "../Assets/her/3.jpg",
  "../Assets/her/4.jpg",
  "../Assets/her/5.jpg",
  "../Assets/her/6.jpg",
  "../Assets/her/7.jpg",
  "../Assets/her/8.jpg",
  "../Assets/her/9.jpg",
  "../Assets/her/10.jpg",
  "../Assets/her/11.jpg",
  "../Assets/her/12.jpg",
  "../Assets/her/13.jpg",
];
const imageContainer = document.getElementsByClassName("imagesHer")[0];
const leftMove = document.getElementsByClassName("leftMove")[0];
const rightMove = document.getElementsByClassName("rightMove")[0];
const totalCards = 16;
window.addEventListener("load", () => {
  for (let index = 1; index < urls.length; index++) {
    const card = document.createElement("span");
    card.style.setProperty("--i", `${index}`);
    const img = document.createElement("img");
    img.classList.add("her");
    img.src = urls[index];

    card.append(img);
    imageContainer.appendChild(card);
  }
});
