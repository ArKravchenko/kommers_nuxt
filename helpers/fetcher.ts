const BASE_URL = process.env.BASE_API_URL;

export function fetcher(requiredData: string, params?: { query: { [key: string]: string | number } }) {
  const map: { [key: string]: string } = {
    actualno: '/main_page/Endpoint_1',
    mainPageWidgets: '/main_page/Endpoint_4',
    listPageWidgets: '/list_page/Endpoint_4',
    listPageDocs: '/list_page/Endpoint_6'
  }

  let queryString = ''
  if (params) {
    queryString = params.query
      ? Object.keys(params.query)
        .reduce((acc: string, el: string, index: number) => {
          return acc + `${index ? '&' : ''}${el}=${params.query[el]}`
        }, '?')
      : ''
  }

  if (false && process.env.MOCK_DATA && process.env.MOCK_DATA === 'true') {
    console.log(`Required data for ${requiredData} been taken from mock`)
    return Promise.resolve(
      Promise.resolve(
        {
          ok: true,
          json: () => Promise.resolve(require('./../demoData/testData.ts')[requiredData])
        })
    )
  }

  if (process.env.NODE_ENV === 'development'){
    console.log(BASE_URL + map[requiredData] + queryString)
  }
  return fetch(BASE_URL + map[requiredData] + queryString)
}
