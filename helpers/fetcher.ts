const baseUrl = process.env.BASE_API_URL;

export function fetcher(requiredData: string, params?: { [key: string]: string }) {
  const map: { [key: string]: string } = {
    actualno: '/main_page/Endpoint_1',
    mainPageWidgets: '/main_page/Endpoint_4',
    listPageWidgets: '/list_page/Endpoint_4',
    listPageDocs: 'list_page/Endpoint_4'
  }
  return fetch(baseUrl + map[requiredData])
}
