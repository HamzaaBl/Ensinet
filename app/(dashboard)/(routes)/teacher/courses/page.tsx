import { Button } from '@/components/ui/button'
import Link from 'next/link'

function CoursesPage() {
  return (
    <div className='p-6 '>
      <Link href="/teacher/create">
      <Button variant="default">
        new course
      </Button>
      </Link>
      <div className="mt-6">
     
      </div>
    </div>
  )
}

export default CoursesPage