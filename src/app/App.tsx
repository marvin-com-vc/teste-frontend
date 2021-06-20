import './App.css'

import React, { FunctionComponent } from 'react'

import logo from 'assets/logo.svg'

export const App: FunctionComponent = () => (
	<div className="app">
		<a className="app__link" href="https://www.marvin.com.vc">
			<img className="app__logo" src={logo} alt="logo" />
		</a>
		<p>
			Altere o arquivo <code>src/App.tsx</code> e salve para atualizar
		</p>
	</div>
)
