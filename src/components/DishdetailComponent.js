import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderComments({comment}) {
        if (comment != null){
            const commentElemnt = comment.map((cmt) => {
                return (
                <div key={cmt.id}>
                <div className="col-12 col-md-12">{cmt.comment}</div>
                <br />
                <div className="col-12 col-md-12">-- {cmt.author}</div>
                <br />
                <div className="col-12 col-md-12">-- {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(cmt.date)))}</div>
                <br />
                </div>
                );
         });
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
function RenderDish({dish}){
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
const  DishDetail = (props) => {
        return(
            <div className="container">
                <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                 </div>    
                <div  className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                </div>
                <div  className="col-12 col-md-5 m-1">
                    <RenderComments comment={props.comments} />
                </div>
            </div>
            </div>
            

        );
    }
export default DishDetail;