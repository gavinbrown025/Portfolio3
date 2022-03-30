import { useRef } from 'react'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'

import { ProjectProvider } from './store/ProjectProvider'

import Nav from './Nav/Nav'
import Header from './Header/Header'
import Profile from './Profile/Profile'
import Work from './Work/Work'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'
import BgAnimation from './UI/BgAnimation'

const App = () => {
	const containerRef = useRef(null)

	return (
		<ProjectProvider>
			<LocomotiveScrollProvider options={{ smooth: true }}>
				<main data-scroll-container ref={containerRef}>
					<BgAnimation></BgAnimation>
					<Nav data-scroll-section />
					<Header data-scroll-section />
					<Profile data-scroll-section />
					<Work data-scroll-section />
					<Contact data-scroll-section />
					<Footer data-scroll-section />
				</main>
			</LocomotiveScrollProvider>
		</ProjectProvider>
	)
}

export default App
