import React from 'react';
import cx from 'classnames';
import './index.css';

export const Counter = ({ steps, activeStep }) => (
	<div className="counter-container">
		{steps.map(step => (
			<div className={cx('counter', { active: step === activeStep })} />
		))}
	</div>
);
