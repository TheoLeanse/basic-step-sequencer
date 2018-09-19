import React from 'react';
import cx from 'classnames';

import './index.css';

export const Step = ({ onClick, selected, active }) => (
	<button onClick={onClick} className={cx('step', { selected, active })} />
);
