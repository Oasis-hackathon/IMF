import React from 'react';
import ProductContainer from "../assets/ProductContainer";
import { connect } from 'react-redux';
import { fetchProducts } from "../../actions";
import history from '../../history';

class FilteredPosts extends React.Component {
   getUnivRange() {
      let title = "";
      if (this.props.match.path.includes("my_univ"))
         title += "우리학교의 ";
      else
         title += "다른학교의 ";
      if (!this.props.products)
         return title;
      if (this.props.match.path.includes("graduation"))
         return title += "졸업작품들"
      return title += "상품들";
   }

   getCategory = () => {
      const list = ["made", "gongu", "graduation", "jungo"];
      const path = this.props.match.path;
      let category
      list.forEach(e => {
         if (path.includes(e))
            category = e;
      })
      return category;
   }

   componentDidMount = () => {
      let range;
      if (this.props.match.path.includes("my_univ"))
         range = "us";
      else
         range = "every";
      this.props.fetchProducts(range, this.getCategory());
   }

   renderPosts = (products) => {
      const keys = Object.keys(products);
      return (
         keys.map(k => {
            return <ProductContainer data={products[k]} />
         })
      )
   }

   onSelectChange = () => {
      let select = document.querySelector("#selectBox").value;
      let url = "/show_products/";
      if (this.props.match.path.includes("my_univ"))
         url += "my_univ/";
      else
         url += "other/";
      
      if (select !== "all")
         url += select;
      history.push(url);
   }

   renderSelect() {
      if (!this.props.match.path.includes("graduation")) {
         return (
            <div>
               <select id="selectBox" className="select-category" onChange={this.onSelectChange}>
                  <option selected></option>
                  <option value="all">전체</option>
                  <option value="made">제작판매</option>
                  <option value="gongu">공동구매</option>
                  <option value="graduation">졸업작품</option>
                  <option value="jungo">중고물품</option>
               </select>
            </div>
         )
      }
      else return null;
   }

   render() {
      return (
         <div className="posts">

            <div className="top">
               <div className="horizontal-space-between">
                  <h1>{this.getUnivRange()}</h1>
                  {this.renderSelect()}
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

export default connect(mapStateToProps, { fetchProducts })(FilteredPosts);