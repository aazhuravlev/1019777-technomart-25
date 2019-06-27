var buyLink = document.querySelectorAll(".buy-modal-button");
var buyPopup = document.querySelector(".modal-add-item");
var buyClose = buyPopup.querySelectorAll(".modal-close");
var buyContinue = buyPopup.querySelector(".continue-shopping-button");

buyLink.forEach(function(item) {
  item.addEventListener("click", function (evt) {
    evt.preventDefault();
    buyPopup.classList.add("modal-show-add-item");
  });
});

buyClose.forEach(function(item) {
  item.addEventListener("click", function (evt) {
    evt.preventDefault();
    buyPopup.classList.remove("modal-show-add-item");
  });
});

buyContinue.addEventListener("click", function (evt) {
  evt.preventDefault();
  buyPopup.classList.remove("modal-show-add-item");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (buyPopup.classList.contains("modal-show-add-item")) {
      buyPopup.classList.remove("modal-show-add-item");
    }
  }
});
