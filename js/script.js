var link = document.querySelector(".link-button-recall");
var popup = document.querySelector(".modal-recall-form");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector("form");
var userName = popup.querySelector(".recall-form-name");
var userEmail = popup.querySelector(".recall-form-email");
var userLetter = popup.querySelector(".recall-form-letter");
var isStorageSupport = true;
var storageName = "";
var storageEmail = "";

try {
  storageName = localStorage.getItem("userName");
  storageEmail = localStorage.getItem("userEmail");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  if (storageName && storageEmail) {
    userName.value = storageName;
    userEmail.value = storageEmail;
    userLetter.focus();
  } else {
    userName.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});

form.addEventListener("submit", function (evt) {
  if (!userEmail.value && !userLetter.value) {
    evt.preventDefault();
    userEmail.classList.remove("modal-error");
    userLetter.classList.remove("modal-error");
    userEmail.offsetWidth = userEmail.offsetWidth;
    userLetter.offsetWidth = userLetter.offsetWidth;
    userEmail.classList.add("modal-error");
    userLetter.classList.add("modal-error");
  } else {
    if (!userEmail.value) {
      evt.preventDefault();
      userEmail.classList.remove("modal-error");
      userEmail.offsetWidth = userEmail.offsetWidth;
      userEmail.classList.add("modal-error");
    } else if(!userLetter.value) {
      evt.preventDefault();
      userLetter.classList.remove("modal-error");
      userLetter.offsetWidth = userLetter.offsetWidth;
      userLetter.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("userName", userName.value);
        localStorage.setItem("userEmail", userEmail.value);
      }
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});

var mapLink = document.querySelector(".contacts-button-map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (mapPopup.classList.contains("modal-show")) {
      mapPopup.classList.remove("modal-show");
    }
  }
});
