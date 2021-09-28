export class Product {
  name: string;
  img: string;
  price: number;
  stock: number;
  status: boolean;


  constructor(name: string, img: string, price: number, stock: number, status: boolean) {
    this.name = name;
    this.img = img;
    this.price = price;
    this.stock = stock;
    this.status = status;
  }
}
