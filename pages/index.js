import Layout from '../components/Layout'
import Link from 'next/link'
import React from "react";

function Index() {
	return (
		<Layout>
			<h1>My Blog</h1>
			<ul>
				<PostLink id="hello-nextjs" title="Hello Next.js"/>
				<PostLink id="learn-nextjs" title="Learn Next.js is awesome"/>
				<PostLink id="deploy-nextjs" title="Deploy apps with Zeit"/>
			</ul>
		</Layout>
	)
}

function PostLink({id, title}) {
	return (
		<li>
			<Link as={`/post/${id}`} href={`/post?title=${title}`}>
				<a>{title}</a>
			</Link>
		</li>
	)
}


export default Index