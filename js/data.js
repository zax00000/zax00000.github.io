/* ==========================================================================
   data.js — EDIT THIS FILE. Everything on the site comes from here.
   You should never need to touch the HTML to change content.
   ========================================================================== */

const SITE = {
  name: "Mateusz Świderski",
  role: "Gameplay & Multiplayer Programmer",

  /* Small chips under your name in the sidebar. Two or three, max. */
  roles: ["Enemy AI", "Multiplayer", "Unity · Unreal Engine 5"],

  /* Availability line at the top of the sidebar. Set to "" to hide it. */
  availability: "Open to internships & junior roles",

  /* The opening statement in the main column. Two or three sentences.
     What you build, what you are good at, what you want next. */
  tagline:
    "I build enemy AI and online multiplayer. At Futuregames I wrote behaviour-tree " +
    "enemies, bosses and traps in Unity, and the Steam lobby, voice chat and text " +
    "chat for a co-op horror game in Unreal Engine 5.",

  location: "Warsaw, Poland",
  email: "mateusz.swiderski123@gmail.com",

  /* Leave any of these as "" and the link disappears automatically.
     Add your GitHub and LinkedIn URLs here when you have them ready. */
  links: {
    github: "https://github.com/zax00000",
    itch: "",
    linkedin: "",
    cv: "", // e.g. "assets/cv.pdf"
  },

  /* Sidebar portrait. Drop a file in assets/images/ and put the path here.
     Without one, the sidebar shows your initials instead — which looks fine. */
  photo: "", // e.g. "assets/images/portrait.jpg"

  /* Shown in the About section. Two or three short paragraphs. */
  about: [
    "I'm a game programmer from Warsaw, in my final year at the Polish-Japanese " +
      "Academy of Information Technology (PJATK). I've also made three team games " +
      "at Futuregames — two in Unity and one in Unreal Engine 5.",
    "Most of my work is the part players push against: enemies with readable, " +
      "escalating attack patterns, and the online systems that let friends find each " +
      "other and play together. I've been the only programmer on a 12-person team, " +
      "written my own behaviour-tree framework for a mobile game, and built Steam " +
      "multiplayer with voice and text chat entirely in Blueprints.",
  ],
};

/* --------------------------------------------------------------------------
   SKILLS — grouped. Add or remove groups freely.
   -------------------------------------------------------------------------- */
const SKILLS = [
  { group: "Programming",     items: ["C#", "C++", "Unreal Blueprints"] },
  { group: "Engines & Tools", items: ["Unity", "Unreal Engine 5", "DOTween", "Perforce", "Git"] },
  { group: "Enemy AI",        items: ["Behaviour trees", "NavMesh navigation", "Boss attack patterns", "Traps & environmental hazards"] },
  { group: "Multiplayer",     items: ["Steam sessions & friend invites", "Lobby & ready-up", "Replication & server events", "Voice chat (VOIP)", "Text chat"] },
];

/* --------------------------------------------------------------------------
   TIMELINE — education and experience.
   ----------------------------------------------------------------------------
   Each entry: { org, period, title, meta, bullets }
   `meta` is the small tech line under the title. `bullets` is optional.
   Newest first. Delete the whole `experience` array if you have none yet —
   the section hides itself.
   -------------------------------------------------------------------------- */
const TIMELINE = {
  education: [
    {
      org: "Polish-Japanese Academy of Information Technology (PJATK), Warsaw",
      period: "Final year",
      title: "University studies",   // add your field of study, e.g. "BSc Computer Science"
    },
    {
      org: "Futuregames",
      period: "2025 — 2026",
      title: "Game Programming",
      meta: "Unity | Unreal Engine 5 | Team projects",
      bullets: [
        "Three team game projects: two in Unity (one for Android) and a co-op game in Unreal Engine 5.",
        "Worked as a programmer alongside producers, designers and artists, on 3–7 week productions.",
      ],
    },
  ],

  /* Professional work goes here, newest first. Empty for now, so the section
     is labelled "Education" automatically. */
  experience: [],
};

