import React from 'react';
import './CollectionOverview.scss';
import CollectionPreview from '../CollectionOverview/CollectionOverview';
import CollectionData from './CollectionData';

const CollectionOverview = () => {
    return(
        <div className="collection-overview">
			{
				CollectionData.map(items => <CollectionPreview id={items.id} title={items.title} />)
			}
        </div>
        
    );
}

export default CollectionOverview;