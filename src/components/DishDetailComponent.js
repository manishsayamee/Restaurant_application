
import { Component } from 'react';
import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb ,BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody,Label, Button, Row, Col } from 'reactstrap';
import { LocalForm, Errors, Control } from 'react-redux-form';
import {Loading } from './loadingComponent';
import { baseUrl } from '../shared/baseUrl';

    const required = (val) => val && val.length;
    const maxLength = (len) => (val) => !(val) || (val.length <= len);
    const minLength = (len) => (val) => val && (val.length >= len);
    
    function RenderDish({dish}) {
        if (dish != null) {
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle> {dish.name} </CardTitle>
                            <CardText> {dish.description} </CardText>
                        </CardBody>
                    </Card>
                </div>    
            );
        } else {
            return (
                <div></div>
            );
        }
    }

    function RenderComments({comments,addComment, dishId}) {
        if (comments != null) {
            const cmnts = comments.map((commnts) => {
                return (
                    <ul key={commnts.id} className="list-unstyled">
                        <li>
                            <p> {commnts.comment} </p>
                            <p> -- {commnts.author},
                                &nbsp;
                                {new Intl.DateTimeFormat('en-US', {
                                    year: 'numeric',
                                    month: 'short',
                                    day: '2-digit'
                                }).format(new Date(Date.parse(commnts.date)))}
                            </p>
                        </li>
                    </ul>
                );
            });

            return (
                <div className="col-12 col-md-5 m-1">
                    <h4> Comments </h4>
                    {cmnts}
                    <CommentForm dishId={dishId} addComment={addComment}/>
                </div>
            );  
        // if comments is empty     
        } else {
            return (
                <div></div>
            );
        }
    }

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
  
      
      handleSubmit(values){
        this.toggleModal();
        this.props.addComment(this.props.dishId, values.rating,values.author, values.comment)
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
    
const DishDetail = (props) => {
  if (props.isLoading){
    return(
      <div className="conatiner">
        <div className="row">
          <Loading />
        </div>
      </div>
    )
  }
  else if(props.errMess){
    return(
      <div className="conatiner">
        <div className="row">
          <h3>{props.errMess}</h3>
        </div>
      </div>
    )
  }
  
        else if (props.dish != null) {
            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem> <Link to='home'>Home</Link> </BreadcrumbItem>
                            <BreadcrumbItem active>Menu</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>    
                    </div>
                    <div className="row">
                        <RenderDish dish={props.dish} />
                        <RenderComments comments={props.comments} 
                        addComment={props.addComment}
                        dishId={props.dish.id}/>
                    </div>    
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }
export default DishDetail;