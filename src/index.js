const heartEmojis = ["💗", "💜", "🤎", "🧡", "🎈", "✨", "🤍"];
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 5 + 3 + "s";
  heart.innerHTML = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
  document.body.appendChild(heart);

  heart.addEventListener("animationend", () => {
    heart.remove();
  });
}

setInterval(createHeart, 600);
