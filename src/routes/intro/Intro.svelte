<script>
	import { fade, fly, slide } from 'svelte/transition';
</script>

<section class="exec">
	<h1 class="mb-6 text-5xl font-thin text-dgreen-200" in:slide={{ delay: 500 }}>We heard you</h1>

	<p in:fly={{ y: -50, delay: 300 }}>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ad quaerat ducimus? Tempore cum
		error ratione sapiente est doloribus dolores commodi amet neque voluptates, facilis optio quo
		accusantium eos a.
	</p>
</section>
