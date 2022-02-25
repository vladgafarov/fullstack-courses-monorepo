import { useUser } from '@lib/useUser'
import { AiFillStar } from 'react-icons/ai'
import { FaUserFriends } from 'react-icons/fa'
import { MdOutlineChat } from 'react-icons/md'
import InfoPoint from './InfoPoint'
import courseImg from '../../course.jpg'
import { Button, Container } from 'ui'
import { useGetCourseQuery } from '@api/generated'
import { client } from '@api/client'
import { useParams } from 'react-router-dom'
// import Reviews from './Reviews'

const Course = () => {
   const { id } = useParams()

   const { data, error, isLoading } = useGetCourseQuery(client, {
      id: +id,
   })

   const signUpForCourse = () => {
      // if (user) {
      //    signUpForCourseMutation({ courseId: +id })
      //       .unwrap()
      //       .then(() => toast.success('Успешно записаны'))
      //       .catch(err => toast.error('Не удалось записаться'))
      // } else {
      //    toast.error('Необходимо авторизоваться')
      // }
   }

   const signOutFromCourse = () => {
      // signOutFromCourseMutation({ courseId: +id })
      //    .unwrap()
      //    .then(() => toast.success('Успешно вышли из курса'))
      //    .catch(err => toast.error('Не удалось выйти из курса'))
   }

   return (
      <Container>
         <div className="bg-slate-200 rounded-2xl p-4 lg:p-10">
            {isLoading ? (
               <p>Загрузка...</p>
            ) : error ? (
               // <DisplayError error={error} />
               <p>{JSON.stringify(error)}</p>
            ) : data ? (
               <>
                  <div className="flex items-center space-x-3">
                     <div className="basis-full md:basis-2/3">
                        <h1 className="text-3xl underline decoration-blue-500">
                           {data.course.title}
                        </h1>
                        <p className="py-2 text-slate-700">
                           <strong>Описание: </strong>
                           {data.course.description}
                        </p>

                        <div>
                           <InfoPoint
                              text={'Пользователей'}
                              data={data.course.userCount}
                              icon={<FaUserFriends />}
                           />
                           <InfoPoint
                              text={'Отзывов'}
                              data={data.course._count.reviews}
                              icon={<MdOutlineChat />}
                           />
                           {data.course.rating && (
                              <InfoPoint
                                 text={'Рейтинг'}
                                 data={data.course.rating.toFixed(2)}
                                 icon={
                                    <AiFillStar className="fill-orange-400" />
                                 }
                              />
                           )}
                           {data.course.currentUser ? (
                              <>
                                 <p className="font-proxima-medium">
                                    Вы записаны
                                 </p>
                                 <Button
                                    // disabled={isSingOutLoading}
                                    onClick={signOutFromCourse}
                                    // theme="light"
                                 >
                                    Выйти из курса
                                 </Button>
                              </>
                           ) : (
                              <Button
                                 // disabled={isSignInLoading}
                                 onClick={signUpForCourse}
                                 className="mt-6"
                              >
                                 Записаться
                              </Button>
                           )}
                        </div>
                     </div>
                     <div className="rounded-xl overflow-hidden basis-1/3 relative h-48 hidden md:block">
                        <img
                           src={data.course.mainImage || courseImg}
                           alt="Courses"
                           className="absolute inset-0 object-cover max-h-full w-full"
                        />
                     </div>
                  </div>

                  {/* <Reviews
                     reviews={data.course.reviews}
                     currentUser={data.course.currentUser}
                     currentUserReview={data.course.currentUserReview}
                     courseId={data.course.id}
                  /> */}
               </>
            ) : null}
         </div>
      </Container>
   )
}

export default Course
