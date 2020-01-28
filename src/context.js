import React, { Component } from 'react'

const ProductContext = React.createContext();
// Provider;
// Consumer;
class ProductProvider extends Component {
    render() {
        return (
            <ProductProvider.ProductProvider value="Hello from context">
                {this.props.children}
            </ProductProvider.ProductProvider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };