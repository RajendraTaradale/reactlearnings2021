import React, { Component } from 'react';

class Counter extends Component {

    constructor(){
        super();
       this.handleClick = this.handleClick.bind(this);
    } 
    name = "";
    state = {
        counter: 0,
        imageUrl: "https://picsum.photos/200",
        names: ['Rajendra', 'Taradale', 'Sumit', 'Jaydeep', 'Kiran']

    }
    

    displayName() {
        return "Welcome Here";
    }

    cstyle = {
        fontSize: 50,
        fontWeight: "bold"
    }

    render() {

        return <div>In JSX File
            Counter {this.state.counter} <br></br>
            {this.displayName()} <br></br>
            <button className="btn btn-primary" onClick={() => { this.setState({ counter: this.state.counter + 1 }) }}>Add +</button><br></br>
            <button className="btn btn-primary" onClick={() => { this.setState({ counter: this.state.counter - 1 }) }}>Minus -</button><br></br>
            <input name="name"  onBlur={(e)=>{this.handleChange(e)}}  placeholder="Name" type="text" className="form-control"></input>
            <button className="btn btn-primary" onClick={(e)=>{this.handleChange(e)}} >Add Names </button><br></br>
            <img src={this.state.imageUrl} alt="rajnedra"></img>

            <div style={this.cstyle}>
                Rajendra Taradale
            </div>

            <div style={{ fontSize: 10 }}>
                Rajendra Taradale
            </div>

            <span className={this.getBadgeClasses()} >Status of Counter</span>
            {this.state.names.length === 0 && 'Please add names'} <br></br>
            {this.renderTags()} <br></br>
         
           <button className="btn btn-primary" onClick={()=> this.handleClick()}>This Ref</button>
        </div>;
    }

    handleChange(e){
        this.setState({names : [...this.state.names, e.target.value]});
    }
    handleClick(){
        console.log(this);
    }

    renderTags(){
        if (this.state.names.length === 0) return <p> there are no names</p> ;
         return <ul>{this.state.names.map(data => <li key={data}>{data}</li>)}</ul>   
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.counter > 2) ? "warning" : "primary";
        return classes;
    }
}

export default Counter;