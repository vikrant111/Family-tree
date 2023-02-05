import React from 'react'

const FamilyDetails = () => {
  return (
    <>
    <div className='Family-Details-section'>
        <div className='Family-Details-Heading'>
            <p className='Family-Details-Heading-Para'>Family-Details</p>
        </div>
        <div className='Family-Details-Body-Container'>
            <div className='Details-of-family'>
                <div className='Labels-container'>
                <p>Name : </p>
                <p>Spouse : </p>
                <p>Location : </p>
                <p>Birth Year : </p>
                <p>Present address : </p>
                <p>Family photo : </p>
                </div>
                <div className='Family-info-container'>
                    <p>vikrant</p>
                    <p>kusma</p>
                    <p>gorakhpur</p>
                    <p>10-03-1999</p>
                    <p>banglore</p>
                    <div className='Photo-container'>
                        <div className='Image1'>
                        </div>
                        <div className='Image2'>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default FamilyDetails