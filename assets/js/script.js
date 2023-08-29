document.addEventListener('DOMContentLoaded', function() {
    var header = document.querySelector('nav');
    var headerHeight = header.offsetHeight;
    
    window.addEventListener('scroll', function() {
      if (window.scrollY > headerHeight) {

        header.classList.add('header-scrolled');
        header.classList.add('border-bottom' , 'border-dark');
        ///Change the img logo as well or make a png one
        

    } else {
        header.classList.remove('header-scrolled');
        header.classList.remove('border-bottom' , 'border-dark');
      }
    });
  });

  console.log('fdsdfsd');

  document.querySelector('.navbar-toggler').addEventListener('click', ()=>{

      document.querySelector('nav').classList.toggle('background-black')
      document.querySelector('#navbarNav').classList.toggle('background-black')
  })
  
