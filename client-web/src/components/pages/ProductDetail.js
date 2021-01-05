import React from 'react';
import { connect } from 'react-redux';
import ProductButton from '../ProductButton';
import ProductInfo from '../ProductInfo';
import SimpleSlider from '../assets/SimpleSlider';
import { fetchProduct, fetchProductOptions } from '../../actions';

class ProductDetail extends React.Component {

    componentDidMount() {
        this.props.fetchProduct(this.props.match.params.id);
        this.props.fetchProductOptions(this.props.match.params.id);
    }

    renderOption(options) {
        return (
            Object.keys(options).map(k => {
                return (
                    <option value={options[k].id}>{options[k].value}</option>
                )
            })
        )
    }

    renderOptions() {
        const options = this.props.options;
        console.log(options);
        if (options) {
            return (
                <select className="select-option">
                    {this.renderOption(options)}
                </select>
            )
        } else return null;
    }

    renderContent() {
        let product = this.props.product;
        if (product) {
            product=product[0];
            return (
                <div className="container product-detail">
                    <div>
                        <div className="horizontal detail-product-info" > 
                            <SimpleSlider thumbnail={product.imagePath}/> 
                            <div className="container">
                                <ProductInfo info={product} />
                                {this.renderOptions()}
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
        product: state.product.productInfo,
        options: state.product.options
    })
}

export default connect(mapStateToProps, {fetchProduct, fetchProductOptions})(ProductDetail);