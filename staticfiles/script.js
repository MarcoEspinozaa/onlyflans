
let subtotal = 0;

const calculateTax = (subtotal) => {
  const tax = subtotal * 0.19;
  const formattedTax = tax;
  return formattedTax;
}

const calculateTotal = (subtotal) => {
  const tax = calculateTax(subtotal);
  const total = parseInt(subtotal) + parseInt(tax);
  const formattedTotal = total;
  return formattedTotal;
}

const getImgLink = (title) => {
  let imgLink;
  switch (title) {
    case 'Torta de Chocolate':
      imgLink = 'https://www.pngmart.com/files/16/Fresh-Chocolate-Cake-Transparent-Background.png';
      break;
    case 'Mouse de Frutos':
      imgLink = 'http://pngimg.com/uploads/cake/cake_PNG96997.png';
      break;
    case 'Torta de Zanahoria':
      imgLink = 'https://www.terecazola.com/wp-content/uploads/2017/02/pastel-de-zanahoria-2.png';
      break;
    case 'Pie de Limón':
      imgLink = 'https://www.soppelsahelados.com/wp-content/uploads/2017/10/Lemon-Pie.png';
      break;
    case 'Brownies':
      imgLink = 'https://www.dominos.com.au/media/1118/hotchocfudgebrowniesproductimagelargeendefault20140804_122022.png';
      break;
    default:
      imgLink = 'https://assets.codepen.io/687837/plate__chicken-salad.png';
  }
  return imgLink;
}

$('.add-button').on('click', function() {
  const title = $(this).data('title');
  const price = $(this).data('price');
  const imgLink = getImgLink(title);

  const element = `
    <li class="cart-item">
      <img src="${imgLink}" alt="${title}" class="menu-image2">
      <div class="cart-item-dets">
        <p class="cart-item-heading">${title}</p>
        <p class="g-price">$${price}</p>
      </div>
    </li>
  `
  $('.cart-items').append(element);
  
  subtotal = subtotal + price;
  
  const formattedSubtotal = subtotal.toLocaleString("es-ES");
  const tax = calculateTax(subtotal).toLocaleString("es-ES");
  const total = calculateTotal(subtotal).toLocaleString("es-ES");
  
  $('.cart-math').html(`
    <p class="cart-math-item">
      <span class="cart-math-header">Subtotal:</span>
      <span class="g-price subtotal">$${formattedSubtotal}</span>
    </p>
    <p class="cart-math-item">
      <span class="cart-math-header">IVA:</span>
      <span class="g-price tax">$${tax}</span>
    </p>
    <p class="cart-math-item">
      <span class="cart-math-header">Total:</span>
      <span class="g-price total">$${total}</span>
    </p>
  `)
})




var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 500;
  }

  setTimeout(function() {
  that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.10em solid #FF8000}";
  document.body.appendChild(css);
};




$(document).ready(function(){
  $('.login-info-box').fadeOut();
  $('.login-show').addClass('show-log-panel');
});


$('.login-reg-panel input[type="radio"]').on('change', function() {
  if($('#log-login-show').is(':checked')) {
      $('.register-info-box').fadeOut(); 
      $('.login-info-box').fadeIn();
      
      $('.white-panel').addClass('right-log');
      $('.register-show').addClass('show-log-panel');
      $('.login-show').removeClass('show-log-panel');
      
  }
  else if($('#log-reg-show').is(':checked')) {
      $('.register-info-box').fadeIn();
      $('.login-info-box').fadeOut();
      
      $('.white-panel').removeClass('right-log');
      
      $('.login-show').addClass('show-log-panel');
      $('.register-show').removeClass('show-log-panel');
  }
});
