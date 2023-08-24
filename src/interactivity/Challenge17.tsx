import { ChangeEvent, useState } from "react";

/**
 * `handleUserInfoChange` is directly changing the object stored in state. Consequently,
 * the inputs are not updating. Fix this issue
 */
export default function Challenge17() {
  const [user, setUser] = useState({
    name: "",
    city: "",
  });

  function handleUserInfoChange(e: ChangeEvent<HTMLInputElement>) {
    user[e.target.name as keyof typeof user] = e.target.value;
    setUser(user);
  }
  return (
    <>
      <label>
        Name:
        <input value={user.name} onChange={handleUserInfoChange} name="name" />
      </label>
      <label>
        City:
        <input value={user.city} onChange={handleUserInfoChange} name="city" />
      </label>
    </>
  );
}
