// function loadcomponents (id, file){
//     fetch(file)
//     .then(response => response.text())
//     .then(data => {
//         document.getElementById(id).innerHTML = data;
//     })
//     .catch(err => console.log(`error loading file ${file}: `, err))
// }


var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 1000);
}

function showPage() {
    document.getElementById("loader-board").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
} 



function loadcomponents (id, file){
    fetch(file)
    .then(response => response.text())
    .then(data => {
        document.getElementById(id).innerHTML = data;
    })
    .catch(err => console.log(`error loading file ${file}: `, err))
}

const swiper = new Swiper('.team-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-nextt',
        prevEl: '.swiper-button-prevv',
    },
    breakpoints: {
        640: {
        slidesPerView: 1,
        },
        768: {
        slidesPerView: 2,
        },
        1024: {
        slidesPerView: 3,
        },
    },
});

// Pause autoplay on hover
const sliderEl = document.querySelector('.team-slider');

sliderEl.addEventListener('mouseenter', () => {
swiper.autoplay.stop();
});

sliderEl.addEventListener('mouseleave', () => {
swiper.autoplay.start();
});

// number count
function animateCounter(el, duration = 3000) {
const target = +el.getAttribute('data-target');
const start = 0;
const stepTime = Math.max(Math.floor(duration / target), 10);
let current = start;

const counter = setInterval(() => {
    current += 1;
    el.textContent = current;

    if (current >= target) {
    el.textContent = target;
    clearInterval(counter);
    }
}, stepTime);
}

let hasAnimated = false;

function handleScrollCounter() {
const counters = document.querySelectorAll('.count');
const section = document.getElementById('stats');
const sectionTop = section.getBoundingClientRect().top;
const windowHeight = window.innerHeight;

if (!hasAnimated && sectionTop < windowHeight - 100) {
    counters.forEach(counter => animateCounter(counter));
    hasAnimated = true;
}
}

window.addEventListener('scroll', handleScrollCounter);

// slide in
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Animate once
        }
    });
}, {
threshold: 0.1
});

document.querySelectorAll('.slide-in').forEach(el => {
observer.observe(el);
});

lightbox.option({
    'resizeDuration': 400,
    'fadeDuration': 300,
    'imageFadeDuration': 300,
    'wrapAround': true,
    'showImageNumberLabel': true,
    'disableScrolling': false,
    'albumLabel': "Image %1 of %2",
    'alwaysShowNavOnTouchDevices': true,
    'positionFromTop': 50
});


// dark mode
const toggleBtn = document.getElementById('themeToggle');
const body = document.body;

// Load saved theme from cache
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
  toggleBtn.textContent = '☀️';
}

// Toggle theme
toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark');

  if (body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
    toggleBtn.textContent = '☀️';
  } else {
    localStorage.setItem('theme', 'light');
    toggleBtn.textContent = '🌙';
  }
});




// const swiper = new Swiper('.team-slider1', {
//     slidesPerView: 1,
//     spaceBetween: 30,
//     loop: true,
//     autoplay: {
//         delay: 2000,
//         disableOnInteraction: true,
//     },
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },
//     navigation: {
//         nextEl: '.swiper-button-nextt',
//         prevEl: '.swiper-button-prevv',
//     },
//     breakpoints: {
//         640: {
//         slidesPerView: 1,
//         },
//         768: {
//         slidesPerView: 2,
//         },
//         1024: {
//         slidesPerView: 3,
//         },
//     },
// });

// const swiper2 = new Swiper('.team-slider2', {
//     slidesPerView: 1,
//     spaceBetween: 20,
//     loop: true,
//     autoplay: {
//         delay: 2000,
//         disableOnInteraction: true,
//     },
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },
//     navigation: {
//         nextEl: '.swiper-button-nextt',
//         prevEl: '.swiper-button-prevv',
//     },
//     breakpoints: {
//         640: {
//         slidesPerView: 1,
//         },
//         768: {
//         slidesPerView: 2,
//         },
//         1024: {
//         slidesPerView: 3,
//         },
//     },
// });

// // Pause autoplay on hover
// const sliderEl = document.querySelector('.ccc');
// const sliderE2 = document.querySelector('.bbb');

// sliderEl.addEventListener('mouseenter', () => {
//     swiper.autoplay.stop();
// });

// sliderEl.addEventListener('mouseleave', () => {
//     swiper.autoplay.start();
// });
// sliderE2.addEventListener('mouseenter', () => {
//     swiper2.autoplay.stop();
// });

// sliderE2.addEventListener('mouseleave', () => {
//     swiper2.autoplay.start();
// });

// // number count
// function animateCounter(el, duration = 3000) {
// const target = +el.getAttribute('data-target');
// const start = 0;
// const stepTime = Math.max(Math.floor(duration / target), 10);
// let current = start;

// const counter = setInterval(() => {
//     current += 1;
//     el.textContent = current;

//     if (current >= target) {
//     el.textContent = target;
//     clearInterval(counter);
//     }
// }, stepTime);
// }

// let hasAnimated = false;
// function handleScrollCounter() {
//     const counters = document.querySelectorAll('.count');
//     const section = document.getElementById('stats');
//     const sectionTop = section.getBoundingClientRect().top;
//     const windowHeight = window.innerHeight;
//     if (!hasAnimated && sectionTop < windowHeight - 100) {
//         counters.forEach(counter => animateCounter(counter));
//         hasAnimated = true;
//     }
// }
// window.addEventListener('scroll', handleScrollCounter);


// // slide in
// const observer = new IntersectionObserver((entries, observer) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('visible');
//             observer.unobserve(entry.target); // Animate once
//         }
//     });
// }, {
// threshold: 0.1
// });

// document.querySelectorAll('.slide-in').forEach(el => {
//     observer.observe(el);
// });

// lightbox.option({
//     'resizeDuration': 400,
//     'fadeDuration': 300,
//     'imageFadeDuration': 300,
//     'wrapAround': true,
//     'showImageNumberLabel': true,
//     'disableScrolling': false,
//     'albumLabel': "Image %1 of %2",
//     'alwaysShowNavOnTouchDevices': true,
//     'positionFromTop': 50
// });


// // dark mode
// const toggleBtn = document.getElementById('themeToggle');
// const body = document.body;

// // Load saved theme from cache
// if (localStorage.getItem('theme') === 'dark') {
//   body.classList.add('dark');
//   toggleBtn.textContent = '☀️';
// }

// // Toggle theme
// toggleBtn.addEventListener('click', () => {
//   body.classList.toggle('dark');

//   if (body.classList.contains('dark')) {
//     localStorage.setItem('theme', 'dark');
//     toggleBtn.textContent = '☀️';
//   } else {
//     localStorage.setItem('theme', 'light');
//     toggleBtn.textContent = '🌙';
//   }
// });


