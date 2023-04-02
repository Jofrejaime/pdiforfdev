/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active_link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active_link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
  const header = document.getElementById('header')
  // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
  if(this.scrollY >= 80) header.classList.add('scroll_header'); else header.classList.remove('scroll_header')
}
window.addEventListener('scroll', scrollHeader)