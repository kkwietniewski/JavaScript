class TicketShop extends React.Component{
  state = {
    isChecked: false,
    isFormSubmitted: false
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    if(!this.state.isFormSubmitted){

      this.setState( prevState => ({
        isFormSubmitted: !prevState.isFormSubmitted
      })
      );
    }
  }

  handleInputCheck = () => {
    this.setState( prevState => ({
        isChecked: !prevState.isChecked,
        isFormSubmitted: false
      })
    );
  }

  render(){
    const {isChecked, isFormSubmitted} = this.state;
    return(
        <OrderForm 
          submit={this.handleFormSubmit} 
          change={this.handleInputCheck} 
          isChecked={isChecked} 
          isFormSubmitted={isFormSubmitted} 
        />
    );
  }
}

const OrderForm = (props) => (
  <form onSubmit={props.submit}>
    <h1>Kup bilet na horror roku!</h1>
    <input 
      onChange={props.change} 
      type="checkbox" 
      id="ageCheck" 
      checked={props.isChecked} 
    />
    <label htmlFor="ageCheck">Mam co najmniej 16 lat</label>
    <br />
    <button type="submit">Kup bilet</button>
    <DisplayMessage 
      isChecked={props.isChecked} 
      isFormSubmitted={props.isFormSubmitted}
    />
  </form>
);

const DisplayMessage = (props) => {
  const positiveMessage = "Możesz obejrzeć film. Zapraszamy!";
  const negativeMessage = "Nie możesz obejrzeć filmu.";
  return props.isFormSubmitted ? (props.isChecked ? <ValidationMessage 
    message={positiveMessage} 
    title="Pozytywna odpowiedź" 
  /> : <ValidationMessage 
          message={negativeMessage} 
          title="Negatywna odpowiedź"
        />) : null
}

const ValidationMessage = (props) => {
  const {message, title} = props;
  return(
    <>
    <h2>{title}</h2>
    <p>{message}</p>
    </>
  );
}

ReactDOM.render(<TicketShop />, document.getElementById("root"));