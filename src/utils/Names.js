const isIn=(indexes, x)=>{
	for(let i of indexes.indexes){
		if(i===x)return true;
	}
	return false;
}




export {isIn}