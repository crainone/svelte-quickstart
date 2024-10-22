<script>
    import github from '$lib/assets/Github_Logo.png';

    const blades = [
        {"hero": undefined, "content": "Try some demos!","link":"/projects"},
        {"hero": github, "content": "See all source code on GitHub!","link":"https://github.com/crainone/"},
        {"hero": undefined, "content": "Have a question? Just ask.", "link": "/contact"}
    ]
</script>

<style>
    .blade:nth-child(even) {
        background-color: rgb(205,205,205)
    }
    .blade:nth-child(odd) {
        background-color: rgb(255, 255, 255);
    }
</style>

{#each blades as blade}
    <div class="blade" style:background-image={blade.hero}>
        <p>{blade.content}</p>
        <a href={blade.link}><div>More</div></a>
    </div>
{/each}