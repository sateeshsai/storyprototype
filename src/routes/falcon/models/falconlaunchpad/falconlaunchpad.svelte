<!--
Auto-generated by: https://github.com/threlte/threlte/tree/main/packages/gltf
Command: npx @threlte/gltf@3.0.0 falconlaunchpad.gltf
Author: Aashish_3D (https://sketchfab.com/Aashish_3D)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/falcon-9-launching-pad-e957a9dbb45146e0946e16f2cb12c827
Title: Falcon 9 & Launching Pad
-->

<script>
	import { T } from '@threlte/core';
	import { useGltf } from '@threlte/extras';

	let { fallback, error, children, ref = $bindable(), ...props } = $props();

	const gltf = useGltf('/models/falconlaunchpad/falconlaunchpad.gltf');
</script>

<T.Group bind:ref dispose={false} {...props}>
	{#await gltf}
		{@render fallback?.()}
	{:then gltf}
		<T.Group rotation={[-Math.PI / 2, 0, 0]}>
			<T.Mesh
				geometry={gltf.nodes.Object_2.geometry}
				material={gltf.materials['Black_Pillars_2.0']}
			/>
			<T.Mesh geometry={gltf.nodes.Object_3.geometry} material={gltf.materials.Body_Black} />
			<T.Mesh geometry={gltf.nodes.Object_4.geometry} material={gltf.materials.Body_Black} />
			<T.LineSegments geometry={gltf.nodes.Object_5.geometry} material={gltf.materials.Parts} />
			<T.Mesh geometry={gltf.nodes.Object_6.geometry} material={gltf.materials['BU.W']} />
			<T.Mesh geometry={gltf.nodes.Object_7.geometry} material={gltf.materials.Black_Pillars} />
			<T.Mesh geometry={gltf.nodes.Object_8.geometry} material={gltf.materials.Black_Pillars} />
			<T.Mesh geometry={gltf.nodes.Object_9.geometry} material={gltf.materials.Black_Pillars} />
			<T.Mesh geometry={gltf.nodes.Object_10.geometry} material={gltf.materials.Black_Pillars} />
			<T.Mesh geometry={gltf.nodes.Object_11.geometry} material={gltf.materials.Black_Pillars} />
			<T.Mesh geometry={gltf.nodes.Object_12.geometry} material={gltf.materials.Black_Pillars} />
			<T.Mesh geometry={gltf.nodes.Object_13.geometry} material={gltf.materials.Body_Black} />
			<T.Mesh geometry={gltf.nodes.Object_14.geometry} material={gltf.materials.Body_Black} />
			<T.Mesh geometry={gltf.nodes.Object_15.geometry} material={gltf.materials.Body_Black} />
			<T.Mesh geometry={gltf.nodes.Object_16.geometry} material={gltf.materials.Body_Black} />
			<T.Mesh geometry={gltf.nodes.Object_17.geometry} material={gltf.materials.Body_Black} />
			<T.Mesh geometry={gltf.nodes.Object_18.geometry} material={gltf.materials.Body_Black} />
			<T.Mesh geometry={gltf.nodes.Object_19.geometry} material={gltf.materials.Body_Black} />
			<T.Mesh geometry={gltf.nodes.Object_20.geometry} material={gltf.materials.Body_Black} />
			<T.Mesh geometry={gltf.nodes.Object_21.geometry} material={gltf.materials.Body_Black} />
			<T.Mesh geometry={gltf.nodes.Object_22.geometry} material={gltf.materials.Body_Black} />
			<T.Mesh geometry={gltf.nodes.Object_23.geometry} material={gltf.materials.Body_Black} />
			<T.Mesh geometry={gltf.nodes.Object_24.geometry} material={gltf.materials.Body_Black} />
			<T.Mesh
				geometry={gltf.nodes.Object_25.geometry}
				material={gltf.materials['Brown-Silver_N-M']}
			/>
			<T.Mesh geometry={gltf.nodes.Object_26.geometry} material={gltf.materials.Building_Blue} />
			<T.Mesh geometry={gltf.nodes.Object_27.geometry} material={gltf.materials.Grey_Mid_Floor} />
			<T.Mesh
				geometry={gltf.nodes.Object_28.geometry}
				material={gltf.materials['Grey_Non-Metal']}
			/>
			<T.Mesh geometry={gltf.nodes.Object_29.geometry} material={gltf.materials.Main_Body} />
			<T.Mesh geometry={gltf.nodes.Object_30.geometry} material={gltf.materials.Main_Body} />
			<T.Mesh geometry={gltf.nodes.Object_31.geometry} material={gltf.materials.Main_Body} />
			<!-- <T.Mesh geometry={gltf.nodes.Object_32.geometry} material={gltf.materials.Main_Body} /> -->
			<!-- <T.Mesh geometry={gltf.nodes.Object_33.geometry} material={gltf.materials.Main_Body} /> -->
			<!-- <T.Mesh geometry={gltf.nodes.Object_34.geometry} material={gltf.materials.Parts} /> -->
			<T.Mesh geometry={gltf.nodes.Object_35.geometry} material={gltf.materials['SVGMat.001']} />
			<T.Mesh geometry={gltf.nodes.Object_36.geometry} material={gltf.materials['SVGMat.002']} />
			<T.Mesh
				geometry={gltf.nodes.Object_37.geometry}
				material={gltf.materials['Silver-Brown_M']}
			/>
			<T.Mesh
				geometry={gltf.nodes.Object_38.geometry}
				material={gltf.materials['Silver-Brown_M']}
			/>
			<T.Mesh
				geometry={gltf.nodes.Object_39.geometry}
				material={gltf.materials['Silver-Brown_M']}
			/>
			<T.Mesh
				geometry={gltf.nodes.Object_40.geometry}
				material={gltf.materials['Silver-Brown_M']}
			/>
			<T.Mesh
				geometry={gltf.nodes.Object_41.geometry}
				material={gltf.materials['Silver-Brown_M']}
			/>
			<T.Mesh geometry={gltf.nodes.Object_42.geometry} material={gltf.materials.Silver_PARTS} />
			<T.Mesh
				geometry={gltf.nodes.Object_43.geometry}
				material={gltf.materials['White_Non-Metal']}
			/>
			<T.Mesh geometry={gltf.nodes.Object_44.geometry} material={gltf.materials.White_Tanks} />
			<T.Mesh geometry={gltf.nodes.Object_45.geometry} material={gltf.materials.Yellow_Railings} />
			<T.Mesh geometry={gltf.nodes.Object_46.geometry} material={gltf.materials.Yellow_Railings} />
			<T.Mesh geometry={gltf.nodes.Object_47.geometry} material={gltf.materials.Yellow_Railings} />
			<T.Mesh geometry={gltf.nodes.Object_48.geometry} material={gltf.materials.Yellow_Railings} />
			<T.Mesh geometry={gltf.nodes.Object_49.geometry} material={gltf.materials.Yellow_Railings} />
			<T.Mesh geometry={gltf.nodes.Object_50.geometry} material={gltf.materials.Yellow_Railings} />
			<T.Mesh geometry={gltf.nodes.Object_51.geometry} material={gltf.materials.Yellow_Railings} />
			<T.Mesh geometry={gltf.nodes.Object_52.geometry} material={gltf.materials.Yellow_Railings} />
			<T.Mesh geometry={gltf.nodes.Object_53.geometry} material={gltf.materials.Yellow_Railings} />
		</T.Group>
	{:catch err}
		{@render error?.({ error: err })}
	{/await}

	{@render children?.({ ref })}
</T.Group>
