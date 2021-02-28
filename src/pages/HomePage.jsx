import { Col, Row, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Header from "../Components/Header";
import ProductFilters from "../Components/ProductFilters";
import "./pages.css"

import ProductsList from "../Components/ProductsList";
import SearchProducts from "../Components/SearchProducts";
import { useHistory } from "react-router-dom";

const HomePage = () => {
    const history = useHistory()

  const {
    login,
    products,
    products_price_range,
    products_quantity_range,
  } = useSelector((store) => ({
    login: store.rootReducer.login,
    products: store.rootReducer.products,
    products_price_range: store.rootReducer.products_price_range,
    products_quantity_range: store.rootReducer.products_quantity_range,
  }));

  useEffect(() => {
    if (!login) {
        history.push("/login")
    }
  }, [login])

  const [filters, setFilters] = useState({
    name: "",
    price: products_price_range,
    quantity: products_quantity_range,
  });

  const multiFilter = (products, filters) => {
    const filterKeys = Object.keys(filters);
    return products.filter((product) => {
      return filterKeys.every((key) => {
        if (Array.isArray(filters[key])) {
          return (
            product[key] >= filters[key][0] && product[key] <= filters[key][1]
          );
        } else {
          return product[key].toLowerCase().includes(filters[key].toLowerCase());
        }
      });
    });
  };

  const handleSearchChange = (value) => {
    setFilters({ ...filters, name: value });
  };
console.log(filters)
  return (
    <div className="homepage">
      <Header />
      <Row>
        <Col span={6}>
        <Row justify="space-around" className="products_filters">
        <SearchProducts
          searchValue={filters.name}
          handleSearchChange={handleSearchChange}
        />
          <ProductFilters
            filters={filters}
            setFilters={setFilters}
          />
      </Row>
        </Col>
        <Col span={18}>
          {products.length ? (
            <ProductsList filteredProducts={multiFilter(products, filters)} />
          ) : (<Typography.Title level={3}>Please Add Some Products</Typography.Title>)}
        </Col>
      </Row>
    </div>
  );
};

export default HomePage;
