import React, { useState } from 'react';
import NinjaForm from './NinjaForm';
import NinjaTable from './NinjaTable';
import NinjaEdit from './NinjaEdit';


const NinjaInfoCard = props => {

  const [ninjaIdToEdit, setNinjaIdToEdit] = useState(-1);
  const [ninjaToEdit, setNinjaToEdit] = useState({});
  const [ninjas, setNinjas] = useState([]);

  const deleteNinja = i => {
    setNinjas([...ninjas.slice(0, i), ...ninjas.slice(i+1)]);
  }

  const addNinja = ninja => {
    setNinjas([...ninjas, ninja]);
  }

  const updateNinja = ninja => {
    setNinjas([...ninjas.slice(0, ninjaIdToEdit), ninja, ...ninjas.slice(ninjaIdToEdit+1)]);
    setNinjaIdToEdit(-1);
    setNinjaToEdit({});
  }

  return (
    <>
      <h1>Ninja Info Cards</h1>
      <hr />
      {
        ninjaIdToEdit !== -1 
        ? 
        <NinjaEdit ninjaToEdit={ninjaToEdit} ninjaUpdate={ updateNinja }/> 
        :
        <NinjaForm ninjaAdd={ addNinja } />
      }
      <hr />
      <NinjaTable 
        ninjas={ninjas} 
        ninjaDelete={ i => deleteNinja(i) } 
        editNinja={ i => {
          setNinjaIdToEdit(i);
          setNinjaToEdit(ninjas[i]);
        } }
      />
    </>
  );
}

export default NinjaInfoCard;