import Link from 'next/link'

const headerStyle = {
	marginRight: 10
}

function Header() {
	return (
		<div className="Header">
			<Link href="/">
				<a style={headerStyle}>Home</a>
			</Link>
			<Link href="/about">
				<a style={headerStyle}>About</a>
			</Link>
		</div>
	)
}

export default Header