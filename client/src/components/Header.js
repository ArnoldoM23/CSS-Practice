import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Header extends Component {

	renderLoginLinks(){
		if(this.props.authenticate){
			
		}
	}

	render(){
		return (
			<header>
				<nav>
					<div className='row'>
						<img className='logo' src='../styles/img/logo-white.png' alt='Omnifood-logo'/>
						<ul className='main-nav'>
							<li><a href='#'>Food delivery</a></li>
							<li><a href='#'>How it works</a></li>
							<li><a href='#'>Our cities</a></li>
							<li><a href='#'>Sign up</a></li>
						</ul>
					</div>
				</nav>
				<div className='hero-text-box'>
					<h1>Goodbye junk food.<br/> Hello super healthy meals.</h1>
					<a className='btn btn-full' href='#'>I'm hungry</a>
					<a className='btn btn-ghost' href='#'>Show me more</a>
				</div>
			</header>
		);
	}
}

function mapStateToProps(state){
	return { authenticate: state.auth.authenticated }
}

export default connect(mapStateToProps)(Header);