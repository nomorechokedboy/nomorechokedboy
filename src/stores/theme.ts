import { createRoot, createSignal } from 'solid-js'
import { createCookieSessionStorage } from 'solid-start'

type AppTheme = 'light' | 'dark' | 'os'

// export const theme = createCookieSessionStorage({
// 	cookie: {
// 		name: 'theme',
// 		secure: false,
// 		sameSite: 'strict',
// 		path: '/',
// 		httpOnly: false
// 	}
// })

function createThemeStore() {
	const themeLocal: AppTheme =
		typeof browser !== 'undefined'
			? (localStorage.getItem(
					'slearningTheme'
			  ) as AppTheme | null) || 'light'
			: 'light'

	const [theme, setTheme] = createSignal<AppTheme>(themeLocal)
	return { theme, setTheme }
}

export default createRoot(createThemeStore)
