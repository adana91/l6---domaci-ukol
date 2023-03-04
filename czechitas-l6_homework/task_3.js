// tady je místo pro náš program
//https://kodim.cz/kurzy/javascript-vyuka/js-1/knihovny-vlastni-funkce/ulozky-na-doma

const round = (number) => {
	let decimal = (number - Math.floor(number)); // defines tha part after the decimal 
	let truncated = Math.trunc(number); // different option besider Math.floor(number) to return the part before decimal point
	//a 
	if (decimal < 0.5) {
		return truncated
	} else {
		//b
		if (decimal > 0.5) {
			return (truncated + 1)
		} else {
			//c
			if (truncated % 2 == 0) {
				return truncated
			} else {
				return (truncated + 1)
			}
		}
	}
}