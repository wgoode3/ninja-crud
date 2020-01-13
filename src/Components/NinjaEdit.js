import React, { useState, useEffect } from 'react';

const NinjaEdit = props => {

  const [name, setName] = useState("");
  const [level, setLevel] = useState(1);

  useEffect( () => {
    setName(props.ninjaToEdit.name);
    setLevel(props.ninjaToEdit.level);
  }, []);

  const update = e => {
    e.preventDefault();
    props.ninjaUpdate({name: name, level: level});
  }

  return (
    <form onSubmit={ update } >
      <h3>Edit</h3>
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

export default NinjaEdit;