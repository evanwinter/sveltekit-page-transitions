import adapter from "@sveltejs/adapter-netlify";

/** @type {import('@sveltejs/kit').Config} */
const svelteConfig = {
  kit: {
    adapter: adapter(),
  },
};

export default svelteConfig;
