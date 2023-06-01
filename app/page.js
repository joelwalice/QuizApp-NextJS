import Link from 'next/link'
export default function Home() {
  return (
    <main>
      <div className="container">
        <h1>QUIZ APP</h1>
        <p class = 'he'>Here, You can undergo a small test on Knowing your knowledge About Antartica</p>
        <Link href="/quiz">
          <button>TAKE QUIZ</button>
        </Link>
      </div>
    </main>
  )
}
