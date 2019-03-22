import React from 'react';
import {Media} from 'reactstrap';

function RenderLeader(props){
    const leaders = props.leaders.map((leader) => {
        return (
            <div className="row">
            <Media className="col-2" left href="#">
                <Media object src= {leader.image} alt={leader.name} />
            </Media>
            <Media className="col-9" body>
                <Media heading>
                <p>{leader.name}</p>
                </Media>
                <p>{leader.designation}</p>
                <p>{leader.description}</p>
            </Media>
            </div>
            
        );
    });
    return (
        <div>
            {leaders}
        </div>
    );


}
export default RenderLeader;