<script lang="ts">
  let name = "";
</script>

<div>
  <input placeholder="Your name" bind:value={name} />
  <div>Hello, {name}!</div>
</div>