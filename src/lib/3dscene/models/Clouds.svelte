<script lang="ts">
	import { T, useTask, useThrelteUserContext } from '@threlte/core';

	import fragmentShader from './textures/fragment.glsl?raw';
	import vertexShader from './textures/vertex.glsl?raw';
	import { Tween } from 'svelte/motion';
	import { PlaneGeometry, Vector2, Vector3, Vector4 } from 'three';
	import { quadOut } from 'svelte/easing';
	const pulsePosition = new Vector3();

	const pulseTimer = new Tween(0, {
		easing: quadOut
	});

	// import { Clouds } from '@pmndrs/vanilla';

	const iTime = $state({ value: 0.0 });
	const iResolution = { value: new Vector2(100, 100) };

	useTask((delta) => {
		// iTime.value = delta;
		//   iChannel0.value = state.textures.channel0;
		//   iChannel1.value = state.textures.channel1;
		//   iMouse.value = new Float32Array([
		//     state.mouse.position.x,
		//     state.mouse.position.y,
		//     state.mouse.down ? 1 : 0,
		//     0,
		//   ]);
	});
	const userCtx = useThrelteUserContext();
	// const clouds = new Clouds();

	import { Mesh } from 'three';
</script>

<T is={Mesh} />

<!-- 
<T.Mesh>
	<T.BoxGeometry args={[10, 10, 10]} />
	<T.ShaderMaterial
		{fragmentShader}
		{vertexShader}
		uniforms={{
			iTime: iTime,
			iResolution: iResolution
		}}
		uniforms.iTime.value={iTime.value}
		uniforms.iResolution.value={iResolution.value}
	/>
</T.Mesh> -->
