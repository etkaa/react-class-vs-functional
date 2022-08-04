import { Component } from "react";
import styles from "./card.module.css";

class Card extends Component {
  render() {
    const { id, name, email } = this.props.monster;

    return (
      <div className={styles.cardContainer} key={id}>
        <img alt="monster" src={`https://robohash.org/${id}?set=set2`} />
        <h2 key={id}>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default Card;
