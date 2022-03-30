import { motion } from 'framer-motion'

import './UI.scss'

export const Container = ({ children }) => {
	return <div className='container'>{children}</div>
}

export const Flex = ({ children, styles }) => {
	return <div className={`flex ${styles}`}>{children}</div>
}

export const Button = ({ text, href }) => {
	return (
		<button href={`${href}`} className='button'>
			<div className='lines'></div>
			{text}
		</button>
	)
}
export const Logo = () => {
	const motionVariants = {
		hidden: {
			pathLength: 0,
		},
		visible: {
			pathLength: 1,
			transition: {
				duration: 1.5,
				ease: 'easeInOut',
			},
		},
	}
	return (
		<a className='logo' href=''>
			<svg viewBox='0 0 96.92 96.91'>
				<motion.path
					variants={motionVariants}
					initial='hidden'
					animate='visible'
					d='M48,47.9,61.45,34.47a19,19,0,0,1,26.89,0l.1.09a19,19,0,0,1,0,26.87l-.08.08a19,19,0,0,1-26.92,0l-26.91-27a19,19,0,0,1,0-26.85l0,0a19,19,0,0,1,26.89,0h0a19,19,0,0,1,0,26.87l-27,27a19,19,0,0,1-26.9,0l-.05,0a19,19,0,0,1,.05-26.91l.07-.08a19,19,0,0,1,26.88.08l27,27.09a19,19,0,0,1,0,26.84l0,0a19,19,0,0,1-26.9,0'
				/>
			</svg>
		</a>
	)
}
