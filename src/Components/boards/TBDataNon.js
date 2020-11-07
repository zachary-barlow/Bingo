import React from 'react';


function TBDataNon({value, truthy}) {

  return (
    <td style={{backgroundColor: truthy ? '#3CAEA3' : 'white'}}>{value}</td>
  )
}

export default TBDataNon;