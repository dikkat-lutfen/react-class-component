import React from "react" // to use class component we must import react
import axios from "axios"

/* function  Todos (props){
    return (
        <h1>hello worls</h1>
    )
} */

class TodosClass extends React.Component{  // this is the way to use class component
   
constructor(props){  // in class component to use props we must use constructor and super
    super(props)
    this.state = {  //state is key word you can not change and is used with this 
      todos:[],
     // name :"hakan",
      newtodo:" ",
    }
    
    //old old way to bind function
    this.add = this.add.bind(this)

}

componentDidMount(){  // instead of use effect you should use componentDidMount // our aim is to get data when the page open or start
  this.getData();
}

getData(){
    axios.get("http://localhost:3636/todo").then(({data})=>{  
        console.log(data);
        this.setState({todos:data})  //to way to declare state in class component is to declare it inside constructer after super
        //this.setState({name:"yasemin"})
      })
}

add (){  // when we are using function we dont put function at the begining just name of function
   axios.post("http://localhost:3636/todo/create", {todo: this.state.newtodo})
   .then(({data})=>{
    this.getData()
   })
    
}

del(id){
    axios.delete("http://localhost:3636/todo" +id  ).then(({data})=>this.getData)
}

  render(){     // class component use render method
    return(     // still return must be used
      <div>
          <input onChange={(e)=>{this.setState({newtodo: e.target.value})}}/>
          <button onClick={()=>{this.add()}}>press</button>    {/* when we are invoke the function we put this at the begining of function name */}
          {
          //old way to bind function                 
          // <button onClick={this.add}>press</button>   //here , there is no callback function     
          }
        {   //to show todos you can not show directly you should use this.state
           this.state.todos.map((e)=>{
            return(
                <div>
                    <li key={e._id}>{e.todo}</li>
                    <button onClick={()=>this.delete(e._id)}>delete</button>
                </div>
            )
           })
        }
      </div>
    )
  }
}

export default TodosClass; // to exportation is same in both functional and class component