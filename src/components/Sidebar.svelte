<script>
	import { page } from '$app/stores';
</script>

<div class="sidebar">
	<!-- Sidebar -->
	<ul class="flex flex-col gap-4">
		<li>
			<a href="/"><h2 class="text-2xl" class:active={$page.url.pathname === '/'}>Projects</h2></a>
		</li>
		<li>
			<a href="/blog"
				><h2 class="text-2xl" class:active={$page.url.pathname === '/blog'}>Blog</h2></a
			>
		</li>
		<li>
			<a href="/about"
				><h2 class="text-2xl" class:active={$page.url.pathname === '/about'}>About</h2></a
			>
		</li>
	</ul>
	<div class="text-lg">
		<a class="block" target="_blank" href="https://www.linkedin.com/in/bumskim">LinkedIn</a>
		<a class="block" target="_blank" href="https://github.com/abumsoo">GitHub</a>
	</div>
</div>
