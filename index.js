function render() {
    const productsStore = localStorageUtil.getProducts();
    headerPage.render(productsStore.length);

    productsPage.render();
}

let CATALOG = [];



fetch('https://api.jsonbin.io/b/6101863c5301292b25fe377b')
    .then(res => res.json())
    .then(body => {
        CATALOG = body;
        render();
    })
    .catch(error => {
        console.log(error);
    });

