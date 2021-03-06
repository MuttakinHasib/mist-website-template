// Parallax Effect

$(window).scroll(function() {
  var winScroll = $(this).scrollTop();

  // $(".cmt-top-header,.notices-top-header,.gallery-top-header").css({
  //     // backgroundPositionY: "-" + Math.floor((winScroll / 1.5) * 2) + "px"
  //     backgroundPositionY: Math.floor(winScroll / 10) + "px"
  // });
  // $(".top-header").css({
  //     backgroundPositionY: Math.floor(winScroll / 10) + "px"
  // });
});

$(document).ready(function() {
  // Go top
  $(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
      $(".scroll-bar").fadeIn();
    } else {
      $(".scroll-bar").fadeOut();
    }
  });

  // smooth scroll

  $(".scroll-bar").on("click", function(e) {
    $("html, body").animate(
      {
        scrollTop: 0
      },
      600
    );
    return false;
  });

  //   let scrollLink = $(".scroll-top");
  //   scrollLink.click(function(e) {
  //     e.preventDefault();
  //     $("body,html").animate(
  //       {
  //         scrollTop: $(this.hash).offset().top - 100
  //       },
  //       1000
  //     );
  //   });

  // Slider

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
  // Popup Img
  $(".zoom").magnificPopup({
    type: "image",
    gallery: {
      enabled: true
    }
  });

  var containerEl = document.querySelector(".gallery-item");

  var mixer = mixitup(containerEl);
});
// Active gallery button
$(document).on("click", ".control button", function() {
  $(this)
    .addClass("btn-gallery-active")
    .siblings()
    .removeClass("btn-gallery-active");
});

// tab system

/* const tabLink = document.querySelectorAll(".tab-link");
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
} */

// Job-cell data table

$("#job-cell,#industry-list").dataTable();
