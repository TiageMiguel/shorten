<div class="flex flex-grow flex-col items-center justify-center py-24">
	<div class="container mx-auto">
		<h1 class="mb-4 text-center text-7xl font-bold">Shorten Your Links</h1>
		<h2 class="text-foreground/80 text-center text-3xl">
			Enter your long URL below and get a shortened version.
		</h2>
	</div>
	<div class="container max-w-3xl">
		<form
			class="background mt-12 flex w-auto flex-nowrap gap-4 overflow-hidden rounded-full bg-white p-3"
		>
			<input
				class="w-full rounded-full pl-4 text-xl focus-visible:outline-none"
				type="text"
				name="url"
				placeholder="Enter your url"
				required
			/>
			<button
				class="text-nowrap rounded-full bg-sky-600 px-12 py-4 text-xl font-medium text-white transition-all hover:bg-sky-700"
				type="submit"
			>
				Get your new link
			</button>
		</form>
	</div>
</div>
