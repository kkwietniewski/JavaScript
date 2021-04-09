//Komponent funkcyjny
const Header = () => {
  return(
      <h1>Hello world!</h1>
  );
}

//Komponent klasowy
class Article extends React.Component{
  state = {
    number: 0
  }
  render(){
    return(
      <section>
        <h2>Artykuł</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut commodi accusantium at saepe architecto omnis maxime corrupti quis consequatur, asperiores, quod nostrum similique blanditiis ex totam! Repudiandae neque atque mollitia?</p>
      </section>
    )
  }
}

//Komponent funkcyjny
const App = () => {
  return(
    <>
    <Header />
    <Article />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));