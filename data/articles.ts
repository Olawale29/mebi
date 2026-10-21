export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Design" | "Development" | "Technology" | "Business" | "Product";
  author: string;
  date: string; // ISO
  readTime: string;
  featured?: boolean;
  /** Cover image in /public. Articles without one fall back to a gradient. */
  image?: string;
  content: string[];
};

export const articles: Article[] = [
  {
    slug: "nobody-reads-your-homepage",
    image: "/insights/nobody-reads-your-homepage.jpg",
    title: "Nobody Reads Your Homepage. They Scan It for Reasons to Leave.",
    excerpt:
      "You get about five seconds before a visitor decides whether you are worth the scroll. Here is how to spend them.",
    category: "Design",
    author: "MEBI Technology",
    date: "2026-10-12",
    readTime: "3 min read",
    featured: true,
    content: [
      "Picture your visitor. They are on a phone, on a bus or in a queue, with a tab for your site and four others fighting for attention. They did not come to admire your brand story. They came with a question, and they will leave the moment the page makes them work to find the answer.",
      "That is the first thing most business websites get wrong. They are written as if someone sat down with a coffee to read them. Nobody did. People scan, and scanners are looking for one thing: proof that they are in the right place.",
      "So the top of your page has a single job. It has to say what you do, who it is for, and what happens next, in words a stranger understands without squinting. If your headline could belong to any company in any industry, it belongs to none of them. \"Innovative solutions for modern businesses\" has been said about a million times and remembered about zero.",
      "Be specific enough that it is slightly uncomfortable. \"We build booking systems for clinics\" will turn some people away. Good. The ones who stay will trust you faster, because you sound like you actually know their world.",
      "Next, kill the guessing game on the button. \"Submit\" and \"Learn more\" tell people nothing. \"Get my quote\" and \"See pricing\" tell them exactly what they are about to get. A clear button is a small promise, and small promises kept are how trust gets built.",
      "Then look at what is competing for attention. Autoplay carousels, five different fonts, a chatbot that pops up before anyone has said hello. Every extra thing on the page is a vote against the one thing you want people to do. When in doubt, take it out.",
      "Here is a quick test you can run today. Show your homepage to someone who has never heard of your business for five seconds, then take it away. Ask what you sell. If they hesitate, you have found your next design task, and it costs nothing to fix.",
      "A good website is not louder than a bad one. It is just clearer. Clear wins, every time, usually while everyone else is still polishing the animation.",
    ],
  },
  {
    slug: "the-quote-that-says-it-depends",
    image: "/insights/the-quote-that-says-it-depends.jpg",
    title: "The Quote That Says \"It Depends\" Is Hiding Something",
    excerpt:
      "Vague pricing feels flexible. To the person trying to budget, it feels like a trap.",
    category: "Business",
    author: "MEBI Technology",
    date: "2026-09-24",
    readTime: "3 min read",
    content: [
      "Try this. Ask three software companies what a simple business website costs. There is a good chance at least one will reply with \"it depends\" and an invitation to a call. Nothing wrong with that, until you realize you now have to sit through a sales conversation just to learn whether you can afford the thing.",
      "We put real starting prices on our website because we got tired of that dance. A website from ₦400k. Design work from ₦100k. Software and apps from ₦2M. Not because every project fits those numbers, but because a starting point lets you decide in thirty seconds whether we are even in the same neighborhood.",
      "Hidden pricing is usually defended as flexibility. Every project is different, the argument goes. True. But a restaurant menu works the same way. The ingredients change, the kitchen is busy, and somehow they still manage to print a number next to the dish.",
      "What vague pricing really protects is the seller's ability to size you up first. If you look like you have a big budget, the number grows. If you look nervous, it shrinks. You were never really being quoted. You were being read.",
      "Clear pricing cuts that game short. It filters out people who cannot afford the work, which saves them a wasted afternoon, and it tells serious buyers we have nothing to dodge. Yes, some prospects will see a number and walk away. That is the system working. Better a polite no on day one than a painful no after three meetings.",
      "If you are buying, here is a rule worth keeping. Ask every provider for a starting price and what moves it up. A good one answers in a single message. The scope, the number of screens, the integrations, the deadline: these are the dials. If a company cannot name its own dials, it has not thought about its own work.",
      "And if you are selling, try publishing your numbers for a month. You will have fewer calls, but they will be better ones. Everyone on them will already know what the work costs, and you will spend the time talking about the thing you actually want to talk about: the problem.",
    ],
  },
  {
    slug: "your-customers-are-on-whatsapp",
    title: "Your Customers Are on WhatsApp. Your Software Should Know That.",
    excerpt:
      "Plenty of software is built for a world where everyone lives inside an app. Here, people live inside a chat thread.",
    category: "Product",
    author: "MEBI Technology",
    date: "2026-09-08",
    readTime: "4 min read",
    content: [
      "Ask a shop owner in Lagos how orders arrive and you will not hear about a dashboard. You will hear about WhatsApp. Screenshots of transfers, voice notes with delivery addresses, a customer who writes \"abeg is it available\" at eleven at night. That is the real system, and it works well enough that nobody wants to give it up.",
      "A lot of software is designed as if that system does not exist. It asks customers to create an account, verify an email, remember a password and download an app. Every step is a door, and each door loses a few people. By the end you have built a beautiful product that your own customers quietly avoid, because texting is easier.",
      "The better question is not how to pull people away from the chat thread. It is how to meet them there. An order form that sends a clean summary to WhatsApp. A payment link that lands inside the conversation. A booking page that confirms by message instead of by email nobody opens.",
      "This is not a downgrade. It is respect for how people already behave. The goal of a product is to make something easier, and if the easiest path runs through a tool your customers already trust, building around it is good design, not a shortcut.",
      "Data is the other half of the story. Phones here are often on limited bundles, with signal that comes and goes. A product that needs a heavy download and a perfect connection is quietly telling a large share of its users to go away. Light pages, saved progress and graceful failure are features, not polish.",
      "None of this means chat should replace your software. The chat is the front door, and behind it you still need records, reports and a way to stop orders getting lost in a scroll of messages. The craft is in joining the two so the owner gets structure without the customer noticing any change.",
      "So when someone brings us an idea, we like to start with a simple question. Where do your customers already talk to you? The answer usually tells us where the product should begin.",
    ],
  },
  {
    slug: "the-boring-stack",
    title: "The Boring Tech Stack That Quietly Pays Your Bills",
    excerpt:
      "Fashionable tools make for good conference talks. Dependable ones make for businesses that are still running in year five.",
    category: "Technology",
    author: "MEBI Technology",
    date: "2026-08-19",
    readTime: "3 min read",
    content: [
      "Every year a new framework arrives with a logo, a launch video and a promise that everything before it was a mistake. Developers get excited. Blog posts multiply. And somewhere, a business owner is being told their perfectly good system needs to be rebuilt in whatever is trending this quarter.",
      "We try to keep our heads on straight about this. A technology choice is not a statement of taste. It is a bet that someone will be able to maintain what we build long after we have moved on to the next project, probably without us in the room.",
      "So we ask a few unglamorous questions. Can you hire people who know this tool, in your city, at a price you can afford? Is it old enough that the strange bugs have already been found and written up? Will it still be supported when your business has doubled in size?",
      "Boring tools tend to pass. They have large communities, plenty of answered questions and a long record of not falling apart. When something breaks at two in the morning, you want a problem that has happened to ten thousand other people before you, with the fix sitting in the first search result.",
      "New tools are not bad. Some of them are genuinely better, and we use them when they earn their place. The difference is who carries the risk. If we pick something experimental for a client, they inherit our curiosity as a maintenance bill. That is a lot to ask of someone who just wanted a working product.",
      "There is also a quieter cost to chasing trends: the team spends its energy learning the tool instead of understanding the customer. The most successful products we have seen were never impressive under the hood. They just solved a real problem, reliably, every day.",
      "So if a provider opens your first meeting by listing the latest tools they love, gently ask what happens if they leave the project in two years. A good answer will include the word \"documentation\" and very little about hype.",
    ],
  },
  {
    slug: "why-your-app-feels-slow",
    title: "Why Your App Feels Slow Even When It Isn't",
    excerpt:
      "Speed is partly a number and partly a feeling. The feeling is the one your users actually remember.",
    category: "Development",
    author: "MEBI Technology",
    date: "2026-07-30",
    readTime: "4 min read",
    content: [
      "Two apps can take exactly the same time to load a page, and one will feel quick while the other feels like wading through mud. The clock says they are equal. People do not read the clock. They read how it feels to wait.",
      "The cruelest thing you can do to a waiting user is show them nothing. A blank white screen for two seconds feels longer than a screen that is visibly working. A spinner helps a little. A skeleton, where the shape of the page appears right away and fills in as data arrives, helps much more, because the user sees progress instead of absence.",
      "Then there is the matter of responding instantly even when the work takes time. When someone taps a button, something should change within a heartbeat. A button that darkens, a heart that fills, a message that appears in the list before the server has even replied. If the save fails, you quietly undo it and say so. Most of the time it works, and the whole app feels snappy.",
      "Weak networks change the game entirely. On a good office connection you may never see these problems. On a phone moving between towers, they show up all day. Test your product the way your users actually experience it. Throttle the connection, turn the data off halfway through a form, and see what survives.",
      "Small things add up. Images that are far larger than the space they fill. Fonts that load late and make the text jump. A form that wipes everything you typed because the connection blinked. None of these look serious in isolation. Together they make a product people describe as \"a bit stressful\" without being able to say why.",
      "Fixing perceived speed is often cheaper than fixing real speed, which is good news. You rarely need a new server. You need to be honest about what the user sees in the first second, what they can do while waiting, and what happens when something goes wrong.",
      "Build for the bad connection and the good one will take care of itself.",
    ],
  },
  {
    slug: "before-you-say-lets-build-an-app",
    title: "Before You Say \"Let's Build an App\"",
    excerpt:
      "Plenty of great businesses never needed an app. A few honest questions can save you months and a very large invoice.",
    category: "Business",
    author: "MEBI Technology",
    date: "2026-07-11",
    readTime: "4 min read",
    content: [
      "The sentence \"we should build an app\" has launched more expensive mistakes than almost any other idea in business. It sounds ambitious. It sounds modern. It also often hides the real question, which is what problem you are trying to solve.",
      "Start with who will use it and what they do today. Be annoyingly specific. Not \"customers,\" but \"the dispatcher who currently tracks twenty riders on a notebook and three phone calls.\" If you can describe their Tuesday afternoon, you are on the right track. If you cannot, spend a week watching someone do the job before you spend a naira on code.",
      "Next, ask whether a simpler thing would work first. A well-built website, a form that feeds a spreadsheet or a WhatsApp flow can prove an idea in weeks. If nobody uses the simple version, a fancy one will not rescue it. If everybody loves it, you now have real evidence about what to build properly.",
      "Then talk about money honestly, and early. Building is the first bill. After launch come hosting, fixes, updates, new phone versions and the small requests that never stop. A good partner will tell you this up front instead of letting you find out in month four.",
      "Decide how you will know it worked. Not a feeling, a signal. More orders handled per day, fewer missed bookings, less time spent chasing payments. If success has no definition, every feature request will feel equally urgent, and the project will never finish.",
      "Finally, resist the urge to build everything at once. The first version should do one job so well that people would be annoyed if you took it away. You can add the rest once real users have shown you what they actually care about, which is almost never what you guessed.",
      "Sometimes the answer to \"should we build an app\" is yes, and we will happily help. Sometimes it is \"not yet,\" and a good partner will say so, even when it means a smaller project. That honesty is worth more than the contract.",
    ],
  },
  {
    slug: "the-rewrite-trap",
    title: "The Rewrite Trap: Why Starting Over Is Rarely the Answer",
    excerpt:
      "When software gets messy, burning it down is tempting. Here is why it usually ends in a bigger mess.",
    category: "Development",
    author: "MEBI Technology",
    date: "2026-06-17",
    readTime: "3 min read",
    content: [
      "At some point in the life of most software, someone says it: \"Honestly, we should just start over.\" The code is tangled, every change breaks something else, and a fresh start feels like a clean kitchen after a long week. It is a lovely fantasy.",
      "The trouble is that the old system, ugly as it is, contains years of decisions. The odd rule about refunds. The special case for one important client. The fix for a bug that cost real money once. None of it is written down anywhere except in the code itself. A rewrite throws that knowledge away and then rediscovers it, slowly and painfully, in production.",
      "Meanwhile, the business does not pause. While the new version is being built, the old one still needs fixes, so the team ends up maintaining two products. Deadlines slip. The new system always takes longer than planned, and the day it finally launches, it is missing things the old one did quietly for years.",
      "There is a gentler way, and it is less exciting to announce. Pick the worst part, the one that causes the most pain, and replace only that. Wrap it so the rest of the system barely notices. Then pick the next one. Slow, yes, but at every step the product still works and the business still runs.",
      "This works best when the system was built with room to grow. Clear boundaries between parts. Data stored in a way that can change shape. Pieces that talk to each other through simple, well-defined doors instead of reaching into each other's drawers. These choices cost a little extra at the start and save a fortune later.",
      "If you are early in a project, that is the real advice hiding here. Ask your builder how the thing will cope when you have ten times the users, a second product and a new team. A good answer is rarely a clever trick. It is usually just tidy work done on purpose.",
      "And if you are already stuck with a mess, take a breath. It is almost always repairable, one careful piece at a time.",
    ],
  },
  {
    slug: "small-details-make-people-trust-you",
    title: "The Small Details That Make People Trust Your Product",
    excerpt:
      "Nobody thanks you for a good error message. They just keep using your product, which is the whole point.",
    category: "Design",
    author: "MEBI Technology",
    date: "2026-05-28",
    readTime: "3 min read",
    content: [
      "Ask people why they trust one app with their money and not another, and they will struggle to answer. It rarely comes down to one big thing. It comes from a hundred small moments that all told them the same story: someone cared about this.",
      "Take error messages. \"Something went wrong\" is a shrug dressed up as a sentence. \"Your payment did not go through. You have not been charged. Try again or use a different card\" is a person who thought about what you would be worrying about, and answered it before you asked.",
      "Take empty states. A new user opens your product and sees a blank page with nothing on it. That is the moment to say hello, explain what goes here and offer a first step. Silence feels like a missing room. A warm sentence feels like a host.",
      "Take consistency. When buttons look the same everywhere, when spacing follows a pattern and when words mean the same thing on every screen, people relax. They stop checking whether the product might surprise them. Surprise is lovely in a gift and miserable in a banking app.",
      "Take honesty. Say how long something will take, even if the answer is not flattering. Say what you will do with someone's data in plain language. Say when you have made a mistake and what you are doing about it. Trust is rarely lost to bad news, but it vanishes fast when people feel they were not told.",
      "None of this is decoration. These details are not the icing on the product, they are what the product is made of, as far as the user is concerned. Two apps can offer the same features, and the one that feels careful will be the one people recommend.",
      "So the next time you review a design, skip the hero image for a minute. Go find the error message, the empty page and the loading screen. That is where your product shows its character.",
    ],
  },
];

export const getArticleBySlug = (slug: string) =>
  articles.find((a) => a.slug === slug);

export const featuredArticle = articles.find((a) => a.featured) ?? articles[0];
