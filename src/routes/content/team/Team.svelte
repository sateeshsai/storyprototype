<script lang="ts">
	import Card from './Card.svelte';
	const radius = 10;

	const teamMembers: any = [1, 2, 3, 4, 5, 6, 7];
</script>

{#each teamMembers as award, index}
	{@const url =
		'https://plus.unsplash.com/premium_photo-1723770023600-8083358720aa?q=80&w=2188&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
	<Card
		{url}
		position={[
			Math.sin((index / teamMembers.length) * Math.PI * 2) * radius,
			1,
			Math.cos((index / teamMembers.length) * Math.PI * 2) * radius
		]}
		rotation={[0, Math.PI + (index / teamMembers.length) * Math.PI * 2, 0]}
	/>
{/each}
