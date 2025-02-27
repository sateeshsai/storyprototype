<script lang="ts">
	import {
		Environment,
		OrbitControls,
		Sky,
		ContactShadows,
		RoundedBoxGeometry,
		RadialGradientTexture
	} from '@threlte/extras';

	import { T, useTask, useThrelte } from '@threlte/core';
	import Otto from './models/OTTO.svelte';
	import Clouds from './models/Clouds.svelte';
	import Stars from './Stars.svelte';

	let autoRotateCamera = $state(false);
	const {
		exposure = 1,
		environmentIsBackground,
		environmentUrl
	}: { environmentIsBackground: boolean; environmentUrl: string; exposure?: number } = $props();
	let useEnvironment = $state(true);
	let environmentInputsDisabled = $derived(!useEnvironment);

	let animationDirection = 1; // 1 for increasing, -1 for decreasing
	const { renderer, invalidate } = useThrelte();

	$effect(() => {
		// renderer.toneMappingExposure = exposure;
		// invalidate();
	});

	useTask((delte) => {
		if ($activeSection === 1) {
		}
		// groupPosition[0] += 0.1;
		// useThrelteUserContext.background.rotation.y = Math.PI;
		// planePosition[0] += 0.1;
		// cameraPosition[0] -= planePosition[0] * 1;
		// cameraPosition[0] += 0.02;
		// planePosition[0] += animationDirection * 0.1; // adjust the speed as needed
		// // Check boundaries
		// if (planePosition[0] >= 0.1) {
		// 	planePosition[0] += 0.01;
		// 	if (planePosition[0] > 0.1) animationDirection = -1;
		// } else if (planePosition[0] <= 0) {
		// 	planePosition[0] = 0;
		// 	animationDirection = 1;
		// }
	});

	const groupPosition = $state([0, 0, 0]);

	import Falcon9 from '../../routes/falcon/models/falcon9/Falcon9.svelte';
	import { DEG2RAD } from 'three/src/math/MathUtils.js';
	import { DoubleSide, OrthographicCamera, PerspectiveCamera, PointLight } from 'three';
	import Effects from './Effects.svelte';
	import SkyScene from './SkyScene.svelte';
	import Strongback from '../../routes/falcon/models/strongback/strongback.svelte';
	import Earth from '../../routes/falcon/models/earth/earth.svelte';
	import Moon from './Moon.svelte';

	let ySpeed = $state(0.1);
	// let sepiaIntensity = $state(0);
	useTask(() => {
		// runTask();
	});

	const rotation = modelRotY.current;
	function runTask() {
		// if ($activeSection !== 0) {
		// modelRotY.target = rotation + 2;
		// }
		// if ($activeSection === 1) {
		// 	if (true) {
		// 		modelPosition[1] += ySpeed;
		// 		cameraPosition[1] += ySpeed;
		// 		// $modelRotation[0] += DEG2RAD * 0.01;
		// 	} else {
		// 		modelPosition[1] += 0.1;
		// 		cameraPosition[1] += 0.1;
		// 	}
		// 	if (modelPosition[1] > 10) {
		// 		// $modelRotation[2] -= 0.0001;
		// 		$modelRotation[1] += DEG2RAD * 5;
		// 		if ($modelRotation[0] < DEG2RAD * 10) {
		// 			$modelRotation[0] += DEG2RAD * 0.005;
		// 		}
		// 	}
		// }
		// if ($activeSection === 2) {
		// 	modelPosition[1] += ySpeed + 0.2;
		// 	cameraPosition[1] += ySpeed + 0.2;
		// 	if ($modelRotation[2] > -0.3 && $modelRotation[2] < 0.1) {
		// 		$modelRotation[2] -= 0.0001;
		// 	}
		// 	// cameraRotation[1] += 0.01;
		// 	modelPosition[0] += ySpeed;
		// 	cameraPosition[0] += ySpeed;
		// 	if (cameraPosition[2] > 30) {
		// 		// cameraPosition[2] -= 0.1;
		// 	}
		// }
		// // $modelRotation[2] -= 0.0001;
		// // cameraPosition[1] += 0.2;
		// // cameraPosition[2] += 0.01;
		// // earthRotation[1] += 0.002;
		// // earthRotation[1] += 0.001;
		// // cameraPosition[2] += 0.01;
		// // $modelRotation[2] += -0.0001;
		// // cameraRotation[1] += DEG2RAD * 5;
		// // cameraPosition[1] += 0.02;
		// // if (sepiaIntensity < 1) sepiaIntensity += 0.01;
		// // sepiaIntensity += 0.01;
	}

	// const earthRotation = $state([DEG2RAD * -64, DEG2RAD * 98.8, 0]);
	import { Stars as XStars } from '@threlte/extras';
	import LaunchText from './LaunchText.svelte';
	import { activeSection } from '../../stores/stores';
	import { Tween } from 'svelte/motion';
	import EarthScene from './EarthScene.svelte';
	import Falconlaunchpad from '../../routes/falcon/models/falconlaunchpad/falconlaunchpad.svelte';
	import {
		cameraPosX,
		cameraPosY,
		cameraPosZ,
		cameraRotation,
		modelPosX,
		modelPosY,
		modelPosZ,
		modelRotX,
		modelRotY,
		modelRotZ
	} from './scene_stores';

	let texture = $state();
