import React from 'react'
import "./style.css"
import CancelIcon from '@mui/icons-material/Cancel';

const GenreBody = () => {
  return (
    <div className="modal_body">
      <h2 className="input_menu">ジャンル編集</h2>
      <ul>
        <li className="genre_title">
          <span>sample株式会社</span>
          <CancelIcon />
        </li>
      </ul>
      <input type="text" />
      <input className="input_submit" type="button" value="追加" />
    </div>
  )
}

export default GenreBody
