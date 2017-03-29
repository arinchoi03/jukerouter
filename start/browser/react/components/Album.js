'use strict'

import React from 'react';
import Songs from '../components/Songs';
import Mailto from 'react-mailto';

export default class Album extends React.Component {

  constructor(props){
    super(props)
    this.email.bind(this);
  }

  componentDidMount() {
    const albumId = this.props.routeParams.albumId;
    const selectAlbum = this.props.selectAlbum;
    selectAlbum(albumId);
  }

          // <a href={`mailto:?subject=${album.name}&body=check out this album localhost:1337/albums/${album.id}!!!!`}>hello</a>
  email() {
    {this.href = `mailto:?subject=${album.name}&body=check out this album localhost:1337/albums/${album.id}!!!!`}
  }

  render() {
    //console.log(this.props)
    const album = this.props.album
    return (
      <div className="album">
        <div>
          <h3>{ album.name }
              <a href={`mailto:?subject=${album.name}&body=check out this album localhost:1337/albums/${album.id}!!!!`}>
                <span className="glyphicon glyphicon-envelope">
                </span>
              </a>
          </h3>
          <img src={ album.imageUrl } className="img-thumbnail" />
        </div>
        <Songs
          songs={ album.songs}
          currentSong={this.props.currentSong}
          isPlaying={this.props.isPlaying}
          toggleOne={this.props.toggleOne} />
      </div>
    );
  }
}

            // <button className="btn btn-default btn-xs" >
            // </button>


              // <Mailto email={null} headers={{subject: album.name, body: `check out this awesome album localhost:1337/albums/${album.id}`}}>
              // </Mailto>
