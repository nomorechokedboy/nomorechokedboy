import AboutImage from '~/assets/about.gif'
import SectionHeader from '~/components/SectionHeader'
import DownloadIcon from '~icons/line-md/download-loop'

export default function About() {
	return (
		<section class='flex flex-col gap-5 p-5'>
			<SectionHeader
				title='About me'
				subTitle='My introduction'
			/>
			<div class='flex flex-col-reverse gap-5 md:flex-row'>
				<figure class='flex-1 flex justify-end'>
					<img
						class='max-w-full h-auto rounded-lg'
						width={410}
						height={350}
						src={AboutImage}
						alt='This is me enjoying my deadline. Joking!'
					/>
				</figure>
				<div class='flex-1 flex flex-col gap-3'>
					<p class='font-medium text-lg text-neutral-600 dark:text-neutral-400'>
						Lorem ipsum dolor sit amet
						consectetur. Tincidunt
						consectetur urna eget posuere at
						integer arcu tempor. Faucibus
						aenean in aliquet ut
						consectetur. Scelerisque
						pellentesque cras diam purus.
						Nec ut proin scelerisque
						faucibus vestibulum eu ipsum sit
						semper.
					</p>
					<div>
						<button class='bg-neutral-900 px-5 py-2 rounded-lg dark:bg-white'>
							<div class='flex items-center gap-2 justify-center text-white dark:text-neutral-950'>
								<DownloadIcon
									width={
										24
									}
									height={
										24
									}
								/>
								<span class='text-lg font-medium'>
									Download
									CV
								</span>
							</div>
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}
