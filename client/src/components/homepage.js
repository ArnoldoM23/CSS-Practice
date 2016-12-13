import React, { Component } from 'react';
import SectionFeatures from './sectionFeature';
import SectionMeals from './sectionMeals';
import SectionSteps from './sectionSteps';
import SectionCities from './sectionCities';

export default class FrontPage extends Component {
	render(){
		return (
			<div>
			<SectionFeatures />
			<SectionMeals />
			<SectionSteps />
			<SectionCities />
			</div>
		);
	}
}

