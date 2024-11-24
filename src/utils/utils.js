export function randomNumber(start, end) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}

export const ALBUM_URLS=[
    "https://cdn.pixabay.com/photo/2022/07/24/11/35/women-7341444_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/08/29/20/00/dahlia-8222052_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/02/24/07/24/stilt-8593487_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/03/21/20/39/facade-7868160_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/10/24/21/35/hippopotamus-9147023_1280.jpg",
    "https://cdn.pixabay.com/photo/2022/06/21/08/57/male-7275452_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/05/16/09/18/tulip-8765477_1280.jpg",
    "https://cdn.pixabay.com/photo/2022/11/10/20/29/snowman-7583640_1280.jpg",
    "https://cdn.pixabay.com/video/2024/09/07/230248_tiny.jpg",
    "https://cdn.pixabay.com/photo/2024/11/11/14/05/flamingo-9190160_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/11/02/17/29/city-9169729_1280.jpg",
    "https://cdn.pixabay.com/photo/2022/01/13/00/08/austria-6934184_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/11/30/17/34/background-8422123_1280.png",
    "https://cdn.pixabay.com/photo/2024/10/12/17/15/flowers-9115519_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/03/28/09/29/tulip-7882705_1280.jpg",
    "https://cdn.pixabay.com/photo/2021/10/20/20/01/thank-you-6727181_1280.jpg",
    "https://cdn.pixabay.com/photo/2019/01/06/21/54/cookies-3918049_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/02/04/16/29/boat-7767575_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/01/24/15/11/nave-7741260_1280.jpg",
    "https://cdn.pixabay.com/photo/2022/11/27/13/27/couple-7619797_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/05/30/15/34/silver-gull-8028945_1280.jpg"
];

const albumTags = [
    "Music", "Photography", "Art", "Tracks", "Collection", "Songs", "Memories", "Portfolio", "Gallery", 
    "Playlist", "Recording", "Compilation", "Vinyl", "Cover", "Band", "Artists", "Photoshoot", "Favorites", 
    "Hits", "Recording Studio", "Live", "Studio", "Soundtrack", "Lyrics", "Melody", "Pop", "Rock", "Jazz", 
    "Classical", "Hip-Hop", "Indie", "Folk", "Acoustic", "Instrumental", "Rhythm", "Electronic", "Dance", 
    "Festival", "Remix", "Single", "Tracklist", "Music Video", "Audio", "Recording Label", "Producer", 
    "Album Art", "Debut Album", "Concept Album", "Greatest Hits", "Original Score", "Sound Engineering", 
    "Grammy", "Charts", "Streaming", "Concert", "Performance", "Band Members", "Vocalist", "Chorus", 
    "Bass", "Drums", "Guitar", "Keyboard", "Mixing", "Mastering", "Release", "Music Genre", "Digital Album", 
    "Analog", "Collector's Edition", "Limited Edition", "EP", "LP", "Mixtape", "Mood", "Themes", "Collaboration", 
    "Iconic", "Cover Art", "Fan Favorite", "Award-Winning", "Top Charts", "Anthems", "B-Sides", "Liner Notes", 
    "Music Review", "Radio Edit", "Reissue", "Box Set", "Platinum", "Gold Record", "Music Label", "Playlist Curator", 
    "Songwriting", "Tracklist Arrangement", "Album Launch", "Vintage Album", "Retro Vibes", "Indie Album", 
    "Debut Release", "Crowdfunded Album", "Underground Music"
  ];

export function getRandomImage(){
    let getIndex=randomNumber(1,ALBUM_URLS.length);
    console.log('getIndex',getIndex);
    return ALBUM_URLS[getIndex-1];
}

export function getTags(){
    let tags=[];
    for (let index = 0; index < 5; index++) {
        const element = randomNumber(index,index+1);
        tags.push(`#${albumTags[element]} `);
    }
    return tags;
}