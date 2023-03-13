import { useState } from 'react';

const Person = ({ name, id, deleteName }) => {
  const [departed, setDeparted] = useState(false);

  return (
    <div className="flex justify-between items-center mb-2">
      <li
        onClick={(e) => {
          console.log(e.target);
          setDeparted(!departed);
        }}
        className={`${departed && 'line-through'} cursor-pointer`}
      >
        {name}
      </li>
      <button
        onClick={() => deleteName(id)}
        type="button"
        className="ml-4 rounded bg-red-500 py-1 px-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500/80"
      >
        X
      </button>
    </div>
  );
};

export default Person;