/* --------------------------------------------------------------------------
   PROJECTS
   ----------------------------------------------------------------------------
   Schema — every field is optional except id, title, summary.

   id           unique slug, used for the deep link (#project=my-game)
   featured     true  -> big card in "Selected Work" (use for the 3 course games)
                false -> compact card in "Personal Projects"
   draft        true  -> shows a DRAFT chip. Delete once the copy is real.
   status       small badge on the card: "Shipped" | "In development" |
                "Prototype" | "Game jam" | "Released on itch.io" — your words.
   title        game name
   subtitle     one-line hook, shown under the title
   context      "Futuregames — Team Production 3" / "Personal project"
   year         "2025"
   duration     "10 weeks"
   team         "14 people (4 programmers)"  — omit for solo work
   role         YOUR role. Be specific: "Gameplay Programmer" beats "Programmer".
   engine       "Unreal Engine 5.4 (C++ / Blueprint)"
   platforms    ["PC"]
   summary      2–3 sentences. What is the game, what did you own.
   contributions  bullet list — what YOU built. Lead with the verb. Be concrete.
   highlight    the one technical thing you are proudest of:
                  { title, problem, solution, result }
   tech         tag list shown on the card
   thumb        card image  -> "assets/games/<id>/thumb.jpg"   (16:9, ~1280x720)
   shots        gallery     -> [{ src, caption }]
   video        YouTube/Vimeo EMBED url, shown at the top of the detail view
   links        [{ label, url, kind }]  kind: "itch" | "github" | "video" | "site"
   -------------------------------------------------------------------------- */

