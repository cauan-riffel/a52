import "./Button.css";


const Button=(props)=>{
	const btnList=[];

	if(props.sendAllRight !== undefined){
		console.log(props.sendAllRight)
		btnList.push(<input key={0} type="button" onClick={()=>props.sendAllRight()} className="btn" value=">>"/>)
	}
	if(props.sendRight !== undefined){
		console.log(props.sendRight)
		btnList.push(<input key={1} type="button" onClick={()=>props.sendRight()} className="btn" value=">"/>)
	}
	if(props.sendLeft !== undefined){
		console.log(props.sendLeft)
		btnList.push(<input key={2} type="button" onClick={()=>props.sendLeft()} className="btn" value="<"/>)
	}
	if(props.sendAllLeft !== undefined){
		console.log(props.sendAllLeft)
		btnList.push(<input key={3} type="button" onClick={()=>props.sendAllLeft()} className="btn" value="<<"/>)
	}

	return (<div className="btnList">
		{btnList}
	</div>);
}



export default Button;
