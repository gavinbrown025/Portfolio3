import { Container, Flex } from '../UI/UI'

import './Profile.scss'

const Profile = () => {
	return (
		<section>
			<Container>
				<Flex styles="gap3 aic fw">
					<div data-scroll data-scroll-speed="1" className='profile-desc'>
						<h2>Profile</h2>
						<p>
							I'm a Front-end Developer based in Calgary, AB, Canada. <br />
							<br />
							When I’m not climbing, biking, or playing guitar, I’m building interfaces that bring the capabilities of the web to your fingertips. <br />
							<br />
							While I spend most of my time with User Interfaces, but I also enjoy getting involved in design, and back-end development. <br />
							<br />
							Browse some of my work, view my skills, or get in touch. You can also find me on Github and LinkedIn.
						</p>
					</div>
					<div className='profile-skills'>
						<h3>Languages</h3>
						<ul>
							<span>| |</span>
							<li>HTML5</li>
							<span>|</span>
							<li>CSS3 (SCSS)</li>
							<span>|</span>
							<li>JavaScript (ES6)</li>
							<span>|</span>
							<li>PHP</li>
							<span>|</span>
							<li>MYSQL</li>
							<span>| |</span>
						</ul>

						<h3>Frameworks</h3>
						<ul>
							<span>| |</span>
							<li>React</li>
							<span>|</span>
							<li>Vue</li>
							<span>|</span>
							<li>Webflow</li>
							<span>|</span>
							<li>Shopify</li>
							<span>| |</span>
						</ul>

						<h3>Tools</h3>
						<ul>
							<span>| |</span>
							<li>Github</li>
							<span>|</span>
							<li>Adobe Suite</li>
							<span>|</span>
							<li>GSAP</li>
							<span>| |</span>
						</ul>
					</div>
				</Flex>
			</Container>
		</section>
	)
}

export default Profile
