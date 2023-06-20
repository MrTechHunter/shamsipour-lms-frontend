const highlighter = (keyword, string, mode) => {
	const className = mode === 'detail' ? 'detail-tag' : 'title-tag';
	let words = keyword.split(' ');
	for (let i = 0; i < words.length; i++) {
		if (words[i] !== '') {
			const startPoint = string.indexOf(words[i]);
			const endPoint = words[i].length + startPoint;
			if (startPoint !== -1) {
				let theFirst = string.substring(0, startPoint);
				let theWord = string.substring(startPoint, endPoint);
				theWord = `<b class="${className}">${theWord.toString()}</b>`;
				const theRest = string.substring(endPoint, string.length + endPoint);
				string = theFirst.toString() + theWord.toString() + theRest.toString();
			}
		}
	}
	return string;
};
export default highlighter;
