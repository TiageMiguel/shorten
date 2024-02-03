<script>
	import Button from '../ui/button/button.svelte';
</script>

<header class="sticky inset-x-0 top-0 border-b">
	<div class="container flex items-center justify-between rounded-full bg-white py-2">
		<a
			href="/"
			class="text-3xl font-medium -tracking-wider transition-all duration-500 hover:tracking-wider"
			>Shorten.</a
		>
		<nav class="flex gap-1">
			<Button>
				<a href="/system-health">System Health</a>
			</Button>
			<Button>
				<a href="/links">Generated Links</a>
			</Button>
		</nav>
	</div>
</header>
