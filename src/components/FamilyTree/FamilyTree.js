import React from 'react'
import ButtonsContainer from '../ButtonSection/ButtonsContainer';
import Autocomplete, { createFilterOptions } from '@mui/joy/Autocomplete';
import AutocompleteOption from '@mui/joy/AutocompleteOption';
import Button from '@mui/joy/Button';
import Input from '@mui/joy/Input';


const FamilyTree = () => {
  return (
    <>
      <div className="Family-Tree-Container">
        <div className="Family-Details-Heading">
          <p className="Family-Details-Heading-Para">Family-Tree</p>
        </div>
        <div className="Family-tree-files-and-folder">
        <Autocomplete
        placeholder='Search'
        style={{
            width:"90%",
            margin:"5px auto",
            boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            borderColor:"cadetblue"
        }}
        options={['Option 1', 'Option 2']} />

        </div>
        <ButtonsContainer />
      </div>
    </>
  );
}

export default FamilyTree