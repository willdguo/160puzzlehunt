import { useState, useRef } from 'react'
import '../style/AnswerBox.css'

const AnswerBox = ( {answer, id, winner} ) => {

    const [msg, setMsg] = useState(null)
    const [input, setInput] = useState('')
    const msgTimer = useRef()

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        if(input.trim().toLowerCase() === answer.toLowerCase()){
            clearTimeout(msgTimer.current)
            setMsg(`Correct! ${answer} is the answer. ${winner ? 'Congrats & GG!' : ''}`)

            if (id !== null && id !== undefined) { // Check if id is not null or undefined
                sessionStorage.setItem(id, 'True');
            }

        } else {
            setMsg('Incorrect')

            clearTimeout(msgTimer.current)

            msgTimer.current = setTimeout(() => {
                setMsg(null)
            }, 4000)
        }
    }

    return (
        <div className = "answerbox">
            <input value = {input} onChange = {handleChange} 
                onKeyDown = {(e) => {if(e.key === 'Enter'){handleSubmit(e)}}}/>
            <button onClick = {handleSubmit}> Submit </button>

            {msg && (<b> {msg} </b>)}
        </div>
    )
}

export default AnswerBox