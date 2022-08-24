<script>
	import PageTransition from '$lib/components/PageTransition.svelte';

	/** @type {import('./$types').LayoutData} */
	export let data;
</script>

<div class="layout">
	<nav>
		<a href="/">Home</a>
		<a href="/about">About</a>
	</nav>

	<PageTransition pathname={data.pathname}>
		<slot />
	</PageTransition>
</div>

<style>
	.layout {
		max-width: 64rem;
		margin: 1rem auto;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
			'Open Sans', 'Helvetica Neue', sans-serif;
	}
</style>
