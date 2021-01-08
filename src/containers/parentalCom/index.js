import React from 'react';

const ParentalComponent = OriginalComponent =>{
    class NewComponent extends React.Component{
        render(){
            return <OriginalComponent />
        }
    }
    return NewComponent;
}

export default ParentalComponent;