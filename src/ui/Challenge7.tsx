/**
 * Make onSale products appear red
 */
export const Challenge7 = () => (
  <div>
    <h2>Products</h2>
    <ul>
      <Item name={"Tomato"} onSale={true} />
      <Item name={"Cheese"} onSale={false} />
    </ul>
  </div>
);

const Item = ({ name, onSale }: { name: string; onSale: boolean }) => {
  return <li>{name}</li>;
};

export default Challenge7