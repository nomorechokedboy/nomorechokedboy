import { Signal } from 'solid-js'
import styles from './Hero.module.css'

export default function GradientShadow(_: unknown, i: Signal<number>[0]) {
	const className = `gradientShadow${i() + 1}`
	return (
		<span
			class={`absolute top-0 left-0 w-full h-full -z-10 blur-2xl ${styles[className]}`}
		/>
	)
}
