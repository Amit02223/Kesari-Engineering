import ServiceCard from "@/app/components/ServiceCard";

export const metadata = {
  title: "Services | KESARI Engineering",
  description:
    "M.S Fabrication, Electrical works, Duct installation & Cleaning, and Civil works in Haridwar.",
};

export default function ServicesPage() {
  return (
    <section className="section">
      <h1 className="text-3xl font-bold">Our Services</h1>
      <p className="text-zinc-600 mt-2">
        Tap a card to view full scope & details.
      </p>

      <div className="mt-8 grid sm:grid-cols-2 gap-6">
        <div id="ms-fabrication">
          <ServiceCard
            title="M.S Fabrication"
            description="Mild-steel fabrication, platforms, sheds, and precision pipework in M.S and S.S materials."
            image="https://png.pngtree.com/thumb_back/fw800/background/20240712/pngtree-steel-structure-industrial-factory-building-construction-in-progress-image_15871460.jpg"
            bullets={[
              {
                heading: "All Structure",
                items: ["Tin/Ten shed", "M.S Platform"],
              },
              {
                heading: "M.S Pipe works",
                items: [
                  "Gas piping",
                  "Water piping",
                  "Diesel & petrol piping",
                  "Chemical piping",
                ],
              },
              {
                heading: "S.S works",
                items: [
                  "Gas piping",
                  "Water piping",
                  "Diesel & petrol piping",
                  "Chemical piping",
                ],
              },
            ]}
          />
        </div>

        <div id="electrical-works">
          <ServiceCard
            title="Electrical Works"
            description="Industrial & commercial wiring, panels, and AC installation & repair."
            image="https://img.freepik.com/premium-photo/electricity-electrical-maintenance-service-engineer-hand-holding-ac-voltmeter-checking-electric-current-voltage-circuit-breaker-terminal-cable-wiring-main-power-distribution-board_101448-4286.jpg?w=2000"
            bullets={[
              {
                heading: "Wiring & Laying",
                items: [
                  "Conduits, trays, raceways",
                  "Earthing & lightning protection",
                ],
              },
              {
                heading: "Electric Panels",
                items: [
                  "LT/HT distribution",
                  "PLC/Control panels",
                  "AMF/ATS panels",
                ],
              },
              {
                heading: "A.C Install & Repair",
                items: [
                  "Split/Window AC",
                  "Ductable units",
                  "Preventive maintenance",
                ],
              },
            ]}
          />
        </div>

        <div id="duct-works">
          <ServiceCard
            title="Duct Installation & Cleaning"
            description="HVAC duct fabrication, balancing, and professional cleaning/sanitization."
            image="https://tse4.mm.bing.net/th/id/OIP.8mC2ysQzVhx47Q4Ujmw4sQHaFj?pid=Api&P=0&h=180"
            bullets={[
              {
                heading: "Installation",
                items: [
                  "GI/SS ducts",
                  "PUF/Pre-insulated ducts",
                  "Kitchen exhaust systems",
                ],
              },
              {
                heading: "Testing",
                items: ["Leakage tests", "Air balancing", "Commissioning"],
              },
              {
                heading: "Cleaning",
                items: ["Duct cleaning", "Filter replacement", "Sanitization"],
              },
            ]}
          />
        </div>

        <div id="civil-works">
          <ServiceCard
            title="Civil Works"
            description="Foundations, flooring, and complete civil construction services."
            image="https://idealoffshore.com/wp-content/uploads/2023/02/civil-works1.jpg"
            bullets={[
              {
                heading: "Coil Works",
                items: ["Structure support coil works", "Custom requirements"],
              },
              {
                heading: "Flooring",
                items: [
                  "Concrete & IPS",
                  "Epoxy/PU flooring",
                  "Tile/stone laying",
                ],
              },
              {
                heading: "Construction",
                items: [
                  "Masonry & plaster",
                  "Boundary & pathways",
                  "Repairs & retrofitting",
                ],
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
