import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';

export default class Details extends Component {
    render() {
        return (
            <div>
                <ProductConsumer>{value => {
                    const {
                        id,
                        company,
                        img,
                        info,
                        price,
                        title,
                        inCart } = value.detailProduct;
                    return (
                        <div className="container py-5">
                            {/* Title */}
                            <div className="row">
                                <div className="col-10 mx-auto text-centered text-slanted text-blue my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            {/* End title */}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2>model : {title}</h2>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb2">
                                        made by : <span className="text-uppercase">{company}</span>
                                    </h4>
                                    <h4 className="text-blue">
                                        <strong>
                                            price : <span>$</span>
                                            {price}
                                        </strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                        some info about the product:
                                    </p>
                                    <p className="text-muted lead">{info}</p>
                                    {/* Buttons */}
                                    <div className="">
                                        <Link to="/">
                                            <ButtonContainer>Back to products</ButtonContainer>
                                        </Link>
                                        <ButtonContainer
                                            cart
                                            disabled={inCart ? true : false}
                                            onClick={() => {
                                                value.addToCart(id);
                                            }}>
                                            {inCart ? 'in Cart' : 'Add to Cart'}
                                        </ButtonContainer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}</ProductConsumer>
            </div>
        )
    }
}
