export async function getAllTracks() {
    const response = await fetch(
        'https://skypro-music-api.skyeng.tech/catalog/track/all/',
    )
    if(!response.ok) {
        throw  new Error('Произошла ошибка, попробуйте позже')
    }
    
const data = await response.json()
return data
}