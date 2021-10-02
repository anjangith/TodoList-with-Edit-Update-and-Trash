import React from 'react'
import { traverseTwoPhase } from 'react-dom/test-utils'

function Trash({trashes}) {


return trashes.map((obj)=> <h1>{obj.text}</h1>)

}

export default Trash
