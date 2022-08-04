import Card from "../card/card-component";
import styles from "./card-list.module.css";

const CardList = ({ monsters }) => {
  return (
    <div className={styles.cardList}>
      {monsters.map((monster) => {
        return <Card key={monster.id} monster={monster} />;
      })}
    </div>
  );
};

export default CardList;
