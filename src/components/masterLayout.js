import React, { Component } from 'react';
class MasterComponent  extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className="container">
        <div className="row">
          <div className="col-sm">
            <label for="exampleFormControlInput1" className="form-label">Email address</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            <label for="formFile" className="form-label">Default file input example</label>
            <input className="form-control" type="file" id="formFile"></input>
            <label for="exampleColorInput" class="form-label">Color picker</label>
<input type="color" class="form-control form-control-color" id="exampleColorInput" value="#563d7c" title="Choose your color"></input>
          </div>
          <div className="col-sm">
          One of three columns
<input class="form-control form-control-lg" type="text" placeholder=".form-control-lg" aria-label=".form-control-lg example"></input>
<input class="form-control" type="text" placeholder="Default input" aria-label="default input example"></input>
<input class="form-control form-control-sm" type="text" placeholder=".form-control-sm" aria-label=".form-control-sm example"></input>
<input class="form-control" type="text" placeholder="Disabled input" aria-label="Disabled input example" disabled></input>
<input class="form-control" type="text" placeholder="Disabled readonly input" aria-label="Disabled input example" disabled readonly></input>
<label for="exampleDataList" class="form-label">Datalist example</label>
<input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..."></input>
<datalist id="datalistOptions">
  <option value="San Francisco"/>
  <option value="New York"/>
  <option value="Seattle"/>
  <option value="Los Angeles"/>
  <option value="Chicago"/>
</datalist>
          </div>
          <div className="col-sm">
            One of three columns
          </div>
        </div>
      </div>);
    }
}
 
export default MasterComponent;