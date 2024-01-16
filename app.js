const btn = document.querySelector('#btn')
const getID = async () => {
    try{
        const response = await fetch('https://api.ipify.org/?format=json')
        const responseDecode = await response.json()
        const clientIP = responseDecode.ip
        console.log(clientIP)

        const apiResponse = await fetch(`http://ip-api.com/json/${clientIP}`)
        const apiResponseDecode = await apiResponse.json()
        const apiData = apiResponseDecode
        console.log(apiData)


        const resultDiv = document.querySelector('.result')
        resultDiv.innerHTML = `
        <p>Країна:${apiData.country}</p>
        <p>Регіон:${apiData.region}</p>
        <P>Місто:${apiData.city}</P>
        <P>Район:${apiData.regionName}</P>`
    }catch (error){
        console.error(error)
    }
}

btn.addEventListener('click', () => {
    getID()
})

// const newApi = fetch('https://api.geoapify.com/v1/geocode/reverse')
// const key = ('https://api.geoapify.com/v1/geocode/reverse?lat=')