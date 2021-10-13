const getAPIData = async (endpoint) => {
    let response = await fetch(endpoint)
    return await response.json()
}

const apiPromise = getAPIData('https://private-3923c4-santandercoders809.apiary-mock.com/stations')

const getSubwayData = async () => {
    const subwayData = await apiPromise
    const mainData = subwayData.estacoes.estacao

    const getLinesInfo = (arrInput) => {
        return arrInput.reduce((acc, value, index) => {
            const bruteLine = value._linha
            const line = bruteLine
                .replace(/\d{1,2}/, '')
                .replace('-', '')
                .replace(' ', '-')
                .split('-')[0]
            acc[line] ? acc[line].push(value) : acc[line] = [value]
            return acc
        }, {})
    }

    console.log(getLinesInfo(mainData));

}

getSubwayData()
