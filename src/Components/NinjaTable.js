import React, { useState } from 'react';


const NinjaTable = props => {

  const remove = i => {
    props.ninjaDelete(i);
  }

  const edit = i => {
    props.editNinja(i);
  }

  return (
    <table border="1">
    <tbody>
      <tr>
        <th>Name</th>
        <th>Level</th>
        <th>Actions</th>
      </tr>
      {
        props.ninjas.map( (ninja, i) => 
          <tr key={i}>
            <td>{ninja.name}</td>
            <td>{ninja.level}</td>
            <td>
              <button onClick={ e => remove(i) }>Delete</button>
              &nbsp;
              <button onClick={ e => edit(i) }>Edit</button>
            </td>
          </tr>
        )
      }
    </tbody>
  </table>
  );
}

export default NinjaTable;