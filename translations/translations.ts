export type Language = 'en' | 'bn';

export const translations = {
    en: {
        hero: {
            title: "YOUR DIGITAL",
            garage: "GARAGE",
            description: "Command the road. Master your maintenance, ride with legends, and treat your machine like royalty.",
            throttleUp: "THROTTLE UP.",
            viewDemo: "View Demo",
            connect: "Follow Us",
        },
        cta: {
            openGarage: "Open Your Garage",
            placeholder: "Enter your email...",
            success: "Successfully joined!",
            shareBtn: "Share Now",
            shareSuccess: "Link copied!",
        },
        features: {
            tag: "Core Features",
            title: "Your Entire Garage",
            subtitle: "in Your Pocket.",
            swipe: "Swipe to navigate",
            items: {
                vault: {
                    title: "One-Tap Vault",
                    subtitle: "Police Verification",
                    description: "Instant, offline access to your Bluebook, Driving License, and Tax Token. Clear police checkpoints in seconds without fumbling for papers."
                },
                motoMedic: {
                    title: "Moto-Medic Squad",
                    subtitle: "Doorstep Service",
                    description: "Beat the traffic. We deploy verified mechanics on motorcycles to your office or home, equipped with body cams and genuine parts."
                },
                store: {
                    title: "Genuine Direct Store",
                    subtitle: "Anti-Fake Guarantee",
                    description: "Stop worrying about 'Nokol Mobil'. Buy oil, filters, and brakes sourced directly from importers with a 2x Money-Back Authenticity Promise."
                },
                sos: {
                    title: "Emergency SOS",
                    subtitle: "Rapid Response",
                    description: "In an accident or breakdown? Long-press your profile to instantly alert emergency contacts or summon a ThrottleCove recovery unit."
                },
                resale: {
                    title: "Verified Resale",
                    subtitle: "Asset Protection",
                    description: "Don't just sell; sell for more. Generate a 'Verified History' report that proves your bike's maintenance and odometer accuracy to buyers."
                },
                reminders: {
                    title: "Smart Reminders",
                    subtitle: "Zero-Hassle Logs",
                    description: "Never miss an oil change. The app tracks your live odometer and sends alerts exactly when your specific bike model needs maintenance."
                },
                profile: {
                    title: "Rider Profile",
                    subtitle: "Digital Identity",
                    description: "Build your legacy. Showcase your cumulative kilometers, current Rank, and badges on a personalized, shareable identity card."
                },
                garage: {
                    title: "Virtual Garage",
                    subtitle: "Manage Your Machines",
                    description: "Add unlimited bikes to your stable. Upload photos, store bike-specific papers, and sync odometer readings for every machine you own."
                }
            }
        },
        motoMedic: {
            tag: "Introducing Moto-Medic",
            title: "Skip the",
            subtitle: "Traffic.",
            description: "Why waste 3 hours in Dhaka traffic for an oil change? Our specialized rapid-response bikes bring expert mechanics to your office or home parking.",
            genuine: "100% Genuine",
            genuineDesc: "We bring sealed oil bottles. You check the seal before we pour.",
            officeService: "Office Hours Service",
            officeServiceDesc: "We service your bike in the parking lot while you work.",
            dhakaService: "Anywhere in Dhaka",
            dhakaServiceDesc: "From Gulshan to Dhanmondi, our Moto-Medics cut through traffic.",
            bookBtn: "Book a Medic (Beta)"
        },
        modal: {
            searching: "Searching",
            highDemand: "High Demand Area",
            highDemandDesc: "We cannot find a Moto Medic for you right now due to high demand. We thank you for your patience. We will notify you as we expand our services.",
            placeholder: "Enter your email",
            successTitle: "You're on the list!",
            successDesc: "We'll notify you as soon as a spot opens up.",
            priority: "We'll prioritize your request when we expand."
        },
        footer: {
            description: "The first comprehensive digital garage for Bangladesh. Secure documents, genuine parts, and community safety.",
            product: "Product",
            company: "Company",
            legal: "Legal",
            rights: "© 2024 ThrottleCove Technologies Ltd. All rights reserved.",
            builtIn: "Built with ❤️ in Dhaka."
        },
        aiMechanic: {
            tag: "Powered by Gemini 2.5",
            title: "Pocket",
            subtitle: "Mechanic.",
            description: "Not sure if that engine noise is serious? Need to know the correct tire pressure for your Gixxer SF? Our AI mechanic helps you diagnose issues before you visit the shop.",
            features: [
                "Instant maintenance advice",
                "Estimated repair costs (BDT)",
                "Parts compatibility checker",
                "Service interval reminders"
            ],
            header: "ThrottleCove AI",
            online: "Online",
            placeholder: "Ask diagnostic questions...",
            analyzing: "Analyzing Engine Data...",
            welcome: "Systems online. I'm your AI Mechanic. Ask me about maintenance, odd noises, or parts compatibility.",
            error: "Unable to connect to garage servers. Please check your network.",
            interrupted: "Connection interrupted. Retrying diagnostic protocols.",
            systemInstruction: "You are an expert motorcycle mechanic for the Bangladesh market. You know about bikes like Yamaha R15, Suzuki Gixxer, and Bajaj Pulsar. You give short, practical advice about maintenance, \"fake oil\" issues, and traffic safety. Keep answers under 50 words. Be technical but accessible."
        },
        navbar: {
            langEn: "EN",
            langBn: "বাংলা"
        }
    },
    bn: {
        hero: {
            title: "আপনার ডিজিটাল",
            garage: "গ্যারেজ",
            description: "রাস্তা শাসন করুন। আপনার রক্ষণাবেক্ষণে দক্ষ হন, কিংবদন্তিদের সাথে রাইড করুন এবং আপনার মেশিনকে রাজকীয় মর্যাদা দিন।",
            throttleUp: "থ্রটল আপ।",
            viewDemo: "ডেমো দেখুন",
            connect: "আমাদের সাথে থাকুন",
        },
        cta: {
            openGarage: "আপনার গ্যারেজ খুলুন",
            placeholder: "আপনার ইমেল দিন...",
            success: "সফলভাবে যুক্ত হয়েছেন!",
            shareBtn: "শেয়ার করুন",
            shareSuccess: "লিঙ্ক কপি হয়েছে!",
        },
        features: {
            tag: "মূল বৈশিষ্ট্যসমূহ",
            title: "আপনার পুরো গ্যারেজ",
            subtitle: "আপনার পকেটে।",
            swipe: "নেভিগেট করতে সোয়াইপ করুন",
            items: {
                vault: {
                    title: "ওয়ান-ট্যাপ ভল্ট",
                    subtitle: "পুলিশ ভেরিফিকেশন",
                    description: "আপনার ব্লুবুক, ড্রাইভিং লাইসেন্স এবং ট্যাক্স টোকেন তাৎক্ষণিক অফলাইনে দেখুন। কাগজপত্রের ঝামেলা ছাড়াই সেকেন্ডে পুলিশ চেকপোস্ট পার হন।"
                },
                motoMedic: {
                    title: "মোটো-মেডিক স্কোয়াড",
                    subtitle: "ডোরস্টেপ সার্ভিস",
                    description: "ট্রাফিক এড়িয়ে চলুন। আমরা আপনার অফিস বা বাসায় বডি ক্যাম এবং জেনুইন পার্টসসহ ভেরিফাইড মেকানিক পাঠাই।"
                },
                store: {
                    title: "জেনুইন ডিরেক্ট স্টোর",
                    subtitle: "অ্যান্টি-ফেক গ্যারান্টি",
                    description: "'নকল মবিল' নিয়ে চিন্তার দিন শেষ। আমদানিকারকদের কাছ থেকে সরাসরি সংগৃহীত তেল, ফিল্টার এবং ব্রেক কিনুন ২ গুণ টাকা ফেরত গ্যারান্টি সহ।"
                },
                sos: {
                    title: "ইমার্জেন্সি এসওএস",
                    subtitle: "দ্রুত রেসপন্স",
                    description: "দুর্ঘটনা বা ব্রেকডাউনে পডলে? আপনার প্রোফাইলে লং-প্রেস করে জরুরি পরিচিতিদের সতর্ক করুন বা থ্রটলকোভ রিকভারি ইউনিট কল করুন।"
                },
                resale: {
                    title: "ভেরিফাইড রিসেল",
                    subtitle: "সম্পদ সুরক্ষা",
                    description: "শুধু বিক্রি নয়; বেশি দামে বিক্রি করুন। একটি 'ভেরিফাইড হিস্ট্রি' রিপোর্ট জেনারেট করুন যা আপনার বাইকের রক্ষণাবেক্ষণ এবং ওডোমিটারের নির্ভুলতা প্রমাণ করবে।"
                },
                reminders: {
                    title: "স্মার্ট রিমাইন্ডার",
                    subtitle: "ঝামেলাহীন লগ",
                    description: "কখনো অয়েল চেঞ্জ মিস করবেন না। অ্যাপটি আপনার লাইভ ওডোমিটার ট্র্যাক করে এবং আপনার বাইকের মডেল অনুযায়ী সঠিক সময়ে অ্যালার্ট পাঠায়।"
                },
                profile: {
                    title: "রাইডার প্রোফাইল",
                    subtitle: "ডিজিটাল পরিচয়",
                    description: "আপনার ইতিহাস তৈরি করুন। একটি ব্যক্তিগতকৃত ডিজিটাল পরিচয়পত্রের মাধ্যমে আপনার মোট কিলোমিটার, বর্তমান র‍্যাঙ্ক এবং ব্যাজ প্রদর্শন করুন।"
                },
                garage: {
                    title: "ভার্চুয়াল গ্যারেজ",
                    subtitle: "গাড়ি পরিচালনা",
                    description: "আপনার সংগ্রহে আনলিমিটেড বাইক যোগ করুন। ফটো আপলোড করুন, বাইকের কাগজপত্র সংরক্ষণ করুন এবং প্রতিটি মেশিনের ওডোমিটার রিডিং সিঙ্ক করুন।"
                }
            }
        },
        motoMedic: {
            tag: "মোটো-মেডিক এর পরিচিতি",
            title: "ট্রাফিক",
            subtitle: "এড়িয়ে চলুন।",
            description: "ঢাকা ট্রাফিকে অয়েল চেঞ্জের জন্য ৩ ঘণ্টা নষ্ট করবেন কেন? আমাদের বিশেষায়িত র‍্যাপিড-রেসপন্স বাইক আপনার অফিস বা বাসার পার্কিংয়ে দক্ষ মেকানিক নিয়ে আসবে।",
            genuine: "১০০% জেনুইন",
            genuineDesc: "আমরা সিল করা তেলের বোতল নিয়ে আসি। আমরা ঢালার আগে আপনি সিল পরীক্ষা করেন।",
            officeService: "অফিস আওয়ার সার্ভিস",
            officeServiceDesc: "আপনি যখন কাজ করেন তখন আমরা পার্কিং লটে আপনার বাইক সার্ভিসের কাজ শেষ করি।",
            dhakaService: "ঢাকার যেকোনো স্থানে",
            dhakaServiceDesc: "গুলশান থেকে ধানমন্ডি, আমাদের মোটো-মেডিকরা ট্রাফিক কেটে পৌঁছে যাবে আপনার কাছে।",
            bookBtn: "একটি মেডিক বুক করুন (বেটা)"
        },
        modal: {
            searching: "সার্চ করা হচ্ছে",
            highDemand: "অতিরিক্ত চাপের এলাকা",
            highDemandDesc: "অতিরিক্ত চাপের কারণে আমরা এই মুহূর্তে আপনার জন্য মোটো মেডিক খুঁজে পাচ্ছি না। আপনার ধৈর্যের জন্য ধন্যবাদ। আমাদের সেবা সম্প্রসারণের সাথে সাথে আমরা আপনাকে জানাবো।",
            placeholder: "আপনার ইমেল লিখুন",
            successTitle: "আপনি তালিকায় আছেন!",
            successDesc: "সুযোগ তৈরি হওয়ার সাথে সাথেই আমরা আপনাকে জানাবো।",
            priority: "সেবা সম্প্রসারণের সময় আমরা আপনার অনুরোধটিকে অগ্রাধিকার দেব।"
        },
        footer: {
            description: "বাংলাদেশের জন্য প্রথম পূর্ণাঙ্গ ডিজিটাল গ্যারেজ। সুরক্ষিত কাগজপত্র, আসল পার্টস এবং কমিউনিটি নিরাপত্তা।",
            product: "প্রোডাক্ট",
            company: "কোম্পানি",
            legal: "লিগ্যাল",
            rights: "© ২০২৪ থ্রটলকোভ টেকনোলজিস লিমিটেড। সর্বস্বত্ব সংরক্ষিত।",
            builtIn: "ঢাকায় ❤️ এর সাথে তৈরি।"
        },
        aiMechanic: {
            tag: "গেমিনি ২.৫ দ্বারা চালিত",
            title: "পকেট",
            subtitle: "মেকানিক।",
            description: "ইঞ্জিনের আওয়াজটা কি সিরিয়াস? আপনার জিক্সার এসএফ-এর সঠিক টায়ার প্রেশার জানতে চান? আমাদের এআই মেকানিক আপনাকে গ্যারেজে যাওয়ার আগেই সমস্যা বুঝতে সাহায্য করবে।",
            features: [
                "তাৎক্ষণিক রক্ষণাবেক্ষণ পরামর্শ",
                "আনুমানিক মেরামতের খরচ (টাকা)",
                "পার্টস ম্যাচিং যাচাইকারী",
                "সার্ভিস রিমাইন্ডার"
            ],
            header: "থ্রটলকোভ এআই",
            online: "অনলাইন",
            placeholder: "আপনার প্রশ্ন জিজ্ঞাসা করুন...",
            analyzing: "ইঞ্জিন ডেটা বিশ্লেষণ করা হচ্ছে...",
            welcome: "সিস্টেম অনলাইন। আমি আপনার এআই মেকানিক। রক্ষণাবেক্ষণ, অদ্ভুত শব্দ বা পার্টস সম্পর্কে আমাকে জিজ্ঞাসা করুন।",
            error: "গ্যারেজ সার্ভারের সাথে সংযোগ করা সম্ভব হচ্ছে না। আপনার নেটওয়ার্ক চেক করুন।",
            interrupted: "সংযোগ বিচ্ছিন্ন হয়েছে। পুনরায় চেষ্টা করা হচ্ছে।",
            systemInstruction: "আপনি বাংলাদেশের বাজারের একজন বিশেষজ্ঞ মোটরসাইকেল মেকানিক। আপনি ইয়ামাহা আর১৫, সুজুকি জিক্সার এবং বাজাজ পালসারের মতো বাইক সম্পর্কে জানেন। আপনি রক্ষণাবেক্ষণ, \"ভেজাল তেল\" ইস্যু এবং ট্রাফিক নিরাপত্তা সম্পর্কে সংক্ষিপ্ত এবং ব্যবহারিক পরামর্শ দেন। উত্তর ৫০ শব্দের মধ্যে রাখুন। প্রযুক্তিগত কিন্তু সহজবোধ্য ভাষায় কথা বলুন।"
        },
        navbar: {
            langEn: "EN",
            langBn: "বাংলা"
        }
    }
};
