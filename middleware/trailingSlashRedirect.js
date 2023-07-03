export default function ({ route: { path, query, hash }, redirect }) {
	if (path !== '/' && !path.endsWith('/')) {
		redirect({ path: path + '/', query, hash });
	}
}
