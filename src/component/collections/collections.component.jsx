import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import './collections.style.scss';

const Collections = ({ title, items }) => (
    <div className="collection-preview">
        <h1 className="title">{title}</h1>
        <div className="preview">
            {items.filter((item, idx) => idx < 4).map(({ id, ...otherCollectionProps }) =>
                <CollectionItem key={id} {...otherCollectionProps} />
            )}
        </div>


    </div>
)

export default Collections;