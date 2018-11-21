import React, { Component } from 'react';
import './AboutAuthor.css';

class aboutAuthor extends Component {
    render() {
        return (
            <div className='authorBio'>
			<div className='authorImageContainer'>
				<img className='authorImage' src='https://vignette.wikia.nocookie.net/snk/images/3/35/Ngbc-kyo-select-portrait-b.png/revision/latest?cb=20130704020920' alt='' title='Placeholder Image' />
			</div>
			<div className='authorDescription'>
			<h1>About "Eternal" Vigil</h1>
			Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
			</div>
		</div>
        );
    }
}

export default aboutAuthor;