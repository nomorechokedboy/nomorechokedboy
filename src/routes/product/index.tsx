import { A, Title } from 'solid-start'
import Counter from '~/components/Counter'

export default function ProductPage() {
	return (
		<main class='text-center mx-auto text-gray-700 p-4'>
			<MySiteTitle>Test</MySiteTitle>
			<h1 class='max-6-xs text-6xl text-sky-700 font-thin uppercase my-16'>
				Product Page
			</h1>
			<Counter />
			<p class='mt-8'>
				Visit{' '}
				<a
					href='https://solidjs.com'
					target='_blank'
					class='text-sky-600 hover:underline'
				>
					solidjs.com
				</a>{' '}
				to learn how to build Solid apps.
			</p>
			<p class='my-4'>
				<A
					href='/'
					class='text-sky-600 hover:underline'
				>
					Home
				</A>
				{' - '}
				<span>About Page</span>
			</p>
		</main>
	)
}

interface TestProps {
	children: any
}

function MySiteTitle(props: TestProps) {
	return <Title>{props.children} | My Site</Title>
}
