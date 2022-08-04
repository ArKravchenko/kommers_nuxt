const BASE_URL = process.env.BASE_API_URL;

export function fetcher(requiredData: string, params?: { query?: { [key: string]: string | number }, path?: string[]}):Promise<Response> {
  const map: { [key: string]: string } = {
    actualno: '/common_data/Actual',
    mainPageWidgets: '/main_page/Blocks',
    listPageWidgets: '/list_page/Blocks',
    listPageDocs: '/list_page/DocTape',
    docPageData: '/doc_page/DocContent',
    companyNews: '/main_page/CompanyNews',
    spendGalleryTop: '/main_page/PromoGalleryTop',
    spendGalleryBottom: '/main_page/PromoGalleryBottom',
    lazyDocsIds: '/doc_page/LazyLoadIds',
    pictureOfTheDay: '/doc_page/TopNewsForDoc',
    mostReadableAside: '/main_page/MostReadable',
    docMultimedia: '/doc_page/Multimedia',
    docViewsComments:'/doc_page/Counters',
    rightNow: '/doc_page/RightNowIds'
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
    let queryString = ''
    let pathString= ''
    if (params) {
      queryString = params.query
        ? Object.keys(params.query)
          .reduce((acc: string, el: string, index: number) => {
            return acc + `${index ? '&' : ''}${el}=${params.query?.[el]}`
          }, '?')
        : '';

      pathString = params.path
        ? params.path
          .reduce((acc: string, el: string,) => {
            return acc + `/${el}`
          }, '')
        : '';
    }

    const url = BASE_URL + map[requiredData] + pathString + queryString

    if (process.env.NODE_ENV === 'development'){
      console.log(url)
    }
    return fetch(url)
  }


}
