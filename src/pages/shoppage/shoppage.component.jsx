import React, { Component } from 'react';
import SHOP_DATA from './shoppage.data';

import Collections from '../../component/collections/collections.component';

import './shoppage.style.scss';

class ShopPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }
    render() {
        const { collections } = this.state;
        return (
            <div>
                <h1>Collections</h1>
                <div className="shop-page">
                    {
                        collections.map(({ id, ...otherProps }) =>
                            <Collections key={id} {...otherProps} />
                        )
                    }
                </div>
            </div>
        )
    }
}

export default ShopPage;