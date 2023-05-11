const command = process.argv[2]
const params = process.argv.slice(3);
const PlaylistController = require('./controllers/PlaylistController')
switch(command)
{
    case 'add':
        PlaylistController.add(params)
        break;

    case 'remove':
        PlaylistController.remove(params)
        break;

    case 'create':
        PlaylistController.create(params)
        break;

    case 'show':
        PlaylistController.getPlaylist()
        break;
    default:
        console.log('There is no such command!!!!');
        break;
}
// console.log(command)