import { createServer } from "miragejs";
import {productType} from '../types/type'
const cartItem: productType[] = [];

const Server = () => {
  createServer({

    routes() {
      this.namespace = "/api";
      this.get("/cartitem", () => {
        return cartItem;
      });

      this.post("/cartitem", (schema, req): any => {
        let newItem:productType = JSON.parse(req.requestBody);
        cartItem.push(newItem);
        console.log(cartItem);
      });
    },
  });
};

export default Server;
