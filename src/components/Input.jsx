import {useState} from "react";

const Input = ({list, setList}) => {

    const [input, setInput] = useState("");

    // Function to add to the todo list
    const addTodo = (e) => {
        e.preventDefault();
        setList([input, ...list]);
        setInput("");
    }

    return (
        <div className="shadow rounded bg-white mb-6">
            <form className="flex" onSubmit={(e) => addTodo(e)}>
                <div className="grow">
                    <label htmlFor="todo" className="font-bold px-3 text-gray-600 text-sm">Add your todo</label>
                    <input type="text" className="px-3 text-gray-500 w-full focus:outline-none" onChange={e => setInput(e.target.value)} id="todo" value={input || ""} required />
                </div>
                <button className="button bg-green-500 hover:bg-green-600 transition duration-300 ease text-white px-4 py-4" type="submit">Add</button>
            </form>
        </div>
    )
}

export default Input;