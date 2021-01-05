import React from 'react';

const App = () => {
   return (
      <div>
         <div>

         </div>

         <div className="table-container"> {/* 여기는 뭐냐면 그거냐 */}
            <BasicInfo
               userName={this.props.userInfo.userName}
               nickname={this.props.userInfo.nickname}
               reliability={this.props.userInfo.reliability}
            />
         </div>
      </div>
   );
}