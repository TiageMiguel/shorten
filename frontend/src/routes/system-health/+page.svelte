<script lang="ts">
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div class="container flex flex-grow items-center justify-center">
	<div class="flex w-full flex-row gap-2">
		<div class="flex-1 rounded-3xl bg-red-600 p-12">
			{data.upTime}
		</div>
		<div class="grid flex-1 grid-cols-2 gap-2">
			<div class="col-span-1 aspect-square rounded-3xl bg-red-600 p-12">
				{data.timestamp}
			</div>
			<div class="col-span-1 aspect-square rounded-3xl bg-red-600 p-12">
				{data.memoryUsage}
			</div>
			<div class="col-span-1 aspect-square rounded-3xl bg-red-600 p-12">
				{data.memoryTotal}
			</div>
			<div class="col-span-1 aspect-square rounded-3xl bg-red-600 p-12">
				{data.memoryFree}
			</div>
		</div>
	</div>
</div>
