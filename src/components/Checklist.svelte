<script>
    export let data = [];

    // LIBS
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';
    // lets you split local storage by repo on githubpages hosted sites
    import 'https://tomashubelbauer.github.io/github-pages-local-storage/index.js';

    // console.log('CHECKLIST DATA: ', data)

    // VARS
    // gh-pages needs to ensure localStorage isn’t empty – we'll set a default dataset.
    const checklist = writable([{"flag":"","list":"","wine":"","source":"","price":"","checked":false},]);

    // LIGHTS! CAMERA! ACTION!
    onMount(init);

    // FUNCTIONS
    function init() {
        // console.log('CHECKLIST INIT!');
        let storedChecklist = JSON.parse(localStorage.getItem('checklist'));

        if (!storedChecklist || !Array.isArray(storedChecklist) || storedChecklist.length === 0) {
            storedChecklist = data; // Fallback to default data
            localStorage.setItem('checklist', JSON.stringify(storedChecklist)); // Save it to localStorage
        }

        checklist.set(storedChecklist);

        // subscribe to changes & update localStorage
        checklist.subscribe(value => {
            localStorage.setItem('checklist', JSON.stringify(value));
        });
    }

    function toggleCheck(index) {
        checklist.update(items => {
            return items.map((item, i) => i === index ? { ...item, checked: !item.checked } : item);
        });
    }
</script>

<div class="local-list">
    <p class="section-head">🇨🇦  12 Canadian wines to try  🇨🇦</p>
    <p class="section-copy">Picking the best local wines is fast becoming a challenge. Here is a look at some of the do-not-miss local heroes being poured at the festival.</p>

    <ul class="wine-list">
        {#each $checklist as item, index}
            {#if item.list === 'local'}
            <li>
                <label>
                    <input type="checkbox" checked={item.checked} on:change={() => toggleCheck(index)} />
                    <span class="name">
                        <span>{item.flag}</span>
                        <span class="wine">{item.wine}</span>
                    </span>
                    <p class="details">
                        <span>{item.source}</span>
                        <span class="price">{item.price}</span>
                    </p>
                </label>
            </li>
            {/if}
        {/each}
    </ul>
</div>

<div class="global-list">
    <p class="section-head">🌎 VIFW’s 12 must-visit booths 🌎</p>
    <p class="section-copy">Our annual best booths list is an ode to wineries that bring their best Vancouver. Here’s a list of producers pouring their best in 2025, including one super pick from their line-up. Don’t forget to taste them all.</p>
    <ul class="wine-list">
        {#each $checklist as item, index}
            {#if item.list === 'global'}
            <li>
                <label>
                    <input type="checkbox" checked={item.checked} on:change={() => toggleCheck(index)} />
                    <span class="name">
                        <span>{item.flag}</span>
                        <span class="wine">{item.wine}</span>
                    </span>
                    <p class="details">
                        <span>{item.source}</span>
                        <span class="price">{item.price}</span>
                    </p>
                </label>
            </li>
            {/if}
        {/each}
    </ul>
</div>


<style>
    /* SECTIONS  */
    .global-list {
        margin-top: 15px
    }
    .section-head {
        color: var(--grey02) !important;
        font-family: 'BentonSansCond-RegItalic' !important;
        font-size: 1.3rem;
        margin-bottom: 7px;
        text-align: center;
        text-transform: uppercase;
    }
    .section-copy {
        text-align: center;
    }
    /* LIST */
    .wine-list li {
        margin-bottom: 7px;
    }
    .wine-list .details {
        margin: 3px 0 0 20px;
    }
    .wine-list .wine {
        font-family: 'BentonSansCond-Bold';
    }
    ul {
        list-style: none;
        padding: 15px 0;
    }
    li {
        margin: 0.5rem 0;
    }
</style>