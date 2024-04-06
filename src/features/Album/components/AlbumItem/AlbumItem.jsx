import PropTypes from 'prop-types';
import React from 'react';
import './style.scss';

AlbumItem.propTypes = {
  album: PropTypes.object,
};

function AlbumItem({ album }) {
  return (
    <div className="album">
      <div className="album__thumbnail">
        <img src={album.thumbnailURL} alt={album.name} />
      </div>

      <p className="album__name">{album.name}</p>
    </div>
  );
}

export default AlbumItem;
