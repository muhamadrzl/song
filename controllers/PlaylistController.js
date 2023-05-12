const Playlist = require('../models/Playlist')
class PlaylistController{
    static getPlaylist()
    {
       Playlist.show()
    }
    static show(){

    }
    static add(params){
        Playlist.add(params)
    }
    static remove(params){
        Playlist.remove(params)
    }
    static create(params){
        Playlist.create(params)
    }
}



module.exports = PlaylistController