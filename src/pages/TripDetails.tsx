import { useParams, Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

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

const tripData:any = {

kedarnath:{
title:"Kedarnath Spiritual Trek",
duration:"5 Days",
hero:k1,
gallery:[k1,k2,k3],

plans:{
explorer:{
name:"Explorer Plan",
price:"₹12,999",
itinerary:[
"Day 1: Haridwar → Guptkashi",
"Day 2: Trek Gaurikund → Kedarnath",
"Day 3: Temple darshan",
"Day 4: Trek back → Rishikesh",
"Day 5: Departure"
]
},

elite:{
name:"Elite Experience",
price:"₹22,999",
itinerary:[
"Day 1: Private transfer → premium stay",
"Day 2: Comfortable trek / helicopter option",
"Day 3: VIP temple darshan",
"Day 4: Luxury stay in Rishikesh",
"Day 5: Departure with breakfast"
]
}
}
},

meghalaya:{
title:"Meghalaya Waterfalls Adventure",
duration:"6 Days",
hero:m2,
gallery:[m1,m2,m3],

plans:{
explorer:{
name:"Explorer Plan",
price:"₹18,499",
itinerary:[
"Day 1: Guwahati → Shillong",
"Day 2: Cherrapunji waterfalls",
"Day 3: Living root bridge trek",
"Day 4: Dawki boating",
"Day 5: Mawlynnong village",
"Day 6: Return"
]
},

elite:{
name:"Elite Experience",
price:"₹28,999",
itinerary:[
"Day 1: Private transfer → luxury stay",
"Day 2: Premium Cherrapunji tour",
"Day 3: Guided root bridge trek",
"Day 4: Private Dawki boat ride",
"Day 5: Mawlynnong cultural experience",
"Day 6: Return"
]
}
}
},

spiti:{
title:"Spiti Valley Bike Expedition",
duration:"8 Days",
hero:s1,
gallery:[s1,s2,s3],

plans:{
explorer:{
name:"Explorer Plan",
price:"₹22,999",
itinerary:[
"Day 1: Manali arrival",
"Day 2: Manali → Kaza ride",
"Day 3: Key monastery & Kibber",
"Day 4: Hikkim & Langza",
"Day 5: Chandratal lake",
"Day 6: Pin Valley",
"Day 7: Return ride",
"Day 8: Departure"
]
},

elite:{
name:"Elite Experience",
price:"₹39,999",
itinerary:[
"Day 1: Luxury transfer → Manali",
"Day 2: Premium ride to Kaza",
"Day 3: Private Spiti sightseeing",
"Day 4: Hikkim Komik Langza",
"Day 5: Guided Pin Valley",
"Day 6: Luxury camps at Chandratal",
"Day 7: Return to Manali",
"Day 8: Departure"
]
}
}
},

varanasi:{
title:"Dev Diwali Varanasi Experience",
duration:"4 Days",
hero:v1,
gallery:[v1,v2,v3],

plans:{
explorer:{
name:"Explorer Plan",
price:"₹9,999",
itinerary:[
"Day 1: Arrival in Varanasi",
"Day 2: Sunrise boat ride",
"Day 3: Dev Diwali celebration",
"Day 4: Sarnath visit & departure"
]
},

elite:{
name:"Elite Experience",
price:"₹15,999",
itinerary:[
"Day 1: Luxury hotel check-in",
"Day 2: Private sunrise boat ride",
"Day 3: VIP Ganga Aarti + Dev Diwali",
"Day 4: Guided Sarnath tour"
]
}
}
},

gangtok:{
title:"Gangtok Bike Trip",
duration:"7 Days",
hero:g1,
gallery:[g1,g2,g3],

plans:{
explorer:{
name:"Explorer Plan",
price:"₹19,999",
itinerary:[
"Day 1: Arrival Siliguri",
"Day 2: Ride to Gangtok",
"Day 3: Tsomgo lake",
"Day 4: Nathula pass",
"Day 5: North Sikkim",
"Day 6: Return ride",
"Day 7: Departure"
]
},

elite:{
name:"Elite Experience",
price:"₹29,999",
itinerary:[
"Day 1: Premium transfer to Gangtok",
"Day 2: Luxury stay",
"Day 3: Private Tsomgo tour",
"Day 4: Nathula VIP permit",
"Day 5: North Sikkim luxury stay",
"Day 6: Return ride",
"Day 7: Departure"
]
}
}
},

ladakh:{
title:"Ladakh Adventure Expedition",
duration:"8 Days",
hero:l1,
gallery:[l1,l2,l3],

plans:{
explorer:{
name:"Explorer Plan",
price:"₹24,999",
itinerary:[
"Day 1: Leh arrival",
"Day 2: Leh sightseeing",
"Day 3: Nubra valley",
"Day 4: Diskit monastery",
"Day 5: Pangong lake",
"Day 6: Return Leh",
"Day 7: Monasteries",
"Day 8: Departure"
]
},

elite:{
name:"Elite Experience",
price:"₹42,999",
itinerary:[
"Day 1: Luxury hotel Leh",
"Day 2: Private sightseeing",
"Day 3: Nubra premium camp",
"Day 4: Private monastery tour",
"Day 5: Pangong luxury camp",
"Day 6: Return Leh",
"Day 7: Cultural experience",
"Day 8: Departure"
]
}
}
}

};

const TripDetails = () => {

const { id } = useParams();
const trip = tripData[id as keyof typeof tripData];

const [plan,setPlan]=useState("explorer");

const [name,setName]=useState("");
const [phone,setPhone]=useState("");
const [people,setPeople]=useState("");

if(!trip) return <h1 className="p-10">Trip not found</h1>;

const currentPlan = trip.plans[plan];

const sendEmail=(e:any)=>{

e.preventDefault();

const templateParams={
trip:trip.title,
plan:currentPlan.name,
name:name,
phone:phone,
people:people
};

emailjs.send(
"service_828uzvj",
"template_idkz19u",
templateParams,
"jPuWySnIP1_gBT7eL"
).then(()=>{
alert("Booking request sent successfully!");
setName("");
setPhone("");
setPeople("");
});

};

return(

<div className="container mx-auto px-4 py-10">

<img
src={trip.hero}
className="w-full h-[450px] object-cover rounded-xl mb-10"
/>

<div className="grid lg:grid-cols-3 gap-10">

<div className="lg:col-span-2">

<h1 className="text-4xl font-bold mb-4">
{trip.title}
</h1>

<p className="text-muted-foreground mb-6">
Duration: {trip.duration}
</p>

<div className="flex gap-4 mb-8">

<button
onClick={()=>setPlan("explorer")}
className={`px-5 py-2 rounded-lg ${plan==="explorer" ? "bg-orange-500 text-white" : "border"}`}
>
Explorer Plan
</button>

<button
onClick={()=>setPlan("elite")}
className={`px-5 py-2 rounded-lg ${plan==="elite" ? "bg-orange-500 text-white" : "border"}`}
>
Elite Experience
</button>

</div>

<h3 className="text-3xl font-bold mb-6">
{currentPlan.price}
</h3>

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

<h2 className="text-2xl font-bold mb-6">
Itinerary
</h2>

<div className="space-y-4">

{currentPlan.itinerary.map((day:string,i:number)=>(
<div
key={i}
className="border p-4 rounded-lg bg-card"
>
{day}
</div>
))}

</div>

</div>

<div className="bg-card p-6 rounded-xl shadow-lg h-fit sticky top-20">

<h3 className="text-3xl font-bold mb-4">
{currentPlan.price}
</h3>

<Link to={`/plan-trip/${id}`}>
<Button className="w-full mb-3">
Plan Your Trip
</Button>
</Link>

<a href="https://forms.gle/VTCkR5123v3hihvK9" target="_blank">
<Button className="w-full mb-3 bg-orange-500 hover:bg-orange-600 text-white">
Book Now
</Button>
</a>

<a href="https://wa.me/917319216894" target="_blank">
<button className="w-full bg-green-500 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-green-600 mb-6">
<Phone className="w-4 h-4"/>
WhatsApp Booking
</button>
</a>

<h3 className="text-xl font-bold mb-4">
Send Booking Request
</h3>

<form className="space-y-3" onSubmit={sendEmail}>

<input
type="text"
placeholder="Your Name"
value={name}
onChange={(e)=>setName(e.target.value)}
className="w-full border rounded-lg p-3"
required
/>

<input
type="text"
placeholder="Phone Number"
value={phone}
onChange={(e)=>setPhone(e.target.value)}
className="w-full border rounded-lg p-3"
required
/>

<input
type="number"
placeholder="Number of People"
value={people}
onChange={(e)=>setPeople(e.target.value)}
className="w-full border rounded-lg p-3"
required
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