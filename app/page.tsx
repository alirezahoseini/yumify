import RandomMeal from "@/app/components/RandomMeal"
import Header from "@/app/components/Header"

export default function Home() {
  return (

    <div className="max-w-xl container mx-auto">
      <Header />

      <h1 className="text-3xl font-bold mb-6 text-center mt-8">
        What's For Dinner?
      </h1>

      <RandomMeal />
    </div>
  )
}