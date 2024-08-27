import * as prismic from '@prismicio/client';
/**
 * @param {Object} args
 * @param {prismic.Content.CaseStudiesSlice} args.slice
 * @param {{ client: prismic.Client<prismic.Content.AllDocumentTypes>}} args.context
 */

export default async function mapper({ slice, context }) {
	// console.log(slice.primary.case_study);
	const caseStudies = (
		await Promise.all(
			slice.primary.case_study.map(async (item) => {
				// console.log(item);
				if (prismic.isFilled.contentRelationship(item.case)) {
					return /** @type {prismic.Content.CaseStudyDocument} */ (
						await context.client.getByID(item.case.id)
					);
				}
			})
		)
	).filter(Boolean);

	return {
		slice,
		caseStudies
	};
}
