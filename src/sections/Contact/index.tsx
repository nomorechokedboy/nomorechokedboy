import ContactItem from '~/components/ContactItem'
import SectionHeader from '~/components/SectionHeader'
import PhoneIcon from '~icons/basil/phone-solid'
import EmailIcon from '~icons/line-md/email-twotone'

export default function Contact() {
	return (
		<section class='p-5 lg:px-0 md:py-10 w-full' id='contact'>
			<div class='flex flex-col gap-5 mx-auto max-w-screen-2xl'>
				<SectionHeader
					title='Contact me'
					subTitle="Don't be shy! Get in touch with me!"
				/>
				<div class='flex flex-col gap-3 md:flex-row md:gap-10'>
					<ContactItem
						Icon={EmailIcon}
						title='Email'
						content='lehohaiduong2001@gmail.com'
						href='mailto:lehohaiduong2001@gmail.com'
					/>
					<ContactItem
						Icon={PhoneIcon}
						title='Phone'
						content='0784120178'
						href='tel:0784120178'
					/>
				</div>
			</div>
		</section>
	)
}
