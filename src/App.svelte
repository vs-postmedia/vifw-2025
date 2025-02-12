<script>
    // COMPONENTS
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';
    import Checklist from '$components/Checklist.svelte';
    import data from '$data/data.js';


    async function init() {
        console.log('APP INIT')
        console.log('APP DATA: ', data)
        // clear local storage
        // localStorage.removeItem("checklist");
    }

    // onMount(init);
</script>

<header>
    <!-- <h1>24 must-try wines at the 2025 Vancouver International Wine Festival tasting room</h1> -->
    <!-- <p class="subhead">Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> -->
</header>

<main>
    <Checklist data={data.all} />
</main>
  
<style>
    @import '$css/normalize.css';
    @import '$css/fonts.css';
    @import '$css/colors.css';
    @import '$css/app.css';

    header {
		margin-bottom: 2rem;
	}
	header > h1 {
		text-align: center;
	}
	/* header .subhead {
		margin: 0 auto;
		max-width: 525px;
		text-align: center;
	} */

</style>
