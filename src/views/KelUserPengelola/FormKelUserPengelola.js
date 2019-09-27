import React from 'react';
import { Field, reduxForm} from 'redux-form';
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Form,
    FormGroup,
    Input,
    Label
  } from 'reactstrap';
  import { Link } from 'react-router-dom';


class FormKelUserPengelola extends React.Component {
    renderError({ error, touched}) {
        if (touched && error){
            return(
                    <div className="ui mini error message">
                        <div className="header">{error}</div>
                    </div>
            );
        }
    }

    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
        <div className={className}>
            <Label>{label}</Label>
            <Input {...input} autoComplete="off" />
            {this.renderError(meta)}
        </div>
        );
    }

    onSubmit = (formValues) => {
        // event.preventDefault();
        this.props.onSubmit(formValues);
    }

   render ()
   {
     return (
    //  <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
    //      <Field name="title" component={this.renderInput} label="Enter Title"/>
    //      <Field name="description" component={this.renderInput} label="Enter Description"/>
    //  <button className="ui button primary">Submit</button>
    //  </form>

        
            <Card>
                <CardHeader>
                <i className="fa fa-edit"></i>Create Kelompok User Pengelola
                </CardHeader>
                <CardBody>
                    <Form onSubmit={this.props.handleSubmit(this.onSubmit)} className="form-horizontal">
                    <FormGroup>
                    <Field name="nmklpuserpengelola" component={this.renderInput} label="Nama Kelompok User"/>
                    </FormGroup>
                    <FormGroup>
                    <Field name="inisialklpuserpengelola" component={this.renderInput} label="Inisial Kelompok User"/>
                    </FormGroup>
                    <div className="form-actions">
                        <Button type="submit" color="primary">Submit</Button>
                        <Link to="/keluserpengelola"><Button color="secondary">Cancel</Button></Link>
                    </div>
                    </Form>
                </CardBody>
            </Card>
      
     );
    }
};

const validate = (formValues) => {
    const errors = {};
  
    if(!formValues.nmklpuserpengelola){
        errors.nmklpuserpengelola='Required';
    }
    if(!formValues.inisialklpuserpengelola){
        errors.inisialklpuserpengelola='Required';
    }
    return errors
  
};

export default reduxForm({
    form: 'formKelUserPengelola',
    validate
})(FormKelUserPengelola);

