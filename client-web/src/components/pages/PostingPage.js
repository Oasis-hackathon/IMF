import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { uploadProduct } from '../../actions';
import Title from '../PostingComponents/Title';
import Category from '../PostingComponents/Category';
import AccessValue from '../PostingComponents/AccessValue';
import TradeType from '../PostingComponents/TradeType';
import Options from '../PostingComponents/Options';
import Stock from '../PostingComponents/Stock';
import Price from '../PostingComponents/Price';

class PostingPage extends React.Component {

   state = {'name': null}

   renderInput = ({ input, type }) => {
      return (
        <div>
          <input
            id="file-button"
            name={input.name}
            type={type}
            accept={"image/*"}
            onChange={event => this.handleChange(event, input)}
            multiple
          />
        </div>
      );
    };

   handleChange = (e, input) => {
      console.log('handle Change');
      e.preventDefault();
      let imageFile = e.target.files[0];
      if (imageFile) {
         const localImageUrl = URL.createObjectURL(imageFile);
         const imageObject = new window.Image();

         imageObject.onload = () => {
            imageFile.width = imageObject.naturalWidth;
            imageFile.height = imageObject.naturalHeight;
            input.onChange(imageFile);
            URL.revokeObjectURL(imageFile);
         };
         imageObject.src = localImageUrl;
         const img_preview = document.querySelector(".add-picture-button");
         img_preview.src = localImageUrl;
      }
      this.setState(e.target.files[0]);
   }


   onFormSubmit = async formValue => {
      let formData =  new FormData();
      formData.append("name", formValue.image.name);
      formData.append("image", formValue.image);
      console.log(formData);
      console.log(formValue);
      this.props.uploadProduct(this.props.id, formData, formValue);
   }

   onImageClick() {
      const button = document.querySelector("#file-button");
      console.log(button);
      const click_event = document.createEvent("MouseEvents");
      click_event.initEvent('click', false, true);
      button.dispatchEvent(click_event);
   }

   render() {
      return (
         <div>
         <form className="posting-page" onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
            <div className="posting-top">
               <div className="posting-top-left">
                  <h1>간판 사진 등록</h1>
                     <img class="add-picture-button link"
                        src={window.location.origin + "/images/pluspadding.png"}
                        alt="추가"
                        onClick={this.onImageClick}
                     />
                  <div className="filebox">
                  <label for="file-button">
                     업로드
                  </label>
                  <Field component="input" type="file" name="image" component={this.renderInput} />
                  </div>
               </div>

               <div className="posting-top-right">
                  <Title />
                  <Category />
                  <AccessValue />
                  <TradeType />
                  <Price />
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

export default connect(mapStateToProps, {uploadProduct})(Wrapped);
