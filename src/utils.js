const propExist=(props,propName,component)=>{
	if (!(propName in props))console.error(`The propriety ${propName} must be passed to the ${component}`)
	return propName in props;
}







export {propExist};