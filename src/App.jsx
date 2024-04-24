import { useState } from 'react';
import './App.css';


import Button from './components/Buttons/Button';
import Names from './components/Names/Names';


import { isIn } from './utils/Names';


const App=()=>{
	const [namesList,changeNames]=useState({
		"ad1":{
			names:["Cláudio da Rosa Soares Cabral","Cláudio da Rosa Soares Cabral","Cláudio de Paula","Algum nome Aleatório","Cleitinho da Silva Nascimento"]
		},
		"ad2":{
			names:[]
		}
	});
	let [index, _ci]=useState({indexes:[],id:0});

	const changeIndex=(shiftKey,ctrlKey,_index,id)=>{
		let _indexes=[];
		if(!(shiftKey||ctrlKey)||index.indexes.length===0){
			_indexes.push(_index);
		}
		else if(shiftKey&&!ctrlKey){
			if(_index>index.indexes[0]){
				for(let x=index.indexes[0];x<=_index;x++){
					_indexes.push(x);
				}
			}else{
				for(let x=index.indexes[index.indexes.length-1];x>=_index;x--){
					_indexes.push(x);
				}
			}
		}else{
			if(isIn(index,_index)){
				for(let el of index.indexes){
					if(el!==_index){
						_indexes.push(el);
					}
				}
			}else{
				_indexes.push(...index.indexes,_index);
				_indexes.sort();
			}
		}
		_ci({indexes:_indexes,id:id});
	}

	const sendAllLeft=()=>{
		console.log("all left")
	},sendAllRight=()=>{

	},sendLeft=()=>{

	},sendRight=()=>{

	};

  return (
    <div className="App">
			<Names listNames={namesList["ad1"].names} indexes={index} change={changeIndex} id={"ad1"}/>
			<Button left={namesList["ad1"]} right={namesList["ad2"]} sendAllLeft={sendAllLeft} sendAllRight={sendAllRight} sendLeft={sendLeft} sendRight={sendRight}/>
			<Names listNames={namesList["ad2"].names} indexes={index} change={changeIndex} id={"ad2"}/>
    </div>
  );
}

export default App;
