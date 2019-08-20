import React from 'react';
import './CollectionOverview.scss';
import CollectionPreview from '../CollectionPreview/CollectionPreview';
import CollectionData from './CollectionData';

const CollectionOverview = ({movies,tvshow}) => {
	console.log(movies,tvshow)
return (
    <div className="collection-overview">
		{
			CollectionData.map(items => 
				<CollectionPreview key={items.id} title={items.title} start={items.start} end={items.end} movies={movies} tvshow={tvshow} />)
		}
    </div>
    
);
}

export default CollectionOverview;