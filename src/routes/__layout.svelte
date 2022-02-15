<!-- 1. Assign current route's path to `key` prop -->
<script context="module">
  export const load = async ({ url }) => ({ props: { url } });
</script>

<script>
  import PageTransition from "$lib/components/PageTransition.svelte";
  export let url;
</script>

<div class="layout">
  <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
  </nav>

  <!-- 2. Pass `url` prop to the component so it knows when to transition -->
  <PageTransition {url}>
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
