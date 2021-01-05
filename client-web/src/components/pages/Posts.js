import React from 'react';
import ProductContainer from "../assets/ProductContainer";
import { connect } from 'react-redux';
import { fetchProducts } from "../../actions";
import history from '../../history';

class Posts extends React.Component {
   getUnivRange() {
      if (this.props.match.path.includes("my_univ"))
         return "우리";
      else
         return "다른";
   }

   componentDidMount = () => {
      let range;
      if (this.props.match.path.includes("my_univ"))
         range = "us";
      else
         range = "every";
      this.props.fetchProducts(range);
   }

   renderPosts = (products) => {
      if (products && products[0]) {
         const keys = Object.keys(products);
         return (
            keys.reverse().map(k => {
               return <ProductContainer data={products[k]} />
            })
         )
      } else return null;
   }

   onSelectChange = () => {
      const select = document.querySelector("#selectBox").value;
      if (this.props.match.path.includes("my_univ"))
         history.push(`/show_products/my_univ/${select}`)
      else
         history.push(`/show_products/other/${select}`)
   }

   render() {
      return (
         <div className="posts">

            <div className="top">
               <div className="horizontal-space-between">
                  <h1>{this.getUnivRange()}학교의 상품들</h1>
                  <div>
                     <select id="selectBox" className="select-category" onChange={this.onSelectChange}>
                        <option selected value="all">전체</option>
                        <option value="made">제작판매</option>
                        <option value="gongu">공동구매</option>
                        <option value="graduation">졸업작품</option>
                        <option value="jungo">중고물품</option>
                     </select>
                  </div>
               </div>
            </div>

            <div className="post-container">
               {this.renderPosts(this.props.products)}
            </div>

         </div>

      );
   }
}

const mapStateToProps = state => {
   return {
      products: state.product.productInfo
   }
}

export default connect(mapStateToProps, { fetchProducts })(Posts);