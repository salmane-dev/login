import logo from './logo.svg';
import axios from 'axios';
import './App.css'; 
import LoginForm from './component/LoginForm.js'; 



class App extends Component {
 
     
 
 
 
 
    login = (username, password) => {
        axios.post('https://jsonplaceholder.typicode.com/todos', {
            username,
            password
          })
          .then(res => {
            // res.data.id = uuid.v4();
            // this.setState({ todos: [...this.state.todos, res.data] });
          });
      };
 
 
 
 
 
    render() {
      return (
        <div className="App">
      <header className="App-header">
         <h3>Login Form </h3>
         <br></br>
            <form action="http://dev.gmpanel.net:8085/api/v1/token/" method="post" >
                <label for="username">Username:</label> 
                <input type="text" id="username" name="username" ></input><br></br>
                <label for="password">Password:</label> 
                <input type="password" id="password" name="password" ></input><br></br><br></br>
                <input type="submit" value="Submit"></input>
            </form>

        <LoginForm login={this.login}/>

      </header>

    </div>
      );
    }
  }
  
  export default App;