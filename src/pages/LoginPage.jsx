import React, { useEffect } from "react";
import { Form, Input, Button, Typography } from "antd";
import * as Actions from "../redux/actions"
import "./pages.css";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const LoginPage = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const {login} = useSelector((store) => ({
    login: store.rootReducer.login
  }))

  useEffect(() => {
    if(login) {
      history.push("/")
    }
  }, [login])

  const handleFinish = (data) => {
    console.log(data)
    dispatch(Actions.login_user(data))
  };
  return (
    <div className="login_form">
      <Typography.Title level={4}>Login Form</Typography.Title>
      <Form
        name="login"
        layout="vertical"
        onFinish={handleFinish}
      >
        <Form.Item
          className="login_form_item"
          name="name"
          label="Enter Your Name"
          rules={[
            {
              required: true,
              message: "Please input your name!",
            },
          ]}
        >
          <Input placeholder="Your Name" />
        </Form.Item>
        <Form.Item
          className="login_form_item"
          name="email"
          label="Enter Your email"
          rules={[
            {
              required: true,
              type: "email",
              message: "Please input your email!",
            },
          ]}
        >
          <Input placeholder="Your email" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage;
