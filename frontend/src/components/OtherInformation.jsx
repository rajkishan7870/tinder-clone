import {React, useState} from 'react'
import Inputfield from './Inputfield'
import SaveButton from './SaveButton'
import { useRecoilState } from 'recoil'
import { profile_data } from '../Recoil/profile'

export default function OtherInformation() {
  const [otherinformation, setOtherinformation] = useState({
    drinking_type: "",
    smoking_type: ""
  })
  const [otherinformationrecoil, setOtherinformationrecoil] = useRecoilState(profile_data)
    function handleSubmit(e) {
      e.preventDefault()
      setOtherinformationrecoil({...otherinformationrecoil, ...otherinformation})
    }
  return (
      <div>
          <form onSubmit={handleSubmit}>
              <Inputfield
                title="Drinking Type"
                placeholder="Enter Your drinking type personality"
                name="drinking_type"
          onChange={(e) => {
                  setOtherinformation({...otherinformation, "drinking_type": e.target.value})
                }}
              />
              <Inputfield
                title="Smoking Type"
                placeholder="Enter Your smoking type personality"
                name="smoking_type"
          onChange={(e) => {
                  setOtherinformation({...otherinformation, "smoking_type": e.target.value})
                }}
              />
              <SaveButton type="submit" onClick={ handleSubmit} />
          </form>
    </div>
  )
}
