<script>
    export let data = [];

    // LIBS
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';

    // VARS
    const storedChecklist = JSON.parse(localStorage.getItem('checklist')) || data;
    const checklist = writable(storedChecklist);

    // subscribe to changes & update localStorage
    checklist.subscribe(value => {
        localStorage.setItem('checklist', JSON.stringify(value));
    });

    // functions
    function toggleCheck(index) {
        checklist.update(items => {
            return items.map((item, i) => i === index ? { ...item, checked: !item.checked } : item);
        });
    }

    // FUNCTIONS
    function init() {
        console.log('CHECKLIST INIT!')
    }

    // LIGHTS! CAMERA! ACTION!
    onMount(init);
</script>

<main>
    <ul class="wine-list">
        {#each $checklist as item, index}
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
        {/each}
    </ul>
</main>


<style>
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
        padding: 0;
    }
    li {
        margin: 0.5rem 0;
    }
</style>