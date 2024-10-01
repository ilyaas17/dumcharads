import React from 'react'

export default function Button({name='',handler,defaultStyle={}}) {
  return (
    <div>
      <button onClick={handler} style={defaultStyle} >{name||"submit"}</button>
    </div>
  )
}
