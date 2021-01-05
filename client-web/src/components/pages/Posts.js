import React from 'react';
import ProductContainer from "../assets/ProductContainer";
import { connect } from 'react-redux';
import { fetchProducts } from "../../actions";
import DropdownLink from '../DropdownLink';

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
      const keys = Object.keys(products);
      return (
         keys.map(k => {
            return <ProductContainer data={products[k]} />
         })
      )
   }

   render() {
      return (
         <div className="posts">

            <div className="top">
               <div className="horizontal-space-between">
                  <h1>{this.getUnivRange()}학교의 상품들</h1>
                  <div className="select-category">
                     <select>
                        <option selected value="all">전체</option>
                        <option value="제작">제작판매</option>
                        <option value="공구">공동구매</option>
                        <option value="졸작">졸업작품</option>
                        <option value="중고">중고물품</option>
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
      products: state.product
   }
}

export default connect(mapStateToProps, { fetchProducts })(Posts);