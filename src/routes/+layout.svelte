<script lang="ts">
	import '../app.css';
	import Header from '../components/Header.svelte';
	import Sidebar from '../components/Sidebar.svelte';
	let sidebar = false;
</script>

<Header bind:sidebar />
<div
	class={(sidebar ? 'mt-10 ' : 'mt-20 ') +
		'flex flex-col gap-4 md:grid md:grid-cols-3 md:mt-32 mb-16'}
>
	<Sidebar {sidebar} />
	<slot />
</div>
