module.exports = {
	printWidth: 120,
	tabWidth: 2,
	useTabs: true,
	singleQuote: true,
	/**
	 * Ref - https://prettier.io/blog/2018/11/07/1.15.0.html#whitespace-sensitive-formatting
	 * this will explain the reson as to why for display: inline elements like <span> and <a> will have
	 * prettier fixed issues as below
	 * ```html
	 * <span class="dolorum atque aspernatur"
	 * >Est molestiae sunt facilis qui rem.</span
	 * >
	 * ```
	 * instead of
	 * <span class="dolorum atque aspernatur">Est molestiae sunt facilis qui rem.</span>
	 *
	 * the default config here is
	 * --html-whitespace-sensitivity="css"
	 */
	bracketSameLine: true,
};
