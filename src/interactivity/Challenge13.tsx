/**
 * Prevent the page from reloading when clicking submit
 */
export default function Challenge13() {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    alert("Submitting");
  };
  return (
    <form onSubmit={onSubmit}>
      <input />
      <button>Submit</button>
    </form>
  );
}
