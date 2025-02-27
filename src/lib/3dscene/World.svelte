<script lang="ts">
	import { Canvas, useTask } from '@threlte/core';
	import Scene from './Scene.svelte';
	import { AsciiRenderer, useProgress } from '@threlte/extras';
	import LoaderCircle from 'lucide-svelte/icons/loader-circle';
	// import Fluid from 'threlte-postprocessing/effects/custom';
	let {
		environmentIsBackground,
		environmentUrl,
		sceneProgress = $bindable()
	}: { environmentIsBackground: boolean; environmentUrl: string; sceneProgress: number } = $props();

	import { Studio } from '@threlte/studio';
	import SkyScene from './SkyScene.svelte';

	import { Sky } from '@threlte/extras';

	type Preset = {
		azimuth: number;
		elevation: number;
		exposure: number;
		mieCoefficient: number;
		mieDirectionalG: number;
		rayleigh: number;
		turbidity: number;
	};
	const presets: Record<'afternoon' | 'noon' | 'sunset' | 'night', Preset> = {
		afternoon: {
			azimuth: 180,
			elevation: 30,
			exposure: 0.65,
			mieCoefficient: 0.002,
			mieDirectionalG: 0.86,
			rayleigh: 0.3,
			turbidity: 4.78
		},
		night: {
			azimuth: 180,
			elevation: -5,
			exposure: 0.1,
			mieCoefficient: 0.068,
			mieDirectionalG: 0,
			rayleigh: 4,
			turbidity: 50
		},
		noon: {
			azimuth: 180,
			elevation: 85,
			exposure: 1,
			mieCoefficient: 0.013,
			mieDirectionalG: 0.7,
			rayleigh: 0.17,
			turbidity: 0.65
		},
		sunset: {
			azimuth: 180,
			elevation: 0.5,
			exposure: 0.37,
			mieCoefficient: 0.005,
			mieDirectionalG: 0.7,
			rayleigh: 3,
			turbidity: 10
		}
	};

	// let innerHeight: number;
	//   let innerWidth: number;

	const {
		// active, // Readable<boolean> – if the DefaultLoadingManager is active
		// item, // Readable<string | undefined> – the currently loading item
		// loaded, // Readable<number> - amount of items loaded
		// total, // Readable<number> - total amount of items to load
		// errors, // Readable<string[]> - all error messages
		progress, // Readable<number> - normalized (0-1) loading progress
		finishedOnce // Readable<boolean> – whether a progress of 1 has been achieved ever.
	} = useProgress();

	$effect(() => {
		sceneProgress = $progress * 100;
	});
</script>

<Canvas>
	<!-- <Sky {...presets.night} scale={5000} /> -->

	<!-- <Studio> -->
	<Scene exposure={presets.night.exposure} {environmentIsBackground} {environmentUrl} />
	<!-- </Studio> -->
</Canvas>
