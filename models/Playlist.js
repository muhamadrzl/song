const fs = require('fs')
const data = './data.json'
const {Pop, Rock } = require('./Song')
class Playlist{
    constructor(id, name,songs){
        this.id = id,
        this.name = name,
        this.songs = songs || []
    }

    static getPlaylist(){
         let datajson = JSON.parse(fs.readFileSync(data,'utf-8'))
        //  console.log(datajson)
         let playlists = datajson.map((playlist)=>{
                let {id, name, songs} = playlist
                songs = songs.map(song => {
                    const {id, name, duration, genre} = song
                    if (genre === 'Pop'){
                        return new Pop(id, name, duration)
                    }else{
                        return new Rock(id, name, duration)
                    }
                })
                return new Playlist(id, name, songs)
         })
        return playlists
    }

    static show(data){
        let datajson = this.getPlaylist(data)
        console.log(datajson)
        
    }

    static add(params){
        let datajson = JSON.parse(fs.readFileSync(data,'utf-8'))
    }
}
module.exports = Playlist