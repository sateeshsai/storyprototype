<script lang="ts">
	import { T } from '@threlte/core';
	import { ImageMaterial, type IntersectionEvent } from '@threlte/extras';
	import { spring } from 'svelte/motion';
	import BentPlaneGeometry from './BentPlaneGeometry.svelte';
	import { DoubleSide } from 'three';
	import {
		brightness,
		contrast,
		negative,
		hue,
		saturation,
		lightness,
		monochromeColor,
		monochromeStrength,
		colorProcessingTexture,
		alphaThreshold,
		alphaSmoothing
	} from './props';
	import { mode } from 'mode-watcher';

	export let url: string;

	let hovered = false;

	const scale = spring(1);
	const radius = spring(0.1);
	const zoom = spring(1);

	$: scale.set(hovered ? 1.2 : 1);
	$: radius.set(hovered ? 0.25 : 0.1);
	$: zoom.set(hovered ? 1.2 : 1);

	$: if ($mode === 'dark') {
		$contrast = 0.15;
		$brightness = -0.1;
	} else {
		$contrast = 0.2;
		$brightness = 0;
		$saturation = 2;
	}

	const stopPropagation =
		(fn: () => void) => (event: IntersectionEvent<'pointerover' | 'pointerleave'>) => {
			event.stopPropagation();
			fn();
		};
</script>

<T.Mesh
	scale={$scale}
	{...$$restProps}
	onclick={() => {
		console.log('Haha');
	}}
	onpointerover={stopPropagation(() => (hovered = true))}
	onpointerleave={stopPropagation(() => (hovered = false))}
	onpointerclick={stopPropagation(() => alert('Hi'))}
>
	<BentPlaneGeometry args={[0.1, 1, 1, 7, 7].map((p) => p * 8)} />
	<ImageMaterial
		transparent
		side={DoubleSide}
		{url}
		radius={$radius}
		zoom={$zoom}
		alphaThreshold={$alphaThreshold}
		alphaSmoothing={$alphaSmoothing}
		brightness={$brightness}
		contrast={$contrast}
		negative={$negative}
		hue={$hue}
		saturation={$saturation}
		lightness={$lightness}
		monochromeColor={$monochromeColor}
		monochromeStrength={$monochromeStrength}
		colorProcessingTexture={$colorProcessingTexture}
	/>
</T.Mesh>
