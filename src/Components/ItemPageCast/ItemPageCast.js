import React from 'react';
import {IMAGE_BASE_URL, PROFILE_SIZE} from '../../Config/config';

const ItemPageCast = ({profile_path, name}) => {

        const profileUrl = `${IMAGE_BASE_URL}${PROFILE_SIZE}`
    	return (
        <div className="cast">
            <div className="image-contain">
                 <img src={`${profileUrl}/${profile_path}`} 
                    alt="profile_path" 
                    className="profile" 
                  />
            </div>
                <span className="profile-name">{`${name}`}</span>
        </div>
    	);
    }

export default ItemPageCast;

