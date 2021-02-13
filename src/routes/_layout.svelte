<script>
	import Navbar from '../components/navbar.svelte';
	export let segment;
</script>

<svelte:head>
	<title>Thomas</title>
</svelte:head>

<Navbar {segment}/>
<main>
	<slot></slot>
</main>