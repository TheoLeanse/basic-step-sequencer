import React, { Component } from 'react';
import './index.css';

export class Slider extends Component {
	render() {
		return (
			<label htmlFor={this.props.name}>
				<span className="slider-label">{this.props.name}</span>
				<input
					className="slider"
					type="range"
					id="start"
					name={this.props.name}
					min="0"
					max="100"
					defaultValue={this.props.defaultValue}
					onInput={() => this.props.handleInput(this.value)}
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
