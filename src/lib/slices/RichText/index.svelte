<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { PrismicRichText } from '@prismicio/svelte';
	import Label from './Label.svelte';

	export let slice: Content.RichTextSlice;
</script>

<section class="">
	<PrismicRichText
		field={slice.primary.content}
		components={{
			label: Label
		}}
	/>
</section>
