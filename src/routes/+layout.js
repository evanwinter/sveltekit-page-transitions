/** @type {import('./$types').LayoutLoad} */
export const load = async ({ url: { pathname } }) => {
	return { pathname };
};
