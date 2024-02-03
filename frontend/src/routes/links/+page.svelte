<script>
	import Button from '../../components/ui/button/button.svelte';
	import ListItem from '../../components/ui/list/list-item.svelte';
	import List from '../../components/ui/list/list.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div class="container max-w-5xl flex-grow py-12">
	<h1 class="mb-2 text-6xl font-medium">Generated links.</h1>
	<p class="text-xl">Here you can find a list of all generated links.</p>

	<List>
		{#each Object.entries(data) as [key, item]}
			<ListItem title={item.createdAt} url={item.url} slug={item.id} />
		{/each}
	</List>
</div>
