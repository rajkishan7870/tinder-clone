import React from 'react'
import style from "./header.module.css"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LongMenu from './menu';

export default function Header() {
  return (
      <div className={ style.mainDiv }>
          <div className={style.homeIcon}> 
             <HomeOutlinedIcon /> 
          </div>

          <div className={style.headerText}>
              <div>Overview</div>
              <div>Matches</div>
              <div>Login</div>
              <div>SignUp</div>
              <LongMenu/>
          </div>
    </div>
  )
}
