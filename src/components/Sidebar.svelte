<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	export let sidebar: boolean;
</script>

<!-- <div
	class={(sidebar ? 'flex flex-col gap-4 ' : 'hidden ') +
		'bg-pg-grey-light md:flex flex-col col-span-1 justify-self-center md:border rounded border-pg-blue md:h-[768px] md:w-[250px] items-start md:items-center place-content-between py-8 pl-4 md:pl-0'}
> -->
<div
	class={(sidebar ? 'flex flex-col gap-4 ' : 'hidden ') +
		'md:flex md:flex-col md:col-span-1 md:h-[768px] md:w-[250px] md:items-center md:justify-self-center md:place-content-between bg-pg-grey-light justify-self-center pl-7 md:pl-0 md:border rounded border-pg-blue items-start place-content-between py-8'}
>
	<!-- Sidebar -->
	<ul class="flex flex-col gap-4">
		<li>
			<a href={base + '/'}
				><h2 class="text-2xl" class:active={$page.url.pathname === base + '/'}>Projects</h2></a
			>
		</li>
		<li>
			<a href={base + '/blog'}
				><h2 class="text-2xl" class:active={$page.url.pathname === base + '/blog'}>Blog</h2></a
			>
		</li>
		<li>
			<a href={base + '/about'}
				><h2 class="text-2xl" class:active={$page.url.pathname === base + '/about'}>About</h2></a
			>
		</li>
	</ul>
	<div class="text-lg">
		<a class="block" target="_blank" href="https://www.linkedin.com/in/bumskim">LinkedIn</a>
		<a class="block" target="_blank" href="https://github.com/abumsoo">GitHub</a>
	</div>
</div>
