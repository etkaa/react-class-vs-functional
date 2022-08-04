import { Component } from "react";
import CardList from "./components/card-list/card-list-component";
import SearchBox from "./components/search-box/search-box-component";
import styles from "./App.module.css";

class App extends Component {
  //initialize the class
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    //first ever time component rendered
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  //declare this function here so it doesn't render everytime
  handleInputChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    //use destructuring to get rid of this keyword
    const { monsters, searchField } = this.state;
    const { handleInputChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    //render on to the screen
    return (
      <div className={styles.App}>
        <h1 className={styles.title}>Find Your Monster</h1>
        <SearchBox
          className="monsters-search-box"
          placeholder="Search Monsters"
          onChange={handleInputChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
