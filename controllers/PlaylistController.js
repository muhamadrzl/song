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
    static remove(){

    }
    static create(){

    }
}



module.exports = PlaylistController