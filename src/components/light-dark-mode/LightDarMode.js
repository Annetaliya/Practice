import React, {useState} from 'react'
import { BsGpuCard } from 'react-icons/bs';

const LightDarMode = () => {
    const [color, setColor] = useState('white');

    const handleChangeTheme = () => {
        setColor( prevColor => (prevColor === 'white' ? 'black' : 'white'))
    }


  return (
    <div className='light-dark-mode' style={{background: color, height: '100vh'}}>
        <div className='container'>
            <p>Hello World!</p>
            <button onClick={handleChangeTheme}>
                Change Theme
                
                </button>

        </div>
    </div>
  )
}

export default LightDarMode