import React, { Component } from 'react';
import {Card,CardImg,CardBody,CardTitle,CardText} from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    renderComments(dish){
        if (dish != null){
            const commentElemnt = dish.comments.map((cmt) => {
                return (
                <div key={cmt.id}>
                <div className="col-12 col-md-12">{cmt.comment}</div>
                <br />
                <div className="col-12 col-md-12">-- {cmt.author}</div>
                <br />
                </div>
                );
         });
         console.warn('commentElemnt',commentElemnt);
         return(
               <div>
                <h2>comments</h2>
                  {commentElemnt}
               </div>
          );
        }
        
        else
            return(
                <div></div>
            );
    }
    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }
    render(){
        return(
            <div className="row">
                <div  className="col-12 col-md-6 m-1">
                    {this.renderDish(this.props.dish)}
                </div>
                <div  className="col-12 col-md-5 m-1">
                    {this.renderComments(this.props.dish)}
                </div>
            </div>

        );
    }





}
export default DishDetail;