import React, { Component } from 'react';
import Product from './Product';
import Title from './Title'
// import { storeProducts } from '../data';

export default class ProductList extends Component {
    state = {
        // products: { storeProducts }
    }
    render() {
        // console.log(this.state.storeProducts)
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="Our" title="Products" />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
