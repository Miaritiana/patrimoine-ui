import React from 'react'

export function Checkbox() {
  return (
    <>
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="Agrégat"/>
            <label className="form-check-label">Agrégat</label>
        </div>
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="Trésorerie"/>
            <label className="form-check-label">Trésorerie</label>
        </div>
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="Immobilisations" />
            <label className="form-check-label">Immobilisations</label>
        </div>
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="Obligations" />
            <label className="form-check-label">Obligations</label>
        </div>
    </>
  )
}
