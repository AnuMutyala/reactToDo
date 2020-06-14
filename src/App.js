import React,{Component} from 'react';
import './App.css';
import TodoList from './TodoList';
import TodoItems from './TodoItems';
class App extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
      currentItem: {text:'', key:'', done: false},
    }
  }
  handleInput = e => {
    const itemText = e.target.value
    const currentItem = { text: itemText, key: Date.now(), done:false }
    this.setState({
      currentItem,
    })
  }
  inputElement =React.createRef();
  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })
    this.setState({
      items: filteredItems,
    })
  }
  crossItem= key => {
    let items = this.state.items
    const filteredItems = items.map(item => {
      return (item.key) === key ? {...item, done: !item.done} : item
    })
    this.setState({
      items: filteredItems,
    })
  }

  addItem = e => {
    e.preventDefault()
    const newItem = this.state.currentItem
    if (newItem.text !== '') {
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: { text: '', key: '',done: false },
      })
    }
  }
  render() {
    return (
      <div className="App">
        <TodoList
          addItem={this.addItem}
          // inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
        />
        <TodoItems entries={this.state.items} crossItem= {this.crossItem} deleteItem={this.deleteItem} />
      </div>
    )
  }
}
export default App
