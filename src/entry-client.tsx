import { inject } from '@vercel/analytics'
import { mount, StartClient } from 'solid-start/entry-client'

mount(() => {
	inject()
	return <StartClient />
}, document)
