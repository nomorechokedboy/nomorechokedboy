import Footer from '~/layouts/Footer'
import Header from '~/layouts/Header'
import About from '~/sections/About'
import Contact from '~/sections/Contact'
import Hero from '~/sections/Hero'
import Projects from '~/sections/Projects'

export default function Home() {
	return (
		<>
			<Header />
			<main class='w-full h-full'>
				<Hero />
				<About />
				<Projects />
				<Contact />
			</main>
			<Footer />
		</>
	)
}
