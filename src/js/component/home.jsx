import React, {useState} from "react";
import TareaForm from "/workspace/to-do-list/src/js/component/tareaForm.jsx"
import ToDoList from "/workspace/to-do-list/src/js/component/toDoList.jsx"




const Home = () => {
	const [listaTareas, setListaTareas] = useState([]);
	

	const nuevaTarea = (tarea) =>{
		setListaTareas([tarea, ...listaTareas]);
	}

console.log(listaTareas);	

const borrar = (id) => {
	const listaFiltrada = listaTareas.filter((e,index) => index !== id)
	setListaTareas(listaFiltrada);

}
 return (
	<div>
		<h3>TO DO LIST</h3>
		<h1><TareaForm
		nuevaTarea={nuevaTarea}
		/></h1>
		<h5><ToDoList/></h5>
		{listaTareas.map((renderizarTarea, index) => <ToDoList tarea={renderizarTarea} borrar={borrar} id={index}/>)}


{/* 		{listaTareas.map(renderizarTarea=> <div>{renderizarTarea}</div>)} */}
		
		</div>);
}

export default Home;



























/* const Home = () => {
	const [inputValue, setInputValue ] = useState("");
	
	
	return (
		<div className="text-center">
			<h1>TO DO LIST</h1>
			<ul class="list-group">
  <li class="list-group-item"> <input type="text" onChange={e => setInputValue(e.target.value)} value={inputValue} ></input></li>
  <li class="list-group-item"><input type="text"></input></li>
  <li class="list-group-item"><input type="text"></input></li>
  <li class="list-group-item"><input type="text"></input></li>
</ul>
		</div>
	);
}; */






/* 	const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction)

function myFunction(num) {
  return num * 10;
} */



/* 
const newArray = newList.map(unaFuncion)
function unaFuncion(hola){
	return "quetal"
}  */
	

/* 

import React, {useState} from "react";


//create your first component
const Home = () => {
    const [inputValue, setInputValue ] = useState('hola');
	const [inputList, setInputList ] = useState([]);
    
	
	const handleChange = (event) => {
			const newValue= event.target.value;
			setInputValue(newValue);
		}
	
	const handleKeyDown = (e) =>{
		if(e.keyCode === "13"){
			const newList = [...inputList];
			newList.push(inputValue);
			setInputList(newList);
		}
		
	}	

 return (
	<div>
		<h1>{inputValue}</h1>
		<input type="text" onChange={handleChange} onKeyDown={handleKeyDown} value={inputValue}/>
	
		<h1>{newList.map((inputValue) => <button key={inputValue}>{inputValue}</button>)}</h1> 
	

		</div>);
}

export default Home; */ 