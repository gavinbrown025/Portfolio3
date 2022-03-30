import { BgAnimImages } from '../images/GetImageFolder.js'

import './BgAnimation.scss'

const BgAnimation = () => {
	return (
		<div className='bgAnimation'>
			{/* {BgAnimImages.map((image, index) => (
				<img className={`circle${index + 1}`} src={image} alt={`circle${index + 1}`} key={index} />
			))} 
      <div class="overlay"></div>*/}
		</div>
	)
}

export default BgAnimation
