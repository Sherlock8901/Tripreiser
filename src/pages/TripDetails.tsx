import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { useState } from "react";
import k1 from "@/assets/trips/kedarnath/k1.png";
import k2 from "@/assets/trips/kedarnath/k2.png";
import k3 from "@/assets/trips/kedarnath/k3.png";

import m1 from "@/assets/trips/meghalaya/m1.jpeg";
import m2 from "@/assets/trips/meghalaya/m2.jpeg";
import m3 from "@/assets/trips/meghalaya/m3.jpeg";

import s1 from "@/assets/trips/spiti/s1.png";
import s2 from "@/assets/trips/spiti/s2.jpg";
import s3 from "@/assets/trips/spiti/s3.jpg";

import v1 from "@/assets/trips/varanasi/v1.jpg";
import v2 from "@/assets/trips/varanasi/v2.jpg";
import v3 from "@/assets/trips/varanasi/v3.jpg";

import g1 from "@/assets/trips/gangtok/g1.jpg";
import g2 from "@/assets/trips/gangtok/g2.jpg";
import g3 from "@/assets/trips/gangtok/g3.jpg";

import l1 from "@/assets/trips/ladakh/l1.jpg";
import l2 from "@/assets/trips/ladakh/l2.jpg";
import l3 from "@/assets/trips/ladakh/l3.jpg";

const tripData: any = {

kedarnath:{
title:"Kedarnath Spiritual Trek",
price:"₹12,999",
duration:"5 Days",
hero:k1,
gallery:[k1, k2, k3],
itinerary:[
"Day 1: Haridwar → Guptkashi",
"Day 2: Trek from Gaurikund → Kedarnath",
"Day 3: Kedarnath temple darshan",
"Day 4: Trek back → Rishikesh",
"Day 5: Departure"
]
},

meghalaya:{
title:"Meghalaya Waterfalls Adventure",
price:"₹18,499",
duration:"6 Days",
hero:m2,
gallery: [m1, m2, m3],
itinerary:[
"Day 1: Arrive Guwahati → Shillong",
"Day 2: Explore Cherrapunji waterfalls",
"Day 3: Living root bridge trek",
"Day 4: Dawki river boating",
"Day 5: Explore Mawlynnong village",
"Day 6: Return to Guwahati"
]
},

spiti:{
title:"Spiti Valley Bike Expedition",
price:"₹22,999",
duration:"8 Days",
hero:s1,
gallery:[
s1, s2, s3
],
itinerary:[
"Day 1: Manali arrival",
"Day 2: Manali → Kaza ride",
"Day 3: Explore Key monastery & Kibber",
"Day 4: Hikkim & Langza villages",
"Day 5: Chandratal lake visit",
"Day 6: Explore Pin Valley",
"Day 7: Return ride",
"Day 8: Departure"
]
},

varanasi:{
title:"Dev Diwali Varanasi Experience",
price:"₹9,999",
duration:"4 Days",
hero:v1,
gallery:[
v1, v2, v3
],
itinerary:[
"Day 1: Arrival in Varanasi",
"Day 2: Sunrise boat ride on Ganges",
"Day 3: Dev Diwali celebration & Ganga Aarti",
"Day 4: Sarnath visit & departure"
]
},

gangtok:{
title:"Gangtok Bike Trip",
price:"₹19,999",
duration:"7 Days",
hero:g1,
gallery:[
g1, g2, g3
],
itinerary:[
"Day 1: Arrival in Siliguri",
"Day 2: Ride to Gangtok",
"Day 3: Explore Tsomgo lake",
"Day 4: Nathula pass visit",
"Day 5: Explore North Sikkim",
"Day 6: Return ride",
"Day 7: Departure"
]
},

ladakh:{
title:"Ladakh Adventure Expedition",
price:"₹24,999",
duration:"8 Days",
hero:l1,
gallery:[
l1, l2, l3
],
itinerary:[
"Day 1: Arrival in Leh",
"Day 2: Leh local sightseeing",
"Day 3: Nubra valley via Khardung La",
"Day 4: Diskit monastery visit",
"Day 5: Pangong lake",
"Day 6: Return to Leh",
"Day 7: Explore monasteries",
"Day 8: Departure"
]
}

};

const TripDetails = () => {

const {id}=useParams();
const trip=tripData[id as keyof typeof tripData];

const [name,setName]=useState("");
const [phone,setPhone]=useState("");
const [people,setPeople]=useState("");

if(!trip) return <h1 className="p-10">Trip not found</h1>;

return(

<div className="container mx-auto px-4 py-10">

{/* HERO IMAGE */}

<img
src={trip.hero}
className="w-full h-[450px] object-cover rounded-xl mb-10"
/>

<div className="grid lg:grid-cols-3 gap-10">

{/* LEFT SECTION */}

<div className="lg:col-span-2">

<h1 className="text-4xl font-bold mb-4">
{trip.title}
</h1>

<p className="text-muted-foreground mb-6">
Duration: {trip.duration}
</p>


{/* GALLERY */}

<h2 className="text-2xl font-bold mb-4">
Trip Gallery
</h2>

<div className="grid grid-cols-3 gap-4 mb-10">

{trip.gallery.map((img:string,i:number)=>(
<img
key={i}
src={img}
className="h-40 w-full object-cover rounded-lg hover:scale-105 transition"
/>
))}

</div>


{/* ITINERARY */}

<h2 className="text-2xl font-bold mb-6">
Itinerary
</h2>

<div className="space-y-4">

{trip.itinerary.map((day:string,i:number)=>(
<div
key={i}
className="border p-4 rounded-lg bg-card"
>
{day}
</div>
))}

</div>

</div>


{/* RIGHT SIDE BOOKING CARD */}

<div className="bg-card p-6 rounded-xl shadow-lg h-fit sticky top-20">

<h3 className="text-3xl font-bold mb-2">
{trip.price}
</h3>

<p className="text-muted-foreground mb-6">
Duration: {trip.duration}
</p>


{/* BOOK BUTTON */}

<Button className="w-full mb-4">
Book Now
</Button>


{/* WHATSAPP BUTTON */}

<a
href="https://wa.me/919876543210"
target="_blank"
>

<button className="w-full bg-green-500 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-green-600">

<Phone className="w-4 h-4"/>

WhatsApp Booking

</button>

</a>


{/* BOOKING FORM */}

<h3 className="text-xl font-bold mt-8 mb-4">
Book This Trip
</h3>

<form className="space-y-3">

<input
type="text"
placeholder="Your Name"
value={name}
onChange={(e)=>setName(e.target.value)}
className="w-full border rounded-lg p-3"
/>

<input
type="text"
placeholder="Phone Number"
value={phone}
onChange={(e)=>setPhone(e.target.value)}
className="w-full border rounded-lg p-3"
/>

<input
type="number"
placeholder="Number of People"
value={people}
onChange={(e)=>setPeople(e.target.value)}
className="w-full border rounded-lg p-3"
/>

<button
type="submit"
className="w-full bg-black text-white py-3 rounded-lg"
>

Send Booking Request

</button>

</form>

</div>

</div>

</div>

);

};

export default TripDetails;