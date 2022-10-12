<script>
  import '../styles/global.css';
</script>

<main>
  <slot />
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    padding: 2rem 1rem;
  }
</style>
