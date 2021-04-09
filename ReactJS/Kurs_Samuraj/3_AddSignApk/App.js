class App extends React.Component{
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     text: ""
  //   }
  //   this.handleAddSign.bind(this);
  // }

  // nowy zapis umożliwiający utworzenie stanu poza konstruktorem
  state = {
    text: ""
  }

  handleAddSign = () => {
    const number = Math.floor(Math.random() * 10);
    this.setState( () => ({
      text: this.state.text + number
    })
    );
  }

  render(){
    return(
      <>
        <button onClick={this.handleAddSign}>{this.props.btnTitle}</button>
        <PanelResult message={this.state.text}>bbb</PanelResult>
      </>
    );
  }
}

const PanelResult = (props) => {
    return(
      <h1>{props.message}, {props.children}</h1>
    )
}

ReactDOM.render(<App btnTitle="Dodaj cyfrę"/>, document.getElementById("root"));