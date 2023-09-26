import React from 'react';
const signOut = ()=>{
    console.log("signout");
}
const ListHeader = ({listname}) => {
  return (
    <div>
      {listname}
      <div className="button-container">
        <button className="create">ADD NEW</button>
        <button className="signout" onClick={signOut}>SIGN OUT</button>
      </div>
    </div>
  )
}

export default ListHeader
