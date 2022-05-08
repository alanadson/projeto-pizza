let cart = [];
let modalQT = 1;

const s = (el) => document.querySelector(el);
const sa = (el) => document.querySelectorAll(el);

// pizza list
pizzaJson.map((item, index) => {
    let pizzaItem = s('.models .pizza-item').cloneNode(true);

    // fill info pizzaItem
    pizzaItem.setAttribute('data-key', index);
    pizzaItem.querySelector('.pizza-item--img img').src = item.img;
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;

    pizzaItem.querySelector('a').addEventListener('click', (e) => {
        e.preventDefault();
        let key = e.target.closest('.pizza-item').getAttribute('data-key');
        modalQT = 1;

        console.log(pizzaJson[key]);

        s('.pizzaBig img').src = pizzaJson[key].img;
        s('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
        s('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
        s('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[key].price.toFixed(2)}`;

        // large size fixed
        s('.pizzaInfo--size.selected').classList.remove('selected');
        sa('.pizzaInfo--size').forEach((size, sizeIndex) => {
            if (sizeIndex == 2) {
                size.classList.add('selected');
            }
            size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex];
        });

        s('.pizzaInfo--qt').innerHTML = modalQT;

        s('.pizzaWindowArea').style.opacity = 0;
        s('.pizzaWindowArea').style.display = 'flex';
        // transition 0 => 1 opacity
        setTimeout(() => {
            s('.pizzaWindowArea').style.opacity = 1;
        }, 200);
    });

    s('.pizza-area').append(pizzaItem);
});

// modal events
function closeModal() {
    s('.pizzaWindowArea').style.opacity = 0;
    setTimeout(() => {
        s('.pizzaWindowArea').style.display = 'none';
    }, 500);
}

sa('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton').forEach((item) => {
    item.addEventListener('click', closeModal);
});

// add and remove quantity
s('.pizzaInfo--qtmenos').addEventListener('click', () => {
    if (modalQT > 1) {
        modalQT--;
        s('.pizzaInfo--qt').innerHTML = modalQT;
    }
});
s('.pizzaInfo--qtmais').addEventListener('click', () => {
    modalQT++;
    s('.pizzaInfo--qt').innerHTML = modalQT;
});

// selected size on display
sa('.pizzaInfo--size').forEach((size, sizeIndex) => {
    size.addEventListener('click', () => {
        s('.pizzaInfo--size.selected').classList.remove('selected');
        size.classList.add('selected');
    });
});

// action button
s('.pizzaInfo--addButton').addEventListener('click', () => {
    // what's a pizza?, which size?, how many pizzas?
});


