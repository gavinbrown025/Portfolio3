import { Logo } from '../UI/UI'
import { motion } from 'framer-motion'

import './Nav.scss'

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

const Nav = () => {
	return (
		<motion.div data-scroll data-scroll-sticky className='nav-container' variants={motionVariants} initial='hidden' animate='visible'>
			<nav className='flex jcsb'>
				<Logo />
				<ul className='flex jcfe aic'>
					<li>
						<a href='#work'>Work</a>
					</li>
					<li>
						<a href='#profile'>Profile</a>
					</li>
					<li>
						<a href='#contact'>Contact</a>
					</li>
				</ul>
			</nav>
		</motion.div>
	)
}

export default Nav
