import React from 'react';
import cx from 'classnames';

import './index.css';

export const Step = ({ onClick, selected }) => (
	<button onClick={onClick} className={cx('step', { selected })} />
);
