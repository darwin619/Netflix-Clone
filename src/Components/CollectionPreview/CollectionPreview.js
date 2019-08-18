import React from 'react';
import './CollectionPreview.scss'
import CollectionItem from '../CollectionItem/CollectionItem';
import {connect} from 'react-redux';
import {selectMovieItems} from '../../Redux/Movie/movie-selectors';

	const CollectionPreview = ( {title,movieItems} ) => {
		return (
			<div className="collection-preview">
				<h1 className="title">{title.toUpperCase()}</h1>
				<div className="preview">
					{movieItems
						.filter((item,index) => index < 4 )
						.map(item => (
						<CollectionItem key={item.id} item={item} />
					))}
			</div>
			</div>
		);
}

const mapStateToProps = state => ({
	movieItems: selectMovieItems(state),
})



export default connect(mapStateToProps)(CollectionPreview);