import "./Button.css";

const Button=(props)=>{

	const btnList=[];


	if(props.sendAllRight !== undefined){
		btnList.push(<input key={btnList.length} type="button" onClick={props.sendAllRight()} className="btn" value=">>"/>)
	}
	if(props.sendRight !== undefined){
		btnList.push(<input key={btnList.length} type="button" onClick={props.sendRight()} className="btn" value=">"/>)
	}
	if(props.sendLeft !== undefined){
		btnList.push(<input key={btnList.length} type="button" onClick={props.sendLeft()} className="btn" value="<"/>)
	}
	if(props.sendAllLeft !== undefined){
		btnList.push(<input key={btnList.length} type="button" onClick={props.sendAllLeft()} className="btn" value="<<"/>)
	}


	return (<div className="btnList">
		{btnList}
	</div>);
}







export default Button;
