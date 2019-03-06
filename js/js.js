var button=document.querySelector(".search-form-toggle");
    var popup=document.querySelector(".hotel-search-form");
    button.addEventListener("click", function(evt) {
      popup.classList.toggle("hotel-search-show");
    })