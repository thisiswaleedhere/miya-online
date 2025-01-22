import { Award, Users, Wallet, Package } from "lucide-react"
import { useEffect } from "react";

const reasons = [
    { icon: <Award className="w-12 h-12 mb-4 text-fuchsia-900" />, title: 'Trusted Expertise', description: 'Our team of professionals ensures quality and reliability in every service.' },
    { icon: <Users className="w-12 h-12 mb-4 text-fuchsia-900" />, title: 'Customer-Centric Approach', description: 'We prioritize your convenience and satisfaction above all.' },
    { icon: <Wallet className="w-12 h-12 mb-4 text-fuchsia-900" />, title: 'Affordable Pricing', description: 'Competitive rates without compromising on quality.' },
    { icon: <Package className="w-12 h-12 mb-4 text-fuchsia-900" />, title: 'Comprehensive Solutions', description: "From travel to documentation, we've got you covered." },
];


function WhyChooseUs() {

    useEffect(() => {
        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('slide-in');
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, {
            threshold: 0.5
        });

        // Observe all elements with the 'from-bottom' class
        document.querySelectorAll('.from-bottom').forEach(element => {
            observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div id="whychooseus" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-5xl text-[#652060] drop-shadow-lg font-bold text-center mb-16 from-bottom">Why Choose Us?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {reasons.map((service, index) => (

                        <div key={index} className={`from-bottom delay-${200 * index} bg-blue-50 p-8 rounded-lg hover:shadow-lg transition-shadow`} >
                            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                                {service.icon}
                                <div className="text-center md:text-left">
                                    <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                                    <p className="text-gray-600 text-lg">{service.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>


    )
}

export default WhyChooseUs

