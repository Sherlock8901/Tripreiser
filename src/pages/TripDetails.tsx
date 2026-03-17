import { useParams, Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { tripData, Media } from "@/data/tripData";

const TripDetails = () => {
  const { id } = useParams<{ id: string }>();
  const trip = id ? tripData[id] : null;

  // ✅ Safety check
  if (!trip) {
    return <h1 className="p-10 text-center text-2xl">Trip not found</h1>;
  }

  // ✅ States
  const [plan, setPlan] = useState<"explorer" | "elite">("explorer");
  const [selectedDay, setSelectedDay] = useState<number>(0);

  const [media, setMedia] = useState<Media[]>(trip.userMedia || []);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [people, setPeople] = useState("");

  const currentPlan = trip.plans[plan];

  // ⭐ Reviews
  const reviews = trip.reviews || [];

  const averageRating =
    reviews.length > 0
      ? (
          reviews.reduce((acc, r) => acc + r.rating, 0) /
          reviews.length
        ).toFixed(1)
      : "No ratings";

  // ✅ Upload Handler
  const handleUpload = () => {
    if (!selectedFile) return;

    const url = URL.createObjectURL(selectedFile);

    const newMedia: Media = {
      type: selectedFile.type.startsWith("video") ? "video" : "image",
      url,
      user: "You",
    };

    setMedia((prev) => [newMedia, ...prev]);
    setSelectedFile(null);
  };

  // ✅ Email Handler
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_828uzvj",
        "template_idkz19u",
        {
          trip: trip.title,
          plan: currentPlan.name,
          name,
          phone,
          people,
        },
        "jPuWySnIP1_gBT7eL"
      )
      .then(() => {
        alert("Booking request sent successfully!");
        setName("");
        setPhone("");
        setPeople("");
      });
  };

  return (
    <div className="container mx-auto px-4 py-10">
      {/* HERO */}
      <img
        src={trip.hero}
        alt={trip.title}
        className="w-full h-[450px] object-cover rounded-xl mb-10 shadow-md"
      />

      <div className="grid lg:grid-cols-3 gap-10">
        {/* LEFT SIDE */}
        <div className="lg:col-span-2">
          {/* TITLE */}
          <h1 className="text-4xl font-bold mb-4">{trip.title}</h1>
          <p className="text-muted-foreground mb-6 text-lg">
            Duration: {trip.duration}
          </p>

          {/* PLAN SWITCH */}
          <div className="flex gap-4 mb-8">
            {["explorer", "elite"].map((p) => (
              <button
                key={p}
                onClick={() => {
                  setPlan(p as "explorer" | "elite");
                  setSelectedDay(0);
                }}
                className={`px-6 py-2 rounded-lg font-medium transition ${
                  plan === p
                    ? "bg-orange-500 text-white shadow-lg"
                    : "border hover:bg-gray-100"
                }`}
              >
                {p.toUpperCase()}
              </button>
            ))}
          </div>

          {/* PRICE */}
          <h3 className="text-3xl font-bold mb-6 text-orange-600">
            {currentPlan.price}
          </h3>

          {/* GALLERY */}
          <h2 className="text-2xl font-bold mb-4 border-b pb-2">
            Trip Gallery
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
            {trip.gallery.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="gallery"
                className="h-40 w-full object-cover rounded-lg hover:scale-105 transition"
              />
            ))}
          </div>

          {/* ITINERARY */}
          <h2 className="text-2xl font-bold mb-6 border-b pb-2">
            Itinerary
          </h2>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {currentPlan.itinerary.map((day, i) => (
              <div
                key={i}
                onClick={() => setSelectedDay(i)}
                className={`cursor-pointer p-4 rounded-lg border ${
                  selectedDay === i
                    ? "border-orange-500 bg-orange-50"
                    : "hover:border-orange-300"
                }`}
              >
                {day.title}
              </div>
            ))}
          </div>

          {/* SELECTED DAY */}
          <div className="p-6 border rounded-xl bg-white shadow-md">
            <h3 className="text-xl font-bold mb-2">
              {currentPlan.itinerary[selectedDay].title}
            </h3>

            <p className="mb-4 text-gray-600">
              {currentPlan.itinerary[selectedDay].description}
            </p>

            {currentPlan.itinerary[selectedDay].highlights && (
              <ul className="list-disc ml-5 mb-4">
                {currentPlan.itinerary[selectedDay].highlights.map(
                  (item, i) => (
                    <li key={i}>{item}</li>
                  )
                )}
              </ul>
            )}

            {currentPlan.itinerary[selectedDay].stayImages && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {currentPlan.itinerary[selectedDay].stayImages.map(
                  (img, i) => (
                    <img
                      key={i}
                      src={img}
                      className="rounded-lg h-32 w-full object-cover"
                    />
                  )
                )}
              </div>
            )}
          </div>

          {/* USER MEDIA */}
          <h2 className="text-2xl font-bold mt-10 mb-4 border-b pb-2">
            Traveler Photos & Videos
          </h2>

          <div className="flex gap-4 mb-6">
            <input
              type="file"
              accept="image/*,video/*"
              onChange={(e) =>
                setSelectedFile(e.target.files?.[0] || null)
              }
            />
            <button
              onClick={handleUpload}
              className="bg-orange-500 text-white px-4 py-2 rounded-lg"
            >
              Upload
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {media.map((item, i) => (
              <div key={i} className="border rounded-lg overflow-hidden">
                {item.type === "image" ? (
                  <img
                    src={item.url}
                    className="w-full h-40 object-cover"
                  />
                ) : (
                  <video
                    src={item.url}
                    controls
                    className="w-full h-40 object-cover"
                  />
                )}
                <p className="text-sm p-2 text-gray-500">
                  by {item.user}
                </p>
              </div>
            ))}
          </div>

          {/* REVIEWS */}
          <h2 className="text-2xl font-bold mt-10 mb-4 border-b pb-2">
            Reviews & Ratings
          </h2>

          <h3 className="text-3xl text-orange-500 mb-2">
            ⭐ {averageRating} / 5
          </h3>

          <div className="space-y-4">
            {reviews.map((review, i) => (
              <div key={i} className="border p-4 rounded-lg">
                <div className="flex justify-between">
                  <h4 className="font-semibold">{review.name}</h4>
                  <span>{"⭐".repeat(review.rating)}</span>
                </div>
                <p className="text-gray-600">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-white p-6 rounded-xl shadow-xl h-fit sticky top-24 border">
          <h3 className="text-3xl font-bold mb-4">
            {currentPlan.price}
          </h3>

          <Link to={`/plan-trip/${id}`}>
            <Button className="w-full mb-3">Plan Your Trip</Button>
          </Link>

          <Button className="w-full bg-orange-500 text-white mb-3" asChild>
            <a href="https://forms.gle/VTCkR5123v3hihvK9" target="_blank">
              Book Now
            </a>
          </Button>

          <Button className="w-full bg-green-500 text-white mb-6" asChild>
            <a href="https://wa.me/917319216894" target="_blank">
              <Phone className="w-4 h-4 inline mr-2" />
              WhatsApp Booking
            </a>
          </Button>

          <form onSubmit={sendEmail} className="space-y-3">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border p-2 rounded"
              required
            />

            <input
              type="text"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border p-2 rounded"
              required
            />

            <input
              type="number"
              placeholder="People"
              value={people}
              onChange={(e) => setPeople(e.target.value)}
              className="w-full border p-2 rounded"
              required
            />

            <button className="w-full bg-black text-white py-2 rounded">
              Send Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TripDetails;