import "../index.css";

const Stats = ({ items }) => {
  if (!items.length)
    return (
      <p className="stats">Stats adding some items to your packing list 🚀</p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! ready to go ✈"
          : `💼 You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}) %`}
      </em>
    </footer>
  );
};

export default Stats;
