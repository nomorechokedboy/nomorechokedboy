import { For, JSX } from 'solid-js'
import type { SkillProps } from './Skill'
import Skill from './Skill'

export type SkillFragmentProps = {
	children: JSX.Element
	skills: SkillProps[]
}

export default function SkillFragment(props: SkillFragmentProps) {
	return (
		<div class='flex flex-col gap-0.5'>
			<header>
				<h2 class='text-base font-bold print:text-xs'>
					{props.children}
				</h2>
			</header>
			<div class='flex items-center gap-1 flex-wrap'>
				<For each={props.skills}>{Skill}</For>
			</div>
		</div>
	)
}
