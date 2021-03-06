import React from 'react';

const SectionPlans = () => {

	return (
		<section className='section-plans'> 
			<div className='row'>
				<h2>Start eating healthy today</h2>
			</div>
			<div className='row'>
				<div className='col span-1-of-3'>
					<div className='plan-box'>
						<div>
							<h3>Premium</h3>
							<p className='plan-price'>399$ <span className='span-size'>/ month</span> </p>
							<p className='plan-price-meal'>That’s only 13.30$ per meal</p>
						</div>
						<div>
							<ul>
								<li><i className='ion-ios-checkmark-empty icon-small'></i>1 meal every day</li>
								<li><i className='ion-ios-checkmark-empty icon-small'></i>Order 24/7</li>
								<li><i className='ion-ios-checkmark-empty icon-small'></i>Access to newest creations</li>
								<li><i className='ion-ios-checkmark-empty icon-small'></i>Free delivery</li>
							</ul>
						</div>
						<div>
							<a className='btn btn-full' href='#'>Sign up now</a>
						</div>
					</div>
				</div>
				<div className='col span-1-of-3'>
					<div className='plan-box'>
						<div>
							<h3>Pro</h3>
							<p className='plan-price'>149$ <span className='span-size'>/ month</span> </p>
							<p className='plan-price-meal'>That’s only 14.90$ per meal</p>
						</div>
						<div>
							<ul>
								<li><i className='ion-ios-checkmark-empty icon-small'></i>1 meal 10 days/month</li>
								<li><i className='ion-ios-checkmark-empty icon-small'></i>Order 24/7</li>
								<li><i className='ion-ios-checkmark-empty icon-small'></i>Access to newest creations</li>
								<li><i className='ion-ios-checkmark-empty icon-small'></i>Free delivery</li>
							</ul>
						</div>
						<div>
							<a className='btn btn-ghost' href='#'>Sign up now</a>
						</div>
					</div>
				</div>
				<div className='col span-1-of-3'>
					<div className='plan-box'>
						<div>
							<h3>Starter</h3>
							<p className='plan-price'>19$ <span className='span-size'>/ meal</span> </p>
							<p className='plan-price-meal'>&nbsp;</p>
						</div>
						<div>
							<ul>
								<li><i className='ion-ios-checkmark-empty icon-small'></i>1 meal</li>
								<li><i className='ion-ios-checkmark-empty icon-small'></i>Order from 8 am to 12 pm</li>
								<li><i className='ion-ios-close-empty icon-small'></i></li>
								<li><i className='ion-ios-checkmark-empty icon-small'></i>Free delivery</li>
							</ul>
						</div>
						<div>
							<a className='btn btn-ghost' href='#'>Sign up now</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default SectionPlans;


// Section 6: Sign up and pricing plans
// Title: Start eating healthy today
