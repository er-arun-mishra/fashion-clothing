import React from 'react';
import './directory.style.scss';
import MenuItem from '../menu-item/menu-item.component';
import { selectDirectorySections }from '../../redux/directory/directory.selectors.js'
import { createStructuredSelector } from "reselect"

import { connect } from 'react-redux';

const Directory = ({sections}) => (
        <div className='directory-menu'>
        {
            sections.map(({id,...sectionProps})=>(
                <MenuItem key={id} {...sectionProps}></MenuItem>
            ))
        }
    </div>
)

// class Directory extends React.Component {
//     constructor(){
//         super();
//         this.state={
//             sections : [
//                 {
//                   title: 'Hats',
//                   imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
//                   id: 1,
//                   linkUrl: 'shop/hats'
//                 },
//                 {
//                   title: 'Jackets',
//                   imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
//                   id: 2,
//                   linkUrl: 'shop/jackets'
//                 },
//                 {
//                   title: 'Sneakers',
//                   imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
//                   id: 3,
//                   linkUrl: 'shop/sneakers'
//                 },
//                 {
//                   title: 'Womens',
//                   imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
//                   size: 'large',
//                   id: 4,
//                   linkUrl: 'shop/womens'
//                 },
//                 {
//                   title: 'Mens',
//                   imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
//                   size: 'large',
//                   id: 5,
//                   linkUrl: 'shop/mens'
//                 }
//               ]
//         }
//     }

//     render(){
//         return (
//             <div className='directory-menu'>
//             {
//                 this.state.sections.map(({id,...sectionProps})=>(
//                     <MenuItem key={id} {...sectionProps}></MenuItem>
//                 ))
//             }
//         </div>
//         )
//     }
// }

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);