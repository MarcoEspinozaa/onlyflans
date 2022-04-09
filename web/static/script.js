
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








