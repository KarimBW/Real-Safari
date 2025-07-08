
interface CampInfo {
  description: string;
  features: string[];
  quickNotes?: {
    bestSeason: string;
    dayTemps: string;
    nightTemps: string;
    terrain: string;
    highlights: string;
    driving: string;
    mood: string;
    vibe: string;
  };
}

type CampDataType = {
  [destinationId: string]: {
    [campName: string]: CampInfo;
  };
};

export const campData: CampDataType = {
  okavango: {
    moremi: {
      description: "Welcome to Moremi Camp, where leopards roam like they own the place (and frankly, they do). Nestled in the heart of leopard territory, our luxury tents offer the perfect blend of wild adventure and pampered comfort. Wake up to the sound of the Delta and the distant roar of big cats, then enjoy a cup of coffee as you watch the sunrise over the savanna. Our staff proudly maintains a perfect record of never losing a guest—though we can't say the same for their socks, which mysteriously disappear during laundry.",
      features: ["Guided leopard tracking", "Luxury tented accommodation", "Open-air dining with wildlife views", "Expert naturalist guides", "Mokoro canoe excursions"]
    },
    chobe: {
      description: "At Chobe Camp, our resident giraffes are so tall they've been known to photobomb your selfies from half a mile away. Our eco-friendly lodge sits on a bluff overlooking the famous Chobe River, where elephants come for happy hour every sunset. Our exclusive 'Tall Tales' dining experience lets you enjoy gourmet meals while giraffe families gracefully browse nearby acacia trees. Just don't stare too long—they're self-conscious about their necks and might start gossiping about you in giraffe language.",
      features: ["River cruises with elephant sightings", "Giraffe viewing platforms", "Photography hides", "Bush dinners under acacia trees", "Infinity pool overlooking the savanna"]
    },
    maun: {
      description: "Maun Camp is your gateway to the Okavango Delta—both literally and spiritually. Our riverside lodge combines modern amenities with traditional Botswana design. From your private deck, watch hippos playing their daily game of 'who can stay underwater longest' (current record: 7 minutes). Our Delta views are so stunning that guests often forget to blink, requiring our staff to gently remind them. The camp Wi-Fi password is 'justlookatthedelta'—though most guests forget technology exists once they see the real-life paradise outside.",
      features: ["Delta panoramic views", "Boat tours through water channels", "Cultural village visits", "Birdwatching expeditions", "Sunset cocktail cruises"]
    },
    khwai: {
      description: "Khwai Camp is wild dog paradise—the only place where these endangered canines are known to stop and pose for photos (we've trained them well with compliments). Our thatched chalets blend into the landscape so well that guests occasionally try to enter neighboring trees by mistake. The camp's unique location between the delta and drier lands creates a wildlife highway right through camp. Our nightly campfire stories feature tales of the legendary 'Khwai Pack'—wild dogs so clever they've learned to operate the coffee machine when staff aren't looking.",
      features: ["Wild dog tracking safaris", "Walking safaris with armed guides", "Night drives to spot nocturnal species", "Bush breakfasts in the wild", "Traditional boma dinners"]
    },
    savuti: {
      description: "Savuti Camp sits in elephant paradise, where these gentle giants consider humans as interesting room decor. Our innovative 'elephant alarm clocks' wake guests naturally as herds trumpet their morning greetings. The camp was designed with extra-wide pathways after an incident where a curious elephant decided to 'try on' a guest tent (we've since added a 'no trunk inside tents' policy). Our famous mud-bath viewpoint lets you watch elephants enjoying spa treatments that would cost hundreds at fancy hotels—though we don't recommend joining them unless gray is your color.",
      features: ["Elephant interaction experiences", "Underground photography hides", "Savuti Channel game drives", "Star bed sleeping platforms", "Open-air showers with wildlife views"]
    }
  },
  kalahari: {
    ckgr: {
      description: "This isn't just the heart of the desert—it's the soul of solitude. CKGR is where the horizon forgets to end and the road becomes your story. One minute you're alone on the pan, the next you're sharing it with a herd of zebra moving like wind. Lions lurk in Deception Valley, springbok bolt across the open, and the silence? It's not empty—it's electric. There's no rush here. You set the pace, roll down the windows, and become part of the rhythm. Evenings are for campfires under a galaxy you didn't know existed, mornings for tracking fresh spoor before the heat kicks in. It's not curated. It's not filtered. It's wild, and it's waiting.",
      features: ["Zebra migration viewing", "Desert-adapted wildlife safaris", "San Bushmen cultural experiences", "Star gazing with astronomer guides", "4x4 adventures through ancient riverbeds"],
      quickNotes: {
        bestSeason: "May–September (dry, cooler, migration in motion)",
        dayTemps: "22–32°C",
        nightTemps: "5–15°C",
        terrain: "Open pans, fossil riverbeds, sandy tracks",
        highlights: "Zebra, oryx, lion, cheetah, springbok",
        driving: "4×4 essential; long distances between camps",
        mood: "Remote, raw, meditative",
        vibe: "For travellers who like their solitude shaken, not stirred"
      }
    },
    khutse: {
      description: "Khutse is the quieter cousin of CKGR—a desert retreat where the sand gets deeper, the skies feel wider, and the ostriches own the runway. This is where self-drive safari meets soul detox. No fences, no rush, and no one around for miles. Just you, your rooftop tent, and the kind of silence that resets something inside. Expect sudden bursts of springbok, massive ostrich parades, and the occasional big cat trace. But mostly, expect to slow down. A sunrise coffee on the bonnet. A walk to check tracks in the sand. The thrill of hearing nothing but your own heartbeat.",
      features: ["Ostrich behavior research tours", "Desert adaptation workshops", "Guided fossil walks", "Traditional hunting techniques demonstrations", "Pan photography excursions"],
      quickNotes: {
        bestSeason: "April–October (cooler, dry roads)",
        dayTemps: "25–35°C",
        nightTemps: "7–17°C",
        terrain: "Deep Kalahari sand, rolling dunes, open woodland",
        highlights: "Ostrich, springbok, jackal, leopard (if lucky)",
        driving: "Deep sand sections, recovery gear advised",
        mood: "Isolated, introspective, slightly surreal",
        vibe: "Where birdwatchers meet bush philosophers"
      }
    },
    ghanzi: {
      description: "Ghanzi is less about chasing lions, more about meeting legends. It's the cultural heartbeat of the Kalahari, where the San Bushmen still read the land like a living map. This is where you trade game drives for ancient wisdom, fire-making lessons, and traditional dances under moonlight. It's a perfect stopover between game reserves or a base for slow exploration. Sit with elders, learn to track scorpions in the sand, and discover how a people survived for thousands of years without Wi-Fi. Ghanzi is not a detour—it's a perspective shift.",
      features: ["San Bushmen guided walks", "Traditional craft workshops", "Bush survival skills training", "Story evening with tribal elders", "Medicinal plant identification tours"],
      quickNotes: {
        bestSeason: "Year-round, but cooler months (May–Aug) offer best comfort",
        dayTemps: "25–37°C",
        nightTemps: "10–20°C",
        terrain: "Flat savannah, shrubland, cultural homesteads",
        highlights: "Cultural focus – but keep an eye out for kudu and bat-eared foxes",
        driving: "Accessible by 2x4, but 4x4 ideal for onward Kalahari travel",
        mood: "Grounded, human, timeless",
        vibe: "For travellers curious about the people as much as the predators"
      }
    },
    mabuasehube: {
      description: "This is for the true wild at heart. Mabuasehube is a remote pocket of Kgalagadi where cheetah roam wide, waterholes are sacred, and the sunsets come with goosebumps. No facilities. No fences. No fluff. Just a patch of land, your 4x4, and the kind of quiet you feel in your bones. Here, you don't follow a guide—you follow your instincts. Set up your rooftop tent near the pan and watch the world come to drink. Hyenas laugh in the night, cheetahs prowl at dawn, and sometimes you'll just sit... because it's too beautiful to move.",
      features: ["Cheetah research participation", "Pan game drives", "Predator conservation talks", "Special photography vehicles", "Desert sleep-outs under the stars"],
      quickNotes: {
        bestSeason: "May–August (cool, dry, and dramatic light)",
        dayTemps: "20–30°C",
        nightTemps: "5–15°C",
        terrain: "Arid pans, scrub, occasional dunes",
        highlights: "Cheetah, hyena, wildebeest, lion",
        driving: "Very remote, deep sand, high clearance essential",
        mood: "Raw, alert, wildly satisfying",
        vibe: "For purists who want to feel like the only humans left"
      }
    },
    kgalagadi: {
      description: "Kgalagadi is desert drama at its finest. The land glows red, the lions wear black manes like royal cloaks, and the sky always looks like it's up to something. It's a shared park with South Africa, but the Botswana side? That's where the wild things are. Oryx cruise past like ancient spirits, and every dune could hide a surprise. Your rooftop tent becomes a front-row seat to Africa's quiet theatre. Sleep above the sand, drive the dry riverbeds, and let the wilderness remind you what real space feels like.",
      features: ["Oryx migration tracking", "Kalahari black-maned lion searches", "Desert ecology workshops", "Dune sunrise breakfasts", "Cross-border safaris into South Africa"],
      quickNotes: {
        bestSeason: "March–October (dry, clear skies, best predator sightings)",
        dayTemps: "25–38°C",
        nightTemps: "8–20°C",
        terrain: "Red sand dunes, dry riverbeds, open veld",
        highlights: "Black-maned lions, oryx, jackal, meerkat",
        driving: "Cross-border access possible; wild camps remote and unfenced",
        mood: "Majestic, cinematic, slightly primal",
        vibe: "For travellers chasing drama without crowds"
      }
    }
  },
  makgadikgadi: {
    makgadikgadi: {
      description: "Imagine a land so flat, it fools your sense of scale. The Makgadikgadi Pans are ancient salt flats where elephants march like ghosts and silence makes itself at home. Drive long enough and you'll hit the edge of forever. This is not a place you visit. It's a place you feel. And when the rains come? Flamingos. Thousands. The whole pan shifts from cracked white to soft pink. Stick to the edges or venture boldly inward—just you, your rig, and a sky that never blinks.",
      features: ["Elephant behavior studies", "Salt pan quad biking adventures", "Wet season water hole gatherings", "Ancient elephant migration route walks", "Baobab sundowners with elephant views"],
      quickNotes: {
        bestSeason: "Dry (June–Oct) for open pans; wet (Dec–Mar) for birdlife",
        dayTemps: "25–37°C",
        nightTemps: "10–22°C",
        terrain: "Hard-packed salt, dusty tracks, soft edges after rain",
        highlights: "Elephants, zebra, flamingos (wet season), brown hyena",
        driving: "Avoid center pans in rainy season; stick to marked tracks",
        mood: "Otherworldly, reflective, wide open",
        vibe: "For dreamers chasing horizons"
      }
    },
    "nxai pan": {
      description: "Nxai Pan is where drama meets elegance. Lions snooze in tall grass. Elephants march through fossil flats. And the famous Baines' Baobabs stand like desert statues, keeping secrets older than memory. This is where you come to see Africa move slowly—and powerfully. Pull up to a pan and wait. Everything happens in stillness here. Herds arrive in a cloud of dust, predators follow quietly behind, and your camera barely keeps up.",
      features: ["Lion pride monitoring", "Baobab forest excursions", "Legendary Baines' Baobabs visits", "Nxai Pan game drives", "Seasonal zebra migration viewing"],
      quickNotes: {
        bestSeason: "Dec–Mar (zebra migration); May–Aug (cool & dry)",
        dayTemps: "24–36°C",
        nightTemps: "8–18°C",
        terrain: "Flat pans, scattered woodland, baobab stands",
        highlights: "Lion, zebra, elephant, giraffe",
        driving: "Soft in wet season; dry tracks in winter",
        mood: "Gentle, timeless, visually stunning",
        vibe: "For slow movers and still shooters"
      }
    },
    nata: {
      description: "Nata is all about the skies. And the skies are full of wings. This little corner of the pans explodes with birdlife during the wet season, especially flamingos turning shallow pools into pink-painted watercolour scenes. Bring your binoculars. And your best 'wow' face. It's a place to camp light, rise early, and catch the golden glow off the pans before the heat kicks in. You don't just visit Nata—you perch.",
      features: ["Flamingo migration spectacles", "Bird photography workshops", "Specialized birding guides", "Sanctuary conservation tours", "Sunset boat cruises through bird colonies"],
      quickNotes: {
        bestSeason: "Dec–Apr (wet season, max birdlife)",
        dayTemps: "26–37°C",
        nightTemps: "12–22°C",
        terrain: "Shallow pans, grassland, acacia fringes",
        highlights: "Flamingos, pelicans, storks, raptors",
        driving: "Good access; nearby fuel and town services",
        mood: "Light, twitchy, sunrise-chasing",
        vibe: "For those who love feathers more than fur"
      }
    },
    "kubu island": {
      description: "Kubu is what happens when nature writes poetry. Giant baobabs sit atop granite outcrops, surrounded by the white shimmer of the pans. It's still. It's sacred. And it feels like stepping out of time. Set up camp between stone and sky, cook over coals, and fall asleep where generations once held ritual. Whether it's the surreal views, the ancient energy, or just the way your tyres crunch the salt, Kubu changes you. Quietly.",
      features: ["Ancient baobab tours", "Granite outcrop explorations", "Archaeological site visits", "Night sky photography", "Cultural heritage experiences"],
      quickNotes: {
        bestSeason: "May–October (dry, firm surface)",
        dayTemps: "22–36°C",
        nightTemps: "9–19°C",
        terrain: "Rocky outcrop, wide-open salt flats, low scrub",
        highlights: "Baobabs, golden light, silence",
        driving: "Dry season only; pans impassable when wet",
        mood: "Sacred, surreal, slow-motion",
        vibe: "For wanderers who hear the hush"
      }
    },
    "khama rhino": {
      description: "Khama isn't about chasing. It's about witnessing. This is where white rhinos roam safely, and conservation isn't a slogan—it's the setting. A fenced reserve with heart, Khama gives you front-row access to one of Africa's most vulnerable giants. Drive your own route through woodland and savannah. Camp under starlight. And know that every sighting here is more than just a photo op—it's part of something bigger.",
      features: ["Rhino conservation experiences", "Protected sanctuary walks", "Anti-poaching demonstrations", "Behind-the-scenes sanctuary tours", "Rhino tracking and monitoring participation"],
      quickNotes: {
        bestSeason: "Year-round; clear views May–Oct",
        dayTemps: "24–36°C",
        nightTemps: "10–22°C",
        terrain: "Grassland, woodland, rocky tracks",
        highlights: "Rhino, zebra, giraffe, wildebeest",
        driving: "Easy access, marked roads, good for first-timers",
        mood: "Hopeful, peaceful, purposeful",
        vibe: "For conscious travellers who care"
      }
    }
  }
};
