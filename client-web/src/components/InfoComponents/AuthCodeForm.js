import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

class AuthCodeForm extends React.Component {

    state = {isAuthConfirmed: false};

    onSubmit = formValues => {
        console.log(this.props.authCode);
        if (this.props.authCode !== formValues.authCode)
            alert("인증코드가 다릅니다")
        else {
            this.props.onAuthConfirmed();
            this.setState({isAuthConfirmed: true})
        }
    }

    renderField() {
        if (this.state.isAuthConfirmed) {
            return <div>인증되었습니다</div>
        }  else {
            return (
                <div>
                    <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                        <div className="horizontal">
                            <Field className="inner-form-field" name={"authCode"} component={"input"}autoComplete="off" placeholder="입력한 메일로 전송된 인증번호를 입력하세요" />
                            <div className="purple-button edit-button"><button type="submit">확인</button></div>
                        </div>
                    </form>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="table-row">
                <div className="table-cell field">
                   <div>인증 번호</div>
                </div>
                <div className="table-cell data">
                    {this.renderField()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authCode: state.mail.authCode
    };
}

const Wrapped = reduxForm({
    form: 'authCodeForm'
})(AuthCodeForm);

export default connect(mapStateToProps)(Wrapped);