export function getGitHubUrl(from: string) {
	const rootURl = 'https://github.com/login/oauth/authorize'

	const options = {
		client_id: import.meta.env.VITE_GITHUB_OAUTH_CLIENT_ID,
		redirect_uri: import.meta.env.VITE_GITHUB_OAUTH_REDIRECT,
		scope: 'user:email',
		state: from
	}

	const qs = new URLSearchParams(options)

	return `${rootURl}?${qs.toString()}`
}
