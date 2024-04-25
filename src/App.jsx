import { useState } from 'react';
import './App.css';


import Button from './components/Buttons/Button';
import Names from './components/Names/Names';
import { isIn } from './utils/Names';


const App=()=>{

	const DEFAULT_INDEX={indexes:[],id:0};

	const [namesList,changeNames]=useState({
		"ad1":{
			names:["Cláudio da Rosa Soares Cabral","Cláudio da Rosa Soares Cabral","Cláudio de Paula","Algum nome Aleatório","Cleitinho da Silva Nascimento"]
		},
		"ad2":{
			names:["CLeitinho da hornet","Jackson dos porcon"]
		}
	});
	let [index, _ci]=useState(DEFAULT_INDEX);

	const changeIndex=(shiftKey,ctrlKey,_index,id)=>{
		let _indexes=[];
		if(!(shiftKey||ctrlKey)||index.indexes.length===0||id!==index.id){

			if(!isIn(index,_index)||index.indexes.length>1||id!==index.id){
				_indexes.push(_index);
			}
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
			}
		}
		_indexes.sort();
		if(_indexes.length===0)id=0;
		_ci({indexes:_indexes,id:id});
	},
	sendAllLeft=(leftId,rightId)=>{
		const _names=[...namesList[leftId].names];

		for(const e of namesList[rightId].names){
			_names.push(e);
		}
		_names.sort();
		changeNames({
			[leftId]:{
				names:_names
			},
			[rightId]:{
				names:[]
			}
		});
		_ci(DEFAULT_INDEX)
	},
	sendAllRight=(leftId,rightId)=>{
		const _names=[...namesList[leftId].names];

		for(const e of namesList[rightId].names){
			_names.push(e);
		}
		_names.sort();
		changeNames({
			"ad1":{
				names:[]
			},
			"ad2":{
				names:_names
			}
		});
		_ci(DEFAULT_INDEX)
	},
	sendLeft=(leftId,rightId)=>{
		console.log("left");
		if(index.id!==rightId)return;
		const _leftNames=[...namesList[leftId].names];
		const _rightNames=[];

		for(const i of index.indexes){
			_leftNames.push(namesList[rightId].names[i]);
		}

		for(const i in namesList[rightId].names){
			if(!isIn(index,+i))_rightNames.push(namesList[rightId].names[+i])
		}

		_leftNames.sort();
		_rightNames.sort();
		changeNames({
			[leftId]:{
				names:_leftNames
			},
			[rightId]:{
				names:_rightNames
			}
		});
		_ci(DEFAULT_INDEX)
	},sendRight=(leftId,rightId)=>{
		console.log("right");
		if(index.id!==leftId)return;
		const _leftNames=[];
		const _rightNames=[...namesList[rightId].names];



		for(const i of index.indexes){
			_rightNames.push(namesList[leftId].names[i]);
		}

		for(const i in namesList[leftId].names){
			if(!isIn(index,+i))_leftNames.push(namesList[leftId].names[+i])
		}

		_leftNames.sort();
		_rightNames.sort();
		changeNames({
			[leftId]:{
				names:_leftNames
			},
			[rightId]:{
				names:_rightNames
			}
		});
		_ci(DEFAULT_INDEX)
	};

	console.log(index.id)
  return (
    <div className="App">
			<Names listNames={namesList["ad1"].names} indexes={index} change={changeIndex} id={"ad1"}/>
			<Button left={"ad1"} right={"ad2"} sendAllLeft={sendAllLeft} sendAllRight={sendAllRight} sendLeft={sendLeft} sendRight={sendRight}/>
			<Names listNames={namesList["ad2"].names} indexes={index} change={changeIndex} id={"ad2"}/>
    </div>
  );
}

export default App;
