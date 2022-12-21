<script lang="ts">
	import { snap } from '../store/pickerStore';

	const colors = [
		'#000000',
		'#FFFFFF',
		'#0090B2',
		'#AFDFF1',
		'#297CA6',
		'#0F298F',
		'#161747',
		'#CAB253',
		'#FDC070',
		'#D90000',
		'#B30000',
		'#07852F',
		'#56AC42'
	];
	let color = colors[0];

	const onColorChange = (color: string) => {
		snap.update((s) => {
			return {
				...s,
				items: {
					...s.items,
					[`${$snap.current}`]: color
				}
			};
		});
	};

	$: if ($snap.current) color = ($snap.items as any)[$snap.current];
</script>

{#if $snap.current}
	<div class="absolute inset-2 lg:inset-10 flex items-center w-96 h-40 space-x-4">
		<div class="rounded-lg border grid grid-cols-4 gap-2 p-2 bg-white/20">
			{#each colors as color (color)}
				<div
					class="rounded-full border-2 border-gray-700 w-6 h-6 lg:w-10 lg:h-10"
					style="background-color: {color};"
					on:click={() => onColorChange(color)}
					on:keydown
				/>
			{/each}
		</div>

		<h1 class="font-bold text-4xl lg:text-5xl capitalize font-sans text-gray-800">
			{$snap.current ?? 'Select'}
		</h1>
	</div>
{/if}
