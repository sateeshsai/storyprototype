<script lang="ts">
	import Deloitte from '$lib/deloitte/Deloitte.svelte';
	import type { UIEventHandler } from 'svelte/elements';

	function handleScroll(e: any) {
		console.log(e);
	}

	import {
		type FullpageActivityStore,
		Fullpage,
		FullpageSection,
		FullpageSlide
	} from 'svelte-fullpage';
	import { activeSection } from '../stores/stores';
	import { fly, slide } from 'svelte/transition';
	import ExecutiveSummary from './content/ExecutiveSummary.svelte';
	import Industry from './content/industry/Industry.svelte';
	import Fees from './content/fees/Fees.svelte';
	import Intro from './intro/Intro.svelte';
	import {
		cameraOriginalPosition,
		cameraPosition,
		cameraPosY,
		cameraPosZ,
		cameraRotation,
		modelPosition,
		modelPosX,
		modelPosY,
		modelPosZ,
		modelRotation,
		modelRotX,
		modelRotY,
		rocketOriginalPostition
	} from '$lib/3dscene/scene_stores';
	import { DEG2RAD } from 'three/src/math/MathUtils.js';

	let fullpageController: FullpageActivityStore;
	let sectionController: FullpageActivityStore;

	const moveBy = 600;
	$effect(() => {
		$activeSection = $fullpageController;
		if ($fullpageController === 0) {
			modelPosY.set(rocketOriginalPostition[1]);
			cameraPosY.set(cameraOriginalPosition[1]);
			cameraPosZ.set(cameraOriginalPosition[2]);
			modelRotX.set(0);
		}
		if ($fullpageController === 1) {
			modelPosY.set(300);
			cameraPosY.set(313);
			modelRotY.set(DEG2RAD * 100000);
			cameraPosZ.set(cameraOriginalPosition[2]);
		}

		if ($fullpageController === 2) {
			modelPosY.set(600);
			modelRotX.set(modelPosZ.current + 0.3);
			cameraPosY.set(613);
			cameraPosZ.set(cameraPosZ.current + 5);
		}

		if ($fullpageController === 3) {
			modelPosY.set(900);
			modelRotX.set(modelPosZ.current + 0.5);
			cameraPosY.set(913);
			// cameraPosZ.set(cameraPosZ.current + 10);
		}

		if ($fullpageController === 4) {
			modelPosY.set(1100);
			modelRotX.set(modelPosZ.current + 0.3);
			cameraPosY.set(1113);
			// cameraPosZ.set(cameraPosZ.current + 30);
		}
		console.log('SECTION ' + $activeSection);
	});
</script>

<div class="h-[100svh]">
	<Fullpage bind:controller={fullpageController}>
		<FullpageSection title="Home">
			<div class="grid h-full w-full grid-cols-[3fr_2fr] content-end px-12 pb-10">
				<h1 class="">Proposal to serve Space Inc.</h1>
			</div>
		</FullpageSection>
		<FullpageSection title="Industry Experience">
			{#if $fullpageController === 1}
				<div class="grid h-full w-full grid-cols-[3fr_2fr] content-center px-12 pb-10">
					<Intro />
				</div>
			{/if}
		</FullpageSection>
		<FullpageSection title="Executive Summary">
			<FullpageSlide title="1982-1993"></FullpageSlide>
			<FullpageSlide title="1993-2006">
				{#if $fullpageController === 2}
					<div class="grid h-full w-full grid-cols-[3fr_2fr] content-center px-12 pb-10">
						<ExecutiveSummary />
					</div>
				{/if}
			</FullpageSlide>
			<FullpageSlide title="2006-present">
				{#if $fullpageController === 2}
					<div class="grid h-full w-full grid-cols-[3fr_2fr] content-center px-12 pb-10">
						<ExecutiveSummary />
					</div>
				{/if}
			</FullpageSlide>
		</FullpageSection>
		<FullpageSection title="Industry Experience">
			{#if $fullpageController === 3}
				<div class="grid h-full w-full grid-cols-[3fr_2fr] content-center px-12 pb-10">
					<Industry />
				</div>
			{/if}
		</FullpageSection>
		<FullpageSection title="Future">
			{#if $fullpageController === 4}
				<div class="grid h-full w-full grid-cols-[3fr_2fr] content-center px-12 pb-10">
					<Fees />
				</div>
			{/if}
		</FullpageSection>
	</Fullpage>
</div>
