import React from 'react'


export class Header extends React.Component {
	render() {
		return (
			<header className="header">
				<h1>Cash</h1>
				<h2>Expense Management</h2>
			</header>
		);
	}
};

export class Main extends React.Component {
	render() {
		return (
			<main className="main">
				<article className="article">
				
				</article>
			</main>
		);
	}
};

export class Footer extends React.Component {
	render() {
		return (
			<footer className="footer">
				<p className="escape--default">&copy; 2016 <a href="https://matthamlin.me" className="link">Matt Hamlin</a></p>
			</footer>
		);
	}
};