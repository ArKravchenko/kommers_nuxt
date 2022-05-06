const BASE_URL = process.env.BASE_API_URL;

export function fetcher(requiredData: string, params?: { query: { [key: string]: string | number } }):Promise<Response> {
  const map: { [key: string]: string } = {
    actualno: '/main_page/Endpoint_1',
    mainPageWidgets: '/main_page/Endpoint_4',
    listPageWidgets: '/list_page/Endpoint_4',
    listPageDocs: '/list_page/Endpoint_6',
    docPageData: '/doc_page/Endpoint_4',
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

  if (process.env.MOCK_DATA && process.env.MOCK_DATA === 'true') {
    // console.log(`Required data for ${requiredData} been taken from mock`)
    //@ts-ignore
    return Promise.resolve(
      Promise.resolve(
        {
          ok: true,
          //@ts-ignore
          json: () => import(/* webpackChunkName: "MockData." */'./../mockData/index').then(data=>data[requiredData])
        })
    )
  } else {
    if (process.env.NODE_ENV === 'development'){
      console.log(BASE_URL + map[requiredData] + queryString)
    }
    return fetch(BASE_URL + map[requiredData] + queryString)
  }


}
