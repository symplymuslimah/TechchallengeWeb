
  // FREQUENTLY ASKED QUESTIONS JAVASCRIPT CODE
  const Btns = document.querySelectorAll('.question-icon');
    Btns.forEach(btn => { btn.addEventListener('click',function (e) {
  const item =  e.currentTarget.parentElement;
      item.classList.toggle("show-text");
    })
        
    });

    //REGISTER SUBMIT JAVASCRIPT CODE
    document.addEventListener('DOMContentLoaded',function () {
      const FormInput = document.getElementById('form-input');
      const Message = document.querySelector('.confirmation-message-section');

      FormInput.addEventListener('submit',function (e) {
            e.preventDefault();
        if(this){
             Message.classList.remove('hidden');

        }
        else {
          Message.classList.add('hidden');
        }
      });


    const Dismiss = document.getElementById('dismiss');
    Dismiss.addEventListener('click',function  () {
      Message.classList.add('hidden');
    })
      
    });


  //nav bar responsive code
  document.addEventListener('DOMContentLoaded', function () {
    const iconNav = document.querySelector(".icon-nav");
    iconNav.addEventListener('click',function() {
    const  navBar = document.querySelector('.nav-bar');
    navBar.classList.add("active");
    });
    
    const cancelNav = document.querySelector(".icon-cancel");
    cancelNav.addEventListener('click',function () {
    const  navBar = document.querySelector('.nav-bar');
     navBar.classList.remove("active");
    });
    });   


    //scroll reveal javascript code
    ScrollReveal({ distance: '120px' });
ScrollReveal().reveal('.container', { origin: 'top', delay:200, interval:200,
duration:2000 });
ScrollReveal().reveal('.landing-page-content', { origin: 'left', delay:200, interval:200,
duration:2000 });
ScrollReveal().reveal('.image-container', { origin: 'right', delay:200, interval:200,
duration:2000 });
ScrollReveal().reveal('.introduction-section,.rules-guideline-section', { origin: 'bottom', delay:200, interval:200,
duration:2000 });;
ScrollReveal().reveal('.criteria-section,.faq-question-section', { origin: 'bottom', delay:200, interval:200,
duration:2000 });;
ScrollReveal().reveal('.timeline-section,.prize-reward-section', { origin: 'bottom', delay:200, interval:200,
duration:2000 });
ScrollReveal().reveal('.partner-sponsor-section,.terms-privacy-section', { origin: 'bottom', delay:200, interval:200,
duration:2000 });
ScrollReveal().reveal('.footer-section,.register-main-content', { origin: 'left', delay:200, interval:200,
duration:2000 });

