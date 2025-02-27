<script>
	import World from '$lib/3dscene/World.svelte';
	import Deloitte from '$lib/deloitte/Deloitte.svelte';
	import LoaderCircle from 'lucide-svelte/icons/loader-circle';
	import Content from './Content.svelte';
	import { fade } from 'svelte/transition';

	let environmentIsBackground = $state(false);

	// const environmentUrl = '/hdrs/test.hdr';
	// let environmentUrl = $state('/hdrs/kloofendal_48d_partly_cloudy_puresky_1k.hdr');
	// let environmentUrl = $state('/hdrs/starmap_g4k_print.jpg');
	// let environmentUrl = $state('/hdrs/rogland_clear_night_4k.hdr');
	let environmentUrl = $state('/hdrs/NightSkyHDRI003_4K-HDR.exr');
	// let environmentUrl = $state('/hdrs/cosmos.jpeg');

	// const environmentUrl = '/hdrs/test.hdr';

	let sceneProgress = $state(0);
</script>

<div class="  bg-black">
	<div class="fixed left-0 top-0 h-[100svh] w-[100vw]">
		<World bind:sceneProgress {environmentIsBackground} {environmentUrl} />
	</div>

	<div class="logo fixed left-6 top-6">
		<Deloitte />
	</div>
	<!-- <button
		class="z-10 col-start-1 row-start-1"
		onclick={() => {
			environmentUrl = '/hdrs/kloofendal_48d_partly_cloudy_puresky_1k.hdr';
		}}>ENV</button
	> -->

	{#if sceneProgress < 100}
		<div
			transition:fade
			class="fixed left-0 top-0 z-20 grid h-full w-full place-items-center content-center gap-2 bg-background"
		>
			<LoaderCircle class="animate-spin" />
			<p>Loading</p>
			<p>{sceneProgress.toFixed(0)}%</p>
		</div>
	{:else}
		<Content />
	{/if}
</div>
