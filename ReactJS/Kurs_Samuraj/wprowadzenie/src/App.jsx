class LoginControl extends React.Component{
  constructor(props){
    super(props);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick = () => {
    this.setState({isLoggedIn: true});
  }
  handleLogoutClick = () => {
    this.setState({isLoggedIn: false});
  }

  render (){
    const isLoggedIn = this.state.isLoggedIn;

    return (
    <div>
      <Greeting isLoggedIn={isLoggedIn}/>;
      {isLoggedIn 
        ? <LogoutButton onClick={this.handleLogoutClick} />
        : <LoginButton onClick={this.handleLoginClick} />
      }
    </div>
    );
  }
  
}
function UserGreeting(props){
  return (
    <h1>Witamy ponownie!</h1>
  );
}
function GuestGreeting(props){
  return (
    <h1>Zarejestruj się!</h1>
  );
}
function Greeting(props){
  const isLoggedIn = props.isLoggedIn;
  return (
    isLoggedIn 
    ? <UserGreeting />
    : <GuestGreeting />
  );
}

function LoginButton(props){
  return (
  <button onClick={props.onClick}>
    Zaloguj
  </button>
  );
}
function LogoutButton(props){
  return (
    <button onClick={props.onClick}>
      Wyloguj
    </button>
  );
}

let domContainer = document.querySelector('#root');
ReactDOM.render(<LoginControl />, domContainer);