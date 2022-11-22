import React from 'react'
import Brightness1Icon from '@mui/icons-material/Brightness1';
import './Widgets.css'
function Widgets() {
  return (
    <div className='widgets'>
        <h3 className="widgets--title">linkedin news</h3>
        <div className="widgets--widget">
            <Brightness1Icon fontSize="inherit" className='widgets--icon'/>
            <p className="widgets--text">Saudi Arabia stun Messi and Argentina in World Cup</p>
        </div>
        <div className="widgets--widget">
            <Brightness1Icon fontSize="inherit" className='widgets--icon'/>
            <p className="widgets--text">Twitter charity partners condemn Musk's 'dangerous' changes</p>
        </div>
        <div className="widgets--widget">
            <Brightness1Icon fontSize="inherit" className='widgets--icon'/>
            <p className="widgets--text">TypeScript 4.9 is Huge!</p>
        </div>
        <div className="widgets--widget">
            <Brightness1Icon fontSize="inherit" className='widgets--icon'/>
            <p className="widgets--text">Musk lifts Donald Trump's Twitter ban</p>
        </div>
    </div>
  )
}

export default Widgets