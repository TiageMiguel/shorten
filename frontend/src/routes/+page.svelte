<script lang="ts">
	import { toast } from 'svelte-sonner';
	import { Toaster } from '../components/ui/sooner';
	import { isValidHttpUrl } from '@/utils';

	export let inputURL = '';
	let responseURL = null;

	async function retriveShortenedURL() {
		if (!isValidHttpUrl(inputURL)) {
			return toast.error('The given URL is not valid!', {
				description: 'Please provide a valid URL.',
				duration: 4000,
				dismissable: true
			});
		}

		try {
			const response = await fetch('http://localhost:9000/api/shortener', {
				method: 'POST',
				body: JSON.stringify({ url: inputURL })
			});
			const data = await response.json();

			responseURL = data.id;
		} catch (error) {
			toast.error('An error has occurred!', {
				description: 'Cannot connect to the API endpoint.',
				duration: 4000,
				dismissable: true
			});
		}
	}
</script>

<Toaster />
<div class="flex flex-grow flex-col items-center justify-center py-24">
	<div class="container mx-auto">
		<h1 class="mb-4 text-center text-7xl font-bold tracking-tight">Shorten Your Links</h1>
		<h2 class="text-foreground/80 text-center text-3xl">
			Enter your long URL below and get a shortened version.
		</h2>
	</div>
	<div class="container max-w-3xl">
		<form
			class="background mt-12 flex w-auto flex-nowrap gap-4 overflow-hidden rounded-full border bg-white p-3"
		>
			<input
				class="w-full rounded-full pl-4 text-xl focus-visible:outline-none"
				type="text"
				name="url"
				placeholder="Enter your url"
				required
				bind:value={inputURL}
			/>
			<button
				class="text-nowrap rounded-full bg-sky-600 px-12 py-4 text-xl font-medium text-white transition-all hover:bg-sky-700"
				type="submit"
				on:click={retriveShortenedURL}
			>
				Get your new link
			</button>
		</form>
		{#if responseURL !== null}
			<p>{responseURL}</p>
		{/if}
	</div>
</div>
