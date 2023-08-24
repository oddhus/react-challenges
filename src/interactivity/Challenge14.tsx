/**
 * Update the component to accept user input
 */
export default function Challenge14() {
  let firstname = "";

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    firstname = e.target.value;
  };

  return <input value={firstname} onChange={handleOnChange} />;
}
