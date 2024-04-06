import PropTypes from 'prop-types';
import React from 'react';
import AlbumItem from '../AlbumItem/AlbumItem';
import './style.scss';

AlbumList.propTypes = {
  albumList: PropTypes.array.isRequired,
};

AlbumList.defaultProps = {
  albumList: [],
};

function AlbumList({ albumList }) {
  return (
    <ul className="album-list">
      {albumList.map((album) => (
        <li key={album.id}>
          <AlbumItem album={album} />
        </li>
      ))}
    </ul>
  );
}

export default AlbumList;
