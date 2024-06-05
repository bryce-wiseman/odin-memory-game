
const lastFM_Key = 'f3e7ca2815e81598cdd00347e986caea';
const lastFM_API = `https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${lastFM_Key}&format=json`


export async function getTopArtists(num) {
    let getData = await fetch(lastFM_API)
    let parseData = await getData.json()
    let artistsArr = []

    for (let i = 0; i < num; i++) {
        let artistName = parseData.artists.artist[i]['name']
        artistsArr.push(artistName)
    }
    return artistsArr
}