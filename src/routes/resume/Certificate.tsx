import { JSX } from 'solid-js'

export type CertificateProps = {
	certificateName: JSX.Element
	companyName: JSX.Element
	url: string
}

export default function Certificate(props: CertificateProps) {
	return (
		<a href={props.url}>
			<div class='flex flex-col text-neutral-600'>
				<p class='font-bold text-base print:text-xs'>
					{props.certificateName}
				</p>
				<p class='text-sm print:text-xs'>
					{props.companyName}
				</p>
			</div>
		</a>
	)
}
