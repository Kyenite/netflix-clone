'use client'
import { Plus } from "lucide-react"
import { useState } from "react"

const QnAs = [
  {
    q: "What is Netflix?",
    a: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.<br><br>You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"
  },
  {
    q: "How much does Netflix cost?",
    a: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₱169 to ₱619 a month. No extra costs, no contracts."
  },
  {
    q: "Where can I watch?",
    a: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.<br><br>You can also download your favorite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
  },
  {
    q: "How do I cancel?",
    a: "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
  },
  {
    q: "What can I watch on Netflix?",
    a: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
  },
  {
    q: "Is Netflix good for kids?",
    a: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.<br><br>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
  }
]

export default function Dropdown() {
  const [activeIndexes, setActiveIndexes] = useState<number[]>([])

  const toggleActive = (index: number) => {
    setActiveIndexes((prev) => {
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index) // Remove index if already active
      } else {
        return [...prev, index] // Add index if not active
      }
    })
  }

  return (
    <>
      {
        QnAs.map(({ q, a }, index) => (
          <div key={index} className="w-full block bg-gray-600 shadow-sm text-2xl">
            <div
              className="p-4 bg-gray-800 border-1 border-gray-900 font-medium flex justify-between items-center"
              onClick={() => toggleActive(index)}
            >
              <span>{q}</span>
              <Plus
                size={45}
                className={`rotate-0 ${activeIndexes.includes(index) ? "rotate-45" : ""} transition duration-400`}
              />
            </div>
            <div
              className={`max-h-0 overflow-hidden ${activeIndexes.includes(index) ? "max-h-96" : ""} transition-all duration-500 ease-in-out`}
            >
              <div className="w-full h-full p-4">
              <div
                className="w-full h-full p-4"
                dangerouslySetInnerHTML={{ __html: a }}
              />
              </div>
            </div>
          </div>
        ))
      }
    </>
  )
}
