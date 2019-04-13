import React,{Component} from 'react'

class ToDoList extends Component
{
    constructor()
    {
        super();
    }

    createToDoList = () => 
    {
        const stylingForDoneTask = {
            color:"#cdcdcd",
            fontStyle:"italic",
            textDecoration:"line-through"
        }; 

        let ToDoListDiv = [];
        this.props.TodoListProps.map(j => 
        {
            ToDoListDiv.push( 
              <div key={"to-do-list-"+ j.id} id={"to-do-list-"+ j.id}> 
                    <input type="checkbox" 
                     onChange={ () => this.props.handleChangeProps(j.id) }  //onChange Handler is passed from the parent component.
                     checked = {j.completion}
                    /> 
                    <p 
                      style={ j.completion ? stylingForDoneTask : null}>
                      {j.description}
                    </p>
                    <hr/> 
              </div> 
          );
        })
        return ToDoListDiv
      }


    render()
    {
        return(    
            <div id="to-do-list">
                {this.createToDoList()}
            </div>
        )
    }
}

export default ToDoList;

// onChange={ ()=> console.log("changed",this.props.TodoListProps.id) }