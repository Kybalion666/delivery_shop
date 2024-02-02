import { makeObservable, observable, action, computed } from 'mobx';

export default class BasketStore {
  selectedProducts = [];
 
  constructor() {
    makeObservable(this, {
      selectedProducts: observable,
      addToBasket: action,
      removeFromBasket: action,
     
      getBasketTotal: computed,
      saveBasketToLocalStorage: action,
      loadBasketFromLocalStorage: action,
    });
  // При загрузке страницы восстанавливаем состояние корзины из Local Storage
  this.loadBasketFromLocalStorage();
  }

  addToBasket(product) {
    const existingProduct = this.selectedProducts.find((p) => p.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      // Добавляем новый продукт с начальным значением quantity равным 1
      this.selectedProducts.push({ ...product, quantity: 1 });
    }
  }

  removeFromBasket(productId) {
    this.selectedProducts = this.selectedProducts.filter((product) => product.id !== productId);
  }


  decreaseQuantityById(productId) {
    const productIndex = this.selectedProducts.findIndex((product) => product.id === productId);

    if (productIndex !== -1) {
      // Уменьшаем количество товара на 1
      this.selectedProducts[productIndex].quantity -= 1;

      // Если количество стало равным 0, удаляем товар из корзины
      if (this.selectedProducts[productIndex].quantity === 0) {
        this.selectedProducts.splice(productIndex, 1);
      }
    }
    
  }
  addeQuantityById(productId) {
    const productIndex = this.selectedProducts.findIndex((product) => product.id === productId);

    if (productIndex !== -1) {
      // Уменьшаем количество товара на 1
      this.selectedProducts[productIndex].quantity += 1;
    }}

  get getBasketTotal() {
    //  логика для вычисления общей суммы корзины
    return this.selectedProducts.reduce((total, product) => total + product.price * product.quantity , 0);
  }
  get selectedProductNames() {
    // Возвращает массив названий выбранных продуктов
    return this.selectedProducts.map(product => product.name);
  }
  // Массив с количеством товаров в корзине
  get selectedProductQuantity() {
    return this.selectedProducts.map(product => product.quantity)
  }
  
  saveBasketToLocalStorage() {
    localStorage.setItem('basket', JSON.stringify(this.selectedProducts));
  }

  // Загрузка из Local Storage
  loadBasketFromLocalStorage() {
    const savedBasket = localStorage.getItem('basket');
    this.selectedProducts = savedBasket ? JSON.parse(savedBasket) : [];
  }
}
