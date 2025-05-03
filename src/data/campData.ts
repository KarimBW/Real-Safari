
interface CampInfo {
  description: string;
  features: string[];
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
      description: "CKGR Camp brings you front-row seats to the greatest zebra show on Earth. Our solar-powered oasis in the Central Kalahari Game Reserve features zebra-striped everything (we got a great bulk discount). The camp's watering hole attracts so many zebras that guests often report feeling dizzy from all the stripes. Our unique 'Stripe-Spotting Challenge' rewards guests who can accurately count individual zebras—current record is 342 before the counter fell asleep from the hypnotic pattern. Don't miss our famous 'Zebra Crossing' sundowners, where drinks are served as herds migrate past.",
      features: ["Zebra migration viewing", "Desert-adapted wildlife safaris", "San Bushmen cultural experiences", "Star gazing with astronomer guides", "4x4 adventures through ancient riverbeds"]
    },
    khutse: {
      description: "Khutse Camp is ostrich territory, where these bizarre birds add comic relief to the dramatic desert landscape. Our elevated suites offer panoramic views of ostriches performing what we call 'desert disco'—sprinting in circles for no apparent reason. Breakfast includes our world-famous ostrich egg omelets (each serving 8-10 people—bring friends). Our popular 'Head in Sand' meditation retreats were inspired by the local birds, though we promise the technique works better for stress relief than actual hiding. Just remember, ostriches can outrun you, so keep compliments ready if you encounter one with an attitude.",
      features: ["Ostrich behavior research tours", "Desert adaptation workshops", "Guided fossil walks", "Traditional hunting techniques demonstrations", "Pan photography excursions"]
    },
    ghanzi: {
      description: "Ghanzi Camp offers the ultimate cultural immersion, where San Bushmen share ancient wisdom and occasionally judge your poor life choices (in clicks, so you won't understand). Our traditionally inspired lodges feature modern comforts alongside authentic design elements. Learn to track animals by the faintest signs—soon you'll be pointing out three-day-old lizard tracks while your friends just want to spot lions. The nightly traditional dances often end with guests attempting to join in, creating memories the San people will laugh about for generations. Our bush tucker food experiences come with a satisfaction guarantee—or at least a good story.",
      features: ["San Bushmen guided walks", "Traditional craft workshops", "Bush survival skills training", "Story evening with tribal elders", "Medicinal plant identification tours"]
    },
    mabuasehube: {
      description: "Mabuasehube Camp is cheetah country, where everything is designed for speed—except our relaxed service pace. Our eco-tents are strategically positioned near cheetah hunting grounds, offering views so spectacular you'll forget to breathe (don't worry, our staff is trained in CPR). The camp's unique 'Cheetah Fitness Challenge' lets guests race against recorded cheetah times—spoiler alert: you'll lose magnificently. Our sunset lounge features specially designed 'cheetah spots' furniture that perfectly camouflages any food stains from your enthusiastic eating. Remember, if something zooms past your tent at night, it's either a cheetah or our overeager night porter.",
      features: ["Cheetah research participation", "Pan game drives", "Predator conservation talks", "Special photography vehicles", "Desert sleep-outs under the stars"]
    },
    kgalagadi: {
      description: "Kgalagadi Camp celebrates the majestic oryx, nature's unicorn prototype that decided two horns were better than one. Our desert-adapted luxury lodge sits amid red dunes where oryx traverse like desert nobility. The camp's infinity pool creates the illusion that you're swimming with oryx (though they're too dignified to actually join you). Our professional guides can spot an oryx from 5 miles away, mostly because nothing else out here is quite so pointy. The camp's signature 'Oryx Gaze' sundowners happen at precisely the moment when the setting sun aligns with oryx horns, creating natural sundials. Just don't mention unicorns around them—they're sensitive about the comparison.",
      features: ["Oryx migration tracking", "Kalahari black-maned lion searches", "Desert ecology workshops", "Dune sunrise breakfasts", "Cross-border safaris into South Africa"]
    }
  },
  makgadikgadi: {
    makgadikgadi: {
      description: "Makgadikgadi Camp puts you in elephant territory where these giants have been known to review the camp on 'TrunkAdvisor' (their ratings system involves how many trees we let them eat). Our luxury salt pan suites feature special elephant-watching decks where you can observe these magnificent creatures pretending not to notice you noticing them. The camp's famous 'Elephant Whisperer' guides can translate elephant rumbles—mostly complaints about tourist fashion choices. Our unique 'Ellies and Wellies' excursion lets you track elephant footprints across the pans after rains, though the elephants find human footprint collections equally fascinating.",
      features: ["Elephant behavior studies", "Salt pan quad biking adventures", "Wet season water hole gatherings", "Ancient elephant migration route walks", "Baobab sundowners with elephant views"]
    },
    "nxai pan": {
      description: "Nxai Pan Camp is lion country, where these majestic cats have learned that vehicles make excellent shade providers. Our raised platforms feature the revolutionary 'Lion Alarm' system—basically other guests screaming excitedly when lions walk through camp. The camp's unique location means lions often use our pathways as their personal catwalks, striking poses as they saunter past slack-jawed guests. Our famous 'Roar and Snore' overnight experiences let you sleep in secure sky beds while listening to the lion choir practice their dawn chorus. Just remember, the lions were here first—we're just renting space in their living room.",
      features: ["Lion pride monitoring", "Baobab forest excursions", "Legendary Baines' Baobabs visits", "Nxai Pan game drives", "Seasonal zebra migration viewing"]
    },
    nata: {
      description: "Nata Camp is flamingo headquarters, where thousands of pink birds create nature's most flamboyant convention. Our overwater bungalows sit at the perfect distance for flamingo viewing without smelling flamingo neighborhoods (you're welcome). The camp's 'Fifty Shades of Pink' sunset tours have become Instagram legends, with filters entirely unnecessary. Our guides have perfected flamingo impersonations for calling birds closer—a skill as ridiculous to watch as it is effective. The camp's signature cocktail, the 'Flaming-go', turns your tongue pink in solidarity with our feathered neighbors. We cannot, however, teach you to stand on one leg after drinking it.",
      features: ["Flamingo migration spectacles", "Bird photography workshops", "Specialized birding guides", "Sanctuary conservation tours", "Sunset boat cruises through bird colonies"]
    },
    "kubu island": {
      description: "Kubu Island Camp is baobab central, where these ancient trees gather to exchange gossip collected over thousands of years. Our stone-and-thatch chalets are built between baobabs so old they remember when the pans were lakes and crocodiles ruled the waves. The camp's 'Baobab Whispering' sessions connect guests with these gentle giants—mostly complaints about how humans have terrible posture compared to trees. Our night tours feature the 'Avenue of Ancestors', where baobabs illuminated by starlight create a mystical experience so profound that guests often return home and immediately start yoga practices. Just remember to ask permission before hugging the trees—they value consent and personal space.",
      features: ["Ancient baobab tours", "Granite outcrop explorations", "Archaeological site visits", "Night sky photography", "Cultural heritage experiences"]
    },
    "khama rhino": {
      description: "Khama Rhino Camp puts you face-to-horn with nature's tank-unicorn hybrids. Our fortified luxury lodges feature special rhino-viewing bunkers where you can safely watch these nearsighted giants debate whether you're a peculiar bush or potential date. The camp's famous 'Rhino Rumble' ground vibrations serve as our natural alarm clock when these heavyweights go for their morning jog. Our unique 'Rhino Radar' tracking systems help guests spot these surprisingly stealthy creatures—turns out two tons of prehistoric armor can move quite quietly when it wants to. Just remember the camp rules: no red clothing (rhinos are surprisingly fashion-critical) and no impersonating a rhino call (they know you're faking and find it mildly offensive).",
      features: ["Rhino conservation experiences", "Protected sanctuary walks", "Anti-poaching demonstrations", "Behind-the-scenes sanctuary tours", "Rhino tracking and monitoring participation"]
    }
  }
};
