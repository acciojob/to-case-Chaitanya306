function toCase(text) {
  // write your code here
	let str='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
	let lower=''
	let upper=''
	for(const a of text){
		if(str.includes(a)){
			lower+=(a.toLowerCase())
			upper+=(a.toUpperCase())
		}
		else{
			lower+=(a)
			upper+=(a)
		}
	}
	return `${lower}-${upper}`
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
