<!-- 1. Assign current route's path to `pathname` prop -->
<script context="module">
  /** @type {import('@sveltejs/kit').Load} */
  export const load = async ({ url: { pathname } }) => ({
    props: { pathname },
  });
</script>

<script>
  import PageTransition from "$lib/components/PageTransition.svelte";
  export let pathname;
</script>

<div class="layout">
  <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
  </nav>

  <!-- 2. Pass `pathname` prop to the component so it knows when to transition -->
  <PageTransition {pathname}>
    <slot />
  </PageTransition>
</div>

<style>
  .layout {
    max-width: 64rem;
    margin: 1rem auto;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
</style>
