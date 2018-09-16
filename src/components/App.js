import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { observer } from 'mobx-react';

import './app.css';
import SequencerStore from '../stores/sequencer-store';
import { Sequencer } from './sequencer';
import { Slider } from './slider';
import { Counter } from './counter';
import { kick, snare, hihat } from '../sounds';

const SOUNDS = [kick, snare, hihat];

@observer
class App extends Component {
	componentDidMount() {
		SequencerStore.start();
	}
	render() {
		return (
			<div>
				{SOUNDS.map(sound => (
					<Sequencer
						sound={sound}
						steps={SequencerStore.steps}
						activeStep={SequencerStore.activeStep}
					/>
				))}
				<Counter />
				<Slider
					name="speed"
					defaultValue={SequencerStore.speed}
					handleInput={SequencerStore.setSpeed}
				/>
				<button onClick={SequencerStore.stop}>Stop</button>
				<button onClick={SequencerStore.start}>Start</button>
			</div>
		);
	}
}

export default hot(module)(App);
