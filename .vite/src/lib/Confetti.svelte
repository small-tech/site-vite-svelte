<script>
  import { onMount } from 'svelte'

  // A very basic Svelte component to show that things are working.
  import confetti from 'canvas-confetti'

  onMount(() => {
    confetti({
      particleCount: 150,
      spread: 100
    })
  })
</script>
