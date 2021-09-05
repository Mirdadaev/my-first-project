class Products {
    constructor() {
        this.classNameActiv = 'product-elements__btn_active';
        this.labelAdd = 'Korzinkaga qo`shish';
        this.labelRemove = 'Korizkadan o`chirish';
    }

    handleSetLocationStorage(element, id) {
        const { pushProduct, products } = localStorageUtil.putProducts(id);

        if (pushProduct) {
            element.classList.add(this.classNameActiv);
            element.innerHTML = this.labelRemove;
        } else {
            element.classList.remove(this.classNameActiv);
            element.innerHTML = this.labelAdd;
        }

        headerPage.render(products.length );


    }

    render() {
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';

        CATALOG.forEach(({ id, name, price, img }) => {
            let activeClass = '';
            let activeText = '';

            if (productsStore.indexOf(id) === -1) {
                activeText = this.labelAdd;
            } else {
                activeClass = ' ' + this.classNameActiv;
                activeText = this.labelRemove;
            }

            htmlCatalog += `
            <li class="product-elements">
            <span class="product-elements__name">${name}</span>
            <img class="product-elements__img"src="${img}"/>
            <span class="product-elements__price">
            ⚡️ ${price.toLocaleString()} USD
            </span>
            <button class="product-elements__btn${activeClass}" onclick="productsPage.handleSetLocationStorage(this, '${id}');">
            ${activeText}
            </button>
            </li>
            `;
        });
        const html = `
            <ul class="product-containers">
            ${htmlCatalog}
            </ul>
            
            `;

        ROOT_PRODUCTS.innerHTML = html;

    }
}
const productsPage = new Products();