</script>

<Effects />

{#if useEnvironment}
	<Environment isBackground={environmentIsBackground} url={environmentUrl} />
{/if}

<!-- <ContactShadows frames={200} scale={10} blur={2} far={2.5} opacity={0.5} /> -->
<XStars speed={0} count={2000} scale={100} lightness={1} />

<T.DirectionalLight
	position={[0, 1000, 0]}
	castShadow
	shadowMapWidth={4096}
	shadowMapHeight={4096}
	intensity={0.8}
/>
<!-- <T.AmbientLight intensity={0.1} castShadow /> -->

<!-- <T.PointLight position={[0, 10, 0]} intensity={1} color="red" /> -->

<T.PerspectiveCamera
	rotation={cameraRotation.current}
	position={[cameraPosX.current, cameraPosY.current, cameraPosZ.current]}
	makeDefault
	fov={60}
	visible
	frustumCulled
	far={20000}
>
	<!-- <OrbitControls maxZoom={1} /> -->
</T.PerspectiveCamera>

<T.Group
	rotation={[modelRotX.current, modelRotY.current, modelRotZ.current]}
	position={[modelPosX.current, modelPosY.current, modelPosZ.current]}
>
	<T.Group rotation={[0, 0, DEG2RAD * -90]} position={[0, -2.5, 0]}>
		<Stars />
	</T.Group>
</T.Group>
<!-- <Falconlaunchpad rotation={$modelRotation} castShadow={true} position={modelPosition} /> -->
<Falcon9
	rotation={[modelRotX.current, modelRotY.current, modelRotZ.current]}
	castShadow={true}
	scale={0.01}
	position={[modelPosX.current, modelPosY.current, modelPosZ.current]}
/>
<Strongback scale={0.4} position={[3, -5, 0]} />
<!-- <Earth rotation={earthRotation} position={[0, -4240, 0]} scale={1} /> -->
<!-- {#if $activeSection !== 0} -->
<EarthScene />
<!-- {/if} -->
<Moon />
<LaunchText />
<T.Mesh receiveShadow visible castShadow position={[0, -7, 0]}>
	<RoundedBoxGeometry smoothness={10} radius={0.1} args={[25, 2, 25]} />
	<T.MeshStandardMaterial shadowBias side={DoubleSide} color="hsl(220,10%,60%)" />
</T.Mesh>

<T.Mesh
	scale.y={0.1}
	rotation.x={DEG2RAD * 180}
	rotation.y={DEG2RAD * 10}
	receiveShadow
	position={[-0, -20, 0]}
	visible
>
	<T.SphereGeometry {texture} receiveShadow args={[120, 104, 100]} />
	<T.MeshStandardMaterial side={DoubleSide} roughness={0}>
		<RadialGradientTexture
			stops={[
				{ color: 'hsl(220,100%,2%)', offset: 0 },
				{ color: 'hsl(120,100%,2%)', offset: 0.5 },
				{ color: 'hsl(220,100%,2%)', offset: 1 }
			]}
		/>
	</T.MeshStandardMaterial>
</T.Mesh>
<!-- 
{#if $activeSection === 2}
	<T.Group
		rotation={[DEG2RAD * 0, 0, 0]}
		position={modelPosition.map((p, i) => {
			if (i === 0) {
				return p - 23;
			} else if (i === 1) {
				return p + 13;
			} else if (i === 2) {
				return p;
			}
		})}
	>
		<Team />
		
	</T.Group>
{/if} -->
<!-- <Otto position={planePosition} /> -->

<!-- <Clouds /> -->
