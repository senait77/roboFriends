import React from 'react';
import Card from './Card';





const CardList = ({robots}) => {
   
     
    return (
        <div>
            { 
            
            robots.map((user, i) => {
                // when we are doing a map(loop) we must give a unique key
                return (<Card 
                    key={i} 
                    id={robots[i].id} 
                    name={robots[i].name} 
                    email={robots[i].email}
                 />
                );
            })
            }
        </div>
    );
}

export default CardList;