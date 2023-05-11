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

    static show(){
        let datajson = this.getPlaylist()
        console.log(datajson)
       

        
    }

    static add(params){
        // let datajson = JSON.parse(fs.readFileSync(data,'utf-8'))
        let playlists = this.getPlaylist() //class has attribute , if array can be pushed data manipulation can not be done 
                                    // foreach only be done in 
        const [name, genre, duration, playlistName] = params
        playlists.forEach(playlist =>{
            console.log(name)
            console.log(genre)
            // console.log([playlist.name])
            console.log(playlistName)
            if(playlist.name === playlistName){
                let id = playlist.songs[playlist.songs.length-1].id+1;
                if(genre === 'Pop'){
                    playlist.songs.push(new Pop(id, name, duration)) //push new class
                }
                else {
                    playlist.songs.push(new Rock(id, name, duration))
                }

            }
            console.log(playlists)
        })
        // playlists.forEach(element => {
            
        // });
    } 
}
module.exports = Playlist