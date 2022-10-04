function make_album(name, title, tracks) {
    const album = {
        artistName: name,
        albumTitle: title,
    }

    if (tracks) {
        album["tracks"] = tracks;
    }

    return album;
}

console.log(make_album("Arijit singh", "lambiyan judaiyan"))
console.log(make_album("Neha Kakkar", "Naseebon sy"))
console.log(make_album("Atif Aslam", "Tum hi ho", 3))