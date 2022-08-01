import React from 'react';
import emptyImg from '../../assets/emptysvg.png'

const Empty = ({description}) => {
    return (
        <div className="empty__list">
            <img src={emptyImg} alt="" className='empty__list--image'/>
            <span className='empty__list--description'>
                {description ? description : "Sorry! Nothing Matched Your Search Results"}
            </span>

        </div>
    );
}

export default Empty;
