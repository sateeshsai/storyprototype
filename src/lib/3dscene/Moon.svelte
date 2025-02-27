<script>
	import { T } from '@threlte/core';
	import { useTexture } from '@threlte/extras';
	import { CircleGeometry, MeshPhongMaterial } from 'three';

	const textureURL = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/17271/lroc_color_poles_1k.jpg';
	const displacementURL = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/17271/ldem_3_8bit.jpg';
	const worldURL = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/17271/hipp8_s.jpg';

	const promises = Promise.all([
		useTexture(textureURL),
		useTexture(displacementURL),
		useTexture(worldURL)
	]);
</script>

<T.PointLight scale={5} position={[-50, 1500, -500]} intensity={10000} color="green" />

{#await promises then textures}
	<T.Mesh position={[-50, 1000, -500]}>
		<T.SphereGeometry args={[50, 500, 500]} />
		<T.MeshStandardMaterial map={textures[0]} displacementMap={textures[1]} />
	</T.Mesh>
{/await}
