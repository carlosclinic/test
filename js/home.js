//hide other services(7th up)
var services=document.querySelectorAll('#services .cards .card');

function filterServices(){
  for (let i = -1; i < services.length; i++) {
    if(i>5){ 
    services[i].classList.add('hidden');
    }
  }  
}

if(services.length<6){
  var readmore=document.querySelector('.more_services');
  readmore.style.display='none';
}


filterServices();


// load more services
services.forEach(element=>{
  var readmore=document.querySelector('.more_services');
  readmore.addEventListener('click',()=>{
    element.classList.remove('hidden')
    readmore.classList.add('load-more')
})
})

// load less services
services.forEach(element=>{
  var readmore=document.querySelector('.more_services');
  var readless=document.querySelector('.less_services');
  readless.addEventListener('click',()=>{
    filterServices();
    readmore.classList.remove('load-more');
})
})


// Doctor slide images
var swiper = new Swiper(".mySwiper", {

    slidesPerView: 3,
    spaceBetween: 150,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
   
        0: {
          slidesPerView: 1,
          
          slidesPerGroup: 1,
    
        },

        769: {
          slidesPerView: 2,
          spaceBetween: 100,
          slidesPerGroup: 1,
    
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 100,
          slidesPerGroup: 1,
    
        },
        1044: {
          slidesPerView: 3,
          spaceBetween: 150,
          slidesPerGroup: 1,
    
        },
      },
 
});



// scroll current page indicator


function scrollActive(){
  
    const sections = document.querySelectorAll('section[id]')
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')


        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('header .nav a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('header .nav a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

window.addEventListener('scroll', scrollActive)


// scroll reveal animation
ScrollReveal().reveal('.title h1, .text p, #home .book, #doctors .title p', { duration: 1300, delay: 200, reset: true , origin: 'top', distance:'50px'}); 
ScrollReveal().reveal('.home_img', { duration: 1300, delay: 400, reset: true , origin: 'top', distance:'50px'}); 
ScrollReveal().reveal('#services .cards', { duration: 1500, delay: 800, reset: true , origin: 'left', distance:'50px'}); 
ScrollReveal().reveal('#services button', { duration: 1500, delay: 1000, reset: true , origin: 'bottom', distance:'20px'}); 
ScrollReveal().reveal('#doctors .content', { duration: 1500, delay: 800, reset: true , origin: 'bottom', distance:'50px'}); 
ScrollReveal().reveal('#contact-us .map, #contact-us .info,#contact-us .socials a', {  duration: 1300, delay: 600, reset: true , origin: 'bottom', distance:'50px'}); 
