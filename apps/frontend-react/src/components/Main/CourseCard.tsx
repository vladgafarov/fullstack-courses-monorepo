import { Course } from '@api/generated'
import { Spoiler } from '@mantine/core'
import courseImg from '../../course.jpg'
import { Link } from 'react-router-dom'
import { Button } from 'ui'

const CourseCard = ({ data }: { data: Partial<Course> }) => {
   return (
      <div className="group shadow-lg rounded-xl bg-slate-200 basis-1/3 overflow-hidden flex flex-col hover:shadow-xl transition">
         <div className="relative h-36">
            <div className="absolute inset-0 overflow-hidden">
               <img
                  src={data.mainImage || courseImg}
                  alt={data.title}
                  className="
                     object-cover
                     w-full
                     max-h-full
                     group-hover:scale-[110%] transition duration-[2000ms]
                  "
               />
            </div>
            <div className="absolute bottom-0 h-24 w-full bg-gradient-to-t from-slate-500 to-transparent"></div>
         </div>
         <div className="p-4 flex flex-col justify-between flex-grow">
            <div>
               <Link to={`/course/${data.id}`}>
                  <h2 className="underline hover:text-slate-600">
                     {data.title}
                  </h2>
               </Link>
               <Spoiler maxHeight={120} hideLabel="" showLabel="">
                  {data.description}
               </Spoiler>
            </div>
            <div>
               <p className="font-bold py-4 text-green-600">{data.price} ₽</p>
               {/* {error && <DisplayError error={error.message} />}*/}
               {data.currentUser ? (
                  <Button disabled>Вы записаны</Button>
               ) : (
                  <Button>Записаться</Button>
                  // <Button disabled={isLoading} onClick={signUpForCourse}>
                  //    Записаться
                  // </Button>
               )}
            </div>
         </div>
      </div>
   )
}

export default CourseCard
