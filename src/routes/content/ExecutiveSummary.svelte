<script lang="ts">
	import { flip } from 'svelte/animate';
	import { quintOut } from 'svelte/easing';
	import { crossfade, fade, fly, scale, slide } from 'svelte/transition';
	import Bolt from './icons/bolt.svelte';
	import { cn } from '$lib/utils';
	import Settings from './icons/settings.svelte';
	import ChartColumnIncreasing from './icons/chart-column-increasing.svelte';
	import Radar from './icons/radar.svelte';
	import Drum from './icons/drum.svelte';
	import Users from './icons/users.svelte';

	const execSummary = $state([
		{
			id: 1,
			title: 'Neque porro quisquam est qui',
			content:
				'Proin vel pellentesque ipsum. Maecenas dignissim urna libero, eu sodales mi interdum eget. Donec semper lacus a ipsum mattis pulvinar. Aenean semper ultricies lacus at tempus. Etiam hendrerit commodo interdum. Donec molestie erat fermentum, dapibus lorem eu, tincidunt ante. Etiam non leo ut lorem tincidunt fringilla eu vel est. Nulla placerat mauris in sollicitudin porttitor.',
			active: false,
			icon: Bolt,
			classes: 'text-dgreen-200'
		},
		{
			id: 2,
			title: 'Suspendisse volutpat et ipsum',
			content:
				'Proin vel pellentesque ipsum. Maecenas dignissim urna libero, eu sodales mi interdum eget. Donec semper lacus a ipsum mattis pulvinar. Aenean semper ultricies lacus at tempus. Etiam hendrerit commodo interdum. Donec molestie erat fermentum, dapibus lorem eu, tincidunt ante. Etiam non leo ut lorem tincidunt fringilla eu vel est. Nulla placerat mauris in sollicitudin porttitor.',
			active: false,
			icon: Users,
			classes: 'text-dblue-200'
		},
		{
			id: 3,
			title: 'Donec sed vulputate tellus',
			content:
				'Proin vel pellentesque ipsum. Maecenas dignissim urna libero, eu sodales mi interdum eget. Donec semper lacus a ipsum mattis pulvinar. Aenean semper ultricies lacus at tempus. Etiam hendrerit commodo interdum. Donec molestie erat fermentum, dapibus lorem eu, tincidunt ante. Etiam non leo ut lorem tincidunt fringilla eu vel est. Nulla placerat mauris in sollicitudin porttitor.',
			active: false,
			icon: Radar,
			classes: 'text-dteal-200'
		},
		{
			id: 4,
			title: 'Pellentesque ornare commodo',
			content:
				'Proin vel pellentesque ipsum. Maecenas dignissim urna libero, eu sodales mi interdum eget. Donec semper lacus a ipsum mattis pulvinar. Aenean semper ultricies lacus at tempus. Etiam hendrerit commodo interdum. Donec molestie erat fermentum, dapibus lorem eu, tincidunt ante. Etiam non leo ut lorem tincidunt fringilla eu vel est. Nulla placerat mauris in sollicitudin porttitor.',
			active: false,
			icon: Drum,
			classes: 'text-dgreen-400'
		}
	]);

	export const [send, receive] = crossfade({
		duration: (d) => Math.sqrt(d * 200),

		fallback(node, params) {
			const style = getComputedStyle(node);
			const transform = style.transform === 'none' ? '' : style.transform;

			return {
				duration: 600,
				easing: quintOut,
				css: (t) => `
				transform: ${transform} scale(${t});
				opacity: ${t}
			`
			};
		}
	});
</script>

<section class="exec h-[350px] max-w-[600px]" in:fade={{ delay: 500 }}>
	<h1 class="mb-6 text-2xl font-light text-foreground/70" in:slide>Something interesting here</h1>

	{#if !execSummary.filter((i) => i.active).length}
		<div class="gallery grid h-full w-full grid-cols-2 gap-8">
			{#each execSummary as item, idx (item.id)}
				<button
					onclick={() => {
						execSummary.forEach((i) => (i.active = false));
						item.active = true;
						console.log(item);
					}}
					in:fly|global={{ delay: idx * 100, y: -50 }}
					class="item group animate-gradientx rounded-lg bg-gradient-to-tr from-gray-900 from-40% via-gray-700 via-50% to-black to-80% p-[1px] text-left font-light transition-all hover:via-dgreen-200"
				>
					<div class="inner grid h-full content-between rounded-lg bg-black p-6">
						<p class="text-foreground/80">
							{item.title}
						</p>
						<item.icon
							isHovered={true}
							strokeWidth={0.5}
							size={50}
							classes={cn(
								'justify-self-end w-full justify-items-end grid group-hover:scale-110  transition-all',
								item.classes
							)}
						/>
					</div>
				</button>
			{/each}
		</div>
	{:else}
		<div class="gallery grid h-full w-full gap-8">
			{#each execSummary.filter((i) => i.active) as item, idx (item.id)}
				<button
					in:scale|global={{ start: 0 }}
					onclick={() => (item.active = false)}
					class="activeItem w-full animate-gradientx rounded-lg bg-gradient-to-tr from-gray-900 from-40% via-gray-500 via-50% to-black to-80% p-[1px] text-left"
				>
					<div class={cn('inner relative h-full rounded-lg bg-black p-6')}>
						<h2 class={cn('mb-4 text-2xl font-light tracking-wide', item.classes)}>{item.title}</h2>
						<p class="w-3/4 text-balance font-[200] text-foreground/80">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sit dolorum recusandae,
							quis facilis veniam doloremque? Eum esse porro, eos reiciendis officia aspernatur
							eveniet? Voluptate voluptatibus eos inventore quisquam modi. Sapiente quidem eligendi
							ipsum facilis labore asperiores sequi impedit aut expedita dolorum quae ipsa
							assumenda, corporis consequuntur sit voluptas eum atque esse vitae perferendis
							consectetur.
						</p>
						<item.icon
							isHovered={true}
							strokeWidth={0.2}
							size={120}
							classes={cn(
								'absolute bottom-12 right-12 justify-self-end group-hover:scale-150 transition-all',
								item.classes
							)}
						/>
					</div>
				</button>
			{/each}
		</div>
	{/if}
</section>
