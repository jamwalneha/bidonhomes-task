import { Row, Typography,Col, Button } from 'antd';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from "../redux/actions"
import { useHistory } from 'react-router-dom';
import AddProducts from './AddProducts';
import "./components.css"
const Header = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false)

    const {user, login} = useSelector((store) => ({
        login: store.rootReducer.login,
        user: store.rootReducer.user
    }))

    const handlelogout = () => {
        dispatch(Actions.logout_user())
        history.push("/login")
      };

      String.prototype.capitalize = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }
    const handleShowModal = () =>{
        setShowModal(!showModal);
    }

    return (
        <div>
            <Row justify="space-between" align="middle" className="homepage_header">
                <Col span={6}><Typography.Title level={3} className="user_name">Welcome , {login && user.name.capitalize()}</Typography.Title></Col>
                <Col span={6} className="header_btn"><Button onClick={handleShowModal}>Add Product</Button><Button type="primary" onClick={handlelogout}>Logout</Button></Col>
            </Row>
            <AddProducts showModal={showModal} handleShowModal={handleShowModal} />
        </div>
    );
};

export default Header;