const PROJECTS = [
  /* =========== FUTUREGAMES GAME 1 — These Demons of Mine (Unity) =========== */
  {
    id: "these-demons-of-mine",
    featured: true,
    status: "Released on itch.io",
    title: "These Demons of Mine",
    subtitle: "A 3D action-platformer where you fight anxiety, stress and fear made flesh.",
    context: "Futuregames — Team Project 1",
    year: "2025",
    duration: "3 weeks",
    team: "12 people (only programmer)",
    role: "Programmer — Enemy AI & UI",
    engine: "Unity (C#)",
    platforms: ["Windows"],
    summary:
      "A surreal 3D action-platformer about facing your inner monsters: move, dash, " +
      "wall-jump and parry through enemies that embody anxiety, stress and fear. My " +
      "first Unity team project, built in three weeks by a 12-person team where I was " +
      "the only programmer — my focus was the enemy AI, plus helping implement the UI and menus.",
    contributions: [
      "Built all three enemy types — Fear, Stress and Slime — on Unity's NavMesh, each " +
        "with its own movement, attack pattern and hit reactions.",
      "Fear: an ambush that opens decoy portals around the player, then strikes with a " +
        "scythe from the last one. A parry pulls Fear out into a melee fight; every cycle " +
        "the player only dodges makes the next one faster, down to 0.6 s between portals.",
      "Stress: a single enemy that splits into a swarm of eight copies and releases them " +
        "together (see the technical highlight).",
      "Slime: grows while it chases the player and gets tougher at each size step, and " +
        "alternates punches with a grab that pins the player and drains health until the " +
        "Slime dies. Both attacks can be parried.",
      "Shared enemy foundations: an AIManager that hands every enemy its target, " +
        "animation-event hitboxes, a stun-and-knockback hit reaction with brief " +
        "invulnerability, and event-driven responses to the player's death.",
      "Helped implement the in-game UI and menus.",
    ],
    highlight: {
      title: "Making a swarm arrive as one wave",
      problem:
        "Stress spawns its eight copies one by one over several seconds. If each copy " +
        "started chasing the moment it appeared, they would reach the player in a trickle " +
        "and could be cut down individually — the opposite of an overwhelming swarm.",
      solution:
        "The original enemy acts as a group leader: every copy registers with it on spawn " +
        "and waits, with its attacks disabled. Once the whole spawn sequence plus a short " +
        "tracking delay has elapsed, the leader wakes the entire group in a single pass — " +
        "enabling damage, starting the run animation and sending every NavMesh agent after " +
        "the player at once. Copies deregister from the leader when they die.",
      result:
        "Stress hits as one wave of enemies rather than a queue, which is what makes the " +
        "encounter read as being overwhelmed by stress.",
    },
    tech: ["Unity", "C#", "NavMesh", "Enemy AI", "Coroutines"],
    thumb: "assets/games/these-demons-of-mine/thumb.jpg",
    shots: [
      { src: "assets/games/these-demons-of-mine/02.jpg", caption: "Stress: one enemy splits into a swarm that rushes the player as a single wave." },
      { src: "assets/games/these-demons-of-mine/03.jpg", caption: "Fear in melee — it only steps out of its portals after the player parries its scythe." },
      { src: "assets/games/these-demons-of-mine/04.jpg", caption: "Wall-jumping clear of the Stress swarm." },
      { src: "assets/games/these-demons-of-mine/01.jpg", caption: "Mushroom platforms in the forest level." },
    ],
    video: "",
    links: [
      { label: "Play on itch.io", url: "https://futuregames.itch.io/thesedemonsofmine", kind: "itch" },
    ],
  },

  /* ============== FUTUREGAMES GAME 2 — Ecdysis (Unity, Android) ============== */
  {
    id: "ecdysis",
    featured: true,
    status: "Prototype",
    title: "Ecdysis",
    subtitle: "A mobile action platformer about surviving a monster-filled cave — or becoming a monster yourself.",
    context: "Futuregames — Team Project 2",
    year: "2026",
    duration: "4 weeks",
    team: "10 people (2 programmers)",
    role: "Programmer — Enemy AI & Traps",
    engine: "Unity 6 (C#)",
    platforms: ["Android"],
    summary:
      "A Metroidvania-inspired action platformer for Android: fight your way through a " +
      "cave system full of monsters and find a way out. Built in four weeks by a " +
      "10-person team with two programmers — I wrote the enemy AI, including its " +
      "behaviour-tree framework, and the environmental traps.",
    contributions: [
      "Wrote a lightweight behaviour-tree framework — Selector and Sequence composites, " +
        "with nodes sharing data such as the current target through the tree — and built " +
        "every enemy on it from reusable condition and task nodes (detect, chase, patrol, " +
        "attack): melee, charging and ranged enemies and two bosses. Enemies patrol " +
        "waypoints until the player comes into range.",
      "Adapted NavMesh movement to the side-scrolling 2.5D level: destinations are " +
        "flattened onto the play axis, enemies only face left or right, and ranged enemies " +
        "only fire when the player is at a similar height.",
      "Charging enemy: locks its facing, accelerates along the lane, stops after a set time " +
        "or distance, then recovers on a cooldown.",
      "Stone Boss: light attacks plus a ground pound whose shockwave expands outward and " +
        "only hits a grounded player, so it can be jumped over.",
      "Fire Boss: keeps its distance, dashes away when the player closes in, and mixes " +
        "single shots with a sweeping four-shot volley (see the technical highlight).",
      "Traps: proximity-triggered spikes, lava that moves along a path and burns while you " +
        "stand in it, floating orbs that patrol and explode on contact, and a bouncing ball " +
        "that turns back at platform edges.",
      "Cave hazards for the stone and volcanic areas: stalagmites that burst up when the " +
        "player steps on a trigger, gravity wells and walls that shove the player away, and " +
        "lava pools that drift around and burn anything standing in them.",
      "Enemies and traps deal damage through a shared IDamageable interface and spawn " +
        "projectiles and effects from the team's object pool.",
    ],
    highlight: {
      title: "A ranged boss you can't just stand next to",
      problem:
        "A ranged boss falls apart if the player simply walks up and stays in its face. And " +
        "picking attacks purely at random can leave a long stretch where its signature " +
        "heavy attack never appears.",
      solution:
        "When the player gets within 5 m, the Fire Boss fires a point-blank shot and dashes " +
        "back 8 m, to a destination checked with NavMesh.SamplePosition and re-sampled every " +
        "step so it stays on walkable ground; a cooldown stops it dashing constantly. Its " +
        "attack choice uses a pity counter: the heavy volley has a 30% chance, is guaranteed " +
        "after three light attacks, and rises to 50% when the boss is cornered with nowhere " +
        "to dash.",
      result:
        "The player has to keep pressing in and dodging the volley instead of standing " +
        "still, and the boss's big attack turns up reliably rather than by luck.",
    },
    tech: ["Unity 6", "C#", "Behaviour Trees", "NavMesh", "DOTween"],
    thumb: "assets/games/ecdysis/thumb.jpg",
    shots: [
      { src: "assets/games/ecdysis/01.jpg", caption: "The Stone Boss — its ground-pound shockwave can be jumped over." },
      { src: "assets/games/ecdysis/02.jpg", caption: "Several enemy types fighting the player at once." },
      { src: "assets/games/ecdysis/03.jpg", caption: "Enemies closing in from both sides of the lane." },
      { src: "assets/games/ecdysis/04.jpg", caption: "The lava section of the cave." },
    ],
    video: "https://www.youtube.com/embed/o8Hqj9x4lXU",
    links: [
      { label: "Download on itch.io", url: "https://futuregames.itch.io/ecdysis", kind: "itch" },
    ],
  },

  /* ======== FUTUREGAMES GAME 3 — Exorcism of Elizabeth (Unreal Engine 5) ======== */
  /* Not published on itch.io or Steam, so there is no link. The thumb is a 16:9 band
     cropped from the portrait key-art poster; add gameplay screenshots to shots. */
  {
    id: "exorcism-of-elizabeth",
    featured: true,
    status: "Not publicly released",
    title: "Exorcism of Elizabeth",
    subtitle: "A first-person online co-op horror game set in a haunted mansion.",
    context: "Futuregames — Team Project 3",
    year: "2026",
    duration: "7 weeks",
    role: "Programmer — Multiplayer, Voice & Text Chat",
    engine: "Unreal Engine 5.7 (Blueprints)",
    platforms: ["PC"],
    summary:
      "A first-person online co-op horror game: players team up in a haunted mansion " +
      "to exorcise the ghost of Elizabeth. Built entirely in Blueprints over seven " +
      "weeks. I owned the multiplayer layer — the Steam connection that lets friends " +
      "join each other, the lobby, proximity voice chat and text chat — plus the portal " +
      "system.",
    contributions: [
      "Connected the game to Steam: an in-lobby friends list with avatars and online " +
        "status sends session invites, so friends can join each other's game directly " +
        "(Advanced Sessions).",
      "Built the lobby the game boots into: each joining player gets a platform showing " +
        "their character; the lobby tracks names and ready state, lets the host kick " +
        "players and start the match once enough players are ready, then travels " +
        "everyone into the level.",
      "Replicated ready-up: player controllers send name and ready-state changes to the " +
        "server, and the lobby UI rebuilds from the replicated player info.",
      "Proximity voice chat: each player's voice is spatialized from their character and " +
        "fades with distance, with a replicated radio mode that puts voices through a " +
        "radio effect.",
      "Text chat: messages are sent to the server, which relays them to every player " +
        "through the game state's player list, into a chat box opened with Enter.",
      "Host-only Start Match, Leave Party back to the start-up map, and the win screen.",
      "A first-person portal system: linked portals that teleport the player on " +
        "crossing the portal plane, used for doors.",
    ],
    // highlight: { title, problem, solution, result } — hidden until filled in
    tech: ["Unreal Engine 5", "Blueprints", "Online multiplayer", "Steam", "Voice chat"],
    thumb: "assets/games/exorcism-of-elizabeth/thumb.jpg",
    shots: [],
    video: "",
    links: [],
  },

  /* ======================== PERSONAL PROJECTS ========================
     None yet. Add entries here with `featured: false` and they appear in a
     "Personal Projects" section (with its own sidebar link) automatically. */
];
