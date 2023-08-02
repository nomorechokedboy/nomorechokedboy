import { JSX } from 'solid-js'

export type SkillProps = {
	children: JSX.Element
	class?: string
	color?: 'sky' | 'blue' | 'yellow' | 'orange' | 'dark' | 'gray'
	leftIcon?: JSX.Element
	rightIcon?: JSX.Element
}

export default function Skill(props: SkillProps) {
	return (
		<span class='bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded border border-blue-400 print:border-none'>
			{props.children}
		</span>
	)
}
