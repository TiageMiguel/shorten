<script lang="ts">
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div class="container flex max-w-6xl flex-grow items-center justify-center">
	<div class="flex w-full flex-col gap-4 md:flex-row">
		<div class="flex flex-1 flex-col gap-2 rounded-3xl border p-12 shadow-lg">
			<div class="flex flex-1 flex-col justify-end gap-1">
				<p class="text-3xl font-medium">{data.memoryUsage}</p>
				<p class="text-black/80">Memory Usage</p>
			</div>
			<div class="flex flex-1 flex-col justify-end gap-1">
				<p class="text-3xl font-medium">{data.memoryFree}</p>
				<p class="text-black/80">Memory Free</p>
			</div>
			<div class="flex flex-1 flex-col justify-end gap-1">
				<p class="text-3xl font-medium">{data.memoryTotal}</p>
				<p class="text-black/80">Memory Total</p>
			</div>
		</div>
		<div class="flex flex-col gap-4">
			<div class="flex aspect-square flex-col justify-end gap-1 rounded-3xl border p-12 shadow-lg">
				<p class="text-3xl font-medium">{data.timestamp}</p>
				<p class="text-black/80">Requested at</p>
			</div>

			<div class="flex aspect-square flex-col justify-end gap-1 rounded-3xl border p-12 shadow-lg">
				<p class="text-3xl font-medium">{data.upTime}</p>
				<p class="text-black/80">Uptime</p>
			</div>
		</div>
	</div>
</div>
