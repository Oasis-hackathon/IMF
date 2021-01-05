import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import Title from '../PostingComponents/Title';
import Category from '../PostingComponents/Category';
import AccessValue from '../PostingComponents/AccessValue';
import TradeType from '../PostingComponents/TradeType';
import Options from '../PostingComponents/Options';
import Stock from '../PostingComponents/Stock';

class PostingPage extends React.Component {
   // state = {
   //    value: '상세 설명을 입력하세요.'
   // };

   // handleChange(event) {
   //    this.setState({ value: event.target.value });
   // }

   // handleSubmit(event) {
   //    alert('An essay was submitted: ' + this.state.value);
   //    event.preventDefault();
   // }

   uploadPicture() {
      alert("이미지를 업로드 하세요");
   }

   render() {
      return (
         <div>
         <form className="posting-page" onSubmit={this.handleSubmit}>
            <div className="posting-top">
               <div className="posting-top-left">
                  <h1>간판 사진 등록</h1>

                  <img class="add-picture-button link"
                     src={window.location.origin + "/images/buttons/plus.png"}
                     alt="추가"
                     onClick={() => this.uploadPicture()}
                  />

               </div>

               <div className="posting-top-right">
                  <Title />
                  <Category />
                  <AccessValue />
                  <TradeType />
                  <Stock />
                  <Options />
               </div>

            </div>

            <Field component="textarea" name="description" placeholder="상세 설명을 입력하세요"/>
            <input className="post-submit-button link" type="submit" value="등록하기" />

         </form>
         </div>
      )
   }
}

const mapStateToProps = (state) => {
   return {
       isSignedIn: state.user.isSignedIn,
       id: state.user.id,
       univs: state.univ
   };
}

const Wrapped = reduxForm({
   form: 'productForm'
})(PostingPage);

export default connect(mapStateToProps)(Wrapped);

// export default reduxForm({ form: "productForm" })(PostingPage);