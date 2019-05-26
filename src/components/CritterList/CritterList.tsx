import React, { useEffect } from 'react'

import { Critter } from '../Critter/Critter'
import { CritterListControls } from '../CritterListControls/CritterListControls'

import { useCritterState } from '../../state/useCritterState'

import './CritterList.css'

const CritterList = () => {
	const { clearCritters, critters, loadFromStorage, saveToLocalStorage, spawnCritter } = useCritterState([])

	const startCombat = () => {
		console.log('[startCombat | CritterList] Starting combat...')
	}

	useEffect(() => {
		loadFromStorage()
	}, [])

	return (
		<article className="critter-list">
			<CritterListControls
				canStartCombat={critters.filter(critter => false).length > 1}
				clearCritters={clearCritters}
				saveToLocalStorage={saveToLocalStorage}
				shouldShowCombat={true}
				spawnCritter={spawnCritter}
				startCombat={startCombat} />
			<section className="display-container">
				{critters.map(critter => <Critter key={critter.id} critter={critter} />)}
			</section>
		</article>
	)
}

export { CritterList }
