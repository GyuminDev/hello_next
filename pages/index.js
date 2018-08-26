import Layout from '../components/Layout'
import Link from 'next/link'

function Index() {
	return (
		<Layout>
			<h1>My Blog</h1>
			<ul>
				<PostLink title="Hello Next.js"/>
				<PostLink title="Learn Next.js is awesome"/>
				<PostLink title="Deploy apps with Zeit"/>
			</ul>
		</Layout>
	)
}

function PostLink({title}) {
	return (
		<li>
			<Link href={`/post?title=${title}`}>
				<a>{title}</a>
			</Link>
		</li>
	)
}


export default Index