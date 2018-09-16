import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import shortId from 'shortid';

import './app.css';

import { Sequencer } from './sequencer';
import { Slider } from './slider';
import { Counter } from './counter';
import { kick, snare, hihat } from './sounds';

const STEP_COUNT = 16;
const SPEED = 500;
const STEPS = [...Array(STEP_COUNT)].map(() => shortId());

const isLastElement = (element, array) =>
	array.indexOf(element) === array.length;

class App extends Component {
	state = {
		speed: SPEED,
		steps: STEPS,
		activeStep: STEPS[0],
		stepInterval: null
	};

	componentDidMount() {
		this.start();
	}

	moveToNextStep = () => {
		this.setState(({ activeStep: prevActiveStep, steps }) => ({
			activeStep: isLastElement(prevActiveStep, steps)
				? steps[0]
				: steps[steps.indexOf(prevActiveStep) + 1]
		}));
	};

	start = () => {
		this.setState({
			stepInterval: setInterval(this.moveToNextStep, this.state.speed)
		});
	};

	stop = () => {
		clearTimeout(this.state.stepInterval);
	};

	setSpeed = speed => {
		this.setState({ speed });
	};

	handleSpeedchange = speed => {
		this.stop();
		this.setSpeed(speed);
		this.start();
	};

	render() {
		return (
			<div>
				<Sequencer
					sound={kick}
					speed={this.state.speed}
					steps={this.state.steps}
					activeStep={this.state.activeStep}
				/>
				<Sequencer
					sound={snare}
					speed={this.state.speed}
					steps={this.state.steps}
					activeStep={this.state.activeStep}
				/>
				<Sequencer
					sound={hihat}
					speed={this.state.speed}
					steps={this.state.steps}
					activeStep={this.state.activeStep}
				/>
				<Counter
					steps={this.state.steps}
					activeStep={this.state.activeStep}
				/>
				<Slider
					name="speed"
					defaultValue={SPEED}
					handleChange={this.handleSpeedchange}
				/>
				<button onClick={this.stop}>Stop</button>
				<button onClick={this.start}>Start</button>
			</div>
		);
	}
}

export default hot(module)(App);
