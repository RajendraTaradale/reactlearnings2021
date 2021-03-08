import React, { Component } from 'react';

class LifeCycleSequence extends Component {
    constructor(props) {
        alert('constructor');
        super(props);
        this.state = {  }
    }

    shouldComponentUpdate(nextProps, nextState){
        alert('shouldComponentUpdate');
    }

    componentWillUnmount(){
        alert('componentWillUnmount');
    }

    componentDidMount(){
        alert('componentDidMount');
    }
    render() { 
        alert('render');
        return ( 
            <div> Hello </div>
         );
    }
}
 
export default LifeCycleSequence;