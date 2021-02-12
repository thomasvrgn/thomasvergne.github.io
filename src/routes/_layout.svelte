<script>
	import Navbar from '../components/navbar.svelte';
	export let segment;
</script>


<Navbar {segment}/>
<main>
	<slot></slot>
</main>