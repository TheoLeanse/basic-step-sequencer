import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { observer } from 'mobx-react';

import './app.css';
import SequencerStore from '../stores/sequencer-store';
import { Sequencer } from './sequencer';
import { Slider } from './slider';
import { Counter } from './counter';
import { kick, snare, hihat } from '../sounds';

@observer
class App extends Component {
	componentDidMount() {
		SequencerStore.start();
	}
	render() {
		return (
			<div className="app">
				{[kick, snare, hihat].map(sound => (
					<Sequencer
						sound={sound}
						activeStep={SequencerStore.activeStep} // need to pass in so the sequencer picks up changes to value
					/>
				))}
				<Counter />
				<Slider
					name="Speed"
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
