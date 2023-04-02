/*=============== FILTERS TABS ===============*/

import { delay } from "lodash";

const tabs = document.querySelectorAll('[data-target]'), 
tabContent =  document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
  tab.addEventListener('click', ()=>{
    const target = document.querySelector(tab.dataset.target)
    tabContent.forEach(tc=>{
      tc.classList.remove('filters_active')
    })
    target.classList.add('filters_active')
    tabs.forEach(t =>{
      t.classList.remove('filter_tab_active')
    })
    tab.classList.add('filter_tab_active')
  })
})
/*=============== DARK LIGHT THEME ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400
})
sr.reveal(`.profile_border`);
sr.reveal(`.profile_name`, {delay: 500})
sr.reveal(`.profile_profession`, {delay: 600})
sr.reveal(`.profile_social`, {delay: 700})
sr.reveal(`.profile_info_group`, {interval: 100, delay: 700})
sr.reveal(`.profile_buttons`,{delay: 800} )
sr.reveal(`.profile_content`, {delay: 900})
sr.reveal(`.filters`, {delay: 1000})