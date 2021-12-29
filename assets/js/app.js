'use strict';

class GoodsList {
   constructor() {
      this.burgers = [];
      this.totalGood = [];
      this.totalPriceOfMenu = 0;
      this.renderGoods();
      this.calPrice();
      this.render();
   }
   renderGoods() {
      this.burgers = [
         {id: 1, title: 'Burger', size: 'Small', price: 50, calories: 20,},
         {id: 2, title: 'Burger', size: 'Big', price: 100, calories: 40,},
         {id: 3, title: 'Sauce', price: 10, calories: 20,},
         {id: 4, title: 'Salad', price: 20, calories: 5,},
         {id: 5, title: 'Potato', price: 15, calories: 10,},
      ];
   }
   calPrice() {
      this.burgers.forEach(burger => {
         this.totalPriceOfMenu += burger.price;
      })
      document.querySelector('.total-price').insertAdjacentHTML('beforeend', '<p>' + 'Total Price: ' + this.totalPriceOfMenu + '</p>');
   }
   render() {
      this.burgers.forEach(burger => {
         const Product = new Element(burger)
         this.totalGood.push(Product);
         document.querySelector('.products').insertAdjacentHTML('beforeend', Product.HTMLStringBurger());
      })
   }
}

class Element {
   constructor(product) {
      this.id = product.id;
      this.title = product.title;
      this.price = product.price;
      this.calories = product.calories;
   }
   HTMLStringBurger() {
      return '</gr><br><div><p>' + this.title + '</p><p>' + this.price + '</p><p>' + this.calories + '</p></div><br><hr>'
   }
}

const good = new GoodsList();