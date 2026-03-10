import { useParams } from "react-router-dom";

const PlanTrip = () => {

  const { tripId } = useParams();

  const groupLinks:any = {
    kedarnath: "https://chat.whatsapp.com/CBMZGgA0T3oEUcq1s5IJek?mode=gi_t",
    spiti: "https://chat.whatsapp.com/SPITIGROUPLINK",
    meghalaya: "https://chat.whatsapp.com/MEGHALAYAGROUPLINK",
    varanasi: "https://chat.whatsapp.com/VARANASIGROUPLINK"
  };

  const handleJoin = () => {
    const link = groupLinks[tripId || ""];
    if (link) {
      window.open(link, "_blank");
    }
  };

  return (
    <div className="pt-24 flex justify-center">

      <div className="text-center space-y-4">

        <h2 className="text-2xl font-bold">
          Join {tripId} Trip Group
        </h2>

        <button
          onClick={handleJoin}
          className="bg-orange-500 text-white px-6 py-3 rounded"
        >
          Join WhatsApp Group
        </button>

      </div>

    </div>
  );
};

export default PlanTrip;