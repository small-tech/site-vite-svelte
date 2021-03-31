<script>
  let count = 0
  const increment = () => {
    count += 1
  }
</script>

<button on:click={increment}>
  Clicks: {count}
</button>

<style>
  button {
    font-family: inherit;
    font-size: inherit;
    padding: 1em 2em;
    color: #388724;
    background-color: rgba(0, 255, 34, 0.1);
    border-radius: 2em;
    border: 2px solid rgba(0, 255, 34, 0);
    outline: none;
    width: 80vmin;
    font-variant-numeric: tabular-nums;
    cursor: pointer;
  }

  button:focus {
    border: 2px solid #388724;
  }

  button:active {
    background-color: rgba(0, 255, 34, 0.2);
  }
</style>
