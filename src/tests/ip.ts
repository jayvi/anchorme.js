import {isPort} from "../util";

// general IP pattern https://regex101.com/r/rzUcJ4/1
const pattern = /^(\d{1,3}\.){3}\d{1,3}(:\d{1,5})?(\/([a-z0-9\-._~:\/\?#\[\]@!$&'\(\)\*\+,;=%]+)?)?$/i;

export default function (str:string):boolean {


	
	if(!pattern.test(str)) return false;

	var IPArray = str.split(".");

	// validate oc1
	var oc1 = Number(IPArray[0]);
	if((isNaN(oc1)) || oc1 > 255 || oc1 < 0) return false;
	
	// validate oc2
	var oc2 = Number(IPArray[1]);
	if((isNaN(oc2)) || oc2 > 255 || oc2 < 0) return false;

	// validate oc3
	var oc3 = Number(IPArray[2]);
	if((isNaN(oc3)) || oc3 > 255 || oc3 < 0) return false;

	// validate oc4
	var oc4:number = Number((IPArray[3].match(/^\d+/)||[])[0]);
	if((isNaN(oc4)) || oc4 > 255 || oc4 < 0) return false;

	// validate port
	var port = (IPArray[3].match(/(^\d+)(:)(\d+)/)||[])[3];
	if(port && (!isPort(port))) return false;

	return true;
}