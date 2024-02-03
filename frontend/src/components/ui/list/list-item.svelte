<script lang="ts">
	import { onMount } from 'svelte';
	import { Button, buttonVariants } from '../button';
	import * as Dialog from '../dialog';
	import { isValidHttpUrl } from '@/utils';

	export let url: string;
	export let slug: string;

	let editedURL = url;
	let editedURLError = false;
	let slugAsPath = ``;
	let deleted = false;
	let dialogEditOpen = false;
	let dialogDeleteOpen = false;

	async function onUpdate() {
		if (!isValidHttpUrl(editedURL)) {
			editedURLError = true;
			return;
		}

		try {
			var res = await fetch('http://localhost:9000/api/shortener/', {
				method: 'PUT',
				body: JSON.stringify({ id: slug, url: editedURL })
			});
			var data = await res.json();

			url = data.url;
			editedURL = url;
			dialogEditOpen = false;
		} catch (error) {
			dialogEditOpen = false;
		}
	}

	async function onDelete() {
		try {
			var res = await fetch('http://localhost:9000/api/shortener/', {
				method: 'DELETE',
				body: JSON.stringify({ id: slug })
			});
			var data = await res.json();

			deleted = data.deleted;
			dialogDeleteOpen = false;
		} catch (error) {
			dialogDeleteOpen = false;
		}
	}

	onMount(() => (slugAsPath = `${window.location.origin}/${slug}`));
</script>

{#if !deleted}
	<li class="flex flex-col gap-2 py-4 sm:flex-row">
		<div class="flex flex-1 flex-col">
			<a class="text-lg font-medium" href={slugAsPath}>{slugAsPath}</a>
			<a class="text-sm" href={url}>{url}</a>
		</div>
		<div class="flex items-start gap-2">
			<Button size="sm" variant="info">
				<a href={slugAsPath}>View</a>
			</Button>

			<Button size="sm" variant="warning" on:click={() => (dialogEditOpen = true)}>Edit</Button>
			<Button size="sm" variant="destructive" on:click={() => (dialogDeleteOpen = true)}>
				Delete
			</Button>

			<Dialog.Root bind:open={dialogEditOpen}>
				<Dialog.Content>
					<Dialog.Header>
						<Dialog.Title>Your about to change this shortned url</Dialog.Title>
						<div class="flex flex-col gap-4 pt-3">
							<div class="flex w-full flex-col gap-1">
								<span class="text-sm font-medium">Slug (You cannot change)</span>
								<input
									type="text"
									value={slug}
									disabled
									class="w-full rounded-full bg-gray-200 px-4 py-2"
								/>
							</div>
							<div class="flex w-full flex-col gap-1">
								<span class="text-sm font-medium">Fix the URL, change it</span>
								<input
									type="text"
									bind:value={editedURL}
									class="w-full rounded-full bg-gray-100 px-4 py-2"
								/>
							</div>
						</div>
						<Dialog.Footer class="pt-8">
							<Button on:click={() => (dialogEditOpen = false)}>Cancel</Button>
							<Button variant="warning" on:click={onUpdate}>Save Edit</Button>
						</Dialog.Footer>
					</Dialog.Header>
				</Dialog.Content>
			</Dialog.Root>

			<Dialog.Root bind:open={dialogDeleteOpen}>
				<Dialog.Content>
					<Dialog.Header>
						<Dialog.Title>Are you sure absolutely sure?</Dialog.Title>
						<Dialog.Description>
							This action cannot be undone. This will permanently delete this shortned link from
							existence!
						</Dialog.Description>
						<Dialog.Footer class="pt-8">
							<Button on:click={() => (dialogDeleteOpen = false)}>Cancel</Button>
							<Button variant="destructive" on:click={onDelete}>Delete</Button>
						</Dialog.Footer>
					</Dialog.Header>
				</Dialog.Content>
			</Dialog.Root>
		</div>
	</li>
{/if}
