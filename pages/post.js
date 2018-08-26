import Layout from '../components/Layout'

function Post(props) {
	return (
		<Layout>
			<PostTitle title={props.url.query.title}/>
			<p>This is the blog post content.</p>
		</Layout>
	)
}

function PostTitle({title}) {
	return (
		<h1>{title}</h1>
	)
}


export default Post