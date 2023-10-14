import { Component } from "react";
import CardContainer from "./card-container.component";

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          const { name, email, id } = monster;
          return (
            <CardContainer name={name} email={email} id={id}/>
          );
        })}
      </div>
    );
  }
}

export default CardList;
