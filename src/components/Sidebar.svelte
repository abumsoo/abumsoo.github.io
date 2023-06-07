<script>
	import { page } from '$app/stores';
	import { base } from '$app/paths';
</script>

<div class="sidebar">
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
