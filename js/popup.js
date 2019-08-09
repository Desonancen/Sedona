var link = document.querySelector (".search-hotels");
var popup = document.querySelector (".modal-search");
var form = popup.querySelector ("form");
var from = popup.querySelector ("[name=date-from]");
var to = popup.querySelector ("[name=date-to]");

link.addEventListener("click", function (evt) {
    if(popup.classList.contains("modal-show")) {
        evt.preventDefault();
        popup.classList.toggle("modal-show");
        from.focus();
    }
    else {
    evt.preventDefault();
    popup.classList.toggle("modal-show");
    popup.classList.remove("modal-error");
    }
});

form.addEventListener("submit", function (evt) {
    if(!from.value || !to.value) {
      evt.preventDefault();
      popup.classList.add("modal-error");
    }
});


