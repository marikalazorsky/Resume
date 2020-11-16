window.addEventListener('load', init);

function init() {
  window.addEventListener('scroll', onScroll);
  window.addEventListener('resize', onResize);

  function toggleClasses() {
    document.querySelector(".burger__menu span").classList.toggle("active");
    document.querySelector(".menu-section ").classList.toggle("active__menu");
    document.querySelector("nav").classList.toggle("active");
  }

  document.querySelector(".burger__menu").addEventListener("click", function () {
    toggleClasses();
  });

  const anchors = document.querySelectorAll('.scroll-to');

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const blockID = anchor.getAttribute('href');
      const getActiveMobileMenu = document.querySelector('.menu-section.active__menu');
      if (getActiveMobileMenu) {
        toggleClasses();
      }
      document.querySelector(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    })
  }

  // scroll
  function onResize() {
    onScroll();
    return document.documentElement.clientWidth;
  }

  let section = document.querySelectorAll(".section");
  let sections = [];
  let i = 0;

  Array.prototype.forEach.call(section, function(e) {
    if (onResize() <= 1000) {
      let menuHeight = document.querySelector('.menu-section').offsetHeight;
      sections[e.id] = e.offsetTop - menuHeight;
    } else {
      sections[e.id] = e.offsetTop;
    }
  });

  function onScroll() {
    let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    
    for (i in sections) {
      if (sections[i] <= scrollPosition) {
        document.querySelector('nav .active').classList.toggle('active');
        document.querySelector('a[href*=' + i + ']').classList.toggle('active');
      }
    }
  };
}