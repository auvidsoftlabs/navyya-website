export function TrustedBy() {
  const companies = [
    { name: "TechCorp", initial: "T" },
    { name: "InnovateLabs", initial: "I" },
    { name: "GlobalSystems", initial: "G" },
    { name: "FutureTech", initial: "F" },
    { name: "SmartSpaces", initial: "S" },
    { name: "ProDesign", initial: "P" },
  ];

  return (
    <section className="w-full px-6 py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto text-center space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl">Trusted By Industry Professionals</h2>
          <p className="text-gray-600">
            Helping architects, IT leaders, and AV engineers deliver faster, smarter room designs.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {companies.map((company) => (
            <div 
              key={company.name}
              className="flex items-center justify-center"
            >
              <div className="flex items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                  <span className="text-lg">{company.initial}</span>
                </div>
                <span className="text-sm">{company.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
