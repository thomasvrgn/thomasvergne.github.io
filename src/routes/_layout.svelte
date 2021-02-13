<script>
	import Navbar from '../components/navbar.svelte';
</script>

<svelte:head>
	<title>Thomas</title>
</svelte:head>

<Navbar/>
<main>
	<slot></slot>
</main>