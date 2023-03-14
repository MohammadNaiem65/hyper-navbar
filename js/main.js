let menu = document.querySelector('#menu')
let items = document.querySelectorAll(".menu-item");
items.forEach((item, index) => {
  item.addEventListener("mouseover", () => {
    menu.dataset.index = index;
  });
  item.addEventListener('mouseout', ()=>{
    delete menu.dataset.index;
  })
});
