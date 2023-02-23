import {useState} from "react";

//Importing Component
import Todo from "./components/Todo";
import Input from "./components/Input";

const App = () => {

  const [list, setList] = useState([]);
  const [select, setSelect] = useState([]);
  const [selectAll, setSelectAll] = useState(0);

  // Function to delete from the todo list
  const deleteTodo = (index) => {
    const newList = list.filter((eachTodo, currentIndex) => currentIndex !== index);
    setList(newList);
  }

  // Function to add to the select array
  const selection = (status, todo) => {

    if(selectAll === true) {
      setSelectAll(false);
    }

    if (status === true) {
        setSelect(prev => [...prev, todo]);
    } else {
      let newSelect = select.filter((eachSelect) => eachSelect !== todo);
      setSelect(newSelect);
    }
  }

  // Function to select all
  const selectAllFunc = (status) => {
    if(!list || list.length === 0) {
      return;
    }

    if(status === true) {
      setSelectAll(true);
      let newSelect = list.map((todo, index) => todo);
      setSelect(newSelect);
    } else {
      setSelectAll(false);
    }
  }

  // Function to delete selected todo
  const deleteSelected = () => {
    let newList;
    if(selectAll === true) {
      newList = [];
      setList(newList);
      setSelectAll(false);
      return;
    }
    newList = list;
    for (let i=0; i<select.length; i++) {
      newList = newList.filter((eachTodo) => eachTodo !== select[i]);
      console.log(newList, "new list")
    }
    setList(newList);
    setSelect([]);
  }
console.log(select)
  return (
    <div className="App flex items-center justify-center h-screen">
      <div className='bg-white shadow w-1/2 h-4/5 p-6'>
        <div className="flex flex-col h-full">
          <Input list={list} setList={setList} />
          <div className="grow overflow-hidden flex flex-col">
          <div className="shrink-1 flex justify-between mb-2">
            <h3 className="font-bold text-gray-700 tracking-wide text-2xl">Your Todo</h3>
            <div>
              <label htmlFor="selectAll" className="mr-2 cursor-pointer">Select all</label>
              <input id="selectAll" type="checkbox" className="cursor-pointer mr-2" checked={selectAll} onChange={e => selectAllFunc(e.target.checked)} />
              <button className="cursor-pointer disable text-white bg-red-500 font-semibold py-1 px-4 rounded hover:bg-red-600 transition duration-300 ease" onClick={() => deleteSelected()}>Delete</button>
            </div>
          </div>
          <hr className="shrink-1" />
          <div className="grow overflow-y-auto pr-4">
          { 
          
          list?.map((eachTodo, index) => {
            return (
              <Todo key={eachTodo + index} todo={eachTodo} index={index} selection={selection} deleteTodo={deleteTodo} selectAll={selectAll} />
            )
          })

          }
          </div>  
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;