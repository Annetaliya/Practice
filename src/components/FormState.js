import React, {useState} from 'react';

export default function FormState() {
    const [answer, setAnswer] =  useState('')
    const [error, setError] = useState(null)
    const [status, setStatus] =  useState('typing')

    if (status === 'success') {
        return <h1>That is right</h1>

    }

    async function handleSubmit (e) {
        e.preventDefault();
        setStatus('submitting')
        await submitAnswer(answer)
        setStatus('success')
        try {

        } catch (err) {
            setStatus('typing')
            setError(err)

        }
    }

    function handleChange(e) {
        setAnswer(e.target.value)
    }

    function submitAnswer(answer) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let shouldError = answer.toLowerCase() !== 'lima'
                 if (shouldError) {
                    reject(new Error('Good guess but a wrong answer. Try again!'));
                 } else {
                    resolve()
                 }

            }, 1500)

        })
    }


    return (
        <div>
            <h2>City Quiz</h2>
            <p>In which city is there a billboard that turns air into drinkable water?</p>
            <form onSubmit={handleSubmit}>
                <textarea 
                value={answer}
                disabled={status === 'submitting'} 
                onChange={handleChange}
                className={`hello ${answer}` }
                />
                <br />
                <button disabled={status === 'empty' || status === 'submitting'}>
                Submit
                </button>
                {error !== null && <p style={{color: 'red'}}>{error.message}</p>}
            </form>
        </div>
    )
}