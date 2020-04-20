import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody,Label, FormGroup, Button, Row, Col } from 'reactstrap';
import { LocalForm, Errors, Control } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component {
  constructor(props){
    super(props);
    this.state={
      isModalOpen:false
    }

    this.toggleModal=this.toggleModal.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
 
  }


  toggleModal(){
    this.setState({
      isModalOpen:!this.state.isModalOpen
    })
  }


  // handleSubmit(values){
  //   this.toggleModal();
  //   alert("Rating:" + this.contactType.values+ " Username: "+ this.username.values + "message: "+ this.message.values);
  //   values.preventDefault();
  // }

handleSubmit(values){
  console.log('Current State is: ' + JSON.stringify(values));
  alert("current State is :" + JSON.stringify(values));
}


  render() { 
    return ( 
      <div>
        <Button outline onClick={this.toggleModal}>
        <span className="fa fa-pencil fa-lg"></span> Submit Comment
        </Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader> Submit Comment</ModalHeader>
          <ModalBody>
          <LocalForm onSubmit={(values)=> this.handleSubmit(values)}>
              <Row className="form-group">
                <Col>
                <Label htmlFor='rating'>Rating</Label>
                <Control.select model=".rating" id="rating"
                className="form-control">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  </Control.select>
                  </Col>
              </Row>

              <Row className="form-group">
                <Col>
                  <Label htmlfor='username'>Your Name</Label>
                  <Control.text model=".username" id='username' name="username" 
                  className="form-control"
                    validators={{
                      required, minLength: minLength(3), maxLength: maxLength(15)
                  }}
                  />

                  <Errors
                    className="text-danger"
                    model='.username'
                    show="touched"
                    messages={{
                      required:"Required",
                      maxLength:'Must be 15 character or less',
                      minLength:'Must be greater than 2 character'
                    }}/>
                </Col>
              </Row>
 
          
              <Row className="form-group">
                <Col>
                    <Label htmlFor="message">Comment</Label>
                    <Control.textarea model=".message" id="message" name="message"
                    rows="6"
                    className="form-control"/>
                </Col>
              </Row>
 
              <Row className='form-group'>
                <Col>
                  <Button type="submit" color="primary">Submit</Button>
                </Col>
              </Row>
          </LocalForm>
          </ModalBody>
        </Modal>
      </div>

     );
  }
}
 
export default CommentForm;