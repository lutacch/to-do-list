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
	

 



    return (
	<div>
		<h1>{inputValue}</h1>
		<input type="text" onChange={handleChange} onKeyDown={handleKeyDown} value={inputValue}/>
	
	{/* 	<h1>{newList.map((inputValue) => <button key={inputValue}>{inputValue}</button>)}</h1>  */}
	

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
