import React, { Component } from 'react';
import './index.css';

export class Slider extends Component {
	render() {
		return (
			<label htmlFor={this.props.name}>
				{this.props.name}
				<input
					className="slider"
					type="range"
					id="start"
					name={this.props.name}
					min="0"
					max="100"
					defaultValue={this.props.defaultValue}
					onInput={() => this.props.handleChange(this.value)}
					ref={ref => {
						if (ref) {
							this.value = ref.valueAsNumber;
						}
					}}
				/>
			</label>
		);
	}
}
