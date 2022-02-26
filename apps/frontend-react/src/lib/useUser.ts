import { client } from '@api/client'
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

export const useUser = (params?: UseUserParams): Partial<User> => {
   const { data, isLoading, error, isFetching } = useCurrentUserQuery(params)

   if (isEmpty(data?.currentUser)) {
      return null
   }

   return data?.currentUser as Partial<User>
}
