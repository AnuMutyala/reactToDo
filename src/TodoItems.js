import React, { Component } from 'react'
class TodoItems extends Component {

  createTasks= (item)=> {
    let style = {
      textDecoration: item.done ? "line-through" : "none",
    };
    return (
        <div style = {{display: 'flex'}}>
          {!item.done ? 
            <input type="checkbox" 
            // defaultChecked={this.state.chkbox} onChange={this.handleChangeChk} 
            />
          : 
            <div></div>}
          <ul style={style} key={item.key} 
          onClick={() => 
            {
            this.props.crossItem(item.key)}
            }>
            {item.text}
            
          </ul>
          {/* add  a cross bar to delete the item from the list */}
          <button type="submit" onClick={()=>
          {
            this.props.deleteItem(item.key)
          }
          }> Remove </button>
        </div>
      )
    }
  render() {
    
    const todoEntries = this.props.entries;
    const listItems = todoEntries.map(this.createTasks);
    return <ul className="theList">{listItems}</ul>
  }
}

export default TodoItems