var button=document.querySelector(".search-form-toggle");
    var popup=document.querySelector(".hotel-search-form");
    button.addEventListener("click", function(evt) {
      evt.preventDefault();
      popup.classList.toggle("hotel-search-show");
    })