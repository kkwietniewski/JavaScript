class ShoppingList extends React.Component{
  state = {
    item1: 'pickle',
    item2: 'juice',
    item3: 'smth to drink'
  }
  render(){
    return(
      <>
      <h1>Shopping list</h1>
      <ul>
        <ItemList name={this.state.item1} capacity={2+2}/>
        <ItemList name={this.state.item2} />
        <ItemList name={this.state.item3} />
      </ul>
      </>
    );
  }
}

const ItemList = (props) => {
  return(
    <li>{props.name} - {props.capacity}</li>
  );
}

ReactDOM.render(<ShoppingList />, document.getElementById('root'));