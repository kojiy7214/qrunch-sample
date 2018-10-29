const logger = require('jsclass-logger')({}, "qrunch-sample");

class Watch{
	constructor(obj){
		let handler = {
			get:function(target, key, recv){
				logger.debug(target);
				logger.debug(key);
				logger.debug(recv);
				let retval = Reflect.get(target, key, recv);
				return retval;
			}
		};

		if ( ! obj ){
			obj = this;
		}
		
		return new Proxy(new Proxy(obj,{}), handler);
	}
}

module.exports.Watch = Watch;
