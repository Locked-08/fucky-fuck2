import apollo from "/apollo_p.webp"
export default function T3() {


    return (<div className="background2 h-[1000px] pt-80 text-white">
        <div className="flex justify-between pt-7">
            <div className="pl-8">
                <div className="pr-80 text-4xl font-bold pb-16">Apollo<br />Ghost</div>
                <div className="pl-12 w-[600px]">
                    <div className="text-xl font-bold">Good</div>
                    <div>Tremendous power and speed. Solid range. Slick design. Extremely well built. Nice brakes, roomy deck, and has built-in taillights, visibility lights, and a bell. You can fold it down for storage. IP54 water resistant.</div>
                    <div className="text-xl font-bold pt-4">Bad</div>
                    <div>It weighs 64 pounds! Pricey. Displays are a bit dim. My preproduction unit hit some setup snags, but it might not affect retail models. The fast charger isn't included.</div>
                </div>
            </div>
            <img className="pr-7 pt-10" src={apollo}></img>
        </div>
    </div>)
}