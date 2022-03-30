import { Container, Flex, Button } from '../UI/UI'
import { motion } from 'framer-motion'
import './Header.scss'

const motionVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 1.5,
			ease: 'easeInOut',
		},
	},
}

const Header = () => {
	return (
		<motion.header variants={motionVariants} initial='hidden' animate='visible'>
			<Container>
				<div data-scroll data-scroll-speed="4" className='landing-text'>
					<h1>Gavin Brown</h1>
					<h2 className='mb2'>Front-end Web Developer</h2>
					<p className='mb3 text-dim'>Creating web interfaces to make your digital experiences smooth and some more words here.</p>
					<Flex styles={'row gap3'}>
						<Button href='#portfolio' text='Portfolio' />
						<Button href='#profile' text='Profile' />
					</Flex>
				</div>
			</Container>
		</motion.header>
	)
}

export default Header
