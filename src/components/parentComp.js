import React, { Component } from 'react';
import ChildComp from './childComp';
class ParentComp extends Component {
    constructor(props) {
        super(props);
        this.UpdateName = this.UpdateName.bind(this);
        this.state = { 
            name:"Rajendra Taradale"
         }
    }

    UpdateName(x){
        alert(x);
        this.setState({ name : 'asas' });
    }


    render() { 
        return ( 
            <div> Parent Component
            <ChildComp name={this.state.name} updateName={this.UpdateName} ></ChildComp>
            </div>
         );
    }
}
 
export default ParentComp;