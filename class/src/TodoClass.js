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

}

componentDidMount(){  // instead of use effect you should use componentDidMount
  axios.get("http://localhost:3636/todo").then(({data})=>{  // our aim is to get data when the page open or start
    console.log(data);
    this.setState({todos:data})  //to way to declare state in class component is to declare it inside constructer after super
    //this.setState({name:"yasemin"})
  })
}


  render(){     // class component use render method
    return(     // still return must be used
      <div>
          <input/>
          <button>press</button>
        {   //to show todos you can not show directly you should use this.state
           this.state.todos.map((e)=>{
            return(
                <li key={e.idg}>{e.todo}</li>
            )
           })
        }
      </div>
    )
  }
}

export default TodosClass; // to exportation is same in both functional and class component