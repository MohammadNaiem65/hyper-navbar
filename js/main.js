// this block is applying loop on an array of menu-item and when hovered any items of that array, it is setting the data-index of #menu according to that array item's index
document.querySelectorAll(".menu-item").forEach((item, index) => {
  item.addEventListener("mouseover", () => {
    document.querySelector("#menu").dataset.index = index;
    console.log(document.querySelector("#menu").dataset.index);
  });
});