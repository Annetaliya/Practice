import React, {useState} from 'react'

function DesignerTool () {
    const [counter, setCounter] = useState(8);
    const [font, setFont] = useState('');

    const handleIncreament = () => {
        setCounter(counter + 8)
    }

    const handleDecreament = () => {
        if (counter === 8) return
        setCounter(counter - 8)
    }
    return (
        <div>
            <h1>Designer tool (mini Figma)</h1>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <p>Font size</p>
                <button style={{ width: '60px', height: '20px'}} onClick={handleIncreament}>+</button>
                <button style={{ width: '60px', height: '20px'}}>{counter}</button>
                <button style={{ width: '60px', height: '20px'}} onClick={handleDecreament}>-</button>
            </div>
            <h3>Select your font size</h3>
            <div>
                <select onChange={(e => setCounter(Number(e.target.value)))}>
                    <option value='8'>8px</option>
                    <option value='16'>16px</option>
                    <option value='24'>24px</option>
                </select>
            </div>
            <div>
                <h4>get good suggestion for font styles</h4>
                <select onChange={(e) => setFont(e.target.value)}>
                    <option value='Helvetica'>Helvetica</option>
                    <option value='Rockwell'>Rockwell</option>
                    <option value='Lusitana'>Lusitana</option>
                    <option value='Futura'>Futura</option>
                </select>
            </div>
            <div style={{borderStyle:'solid', borderWidth: '1px', borderColor: 'red'}}>
                <p>Good for: headlines</p>
                <p>Pair of fonts which go together with it</p>
                <p>Copy css: '{font}'</p>

            </div>
            <div style={{borderStyle:'solid', borderWidth: '1px', borderColor: 'purple', marginTop: '20px'}}>
                <h3 style={{fontFamily: font, color: 'purple', fontSize: counter}}>Hello world</h3>
            </div>
        </div>
    )
}

export default DesignerTool;