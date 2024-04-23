const tabLinks=document.querySelectorAll(".tab-links");const tabContents=document.querySelectorAll(".tab-contents");const btnBurger=document.querySelector('.burgerbtn');const navMenu=document.querySelector('#navmenu');const navMenuItems=document.querySelectorAll('#navmenu li');const openLink=(index)=>{tabLinks.forEach(element=>{element.classList.remove("active-link")});tabContents.forEach(element=>{element.classList.remove("active-tab")});tabLinks[index].classList.add("active-link");tabContents[index].classList.add("active-tab")};tabLinks.forEach((link,index)=>{link.addEventListener("click",()=>{openLink(index)})});btnBurger.addEventListener('click',()=>{btnBurger.classList.toggle('active-menu');document.body.classList.toggle('hidden');navMenu.style.right=navMenu.style.right!=="0px"?"0px":"-200px"});navMenuItems.forEach((element)=>{element.addEventListener('click',()=>{navMenu.style.right="-200px";btnBurger.classList.remove('active-menu');document.body.classList.remove('hidden')})});document.addEventListener('DOMContentLoaded',function(){const hobbySection=document.querySelector('.hobby-left');const hobbyImg=document.querySelector('.hobby-right');const aboutImage=document.querySelector('#about .img-content');const aboutText=document.querySelector('#about .about-col-2');const servicesSection=document.querySelector('#services');const servicesText=document.querySelector('#services .wrapper-text');const servicesItems=document.querySelector('.services-items');const portfolioSection=document.querySelector('#portfolio');const portfolioLeft=document.querySelector('.portfolio-left');const portfolioRight=document.querySelector('.portfolio-right');const contactSection=document.querySelector('#contact');const hobbyTop=hobbySection.offsetTop;const aboutTop=aboutImage.offsetTop;const servicesTop=servicesSection.offsetTop;const portfolioTop=portfolioSection.offsetTop;const contactTop=contactSection.offsetTop;const windowHeight=window.innerHeight;function revealHobbySection(){var scrolled=window.scrollY;if(scrolled>hobbyTop-windowHeight+100){hobbySection.classList.add('visible');hobbyImg.classList.add('visible')}if(scrolled>aboutTop-windowHeight+100){aboutImage.classList.add('visible');aboutText.classList.add('visible')}if(scrolled>servicesTop-windowHeight+100){servicesText.classList.add('visible')}if(scrolled>servicesTop-windowHeight+300){servicesItems.classList.add('visible')}if(scrolled>portfolioTop-windowHeight+100){portfolioLeft.classList.add('visible');portfolioRight.classList.add('visible')}if(scrolled>contactTop-windowHeight+100){contactSection.classList.add('visible')}}window.addEventListener('scroll',revealHobbySection)});