$(document).ready(function(){
    $('.carousel').carousel();
});
 
const toCurrency = price => {
    return new Intl.NumberFormat('ru-RU',
    {currency: 'kzt',
     style: 'currency'
     }).format(price)
}

document.querySelectorAll('.price').forEach(node=>{
    node.textContent = toCurrency(node.textContent)
 })
 
  
$(function() {
    
    $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        } 
    });
     
    $('#toTop').click(function() {
        $('body,html').animate({scrollTop:0},800);
    });
     
});