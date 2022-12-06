$(".slider-1").slick({
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  prevArrow:
    '<span class="prev-arrow"><i class="fa fa-chevron-left" aria-hidden="true"></i></span>',
  nextArrow:
    '<span class="next-arrow"><i class="fa fa-chevron-right" aria-hidden="true"></i></span>',
  responsive: [
    {
      breakpoint: 770,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        
        
      },
    },
    {
      breakpoint: 993,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
        
      },
    },

    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        
      },
    },
  ],
});


$(".single_slider").slick({
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow:
    '<span class="prev-arrow"><i class="fa fa-chevron-left" aria-hidden="true"></i></span>',
  nextArrow:
    '<span class="next-arrow"><i class="fa fa-chevron-right" aria-hidden="true"></i></span>',
    responsive: [
      {
        breakpoint: 997,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "120px"
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          
        },
      },
    ],
});

$(".slider-2").slick({
  prevArrow:
    '<span class="prev-arrow"><i class="fa fa-chevron-left" aria-hidden="true"></i></span>',
  nextArrow:
    '<span class="next-arrow"><i class="fa fa-chevron-right" aria-hidden="true"></i></span>',
});

$(".carousel-1").slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow:
    '<span class="prev-arrow"><i class="fa fa-chevron-left" aria-hidden="true"></i></span>',
  nextArrow:
    '<span class="next-arrow"><i class="fa fa-chevron-right" aria-hidden="true"></i></span>',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
});

$(".carousel-2").slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow:
    '<span class="prev-arrow"><i class="fa fa-chevron-left" aria-hidden="true"></i></span>',
  nextArrow:
    '<span class="next-arrow"><i class="fa fa-chevron-right" aria-hidden="true"></i></span>',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 993,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        
      },
    },
  ],
});

$(".slider-3").slick({
  infinite: true,
  speed: 300,
  prevArrow:
    '<span class="prev-arrow"><i class="fa fa-chevron-left" aria-hidden="true"></i></span>',
  nextArrow:
    '<span class="next-arrow"><i class="fa fa-chevron-right" aria-hidden="true"></i></span>',
});
// video slider

$(".video-slider").slick({
  centerMode: true,
  slidesToShow: 1,
  centerPadding: "190px",

  prevArrow:
    '<span class="prev-arrow"><i class="fa fa-chevron-left" aria-hidden="true"></i></span>',
  nextArrow:
    '<span class="next-arrow"><i class="fa fa-chevron-right" aria-hidden="true"></i></span>',
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        centerMode: true,
        centerPadding: "180px",
        slidesToShow: 1,
      },
    },
  ],
});

// slider-video-2 in 1

$(".video-gallery-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".carousel-3",
});
$(".carousel-3").slick({
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,

  centerPadding: "120px",
  asNavFor: ".video-gallery-slider",
  prevArrow:
    '<span class="prev-arrow"><i class="fa fa-chevron-left" aria-hidden="true"></i></span>',
  nextArrow:
    '<span class="next-arrow"><i class="fa fa-chevron-right" aria-hidden="true"></i></span>',
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: "35px",
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "125px",
        focusOnSelect: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "175px",
        focusOnSelect: true,
      },
    },
  ],
});

// news slider home page 1
$(".news_slider").slick({
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,

  prevArrow:
    '<span class="prev-arrow"><i class="fa fa-chevron-left" aria-hidden="true"></i></span>',
  nextArrow:
    '<span class="next-arrow"><i class="fa fa-chevron-right" aria-hidden="true"></i></span>',
  responsive: [
    {
      breakpoint: 1185,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        centerMode: true,
        focusOnSelect: true,
      },
    },
    {
      breakpoint: 993,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$(".media_slider").slick({
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow:
    '<span class="prev-arrow"><i class="fa fa-chevron-left" aria-hidden="true"></i></span>',
  nextArrow:
    '<span class="next-arrow"><i class="fa fa-chevron-right" aria-hidden="true"></i></span>',
  
  responsive: [
    {
      breakpoint: 1185,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        centerMode: true,
        focusOnSelect: true,
      },
    },
    {
      breakpoint: 993,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});


// Read More Btn


  $(document).ready(function () {
	$('.toggle-active').click(function () {
		var collapse_content_selector1 = $(this).attr('href');
		var toggle_switch1 = $(this);
		$(collapse_content_selector1).slideToggle(function () {
			if ($(this).css('display') == 'none') {
				toggle_switch1.html('Read More');
			} else {
				toggle_switch1.html('Less');
			}
		});
	})
});



























// about section
$(document).ready(function () {
  console.log("document ready");

  const labels = document.querySelectorAll(".accordion1-item__label");
  const tabs = document.querySelectorAll(".accordion1-tab");

  function toggleShow() {
    const target = this;
    const item = target.classList.contains("accordion1-tab") ?
      target :
      target.parentElement;
    const group = item.dataset.actabGroup;
    const id = item.dataset.actabId;

    tabs.forEach(function (tab) {
      if (tab.dataset.actabGroup === group) {
        if (tab.dataset.actabId === id) {
          tab.classList.add("accordion1-active");
        } else {
          tab.classList.remove("accordion1-active");
        }
      }
    });

    labels.forEach(function (label) {
      const tabItem = label.parentElement;

      if (tabItem.dataset.actabGroup === group) {
        if (tabItem.dataset.actabId === id) {
          tabItem.classList.add("accordion1-active");
        } else {
          tabItem.classList.remove("accordion1-active");
        }
      }
    });
  }

  labels.forEach(function (label) {
    label.addEventListener("click", toggleShow);
  });

  tabs.forEach(function (tab) {
    tab.addEventListener("click", toggleShow);
  });

});



// faq



$(document).ready(function() {
  $(".faqs-container .faq-singular:first-child").addClass("active").children(".faq-answer").slideDown();//Remove this line if you dont want the first item to be opened automatically.
  $(".faq-question").on("click", function(){
    if( $(this).parent().hasClass("active") ){
      $(this).next().slideUp();
      $(this).parent().removeClass("active");
    }
    else{
      $(".faq-answer").slideUp();
      $(".faq-singular").removeClass("active");
      $(this).parent().addClass("active");
      $(this).next().slideDown();
    }
  });
});