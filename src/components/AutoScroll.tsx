

const airlines = ['air-arabia-logo', 'air-india-express', 'etihad-airways', 'flynas-logo', 'spicejet-logo', 'saudia-airline', 'air-india-logo', 'vistara-logo'];


function AutoScroll() {

    return (
        <div id="partners" className="pt-16 bg-white overflow-hidden">
            <div className="mb-6">
                {/* <h3 className="text-2xl font-semibold text-center mb-8">Our Airline Partners</h3> */}
                <div className="flex animate-scroll">
                    {[...airlines, ...airlines].map((airline, index) => (
                        <div key={index} className="flex-none mx-12 w-44">
                            {/* <div className="bg-gray-100 rounded-lg p-6 text-center font-semibold">{airline}</div> */}
                            <img src={`../img/${airline}.svg`} alt={airline} className="w-44" />
                        </div>
                    ))}
                </div>
            </div>


        </div>
    )
}

export default AutoScroll


//  'British Airways', 'Lufthansa', 'Qatar Airways', 'Singapore Airlines', 'Air France', 'United Airlines'

// {/* <div>
// {/* <h3 className="text-2xl font-semibold text-center mb-8">Insurance Partners</h3> */}
// <div className="flex animate-scroll-reverse">
//     {[...insurers, ...insurers, ...insurers, ...insurers].map((insurer, index) => (
//         <div key={index} className="flex-none mx-8 w-48">
//             {/* <div className="bg-gray-100 rounded-lg p-6 text-center font-semibold">{insurer}</div> */}
//             <img src={`../img/${insurer}.svg`} alt={insurer} className="h-32" />
//         </div>
//     ))}
// </div>
// </div> */}