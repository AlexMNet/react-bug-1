import { useState, useRef } from 'react';
import { v4 as uuid } from 'uuid';
import Person from './components/Person';
import { sortNames, cleanInput } from './utils/functions';

function App() {
  const [people, setPeople] = useState([]);
  const inputNameRef = useRef(null);

  const addPerson = () => {
    const newPerson = {
      id: uuid(),
      name: cleanInput(inputNameRef.current.value),
    };
    const newPeople = sortNames([newPerson, ...people]);

    setPeople(newPeople);
    inputNameRef.current.value = '';
  };

  const deleteName = (id) => {
    console.log(id);
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addPerson();
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-neutral-900 text-slate-300 items-center">
      <h1 className="py-6 text-center text-6xl">People on Board</h1>
      <div className="mt-10 text-center">
        <div className="relative flex h-10 w-full">
          <input
            ref={inputNameRef}
            onKeyDown={handleKeyPress}
            className="pl-3 rounded-l-lg text-black"
            type="text"
            placeholder="Enter Name"
          />
          <button
            type="button"
            onClick={addPerson}
            className="bg-blue-600 px-3 hover:bg-blue-500 rounded-r-lg"
          >
            Add Name
          </button>
        </div>
        {/* People */}
        <div className="mt-4">
          <ul className="list-inside list-none">
            {people.map((person, index) => (
              <Person
                id={person.id}
                name={person.name}
                key={index}
                deleteName={deleteName}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
