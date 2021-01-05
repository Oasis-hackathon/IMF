import React from 'react';
import {connect} from 'react-redux';
import ProductSlider from '../assets/ProductSlider'
import MainSlider from '../assets/MainSlider'
import { fetchAllProducts }from '../../actions';

class Main extends React.Component {
    componentDidMount() {
        this.props.fetchAllProducts("us");
        this.props.fetchAllProducts("every");
    }

    getMyUniv() {
        if (this.props.myuniv) {
            console.log("myuniv:", this.props.myuniv);
            return this.props.myuniv;
        }
        else return null;
    }

    getOther() {
        if (this.props.other) {
            console.log("other:", this.props.other);
            return this.props.other;
        }
        else return null;
    }

    renderMyUniv() {
        if (this.props.isSignedIn)
            return (
                <React.Fragment>
                    <div className="page-title"> 우리 대학교에서 인기 짱! </div>
                    <ProductSlider products={this.getMyUniv()}/>
                </React.Fragment>
            )
        else return null;
    }

    render() {
        return (
            <div>
                <MainSlider />
                {this.renderMyUniv()}
                <div className="page-title"> 다른 학교 에서 인기 짱! </div>
                <ProductSlider products={this.getOther()}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isSignedIn: state.user.isSignedIn,
        myuniv: state.myuniv,
        other: state.other
    }
 }
 
 export default connect(mapStateToProps, { fetchAllProducts })(Main);