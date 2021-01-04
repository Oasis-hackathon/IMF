import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import InfoRow from './InfoRow';
import MailForm from './MailForm';
import {editInfo, fetchUnivList} from '../../actions';

class EditInfo extends React.Component {

    state = {isConfirmed: false};

    onSubmit = formValues => {
        if (this.props.type === "univ") {
            if (this.state.isConfirmed) {
                this.props.editInfo(this.props.id, formValues);
                this.props.saveCallback();
            } else
                alert("대학교 메일 인증을 먼저 해주세요");
        } else {
            this.props.editInfo(this.props.id, formValues);
            this.props.saveCallback();
        }
    }

    renderOptions() {
        return (
            Object.keys(this.props.univs).map(univ => {
                if (this.props)
                    return (
                        <option value={this.props.univs[univ].id}>{this.props.univs[univ].name}</option>
                    )
                else
                    return null;
            })
        )
    }

    renderForm() {
        const fields = Object.keys(this.props.field_name).map(key => {
            if (this.props.editable.includes(key))
                if (key === "univId") {
                    this.props.fetchUnivList();
                    return (
                        <div className="table-row">
                           <div className="table-cell field">
                               <div><label>{this.props.field_name[key]}</label></div>
                            </div>
                           <div className="table-cell data">
                               <div>
                                   <Field className="select-field" name="univId" component="select">
                                       {this.renderOptions()}
                                   </Field>
                               </div>
                            </div>
                        </div>
                    )
                }
                else
                    return (
                        <div className="table-row">
                           <div className="table-cell field">
                               <div><label>{this.props.field_name[key]}</label></div>
                            </div>
                           <div className="table-cell data">
                               <div><Field name={key} component={"input"} autoComplete="off" /></div>
                            </div>
                        </div>
                    )
            else
                return (
                    <InfoRow field={this.props.field_name[key]} value={this.props.content[key]}/>
                )
        }
        )

        return fields
    }

    onAuthConfirmed = () => {
        this.setState({isConfirmed: true});
    }

    renderUnivMailForm() {
        if (this.props.type == "univ") {
            return (
                <MailForm onAuthConfirmed={this.onAuthConfirmed}/>
            )
        }
        return null;
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <div className="info-container">
                        <div className="horizontal-space-between small-title-container">
                            <div>
                                <div className="small-title">{this.props.title}</div>
                                <div>{this.props.small_title}</div>
                            </div>
                            <div className="purple-button edit-button" ><button type="submit">수정하기</button></div>
                        </div>
                        {this.renderForm()}
                    </div>
                </form>
                {this.renderUnivMailForm()}
            </div>
        );
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
    form: 'editForm'
})(EditInfo);

export default connect(mapStateToProps, {editInfo, fetchUnivList})(Wrapped);