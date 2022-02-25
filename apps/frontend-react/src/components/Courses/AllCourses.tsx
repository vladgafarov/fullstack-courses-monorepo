import { client } from '@api/client'
import { useGetCoursesQuery } from '@api/generated'
import CourseCard from '@components/Main/CourseCard'
import { SimpleGrid } from '@mantine/core'
import { Container } from 'ui'

const AllCourses = () => {
   const { data, error, isLoading } = useGetCoursesQuery(client, {
      take: 3,
   })

   return (
      <Container>
         <h1 className="text-2xl">
            Курсы
            <span className="text-slate-500 text-base pl-1">(21)</span>
         </h1>

         {isLoading ? (
            <p>Загрузка...</p>
         ) : error ? (
            <p>{JSON.stringify(error)}</p>
         ) : (
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
         )}
      </Container>
   )
}

export default AllCourses
