import { useState } from "react";

import "./Names.css";


const Names=(props)=>{
	if(props.names===undefined){
		console.error("Prop names isn't sended to the class!");
		return;
	}
	if(props.selected===undefined){
		console.error("Prop selected isn't sended to the class!");
		return;
	}
	if(props.change===undefined){
		console.error("Prop change isn't sended to the class!");
		return;
	}
	const names=[];

	for(let x=0;x<props.names.length;x++){
		names.push(<p key={x} onClick={(event)=>props.change(event.shiftKey,x)} className={props.selected===x?"selected":""}>{props.names[x]}</p>)
	}

	return (<div className="names">
		{names}
	</div>);
}




export default Names;
