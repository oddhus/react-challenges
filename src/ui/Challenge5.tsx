/**
 * Create an interface for "AddTwoNumbers" component and pass two numbers to the component
 */
export default function Challenge5() {
  return <AddTwoNumbers />;
}

const AddTwoNumbers = ({ number1, number2 }) => {
  return (
    <div>
      {number1} + {number2} = {number1 + number2}
    </div>
  );
};
