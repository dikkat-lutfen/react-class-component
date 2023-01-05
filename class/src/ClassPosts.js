
import React from "react"
import axios from "axios"
import ClassPost from "./ClassPost"



class ClassPosts extends React.Component{

  constructor(props){
    super(props)
    this.state= {
        posts : [],
    }
  }

  componentDidMount(){  
    axios.get("http://jsonplaceholder.typicode.com/posts").then(({data})=>
    this.setState( {posts : data})
    )
  }

  render(){
    return(
        <div>
            {this.state.posts.map((e)=>{
                return(
                 <ClassPost post={e}/>
                )
            })}
        </div>
    )
  }



}

export default ClassPosts;