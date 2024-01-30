<script>
	import '../app.pcss';
	import Header from '../components/header.svelte';
</script>

<main class="bg-custom-gradient flex h-screen flex-col">
	<Header />
	<slot />
</main>
