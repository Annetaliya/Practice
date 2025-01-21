import React, {useState} from 'react';
import QRCode from 'react-qr-code';

function QrGenerator ()  {
    const [qrCode, setQrcode] = useState('');
    const [input, setInput] = useState('')

    function handleGenerate () {
        setQrcode(input);
        setInput('')
    }
    return (
        <div>
            <h1>QR Code Generator</h1>
            <input
            type='text'
            name='qr-code'
            value={input}
            placeholder='Enter your value here'
            onChange={(e) => setInput(e.target.value)}
            />
            <button 
            onClick={handleGenerate}  disabled={input && input.trim() !== '' ? false : true}>
               
                Generate

            </button>
            <div>
                <QRCode 
                id='qr-code'
                value={qrCode} size={400} bgColor='#fff'/>
            </div>
        </div>
    )
}

export default QrGenerator;