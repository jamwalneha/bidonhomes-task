import React from "react";
import { Form, Input, Button, InputNumber, Modal } from "antd";
import * as Actions from "../redux/actions";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./components.css";

const AddProducts = ({showModal, handleShowModal}) => {
  const dispatch = useDispatch();

  const handleOk = () => {
    handleShowModal()
  };

  const handleCancel = () => {
      handleShowModal()
  };

  const handleFinish = (data) => {
    console.log(data);
    dispatch(Actions.add_product(data));
    handleCancel();
  };
  return (
    <div className="product_form">
      <Modal destroyOnClose title="Add Product To inventory" visible={showModal} onOk={handleOk} onCancel={handleCancel}>
        <Form
          name="add_product"
          layout="vertical"
          onFinish={handleFinish}
        >
          <Form.Item
            className="product_form_item"
            name="name"
            label="Name"
            rules={[
              {
                required: true,
                message: "Please input product name!",
              },
            ]}
          >
            <Input placeholder="name" />
          </Form.Item>
          <Form.Item
            className="product_form_item"
            name="description"
            label="Description"
          >
            <Input.TextArea placeholder="description" />
          </Form.Item>
          <Form.Item
            className="product_form_item"
            name="price"
            label="Price"
            rules={[
              {
                required: true,
                type: "number",
                message: "Please input price of Product !",
              },
            ]}
          >
            <InputNumber min={1} step={0.1} placeholder="price" />
          </Form.Item>
          <Form.Item
            className="product_form_item"
            name="quantity"
            label="Quantity"
            rules={[
              {
                required: true,
                type: "number",
                message: "Please input quantity",
              },
            ]}
          >
            <InputNumber min={0} placeholder="quantity" />
          </Form.Item>
          <Form.Item
            className="product_form_item"
            name="image"
            label="Image Url"
            rules={[
              {
                type: "url",
              },
            ]}
          >
            <Input placeholder="url" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Add Product
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AddProducts;
