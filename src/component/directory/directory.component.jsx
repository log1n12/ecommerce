import React, { Component } from 'react';
import './directory.style.scss';
import MenuList from '../../component/menu-list/menu-list.component';

class Directory extends Component {
    constructor() {
        super();
        this.state = {
            sections: [
                {
                    id: 1,
                    title: "Hats",
                    image: "https://i.ibb.co/R70vBrQ/men.png",
                    linkUrl: "hats"
                },
                {
                    id: 2,
                    title: "Jackets",
                    image: "https://i.ibb.co/R70vBrQ/men.png",
                    linkUrl: "jackets"
                },
                {
                    id: 3,
                    title: "Sneakers",
                    image: "https://i.ibb.co/R70vBrQ/men.png",
                    linkUrl: "sneakers"
                },
                {
                    id: 4,
                    title: "Womens",
                    image: "https://i.ibb.co/R70vBrQ/men.png",
                    size: 'large',
                    linkUrl: "womens"
                },
                {
                    id: 5,
                    title: "Mens",
                    image: "https://i.ibb.co/R70vBrQ/men.png",
                    size: 'large',
                    linkUrl: "mens"
                }
            ]
        }
    }

    render() {
        return (
            <div className="directory">
                {this.state.sections.map(({ id, ...otherSectionProps }) =>
                    <MenuList
                        key={id}
                        {...otherSectionProps}
                    />
                )}
            </div>
        )
    }
}


export default Directory;