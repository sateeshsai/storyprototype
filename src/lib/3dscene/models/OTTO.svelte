<!--
Auto-generated by: https://github.com/threlte/threlte/tree/main/packages/gltf
Command: npx @threlte/gltf@3.0.0 OTTO.glb
-->

<script>
	import { T, useTask } from '@threlte/core';
	import { useGltf } from '@threlte/extras';

	let { ref = $bindable(), ...props } = $props();

	const gltf = useGltf('/OTTO.glb');
	let rotation = $state([0, 0, 0]);
	useTask((delta) => {
		rotation[0] += 0.01;
	});
</script>

<T.Group bind:ref dispose={false} {...props}>
	{#await gltf}
		<!-- {@render fallback?.()} -->
	{:then gltf}
		<T.Group position={[-4.2, -0.78, 0]} scale={[4.32, 1.07, 0.81]}>
			<T.Mesh geometry={gltf.nodes.Sphere001.geometry} material={gltf.materials['MAIN BODY']} />
			<T.Mesh geometry={gltf.nodes.Sphere001_1.geometry} material={gltf.materials.Black} />
		</T.Group>
		<T.Group position={[-4.32, -0.78, 0]} scale={[4.32, 1.07, 0.28]}>
			<T.Mesh geometry={gltf.nodes.Sphere004.geometry} material={gltf.materials['MAIN BODY']} />
			<T.Mesh geometry={gltf.nodes.Sphere004_1.geometry} material={gltf.materials.GREY} />
		</T.Group>
		<T.Mesh
			geometry={gltf.nodes.Trail.geometry}
			material={gltf.materials['Paint.003']}
			position={[4.42, 1.39, 0.44]}
			scale={[0.45, 0.21, 0.45]}
		/>
		<T.Group position={[-0.38, -0.4, 1.53]} scale={[0.49, 0.55, 0.49]}>
			<T.Mesh
				geometry={gltf.nodes.turbine_L004.geometry}
				material={gltf.materials['BLACK PAINT']}
			/>
			<T.Mesh
				geometry={gltf.nodes.turbine_L004_1.geometry}
				material={gltf.materials.METAL}
				{rotation}
			/>
		</T.Group>
		<T.Mesh
			geometry={gltf.nodes.Red.geometry}
			material={gltf.materials.RED}
			position={[3.83, 1.77, 0.01]}
			rotation={[0, 0, 0.03]}
			scale={[1.54, 0.51, 0.19]}
		/>
		<T.Group position={[-0.38, -0.4, -1.56]} scale={[0.49, 0.55, 0.49]}>
			<T.Mesh
				geometry={gltf.nodes.turbine_L001.geometry}
				material={gltf.materials['BLACK PAINT']}
			/>
			<T.Mesh
				geometry={gltf.nodes.turbine_L001_1.geometry}
				material={gltf.materials.METAL}
				{rotation}
			/>
		</T.Group>
	{:catch err}
		<!-- {@render error?.({ error: err })} -->
	{/await}

	<!-- {@render children?.({ ref })} -->
</T.Group>
