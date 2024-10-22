<script>
	export let data;
</script>

<style>
	summary {
		list-style-type: "+";
	}
	details[open] > summary {
		list-style-type: "-";
	}
</style>

<div class="stackable">
	{#each data.summaries as { name, href, description }}
		<div class="stackeditem">
			<details>
				<summary>{name}</summary>
				<div>
					<p>{description}</p>
					<a href={href}>Source</a>
					<a href='projects/bunny-poop'>Demo</a>
				</div>
			</details>
		</div>
	{/each}
</div>