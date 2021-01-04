import React from 'react';
import { Field, reduxForm } from 'redux-form';
import AuthCodeForm from './AuthCodeForm';
import { connect } from 'react-redux';
import { sendMail } from '../../actions';

class MailForm extends React.Component {
    
    state = {isMailSend: false}

    onSubmit = (e) => {
        // 메일 보내는 action
        e.preventDefault();
        let regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
        let mail = document.querySelector("#mail-field").value;
        if (!mail.includes("ac.kr"))
            alert("ac.kr로 끝나는 학생메일을 입력해주십시오");
        else if (!regExp.test(mail))
            alert("올바른 이메일 형식이 아닙니다");
        else {
            this.setState({isMailSend: true})
            this.props.sendMail(mail);
        }
    }

    renderAuthCodeForm() {
        if (this.state.isMailSend)
            return (
                <AuthCodeForm onAuthConfirmed={this.props.onAuthConfirmed}/>
            )
        else
            return null;
    }

    render() {
        return (
            <div className="info-container">
                <div className="table-row">
                    <div className="table-cell field">
                       <div>대학교 메일 인증</div>
                    </div>
                    <div className="table-cell data">
                        <div>
                            <form>
                                <div className="horizontal">
                                    <Field id="mail-field" className="inner-form-field" name={"formMail"} component={"input"}   autoComplete="off" placeholder="대학교 학생메일 주소를 입력하세요" />
                                    <div className="purple-button edit-button"><button type="button" onClick={e =>this.onSubmit(e)}>메일전송</button></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {this.renderAuthCodeForm()}
            </div>
        )
    }
}

const Wrapped = reduxForm({
    form: 'mailForm'
})(MailForm);

export default connect(null, {sendMail})(Wrapped);