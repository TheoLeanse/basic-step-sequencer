import { observable, action } from 'mobx';
import uuid from 'shortid';
import { isLastElement } from '../lib/utils';

const STEP_COUNT = 16;
const SPEED = 500;
const STEPS = [...Array(STEP_COUNT)].map(() => uuid());

class SequencerStore {
	@observable
	speed = SPEED;

	@observable
	activeStep = STEPS[0];

	@observable
	stepInterval = null;

	@action
	advance = () => {
		this.activeStep = isLastElement(this.activeStep, STEPS)
			? STEPS[0]
			: STEPS[STEPS.indexOf(this.activeStep) + 1];
	};

	@action
	start = () => {
		this.stepInterval = setInterval(this.advance, this.speed);
	};

	@action
	stop = () => {
		clearInterval(this.stepInterval);
	};

	@action
	setSpeed = speed => {
		this.stop();
		this.speed = speed;
		this.start();
	};

	get steps() {
		return STEPS;
	}
}

export default new SequencerStore();
