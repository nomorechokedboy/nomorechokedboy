import { A } from 'solid-start'
import AboutImage from '~/assets/about.gif'
import SectionHeader from '~/components/SectionHeader'
import DownloadIcon from '~icons/line-md/download-loop'

export default function About() {
	return (
		<section class='w-full scroll-mt-16' id='about'>
			<div class='flex flex-col gap-5 p-5 md:py-10 lg:px-0 md:mx-auto max-w-screen-2xl'>
				<SectionHeader
					title='About me'
					subTitle='My introduction'
				/>
				<div class='flex flex-col-reverse gap-5 md:flex-row'>
					<figure class='flex-1 flex justify-end'>
						<img
							class='max-w-full h-auto rounded-lg max-h-[350px] w-full'
							width={410}
							height={350}
							src={AboutImage}
							alt='This is me enjoying my deadline. Joking!'
						/>
					</figure>
					<div class='flex-1 flex flex-col gap-3'>
						<p class='font-medium text-lg text-neutral-600 dark:text-neutral-400'>
							I am{' '}
							<strong>
								Le Ho Hai Duong
							</strong>
							, and I am currently
							striving to become a
							professional{' '}
							<strong>
								Software
								Engineer
							</strong>
							. I am also known as a{' '}
							<i>rustacean</i>, a{' '}
							<i>gopher</i>, and a{' '}
							<i>
								Frontend tech
								enthusiast
							</i>
							. I spend most of my
							time coding{' '}
							<b>
								<i>
									outstanding
									projects
								</i>
							</b>{' '}
							and exploring{' '}
							<code>
								rust/go/typescript
							</code>{' '}
							+{' '}
							<strong>
								<i>
									amazing
									things
									about
									the
									programming
									world
								</i>
							</strong>
							.
						</p>
						<div>
							<A
								href=''
								download='/resumes/Resume-v2.0.pdf'
							>
								<button class='bg-neutral-900 px-5 py-2 rounded-lg dark:bg-white active:translate-y-1'>
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
							</A>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
