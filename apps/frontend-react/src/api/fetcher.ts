import { client, getCookies } from './client'

export const fetchData = <TData, TVariables>(
   query: string,
   variables?: TVariables,
   options?: RequestInit['headers']
): (() => Promise<TData>) => {
   return async () => {
      const cookies = getCookies()

      try {
         const data = await client.request(query, variables, {
            authorization: `Bearer ${cookies['access-token']}`,
         })
         return data
      } catch (err) {
         const parsedError = JSON.parse(JSON.stringify(err))
         console.log(JSON.parse(JSON.stringify(err)))
      }

      // const res = await fetch(process.env.REACT_APP_BACKEND_URL, {
      //    method: 'POST',
      //    headers: {
      //       'Content-Type': 'application/json',
      //       ...(options ?? {}),
      //    },
      //    body: JSON.stringify({
      //       query,
      //       variables,
      //    }),
      // })

      // const json = await res.json()

      // if (json.errors) {
      //    const { message } = json.errors[0] || 'Error..'
      //    throw new Error(message)
      // }

      // return json.data
   }
}
