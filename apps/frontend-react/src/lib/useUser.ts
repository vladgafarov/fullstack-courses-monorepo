import { client, getCookies } from '@api/client'
import { useCurrentUserQuery, User } from '@api/generated'
import { isEmpty } from 'lodash'

interface UseUserParams {
   skipCourses?: number
   takeCourses?: number
   skipReviews?: number
   takeReviews?: number
}

interface UseUser {
   user: User
   isLoading: boolean
   error: string
   isFetching: boolean
}

const some = getCookies()

export const useUser = (params?: UseUserParams) => {
   const { data, isLoading, error, isFetching } = useCurrentUserQuery(
      client,
      params
   )

   // if (isEmpty(data?.currentUser)) {
   //    return {
   //       user: undefined,
   //    } as UseUser
   // }

   return data?.currentUser
}
