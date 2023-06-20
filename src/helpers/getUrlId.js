export default () => {
	const path = window.location.pathname.split('/');
	return path[path.length - 1];
};
