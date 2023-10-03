import Link from 'next/link'
import StudentInfo from './StudentInfo'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div class="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
      <h1 className="text-4xl font-bold">CPRG 306: Web Development 2 - Assignments</h1>
      <StudentInfo/>
      <p>
      <Link href="/week2">week 2</Link> 
      </p>
      <p>
      <Link href="/week3">week 3</Link> 
      </p>   
      <p>
      <Link href="/week4">week 4</Link> 
      </p>  
      </div>
    </main>
  )
}
