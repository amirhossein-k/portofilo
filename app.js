const priceTitle = document.querySelectorAll('.typeprice ul li a')
const section = document.querySelectorAll('section')
const alink = document.querySelectorAll('header .navlink')
const headerMobile = document.querySelector('.header-mobile')
const headerLarge = document.querySelector('.header_large')
const close = document.querySelector('.header-mobile .collapse .box-my .close')
const navbar = document.querySelector('#navbarTogglerDemo02')
const contact = document.querySelector('.contact .row')



const heightOutput = document.querySelector("#height");
const widthOutput = document.querySelector("#width");



function updateSize() {
 
    if(window.innerWidth<1149){
        headerMobile.style.display='block'
        headerLarge.style.display='none'
        navbar.classList.remove('show')
        
      
    }
    else if(window.innerWidth<993){
        contact.style.gap="15px"
        contact.style.padding= "50px !important";
        
    }
    else{
        headerMobile.style.display='none'
        headerLarge.style.display='block'
        contact.style.gap="0"
    }
}

updateSize();
window.addEventListener("resize", updateSize);
close.addEventListener('click',()=>{
    console.log(navbar)
    navbar.classList.remove('show')
})

alink.forEach((item,index)=>{
    item.addEventListener('click',(e)=>{
        e.preventDefault()

        section.forEach((se,indexx)=>{
        
                if(se.className.toUpperCase()===item.lastChild.previousSibling.innerText){
                    se.scrollIntoView({
                        block:'start',
                        behavior:'smooth',
                        inline:'start'
                    })
                }
            })
    })
  })
  
  priceTitle.forEach((item,index)=>{
    
    item.addEventListener('click',(e)=>{
        e.preventDefault()
        
        priceTitle.forEach((item)=>{
            item.classList.remove('active')
        })
        item.classList.add('active')
       
        
        
    })

})




  