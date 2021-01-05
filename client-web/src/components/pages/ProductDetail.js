import React from 'react';
import { connect } from 'react-redux';
import ProductButton from '../ProductButton';
import ProductInfo from '../ProductInfo';
import SimpleSlider from '../assets/SimpleSlider';
import { fetchProduct } from '../../actions';

class ProductDetail extends React.Component {

    componentDidMount() {
        this.props.fetchProduct(this.props.match.params.id);
    }

    renderContent() {
        if (this.props.product) {
            const product = this.props.product[0]
            console.log(product)
            return (
                <div className="container product-detail">
                    <div>
                        <div className="horizontal detail-product-info" > 
                            <SimpleSlider thumbnail={product.imagePath}/> 
                            <div className="container">
                                <ProductInfo info={product} />
                                <ProductButton count={23}/>
                            </div>
                        </div>
                        <div className="vertical-padding">
                            <h1>상세 설명</h1>
                            <div className="long-description vertical-padding">
                                {product.description}
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else
            return null;
    }

    render() {
        return this.renderContent();
    }
}

const mapStateToProps = (state) => {
    return ({
        product: state.product
    })
}

export default connect(mapStateToProps, {fetchProduct})(ProductDetail);