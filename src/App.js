import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React sipra</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

//import React, {Component} from 'react';
//import './App.css'
//
//
//class App extends Component{
//  
//    render(){
//         const divstyle={
//            color: 'blue' 
//            };
//        
//        return(
//            <div>
//            <h1 className="myclass"> hi Spra </h1>
//            
//            </div>
//        
//        
//        )
//    }
//}
//
//export default App;


//import React, {Component} from 'react';
//
//
//class TodoApp extends Component{
//    constructor(props){
//        super(props);
//        this.state={items:[], text:''};
//        this.HandleSubmit= this.HandleSubmit.bind(this);
//        this.HandleChange= this.HandleChange.bind(this);
//    }
//    
//    render(){
//        return(
//        <div> 
//            <TodoList todoitems= {this.state.items} />
//            <form onSubmit= {this.HandleSubmit}>
//            <input onChange={this.HandleChange}value={this.state.text} />
//            <button> Add {this.state.items.length +1} </button> 
//            </form>
//        </div>
//        );
//    };
//    
//    HandleChange(e){
//        this.setState({text: e.target.value});
//    }
//    
//    HandleSubmit(e){
//        e.preventDefault();
//        if(!this.state.text.length){
//            return;
//        }
//        const newItem={
//            text:this.state.text,
//            id:Date.now()
//        }
//        this.setState(prevState => ({
//            items: prevState.items.concat(newItem),
//            text:''
//        }));
//    }
//}
//
//export default TodoApp;
//
//class TodoList extends Component{
//    
//    
//    render(){
//        return(
//        <ul>
//            {this.props.todoitems.map(todoitem =>(
//             <li key={todoitem.id}> {todoitem.text} </li>
//            
//            ))}
//        </ul>
//        
//        );
//        
//    }
//}
