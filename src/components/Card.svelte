<script lang="ts">
	export let url: string;
	export let title: string;
	export let image: string;
	export let altText: string;
</script>

<div class="col-span-1 flex flex-col gap-8 mx-4">
	<!-- Item 1 -->
	<a class="flex flex-col gap-4" href={url}>
		<h3 class="text-2xl">{title}</h3>
		<div class="card">
			{#if image !== undefined}
				<img class="rounded max-h-[100%] max-w-[100%]" src={image} alt={altText} />
			{/if}
		</div>
	</a>
</div>
