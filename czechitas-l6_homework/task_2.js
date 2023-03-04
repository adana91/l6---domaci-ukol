// tady je místo pro náš program
//https://kodim.cz/kurzy/javascript-vyuka/js-1/knihovny-vlastni-funkce/ulozky-na-doma


/*
Formátování data
zapni hlavu
Bez použití knihovny dayjs napište funkci formatDate, která na 
vstupu obdrží objekt představující datum v následujícím formátu.
{ day: 12, month: 3, year: 2015 }
*/


const formatDate = (datum) => {
	return datum.day.toString().padStart(2, '0') 
	+ "." + datum.month.toString().padStart(2, '0')
	+ "." + datum.year
}