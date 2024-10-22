/**
 * @type {any[] | null}
 */
let data = null;

export async function load({ fetch, setHeaders }) {
   setHeaders({
        'cache-control': 'max-age=3600' // 3600 seconds, replace with your preferred length.
    });

	if (data == null) {
        const response = await fetch('https://api.github.com/users/crainone/repos');
		console.log('refresh');
	    data = await response.json();
		if (data == null) {
			data = []
		}
    }
    return {
		summaries: data.map((project) => ({
			name: project.name,
			href: project.html_url,
			description: project.description
		}))
	};
}