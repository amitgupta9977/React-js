import React, {useState} from 'react'


const TodoList = () =>{
    const [input, setInput] = useState('');
    const [task, setTask] = useState([])
    
     const add = ( e ) =>{
        e.preventDefault();
        setTask([...task,{
            text:input,
        }]);
        setInput('');
    }
    
    return(
        
        <div>
            <h1>ToDo List</h1>
            
                <form onSubmit={add}>
                    <input
                        placeholder='Please add new task'
                        className='innerText'
                        onChange={e => setInput(e.target.value)}
                        value={input}
                        />
                    <button className='add-btn'>Add</button>
                </form>
                {task.map((item, i) => (
                    <div key={i}>
                        <div>
                            <li>{item.text}</li>
                        </div>
                    </div>
                ))}
        </div>
        
    )
}

export default TodoList;