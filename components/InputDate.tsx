import React from 'react'

export function InputDate() {
  return (
    <>
    <form>
        <div className="col-auto form-row d-flex ">
            <div className="align-items-center d-flex">
                <label className="sr-only mx-1">De</label>
                <input type="date" className="form-control mb-2 mx-1" id="inlineFormInput"/>
            </div>
            <div className="align-items-center col-auto d-flex">
                <label className="sr-only mx-1">A</label>
                <input type="date" className="form-control mb-2 mx-1" id="inlineFormInput"/>
            </div>
        </div>
    </form>
    </>
  )
}
