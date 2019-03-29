import React from 'react';
import {Media} from 'reactstrap';
import { baseUrl } from '../components/shared/baseUrl';
import {  Fade, Stagger } from 'react-animation-components';

function RenderLeader(props){
    
    const leaders = props.leaders.leaders.map((leader) => {
        return (
            <Fade in>
                    <div className="row">
                    <Media className="col-2" left href="#">
                        <Media object src= {baseUrl + leader.image} alt={leader.name} />
                    </Media>
                    <Media className="col-9" body>
                        <Media heading>
                        <p>{leader.name}</p>
                        </Media>
                        <p>{leader.designation}</p>
                        <p>{leader.description}</p>
                    </Media>
                    </div>
            </Fade>
            
            
        );
    });
    return (
        <div>
            <Stagger in>
             {leaders}
            </Stagger>
            
        </div>
    );


}
export default RenderLeader;