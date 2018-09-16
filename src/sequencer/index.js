import React, { Component } from 'react';
import './index.css';
import { Step } from '../step';

export class Sequencer extends Component {
	state = {
		selectedSteps: []
	};

	isActiveStep = id => id === this.props.activeStep;

	isSelectedStep = id => this.state.selectedSteps.includes(id);

	selectStep = id =>
		this.setState(prevState => ({
			selectedSteps: prevState.selectedSteps.concat(id)
		}));

	deselectStep = id =>
		this.setState(prevState => ({
			selectedSteps: prevState.selectedSteps.filter(step => step !== id)
		}));

	handleStepClick = id =>
		this.isSelectedStep(id) ? this.deselectStep(id) : this.selectStep(id);

	componentDidUpdate() {
		if (this.isSelectedStep(this.props.activeStep)) {
			this.props.sound();
		}
	}

	render() {
		return (
			<div className="step-container">
				{this.props.steps.map(id => (
					<Step
						key={id}
						selected={this.isSelectedStep(id)}
						onClick={() => this.handleStepClick(id)}
					/>
				))}
			</div>
		);
	}
}
