<script>
	import { EffectComposer } from 'threlte-postprocessing';
	import {
		DepthOfFieldEffect,
		BloomEffect,
		NoiseEffect,
		VignetteEffect,
		ChromaticAberrationEffect,
		DotScreenEffect,
		GodRaysEffect,
		ColorAverageEffect,
		SepiaEffect,
		SMAAEffect
	} from 'threlte-postprocessing/effects';
	import { BlendFunction, EdgeDetectionMode, SMAAPreset } from 'postprocessing';
</script>

<EffectComposer>
	<!-- <Fluid /> -->
	<DepthOfFieldEffect focusDistance={0} focalLength={0.1} bokehScale={2} height={1000} />
	<!-- <BloomEffect luminanceThreshold={0} luminanceSmoothing={1} height={300} /> -->
	<NoiseEffect opacity={1} premultiply={true} blendFunction={BlendFunction.SCREEN} />
	<ChromaticAberrationEffect
		offset={[0.0015, 0.0015]}
		radialModulation={false}
		modulationOffset={5}
	/>

	<!-- <ColorGradingEffect lut={texture} lutSize={32} intensity={1.0} /> -->

	<!-- <SepiaEffect intensity={-10} /> -->
	<!-- <ColorAverageEffect blendFunction={BlendFunction.SCREEN} /> -->
	<!-- <VignetteEffect eskil={false} offset={0.1} darkness={1.1} /> -->
	<!-- <DotScreenEffect angle={1.57} scale={0.5} /> -->
	<!-- <GlitchEffect delay={[1.5, 3.5]} duration={[0.6, 1.0]} strength={[0.3, 1.0]} /> -->
	<!-- <GodRaysEffect decay={0.95} density={0.96} weight={0.4} exposure={0.6} samples={60} /> -->
	<SMAAEffect preset={SMAAPreset.HIGH} edgeDetectionMode={EdgeDetectionMode.COLOR} />
</EffectComposer>
