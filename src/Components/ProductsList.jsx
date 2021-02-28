import { Row, Card} from "antd";
import React from "react";
import "./components.css";

const ProductsList = ({filteredProducts}) => {
  return (
    <div className="products_list_container">
        <Row justify="start">
      {filteredProducts && filteredProducts.map(products =>  (
          <Card title= {products.name} className="products_cards">
            {products.description && <p><strong>Description:</strong> {products.description}</p>}
            <p><strong>Price:</strong> ${products.price}</p>
            <p><strong>Quantity:</strong> {products.quantity}</p>
            {products.image && <p><strong>Image:</strong> {products.image}</p>}
          </Card>
          ))}
        </Row>
      
    </div>
  );
};

export default ProductsList;
