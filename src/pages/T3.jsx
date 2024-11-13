import apollo from "/apollo_p.webp"
import Wolf from "/WolfKingGt2.png"
import Varla from "/Eagle.png"
export default function T3() {


    return (<div className="background2 pt-80 text-white bg-black">
        <div className="md:flex justify-between pt-7">
            <div className="pl-1 md:pl-8">
                <div className="pr-80 text-4xl font-bold pb-16">Apollo<br />Ghost</div>
                <div className="pl-1 md:pl-12 md:w-[600px]">
                    <div className="text-xl font-bold">Good</div>
                    <div>Tremendous power and speed. Solid range. Slick design. Extremely well built. Nice brakes, roomy deck, and has built-in taillights, visibility lights, and a bell. You can fold it down for storage. IP54 water resistant.</div>
                    <div className="text-xl font-bold pt-4">Bad</div>
                    <div>It weighs 64 pounds! Pricey. Displays are a bit dim. My preproduction unit hit some setup snags, but it might not affect retail models. The fast charger isn't included.</div>
                </div>
            </div>
            <img className="pr-7 pt-10 blur-[10px] animate-spin hover:blur-none hover:animate-none" src={apollo}></img>
        </div>
        <div className="md:flex justify-between pt-20">
            <div className="pl-1 md:pl-8">
                <div className="pr-80 text-4xl font-bold pb-16">Wolf King<br />Gt</div>
                <div className="pl-1 md:pl-12 md:w-[600px]">
                    <div className="text-xl font-bold">Good</div>
                    <div> Fastest brand of scooter on the market this is a high quality scooter that will replace your car if you have the guts to ride it to its full potential</div>
                    <div className="text-xl font-bold pt-4">Bad</div>
                    <div>Its really expensive. like really fucking expensive, I mean this may be the mose expensive thing you buy, take out your collage loans to buy this scooter, i mean this scooter will put you in more debt and sadness than you gambling and alchohol addiction.</div>
                </div>
            </div>
            <img className="pr-7 pt-10 animate-bounce hover:animate-none w-[500px]" src={Wolf}></img>
        </div>
        <div className="md:flex justify-between pt-20">
            <div className="pl-1 md:pl-8">
                <div className="pr-80 text-4xl font-bold pb-16">Varla<br />Eagle one</div>
                <div className="pl-1 md:pl-12 md:w-[600px]">
                    <div className="text-xl font-bold">Good</div>
                    <div> Its the apollo but 100$ cheaper and arguably the same, it does not have any vibrating components to satisfy kinks not that the apollo did either. You kinky ass mf.</div>
                    <div className="text-xl font-bold pt-4">Bad</div>
                    <div>For you kinky ass i bet the lack of vibrating/stroking components is the only reason you are not buying this scooter. if you get the off road tires and a long enough stick you can make it vibrate plenty</div>
                </div>
            </div>
            <img className="pr-7 pt-10 animate-ping hover:animate-none md:w-[600px] " src={Varla}></img>
        </div>
    </div>)
}