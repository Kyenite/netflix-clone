import { ChevronRight, Languages } from "lucide-react";
import Cards from "@components/Cards";

const CardsData = [
  "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/04/naruto-shippuden-tv-series-poster.jpg?q=50&fit=crop&w=265&h=392&dpr=1.5",
  "https://images.justwatch.com/poster/324425000/s718/when-life-gives-you-tangerines.jpg",
  "https://vignette.wikia.nocookie.net/dubbing9585/images/d/d2/My_Hero_Academia_Heroes_Rising.jpg/revision/latest?cb=20200419060653",
  "https://tse4.mm.bing.net/th/id/OIP.AxvDN0Eqsm-0DNsPmpFm9AHaJQ?cb=iwc2&rs=1&pid=ImgDetMain",
  "https://m.media-amazon.com/images/M/MV5BMTc0NTUwMTU5OV5BMl5BanBnXkFtZTcwNjAwNzQzMw@@._V1_.jpg"
]

export default function Home() {
  return (
    <>
    <section className="bg-[url('https://www.okynemedialab.com/wp-content/uploads/2019/11/netflix-background-50-Black-1080x608.jpg')] bg-opacity-40 bg-cover bg-center">
      <div className="flex items-center justify-between p-4">
        <span className="font-bold text-2xl text-red-600">NETFLIX</span>
        <div className="flex items-center gap-2">
          <div className="flex flex-row space-x-1 items-center bg-gray-800 border-1 border-gray-400 p-2 rounded-md active:ring-2">
            <label htmlFor="language"><Languages size={20} /></label>
            <select name="language" id="language">
                <option className="text-black" value="english">English</option>
                <option className="text-black" value="filipino">Filipino</option>
            </select>
          </div>
          <button className="p-1.5 px-4 bg-red-600 rounded-md hover:bg-red-700 hover:cursor-pointer active:bg-red-800s transition">
            <span>Sign In</span>
          </button>
        </div>
      </div>

      <div className="w-full">
        <div className="max-w-lg mx-auto py-24 text-center space-y-4">
          <h2 className="text-center text-4xl max-w-md mx-auto font-bold">Unlimited movies, TV shows, and more</h2>
          <p>Starts at ₱169. Cancel anytime.</p>
          <p className="max-w-md">Ready to watch? Enter your email to create or restart your membership.</p>
          <div className="flex items-center space-x-2">
            <input className="border-1 rounded-md bg-gray-800 text-lg p-4 min-w-xs" type="email" placeholder="Email address" />
            <button className="flex items-center text-xl bg-red-600 p-3.5 rounded-md">
              <span>Get Started</span>
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
    <section className="w-full relative bg-gray-800 pt-10 py-15">
      <div className="w-full border-t-2 py-4 rounded-t-full max-h-10 absolute top-[-20] bg-gray-800 border-red-600 h-full"></div>
      <div className="trending w-full h-fit px-10">
        <h1 className="font-medium text-2xl">Trending Now</h1>
        <div className="p-4 ps-0 pe-0 flex flex-row w-full items-center space-x-4">
          <Cards imgUrl={CardsData} />
        </div>
      </div>
    </section>
    </>
  );
}
