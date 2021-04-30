import React, { Component } from 'react';

class Carbon extends Component {
    state = { 
        data: []
     }

     retrieveCarbon = (e) => {
         e.preventDefault();
         fetch('https://api.carbonintensity.org.uk/intensity')
        //  .then(res => res.text())          
        //  .then(text => console.log(text))
         .then(response => response.json())
         .then(console.log("hello i have fetched1",))
         .then(carbonData =>
           this.setState({
               data: carbonData
             })
         )
         .then(console.log("hello i have fetched2"))
     }        


    render() { 
        return ( <div>
            <h1> I am the Carbon data </h1>
            <button onClick={this.retrieveCarbon}></button>
            <h5>{this.state.data.data.intensity}</h5>
        </div> );
    }
}
 
export default Carbon;