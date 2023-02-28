import React, { useState } from "react";
import { MdDelete } from "react-icons/md";

const Todo = ({ todo, index, selection, deleteTodo, selectAll }) => {
  const [checkListState, setCheckListState] = useState(false);

  if (selectAll === true && checkListState === false) {
    setCheckListState(true);
  }

  return (
    <div className="border-b border-gray-200 flex justify-between py-4">
      <h4 className="font-bold px-3 text-gray-600 text-lg">{todo}</h4>
      <div className="flex items-center">
        <MdDelete
          className="text-red-500 p-0 cursor-pointer hover:text-red-600 transition duration-300 ease-in mr-2"
          size="25"
          onClick={() => deleteTodo(index)}
        />
        <input
          type="checkbox"
          onChange={(e) => {
            if (selectAll === true) {
              setCheckListState(false);
            } else {
              setCheckListState((state) => !state);
            }
            selection(e.target.checked, todo);
          }}
          className="cursor-pointer transition duration-300 ease-in h-[19px] w-[19px]"
          size="25"
          {...(checkListState === true
            ? { checked: true }
            : { checked: false })}
        />
      </div>
    </div>
  );
};

export default React.memo(Todo);
