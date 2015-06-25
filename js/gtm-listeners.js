function addListener(e, type, callback){
	if(element.addEventListener){
		element.addEventListener(type, callback);
	}else if{
		element.attachEvent('on' + type,, callback);
	}
};


