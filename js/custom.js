document.querySelector(".menu-toggler").addEventListener("click", function (e) {
    e.preventDefault();
    $('header .mobile-menu').toggleClass('active');
    $('header .menu-toggler').find('i').toggleClass('fa-bars fa-xmark');
});
$(".lang-toggle").on("click", function (e) {
    e.preventDefault();
    $('header .language-toggler ul').toggleClass('active');
});


/*video player*/
// play the targeted video (and hide the poster frame)
function videoPlay($wrapper) {
    var $iframe = $wrapper.find(".js-videoIframe");
    var src = $iframe.data("src");
    // hide poster
    $wrapper.addClass("videoWrapperActive");
    // add iframe src in, starting the video
    $iframe.attr("src", src);
    $(".home-video-close").removeClass("is-hidden");
}

// stop the targeted/all videos (and re-instate the poster frames)
function videoStop($wrapper) {
    // if we're stopping all videos on page
    if (!$wrapper) {
        var $wrapper = $(".js-videoWrapper");
        var $iframe = $(".js-videoIframe");
        // if we're stopping a particular video
    } else {
        var $iframe = $wrapper.find(".js-videoIframe");
    }
    // reveal poster
    $wrapper.removeClass("videoWrapperActive");
    // remove youtube link, stopping the video from playing in the background
    $iframe.attr("src", "");
    $(".home-video-close").addClass("is-hidden");
}

// Function to prevent double tap to play the video on touch devices. Hides poster image.
function touchVideo() {
    // Checks if #js-point-detector is made visible by the pointer:coarse media query
    var isVisible = $("#js-pointer-detector").is(":visible");
    // If it is visible...
    if (isVisible === true) {
        // Add active wrapper class
        $(".videoWrapper").addClass("videoWrapperActive");
        // Get video source
        var source = $(".js-videoIframe").data("src");
        // Load video source
        $(".js-videoIframe").attr("src", source);
    } else { }
}

// poster frame click event
$(document).on("click", ".js-videoPoster", function (ev) {
    ev.preventDefault();
    var $poster = $(this);
    var $wrapper = $poster.closest(".js-videoWrapper");
    videoPlay($wrapper);
});

$(document).ready(function () {
    touchVideo();
});

/*** Animejs Button Js****/

document.querySelector(".link").addEventListener("click", function (e) {
    e.preventDefault();

    const currentSection = document.querySelector('.home-hero.active');
    const nextSection = currentSection.nextElementSibling;

    if (nextSection) {
        currentSection.classList.remove('active');
        nextSection.classList.add('active');
        anime({
            targets: '.anim',
            scrollTop: nextSection.offsetTop,
            duration: 700,
            easing: 'easeInOutQuad'
        });
    }
});

$(document).ready(function () {
    $('.navigation-lines').html(
        Array.from({
            length: $('section').length
        }, (_, i) =>
            `<div${i === 0 ? ' class="active"' : ''}></div>`
        ).join('')
    );
});