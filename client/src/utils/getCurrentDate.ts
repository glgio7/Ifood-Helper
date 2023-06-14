const date = new Date();
const options: Intl.DateTimeFormatOptions = {
	day: "2-digit",
	month: "2-digit",
	hour: "2-digit",
	minute: "2-digit",
};

export const currentDate = date.toLocaleString("pt-BR", options);
