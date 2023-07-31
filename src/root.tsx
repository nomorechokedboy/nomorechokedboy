// @refresh reload
import '@fontsource/poppins/300.css'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/700.css'
import { Suspense } from 'solid-js'
import {
	Body,
	ErrorBoundary,
	FileRoutes,
	Head,
	Html,
	Meta,
	Routes,
	Scripts,
	Title
} from 'solid-start'
import '~/root.css'
import { themeStore } from '~/stores'

export default function Root() {
	const { theme } = themeStore

	return (
		<Html class={theme()} lang='en'>
			<Head>
				<Title>
					Le Ho Hai Duong | Fullstack Developer
				</Title>
				<Meta charset='utf-8' />
				<Meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
			</Head>
			<Body class='bg-white dark:bg-black relative'>
				<Suspense>
					<ErrorBoundary>
						<Routes>
							<FileRoutes />
						</Routes>
					</ErrorBoundary>
				</Suspense>
				<Scripts />
			</Body>
		</Html>
	)
}
