import "./Button.css";


import { propExist } from "../../utils";


const Button=(props)=>{
	if(!(propExist(props,"left","Button")||propExist(props,"left","Button")))return;

	const btnList=[];

	if(props.sendAllRight !== undefined){
		btnList.push(<input key={0} type="button" onClick={()=>props.sendAllRight(props.left,props.right)} className="btn" value=">>"/>)
	}
	if(props.sendRight !== undefined){
		btnList.push(<input key={1} type="button" onClick={()=>props.sendRight(props.left,props.right)} className="btn" value=">"/>)
	}
	if(props.sendLeft !== undefined){
		btnList.push(<input key={2} type="button" onClick={()=>props.sendLeft(props.left,props.right)} className="btn" value="<"/>)
	}
	if(props.sendAllLeft !== undefined){
		btnList.push(<input key={3} type="button" onClick={()=>props.sendAllLeft(props.left,props.right)} className="btn" value="<<"/>)
	}

	return (<div className="btnList">
		{btnList}
	</div>);
}



export default Button;
