const menuItens = document.querySelectorAll('.menu a')


function getScrollTopByHref(element) {
   const id = element.getAttribute('href')
   return document.querySelector(id).offsetTop
}



function scrollToPosition(to) {
    
      window.scroll({
      top: to,
      behavior: "smooth"
   })

   smoothScrollTo(0, to)

}