<script>
	import { T, useTask } from '@threlte/core';
	import { Float, Text3DGeometry } from '@threlte/extras';
	let text = 'Ready to launch';
	let bevelEnabled = true;
	let bevelOffset = 0;
	let bevelSegments = 20;
	let bevelSize = 0.1;
	let bevelThickness = 0.1;
	let curveSegments = 12;
	let depth = 0.2;
	let size = 2.5;
	let smooth = 0.1;

	const lightPosition = $state([-25, 13, 0]);

	let direction = 'right';
	useTask(() => {
		// if (direction === 'right') {
		// 	lightPosition[0] += 0.1;
		// 	// console.log('right');
		// } else {
		// 	lightPosition[0] -= 0.1;
		// 	// console.log('left');
		// 	// console.log('right');
		// }
		// if (lightPosition[0] > -20) {
		// 	// lightPosition[0] = -30;
		// 	direction = 'left';
		// } else {
		// 	// lightPosition[0] = -30;
		// 	direction = 'right';
		// }
	});
</script>

<T.PointLight color="white" intensity={100} position={lightPosition} castShadow />

<Float speed={5} floatIntensity={5} scale={1} rotationIntensity={0}>
	<!-- <T.Mesh>
		<T.MeshStandardMaterial color={'orange'} />
		<T.BoxGeometry args={[5, 5, 5]} />
	</T.Mesh> -->

	<T.Mesh position={[-35, 10, 0]}>
		<!-- font={'/fonts/Inter-semibold.blob'} -->
		<Text3DGeometry
			{text}
			{bevelEnabled}
			{bevelOffset}
			{bevelSegments}
			{bevelSize}
			{bevelThickness}
			{curveSegments}
			{depth}
			{size}
			{smooth}
		/>
		<T.MeshStandardMaterial
			color="hsl(200,100%,70%)"
			toneMapped={false}
			metalness={1.0}
			roughness={0.2}
			dithering={true}
			transparent={true}
			opacity={1}
		/>
	</T.Mesh>
</Float>
