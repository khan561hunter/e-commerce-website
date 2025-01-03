import Image from "next/image";
import beauty from "@/app/banners/beauty grabs.jpg"
import sport from "@/app/banners/sport.jpg"
import women from "@/app/banners/womens fashion.jpg"
import deals from "@/app/banners/hot deals.jpg"

export default function Crousel(){
    return (
        <main>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                <Image
                    src={beauty}
                    alt="beauty grabs"
                    className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                <Image
                    src={sport}
                    alt="sport"
                    className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                <Image
                    src={women}
                    alt="womens fashion"
                    className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                <Image
                    src={deals}
                    alt="deals"
                    className="w-full" />
                </div>
            </div>
            <div className="flex w-full justify-center gap-2 py-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </main>
    )
}