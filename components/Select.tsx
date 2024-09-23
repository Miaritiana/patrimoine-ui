import React from 'react'

export function Select() {
  return (
    <>
        <div className='d-flex'>
            <p className='align-items-center'>Patrimoine</p>
            <select className="form-select form-select-sm mx-2" aria-label=".form-select-sm example">
                <option value="cresus">cresus</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </div>
    </>
  )
}