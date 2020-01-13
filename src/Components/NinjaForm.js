import React, { useState } from 'react';

const NinjaForm = props => {
  const [name, setName] = useState("");
  const [level, setLevel] = useState(1);

  const addNinjaToList = e => {
    e.preventDefault();
    props.ninjaAdd({name: name, level: level});
    setName("");
    setLevel(1);
  }

  return (
    <form onSubmit={ addNinjaToList } >
      <h3>Create</h3>
      <label>Name</label>
      <input 
        type="text" 
        onChange={ e => setName(e.target.value)}
        value={name} 
      />
      <label>Level</label>
      <input 
        type="number" 
        onChange={ e => setLevel(e.target.value)} 
        value={level}
      />
      <input type="submit" />
    </form>
  );
}

export default NinjaForm;