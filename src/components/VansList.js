import styles from "./VansList.module.css";
import VansListItem from "./VansListItem";

export default function VansList({ VansItems, handleAddToOrder }) {
  const items = VansItems.map((item) => (
    <VansListItem
      key={item._id}
      handleAddToOrder={handleAddToOrder}
      VansItem={item}
    />
  ));
  return <main className={styles.List}>{items}</main>;
}
