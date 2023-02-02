import React from 'react';
import PropTypes from 'prop-types';
import Album from '../Album';
import './style.scss';

function Ablist(props) {
  const { album } = props;
  return (
    <div>
      <ul className="album_Listt">
        {album.map((album) => (
            
          <li key={album.id}>
            <Album album={album}></Album>
          </li>
        ))}
      </ul>
    </div>
  );
}

Ablist.propTypes = {
  album: PropTypes.array.isRequired,
};

export default Ablist;
