import { Signal } from 'solid-js'
import styles from './Hero.module.css'

export default function GradientBackgrounds(_: unknown, i: Signal<number>[0]) {
	const className = `gradientButton${i() + 1}`
	return (
		<span
			class={`absolute top-0 left-0 -z-10 w-full h-full rounded-lg transition ${styles[className]}`}
		/>
	)
}
