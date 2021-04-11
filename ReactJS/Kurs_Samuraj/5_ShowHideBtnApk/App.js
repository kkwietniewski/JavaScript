class Message extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      messageIsActive: false
    }
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(){
    this.setState((prevState) => ({
      messageIsActive: !prevState.messageIsActive
    })
    );
  }

  render(){
    const text = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus dolor odio soluta ut necessitatibus rem! Velit unde quisquam maiores et nam aliquam doloremque magnam provident rerum doloribus, placeat dignissimos quibusdam.'

    return(
      <>
      <button onClick={this.handleButtonClick}>{(this.state.messageIsActive) ? "Ukryj" : "Pokaż"}</button>
      {(this.state.messageIsActive) && <h1>{text}</h1>}
      </>
    );
  }


}

ReactDOM.render(<Message />, document.getElementById("root"));