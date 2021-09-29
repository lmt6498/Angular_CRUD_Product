export class Product {
  id: number;
  name: string;
  img: string;
  price: number;
  stock: number;
  status: boolean;


  constructor(id: number, name: string, img: string, price: number, stock: number, status: boolean) {
    this.id = id;
    this.name = name;
    this.img = img;
    this.price = price;
    this.stock = stock;
    this.status = status;
  }
}
