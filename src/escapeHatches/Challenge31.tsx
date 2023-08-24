import { createRef, KeyboardEvent, useRef } from "react";

/**
 * When you want a component to “remember” some information, but you don’t want
 * that information to trigger new renders, you can use a ref. In the challenge
 * below, implement the `handleOnKeyDown`. This function should enable keyboard
 * navigation, i.e. items should be focus by clicking arrow up or down. For it to
 * work, we need refs for each of the items in the list so that we can call
 * `.focus()` and a cursor to keep track of our current position. *
 */

export default function Challenge31() {
  const refs = [...Array(10).keys()].map(() => createRef<HTMLLIElement>());
  const cursor = useRef<number>(0);

  const handleOnkeyDown = (e: KeyboardEvent<HTMLElement>) => {};

  return (
    <>
      <ul
        role="listbox"
        tabIndex={0}
        className="flex flex-col gap-2"
        onKeyDown={handleOnkeyDown}
      >
        {[...Array(refs.length).keys()].map((n) => (
          <li
            className="bg-gray-700 w-32 flex justify-center text-orange-500 focus:border"
            ref={refs[n]}
            key={n}
            tabIndex={0}
          >
            {n}
          </li>
        ))}
      </ul>
    </>
  );
}

const getNewCursorIndex = (
  e: KeyboardEvent<HTMLElement>,
  cursor: number,
  numberOfItems: number
) => {
  let updatedCursor = cursor;
  if (e.key === "ArrowUp" && cursor > 0) {
    updatedCursor += -1;
  } else if (e.key === "ArrowDown" && cursor < numberOfItems - 1) {
    updatedCursor += 1;
  }

  return updatedCursor;
};
