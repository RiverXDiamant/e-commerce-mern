import styles from "./VansListItem.module.css";

export default function VansListItem({ itemItem, handleAddToOrder }) {
  return (
    <div className={styles.ListItem}>
      <div className={`${styles.img} flex-ctr-ctr`}>{itemItem.img}</div>
      <div className={styles.name}>{itemItem.name}</div>
      <div className={styles.buy}>
        <span>${itemItem.price.toFixed(2)}</span>
        <button
          className="btn-sm"
          onClick={() => handleAddToOrder(itemItem._id)}
        >
          ADD
        </button>
      </div>
    </div>
  );
}
