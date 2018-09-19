import React, { Component } from 'react';
import cx from 'classnames';
import { observer } from 'mobx-react';
import './index.css';
import SequencerStore from '../../stores/sequencer-store';

@observer
export class Counter extends Component {
	renderStep = step => (
		<div
			className={cx('counter', {
				active: step === SequencerStore.activeStep
			})}
		/>
	);
	render() {
		return (
			<div className="counter-container">
				{SequencerStore.steps.map(this.renderStep)}
			</div>
		);
	}
}
