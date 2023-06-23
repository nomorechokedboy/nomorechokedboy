import { createSignal, For, Show } from 'solid-js'
import { A } from 'solid-start'
import Burger from '~/components/Burger'
import ThemeSwitcher from '~/components/ThemeSwitcher'
import MobileNav, { MobileNavProps } from './MobileNav'
import Navigation, { NavigationProps } from './Navigation'

export default function Header() {
	const [opened, setOpened] = createSignal(false)
	const navigations: NavigationProps[] = [
		{ href: '#home', children: 'Home' },
		{ href: '#about', children: 'About' },
		{ href: '#projects', children: 'Projects' },
		{ href: '#contact', children: 'Contact' }
	]
	const mobileNavigations: MobileNavProps[] = navigations.map((el) => ({
		...el,
		onClick: handleMobileNavClick
	}))
	function handleBurgerClick() {
		setOpened(!opened())
	}
	function handleMobileNavClick() {
		setOpened(false)
	}

	return (
		<header
			class='flex flex-col text-base text-[#2d2e32] dark:text-[#ededed] sticky top-0 z-40'
			classList={{
				'h-screen bg-white dark:bg-black': opened()
			}}
		>
			<div class='w-full shadow-[rgba(0,_0,_0,_0.1)_0px_-1px_0px_0px_inset] dark:shadow-[rgba(255,_255,_255,_0.1)_0px_-1px_0px_0px_inset] bg-white/80 dark:bg-black/50 before:absolute before:inset-0 before:-z-10 before:backdrop-blur-sm'>
				<div class='flex items-center justify-between bg-transparent max-w-screen-2xl w-full mx-auto p-3'>
					<nav class='py-2'>
						<A href='/'>
							<h1 class='font-bold w-fit'>
								LeHoHaiDuong.dev
							</h1>
						</A>
					</nav>
					<nav class='w-1/2 font-medium'>
						<div class='flex items-center justify-end md:hidden'>
							<Burger
								opened={opened()}
								onClick={
									handleBurgerClick
								}
							/>
						</div>
						<ul class='hidden justify-end items-center gap-10 md:flex'>
							<For each={navigations}>
								{Navigation}
							</For>
							<ThemeSwitcher />
						</ul>
					</nav>
				</div>
			</div>
			<Show when={opened()}>
				<nav class='basis-full flex-shrink-0 flex-grow-0 p-3 md:hidden'>
					<ul class='flex flex-col'>
						<For each={mobileNavigations}>
							{MobileNav}
						</For>
						<li class='py-3'>
							<ThemeSwitcher />
						</li>
					</ul>
				</nav>
			</Show>
		</header>
	)
}
