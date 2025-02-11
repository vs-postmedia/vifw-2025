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

    onMount(init);

    // VARS
    const local = data.local;
    const global = data.global;
</script>

<header>
    <h1>24 must-try wines at the 2025 Vancouver International Wine Festival tasting room</h1>
    <!-- <p class="subhead">Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> -->
</header>

<main>
    <p class="section-head">12 Canadian wines to try</p>
    <p class="section-copy">Picking the best local wines is fast becoming a challenge. Here is a look at some of the do-not-miss local heroes being poured at the festival.</p>
    
    <Checklist data={local} />
</main>

<footer>
    <p class="note">NOTE: tk.</p>
    <p class="source">Source:  <a href="https:vancouversun.com" target="_blank">TK</a></p>
</footer>
  
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

    /*  */
    .section-head {
        color: var(--grey02) !important;
        font-family: 'BentonSansCond-RegItalic' !important;
        font-size: 1.35rem;
        margin-bottom: 7px;
        text-transform: uppercase;
    }
</style>
