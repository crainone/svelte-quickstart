<script>
	import NavBar from '$lib/NavBar/NavBar.svelte';
</script>

<style>
	div {
		margin: 20px 40px;
	}
</style>
<NavBar />

<div>
	<slot></slot>
</div>

<footer>v1.0.2</footer>