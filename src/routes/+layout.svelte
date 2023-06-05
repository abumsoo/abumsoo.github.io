<script>
	import '../app.css';
	import Header from '../components/Header.svelte';
	import Sidebar from '../components/Sidebar.svelte';
</script>

<Header />
<div class="grid grid-cols-3 mt-32 mb-16">
	<Sidebar />
	<slot />
</div>
