import React, { Component } from 'react';
import Header from '../Header.js';
import Footer from '../Footer.js';

import DnDHero from '../DnDHero.js';
import CampaignSelector from '../CampaignSelector.js';
import CreateCharacterHero from '../CreateCharacterHero.js';


class DnD extends Component {
	render() {
		return (
			<div className = 'App tableTop'>
			<Header />
			<DnDHero />
			<CampaignSelector />
			<CreateCharacterHero />
			<Footer />
			</div>

			);
	}
}

export default DnD;