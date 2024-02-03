<script>
	import '../app.pcss';
	import Header from '../components/page/header.svelte';
</script>

<main class="flex min-h-screen flex-col bg-white">
	<Header />
	<slot />
</main>
