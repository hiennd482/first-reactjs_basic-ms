import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

function Album(props) {
    const { album } = props
    return (
        <div className='album'>
            <p className='albumName'>{album.name}</p>
            <div className='albumThumb'>
                <img src={album.thumbnail_url} alt="" />
            </div>
        </div>
    )
}

Album.propTypes = {
    album: PropTypes.object.isRequired
}

export default Album
