const importAll = (context) => {
	let images = []
	context.keys().forEach((item) => {
		images.push(context(item))
	})
	return images
}

export const BgAnimImages = importAll(require.context(`./BgAnim`, false, /\.(png|jpe?g|svg)$/))
