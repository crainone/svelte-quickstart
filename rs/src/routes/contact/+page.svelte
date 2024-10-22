<script>
    import linkedin from '$lib/assets/LI-Logo.png';
    import github from '$lib/assets/GitHub_Logo.png';
    import stackoverflow from '$lib/assets/logo-stackoverflow.png';

    const connections = [
        {"img": linkedin, "name": "@caitlin-rainone", "href": "https://www.linkedin.com/in/caitlin-rainone/"},
        {"img": github, "name": "@crainone", "href": "https://github.com/crainone/"},
        {"img": stackoverflow, "name": "@caitlin-rainone", "href": "https://stackoverflow.com/users/6336035/caitlin-rainone/"},
        {"name": "wisdomdaisy.com", "href": "http://www.wisdomdaisy.com/"},
        {"name": "contact@rainonesoftware.com", "href": "mailto:contact@rainonesoftware.com"}
    ]
</script>


<style>
    img {
        display: block;
        margin: 0 auto;
        max-width:100%;
        height: auto;
    }
    a {
        text-decoration: none;
    }
</style>


<div class="stackable">
    {#each connections as connection}
        <a href={connection.href}>
            <div class="connectionitem stackeditem">
                {#if connection.img}<img src={connection.img} alt={connection.name} />{/if}
                <p>{connection.name}</p>
            </div>
        </a>
    {/each}
</div>