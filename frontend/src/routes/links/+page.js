/** @type {import('./$types').PageLoad} */
export async function load() {
	let data = [];

	try {
		const response = await fetch('http://localhost:9000/api/shortener/all');
		data = await response.json();
	} catch (error) {
		return {
			status: 'Error'
		};
	}

	return {
		...data
	};
}
