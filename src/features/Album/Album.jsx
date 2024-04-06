import React from 'react';
import AlbumList from './components/AlbumList/AlbumList';

Album.propTypes = {};

function Album(props) {
  const albumList = [
    {
      id: 1,
      name: 'Bạn gái Ronaldo khi mua sắm',
      thumbnailURL:
        'https://i1-kinhdoanh.vnecdn.net/2024/04/06/tom-hum-jpeg-1712397497-171239-9294-1655-1712397949.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=o33XQotUYtX27nAsq03xXg',
    },
    {
      id: 2,
      name: 'Thương Tín dọn đồ về quê',
      thumbnailURL:
        'https://i1-vnexpress.vnecdn.net/2024/04/05/22-1712322982-1712326409.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=pstNsXLpcL3PqGDsC07HdA',
    },
    {
      id: 3,
      name: 'Đen như Độ Mixi',
      thumbnailURL:
        'https://i1-thethao.vnecdn.net/2024/04/06/man-city-jpeg-1712409678-7993-1712409863.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=3dYZDYEfXB3zi96DpIkNwA',
    },
  ];

  return (
    <div>
      <h2>Có thể bạn sẽ thích đấy</h2>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default Album;
