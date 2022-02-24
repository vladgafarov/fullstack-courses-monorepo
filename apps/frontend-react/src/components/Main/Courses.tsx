import { SimpleGrid } from '@mantine/core'
import { Container } from 'ui'

const Courses = () => {
   return (
      <Container id="courses">
         <h1 className="text-2xl">Последние курсы</h1>

         <SimpleGrid
            breakpoints={[
               { minWidth: 'xs', cols: 1 },
               { minWidth: 'md', cols: 2 },
               { minWidth: 'lg', cols: 3 },
            ]}
            className="gap-8 my-6"
         >
            <div className="border-red-500 border-2">h1</div>
            <div className="border-red-500 border-2">h12</div>
            <div className="border-red-500 border-2">h123</div>
         </SimpleGrid>
      </Container>
   )
}

export default Courses
