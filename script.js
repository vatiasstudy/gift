function nextPage(current) {
  // hide current page
  document.getElementById(`page${current}`).classList.remove("active");

  // show next page
  const next = document.getElementById(`page${current + 1}`);
  next.classList.add("active");

  // if page 6 opens, start falling text
  if (current + 1 === 6) {
    startFallingText();
  }
}

function startFallingText() {
  const container = document.querySelector(".falling-text-container");

  setInterval(() => {
    const text = document.createElement("div");
    text.className = "falling-text";
    text.innerText = "say it to me";

    text.style.left = Math.random() * 100 + "vw";
    text.style.animationDuration = (3 + Math.random() * 3) + "s";

    container.appendChild(text);

    setTimeout(() => {
      text.remove();
    }, 6000);
  }, 250);
}
