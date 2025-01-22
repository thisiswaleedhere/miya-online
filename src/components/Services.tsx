import { Plane, Shield, FileText, Globe } from 'lucide-react';

const services = [
    { icon: <Plane className="w-12 h-12 mb-4 text-fuchsia-900" />, title: 'Airline Tickets Booking', description: 'Book flights with major airlines worldwide at competitive prices' },
    { icon: <Shield className="w-12 h-12 mb-4 text-fuchsia-900" />, title: 'Insurance Services', description: 'Comprehensive insurance options for vehicles, travel, health, and more with expert guidance' },
    { icon: <FileText className="w-12 h-12 mb-4 text-fuchsia-900" />, title: 'Visa Services', description: 'Assistance with visa applications, forms, and legal documents and its timely delivery' },
    { icon: <Globe className="w-12 h-12 mb-4 text-fuchsia-900" />, title: 'Online Services', description: 'Professional typing services for all your documentation needs' },
];

function Services() {
    return (
        <div id="services" className="py-24  min-h-[20vh] bg-[url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center bg-fixed ">
            <div className="container  mx-auto px-6">
                <h2 className="text-5xl text-[#652060] drop-shadow-lg font-bold text-center mb-16">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white p-8 rounded-lg shadow-[#251424] shadow-lg text-center hover:transform hover:-translate-y-2 transition-all">
                            {service.icon}
                            <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services
// bg-[#652060]