<script lang="ts">
	export let sidebar: boolean;
	function toggleSidebar() {
		sidebar = !sidebar;
	}
</script>

<header class="bg-pg-grey-light py-4 fixed w-full z-10 top-0">
	<div class="flex md:grid md:grid-cols-3">
		<div class="md:col-span-1 flex items-center justify-center">
			<span class="md:hidden mx-8" on:click={() => toggleSidebar()}>Menu</span>
			<a href="#" class="text-pg-pink font-bold text-lg"><h1 class="text-xl">abumsoo</h1></a>
		</div>
		<!-- <div class="col-span-1 flex items-center justify-self-center w-full">
      <input
        type="text"
        placeholder="Search"
        class="rounded py-2 px-4 focus:outline-none focus:ring-1 focus:ring-pg-blue border border-pg-blue bg-pg-grey-dark w-full"
      />
    </div> -->
	</div>
</header>
