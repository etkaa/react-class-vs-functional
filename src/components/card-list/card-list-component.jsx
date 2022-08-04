import { Component } from "react";
import Card from "../card/card-component";
import styles from "./card-list.module.css";

class CardList extends Component {
  render() {
    const { monsters } = this.props;

    return (
      <div className={styles.cardList}>
        {monsters.map((monster) => {
          return <Card monster={monster} />;
        })}
      </div>
    );
  }
}

export default CardList;
