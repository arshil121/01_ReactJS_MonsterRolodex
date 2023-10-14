import { Component } from "react";
import "./App.css";
import CardList from "./component/card-list/card-list.component";
import SearchBox from "./component/search-box/search-box.component";


class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const users = await response.json();
      console.log(users);
      this.setState(() => {
        return { monsters: users };
      });
    } catch (error) {
      // Handle errors here
      console.error("Error:", error);
    }
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monsters) => {
      return monsters.name.toLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className="app-title"> Monsters Rolodex by - Shoab</h1>

        <SearchBox
          className="monsters-search-box"
          placeholder="Search Monsters"
          onChangeHandler={onSearchChange}
        />

        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
