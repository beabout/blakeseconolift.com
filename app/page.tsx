import Navigation from './navigation'
import Hero from './hero'
import Lifts from './lifts'
import Contact from './contact'

export default function Home() {
  return (
    <div>
      {/* <main className="flex min-h-screen flex-col items-center justify-between p-24"></main> */}
      <Navigation />
      <Hero />
      <Lifts />
      <Contact />
    </div>
  )
}
