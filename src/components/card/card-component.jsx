import styles from "./card.module.css";

const Card = (props) => {
  const { id, name, email } = props.monster;

  return (
    <div className={styles.cardContainer} key={id}>
      <img alt="monster" src={`https://robohash.org/${id}?set=set2`} />
      <h2 key={id}>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
