import { useState } from "react";

import "./Names.css";
import { isIn } from "../../utils/Names";
import { propExist } from "../../utils";

const Names=(props)=>{
	if(!(propExist(props,"names","Names")||
			 propExist(props,"indexes","Names")||
			 propExist(props,"change","Names")||
			 propExist(props,"id","Names")))return;

	const names=[];

	for(let x=0;x<props.names.length;x++){
		if(isIn(props.indexes,x)){
			names.push(<p key={x} onClick={(event)=>props.change(event.shiftKey,event.ctrlKey,x,props.id)} className="selected" >{props.names[x]}</p>);
		}else{
			names.push(<p key={x} onClick={(event)=>props.change(event.shiftKey,event.ctrlKey,x,props.id)}>{props.names[x]}</p>);
		}
	}

	return (<div className="names">
		{names}
	</div>);
}

export default Names;
