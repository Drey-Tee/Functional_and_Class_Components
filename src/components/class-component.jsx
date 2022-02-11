import React from "react";
 
class ClassComponent extends React.Component{
   state = {
       count : 0
   }
    
   increase(){
       this.setState({count : this.state.count +1});
   }
 
    render(){
        return (
            <div style={{margin:'50px'}}>
               <h1>Welcome to Drey's Counter </h1>
               <h3>Counter App using Class Component : </h3>
               <h2> {this.state.count}</h2> 
               <button onClick={()=>this.increase()}> Add</button>
 
            </div>
        )
    }
}
 
export default ClassComponent;