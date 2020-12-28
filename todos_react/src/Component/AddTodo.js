import React ,{Component } from "react";
class AddTodo extends Component {
  state={
    title:''


  }

  onChange=(e)=>this.setState({[e.target.name] : e.target.value} );
 
 
  onSubmit=(e)=>{

    e.preventDefault();
    this.props.addTodo1(this.state.title);
     this.setState({title:''});
  }

  
   render() {

        return(

            <form   onSubmit={this.onSubmit} style={{display:"flex" }}>     
                
           <input type ="text"
            name="title"
            placeholder="Enter TODO Item ....."    style={{flex:"10" ,padding:"5px"}}
            value={this.state.title}
            onChange={this.onChange}
            
            >
               
            </input>

            <input type="submit" value="submit"  className="btn"  style={{flex:"1"}}></input>
            </form>
  

        );

    }
}

export default AddTodo;

