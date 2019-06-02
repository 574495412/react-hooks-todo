import React, { useEffect } from 'react'

import { CritterList } from '../../views/CritterList/CritterList'
import { MoneyControls } from '../MoneyControls/MoneyControls'

import { UpgradeStore } from '../../state/upgradeStore'
import { useMoneyState } from '../../state/useMoneyState'

import './App.css'

const App = () => {
	const { addGatherer, addMoney, calculateGathererIncome, collectFromGatherers, gatherers, money } = useMoneyState(0)
	const upgradeStore = new UpgradeStore()

	// NOTE: This happens before un-render (only once)
	const handleUnmount = () => {}

	// NOTE: This happens after render (only once)
	const handleMounted = () => {
		window.document.title = 'Critter Manager'

		return handleUnmount
	}

	// NOTE: empty (no arg) to track nothing, just fire on mount/unmount
	useEffect(handleMounted, [])

	// console.info(`About to render`)

	return (
		<article className="app">
			<MoneyControls
				addGatherer={addGatherer} calculateGathererIncome={calculateGathererIncome} collectFromGatherers={collectFromGatherers} gatherers={gatherers}
				addMoney={addMoney} money={money}
				upgradeStore={upgradeStore} />
			<CritterList currentMoney={money} />
		</article>
	)
}

export default App
