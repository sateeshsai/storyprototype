<!--
Auto-generated by: https://github.com/threlte/threlte/tree/main/packages/gltf
Command: npx @threlte/gltf@3.0.0 earth.gltf
Author: Alan Zimmerman (https://sketchfab.com/nenjo)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/earth-8a3f6e66955e41d48762d75725d3ab52
Title: Earth
-->

<script>
	import { T } from '@threlte/core';
	import { useGltf } from '@threlte/extras';

	let { fallback, error, children, ref = $bindable(), ...props } = $props();

	const gltf = useGltf('/models/earth/earth.gltf');
</script>

<T.Group bind:ref dispose={false} {...props}>
	{#await gltf}
		{@render fallback?.()}
	{:then gltf}
		<T.Mesh
			geometry={gltf.nodes.Earth_Surfacemat_0.geometry}
			scale={100}
			material={gltf.materials['Surface.mat']}
		>
			<!-- <T.MeshLambertMaterial color="hsl(220,10%,20%)" /> -->
		</T.Mesh>
	{:catch err}
		{@render error?.({ error: err })}
	{/await}

	{@render children?.({ ref })}
</T.Group>
