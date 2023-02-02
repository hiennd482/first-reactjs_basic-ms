import React from 'react';
import Albumlt from '../components/AlbumLIst'

const FeaturesAlbum = () => {
    const album = [
        {
            id: 1,
            name: 'tesst 1',
            thumbnail_url: 'https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6'
        },
        {
            id: 2,
            name: 'tesst 2',
            thumbnail_url: 'https://i.scdn.co/image/ab67706f000000025551996f500ba876bda73fa5'
        },
        {
            id: 3,
            name: 'tesst 3',
            thumbnail_url: 'https://i.scdn.co/image/ab67706f000000025d87659dcadef82dd0e73f56'
        }

    ]
    return (
        <div>
            <Albumlt album={album}></Albumlt>
        </div>
    );
};

export default FeaturesAlbum;