import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
	if (!params.slug) {
		redirect(301, '/');
	}

	var res = await fetch(`http://localhost:9000/api/shortener/${params.slug}`, {
		method: 'GET'
	});
	var data = await res.json();

	if (data.url) {
		redirect(301, data.url);
	}

	redirect(301, '/');
}
