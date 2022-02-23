import Button from '@components/utils/Button'
import { perPage } from '@lib/config'
import { useRouter } from 'next/router'
import {
   BiChevronLeft,
   BiChevronRight,
   BiChevronsRight,
   BiChevronsLeft,
} from 'react-icons/bi'

const Pagination = ({ length, link }: { length: number; link: string }) => {
   const router = useRouter()

   const page = +((router.query.page as string) ?? 1)

   const handlePrevPage = () => {
      router.push(`${link}?page=${page - 1}`)
   }

   const handleNextPage = () => {
      router.push(`${link}?page=${page + 1}`)
   }

   const handleButtonClick = (page: number) => {
      router.push(`${link}?page=${page}`)
   }

   const pages = Math.ceil(length / perPage)

   if (pages < 2) {
      return null
   }

   return (
      <>
         <div className="flex items-center justify-center mt-12">
            <button
               data-testid="prev"
               onClick={() => router.push(`${link}?page=1`)}
               disabled={page === 1}
               className="text-3xl text-blue-500"
            >
               <BiChevronsLeft />
            </button>
            <button
               onClick={handlePrevPage}
               disabled={page === 1}
               className="text-3xl text-blue-500"
            >
               <BiChevronLeft />
            </button>
            <div className="space-x-2">
               {Array.from({ length: pages >= 5 ? 5 : pages }, (_, i) => {
                  const diff = page - 3
                  const diffEnd = pages - 2

                  if (pages >= 5) {
                     if (page === pages) i += page - 5
                     else if (page > diffEnd) i += page - 4
                     else if (diff > 0) i += diff
                  }

                  return (
                     <Button
                        onClick={() => handleButtonClick(i + 1)}
                        theme={i + 1 === page ? 'default' : 'light'}
                        key={i}
                        className="px-2 lg:px-4 py-1 lg:py-2"
                     >
                        {i + 1}
                     </Button>
                  )
               })}
            </div>
            <button
               onClick={handleNextPage}
               disabled={page === Math.ceil(length / perPage)}
               className="text-3xl text-blue-500"
            >
               <BiChevronRight />
            </button>
            <button
               data-testid="next"
               onClick={() => router.push(`${link}?page=${pages}`)}
               disabled={page === Math.ceil(length / perPage)}
               className="text-3xl text-blue-500"
            >
               <BiChevronsRight />
            </button>
         </div>
         <p className="text-center pt-3 font-proxima-medium">
            Всего страниц: {pages}
         </p>
      </>
   )
}

export default Pagination
