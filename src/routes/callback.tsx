import { createEffect } from 'solid-js'
import { redirect, useLocation, useNavigate } from 'solid-start'

export default function callback() {
	const location = useLocation()
	const navigate = useNavigate()
	const code = location.query.code

	createEffect(async () => {
		if (typeof code !== 'string' || !code) {
			navigate('/403')
			return
		}

		try {
			const data = await fetch(
				`http://localhost:5000/api/sessions/oauth/github?code=${code}`
			).then((res) => res.json())
			console.log({ data })
			navigate('/auth')
		} catch (e) {
			console.error('Oof', e)
			navigate('/error')
		}
	})

	return null
}
