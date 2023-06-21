import { createEffect, createSignal, For, JSX, Show } from 'solid-js'
import { A, useLocation } from 'solid-start'
import ThemeSwitcher from '~/components/ThemeSwitcher'
import Burger from './components/Burger'

type Navigation = { href: string; children: JSX.Element }

export default function Header() {
	const [opened, setOpened] = createSignal(false)
	const navigations: Navigation[] = [
		{ href: '#home', children: 'Home' },
		{ href: '#about', children: 'About' },
		{ href: '#projects', children: 'Projects' },
		{ href: '#contact', children: 'Contact' }
	]
	function renderNav({ href, children }: Navigation) {
		return (
			<li>
				<A href={href}>{children}</A>
			</li>
		)
	}
	function renderMobileNav({ href, children }: Navigation) {
		return (
			<li class='py-3 border-b border-neutral-200'>
				<A href={href}>{children}</A>
			</li>
		)
	}
	function handleBurgerClick() {
		setOpened(!opened())
	}

	return (
		<header
			class='flex flex-col text-base text-[#2d2e32] dark:text-[#ededed]'
			classList={{ 'h-screen': opened() }}
		>
			<div class='w-full shadow-[rgba(0,_0,_0,_0.1)_0px_-1px_0px_0px_inset] dark:shadow-[rgba(255,_255,_255,_0.1)_0px_-1px_0px_0px_inset] sticky top-0 bg-white/80 dark:bg-black/50 before:absolute before:inset-0 before:-z-10 before:backdrop-saturate-[180] before:backdrop-blur-sm'>
				<div class='flex items-center bg-transparent max-w-screen-2xl w-full mx-auto p-3'>
					<nav class='flex-1 py-2'>
						<A href='/'>
							<h1 class='font-bold'>
								LeHoHaiDuong.id.vn
							</h1>
						</A>
					</nav>
					<nav class='flex-1 font-medium'>
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
								{renderNav}
							</For>
							<ThemeSwitcher />
						</ul>
					</nav>
				</div>
			</div>
			<Show when={opened()}>
				<nav class='basis-full flex-shrink-0 flex-grow-0 p-3 md:hidden'>
					<ul class='flex flex-col'>
						<For each={navigations}>
							{renderMobileNav}
						</For>
						<ThemeSwitcher />
					</ul>
				</nav>
			</Show>
		</header>
	)
}
