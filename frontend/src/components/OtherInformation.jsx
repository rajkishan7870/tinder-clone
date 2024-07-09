import React from 'react'
import Inputfield from './Inputfield'
import SaveButton from './SaveButton'

export default function OtherInformation() {
    function handleSubmit(e) {
        e.preventDefault()
    }
  return (
      <div>
          <form>
              <Inputfield
                title="Drinking Type"
                placeholder="Enter Your drinking type personality"
                name="drinking_type"
                onChange={handleSubmit}
              />
              <Inputfield
                title="Smoking Type"
                placeholder="Enter Your smoking type personality"
                name="smoking_type"
                onChange={handleSubmit}
              />
              <SaveButton onClick={ handleSubmit} />
          </form>
    </div>
  )
}
