import Image from 'next/image'

import WhiteLogo from '@/../public/white_logo.png'

const Footer = () => {
	return (
		<footer className={`bg-primary-turquoise h-[137px]`}>
			<div className={`mainContainer`}>
				<Image src={WhiteLogo} alt='Logo'/>
				<div className={`grid grid-rows-4 justify-end py-[20px]`}>
					<span className={`footerItem`}>г. Москва, Цветной б-р, 40</span>
					<span className={`footerItem`}>+7 495 771 21 11</span>
					<span className={`footerItem`}>info@skan.ru</span>
					<span className={`footerItem`}>Copyright. 2024</span>
				</div>
			</div>
		</footer>
	)
}

export default Footer
