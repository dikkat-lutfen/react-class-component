
import React from "react"
import axios from "axios"




class ClassPost extends React.Component{

  constructor(props){
    super(props)
    

  }



  render(){
    return(
        <div className="card">
            <h2>{this.props.post.title}</h2>
            <p>{this.props.post.body}</p>
        </div>
    )
  }



}

export default ClassPost;