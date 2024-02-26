import { JSX, Show } from 'solid-js'

export type CertificateProps = {
	certificateName: JSX.Element
	companyName: JSX.Element
	url?: string
}

export default function Certificate(props: CertificateProps) {
	const Cert = (
		<div class='flex flex-col text-neutral-600'>
			<p class='font-bold text-base print:text-xs'>
				{props.certificateName}
			</p>
			<p class='text-sm print:text-xs'>{props.companyName}</p>
		</div>
	)

	return (
		<Show when={props.url !== undefined} fallback={Cert}>
			<a href={props.url}>{Cert}</a>
		</Show>
	)
}
