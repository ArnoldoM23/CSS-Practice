import React from 'react';

const SectionPlans = () => {

	return (
		<section className='section-Form'> 
			<div className='row'>
				<h2>We're happy to hear from you</h2>
			</div>
			<div className='row'>
				<form className='contact-form' method='post' action='#'>
					<div className='row'>
						<div className='col span-1-of-3'>
							<label htmlFor='name'>Name</label>
						</div>
						<div className='col span-2-of-3'>
							<input type='text' name='name' id='name' placeholder='Your Name' required />
						</div>
					</div>
					<div className='row'>
						<div className='col span-1-of-3'>
							<label htmlFor='email'>Email</label>
						</div>
						<div className='col span-2-of-3'>
							<input type='email' name='email' id='email' placeholder='Your Email' required />
						</div>
					</div>
					<div className='row'>
						<div className='col span-1-of-3'>
							<label htmlFor='find-us'>How did you find us?</label>
						</div>
						<div className='col span-2-of-3'>
							<select  name='find-us' id='find-us'>
								<option value='friends' selected>Friends</option>
								<option value='search'>Search Engine</option>
								<option value='ad'>Advertisement</option>
								<option value='Other'>Other</option>
							</select>
						</div>
					</div>
					<div className='row'>
						<div className='col span-1-of-3'>
							<label>Newsletter?</label>
						</div>
						<div className='col span-2-of-3'>
							<input type='checkbox' name='news' id='news' checked /> Yes Please
						</div>
					</div>
					<div className='row'>
						<div className='col span-1-of-3'>
							<label>Drop us a line</label>
						</div>
						<div className='col span-2-of-3'>
							<textarea name='message' placeholder='Your message' >
							</textarea>
						</div>
					</div>
					<div className='row'>
						<div className='col span-1-of-3'>
							<label>&nbsp;</label>
						</div>
						<div className='col span-2-of-3'>
							<input type='submit' value='Send it!'/>
						</div>
					</div>
				</form>
			</div>
		</section>
	)
}

export default SectionPlans;

