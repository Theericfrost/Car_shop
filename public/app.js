$(document).ready(function(){
    $('.carousel').carousel();
});


$(document).ready(function(){
    $('.parallax').parallax();
});
 
const toCurrency = price => {
    if(price > 1000000) {
        return new Intl.NumberFormat('ru-RU',
            {currency: 'kzt',
            style: 'currency'
            }).format(price)
    }
    return new Intl.NumberFormat('ru-RU',
        {
            currency: 'USD',
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