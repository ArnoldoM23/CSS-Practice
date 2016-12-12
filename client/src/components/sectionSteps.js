import React from 'react';

const SectionSteps = () => {

	return (
		<section className='section-steps'> 
			<div className='row'>
				<h2>How it works &mdash; Simple as 1, 2, 3</h2>
			</div>
			<div className='row'>
				<div className='col span-1-of-2 steps-box'>
					<img className='app-screen' src='../styles/img/app-iPhone.png' atl='app on iphone'/>
				</div>

				<div className='col span-1-of-2 steps-box'>
					<div className='work-step'>
						<div>1</div>
						<p>Choose the subscription plan that best fits your needs and sign up today.</p>
					</div>
					<div className='work-step'>
						<div>2</div>
						<p>Order your delicious meal using our mobile app or website. Or you can even call us!</p>
					</div>
					<div className='work-step'>
						<div>3</div>
						<p>Enjoy your meal after less than 20 minutes. See you the next time!</p>
					</div>
					<a href='#' className='btn-app'>
						<img src='../styles/img/download-app.svg' atl='iphone app store' />
					</a>
					<a href='#' className='btn-app'>
						<img src='../styles/img/download-app-android.png' atl='android play store' />
					</a>
				</div>
			</div>
		</section>
	)
}

export default SectionSteps;

