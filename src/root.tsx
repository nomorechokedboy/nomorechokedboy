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
	Link,
	Meta,
	Routes,
	Scripts,
	Title
} from 'solid-start'
import printStyles from '~/print.css?inline'
import '~/root.css'

export default function Root() {
	return (
		<Html lang='en'>
			<Head>
				<Title>
					Le Ho Hai Duong | Fullstack Developer
				</Title>
				<Meta charset='utf-8' />
				<Meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<Link
					rel='stylesheet'
					href={printStyles}
					media='print'
				/>
				<script>
					{`
                        (function() {
                            const theme = localStorage.getItem("theme") || 'os';
                            if (theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
                                document.documentElement.classList.add("dark");
                            }
                        })();
                    `}
				</script>
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
