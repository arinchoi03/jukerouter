import React, { Component } from 'react';
import {Link} from 'react-router'

export default class Artist extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getArtist(this.props.routeParams.artistId)
    this.props.getAlbums(this.props.routeParams.artistId)
    this.props.getSongs(this.props.routeParams.artistId)
  }


  render() {
    return (<div>
              <h3>{this.props.selectedArtist.name}</h3>
              <h4>ALBUMS</h4>
              <div>
                <div className="row">
                {
                  this.props.artistAlbums.map(album => (
                    <div className="col-xs-4" key={ album.id }>
                      <Link to={`/albums/${album.id}`} className="thumbnail">
                        <img src={ album.imageUrl } />
                        <div className="caption">
                          <h5>
                            <span>{ album.name }</span>
                          </h5>
                          <small>{ album.songs.length } songs</small>
                        </div>
                        </Link>
                    </div>
                  ))
                }
                </div>
              </div>
              <h4>SONGS</h4>
                <table className='table'>
                  <thead>
                    <tr>
                      <th></th>
                      <th>Name</th>
                      <th>Artists</th>
                      <th>Genre</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      this.props.artistSongs && this.props.artistSongs.map(song => (
                        <tr key={song.id}>
                          <td>
                            <button className="btn btn-default btn-xs" onClick={() => toggle(song, this.props.artistSongs)}>
                              <span className={song.id === this.props.currentSong.id && this.props.isPlaying ? "glyphicon glyphicon-pause" : "glyphicon glyphicon-play"}></span>
                            </button>
                          </td>
                          <td>{ song.name }</td>
                          <td>
                            <span>{ song.artists ? song.artists.map(artist => artist.name).join(', ') : null }</span>
                          </td>
                          <td>{ song.genre }</td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
            </div>)

  }
}
