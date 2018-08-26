import Link from 'next/link'

function Header() {
	return (
		<div className="Header">
			<Link href="/">
				<a className="Header__Link">Home</a>
			</Link>
			<Link href="/about">
				<a className="Header__Link">About</a>
			</Link>
		</div>
	)
}

export default Header