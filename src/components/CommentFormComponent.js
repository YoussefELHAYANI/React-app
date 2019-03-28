import React, {Component} from 'react';
import { Control, LocalForm, Errors } from 'react-redux-form';
import {Button, Modal, ModalHeader, ModalBody, Row,Col,Label} from 'reactstrap';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentFormComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            isModalOpen: false
        }
        this.toggleModal = this.toggleModal.bind(this);
    }
toggleModal(){
    this.setState({
    isModalOpen: !this.state.isModalOpen
      });
    }
handleSubmit(values) {
    this.toggleModal();
    console.log('Current State is: ' + JSON.stringify(values));
    alert('Current State is: ' + JSON.stringify(values));
    // event.preventDefault();
    this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
    }
render(){
    return(
        <div>
            <Button outline onClick={this.toggleModal}><span className="fa fa-edit fa-lg"></span> Submit Comment</Button>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} >
                <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                    <Row className="form-group">
                        <Label htmlFor="Rating" md={3}>Rating</Label>
                        <Col md={12}>
                            <Control.select model=".rating" id="Rating"
                            className="form-control"
                            >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </Control.select>
                        </Col>                        
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="YourName" md={3}>Your Name</Label>
                        <Col md={12}>
                            <Control.text model=".author" id="YourName"
                            className="form-control"
                            placeholder="Your Name"
                            validators={{
                                 minLength: minLength(3), maxLength: maxLength(15)
                            }}
                           />
                            <Errors
                                className="text-danger"
                                model="YourName"
                                show="touched"
                                messages={{
                                    required: 'Required',
                                    minLength: 'Must be greater than 2 characters',
                                    maxLength: 'Must be 15 characters or less'
                                }}
                            />
                        </Col>
                    
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="Comment" md={3}>Comment</Label>
                        <Col md={12}>
                            <Control.textarea model=".comment" id="Comment"
                            className="form-control" rows="7"
                            >
                            </Control.textarea>
                        </Col>
                    
                    </Row>
                    <Row className="form-group">
                    <Col md={{size:10}}>
                        <Button type="submit" color="primary">
                             Submit
                         </Button>            
                    </Col>
                    </Row>
                    </LocalForm>
                </ModalBody>
            </Modal>
        </div>

    );
}
}
export default CommentFormComponent;