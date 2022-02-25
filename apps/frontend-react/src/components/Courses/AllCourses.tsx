import { client } from '@api/client'
import { useGetCoursesQuery } from '@api/generated'
import Pagination from '@components/common/Pagination'
import CourseCard from '@components/Main/CourseCard'
import { SimpleGrid } from '@mantine/core'
import { useMemo } from 'react'
import { Container } from 'ui'
import { perPage } from '@lib/config'
import { useParams, useSearchParams } from 'react-router-dom'

const AllCourses = () => {
   const [search] = useSearchParams()
   const page = +(search.get('page') ?? 1)

   const { data, error, isLoading } = useGetCoursesQuery(client, {
      take: 3,
      skip: perPage * (page - 1),
   })

   const count = useMemo(() => data?.courses[0]?.count, [data?.courses])

   return (
      <Container>
         <h1 className="text-2xl">
            Курсы
            <span className="text-slate-500 text-base pl-1">({count})</span>
         </h1>

         {isLoading ? (
            <p>Загрузка...</p>
         ) : error ? (
            <p>{JSON.stringify(error)}</p>
         ) : (
            <>
               <SimpleGrid
                  breakpoints={[
                     { minWidth: 'xs', cols: 1 },
                     { minWidth: 'md', cols: 2 },
                     { minWidth: 'lg', cols: 3 },
                  ]}
                  className="gap-8 my-6"
               >
                  {data.courses.map(course => (
                     <CourseCard key={course.id} data={course} />
                  ))}
               </SimpleGrid>

               <Pagination length={count} page={page} />
            </>
         )}
      </Container>
   )
}

export default AllCourses
