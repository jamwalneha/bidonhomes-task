import React, { useEffect } from "react";
import { Row, Col, Slider, InputNumber, Typography } from "antd";
import { useSelector } from "react-redux";
import "./components.css";

const ProductFilters = ({ filters, setFilters }) => {
  const { products_price_range, products_quantity_range } = useSelector(
    (store) => ({
      products_price_range: store.rootReducer.products_price_range,
      products_quantity_range: store.rootReducer.products_quantity_range,
    })
  );

  useEffect(() => {
    setFilters({
      ...filters,
      price: products_price_range,
      quantity: products_quantity_range,
    });
  }, [products_price_range, products_quantity_range]);

  const handleChange = (value, type, filterType) => {
    if (isNaN(value)) {
      return;
    }
    const tempArr = [...filters[filterType]];
    tempArr[type] = value;
    setFilters({ ...filters, [filterType]: tempArr });
  };

  return (
    <>
      <div className="price_filter">
        <Typography.Title level={5}>Filter by price range</Typography.Title>
        <Row justify="start" className="product_slider_row">
          <Col span={12}>
            <Slider
              min={products_price_range[0]}
              max={products_price_range[1]}
              onChange={(value) => handleChange(value, 0, "price")}
              value={
                typeof filters.price[0] === "number" ? filters.price[0] : 0
              }
              step={0.01}
            />
          </Col>
          <Col span={4}>
            <InputNumber
              min={products_price_range[0]}
              max={products_price_range[1]}
              style={{ margin: "0 16px" }}
              step={0.01}
              value={filters.price[0]}
              onChange={(value) => handleChange(value, 0, "price")}
            />
          </Col>
        </Row>
        <Row justify="start" className="product_slider_row">
          <Col span={12}>
            <Slider
              min={products_price_range[0]}
              max={products_price_range[1]}
              onChange={(value) => handleChange(value, 1, "price")}
              value={
                typeof filters.price[1] === "number" ? filters.price[1] : 0
              }
              step={0.01}
            />
          </Col>
          <Col span={4}>
            <InputNumber
              min={products_price_range[0]}
              max={products_price_range[1]}
              style={{ margin: "0 16px" }}
              step={0.01}
              value={filters.price[1]}
              onChange={(value) => handleChange(value, 1, "price")}
            />
          </Col>
        </Row>
      </div>
      <div className="quantity_filter">
        <Typography.Title level={5}>Filter by quantity range</Typography.Title>
        <Row justify="start" className="product_slider_row">
          <Col span={12}>
            <Slider
              min={products_quantity_range[0]}
              max={products_quantity_range[1]}
              onChange={(value) => handleChange(value, 0, "quantity")}
              value={
                typeof filters.quantity[0] === "number"
                  ? filters.quantity[0]
                  : 0
              }
            />
          </Col>
          <Col span={4}>
            <InputNumber
              min={products_quantity_range[0]}
              max={products_quantity_range[1]}
              style={{ margin: "0 16px" }}
              value={filters.quantity[0]}
              onChange={(value) => handleChange(value, 0, "quantity")}
            />
          </Col>
        </Row>
        <Row justify="start" className="product_slider_row">
          <Col span={12}>
            <Slider
              min={products_quantity_range[0]}
              max={products_quantity_range[1]}
              onChange={(value) => handleChange(value, 1, "quantity")}
              value={
                typeof filters.quantity[1] === "number"
                  ? filters.quantity[1]
                  : 0
              }
            />
          </Col>
          <Col span={4}>
            <InputNumber
              min={products_quantity_range[0]}
              max={products_quantity_range[1]}
              style={{ margin: "0 16px" }}
              value={filters.quantity[1]}
              onChange={(value) => handleChange(value, 1, "quantity")}
            />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ProductFilters;
