import { arrow, autoPlacement, offset } from '@floating-ui/dom'
import { useFloating } from 'solid-floating-ui'
import { createSignal, JSX, Show } from 'solid-js'

type TooltipProps = {
	children: JSX.Element
	label: JSX.Element
	withArrow?: boolean
	position?:
		| 'bottom'
		| 'left'
		| 'right'
		| 'top'
		| 'bottom-end'
		| 'bottom-start'
		| 'left-end'
		| 'left-start'
		| 'right-end'
		| 'right-start'
		| 'top-end'
		| 'top-start'
}

export default function Tooltip(props: TooltipProps) {
	const [reference, setReference] = createSignal<HTMLElement>()
	const [floating, setFloating] = createSignal<HTMLDivElement>()
	const [show, setShow] = createSignal(false)
	const [arrowRef, setArrowRef] = createSignal<HTMLElement>()
	const position = useFloating(reference, floating, {
		placement: 'top',
		middleware: [autoPlacement(), offset(8)]
	})
	return (
		<>
			<div
				ref={setReference}
				onMouseOver={() => setShow(true)}
				onMouseLeave={() => setShow(false)}
			>
				{props.children}
			</div>
			<Show when={show()}>
				<div
					class={`dark:bg-white bg-[#111827] dark:text-black text-white p-2 rounded ${
						show() ? 'block' : ''
					}`}
					ref={setFloating}
					style={{
						position: position.strategy,
						top: `${position.y ?? 0}px`,
						left: `${position.x ?? 0}px`
					}}
				>
					{props.label}
					<Show when={false}>
						<div
							class={`absolute border-8 border-transparent border-t-[#111827] shadow dark:border-t-white w-0 h-0 ${position.placement}`}
							ref={setArrowRef}
							style={{
								top: `${
									position
										.middlewareData
										.arrow
										?.y ??
									0
								}px`,
								left: `${
									position
										.middlewareData
										.arrow
										?.x ??
									0
								}px`
							}}
						/>
					</Show>
				</div>
			</Show>
		</>
	)
}
