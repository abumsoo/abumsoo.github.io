<script>
	import Card from '../components/Card.svelte';
	import { base } from '$app/paths';
</script>

<div class="col-span-1 flex flex-col gap-8">
	<!-- Item 1 -->
	<Card
		altText="tic tac toe board"
		image={base + '/images/gameplay.png'}
		title="Tic Tac Toe"
		url="https://abumsoo.github.io/tic-tac-toe"
	/>
	<Card
		altText="what the bin gameplay"
		image={base + '/images/whatTheBin.png'}
		title="What The Bin"
		url="https://github.com/abumsoo/csci1300-whatthebin"
	/>
	<Card
		altText="digital library UI"
		image={base + '/images/digilib.png'}
		title="Digital Library"
		url="https://abumsoo.github.io/library"
	/>
	<Card
		altText="Command line interface for SSB4 BST"
		image={base + '/images/ssb4.png'}
		title="Super Smash Bros 4 BST"
		url="https://github.com/abumsoo/Kim_CSCI2270_FinalProject"
	/>
</div>
