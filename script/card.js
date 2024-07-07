const tabs = document.querySelectorAll('.menu-offer-tabs div');
const container = document.querySelector('.menu-grid');
const cards = document.querySelectorAll('.grid-preview');
const buttons = document.querySelectorAll('.tab-item');
const texts = document.querySelectorAll('.tab-item-text');
const icons = document.querySelectorAll('.tab-item-icon');
const showMoreButton = document.querySelector('.more-card');
const rotate = document.querySelector('.svg-rot');

showMoreButton.addEventListener('click', function() {
  rotate.classList.toggle('rotate');
});

buttons.forEach((button, index) => {
  button.addEventListener('click', function () {
    buttons.forEach((btn, i) => {
      btn.classList.toggle('butt', i === index);
      texts[i].classList.toggle('text', i === index);
      icons[i].classList.toggle('icon', i === index);
    });
  })
});

const getProducts = async () => {
  const response = await fetch('./products.json');
  const products = await response.json();
  return (products);
};

// const handleCardClick = (event) => {
//     console.log(event.currentTarget.querySelector(".description-big").innerHTML);
//   };


const createCard = (data, index) => {
  const { name, description, price, category } = data;
  return `
    <div class="grid-preview">
      <div class="grid-box">
      <div class="grid-preview-box">
      <img src="image/menu-coffee/${category}/${category}-${index + 1}.png" alt="${category}-${index + 1}">
      </div>
      </div>
      <div class="grid-preview-description">
      <div class="description-title">
      <div class="description-big">${name}</div>
      <div class="description-small">${description}</div>
      </div>
      <div class="description-price">$ ${price}</div>
      </div>
      </div>
    `;
};

const handleTabClick = async (event) => {
  const category = event.currentTarget.dataset.category;
  const products = await getProducts();
  const desiredCategory = products.filter((product) => {
    return product.category === category;
  });

  let cards = [];
  desiredCategory.forEach((item, index) => {
    const card = createCard(item, index);
    cards.push(card);
  });

  if (category == 'tea') {
    showMoreButton.style.display = 'none';
  } else {
    showMoreButton.style.display = 'flex';
  };

  cards.forEach((item) => {
    container.innerHTML = cards.join("");
  });
};

tabs.forEach((tabItem) => {
  tabItem.addEventListener("click", handleTabClick);
});

// cards.forEach((card) => {
//   card.addEventListener("click", handleCardClick);
// });

