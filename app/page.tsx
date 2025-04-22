import RandomMeal from "@/app/components/RandomMeal"

export default function Home() {
  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center mt-6 ">
        What's For Dinner?
      </h1>

      <RandomMeal />
    </div>
  )
}