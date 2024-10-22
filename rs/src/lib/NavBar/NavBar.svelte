<script>
    import { page } from '$app/stores';

    const links = [
        {"href":"", "title": "Home"},
        {"href":"projects", "title": "Projects"},
        {"href":"blog", "title": "Blog"},
        {"href":"contact", "title": "Contact"}
    ]

</script>

<style>
    nav {
        display: block;
        background-image: url('banner-wide.png');
        background-repeat: no-repeat;
        background-size: contain;
        background-position-x: right;
        background-color: rgb(172,32,40);
    }
    .active {
        border-bottom: solid 10px rgb(131,25,30);
    }
    li a {
        color: white;
        text-decoration: none;
        text-align: center;
        display: block;
        padding: 14px 16px;
        border-bottom: solid 10px rgb(172,32,40);
    }
    li a:hover {
        background-color: rgb(131, 25, 30);
        border-bottom: solid 10px rgb(131,25,30);
    }
    li {
        float: left;
    }
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
    }
</style>

<nav>
    <ul>
    {#each links as link}
        <li><a href=/{link.href} class:active={$page.url.pathname.split('/')[1] == link.href}>{link.title}</a></li>
    {/each}
    </ul>
</nav>