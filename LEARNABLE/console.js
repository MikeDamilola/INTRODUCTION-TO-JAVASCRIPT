// class Product {
//     constructor(id, name, price) {
//       this.id = id;
//       this.name = name;
//       this.price = price;
//     }
//   }
  
//   class ShoppingCart {
//     constructor() {
//       this.items = [];
//     }
  
//     addItem(product, quantity) {
//       this.items.push({ product, quantity });
//     }
  
//     getTotal() {
//       return this.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
//     }
  
//     checkout() {
//       console.log("Items in your cart:");
//       this.items.forEach(item => {
//         console.log(`${item.product.name} - Quantity: ${item.quantity}`);
//       });
//       console.log("Total: $" + this.getTotal());
//       console.log("Thank you for your purchase!");
//       this.items = []; // Clear the cart after checkout
//     }
//   }
  
//   // Sample products
//   const product1 = new Product(1, "Laptop", 800);
//   const product2 = new Product(2, "Headphones", 50);
//   const product3 = new Product(3, "Mouse", 20);
  
//   // Sample usage
//   const cart = new ShoppingCart();
  
//   cart.addItem(product1, 2);
//   cart.addItem(product2, 1);
//   cart.addItem(product3, 3);
  
//   console.log("Welcome to the Simple E-Commerce Console App!");
//   console.log("Available products:");
  
//   const products = [product1, product2, product3];
//   products.forEach(product => {
//     console.log(`${product.id}. ${product.name} - $${product.price}`);
//   });
  
//   console.log("\nYour shopping cart:");
//   cart.items.forEach(item => {
//     console.log(`${item.product.name} - Quantity: ${item.quantity}`);
//   });
  
//   console.log("\nTotal in cart: $" + cart.getTotal());
  
//   console.log("\nChecking out...");
//   cart.checkout();

  // class Product{
  //   constructor(id, name, price){
  //     this.id = id;
  //     this.name = name;
  //     this.price = price;
  //   }
  // }

  // class ShoppingCart{
  //   constructor() {
  //     this.items = []
  //   }

  //   addItems(product, quantity){
  //     this.items.push({product, quantity});
  // }

  // let milk = new Product(1, "Danomilk", 3000);
  // let tea = new Product(2, "Danomilk", 3000);
  // let coffee = new Product(3, "Danomilk", 3000);

//   class Product {
//     constructor(id, name, price) {
//       this.id = id;
//       this.name = name;
//       this.price = price;
//     }
    
//   }


//   class ShoppingCart { //shoppingcart class was created to help add items selected with the id,name and quantity
//     constructor() {
//       this.items = [];
//     }
  
//     addItem(product, quantity) { //This add item help to identity the product class and the quantity to be added to the this item array
//       this.items.push({ product, quantity });//this is used to push the product and quantity to this item array
//     }

//     getTotal() {
//       return this.items.reduce((total, item) => total + item.product.price * item.quantity, 0); //This will return the sum of the total item in the cart
//     }
  
//     checkout() {
//             console.log("Items in your cart:"); // this is to display the item in the cart
//             this.items.forEach(item => { // the items are being displayed with product name and quantity
//               console.log(`${item.product.name} - Quantity: ${item.quantity}`);
//             });
//             //this line of code will empty the shopping cart after checking out
//             console.log("Total: $" + this.getTotal());
//             console.log("Thank you for your purchase!");
//             this.items = []; // Clear the cart after checkout
//           }
//   }
  
//  // Sample products object
//   let milk = new Product(1, "Cowbell", 80);
//   let tea = new Product(2, "Milo", 100);
//   let sugar = new Product(3, "Dangote", 20);
//   let groundNut = new Product(4, "Chelsea", 70)
//   let garri = new Product(5, "Ijebu Garri", 800)


// //   // Sample usage
//   const mikecart = new ShoppingCart();// declaring the instance mikecart for a new shopping cart

//   // this below how additem help add product with quantity to mikecart
//   mikecart.addItem(milk, 3);
//   mikecart.addItem(tea, 2);
//   mikecart.addItem(sugar, 6);
  
//   console.log("Welcome to the Mike E-Commerce Console App!");
//   console.log("Available products:");
  
//   const products = [milk, tea, sugar, groundNut, garri]; // this is a list of available products
//   products.forEach(product => {
//       console.log('${product.id}. ${product.name} - ${product.price}');//this is to ouput a string of product id, product name and price
//   });

//   console.log("\nYour shopping cart:");
//   cart.items.forEach(item => {
//         console.log(`${item.product.name} - Quantity: ${item.quantity}`);
//       });
      
//       console.log("\nTotal in cart: $" + cart.getTotal());
  
//   console.log("\nChecking out...");
//   mikecart.checkout();


// class BankAccount { // class bank account was defined here as the blueprint of the object
//   balance = 0; // since the balance in the bank accont is not yet determined
//   //initiate a deposit function
//   deposit(amount) { //the deposit function was initiated to accomodate the amount to be deposited
//     this.balance += amount; //this methods the balance in the account is added to the the amount to be deposited
//     console.log( 'Deposit of ${amount}processed. New balance: {this.balance}') // print out the deposit amount processed with the new balance
//     //when money was deposited

//   withdrawal(amount)
//   {// call the function withdraw to withdraw an amount
//     if(amount <= this.balance){ //using the if statement amount to be withdrawed should be less than the balance
//       this.balance -= amount;//the method is to minus the balance from the amount
//       console.log('Withdraw the ${amount} processed. New balance: ${this.balance}')// print out
//     } else{
//       console.log('Insufficient funds')// else print out insufficient funds
//     }
//   }

//   }
// }
// let withdrawal=0;

// const myAccount = new BankAccount();
// myAccount.deposit(1000);
// myAccount.withdrawal(500);

// class Human {
// numberOfEyes= 2;
// hairColor = 'Grey';

// static numberOfNose = 2;

// laughning(){
//   console.log(this)
  
// }
// laughninghairColor(){
//   console.log(this.hairColor)
//   this.laughning()
// }
// static accessStatic(){
//   console.log(Human.numberOfNose)
// }
// }

// const human = new Human()

// human.hairColor = 'Yellow'

// Human.numberOfNose = 5;

// human.laughning()

// human.laughninghairColor
// console.log(human, Human)
// Human.accessStatic ()

// the constructor method
// class Person{
//   constructor (name, age){
//     this.name = name;
//     this.age = age;
//   }

// }
// const john = new Person('john', 12)
// console.log(john)

// const alisha = new Person('alisha', 10)
// console.log(alisha)

//getters and setters
// class Person{
//   constructor (name, age){
//     this.name = name;
//     this.age = age;
//   }
  
//   getAge () {
//     console.log(this.age)
//   }

//   setAge(age){
//     this.age = age
//   }
// }

// const john = new Person('john', 12)
// console.log(john)

// const alisha = new Person('alisha', 10)
// console.log(alisha)

// john.getAge()
// alisha.getAge()

// john.setAge(15)
// console.log(john)


