const changeing = document.querySelectorAll(".controls input");

function range() {
  const range = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + range
  );
}

changeing.forEach((input) => input.addEventListener("change", range));
changeing.forEach((input) => input.addEventListener("mousemove", range));
