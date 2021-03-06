import React, { Component } from 'react';

class ChildComp  extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render(props) { 
        return ( 
            
            <div>Child Component: Data from Parent {this.props.name}
            <button onClick={(x)=>this.props.updateName(x)}>Call Parent</button>  
            </div>

         );
    }
}


export default ChildComp;