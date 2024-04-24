import { useState } from 'react';


import './App.css';
import Button from './components/Buttons/Button';
import Names from './components/Names/Names';


const App=()=>{
	const [leftNames, changeLeftNames]=useState(["Cláudio da Rosa Soares Cabral","Cláudio da Rosa Soares Cabral","Cláudio de Paula","Algum nome Aleatório","Cleitinho da Silva Nascimento"]);
	const [rightNames, changeRightNames]=useState([]);
	let [index, _ci]=useState({index:-1,left:1,right:0});

	const changeIndex=(shiftKey,_index)=>{
		console.log(index.index);
		_ci({index:_index,left:1,right:0})
	}

	const sendAllLeft=()=>{

	},sendAllRight=()=>{

	},sendLeft=()=>{

	},sendRight=()=>{

	};



  return (
    <div className="App">
			<Names names={leftNames} selected={index.index} change={changeIndex}/>
			<Button sendAllLeft={sendAllLeft} sendAllRight={sendAllRight} sendLeft={sendLeft} sendRight={sendRight}/>
			<Names names={rightNames} selected={index} change={changeIndex}/>
    </div>
  );
}

export default App;
