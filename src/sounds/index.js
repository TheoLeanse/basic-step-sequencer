const context = new AudioContext();

export const kick = () => {
	const oscillator = context.createOscillator();
	oscillator.frequency.value = 150;
	oscillator.connect(context.destination);
	oscillator.start(0);
	setTimeout(() => oscillator.stop(0), 100);
};

export const snare = () => {
	const oscillator = context.createOscillator();
	oscillator.frequency.value = 950;
	oscillator.connect(context.destination);
	oscillator.start(0);
	setTimeout(() => oscillator.stop(0), 100);
};

export const hihat = () => {
	const oscillator = context.createOscillator();
	oscillator.frequency.value = 1950;
	oscillator.connect(context.destination);
	oscillator.start(0);
	setTimeout(() => oscillator.stop(0), 100);
};
