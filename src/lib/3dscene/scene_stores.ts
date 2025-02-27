import { Tween } from 'svelte/motion';
import { linear } from 'svelte/easing';
import { writable, type Writable } from 'svelte/store';

const tweenOptions = { duration: 5000, easing: linear };
export const rocketOriginalPostition = [0, -6, 0];
export const modelPosX = new Tween(rocketOriginalPostition[0]);
export const modelPosY = new Tween(rocketOriginalPostition[1], tweenOptions);
export const modelPosZ = new Tween(rocketOriginalPostition[2], tweenOptions);
export const modelRotX = new Tween(0, tweenOptions);
export const modelRotY = new Tween(-6, { easing: linear, duration: 300000 });
export const modelRotZ = new Tween(0, tweenOptions);
export const modelPosition: Tween<any> = new Tween(rocketOriginalPostition, tweenOptions);

export const modelRotation: Tween<any> = new Tween([
	modelRotX.current,
	modelRotY.current,
	modelRotZ.current
]);

export const cameraOriginalPosition = [-15, 7, 30];
export const cameraPosX = new Tween(cameraOriginalPosition[0], tweenOptions);
export const cameraPosY = new Tween(cameraOriginalPosition[1], tweenOptions);
export const cameraPosZ = new Tween(cameraOriginalPosition[2], tweenOptions);
export const cameraRotX = new Tween(0, tweenOptions);
export const cameraRotY = new Tween(0, tweenOptions);
export const cameraRotZ = new Tween(0, tweenOptions);

export const cameraPosition: Tween<any> = new Tween(cameraOriginalPosition, tweenOptions);
export const cameraRotation: Tween<any> = new Tween([
	cameraRotX.current,
	cameraRotY.current,
	cameraRotZ.current
]);
