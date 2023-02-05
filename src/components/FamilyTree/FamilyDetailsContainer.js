import React from 'react'
import FamilyDetails from './FamilyDetails'
import FamilyTree from './FamilyTree'

const FamilyDetailsContainer = () => {
  return (
    <div>
        <div className='ParentContainer-of-details-and-familytree'>
          <FamilyTree/>
          <FamilyDetails/>
        </div>
    </div>
  )
}

export default FamilyDetailsContainer