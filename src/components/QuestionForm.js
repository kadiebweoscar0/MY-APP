import {useState} from 'react'

function QuestionForm() {
    const [inputValue, setInputValue] = useState('Posez une questioon ici')

    return(
        <div>
            <textarea>
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            </textarea>
            <button onClick={() => alert(inputValue)}>Alertez moi 🚨</button>
        </div>
    )
}
export default QuestionForm