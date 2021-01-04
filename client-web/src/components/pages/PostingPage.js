import React from 'react';

class PostingPage extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         value: '상세 설명을 입력하세요.'
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleChange(event) {
      this.setState({ value: event.target.value });
   }

   handleSubmit(event) {
      alert('An essay was submitted: ' + this.state.value);
      event.preventDefault();
   }

   uploadPicture() {
      alert("이미지를 업로드 하세요");
   }

   render() {
      return (
         <form className="posting-page" onSubmit={this.handleSubmit}>

            <div className="posting-top">

               <div className="posting-top-left">

                  <h1>간판 사진 등록</h1>

                  <img class="add-picture-button link"
                     src={window.location.origin + "/images/buttons/plus.png"}
                     alt="추가"
                     onClick={() => this.uploadPicture()} />

               </div>

               <div className="posting-top-right">
                  <div className="title-input-field">
                     <input type="text" placeholder="제목" />
                  </div>
               </div>

            </div>

            <textarea value={this.state.value} onChange={this.handleChange} />
            <input className="post-submit-button link" type="submit" value="등록하기" />

         </form>
      )
   }
}

export default PostingPage;