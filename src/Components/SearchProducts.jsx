import React from 'react';
import { Row, Col, Input, Typography} from "antd";
const { Search } = Input;

const SearchProducts = ({searchValue, handleSearchChange}) => {
    return (
        <div>
        <Row>
        <Col>
        <Typography.Title level={5} className="product_search_heading">Search by Product Name</Typography.Title>
          <Search placeholder="product name" value={searchValue} onChange={(e) => handleSearchChange(e.target.value)} enterButton />
        </Col>
      </Row>
        </div>
    );
};

export default SearchProducts;