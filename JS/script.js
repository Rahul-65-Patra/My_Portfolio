//------------------------------ Toggle Navbar -----------------------

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('fa-xmark'); // Toggle the menu icon class
  navbar.classList.toggle('active'); // Toggle the navbar's active class
};

//----------------------- Scroll Section active link ------------------

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active'); // Remove active class from all links
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active'); // Add active class to the current section's link
      });
    }
  });

  //-------------------------------- Sticky Navbar----------------------------------

  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100); // Add sticky class when scrolling past 100px

  //------------------ Remove toggle icon and navbar active state when link is clicked -----------------------

  menuIcon.classList.remove('fa-xmark');
  navbar.classList.remove('active');
};



//------------------ Scroll Reveal-----------------------


const srTop=ScrollReveal({
  origin:"top",
  distance:"80px",
  duration:2000,
  reset:true
})
srTop.reveal(".home-content",{delay:100});
srTop.reveal(".heading",{delay:100});
srTop.reveal(".top-heade h1 span",{delay:100});
srTop.reveal(".data",{delay:100});


const srButtom=ScrollReveal({
  origin:"top",
  distance:"80px",
  duration:2000,
  reset:true
})


srButtom.reveal(".home-img",{delay:100});
srButtom.reveal(".portfolio-box",{delay:100});
srButtom.reveal(".social-media",{delay:100});





const srLeft=ScrollReveal({
  origin:"left",
  distance:"80px",
  duration:2000,
  reset:true
})

srLeft.reveal(".about-info",{delay:100});
srLeft.reveal(".home-content h1",{delay:100});
srLeft.reveal(".about-img",{delay:100});
srLeft.reveal(".experience",{delay:100});
srLeft.reveal(".contact form",{delay:100});
srLeft.reveal(".left-box",{delay:100});


const srLeftLine=ScrollReveal({
  origin:"left",
  distance:"80px",
  duration:1000,
  reset:true
})
srLeftLine.reveal(".about-line",{delay:50});
srLeftLine.reveal(".Skills-line",{delay:50});
srLeftLine.reveal(".portfolio-line",{delay:50});



const srRight=ScrollReveal({
  origin:"right",
  distance:"80px",
  duration:2000,
  reset:true
})

srRight.reveal(".skill",{delay:100});
srRight.reveal(".skill-box",{delay:100});
srRight.reveal(".home-content p",{delay:100});
srRight.reveal(".about-content",{delay:100});
srRight.reveal(".services-container",{delay:100});
srRight.reveal(".earth",{delay:100});
srRight.reveal(".right-box",{delay:100});



const srRightLine=ScrollReveal({
  origin:"right",
  distance:"80px",
  duration:1000,
  reset:true
})
srRightLine.reveal(".biodata-line",{delay:50});
srRightLine.reveal(".Tech-Stack-line",{delay:50});

//------------------ Typed Js-----------------------

let typed = new Typed('.multiple-text', {
  strings: ["Web Developer","Software Engineer","Frontend Developer", "Web Designer","Software Developer", "Backend Developer", "Full Stack Developer"],
  typeSpeed: 100,
  backSpeed: 70,
  backDelay:1000,
  loop: true,
});




//--------------------------- Contact Form Submit ----------------

jQuery('#dataSubmit').on('submit', function(e) {
  e.preventDefault();
  jQuery('#msg').html('<h3 style="color:gold;font-size:2rem">Please wait . . .</h3>');
  jQuery('#btnSubmit').attr('disabled',true);
  jQuery.ajax({
    url:'https://script.google.com/macros/s/AKfycbzSXm3P63kNVv_JaPT5sNyYq3kJ8EVIrvVGvy9c7BG5gHW7mx8u9sjedm79Bu1AsH3Fig/exec',
    type:'post',
    data:jQuery('#dataSubmit').serialize(),
    success:function(){
      jQuery('#dataSubmit')[0].reset();
      //jQuery('#msg').html('<h3 style="color:green">Thank you👍</h3>');
      window.location.href = 'thankyou.html';
    }
  })
});




//---------------- Darh and light --------------

// const toggleButton = document.getElementById('darkModeToggle');
// const toggleIcon = document.getElementById('toggleIcon');

// toggleButton.addEventListener('click', () => {

//     document.body.classList.toggle('dark-mode');
//     if (document.body.classList.contains('dark-mode')) {  
//         toggleIcon.src = 'img/moon.png';
//         toggleIcon.style.color='white'
//     } else {
//         toggleIcon.src = 'img/sun.png';
//     }
// });