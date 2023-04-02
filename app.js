const priceTitle = document.querySelectorAll('.typeprice ul li a')
const headerMobile = document.querySelector('.header-mobile')
const headerLarge = document.querySelector('.header_large')

console.log(headerLarge.style.display)
const heightOutput = document.querySelector("#height");
const widthOutput = document.querySelector("#width");

function updateSize() {
 
    if(window.innerWidth<1149){
        headerMobile.style.display='block'
        headerLarge.style.display='none'
    }else{
        headerMobile.style.display='none'
        headerLarge.style.display='block'
    }
}

updateSize();
window.addEventListener("resize", updateSize);
















  priceTitle.forEach((item,index)=>{
    
    item.addEventListener('click',(e)=>{
        e.preventDefault()
        
        priceTitle.forEach((item)=>{
            item.classList.remove('active')
        })
        item.classList.add('active')
       
        
        
    })

})




  