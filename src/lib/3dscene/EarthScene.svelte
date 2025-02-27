<script lang="ts">
	// import vertexShader from './shaders/vertex.glsl';
	// import fragmentShader from './shaders/fragment.glsl';
	import { T } from '@threlte/core';
	import { Color, MeshStandardMaterial, SphereGeometry } from 'three';
	import { useTexture } from '@threlte/extras';
	import { DEG2RAD } from 'three/src/math/MathUtils.js';

	const params = {
		// general scene params
		sunIntensity: 1.3, // brightness of the sun
		speedFactor: 2.0, // rotation speed of the earth
		metalness: 0.1,
		atmOpacity: { value: 0.7 },
		atmPowFactor: { value: 4.1 },
		atmMultiplier: { value: 9.5 }
	};

	const promises = Promise.all([
		useTexture('/textures/earth/Albedo.jpg'),
		useTexture('/textures/earth/Bump.jpg'),
		useTexture('/textures/earth/Ocean.png'),
		useTexture('/textures/earth/night_lights_modified.png')
		// useTexture('/textures/earth/Clouds.jpg'),
		// useTexture('/textures/earth/Gaia_EDR3_darkened.png')
	]);

	// map: albedoMap,
	//   bumpMap: bumpMap,
	//   bumpScale: 0.03, // must be really small, if too high even bumps on the back side got lit up
	//   roughnessMap: oceanMap, // will get reversed in the shaders
	//   metalness: params.metalness, // gets multiplied with the texture values from metalness map
	//   metalnessMap: oceanMap,
	//   emissiveMap: lightsMap,
	//   emissive: new THREE.Color(0xffff88),
	const earthRotation = $state([DEG2RAD * -90, DEG2RAD * -26, DEG2RAD * -115]);
</script>

{#await promises then textures}
	<T.Mesh position={[0, -7010, 0]} rotation={earthRotation}>
		<T.SphereGeometry args={[7000, 1024, 512]} />
		<T.MeshStandardMaterial
			map={textures[0]}
			bumpMap={textures[1]}
			bumpScale={0.03}
			roughnessMap={textures[2]}
			metalness={params.metalness}
			metalnessMap={textures[2]}
			emissiveMap={textures[3]}
			emissive={new Color(0xffff88)}
			opacity={0.5}
			transparent={true}
		/>
	</T.Mesh>
{/await}
