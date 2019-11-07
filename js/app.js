// Parallax Effect

$(window).scroll(function() {
  let winScroll = $(this).scrollTop();

  $(".cmt-top-header,.notices-top-header,.gallery-top-header").css({
    // backgroundPositionY: "-" + Math.floor((winScroll / 1.5) * 2) + "px"
    backgroundPositionY: Math.floor(winScroll / 10) + "px"

  });
  $(".top-header").css({
    backgroundPositionY: Math.floor(winScroll / 10) + "px"
  });
});

$(document).ready(function() {
  $(".slider").owlCarousel({
    items: 1,
    loop: true,
    dots: false,
    nav: false,
    autoplay: true,
    mouseDrag: true,
    responsive: {
      1280: {
        items: 1
      },
      600: {
        items: 1
      },
      320: {
        items: 1
      }
    }
  });
  $(".dpt-slider").owlCarousel({
    items: 4,
    loop: true,
    dots: false,
    nav: false,
    margin: 10,
    autoplayTimeout: 1500,
    autoplay: true,
    mouseDrag: true,
    responsive: {
      1280: {
        items: 4
      },
      600: {
        items: 3
      },
      320: {
        items: 1
      }
    }
  });

  $(".zoom").magnificPopup({
    type: "image",
    gallery: {
      enabled: true
    }
  });

  var containerEl = document.querySelector(".gallery-item");

  var mixer = mixitup(containerEl);
});

// Job-cell data table

$('#job-cell,#industry-list').dataTable();

// Active gallery button
$(document).on("click", ".control button", function() {
  $(this)
    .addClass("btn-gallery-active")
    .siblings()
    .removeClass("btn-gallery-active");
});

// tab system

const tabLink = document.querySelectorAll(".tab-link");
const tabContent = document.querySelectorAll(".tab-content");

tabLink.forEach(item => {
  item.addEventListener(function(e) {
    e.preventDefault();
  });
});

function showPanel(index) {
  tabContent.forEach(item => {
    item.style.display = "none";
  });

  tabContent[index].style.display = "block";
}
