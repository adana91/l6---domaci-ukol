// tady je místo pro náš program
//https://kodim.cz/kurzy/javascript-vyuka/js-1/knihovny-vlastni-funkce/ulozky-na-doma


/*
Parsování data
to dáš
Bez použití knihovny dayjs napište funkci parseDate, která na vstupu 
obdrží řetězec obsahující datum ve formátu DD.MM.YYYY a vrátí objekt 
s jednotlivýnu částmi zadaného data. Příklad použití:

> parseDate('12.03.2015')
{ day: 12, month: 3, year: 2015 }
> parseDate('06.04.2021')
{ day: 6, month: 4, year: 2021 }
*/

/*let date = prompt('Zadejte datum ve tvaru "DD.MM.YYYY".');
let day = Number(date.slice(0,2));
let month = Number(date.slice(3,5));
let year = Number(date.slice(6,10));

let parseDate = {day, month, year}

console.log(parseDate);
*/

//let datum = prompt('Zadejte datum ve tvaru "DD.MM.YYYY".');
const parseDate = (datum) => {
	return {
		day: Number(datum.slice(0, 2)),
		month: Number(datum.slice(3, 5)),
		year: Number(datum.slice(6)),
	}
}




