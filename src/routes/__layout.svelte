<script>
  import PageTransition from "$lib/components/PageTransition.svelte"
  export let key
</script>

<!-- 1. Assign current route's path to `key` prop -->
<script context="module">
  export const load = async ({ page }) => ({
    props: {
      key: page.path,
    },
  })
</script>

<div class="layout">
  <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
  </nav>

  <!-- 2. Pass `key` prop to the component so it knows when to transition -->
  <PageTransition refresh={key}>
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
