/* ---------- exercise library ---------- */
const HV = { // Huberman's Protocols demonstration videos
  d2:"https://www.youtube.com/watch?v=CbEFgDFQBvk", d4:"https://www.youtube.com/watch?v=UEU6NYLRi6o",
  d7:"https://www.youtube.com/watch?v=IzpGEk-2th4", mob:"https://www.youtube.com/watch?v=SzufA9jqrPw",
  face:"https://www.youtube.com/watch?v=UMGpxwhsy_k"
};
const yt=(base,s)=>base+"&t="+s+"s";
const ts=s=>Math.floor(s/60)+":"+String(s%60).padStart(2,"0");
/* demonstrations open on codekiln's garden site, where the timestamp plays the embedded video from that moment without pre-roll ads */
const GV={"CbEFgDFQBvk": {"url": "https://codekiln.github.io/logseq-encode-garden/Person/Andrew%20Huberman/Book/26/Protocols/YouTube/26/09/Day%202%20-%20Major%20Lower%20Body%20Muscles/", "ids": {"27": "901e5f09-94a2-4fee-bf5f-8109c25fb004", "67": "2e0a04b6-fefe-46c1-b237-7df3021eb7a9", "100": "ab4347a5-dad6-4193-b182-1f5b6b3e18b0", "172": "9fcbe827-b89d-4e61-8cf1-8675e801b3cb", "294": "b99e21b7-702f-4ac6-88b4-dac7a99aeff0", "312": "843d11c2-d24a-4087-a63d-62e3988ede89", "378": "7ceee6d1-0f28-4d02-a88a-43cb490d0c4e", "459": "bd1db1a5-6dc7-4f39-abd8-2a40a5db88ba", "578": "e2a920af-2226-40e5-ae39-363a79363c01", "632": "265a87d4-a41c-4dd9-871f-8bed11046aac", "746": "e1e61834-5587-45d4-ba16-b4f04270c711"}}, "UEU6NYLRi6o": {"url": "https://codekiln.github.io/logseq-encode-garden/Person/Andrew%20Huberman/Book/26/Protocols/YouTube/26/09/Day%204%20-%20Major%20Torso%20Muscles/", "ids": {"7": "cef17f00-8c35-4496-a037-a97e00f17a21", "68": "e79ae95f-5009-47e5-921d-e100fb2df8a2", "125": "484942d7-73a6-4455-a03c-fb4fd473bfe9", "195": "1792ee0a-d1c7-4331-921b-49055187aeec", "260": "1a4639cf-76e4-4611-9270-29042252ad87", "291": "524713da-ce84-4511-a449-aaf09bcc80fc", "335": "a26c99ea-3c9a-4f8e-a2ae-ae7862484dc5", "373": "d6c65c35-9c7d-4df5-8254-c4d608228b73", "416": "d4f77d4c-c58c-42e6-8f15-6469d462770e", "463": "b15df1e9-1bed-4f6b-94af-7f19b2a84e28", "568": "17a80f05-1d17-4b76-a914-6ba7317adb0d", "593": "bdb8450c-91d6-4681-a533-0dffd109e207", "709": "db99f82c-b2d9-470a-b1e0-948a994cad28", "821": "330a11fd-6b04-4b90-921d-9619310f7c93"}}, "IzpGEk-2th4": {"url": "https://codekiln.github.io/logseq-encode-garden/Person/Andrew%20Huberman/Book/26/Protocols/YouTube/26/09/Day%207%20-%20Shoulders%20and%20Arms/", "ids": {"11": "84c8fab6-5702-41ab-8350-0cd0c7dd1405", "52": "0c053dcc-3303-4ab5-845f-7bbb3012e633", "105": "7a5ed56a-fca1-4109-954d-048c1a74fae8", "142": "1b5c89c9-cb77-47e1-bfde-033d46504832", "185": "0866e5ad-c910-41ee-b272-af0d3bb6a115", "200": "6d306dd0-8f61-4b5b-97a6-c4fc1787c217", "284": "7fd19ecd-b67d-4213-81b3-407a95d6e237", "376": "12975d4b-8af5-452f-8800-050555150579", "426": "0c3972bd-cdf8-41dc-a1d9-6a4984f172fb", "460": "164c7bff-91c3-4893-80e5-52ebc42618ac", "523": "e1ca0318-8b68-423e-9006-00feedc0588f"}}, "SzufA9jqrPw": {"url": "https://codekiln.github.io/logseq-encode-garden/Person/Andrew%20Huberman/Book/26/Protocols/YouTube/26/09/Mobility%20and%20Flexibility/", "ids": {"28": "5a63aaec-784d-44f1-8c7e-3cb69dbde082", "135": "b3a9c4d8-81a9-42c2-974d-34171680be43", "221": "8bd1efd8-0419-48db-b02b-6f0f6e505035", "315": "b05f1545-c94e-41cd-b1dc-1a8e74fecc9e", "396": "656e84a1-f2f1-44ee-bc54-c513ee6e4653"}}, "UMGpxwhsy_k": {"url": "https://codekiln.github.io/logseq-encode-garden/Person/Andrew%20Huberman/Book/26/Protocols/YouTube/26/05/Jeff%20Cavaliere%20Shows%20Andrew%20Huberman%20the%20Face%20Pull/", "ids": {"0": "d4c681f2-ed5d-4a24-9dbd-480e3421a790", "67": "0d966897-cc51-4956-ac6c-7277c97765d1", "111": "a1d42a8f-e94c-4565-a6c2-54d2cebf5240", "167": "66ed3dc6-2ca3-4f3b-975c-34c23b2d61be", "241": "d4fcd2c4-5789-4255-9367-5c2687e93826", "286": "3ed9e707-b6dc-4045-8a3a-1bb7d3fa6d17", "334": "345a4003-c67f-4e1b-bd49-589caaaa6c19", "398": "4caaba5c-5d17-4f29-9669-12f081f1e856"}}};
const V=(label,base,s)=>{const id=base.split("v=")[1],g=GV[id],b=g&&g.ids[String(s)];
  return {label,url:g?g.url+(b?"#block-"+b:""):yt(base,s),t:ts(s),yt:yt(base,s)}};

const EX = {
  "back-squat":{name:"Back Squat",kind:"strength",compound:true,bar:true,m:{p:["quads","glutes"],s:["hamstrings","lowerback","abs"]},
    setup:"Rack hooks just below shoulder height, safeties below your bottom position. Bar across the upper back, stand it up, short step back.",
    practice:"Brace, whole foot planted, bend hips and knees together. Go as deep as you control, then push the floor away. Knees follow toes.",
    cues:"Heels lift or trunk position changes abruptly: lighten the load or shorten the depth.",
    vids:[V("Huberman · back squat",HV.d2,27),V("Huberman · front and hack squat",HV.d2,67)]},
  "leg-press":{name:"Leg Press",kind:"strength",compound:true,m:{p:["quads","glutes"],s:["hamstrings"]},
    setup:"Seat so back and pelvis stay supported, heels flat on the plate, a comfortable starting knee bend.",
    practice:"Press smoothly, stop short of locking the knees. Lower until just before the pelvis lifts or the low back rounds off the pad.",
    cues:"Check the release and safety stops with a light load first; machines differ.",
    vids:[V("Huberman · other compound leg options",HV.d2,294)],ref:[["ACE seated leg press","https://www.acefitness.org/resources/everyone/exercise-library/154/seated-leg-press/"]]},
  "rdl":{name:"Romanian Deadlift",kind:"strength",compound:true,bar:true,m:{p:["hamstrings","glutes"],s:["lowerback","forearms"]},
    setup:"Stand with the bar or dumbbells in front of the thighs, feet hip width, knees slightly bent, weights close to the legs.",
    practice:"Hips back as the torso tips forward, knees barely bend, spine steady. Stop at hamstring tension, drive the hips forward to stand tall.",
    cues:"The weights need not reach the floor. Rounding the back to reach lower changes the exercise.",
    vids:[V("Huberman · deadlift",HV.d2,378),V("Huberman · other hamstring options",HV.d2,578)],ref:[["ACE Romanian deadlift","https://www.acefitness.org/resources/everyone/exercise-library/317/romanian-deadlift/"]]},
  "trap-bar":{name:"Trap-Bar Deadlift",kind:"strength",compound:true,m:{p:["quads","glutes","hamstrings"],s:["lowerback","traps","forearms"]},
    setup:"Stand in the middle of the hex bar, feet about shoulder width. Bend hips and knees to grip the middle of both handles.",
    practice:"Brace, push the floor away and extend hips and knees together. Lower both sides under control and reset each rep.",
    cues:"Keep the same handle height between sessions. Hips shooting up first or leaning back at the top: lighten it.",
    vids:[V("Huberman · deadlift",HV.d2,378)],ref:[["U.S. Army fitness test deadlift","https://www.army.mil/aft/"]]},
  "seated-row":{name:"Seated Cable Row",kind:"strength",compound:true,m:{p:["lats","traps"],s:["biceps","delts","forearms"]},
    setup:"Sit tall, feet supported, knees soft, arms extended with the cable already under light tension.",
    practice:"Pull the elbows back close to the ribs until the handle reaches the abdomen. Pause, extend slowly. Torso steady.",
    cues:"Rocking back, shrugging, or curling the wrists to finish means the weight is too heavy.",
    vids:[V("Huberman · back overview",HV.d4,335),V("Huberman · rows",HV.d4,463)],ref:[["ACE seated row","https://www.acefitness.org/resources/everyone/exercise-library/48/seated-row/"]]},
  "calf-raise":{name:"Standing Calf Raise",kind:"strength",compound:false,m:{p:["calves"],s:[]},
    setup:"Calf-raise machine, or the balls of the feet on a stable step with light hand support. Knees straight, not forced back.",
    practice:"Lower the heels into a comfortable stretch, pause, rise as high as you can without bouncing.",
    cues:"Single-leg version adds difficulty; a dumbbell adds load. Shorten the range if the Achilles complains.",
    vids:[V("Huberman · calf raise",HV.d2,632),V("Huberman · single-leg calf raise",HV.d2,746)]},
  "bench":{name:"Barbell Bench Press",kind:"strength",compound:true,bar:true,m:{p:["chest"],s:["delts","triceps"]},
    setup:"Set rack safeties or use a spotter. Feet planted, shoulders supported, hands a little wider than shoulders, thumbs around the bar.",
    practice:"Lower slowly toward the chest, wrists stacked over forearms, press up. Hips stay on the bench; no bounce.",
    cues:"No rack or spotter: use the machine chest press or dumbbells instead.",
    vids:[V("Huberman · bench press",HV.d4,7),V("Huberman · dumbbell bench",HV.d4,68)],ref:[["ACE barbell chest press","https://www.acefitness.org/resources/everyone/exercise-library/5/chest-press/"]]},
  "chest-press":{name:"Machine Chest Press",kind:"strength",compound:true,m:{p:["chest"],s:["delts","triceps"]},
    setup:"Seat so the handles sit at or slightly below shoulder height. Feet planted, back on the pad.",
    practice:"Press forward smoothly and straighten without forcing lockout. Return until the upper arms are beside the torso.",
    cues:"Arching off the backrest or elbows far behind the body: reduce the load or the starting depth.",
    vids:[V("Huberman · machine presses",HV.d7,105)],ref:[["Mayo Clinic chest press video","https://www.mayoclinic.org/healthy-lifestyle/fitness/multimedia/chest-press/vid-20084687"]]},
  "pull-up":{name:"Pull-Up",kind:"strength",compound:true,m:{p:["lats"],s:["biceps","traps","forearms"]},
    setup:"Overhand grip on a secure bar, start from a comfortable hang with arms extended.",
    practice:"Drive the elbows down and back to bring the chest toward the bar, lower under control. No swinging or kicking.",
    cues:"Use the assisted machine or a band to keep the full range. Log assistance as a negative load (e.g. -40).",
    vids:[V("Huberman · pull-ups",HV.d4,373)]},
  "lat-pulldown":{name:"Lat Pulldown",kind:"strength",compound:true,m:{p:["lats"],s:["biceps","traps"]},
    setup:"Thighs locked under the pad, arms extended, handle held securely.",
    practice:"Pull the handle to the upper chest, in front of the head, then let the arms extend slowly. Torso mostly upright.",
    cues:"Swinging back to finish means the load is too heavy. Close underhand grip is Huberman's variation.",
    vids:[V("Huberman · pull-downs",HV.d4,416)]},
  "rfess":{name:"Rear-Foot-Elevated Split Squat",kind:"strength",compound:true,m:{p:["quads","glutes"],s:["hamstrings","hipflexors"]},
    setup:"Top of the rear foot on a stable low bench, front foot planted. Start without dumbbells, light hand support if needed.",
    practice:"Bend the front knee and hip to lower, push through the front foot to stand. Front heel down, pelvis square.",
    cues:"Balance or hip position limits you: lower the bench or do a regular split squat.",
    vids:[V("Huberman · rear-leg-elevated split squat",HV.d2,172)]},
  "pallof":{name:"Pallof Press",kind:"strength",compound:false,m:{p:["abs","obliques"],s:["delts"]},
    setup:"Cable or anchored band at chest height, stand side-on to the pull, handle at the chest, feet hip width, knees soft.",
    practice:"Keep chest and hips facing forward and press the hands straight out. Hold two seconds, return slowly. Switch sides.",
    cues:"If the torso turns or leans, use less resistance or keep the hands closer.",
    vids:[V("Huberman · core",HV.d4,709)],ref:[["ACE standing anti-rotation press","https://www.acefitness.org/resources/everyone/exercise-library/332/standing-anti-rotation-press/"]]},
  "ohp":{name:"Overhead Press",kind:"strength",compound:true,bar:true,m:{p:["delts"],s:["triceps","traps","abs"]},
    setup:"Bar at the front of the shoulders or dumbbells at shoulder height. Brace, ribs over pelvis. Seated with back support is an option.",
    practice:"Press overhead, moving the head just enough for the bar to pass. Lower slowly. Forearms stay under the load.",
    cues:"Leaning back or using leg drive: reduce the load.",
    vids:[V("Huberman · barbell press",HV.d7,11),V("Huberman · dumbbell press",HV.d7,52)]},
  "cs-row":{name:"Chest-Supported Row",kind:"strength",compound:true,m:{p:["lats","traps"],s:["delts","biceps"]},
    setup:"Chest pad set so you reach the handles with straight arms while the chest stays supported.",
    practice:"Brace, row the handles toward the ribs, pause, extend slowly. Chest stays on the pad.",
    cues:"With dumbbells, use an incline bench that leaves room for the arms to hang.",
    aka:"Huberman doesn't use this name. His Day 4 video shows a one-arm dumbbell row and says barbell and machine rows also work. This plan picks a chest-supported row because the pad stops the torso from helping.",
    vars:"cs",
    vids:[V("Huberman · dumbbell row",HV.d4,463)],ref:[["ACE seated row with chest pad (machine version)","https://www.acefitness.org/resources/everyone/exercise-library/168/seated-row/"]]},
  "curl":{name:"Biceps Curl",kind:"strength",compound:false,m:{p:["biceps"],s:["forearms"]},
    setup:"Stand or sit with a dumbbell in each hand, arms down, trunk steady.",
    practice:"Bend the elbows, palms turning up, lower slowly. Upper arms mostly still, wrists in line.",
    cues:"Swinging the torso or elbows travelling forward: reduce the load.",
    vids:[V("Huberman · biceps curls",HV.d7,284),V("Huberman · preacher curl machine",HV.d7,376)]},
  "pressdown":{name:"Triceps Pressdown",kind:"strength",compound:false,m:{p:["triceps"],s:[]},
    setup:"Rope or bar on a high pulley. Feet planted, knees soft, elbows beside the torso.",
    practice:"Extend the elbows to press down, bend slowly to return. Upper arms and shoulders stay quiet.",
    cues:"Leaning bodyweight onto the handle, or elbows drifting forward: lighten it.",
    vids:[V("Huberman · triceps isolation",HV.d7,523),V("Huberman · overhead cable extension",HV.d7,460)],ref:[["Mayo Clinic triceps pushdown (PDF p. 12)","https://cancereducation.mayoclinic.org/wp-content/uploads/2019/10/mc2972.pdf#page=12"]]},
  "plank":{name:"Forearm Plank",kind:"hold",compound:false,m:{p:["abs"],s:["obliques","delts","glutes"]},
    setup:"Elbows under shoulders, legs long, toes down. Brace and lift into one line from head to heels; keep breathing.",
    practice:"End the hold when the hips sag or rise or the shoulders shrug.",
    cues:"Add time only while position and breathing stay steady. An incline makes it easier.",
    vids:[V("Huberman · core",HV.d4,709)],ref:[["ACE front plank","https://www.acefitness.org/resources/everyone/exercise-library/32/front-plank/"]]},
  "easy-run":{name:"Easy Run",kind:"cardio",zone:[0.60,0.70],m:{p:["quads","hamstrings","calves"],s:["glutes","hipflexors"]},
    setup:"Comfortable shoes, a route or treadmill. Brisk walk, bike or elliptical can substitute at the same effort.",
    practice:"Steady pace you can just hold a conversation at, nose breathing as the upper limit. No pauses beyond water or a stoplight.",
    cues:"Short of 45 minutes today? Start at 15–20 and add a few minutes each week.",
    vids:[],ref:[["Protocols, Exercise Protocol 3 (Kindle p. 184)","https://read.amazon.com/?asin=B0D3JFXBFW"]]},
  "steady":{name:"Steady-State Cardio",kind:"cardio",zone:[0.75,0.85],m:{p:["quads","glutes"],s:["hamstrings","calves"]},
    setup:"Bike saddle so the knee stays slightly bent at the bottom, or a smooth elliptical stride. Five easy minutes first.",
    practice:"Breathing fairly hard, speech in short phrases, held without fading. Pushing on a hill and backing off is fine.",
    cues:"The last minutes should feel like the first. Gasping or slowing cadence: too hard.",
    vids:[],ref:[["Protocols, Exercise Protocol 3 (Kindle p. 186)","https://read.amazon.com/?asin=B0D3JFXBFW"]]},
  "sprint":{name:"Sprint Interval",kind:"cardio",zone:[0.90,0.95],m:{p:["quads","glutes"],s:["hamstrings","calves"]},
    setup:"Stationary bike, assault bike or rower with a familiar setup. Warm up 5–10 minutes with a few short pickups.",
    practice:"30 seconds hard, 60 seconds easy, repeated. Five minutes easy to finish.",
    cues:"Each hard effort should be repeatable. A fading final round or heavy legs: stop or switch to easy cardio.",
    vids:[],ref:[["Protocols, Exercise Protocol 3 (Kindle p. 187)","https://read.amazon.com/?asin=B0D3JFXBFW"]]},
  "walk":{name:"Walk",kind:"cardio",zone:[0.45,0.60],m:{p:["calves"],s:["quads","hamstrings","glutes"]},
    setup:"Comfortable shoes; route, hallway or treadmill.",
    practice:"Upright, natural arm swing. Five to ten minutes after meals; five minutes per half-hour of sitting. Look around, not at the phone.",
    cues:"Walking should leave you fresher. Build daily steps from your current average toward about 7,000.",
    vids:[],ref:[["Protocols, Exercise Protocol 1 (Kindle p. 140)","https://read.amazon.com/?asin=B0D3JFXBFW"]]},
  "sumo-rot":{name:"Sumo Squat with Rotation",kind:"mobility",m:{p:["hipflexors","obliques"],s:["quads","glutes","traps"]},
    setup:"Feet a few inches wider than shoulders, toes slightly out, squat as deep as you can. Elbows inside the knees, palms together, push out gently.",
    practice:"Raise one arm and point at the ceiling, eyes following the finger. Hold 3–10 s, breathe, reset, other side. Three per side.",
    cues:"Can't point straight up yet: point and look at a lower angle and progress over weeks.",
    vids:[V("Huberman · sumo squat with a twist",HV.mob,28)]},
  "hip-flexor":{name:"Hip-Flexor Stretch",kind:"mobility",m:{p:["hipflexors"],s:["quads"]},
    setup:"Standing lunge or half-kneeling, rear leg behind you, pelvis facing forward.",
    practice:"Nudge the front foot out until the back knee sits behind the glutes. Ease in for 10–30 s, exhaling. Reaching overhead adds to it.",
    cues:"Don't make the stretch by arching the lower back.",
    vids:[V("Huberman · knee behind the glutes",HV.mob,135)]},
  "tabletop":{name:"Reverse Tabletop",kind:"mobility",m:{p:["delts","chest"],s:["glutes","triceps","forearms"]},
    setup:"Sit, knees bent, feet flat, hands a few inches beside the hips, fingers pointing out.",
    practice:"Push the hips up until thighs and torso are level and knees are at 90°. Work toward a 10 s hold.",
    cues:"Next step, once 10 s is easy: hands behind you, fingers back, scoot the glutes forward for shoulder extension. Go slowly over months.",
    vids:[V("Huberman · reverse tabletop",HV.mob,221)]},
  "founder":{name:"Founder Pose",kind:"mobility",m:{p:["hamstrings","lowerback"],s:["glutes","traps","delts"]},
    setup:"Feet a bit wider than shoulders, toes slightly out. Stand tall, heels pressed down, head lifted.",
    practice:"Hinge so the hips go back and knees bend slightly. Chest up, thumbs turned out, raise the arms. Hips back a little more; hold 5 s, stand.",
    cues:"Keep the arms lower if raising them arches the back.",
    vids:[V("Huberman · Founder pose",HV.mob,315)]},
  "incline-bench":{name:"Incline Bench Press",kind:"strength",compound:true,bar:true,rng:[6,10],m:{p:["chest"],s:["delts","triceps"]},
    setup:"Set the bench to a 30–45° incline in a rack or incline station, with safeties or a spotter. Feet planted, shoulder blades on the pad.",
    practice:"Lower the bar to the upper chest under control, then press up and slightly back. Keep the same angle across a session's work sets so they compare.",
    cues:"A steeper angle shifts work toward the shoulders. Log the angle in the note.",
    vids:[V("Huberman · incline bench press",HV.d4,125)]},
  "sa-pulldown":{name:"Straight-Arm Cable Pulldown",kind:"strength",compound:false,rng:[10,15],m:{p:["lats"],s:["triceps","abs"]},
    setup:"Stand facing a high cable with a straight bar or rope, arms extended in front at about eye height, hinged slightly at the hips.",
    practice:"Keeping the elbows nearly straight, sweep the handle down to the thighs, then let it rise slowly. Only the shoulder moves.",
    cues:"Bending the elbows turns it into a pressdown. It trains the lats without loading the lower back the way a bent-over row can.",
    vids:[]},
  "back-ext":{name:"Back Extension",kind:"strength",compound:false,rng:[8,25],m:{p:["lowerback"],s:["glutes","hamstrings"]},
    setup:"On a 45° back-extension bench, pad just below the hip crease, heels secured. Hold a light weight at the chest or arms extended to make it harder.",
    practice:"Lower the torso by bending at the hips, then rise until the body is in a straight line. Controlled, no swinging.",
    cues:"Huberman suggests 8–25 controlled reps. Stop before the line of the body passes straight.",
    vids:[V("Huberman · back hyperextensions",HV.d4,593)]},
  "face-pull":{name:"Face Pull",kind:"strength",compound:false,m:{p:["delts","traps"],s:[]},
    setup:"Two ropes on a cable at about head height.",practice:"Pull toward the face, elbows high, rotate the hands back.",cues:"Optional on shoulder day.",
    vids:[V("Jeff Cavaliere shows the face pull",HV.face,111)]}
};

/* plain-language description [what it is, what it looks like] */
const DESC={
  "back-squat":["A squat with a barbell resting across your upper back. You sit down and back as if into a chair, then stand up.","Bar on the shoulders behind the neck; hips and knees bend together until the thighs are about level, then you stand."],
  "leg-press":["A seated machine where you push a weighted platform away with your feet. The seat supports your back, so balance isn't a factor.","You lie back in the seat with feet flat on a large plate and straighten your legs against it."],
  "rdl":["A hip hinge: you lower a barbell or dumbbells down the front of your legs by pushing your hips back, then stand up. It works the back of the thighs and the glutes.","Legs nearly straight, back flat, torso tipping forward until the weight is around the knees or shins."],
  "trap-bar":["A deadlift with a hexagonal bar you stand inside, so the weight sits at your sides instead of in front.","Standing in the middle of the six-sided bar, squatting down to the side handles, then standing up tall."],
  "seated-row":["Sitting at a cable machine and pulling a handle toward your belly, squeezing the shoulder blades together.","Seated upright, feet braced on a platform, arms pulling back along the sides of the body."],
  "calf-raise":["Rising up onto the balls of your feet and lowering back down, to strengthen the calves.","Heels lifting off a step or machine platform and dropping below it in a slow stretch."],
  "bench":["Lying on a flat bench and pressing a barbell up from your chest.","On your back on the bench, bar lowered to mid-chest, then pushed up until the arms are straight."],
  "chest-press":["The bench press done on a machine: you sit upright and push two handles forward. The machine guides the path, so no spotter is needed.","Seated with your back on the pad, handles at chest height, arms pressing straight forward."],
  "pull-up":["Hanging from a bar and pulling yourself up until your chest nears it. An assisted machine or a band can take part of your bodyweight.","Hands overhead on a bar, body rising toward it with elbows driving down to the sides."],
  "lat-pulldown":["A seated machine version of the pull-up: you pull a bar down from overhead to your upper chest.","Thighs under a pad, arms reaching up to a wide bar, pulling it down in front of the face."],
  "rfess":["A one-leg squat where your back foot rests on a bench behind you. Most of the work goes to the front leg.","Split stance with the rear foot's laces on a bench; the back knee drops toward the floor while the front leg bends."],
  "pallof":["Standing side-on to a cable and pressing the handle straight out from your chest while you keep your body from twisting toward the cable. It trains the core to resist rotation.","Sideways to the machine, both hands on one handle, arms pushing straight out in front and back in."],
  "ohp":["Pressing a barbell or dumbbells from your shoulders up overhead.","Weights at shoulder height, then pushed up until the arms are straight above the head."],
  "cs-row":["A row is any pull where the hands travel toward the ribs. In a chest-supported row, your chest leans on a pad while you pull, so your legs and lower back can't swing the weight. It can be done two ways; swipe through the cards below. Pick whichever your gym has.","Depends on the version: see the variation cards."],
  "curl":["Bending the elbows to lift dumbbells from your thighs toward your shoulders.","Upper arms still at your sides, forearms swinging up with palms facing you."],
  "pressdown":["Standing at a high cable and pushing a rope or bar down by straightening your elbows. It works the back of the upper arm.","Elbows pinned at your sides, hands moving from chest height down to the thighs."],
  "plank":["Holding your body straight like a board, propped on your forearms and toes.","A straight line from head to heels, forearms flat on the floor under the shoulders."],
  "easy-run":["A long, relaxed run at a pace where you could still talk in sentences.","Steady jogging, breathing through the nose, no pauses."],
  "steady":["Continuous moderate cardio on a bike or elliptical: harder than easy, but held steady for the whole time.","Seated on an exercise bike at a steady cadence, breathing hard enough that talk comes in short phrases."],
  "sprint":["Short all-out efforts on a bike or rower with easy pedalling or rowing between them.","30 seconds of maximum effort, then 60 seconds easy, repeated."],
  "walk":["Ordinary walking, easy to brisk, spread through the day.","A walk outdoors or on a treadmill, head up and looking around."],
  "sumo-rot":["A deep wide-legged squat held at the bottom while you twist your upper body and reach one arm to the ceiling.","Squatting low with elbows pressing the knees apart, one arm pointing straight up and eyes following it."],
  "hip-flexor":["A lunge-position stretch for the front of the hip of the back leg.","Half-kneeling or in a long lunge, back knee behind the hips, torso upright."],
  "tabletop":["Lifting your hips from sitting so your body forms a flat table, face-up, supported on hands and feet. It opens the shoulders and chest.","Face-up, hands and feet on the floor, hips raised until thighs and torso are level and knees are at right angles."],
  "founder":["A standing half-squat with a long spine and the arms raised back, taught by Eric Goodman. It works the back of the body.","Hips pushed back, knees slightly bent, chest lifted, arms raised with thumbs turned out."],
  "incline-bench":["A bench press on a bench tilted up 30–45°, which shifts more work to the upper chest and front shoulders.","Lying back on an inclined bench, bar lowered to the upper chest, pressed up over the shoulders."],
  "sa-pulldown":["Pulling a high cable down to your thighs with straight arms. It works the lats with only the shoulder joint moving.","Standing at a high pulley, arms straight out in front, sweeping down in an arc to the thighs."],
  "back-ext":["Bending forward at the hips over a pad and rising back up, to strengthen the lower back, glutes and hamstrings.","Face-down on an angled bench, hips on the pad, torso lowering toward the floor and rising to a straight line."],
  "face-pull":["Pulling a rope attachment toward your face with elbows high, for the rear shoulders and upper back.","Standing at a cable at head height, hands pulling the rope apart beside the ears."]
};

/* variation cards: [title, how, svg]. Figures: body = --fg, equipment = --muted, pulling arm = --accent, faint = start position. */
const FIG=(inner,label)=>`<svg viewBox="0 0 200 140" role="img" aria-label="${label}"><g fill="none" stroke-linecap="round" stroke-linejoin="round">${inner}</g>
  <defs><marker id="ar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="var(--accent)"/></marker></defs></svg>`;
const EQ='stroke="var(--muted)" stroke-width="4"', BD='stroke="var(--fg)" stroke-width="4"', AR='stroke="var(--accent)" stroke-width="4"', ST='stroke="var(--accent)" stroke-width="3" stroke-dasharray="4 4" opacity=".55"', ARROW='stroke="var(--accent)" stroke-width="2" marker-end="url(#ar)"';
const VARS={
  cs:[
    ["1 · Row machine with a chest pad",
     "Sit facing the machine with your chest against the upright pad and your feet on the floor or foot plate. Reach forward to the handles with straight arms (dashed), then pull your elbows back past your ribs (solid). The chest never leaves the pad.",
     FIG(`<line x1="10" y1="132" x2="190" y2="132" stroke="var(--line)" stroke-width="2"/>
      <line x1="62" y1="96" x2="96" y2="96" ${EQ}/><line x1="78" y1="96" x2="78" y2="132" ${EQ}/>
      <line x1="114" y1="46" x2="114" y2="94" stroke="var(--muted)" stroke-width="8"/><line x1="114" y1="94" x2="114" y2="132" ${EQ}/>
      <line x1="176" y1="20" x2="160" y2="62" ${EQ}/><line x1="176" y1="20" x2="176" y2="132" ${EQ}/>
      <circle cx="104" cy="34" r="8" ${BD}/><line x1="84" y1="92" x2="104" y2="46" ${BD}/>
      <line x1="84" y1="92" x2="122" y2="100" ${BD}/><line x1="122" y1="100" x2="122" y2="130" ${BD}/>
      <polyline points="104,52 132,58 158,62" ${ST}/>
      <polyline points="104,52 86,66 112,64" ${AR}/><circle cx="114" cy="64" r="4" fill="var(--accent)" stroke="none"/>
      <line x1="150" y1="74" x2="124" y2="74" ${ARROW}/>`,"Seated on a row machine, chest on an upright pad, pulling handles back")],
    ["2 · Face-down on an incline bench",
     "Set an adjustable bench's backrest to a low incline, about 30–45°. Lie on it face down, chest and belly on the pad, with your head just past the top. A dumbbell hangs straight down from each hand (dashed); row them up toward your ribs (solid), then lower.",
     FIG(`<line x1="10" y1="132" x2="190" y2="132" stroke="var(--line)" stroke-width="2"/>
      <line x1="52" y1="112" x2="138" y2="62" stroke="var(--muted)" stroke-width="7"/><line x1="70" y1="102" x2="70" y2="132" ${EQ}/><line x1="122" y1="72" x2="122" y2="132" ${EQ}/>
      <circle cx="152" cy="38" r="8" ${BD}/><line x1="66" y1="92" x2="140" y2="48" ${BD}/>
      <polyline points="66,92 50,112 34,130" ${BD}/>
      <line x1="136" y1="52" x2="138" y2="112" ${ST}/><rect x="130" y="112" width="16" height="7" rx="2" fill="var(--accent)" opacity=".4" stroke="none"/>
      <polyline points="136,52 114,44 120,74" ${AR}/><rect x="112" y="74" width="16" height="7" rx="2" fill="var(--accent)" stroke="none"/>
      <line x1="158" y1="110" x2="158" y2="82" ${ARROW}/>`,"Lying face down on an inclined bench, rowing dumbbells up from a hang")],
    ["Huberman's version · one-arm dumbbell row",
     "What the Day 4 video shows. One knee and the same-side hand rest on a flat bench; the other foot is on the floor. Brace, row the dumbbell toward your ribs, and set it down rather than dropping it. The bench supports you through the hand and knee, not the chest, so keep the torso still yourself.",
     FIG(`<line x1="10" y1="132" x2="190" y2="132" stroke="var(--line)" stroke-width="2"/>
      <line x1="40" y1="94" x2="114" y2="94" stroke="var(--muted)" stroke-width="7"/><line x1="48" y1="94" x2="48" y2="132" ${EQ}/><line x1="106" y1="94" x2="106" y2="132" ${EQ}/>
      <circle cx="148" cy="52" r="8" ${BD}/><line x1="72" y1="66" x2="136" y2="58" ${BD}/>
      <polyline points="72,66 66,89 52,89" ${BD}/><polyline points="72,66 56,100 44,130" ${BD}/>
      <line x1="122" y1="60" x2="110" y2="89" ${BD}/>
      <line x1="132" y1="59" x2="134" y2="116" ${ST}/><rect x="126" y="116" width="16" height="7" rx="2" fill="var(--accent)" opacity=".4" stroke="none"/>
      <polyline points="132,59 112,48 118,78" ${AR}/><rect x="110" y="78" width="16" height="7" rx="2" fill="var(--accent)" stroke="none"/>
      <line x1="160" y1="118" x2="160" y2="90" ${ARROW}/>`,"Kneeling on a flat bench with one knee and hand, rowing a dumbbell with the other arm")]
  ]
};
function varsHTML(e){
  const v=VARS[e.vars];if(!v)return "";
  return `<div class="varwrap"><div class="varhead"><span class="lbl">Variations · swipe or use the arrows</span><span><button type="button" class="btn" data-vscroll="-1" aria-label="Previous variation">‹</button> <button type="button" class="btn" data-vscroll="1" aria-label="Next variation">›</button></span></div>
   <div class="vars" role="region" aria-label="${esc(e.name)} variations" tabindex="0">${v.map(([t,h,svg])=>`<figure class="var">${svg}<figcaption><b>${esc(t)}</b><span>${esc(h)}</span></figcaption></figure>`).join("")}</div>
   <div class="legendfig"><span style="--c:var(--accent);opacity:.55">start</span><span style="--c:var(--accent)">finish</span><span style="--c:var(--muted)">equipment</span></div></div>`;
}

/* ---------- the plan (Saturday = Day 1) ---------- */
const MOB_BLOCKS=[
  {ex:"sumo-rot",sets:3,unit:"sec",min:3,max:10,perSide:true,note:"Shallower squat or smaller turn as needed."},
  {ex:"hip-flexor",sets:3,unit:"sec",min:10,max:30,perSide:true,note:"Supported standing or half-kneeling lunge."},
  {ex:"tabletop",sets:3,unit:"sec",min:5,max:10,note:"Start lower if shoulders or wrists need it."},
  {ex:"founder",sets:2,unit:"sec",min:5,max:5,note:"A few calm breaths per rep; stand to reset."}
];
const PLAN={
  D1:{wd:"Saturday",title:"Long Run",kind:"cardio",time:"45–60 min",
      intro:"Easy, steady and conversational. Keep enough in the legs for Sunday.",
      blocks:[{ex:"easy-run",sets:1,unit:"min",min:45,max:60,note:"Book range 45–75 min at 60–70% of max heart rate."}]},
  D2:{wd:"Sunday",title:"Lower Body",kind:"lift",time:"50–70 min",mob:true,
      intro:"Five minutes of brisk walking or easy cycling, then ramp into the squat.",
      blocks:[
        {ex:"back-squat",alt:["leg-press"],sets:3,unit:"reps",min:6,max:8,rest:[180,300]},
        {ex:"rdl",alt:["trap-bar"],sets:2,unit:"reps",min:6,max:10,rest:[180,300],note:"Choose one hinge for the session."},
        {ex:"seated-row",sets:2,unit:"reps",min:8,max:10,rest:[90,180]},
        {ex:"calf-raise",sets:2,unit:"reps",min:8,max:15,rest:[90,180]}]},
  D3:{wd:"Monday",title:"Recovery",kind:"rest",time:"walks",
      intro:"Walk during the day. Optional gentle mobility; stay fresh for Tuesday.",
      blocks:[{ex:"walk",sets:1,unit:"min",min:15,max:40,note:"5–10 min after each meal plus breaks from sitting."}]},
  D4:{wd:"Tuesday",title:"Torso + Moderate Cardio",kind:"lift",time:"75–95 min",mob:true,
      intro:"Lift first, then the bike or elliptical. Splitting them across the day also works.",
      blocks:[
        {ex:"bench",alt:["chest-press"],sets:3,unit:"reps",min:6,max:8,rest:[180,300],note:"Set the rack safeties or use a spotter."},
        {ex:"pull-up",alt:["lat-pulldown"],sets:3,unit:"reps",min:6,max:10,rest:[180,300],note:"Pick assistance or machine load that keeps reps controlled."},
        {ex:"rfess",sets:2,unit:"reps",min:8,max:8,perSide:true,rest:[90,180],note:"Bodyweight or light dumbbells with stable support."},
        {ex:"pallof",sets:2,unit:"reps",min:8,max:12,perSide:true,rest:[60,120],note:"Pause briefly at full reach."},
        {ex:"steady",sets:1,unit:"min",min:20,max:25,note:"Build toward the book's 25–30 min at 75–85% of max HR."}]},
  D5:{wd:"Wednesday",title:"Recovery",kind:"rest",time:"walks",
      intro:"Walk and recover. No scheduled workout.",
      blocks:[{ex:"walk",sets:1,unit:"min",min:15,max:40}]},
  D6:{wd:"Thursday",title:"Intervals",kind:"cardio",time:"~25 min",
      intro:"Warm-up, recoveries and cool-down count as part of the session.",
      blocks:[{ex:"sprint",sets:1,unit:"rounds",min:6,max:12,note:"Start below all-out and at 6 rounds; add rounds, up to 12, only while recovery stays good."}]},
  D7:{wd:"Friday",title:"Shoulders + Arms",kind:"lift",time:"55–75 min",mob:true,
      intro:"Trim the optional calf work first when time is short.",
      blocks:[
        {ex:"ohp",sets:3,unit:"reps",min:6,max:8,rest:[180,300]},
        {ex:"chest-press",sets:2,unit:"reps",min:8,max:10,rest:[120,180]},
        {ex:"cs-row",sets:2,unit:"reps",min:8,max:10,rest:[120,180]},
        {ex:"curl",sets:2,unit:"reps",min:10,max:15,rest:[90,180]},
        {ex:"pressdown",sets:2,unit:"reps",min:10,max:15,rest:[90,180]},
        {ex:"plank",sets:2,unit:"sec",min:20,max:40,note:"End each hold while the torso is still stable."},
        {ex:"calf-raise",sets:2,unit:"reps",min:8,max:15,rest:[90,180],optional:true,note:"Only if Sunday's legs have recovered."}]}
};
const DAY_ORDER=["D1","D2","D3","D4","D5","D6","D7"];
const KIND_COLOR={lift:"var(--accent)",cardio:"var(--blue)",rest:"var(--green)"};

/* Photos: Wikimedia Commons, stored in img/ */
const PHOTOS = {"back-squat": [{"url": "img/back-squat.png", "alt": "Squats", "cap": "Everkinetic, adapted by Urutseg, CC BY-SA 3.0", "src": "https://commons.wikimedia.org/wiki/File:Squats.svg"}], "leg-press": [{"url": "img/leg-press.jpg", "alt": "Young man using a leg press machine at the gym", "cap": "Nenad Stojkovic, CC BY 2.0", "src": "https://commons.wikimedia.org/wiki/File:Young_man_using_a_leg_press_machine_at_the_gym.jpg"}], "rdl": [{"url": "img/rdl-1.png", "alt": "Romanian-deadlift-1", "cap": "Start · Everkinetic, CC BY-SA 3.0", "src": "https://commons.wikimedia.org/wiki/File:Romanian-deadlift-1.png"}, {"url": "img/rdl-2.png", "alt": "Romanian-deadlift-2", "cap": "Finish · Everkinetic, CC BY-SA 3.0", "src": "https://commons.wikimedia.org/wiki/File:Romanian-deadlift-2.png"}], "trap-bar": [{"url": "img/trap-bar-1.jpg", "alt": "U.S. Army recruiter demonstrates correct way to properly lift deadlift, Gaithersburg, Maryland (2020), 1", "cap": "Start · U.S. Army, Public domain", "src": "https://commons.wikimedia.org/wiki/File:U.S._Army_recruiter_demonstrates_correct_way_to_properly_lift_deadlift,_Gaithersburg,_Maryland_(2020),_1.jpg"}, {"url": "img/trap-bar-2.jpg", "alt": "U.S. Army recruiter demonstrates correct way to properly lift deadlift, Gaithersburg, Maryland (2020), 2", "cap": "Finish · U.S. Army, Public domain", "src": "https://commons.wikimedia.org/wiki/File:U.S._Army_recruiter_demonstrates_correct_way_to_properly_lift_deadlift,_Gaithersburg,_Maryland_(2020),_2.jpg"}], "seated-row": [{"url": "img/seated-row-1.png", "alt": "Seated cable rows 1", "cap": "Start · Everkinetic, CC BY-SA 3.0", "src": "https://commons.wikimedia.org/wiki/File:Seated_cable_rows_1.svg"}, {"url": "img/seated-row-2.png", "alt": "Seated cable rows 2", "cap": "Finish · Everkinetic, CC BY-SA 3.0", "src": "https://commons.wikimedia.org/wiki/File:Seated_cable_rows_2.svg"}], "calf-raise": [{"url": "img/calf-raise-1.png", "alt": "Standing-calf-raises-1", "cap": "Start · CFCF, CC BY-SA 4.0", "src": "https://commons.wikimedia.org/wiki/File:Standing-calf-raises-1.svg"}, {"url": "img/calf-raise-2.png", "alt": "Standing-calf-raises-2", "cap": "Finish · CFCF, CC BY-SA 4.0", "src": "https://commons.wikimedia.org/wiki/File:Standing-calf-raises-2.svg"}], "bench": [{"url": "img/bench-1.png", "alt": "Bench press 1", "cap": "Start · Everkinetic, CC BY-SA 3.0", "src": "https://commons.wikimedia.org/wiki/File:Bench_press_1.svg"}, {"url": "img/bench-2.png", "alt": "Bench press 2", "cap": "Finish · Everkinetic, CC BY-SA 3.0", "src": "https://commons.wikimedia.org/wiki/File:Bench_press_2.svg"}], "chest-press": [{"url": "img/chest-press-1.png", "alt": "Machine bench press 1", "cap": "Start · Everkinetic, CC BY-SA 3.0", "src": "https://commons.wikimedia.org/wiki/File:Machine_bench_press_1.svg"}, {"url": "img/chest-press-2.png", "alt": "Machine bench press 2", "cap": "Finish · Everkinetic, CC BY-SA 3.0", "src": "https://commons.wikimedia.org/wiki/File:Machine_bench_press_2.svg"}], "pull-up": [{"url": "img/pull-up.jpg", "alt": "Pull-ups exercise from back", "cap": "PTPioneer, CC BY 2.0", "src": "https://commons.wikimedia.org/wiki/File:Pull-ups_exercise_from_back.jpg"}], "lat-pulldown": [{"url": "img/lat-pulldown.jpg", "alt": "Girl doing lat pulldown exercise", "cap": "Tyler  Read, CC BY 2.0", "src": "https://commons.wikimedia.org/wiki/File:Girl_doing_lat_pulldown_exercise.jpg"}], "ohp": [{"url": "img/ohp-1.png", "alt": "Dumbbell shoulder press 1", "cap": "Start · Everkinetic, CC BY-SA 3.0", "src": "https://commons.wikimedia.org/wiki/File:Dumbbell_shoulder_press_1.svg"}, {"url": "img/ohp-2.png", "alt": "Dumbbell shoulder press 2", "cap": "Finish · Everkinetic, CC BY-SA 3.0", "src": "https://commons.wikimedia.org/wiki/File:Dumbbell_shoulder_press_2.svg"}], "curl": [{"url": "img/curl-1.png", "alt": "Alternating bicep curl with dumbbell 1", "cap": "Start · Everkinetic, CC BY-SA 3.0", "src": "https://commons.wikimedia.org/wiki/File:Alternating_bicep_curl_with_dumbbell_1.svg"}, {"url": "img/curl-2.png", "alt": "Alternating bicep curl with dumbbell 2", "cap": "Finish · Everkinetic, CC BY-SA 3.0", "src": "https://commons.wikimedia.org/wiki/File:Alternating_bicep_curl_with_dumbbell_2.svg"}], "pressdown": [{"url": "img/pressdown-1.png", "alt": "Triceps pushdown with cable 1", "cap": "Start · Everkinetic, CC BY-SA 3.0", "src": "https://commons.wikimedia.org/wiki/File:Triceps_pushdown_with_cable_1.svg"}, {"url": "img/pressdown-2.png", "alt": "Triceps pushdown with cable 2", "cap": "Finish · Everkinetic, CC BY-SA 3.0", "src": "https://commons.wikimedia.org/wiki/File:Triceps_pushdown_with_cable_2.svg"}], "plank": [{"url": "img/plank.png", "alt": "Plank exercise", "cap": "Pk0001, CC BY-SA 4.0", "src": "https://commons.wikimedia.org/wiki/File:Plank_exercise.svg"}], "easy-run": [{"url": "img/easy-run.jpg", "alt": "Jogger on the street", "cap": "James Moore200, CC BY-SA 4.0", "src": "https://commons.wikimedia.org/wiki/File:Jogger_on_the_street.jpg"}], "steady": [{"url": "img/steady.jpg", "alt": "Magnetic resistance stationary bicycle exercise bike", "cap": "T g7, CC BY-SA 3.0", "src": "https://commons.wikimedia.org/wiki/File:Magnetic_resistance_stationary_bicycle_exercise_bike.JPG"}], "sprint": [{"url": "img/sprint.jpg", "alt": "Concept 2 Indoor Rowers", "cap": "Wikimedia Commons, Public domain", "src": "https://commons.wikimedia.org/wiki/File:Concept_2_Indoor_Rowers.JPG"}], "walk": [{"url": "img/walk.jpg", "alt": "Walking exercise (16818224061)", "cap": "bluesbby from Mountain View, USA, CC BY 2.0", "src": "https://commons.wikimedia.org/wiki/File:Walking_exercise_(16818224061).jpg"}]};

const KLOC={"week": 2529, "duration": 2553, "summary": 2553, "wuramp": 2646, "rest": 2565, "track": 2611, "repscompound": 2829, "breakin": 2034, "walkmeal": 2434, "optic": 2463};
const KWEB="https://read.amazon.com/?asin=B0D3JFXBFW";
/* Kindle app links open the exact location; Kindle for Web opens the book only (it ignores location) */
const KL=k=>KLOC[k]?` <a class="src kin" href="kindle://book?action=open&amp;asin=B0D3JFXBFW&amp;location=${KLOC[k]}" title="Opens the Kindle app at location ${KLOC[k]}">open in Kindle</a>`:` <a class="src kin" href="${KWEB}" target="_blank" rel="noopener" title="Opens the book in Kindle for Web; go to the page from there">open book</a>`;
const S2=(t,k)=>`<span class="src">${t}</span>${KL(k)}`;
const SITE="https://codekiln.github.io/logseq-encode-garden/";
const sitePage=p=>SITE+p.split("/").map(encodeURIComponent).join("/")+"/";
function gardenPage(e){const cat=e.kind==="cardio"?"Cardio":e.kind==="mobility"?"Flexibility":"Strength";return sitePage("Exercise/Body/"+cat+"/"+e.name)}
const PLANPAGE={D1:"D1-Long-Run",D2:"D2-Lower-Body",D3:"D3-Recovery",D4:"D4-Torso",D5:"D5-Recovery",D6:"D6-Intervals",D7:"D7-Shoulders-and-Arms"};


/* exercises logged that day but not in the plan's blocks */
function extraLogged(p,k){
  const planned=new Set(p.blocks.flatMap(b=>[b.ex,...(b.alt||[])]));
  const extra=Object.keys((state.doc&&state.doc.ex)||{}).filter(id=>EX[id]&&!planned.has(id));
  if(!extra.length)return "";
  return `<div class="dayhead"><div><h3>Also logged</h3><p>Exercises done this day that aren't in ${esc(PLAN[k].wd)}'s plan. They count in History like any other.</p></div></div>`+
    extra.map((id,i)=>{const e=EX[id],n=Math.max(2,(state.doc.ex[id].sets||[]).length),r=e.rng||[8,12];
      return sheet({ex:id,sets:n,unit:e.kind==="hold"?"sec":"reps",min:r[0],max:r[1],rest:e.compound?[180,300]:[90,180],note:"Off-plan: logged on this day."},100+i,"X-"+k)}).join("");
}
/* ---------- muscle-group filter (per page, remembered on this device) ---------- */
const MNAME={quads:"Quadriceps",hamstrings:"Hamstrings",glutes:"Glutes",calves:"Calves",chest:"Chest",lats:"Lats",traps:"Upper back",delts:"Shoulders",biceps:"Biceps",triceps:"Triceps",forearms:"Forearms",abs:"Abs",obliques:"Obliques",lowerback:"Lower back",hipflexors:"Hip flexors"};
const MORDER=Object.keys(MNAME);
function pickEx(b,bi,dayKey){const logged=Object.keys((state.doc&&state.doc.ex)||{});
  return state.choice[dayKey+":"+bi]||[b.ex,...(b.alt||[])].find(id=>logged.includes(id))||b.ex}
function musclesHTML(m){
  return m.p.map(k=>`<span class="mg p">${esc(MNAME[k]||k)}</span>`).join("")+(m.s.length?`<span class="mg s">also ${esc(m.s.map(k=>(MNAME[k]||k).toLowerCase()).join(", "))}</span>`:"");
}
let mf={},mfSec=false;
try{const o=JSON.parse(localStorage.getItem("wk.mfilter")||"{}");for(const k in o)mf[k]=new Set(o[k]);mfSec=localStorage.getItem("wk.mfsec")==="1"}catch(e){}
function saveMf(){try{const o={};for(const k in mf)o[k]=[...mf[k]];localStorage.setItem("wk.mfilter",JSON.stringify(o));localStorage.setItem("wk.mfsec",mfSec?"1":"0")}catch(e){}}
const musclesOf=(id)=>{const m=EX[id].m;return mfSec?[...m.p,...m.s]:m.p};
function sessionList(blocks,pageKey){
  const items=blocks.map((b,i)=>({b,i,id:pickEx(b,i,pageKey)}));
  const avail=MORDER.filter(g=>items.some(x=>musclesOf(x.id).includes(g)));
  const sel=new Set([...(mf[pageKey]||[])].filter(g=>avail.includes(g)));
  const shown=sel.size?items.filter(x=>musclesOf(x.id).some(g=>sel.has(g))):items;
  const bar=`<div class="mfilter" role="group" aria-label="Filter exercises by muscle group">
    <span class="lbl">Muscle group</span>
    <button type="button" class="mfb${sel.size?"":" on"}" data-mf="${pageKey}" data-g="" aria-pressed="${!sel.size}">All</button>
    ${avail.map(g=>`<button type="button" class="mfb${sel.has(g)?" on":""}" data-mf="${pageKey}" data-g="${g}" aria-pressed="${sel.has(g)}">${esc(MNAME[g])}</button>`).join("")}
    <label class="mfsec"><input type="checkbox" id="mfsec-${pageKey}" data-mfsec="1" ${mfSec?"checked":""}> include secondary muscles</label>
    <span class="muted mfcount" role="status">${sel.size?`Showing ${shown.length} of ${items.length} exercises`:`${items.length} exercises`}</span></div>`;
  const body=shown.length?shown.map(x=>sheet(x.b,x.i,pageKey)).join(""):`<div class="empty">No exercise here works ${[...sel].map(g=>MNAME[g]).join(" or ")}${mfSec?"":" as a main muscle; try including secondary muscles"}.</div>`;
  return bar+toggleBar(shown.map(x=>pageKey+":"+x.i))+body;
}
document.addEventListener("click",ev=>{const t=ev.target.closest("[data-mf]");if(!t)return;
  const k=t.dataset.mf,g=t.dataset.g,s=mf[k]||(mf[k]=new Set());
  if(!g)s.clear();else s.has(g)?s.delete(g):s.add(g);
  saveMf();render();const n=document.querySelector(`[data-mf="${k}"][data-g="${g}"]`);if(n)n.focus()});
document.addEventListener("change",ev=>{if(ev.target.dataset&&ev.target.dataset.mfsec){mfSec=ev.target.checked;saveMf();render();const n=document.getElementById(ev.target.id);if(n)n.focus()}});
/* ---------- glossary ---------- */
const GLOSS={
  rir:["Reps in reserve (RIR)","How many more clean reps you could have done when you ended the set. RIR 0 means you reached failure. This plan aims for 1–2."],
  failure:["Failure","The rep you cannot complete with good form despite full effort. The book trains to it; this plan stops 1–2 reps before it."],
  tags:["Warm-up sets vs work sets","W sets are light warm-ups that never come near failure and don't count toward progress. Before the day's first lift: W1 about 40% of the work load × 6–10, W2 65% × 4–8, and W3 75% × 2–4 when the work sets are heavy. Before each later lift: one light set. S1, S2… are work sets, the hard ones you log and compare. H1, H2… are timed holds."],
  compound:["Compound exercise","Several joints move together, e.g. a squat (hip and knee) or a bench press (shoulder and elbow). These get warm-up sets and longer rest."],
  isolation:["Isolation exercise","One joint moves, e.g. a curl (elbow) or a calf raise (ankle)."],
  e1rm:["Estimated one-rep max (est. 1RM)","The heaviest single rep you could probably lift, calculated from a set of several reps rather than tested. This page uses the Epley formula: load × (1 + reps ÷ 30)."],
  maxhr:["Maximum heart rate (max HR)","The highest your heart rate reaches at all-out effort. The book estimates it as 220 − age; here that is worked out from your birth month."],
  zones:["Heart-rate zones (Z1–Z5)","Bands of 10 percentage points of max HR: Z1 50–60%, Z2 60–70%, Z3 70–80%, Z4 80–90%, Z5 90–100%. The outlined band is the session's target."],
  hiit:["HIIT","High-intensity interval training: short near-all-out efforts at 90–95% of max HR, alternated with easy recovery."],
  vo2:["VO₂ max","The most oxygen your body can use per minute at maximal effort; a standard measure of cardio fitness."],
  cooper:["Cooper test","Cover as much distance as you can in 12 minutes of steady hard effort, by running, swimming or cycling."],
  nor44:["Norwegian 4×4","Four rounds of 4 minutes hard and 4 minutes easy, after a warm-up."],
  micro:["Microplates","Small plates of about 0.5–1.25 lb (0.25–0.5 kg) that allow jumps smaller than standard plates."],
  overload:["Progressive overload","Adding weight or reps over time so the muscle keeps meeting a larger demand."],
  perside:["Per side","Do the listed reps or seconds on the left, then the same on the right; one set covers both sides."]
};
const term=(k,label)=>`<button type="button" class="term" data-term="${k}" aria-expanded="false" aria-controls="gloss">${label}</button>`;
let glossBtn=null;
function closeGloss(refocus){const g=document.getElementById("gloss");if(!g||g.hidden)return;g.hidden=true;
  if(glossBtn){glossBtn.setAttribute("aria-expanded","false");glossBtn.removeAttribute("aria-describedby");if(refocus&&document.body.contains(glossBtn))glossBtn.focus()}glossBtn=null}
function openGloss(btn){
  const g=document.getElementById("gloss"),[t,d]=GLOSS[btn.dataset.term]||["",""];
  if(glossBtn===btn){closeGloss(false);return}
  closeGloss(false);
  g.innerHTML=`<b>${esc(t)}</b><br>${esc(d)}<br><a href="#term-${btn.dataset.term}">More in Terms</a>`;g.hidden=false;
  const r=btn.getBoundingClientRect(),w=g.offsetWidth,vw=document.documentElement.clientWidth;
  g.style.left=Math.max(16,Math.min(r.left+window.scrollX,vw-w-16+window.scrollX))+"px";
  g.style.top=(r.bottom+window.scrollY+6)+"px";
  btn.setAttribute("aria-expanded","true");btn.setAttribute("aria-describedby","gloss");glossBtn=btn;
}
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeGloss(true)});

/* ---------- helpers ---------- */
const $=s=>document.querySelector(s);
const esc=s=>String(s??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const pad=n=>String(n).padStart(2,"0");
const iso=d=>d.getFullYear()+"-"+pad(d.getMonth()+1)+"-"+pad(d.getDate());
const parseISO=s=>{const [y,m,d]=s.split("-").map(Number);return new Date(y,m-1,d)};
const dayFor=s=>DAY_ORDER[(parseISO(s).getDay()+1)%7]; // Sat→D1
const fmtDate=s=>parseISO(s).toLocaleDateString(undefined,{weekday:"short",month:"short",day:"numeric"});
const weekStart=s=>{const d=parseISO(s);d.setDate(d.getDate()-((d.getDay()+1)%7));return d};
const num=v=>v===""||v==null||isNaN(+v)?null:+v;
const rangeTxt=(a,b)=>a===b?String(a):a+"–"+b;
const restTxt=r=>r?(r[0]<120?r[0]+" s":r[0]/60+" min")+"–"+(r[1]/60)+" min rest":"";

let state={date:iso(new Date()),view:"today",unit:"lb",age:null,sessions:{},doc:null,db:null,ready:false,choice:{},collapsed:new Set()};
try{const v=localStorage.getItem("wk.view");if(v)state.view=v}catch(e){}
try{const c=JSON.parse(localStorage.getItem("wk.collapsed")||"[]");if(Array.isArray(c))state.collapsed=new Set(c)}catch(e){}
function saveCollapsed(){try{localStorage.setItem("wk.collapsed",JSON.stringify([...state.collapsed]))}catch(e){}}
function toggleBar(keys){const all=keys.length&&keys.every(k=>state.collapsed.has(k));
  return `<div class="sessionbar"><button class="btn" data-collapse-all="${all?"expand":"collapse"}" data-keys="${keys.join(",")}">${all?"Expand all":"Collapse all"}</button></div>`}

function inc(){return state.unit==="kg"?2.5:5}
function roundTo(x,step){return Math.round(x/step)*step}
/* next load jump: about 5% of the current load, rounded to the smallest common plate step */
function nextStep(load){const base=state.unit==="kg"?1.25:2.5;return Math.max(base,roundTo(load*0.05,base))}
function e1rm(load,reps){return load&&reps?load*(1+reps/30):0}

function doseTxt(b){
  const per=b.perSide?" per side":"";
  if(b.unit==="reps")return `${b.sets} × ${rangeTxt(b.min,b.max)}${per}`;
  if(b.unit==="sec")return `${b.sets} holds × ${rangeTxt(b.min,b.max)} s${per}`;
  if(b.unit==="min")return `${rangeTxt(b.min,b.max)} min`;
  if(b.unit==="rounds")return `${rangeTxt(b.min,b.max)} rounds · 30 s hard / 60 s easy`;
}

/* last logged performance of an exercise before `date` */
function lastFor(exId,before){
  const dates=Object.keys(state.sessions).filter(d=>d<before).sort().reverse();
  for(const d of dates){const e=state.sessions[d]?.ex?.[exId];
    if(e&&e.sets&&e.sets.some(s=>s&&(num(s.reps)!=null||num(s.sec)!=null||num(s.min)!=null||num(s.rounds)!=null)))return {date:d,entry:e}}
  return null;
}
/* progression verdict from last session */
function verdict(b,exId){
  const last=lastFor(exId,state.date);
  if(!last)return {cls:"",txt:"No history yet: pick a load with 1–2 reps in reserve",load:null,last};
  const sets=(last.entry.sets||[]).filter(s=>s&&(num(s.reps)!=null||num(s.sec)!=null));
  if(b.unit==="sec"){
    const all=sets.every(s=>num(s.sec)>=b.max);
    return all?{cls:"up",txt:"Hit the top of the range: add a few seconds or a harder version",last}:{cls:"hold",txt:"Repeat and add a little time",last};
  }
  if(b.unit!=="reps")return {cls:"",txt:"",last};
  const loads=sets.map(s=>num(s.load)).filter(x=>x!=null);
  const load=loads.length?Math.max(...loads):null;
  const top=sets.length>=b.sets&&sets.every(s=>num(s.reps)>=b.max&&(num(s.rir)==null||num(s.rir)>=1));
  const low=sets.some(s=>num(s.reps)!=null&&num(s.reps)<b.min);
  if(top){
    if(load==null||load<=0)return {cls:"up",txt:`Every set hit ${b.max}: add a little resistance`,load,last};
    const step=nextStep(load), pct=Math.round(step/load*100);
    return pct>10
      ?{cls:"up",txt:`Every set hit ${b.max}. The smallest step (${step} ${state.unit}) is ${pct}% of ${load}: add reps first, or use microplates`,load,last}
      :{cls:"up",txt:`Every set hit ${b.max}: add ${step} ${state.unit} (${pct}% of ${load})`,load:load+step,last};
  }
  if(low&&load==null)return {cls:"down",txt:`A bodyweight set fell below ${b.min}: use a band or the assisted machine to keep every set in ${b.min}–${b.max}`,load:null,last};
  if(low)return {cls:"down",txt:`A set fell below ${b.min}: reduce the load`,load:Math.max(0,load-inc()),last};
  return {cls:"hold",txt:`Keep the load, add reps toward ${b.max}`,load,last};
}
function lastLine(v){
  if(!v.last)return "";
  const s=(v.last.entry.sets||[]).filter(Boolean).map(x=>x.sec!=null&&x.sec!==""?x.sec+"s":x.min!=null&&x.min!==""?x.min+" min":x.rounds!=null&&x.rounds!==""?x.rounds+" rds":(x.load!=null&&x.load!==""?x.load+"×":"")+(x.reps??"")).filter(t=>t&&t!=="×").join(", ");
  return `Last · ${fmtDate(v.last.date)}: ${esc(s)}`;
}

/* plates per side for a barbell load */
/* the barbell is 20 kg (44.1 lb) */
const BAR=()=>state.unit==="kg"?20:44.1, BARNAME=()=>state.unit==="kg"?"20 kg bar":"20 kg (44.1 lb) bar";
function plateList(side){const set=state.unit==="kg"?[25,20,15,10,5,2.5,1.25]:[45,35,25,10,5,2.5],out=[];for(const p of set){while(side>=p-0.2){out.push(p);side-=p}}return out}
/* a barbell load as plates per side, rounded to the smallest plate pair */
function barTxt(load){const step=state.unit==="kg"?1.25:2.5,side=Math.max(0,roundTo((load-BAR())/2,step));
  return side?`${side} ${state.unit} per side (${plateList(side).join(" + ")}), ${Math.round((BAR()+2*side)*10)/10} ${state.unit} total`:`empty bar, ${BAR()} ${state.unit}`}
function plates(load){
  if(load==null)return "";
  const bar=BAR(), set=state.unit==="kg"?[25,20,15,10,5,2.5,1.25]:[45,35,25,10,5,2.5];
  let side=(load-bar)/2; if(side<0)return "";
  const out=[];for(const p of set){while(side>=p-0.2){out.push(p);side-=p}}
  return out.length?`Per side on a ${BARNAME()}: ${out.join(" + ")}`:`Empty ${BARNAME()}`;
}

/* ---------- diagrams ---------- */
const REG=[ // [muscle, cx, cy, rx, ry]
  ["delts",29,40,7,6],["delts",71,40,7,6],["chest",42,48,9,7],["chest",58,48,9,7],["biceps",25,59,4.5,10],["biceps",75,59,4.5,10],
  ["forearms",21.5,92,4.2,13],["forearms",78.5,92,4.2,13],["abs",50,76,7,17],["obliques",37,78,4,12],["obliques",63,78,4,12],
  ["hipflexors",41,101,4.5,5],["hipflexors",59,101,4.5,5],["quads",41.5,126,7,20],["quads",58.5,126,7,20],
  ["traps",150,38,12,6],["delts",129,40,7,6],["delts",171,40,7,6],["lats",139,63,7,15],["lats",161,63,7,15],
  ["triceps",125,59,4.5,10],["triceps",175,59,4.5,10],["forearms",121.5,92,4.2,13],["forearms",178.5,92,4.2,13],
  ["lowerback",150,87,8,9],["glutes",142,105,8,8],["glutes",158,105,8,8],["hamstrings",141.5,132,7,17],["hamstrings",158.5,132,7,17],
  ["calves",142,173,6,14],["calves",158,173,6,14],["calves",42,173,5,13],["calves",58,173,5,13]
];
const LABEL={quads:"quads",hamstrings:"hamstrings",glutes:"glutes",calves:"calves",chest:"chest",lats:"lats",traps:"upper back",delts:"shoulders",biceps:"biceps",triceps:"triceps",forearms:"forearms",abs:"abs",obliques:"obliques",lowerback:"lower back",hipflexors:"hip flexors"};
function silhouette(x){
  return `<g fill="var(--body)"><circle cx="${x}" cy="18" r="11"/><rect x="${x-5}" y="27" width="10" height="8"/>
  <rect x="${x-18}" y="32" width="36" height="72" rx="9"/><rect x="${x-30}" y="35" width="10" height="42" rx="5"/><rect x="${x+20}" y="35" width="10" height="42" rx="5"/>
  <rect x="${x-34}" y="76" width="11" height="34" rx="5"/><rect x="${x+23}" y="76" width="11" height="34" rx="5"/>
  <rect x="${x-16}" y="98" width="15" height="54" rx="6"/><rect x="${x+1}" y="98" width="15" height="54" rx="6"/>
  <rect x="${x-14}" y="150" width="12" height="50" rx="5"/><rect x="${x+2}" y="150" width="12" height="50" rx="5"/></g>`;
}
function muscleMap(m){
  const p=new Set(m.p),s=new Set(m.s);
  const shapes=REG.map(([k,cx,cy,rx,ry])=>{
    const f=p.has(k)?"var(--accent)":s.has(k)?"var(--accent-soft)":"none";
    return f==="none"?"":`<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${f}"/>`}).join("");
  const names=[...m.p].map(k=>LABEL[k]).join(", "), sec=[...m.s].map(k=>LABEL[k]).join(", ");
  return `<svg viewBox="0 0 200 222" role="img" aria-label="Muscles worked: ${esc(names)}${sec?"; also "+esc(sec):""}">
    ${silhouette(50)}${silhouette(150)}${shapes}
    <text x="50" y="216" text-anchor="middle" font-size="9" fill="var(--muted)" font-family="IBM Plex Mono,monospace">front</text>
    <text x="150" y="216" text-anchor="middle" font-size="9" fill="var(--muted)" font-family="IBM Plex Mono,monospace">back</text></svg>
    <div style="font-size:.78rem;margin-top:4px"><span style="color:var(--accent);font-weight:600">${esc(names)}</span>${sec?` <span class="muted">· also ${esc(sec)}</span>`:""}</div>`;
}
/* warm-up ramp + work sets, drawn to scale as % of work load */
/* warm-up sets: the book's 2–3-set ramp before the day's first lift (3 when work sets are heavy, ≤8 reps);
   one light set before each later lift, this page's reading of the book's 1–3-per-exercise range */
function warmups(b,bi,dayKey){
  if(b.unit!=="reps"||!PLAN[dayKey])return [];
  const first=PLAN[dayKey].blocks.findIndex(x=>x.unit==="reps")===bi;
  if(first)return b.max<=8?[[40,"6–10"],[65,"4–8"],[75,"2–4"]]:[[40,"6–10"],[65,"4–8"]];
  return [[40,"6–10"]];
}
function rampSVG(b,target,wu){
  const rows=[];
  (wu||[]).forEach((w,i)=>rows.push(["W"+(i+1),w[0],w[1]]));
  for(let i=1;i<=b.sets;i++)rows.push(["S"+i,100,rangeTxt(b.min,b.max)]);
  const W=320,L=34,R=118,h=18,gap=6,H=rows.length*(h+gap)+18;
  const sx=pct=>L+(W-L-R)*pct/100;
  const bars=rows.map(([t,pct,reps],i)=>{
    const y=i*(h+gap);const wu=t[0]==="W";
    const load=target!=null?roundTo(target*pct/100,inc()):null;
    return `<text x="0" y="${y+13}" font-size="11" font-family="IBM Plex Mono,monospace" fill="${wu?"var(--yellow)":"var(--accent)"}">${t}</text>
    <rect x="${L}" y="${y}" width="${sx(pct)-L}" height="${h}" rx="3" fill="${wu?"var(--yellow-soft)":"var(--accent)"}"/>
    <text x="${sx(pct)+6}" y="${y+13}" font-size="11" font-family="IBM Plex Mono,monospace" fill="var(--fg)">${pct}% × ${reps}${load!=null?" · "+load:""}</text>`}).join("");
  const y0=rows.length*(h+gap)+2;
  const ticks=[0,50,100].map(p=>`<line x1="${sx(p)}" x2="${sx(p)}" y1="${y0}" y2="${y0+4}" stroke="var(--muted)"/><text x="${sx(p)}" y="${y0+14}" font-size="9" text-anchor="middle" fill="var(--muted)" font-family="IBM Plex Mono,monospace">${p}%</text>`).join("");
  return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Warm-up ramp and work sets">${bars}<line x1="${L}" x2="${sx(100)}" y1="${y0}" y2="${y0}" stroke="var(--line)"/>${ticks}</svg>`;
}
function zoneSVG(ex){
  const z=EX[ex].zone, age=state.age, max=age?220-age:null;
  const W=320,H=74,L=8,R=8,sx=p=>L+(W-L-R)*(p-0.4)/0.6;
  const zones=[[0.5,0.6,"Z1"],[0.6,0.7,"Z2"],[0.7,0.8,"Z3"],[0.8,0.9,"Z4"],[0.9,1.0,"Z5"]];
  const bands=zones.map(([a,b,n])=>`<rect x="${sx(a)}" y="14" width="${sx(b)-sx(a)}" height="16" fill="var(--blue-soft)" stroke="var(--surface)"/><text x="${(sx(a)+sx(b))/2}" y="26" font-size="9" text-anchor="middle" fill="var(--muted)" font-family="IBM Plex Mono,monospace">${n}</text>`).join("");
  const tgt=`<rect x="${sx(z[0])}" y="10" width="${sx(z[1])-sx(z[0])}" height="24" rx="3" fill="none" stroke="var(--blue)" stroke-width="2.5"/>`;
  const ticks=[0.5,0.6,0.7,0.8,0.9,1.0].map(p=>`<text x="${sx(p)}" y="48" font-size="9" text-anchor="middle" fill="var(--muted)" font-family="IBM Plex Mono,monospace">${Math.round(p*100)}%</text>`).join("");
  const bpm=max?`<text x="${W/2}" y="66" font-size="11" text-anchor="middle" fill="var(--blue)" font-family="IBM Plex Mono,monospace">target ${Math.round(max*z[0])}–${Math.round(max*z[1])} bpm (max ≈ 220 − ${age} = ${max})</text>`:`<text x="${W/2}" y="66" font-size="10" text-anchor="middle" fill="var(--muted)" font-family="IBM Plex Sans,sans-serif">add your birth month under Born for bpm targets</text>`;
  return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Target heart-rate band ${z[0]*100} to ${z[1]*100} percent of max">${bands}${tgt}${ticks}${bpm}</svg>`;
}
function intervalSVG(rounds){
  const segs=[["warm",420,"var(--blue-soft)"]];for(let i=0;i<rounds;i++){segs.push(["hard",30,"var(--blue)"],["easy",60,"var(--blue-soft)"])}segs.push(["cool",300,"var(--blue-soft)"]);
  const total=segs.reduce((a,s)=>a+s[1],0),W=320,sx=t=>t/total*W;let t=0;
  const r=segs.map(([n,d,c])=>{const x=sx(t);t+=d;const hgt=n==="hard"?30:n==="easy"?12:16;return `<rect x="${x}" y="${34-hgt}" width="${Math.max(sx(d)-0.6,0.8)}" height="${hgt}" fill="${c}"/>`}).join("");
  return `<svg viewBox="0 0 ${W} 58" role="img" aria-label="Interval timeline, ${rounds} rounds"><line x1="0" x2="${W}" y1="34" y2="34" stroke="var(--line)"/>${r}
   <text x="0" y="50" font-size="9" fill="var(--muted)" font-family="IBM Plex Mono,monospace">7 min warm-up</text><text x="${W}" y="50" font-size="9" text-anchor="end" fill="var(--muted)" font-family="IBM Plex Mono,monospace">5 min easy · ≈${Math.round(total/60)} min</text></svg>`;
}
function holdSVG(b){
  const W=320,n=b.sets,w=(W-(n-1)*10)/n,maxS=Math.max(b.max,10);
  const r=[...Array(n)].map((_,i)=>{const x=i*(w+10),hmin=36*b.min/maxS,hmax=36*b.max/maxS;
    return `<rect x="${x}" y="${40-hmax}" width="${w}" height="${hmax}" rx="3" fill="var(--green-soft)"/><rect x="${x}" y="${40-hmin}" width="${w}" height="${hmin}" rx="3" fill="var(--green)"/><text x="${x+w/2}" y="54" text-anchor="middle" font-size="9" fill="var(--muted)" font-family="IBM Plex Mono,monospace">hold ${i+1}${b.perSide?" ×2":""}</text>`}).join("");
  return `<svg viewBox="0 0 ${W} 58" role="img" aria-label="${n} holds of ${rangeTxt(b.min,b.max)} seconds">${r}</svg>`;
}

/* ---------- rendering ---------- */
function photosHTML(id){
  const ph=PHOTOS[id], look=DESC[id]?.[1];
  const cap=look?`<p class="look"><span class="lbl">What it looks like</span><br>${esc(look)}</p>`:"";
  if(!ph||!ph.length)return `<div class="noimg">No free photo found for this one; the video link below shows the movement.</div>${cap}`;
  return `<div class="photos ${ph.length===1?"one":""}">${ph.map(p=>`<figure><img src="${esc(p.url)}" alt="${esc(p.alt)}" loading="lazy"><figcaption><a href="${esc(p.src)}" target="_blank" rel="noopener" style="color:inherit">${esc(p.cap)}</a></figcaption></figure>`).join("")}</div>${cap}`;
}
function videosHTML(e){
  const v=(e.vids||[]).map(x=>`<a class="vid" href="${esc(x.url)}" target="_blank" rel="noopener"><span class="play" aria-hidden="true"></span><span>${esc(x.label)}</span><span class="t">${x.t}</span></a>`).join("");
  const gp=gardenPage(e);
  const gl=gp?`<a class="vid" href="${esc(gp)}" target="_blank" rel="noopener"><span class="play" aria-hidden="true" style="background:var(--green)"></span><span>Garden notes · ${esc(e.name)}</span></a>`:"";
  const r=gl+(e.ref||[]).map(([l,u])=>`<a class="vid" href="${esc(u)}" target="_blank" rel="noopener"><span class="play" aria-hidden="true" style="background:var(--muted)"></span><span>${esc(l)}</span></a>`).join("");
  return v||r?`<div class="vids">${v?`<div class="lbl">Demos · open on the garden site, then tap the timestamp</div>`:""}${v}${r}</div>`:"";
}
function entryFor(exKey){const d=state.doc||{};return (d.ex&&d.ex[exKey])||null}

function sheet(b,bi,dayKey){
  const choiceKey=dayKey+":"+bi;
  const logged=Object.keys((state.doc&&state.doc.ex)||{});
  let exId=pickEx(b,bi,dayKey);
  const e=EX[exId], kind=e.kind;
  const v=verdict(b,exId);
  const entry=entryFor(exId)||{sets:[]};
  const cls=kind==="cardio"?"cardio":kind==="mobility"?"mob":"";
  const altSel=b.alt?`<select class="alt" id="alt-${dayKey}-${bi}" data-ck="${choiceKey}" aria-label="Exercise choice">${[b.ex,...b.alt].map(id=>`<option value="${id}" ${id===exId?"selected":""}>${esc(EX[id].name)}</option>`).join("")}</select>`:"";

  /* prescription diagram */
  let rx="";
  if(b.unit==="reps"){
    const typed=num(entry.sets?.[0]?.load);
    const target=typed??v.load;
    const wu=warmups(b,bi,dayKey);
    rx=`<div><div class="lbl">${wu.length} ${term("tags","warm-up set"+(wu.length===1?"":"s"))} (light, never near failure) + ${b.sets} work sets${target!=null?` · work load ${target} ${state.unit}`:""}</div>${rampSVG(b,target,wu)}
        <div class="plates">${wu.length>1?"First lift of the day: the book's warm-up ramp.":"Your muscles are already warm from the first lift: one light feeler set is enough."} Only the work sets count toward progress.</div>
        ${e.bar&&target!=null?`<div class="plates">${plates(target)}</div>`:""}</div>`;
  } else if(b.unit==="sec"){rx=`<div><div class="lbl">Holds (dark = minimum, light = goal)</div>${holdSVG(b)}</div>`}
  else if(b.unit==="rounds"){const r=num(entry.sets?.[0]?.rounds)??b.min;rx=`<div><div class="lbl">Session shape</div>${intervalSVG(r)}</div><div><div class="lbl">${term("zones","Heart-rate zone")} in the hard efforts · ${term("maxhr","max HR")}</div>${zoneSVG(exId)}</div>`}
  else if(b.unit==="min"){rx=`<div><div class="lbl">${term("zones","Heart-rate zone")} target · ${term("maxhr","max HR")}</div>${zoneSVG(exId)}</div>`}

  /* log grid */
  const n=Math.max(b.sets,(entry.sets||[]).length);
  const lastSets=v.last?.entry?.sets||[];
  let head,rows="";
  if(b.unit==="reps"){
    head=`<tr><th>${term("tags","Set")}</th><th>Load (${state.unit})</th><th>Reps${b.perSide?" / "+term("perside","side"):""}</th><th>Reps left (${term("rir","RIR")})</th></tr>`;
    /* warm-up rows: saved with the session, left out of progression and est. 1RM */
    const wuRows=warmups(b,bi,dayKey),wTarget=num(entry.sets?.[0]?.load)??v.load;
    wuRows.forEach(([pct,reps],j)=>{const s=entry.warmups?.[j]||{},ph=wTarget!=null?roundTo(wTarget*pct/100,inc()):pct+"%";
      rows+=`<tr class="wu"><td class="tag">W${j+1}</td>
      <td><input id="in-${exId}-w${j}-load" inputmode="decimal" data-ex="${exId}" data-w="1" data-i="${j}" data-f="load" value="${esc(s.load??"")}" placeholder="${ph}" aria-label="Warm-up ${j+1} load"></td>
      <td><input id="in-${exId}-w${j}-reps" inputmode="numeric" data-ex="${exId}" data-w="1" data-i="${j}" data-f="reps" value="${esc(s.reps??"")}" placeholder="${reps}" aria-label="Warm-up ${j+1} reps"></td>
      <td class="muted" style="font-size:.78rem">light, not counted</td></tr>`});
    for(let i=0;i<n;i++){const s=entry.sets?.[i]||{},L=lastSets[i]||{};
      const ph=v.load??num(L.load);
      rows+=`<tr class="work"><td class="tag">S${i+1}</td>
      <td><input id="in-${exId}-${i}-load" inputmode="decimal" data-ex="${exId}" data-i="${i}" data-f="load" value="${esc(s.load??"")}" placeholder="${ph??""}" aria-label="Set ${i+1} load"></td>
      <td><input id="in-${exId}-${i}-reps" inputmode="numeric" data-ex="${exId}" data-i="${i}" data-f="reps" value="${esc(s.reps??"")}" placeholder="${rangeTxt(b.min,b.max)}" aria-label="Set ${i+1} reps"></td>
      <td><input id="in-${exId}-${i}-rir" inputmode="numeric" data-ex="${exId}" data-i="${i}" data-f="rir" value="${esc(s.rir??"")}" placeholder="1–2" aria-label="Set ${i+1} reps in reserve"></td></tr>`}
  } else if(b.unit==="sec"){
    head=`<tr><th>${term("tags","Hold")}</th><th>Seconds${b.perSide?" / "+term("perside","side"):""}</th><th>Note</th></tr>`;
    for(let i=0;i<n;i++){const s=entry.sets?.[i]||{};
      rows+=`<tr class="work"><td class="tag">H${i+1}</td><td><input id="in-${exId}-${i}-sec" inputmode="numeric" data-ex="${exId}" data-i="${i}" data-f="sec" value="${esc(s.sec??"")}" placeholder="${rangeTxt(b.min,b.max)}" aria-label="Hold ${i+1} seconds"></td>
      <td><input id="in-${exId}-${i}-note" data-ex="${exId}" data-i="${i}" data-f="note" value="${esc(s.note??"")}" aria-label="Hold ${i+1} note"></td></tr>`}
  } else {
    const f=b.unit==="rounds"?"rounds":"min";
    head=`<tr><th></th><th>${b.unit==="rounds"?"Rounds":"Minutes"}</th><th>Avg HR</th><th>Distance / note</th></tr>`;
    const s=entry.sets?.[0]||{};
    rows=`<tr class="work"><td class="tag">${b.unit==="rounds"?term("hiit","HIIT"):"Time"}</td>
     <td><input id="in-${exId}-0-${f}" inputmode="numeric" data-ex="${exId}" data-i="0" data-f="${f}" value="${esc(s[f]??"")}" placeholder="${rangeTxt(b.min,b.max)}" aria-label="${f}"></td>
     <td><input id="in-${exId}-0-hr" inputmode="numeric" data-ex="${exId}" data-i="0" data-f="hr" value="${esc(s.hr??"")}" placeholder="bpm" aria-label="Average heart rate"></td>
     <td><input id="in-${exId}-0-note" data-ex="${exId}" data-i="0" data-f="note" value="${esc(s.note??"")}" aria-label="Distance or note"></td></tr>`;
  }
  const canAdd=b.unit==="reps"||b.unit==="sec";
  const chips=[`<span class="chip">${esc(restTxt(b.rest)||"")}</span>`].filter(x=>!x.includes("></span>"));
  if(warmups(b,bi,dayKey).length>1)chips.push(`<span class="chip">1–2 min between warm-up sets</span>`);
  if(b.optional)chips.push(`<span class="chip opt">optional</span>`);
  if(v.txt)chips.push(`<span class="chip ${v.cls}">${esc(v.txt)}</span>`);
  if(v.txt&&v.txt.includes("microplates"))chips.push(`<span class="chip">${term("micro","What are microplates?")}</span>`);
  if(v.cls)chips.push(`<span class="chip">${term("overload","Why add load?")}</span>`);

  const closed=state.collapsed.has(choiceKey);
  const doneSets=(entry.sets||[]).filter(s=>s&&["reps","sec","min","rounds"].some(f=>num(s[f])!=null)).length;
  const prog=doneSets?`<span class="chip ${doneSets>=b.sets?"up":""}">${doneSets}/${b.sets} logged</span>`:"";
  return `<article class="sheet ${cls}${closed?" closed":""}">
    <header class="sh">
      <button class="tog" data-tog="${choiceKey}" aria-expanded="${!closed}" aria-controls="body-${choiceKey.replace(/\W/g,"-")}"><span class="chev" aria-hidden="true"></span><h3>${esc(e.name)}</h3></button>
      <span class="dose">${esc(doseTxt(b))}</span>${altSel}
      <span class="mgroups" aria-label="Muscle groups">${musclesHTML(e.m)}</span>
      <span class="shchips">${prog}${closed&&v.cls?`<span class="chip ${v.cls}">${v.cls==="up"?"add load":v.cls==="down"?"reduce":"hold load"}</span>`:""}${b.optional?`<span class="chip opt">optional</span>`:""}</span>
      ${!closed&&DESC[exId]?`<p class="desc">${esc(DESC[exId][0])}</p>`:""}
      ${!closed&&e.aka?`<p class="aka"><span class="lbl">In the book's videos</span> ${esc(e.aka)}</p>`:""}
    </header>
    <div class="shbody" id="body-${choiceKey.replace(/\W/g,"-")}" ${closed?"hidden":""}>
    <div class="media">
      ${photosHTML(exId)}
      <div class="diagram"><div class="lbl">Muscles worked</div>${muscleMap(e.m)}</div>
      ${videosHTML(e)}
    </div>
    <div class="main">
      ${varsHTML(e)}
      ${b.note?`<div class="muted">${esc(b.note)}</div>`:""}
      <div class="chips">${chips.join("")}</div>
      <div class="rx">${rx}</div>
      <div class="howto"><div><div class="lbl">Setup</div><p>${esc(e.setup)}</p></div><div><div class="lbl">Movement</div><p>${esc(e.practice)}</p></div><div><div class="lbl">Watch for</div><p>${esc(e.cues)}</p></div></div>
      <div>
        <div class="logwrap"><table class="log"><thead>${head}</thead><tbody>${rows}</tbody></table></div>
        <div class="logfoot"><span class="lastline">${lastLine(v)}</span><span style="display:flex;gap:8px;flex-wrap:wrap">${b.rest?`<button class="btn" data-rest="${b.rest[0]},${b.rest[1]}" data-restname="${esc(e.name)}">Start rest</button>`:""}${canAdd&&state.db?`<button class="btn" data-add="${exId}" data-unit="${b.unit}">+ Add a set</button>`:""}</span></div>
      </div>
    </div></div></article>`;
}

function weekStrip(){
  const ws=weekStart(state.date);
  return `<div class="week">${DAY_ORDER.map((k,i)=>{const d=new Date(ws);d.setDate(ws.getDate()+i);const s=iso(d),p=PLAN[k];
    const done=state.sessions[s]&&Object.keys(state.sessions[s].ex||{}).length;
    return `<button data-date="${s}" aria-current="${s===state.date}" title="${esc(p.wd+" · "+p.title)}"><span class="d">${k} · ${p.wd.slice(0,3)}</span><span class="k">${esc(p.title)}</span><span class="k mono">${d.getDate()} ${d.toLocaleDateString(undefined,{month:"short"})}</span><span class="bar" style="background:${KIND_COLOR[p.kind]}"></span>${done?`<span class="done" aria-label="logged"></span>`:""}</button>`}).join("")}</div>
    <div class="legend"><span style="--c:var(--accent)">lifting</span><span style="--c:var(--blue)">cardio</span><span style="--c:var(--green)">recovery</span><span style="--c:var(--green);">● logged</span></div>`;
}

/* today's set count: warm-up vs work sets per exercise, in order */
function setCount(k){
  const rows=PLAN[k].blocks.map((b,i)=>{const e=EX[b.ex];const wu=warmups(b,i,k);
    const work=b.unit==="reps"?`${b.sets} × ${rangeTxt(b.min,b.max)}${b.perSide?" per side":""}`:b.unit==="sec"?`${b.sets} holds × ${rangeTxt(b.min,b.max)} s`:doseTxt(b);
    return {name:e.name+(b.optional?" (optional)":""),wu:wu.length,wuTxt:wu.length?wu.map(w=>w[0]+"% × "+w[1]).join(", "):"none",work,ws:b.unit==="min"?0:b.sets,opt:b.optional}});
  const tw=rows.filter(r=>!r.opt).reduce((a,r)=>a+r.wu,0),tk=rows.filter(r=>!r.opt).reduce((a,r)=>a+r.ws,0);
  return `<section class="panel setcount"><h3>Today's set count</h3>
   <p class="muted" style="margin:4px 0 10px">Order: 5 minutes of easy cardio, then each exercise in turn: its ${term("tags","warm-up sets")} (light) followed by its work sets (hard, stopping 1–2 reps short of ${term("failure","failure")}).</p>
   <div class="logwrap"><table class="log sc"><thead><tr><th>Exercise</th><th>Warm-up sets</th><th>Work sets</th></tr></thead><tbody>
   ${rows.map(r=>`<tr${r.opt?' class="optrow"':""}><td>${esc(r.name)}</td><td><b class="num">${r.wu}</b> <span class="muted">${esc(r.wuTxt)}</span></td><td><b class="num">${r.ws||"–"}</b> <span class="muted">${esc(r.work)}</span></td></tr>`).join("")}
   </tbody><tfoot><tr><th>Total</th><th class="num">${tw} light</th><th class="num">${tk} hard</th></tr></tfoot></table></div>
   <p class="src" style="margin-top:6px">Book: 2–3 warm-up sets before the first exercise (${S2("Kindle p. 149","wufirst")}); the third only when work sets are heavy (${S2("p. 154","wuheavy")}). One light set before later exercises is this page's reading of the book's 1–3-per-exercise range.</p></section>`;
}
/* ---------- voice-mode session: a prompt to paste into a voice assistant, and an importer for its report ---------- */
function setsTxt(sets,u){return (sets||[]).filter(Boolean).map(x=>x.sec!=null&&x.sec!==""?x.sec+" s":x.min!=null&&x.min!==""?x.min+" min":x.rounds!=null&&x.rounds!==""?x.rounds+" rounds":(x.load!=null&&x.load!==""?x.load+" "+u+" × ":"")+(x.reps??"")+(x.rir!=null&&x.rir!==""?" (RIR "+x.rir+")":"")+(x.note?" ["+x.note+"]":"")).filter(t=>t&&t.trim()&&t.trim()!=="×").join(", ")}
function voiceBlock(b,bi,k,n){
  const id=pickEx(b,bi,k),e=EX[id],v=verdict(b,id),u=state.unit,L=[];
  L.push(`${n}. ${e.name} [id: ${id}]${b.optional?" (optional)":""}`);
  if(b.alt)L.push(`   Allowed swap: ${[b.ex,...b.alt].filter(x=>x!==id).map(x=>EX[x].name+" [id: "+x+"]").join(", ")}`);
  const wu=warmups(b,bi,k);
  const T=v.load;
  if(b.unit==="reps"&&e.bar)L.push(`   Barbell: ${BARNAME()}. Say every load as plates per side.`);
  if(wu.length)L.push(`   Warm-up sets, ${wu.length} (light, not counted, 60–120 s rest between): ${wu.map(([p,r],j)=>`W${j+1} ${p}% × ${r}`+(T!=null?" = "+(e.bar?barTxt(T*p/100):roundTo(T*p/100,inc())+" "+u):"")).join("; ")}${T==null?". No work load yet: ask me for today's work load before the first warm-up, then work these out":""}`);
  L.push(`   ${b.unit==="sec"?"Holds":"Work sets"}: ${b.sets}, ${doseTxt(b).replace(/^\d+ (holds )?× /,"")}${b.unit==="reps"?", each stopping 1–2 reps short of failure":""}${T!=null&&b.unit==="reps"?" at "+(e.bar?barTxt(T):T+" "+u):""}`);
  if(b.rest)L.push(`   Rest after each work set: ${b.rest[0]}–${b.rest[1]} s`);
  L.push(`   Last time: ${v.last?fmtDate(v.last.date)+": "+(setsTxt(v.last.entry.sets,u)||"no numbers"):"no record"}`);
  if(v.txt&&(v.last||b.unit==="reps"))L.push(`   Progression: ${v.txt}`);
  if(b.note)L.push(`   Note: ${b.note}`);
  return L.join("\n");
}
function voicePrompt(k){
  const p=PLAN[k],u=state.unit,date=state.date;
  let n=0;
  const lastNotes=Object.keys(state.sessions).filter(d=>d<date&&(state.sessions[d].day||dayFor(d))===k&&state.sessions[d].notes).sort().reverse().map(d=>({date:d,notes:state.sessions[d].notes}))[0]||null;
  const main=p.blocks.map((b,i)=>voiceBlock(b,i,k,++n)).join("\n\n");
  const mob=p.mob?MOB_BLOCKS.map((b,i)=>voiceBlock(b,i,"MOB",++n)).join("\n\n"):"";
  const b0=p.blocks[0],id0=pickEx(b0,0,k);
  const exSet=b0.unit==="reps"?{load:185,reps:7,rir:2,start:"18:12:05",end:"18:12:40",rest_s:210}:b0.unit==="sec"?{sec:30,start:"18:12:05",end:"18:12:40"}:b0.unit==="rounds"?{rounds:8,hr:150,note:"rower"}:{min:30,hr:135,note:"3.1 mi"};
  const exEntry={sets:[exSet]};if(b0.unit==="reps"&&warmups(b0,0,k).length)exEntry.warmups=[{load:75,reps:8}];
  const example=JSON.stringify({type:"workout-voice-log",date,day:k,unit:u,start:"18:02",end:"19:01",ex:{[id0]:exEntry},notes:"left knee a bit stiff on squats"});
  return `# Workout coach: ${p.wd} ${date}, ${p.title}

You are my coach and logger for this workout. I'm in voice mode with my phone in my pocket, so I can't see the screen: everything happens by voice.

## Before we start
If I'm wearing a fitness tracker, remind me to start its workout tracking. Then read me the checklist: each exercise with its number of work sets, then the mobility circuit.

## How to talk
- One or two short sentences per reply. Don't read lists aloud. No pep talk.
- Before each exercise: its name, today's target load and reps, and what I did last time.
- After each set: repeat back what you heard in a few words, then say the rest and what's next.
- If a load, reps, RIR, the bar or machine, or which exercise I'm on is missing, ask. Never fill it in.
- Machines with an unknown bar or carriage weight (Smith machine, some calf machines): log the plates per side as a note on the set and leave load out.
- Weights are in ${u}.

## Order: straight sets, every time
Finish every set of one exercise (warm-ups, then work sets) before moving on, in the order below. Don't alternate exercises or run circuits. Do exactly the listed number of work sets: never suggest an extra set. If I choose to do one anyway, log it. Never wrap up on your own: when an exercise ends, name what's left. Ask before I skip anything, mobility included. The long rests on the big lifts are there for full recovery, and the same order every week keeps the numbers comparable. Optional items come last; drop them first when I'm short on time.

## What I'll say
- "Starting" when I begin a set.
- "Done" (or "finished"), then load, reps, and reps left in reserve (RIR), e.g. "done, 185 for 7, two left".
- "Rest?" to ask how long I've rested. You only speak when I do, so this is how I check.
- "Skip", "swap to [exercise]", or "note: ..." as needed.
- "Wrap up" when I'm finished.

## Timing
I want to get faster, but by cutting dead time, not rest. Rest minimums are part of the program.
- Note the clock time each time I say "starting" or "done", if you can tell the time. Your clock can drift: any time I say out loud wins over yours. If you can't tell the time, say so once at the start, then log without times. Never invent a time or a rest length.
- When I say "done", give the rest from the plan: 60–120 s after warm-ups, the listed range after work sets. Never shorten it. If I've gone past the rest maximum, tell me the next time I speak.
- Keep an eye on the gap between finishing one exercise and starting the next. That's where I lose time.
- Time budget: ${p.time}. ${p.intro}

## Today's plan
${main}${mob?`

## Then the mobility circuit (about 10 minutes; holds, short rests)
${mob}`:""}${lastNotes?`

## Notes from last ${p.wd} (${fmtDate(lastNotes.date)})
${lastNotes.notes}`:""}

## When I say "wrap up"
1. Check the checklist first. If anything wasn't done, ask whether I'm skipping it. Then, if I'm wearing a fitness tracker, remind me to stop its tracking.
2. In one or two sentences: total time, longest rest, and what went up or down against last time.
3. Then make the log below as a downloadable file named workout-${date}.json. If you can't make files, show it as a single code block. Use exactly this shape and the ids in square brackets above. Include only what I actually did, and leave out any field you don't know.

${example}

Fields: lifts use load, reps, rir, and note when needed (plates per side on machines of unknown weight); holds use sec (per side when the plan says per side); cardio uses min or rounds, plus hr and note. Times are 24-hour local time. rest_s is seconds from the end of the previous set to the start of this one.
`;
}
function voicePanel(k){
  return `<section class="panel voice"><div class="vtop"><div><h3>Voice session</h3><p class="muted">Paste into a new chat with ChatGPT, or any assistant with a voice mode, send it, then switch to voice. It coaches set by set, keeps last week's numbers and the rest times, and ends with a report.</p></div>
   <div class="vbtns"><button type="button" class="btn primary" data-voice="copy">Copy prompt</button><button type="button" class="btn primary" data-voice="download">Download prompt</button></div></div>
   <details class="vmore"><summary>Preview the prompt</summary><textarea id="vprompt" readonly rows="10">${esc(voicePrompt(k))}</textarea></details>
   <details class="vmore"><summary>Import the session report</summary><p class="muted" style="margin:6px 0">Paste the report (or just its JSON). Exercises in it replace what's logged for that date.</p><textarea id="vreport" rows="5" placeholder='{"type":"workout-voice-log", …}'></textarea><div style="margin-top:6px;display:flex;gap:8px;align-items:center;flex-wrap:wrap"><button type="button" class="btn" data-voice="import">Import</button><span class="muted" id="vmsg">${esc(state.voiceMsg||"")}</span></div></details></section>`;
}
function importReport(txt){
  let r;try{const a=txt.indexOf("{"),z=txt.lastIndexOf("}");r=JSON.parse(txt.slice(a,z+1))}catch(e){return "Couldn't read that. Paste the JSON block from the report."}
  if(!r||typeof r.ex!=="object"||!r.ex)return "No exercises found in that report.";
  if(!state.db)return "The log isn't connected in this view, so nothing was saved.";
  const date=/^\d{4}-\d{2}-\d{2}$/.test(r.date||"")?r.date:state.date;
  if(date!==state.date){flushNow();state.date=date;$("#date").value=date;state.doc=state.sessions[date]?JSON.parse(JSON.stringify(state.sessions[date])):null}
  const d=ensureDoc();if(r.day&&PLAN[r.day])d.day=r.day;
  const NUMF=["load","reps","rir","sec","min","rounds","hr","rest_s"],TXT=["note","start","end"];
  const clean=a=>Array.isArray(a)?a.filter(s=>s&&typeof s==="object").map(s=>{const o={};NUMF.forEach(f=>{if(s[f]!=null&&s[f]!=="")o[f]=isNaN(+s[f])?s[f]:+s[f]});TXT.forEach(f=>{if(s[f])o[f]=String(s[f])});return o}):[];
  let n=0;const skipped=[];
  for(const id in r.ex){if(!EX[id]){skipped.push(id);continue}const x=r.ex[id]||{},e={sets:clean(x.sets)};const w=clean(x.warmups);if(w.length)e.warmups=w;d.ex[id]=e;n++}
  if(r.start||r.end)d.voice={start:String(r.start||""),end:String(r.end||"")};
  if(r.notes)d.notes=(d.notes?d.notes+"\n":"")+String(r.notes);
  queueSave();
  return `Imported ${n} exercise${n===1?"":"s"} for ${fmtDate(date)}.${skipped.length?" Skipped unknown ids: "+skipped.join(", ")+".":""}`;
}
/* saves text as a file through the browser's download */
function saveFile(filename,data,type){const u=URL.createObjectURL(new Blob([data],{type:type||"text/plain"}));
  const a=document.createElement("a");a.href=u;a.download=filename;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(u),2000)}
async function getDownloads(){return {save:async({filename,data})=>saveFile(filename,data,"text/markdown")}}
document.addEventListener("click",async ev=>{const t=ev.target.closest("[data-voice]");if(!t)return;
  const k=state.doc?.day||dayFor(state.date),a=t.dataset.voice;
  if(a==="copy"){const txt=voicePrompt(k);
    const fail=()=>{const m=t.closest(".voice").querySelector(".vmore");m.open=true;const ta=$("#vprompt");ta.focus();ta.select();t.textContent="Selected: copy it"};
    try{navigator.clipboard.writeText(txt).then(()=>{t.textContent="Copied";setTimeout(()=>t.textContent="Copy prompt",2500)},fail)}catch(e){fail()}return}
  if(a==="download"){const dl=await getDownloads();
    if(!dl){t.textContent="Download unavailable: use Copy";return}
    try{await dl.save({filename:`workout-voice-${state.date}-${PLAN[k].wd.toLowerCase()}.md`,data:voicePrompt(k)});t.textContent="Downloaded"}
    catch(e){t.textContent=e&&e.code==="declined"?"Download prompt":"Download failed: use Copy"}return}
  if(a==="import"){state.voiceMsg=importReport($("#vreport").value||"");render();const m=document.querySelectorAll(".vmore")[1];if(m){m.open=true}}
});
function renderToday(){
  const k=state.doc?.day||dayFor(state.date), p=PLAN[k];
  const dayNotes=state.doc||{};
  const html=`${weekStrip()}
   <div class="dayhead"><div><div class="lbl">${esc(fmtDate(state.date))} · ${k}</div><h2>${esc(p.wd)}: ${esc(p.title)}</h2><p>${esc(p.intro)} Allow ${esc(p.time)}. <a href="${sitePage("My/Exercise/Body/Plan/"+PLANPAGE[k])}" target="_blank" rel="noopener">This day in the garden</a></p></div>
   <div class="controls"><label class="lbl" for="dayover">Plan</label><select id="dayover">${DAY_ORDER.map(d=>`<option value="${d}" ${d===k?"selected":""}>${d} · ${PLAN[d].title}</option>`).join("")}</select></div></div>
   ${voicePanel(k)}
   ${p.kind==="lift"?setCount(k):""}
   ${sessionList(p.blocks,k)}
   ${extraLogged(p,k)}
   ${p.mob?`<div class="panel"><h3>Then the mobility circuit</h3><p class="muted" style="margin:6px 0 0">About ten minutes, logged on the <a href="#mobility" data-goto="mobility">Mobility circuit</a> tab for the same date.</p></div>`:""}
   <div class="daynotes">
     <label><span class="lbl">Steps today</span><input id="steps" inputmode="numeric" value="${esc(dayNotes.steps??"")}" placeholder="toward ~7,000"></label>
     <label><span class="lbl">Sleep last night (h)</span><input id="sleep" inputmode="decimal" value="${esc(dayNotes.sleep??"")}"></label>
     <label><span class="lbl">Bodyweight (${state.unit})</span><input id="bw" inputmode="decimal" value="${esc(dayNotes.bw??"")}"></label>
   </div>
   <label style="display:block;margin-top:12px"><span class="lbl">Notes: pain, fatigue, substitutions</span><textarea id="notes">${esc(dayNotes.notes??"")}</textarea></label>`;
  $("#view").innerHTML=html;
}
function renderMobility(){
  $("#view").innerHTML=`${weekStrip()}<div class="dayhead"><div><div class="lbl">${esc(fmtDate(state.date))} · after Sunday, Tuesday and Friday lifting</div><h2>Mobility Circuit</h2>
   <p>About ten minutes, two to four days a week. Stay in a painless range and keep breathing. The book asks for months of slow progress here.</p></div></div>
   ${sessionList(MOB_BLOCKS,"MOB")}`;
}
function spark(vals){
  if(vals.length<2)return `<svg viewBox="0 0 200 56"><text x="100" y="32" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="IBM Plex Sans,sans-serif">two sessions draw a trend</text></svg>`;
  const mn=Math.min(...vals),mx=Math.max(...vals),r=mx-mn||1,W=200,H=56,sx=i=>6+i*(W-12)/(vals.length-1),sy=v=>H-8-(v-mn)/r*(H-18);
  const pts=vals.map((v,i)=>`${sx(i)},${sy(v)}`).join(" ");
  return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Estimated one-rep max trend"><line x1="6" x2="${W-6}" y1="${H-8}" y2="${H-8}" stroke="var(--line)"/>
   <polygon points="${sx(0)},${H-8} ${pts} ${sx(vals.length-1)},${H-8}" fill="var(--accent-soft)" opacity=".6"/><polyline points="${pts}" fill="none" stroke="var(--accent)" stroke-width="2"/>
   <circle cx="${sx(vals.length-1)}" cy="${sy(vals.at(-1))}" r="3.5" fill="var(--accent)"/></svg>`;
}
function renderHistory(){
  const dates=Object.keys(state.sessions).sort();
  if(!state.db){$("#view").innerHTML=`<div class="empty">History needs the log connection. ${esc($("#status").textContent)}</div>`;return}
  if(!dates.length){$("#view").innerHTML=`<div class="empty">No sessions logged yet. Fill in a set on the Session tab, or import a voice session report there; each lift's trend appears here.</div>${dataPanel()}`;return}
  const cards=Object.keys(EX).filter(id=>EX[id].kind==="strength").map(id=>{
    const rows=dates.map(d=>{const e=state.sessions[d].ex?.[id];if(!e)return null;
      const sets=(e.sets||[]).filter(s=>s&&num(s.reps)!=null);if(!sets.length)return null;
      const best=sets.reduce((a,s)=>e1rm(num(s.load)||0,num(s.reps))>e1rm(num(a.load)||0,num(a.reps))?s:a);
      return {d,best,e:e1rm(num(best.load)||0,num(best.reps)),vol:sets.reduce((a,s)=>a+(num(s.load)||0)*num(s.reps),0)}}).filter(Boolean);
    if(!rows.length)return "";
    return `<div class="card"><h3>${esc(EX[id].name)}</h3>${spark(rows.map(r=>r.e))}
      <div class="lbl">best set · ${term("e1rm","est. 1RM")}</div><ol>${rows.slice(-6).reverse().map(r=>`<li>${fmtDate(r.d)} · ${esc(r.best.load??"BW")}×${esc(r.best.reps)} · ${Math.round(r.e)||"–"}</li>`).join("")}</ol></div>`}).join("");
  const cardio=dates.map(d=>{const ex=state.sessions[d].ex||{};return Object.keys(ex).filter(id=>EX[id]?.kind==="cardio").map(id=>{const s=ex[id].sets?.[0]||{};return `<li>${fmtDate(d)} · ${esc(EX[id].name)} · ${esc(s.min??s.rounds??"")}${s.min?" min":s.rounds?" rds":""}${s.hr?" · "+esc(s.hr)+" bpm":""}</li>`}).join("")}).join("");
  $("#view").innerHTML=`<div class="dayhead"><div><h2>History</h2><p>${term("e1rm","Estimated one-rep max")} uses the Epley formula on each session's best set; it is a trend line, not a test.</p></div></div>
    <div class="hist">${cards||`<div class="empty">No lifting logged yet.</div>`}${cardio?`<div class="card"><h3>Cardio</h3><ol>${cardio}</ol></div>`:""}</div>${dataPanel()}`;
}
function dataPanel(){
  const n=Object.keys(state.sessions).length;
  return `<section class="panel"><h3>Your data</h3>
   <p class="muted" style="margin:4px 0 10px">The log is saved in this browser only: ${n} session${n===1?"":"s"} so far. Export it to keep a backup or to move it to another device or browser, then import the file there. Importing replaces any date that is in the file and keeps the rest. A voice session report can be imported here too.</p>
   <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center"><button type="button" class="btn primary" data-log="export">Export log</button><button type="button" class="btn" data-log="import">Import a file…</button><input type="file" id="importfile" accept=".json,application/json,text/plain" hidden><span class="muted" role="status">${esc(state.dataMsg||"")}</span></div></section>`;
}
function importFile(txt){
  let r;try{const a=txt.indexOf("{"),z=txt.lastIndexOf("}");r=JSON.parse(txt.slice(a,z+1))}catch(e){return "Couldn't read that file as JSON."}
  if(r&&r.type==="workout-voice-log")return importReport(txt);
  if(!r||r.type!=="workouts-log")return "That file isn't a log export or a voice session report.";
  if(!state.db)return "The log isn't available in this browser, so nothing was imported.";
  flushNow();
  const n=state.db.importAll(r);
  return `Imported ${n} session${n===1?"":"s"}.`;
}
document.addEventListener("click",ev=>{const t=ev.target.closest("[data-log]");if(!t)return;
  if(t.dataset.log==="import"){$("#importfile").click();return}
  if(!state.db){state.dataMsg="Nothing to export: the log isn't available in this browser.";render();return}
  flushNow();
  saveFile(`workouts-log-${iso(new Date())}.json`,JSON.stringify({type:"workouts-log",version:1,exportedAt:new Date().toISOString(),...state.db.exportAll()},null,1),"application/json");
  state.dataMsg="Exported.";render()});
document.addEventListener("change",async ev=>{if(ev.target.id!=="importfile")return;const f=ev.target.files&&ev.target.files[0];if(!f)return;
  let txt="";try{txt=await f.text()}catch(e){}
  state.dataMsg=importFile(txt);render()});
function renderRules(){
  const R=(t,k)=>/^https?:/.test(k||"")?` <a class="src" href="${k}" target="_blank" rel="noopener">${t}</a>`:k?" "+S2(t,k):` <span class="src">${t}</span>`;
  $("#view").innerHTML=`<div class="dayhead"><div><h2>Rules from the book</h2><p>Huberman's Exercise Protocols 1–4 in Chapter 2, summarised, with the places codekiln's plan departs from them. Page numbers are from the Kindle edition.</p></div></div>
  <div class="book">
   <section class="panel"><h3>The week</h3><ul>
    <li>Day 1 long cardio, Day 2 legs, Day 3 rest, Day 4 torso, Day 5 moderate cardio, Day 6 brief hard cardio, Day 7 shoulders and arms.${R("Kindle p. 146","week")}</li>
    <li>Start the sequence on any weekday; keep the order. Saturday is Day 1 here.${R("Kindle p. 179","startday")}</li>
    <li>Missed long cardio: skip it rather than moving it onto leg day. Avoid doubling up.${R("Kindle p. 194","missedlong")}</li>
    <li>Plan change: the moderate cardio sits on Tuesday after lifting, making a five-day week.</li></ul></section>
   <section class="panel"><h3>A lifting session</h3><ul>
    <li>About 60 ± 20 minutes. Five minutes of whole-body warm-up, then 1–3 ${term("tags","warm-up sets")} per exercise; 2–3 of them before the first exercise.${R("Kindle p. 147","duration")}</li>
    <li>Warm-up ramp: about 40% of the work load for 6–10 reps, then 65% for 4–8, with 1–2 minutes between. Add 75% for 2–4 when the work sets are heavy (failure around 5–7 reps). Warm-ups never come close to failure.${R("Kindle p. 154","wuramp")}</li>
    <li>Two or three exercises per muscle group, at least one ${term("compound","compound")} and one ${term("isolation","isolation")}; 2–3 work sets each, usually 2; 4–9 work sets per group.${R("Kindle p. 160","setsper")}</li>
    <li>Rest 1–2 minutes between warm-up sets. Between work sets rest 2–5 minutes: 3–5 after ${term("compound","compound")} sets, 90 s–3 min after ${term("isolation","isolation")} sets.${R("Kindle p. 148","rest")}</li>
    <li>Time rest by the clock or by feel; either works. Huberman times it to learn how his own sense of "ready for another set" lines up with the ranges. Keep talking, texting and scrolling to a minimum between sets. The Start rest button on each exercise does the timing.${R("Kindle p. 171","restclock")}</li>
    <li>Track every set and rep on paper or a log, with the phone out of the way.${R("Kindle p. 151","track")}</li></ul></section>
   <section class="panel"><h3>Reps, effort and progress</h3><ul>
    <li>Compound lifts: a load that fails between 5 and 12 reps, occasionally a heavier 3–5. Isolation: 8–15. Quads and calves respond to higher-rep sets too.${R("Kindle p. 165","repscompound")}</li>
    <li>Book: take work sets to ${term("failure","failure")}. Plan: stop 1–2 reps short (${term("rir","RIR")} 1–2), per the 2026 ACSM position stand.${R("ACSM 2026","https://acsm.org/resistance-training-guidelines-update-2026/")}</li>
    <li>${term("overload","Progressive overload")}: once every set reaches the top of the range in good form, add weight next session. This page's chip does that check.${R("Kindle p. 169","overload")}</li>
    <li>Raise the weight in small jumps: at most 5–10% of the load you lifted last session (a 135 lb bench goes to about 142–148 lb), and only once you reach 8–12 good reps. Reps and sets stay as planned. The page suggests about 5%, rounded to a 2.5 lb (1.25 kg) step. Where that step is more than 10% of a light load, add reps first. No progress two weeks running: fewer work sets, or a week off.${R("Kindle pp. 164, 169","jump")}</li>
    <li>A full week away from lifting every 12–16 weeks, or every 10–12.${R("Kindle p. 178","weekoff")}</li>
    <li>New to an exercise or back after a lapse: one to three weeks of light practice first.${R("Kindle p. 116","breakin")}</li></ul></section>
   <section class="panel"><h3>Cardio</h3><ul>
    <li>Long: 45–75 min at 60–70% of ${term("maxhr","max heart rate")}, the fastest pace you can hold with nose breathing. Out of shape: start at 15–20 min and add a few each week.${R("Kindle p. 185","cardiolong")}</li>
    <li>Moderate: 5 min easy, then 25–30 min at 75–85% of max.${R("Kindle p. 186","moderate")}</li>
    <li>Brief: 5–10 min warm-up, then efforts at 90–95% of max. Example: 30 s all-out, 60 s easy, 6–12 rounds. The book frames all three sessions around ${term("vo2","VO₂ max")}. Alternatives: a timed mile, ${term("nor44","Norwegian 4×4")}, a ${term("cooper","Cooper test")}.${R("Kindle pp. 187–189","brief")}</li>
    <li>Max heart rate ≈ 220 − age; the book also gives 208 − 0.7 × age for men and 206 − 0.88 × age for women.${R("Kindle p. 185","maxhr")}</li></ul></section>
   <section class="panel"><h3>Walking</h3><ul>
    <li>Walk within 30 minutes after meals, even five minutes; ten to thirty is better.${R("Kindle p. 140","walkmeal")}</li>
    <li>About five minutes of walking per half-hour of sitting; roughly 7,000–10,000 steps a day.</li>
    <li>Look forward and around while walking; the phone cancels the calming effect of optic flow.${R("Kindle p. 142","optic")}</li></ul></section>
   <section class="panel"><h3>Mobility</h3><ul>
    <li>Two to four times a week, about ten minutes, any time of day.${R("Kindle p. 196","mobfreq")}</li>
    <li>Sumo squat with rotation: 3–10 s per point, three per side. Knee behind the glutes: 10–30 s, three per side. Reverse tabletop: work toward 10 s. Founder pose: hold 5 s, once or twice, as often as daily.${R("Kindle pp. 197–202","mobholds")}</li>
    <li>Full-range lifting with a controlled lowering also builds flexibility.${R("Kindle p. 196","mobslow")}</li></ul></section>
  </div>`;
}
const PAGE_URL=location.href.split("#")[0];
function renderTerms(){
  const keys=Object.keys(GLOSS).sort((a,b)=>GLOSS[a][0].localeCompare(GLOSS[b][0]));
  $("#view").innerHTML=`<div class="dayhead"><div><h2>Terms</h2><p>Every term the page underlines. Each entry has its own link: open the page with <span class="mono">#term-</span> and the term's name to land on it.</p></div></div>
  <div class="terms">${keys.map(k=>{const [t,d]=GLOSS[k],u=PAGE_URL+"#term-"+k;
    return `<section class="termentry" id="term-${k}" tabindex="-1" aria-labelledby="h-term-${k}"><h3 id="h-term-${k}">${esc(t)}</h3><p>${esc(d)}</p>
      <div class="link"><code>${esc(u)}</code><button type="button" class="btn" data-copy="${esc(u)}">Copy link</button></div></section>`}).join("")}</div>`;
}
/* ---------- how the plan works: muscle-group coverage ---------- */
const GROUPS=[["quads","Quadriceps"],["hamstrings","Hamstrings"],["glutes","Glutes"],["calves","Calves"],["chest","Chest"],["lats","Back (lats)"],["traps","Upper back"],["abs","Abs"],["obliques","Obliques"],["delts","Shoulders"],["biceps","Biceps"],["triceps","Triceps"]];
const BOOKDAY={quads:["D2"],hamstrings:["D2"],glutes:["D2"],calves:["D2"],chest:["D4"],lats:["D4"],traps:["D4"],abs:["D4","D7"],obliques:["D4","D7"],delts:["D7"],biceps:["D7"],triceps:["D7"]};
const LIFTDAYS=["D2","D4","D7"];
/* isolation options Huberman demonstrates, for groups the plan trains with compounds only */
const ISO_IDEAS={quads:V("leg extension",HV.d2,312),hamstrings:V("lying leg curl",HV.d2,459),chest:V("chest isolation",HV.d4,260),delts:V("lateral and front raises",HV.d7,142),traps:V("shrug",HV.d4,568)};
function coverage(){
  const cov={};GROUPS.forEach(([g])=>{cov[g]={};LIFTDAYS.forEach(d=>cov[g][d]=[])});
  LIFTDAYS.forEach(d=>PLAN[d].blocks.forEach(b=>{const e=EX[b.ex];if(!e||e.kind==="cardio")return;
    e.m.p.forEach(g=>{if(cov[g])cov[g][d].push({id:b.ex,name:e.name,sets:b.sets,comp:!!e.compound,opt:!!b.optional})})}));
  return cov;
}
function setsBar(n){const W=120,mx=12,sx=v=>v/mx*W;
  return `<svg viewBox="0 0 ${W} 18" width="${W}" height="18" role="img" aria-label="${n} work sets; book range 4 to 9, about 6 often better"><rect x="${sx(4)}" y="2" width="${sx(9)-sx(4)}" height="14" fill="var(--green-soft)"/><line x1="${sx(6)}" x2="${sx(6)}" y1="0" y2="18" stroke="var(--green)" stroke-width="2"/><rect x="0" y="6" width="${sx(Math.min(n,mx))}" height="6" rx="2" fill="${n>=4&&n<=9?"var(--green)":"var(--accent)"}"/></svg>`}
function renderPlan(){
  const cov=coverage();
  const cell=list=>list.length?list.map(x=>`<span class="mx ${x.comp?"c":"i"}${x.opt?" opt":""}">${esc(x.name)} <b>${x.comp?"C":"I"}·${x.sets}</b></span>`).join(""):`<span class="muted">·</span>`;
  const rows=GROUPS.map(([g,label])=>{
    const all=LIFTDAYS.flatMap(d=>cov[g][d]).filter(x=>!x.opt);
    const sets=all.reduce((a,x)=>a+x.sets,0),n=new Set(all.map(x=>x.id)).size;
    return `<tr><th scope="row">${esc(label)}</th>${LIFTDAYS.map(d=>`<td class="${BOOKDAY[g].includes(d)?"bookday":""}">${cell(cov[g][d])}</td>`).join("")}
      <td class="wk">${setsBar(sets)}<span class="num">${sets} sets · ${n} ex.</span></td></tr>`}).join("");
  const checks=GROUPS.filter(([g])=>!["abs","obliques","glutes"].includes(g)).map(([g,label])=>{
    const d=BOOKDAY[g][0],list=cov[g][d].filter(x=>!x.opt),n=list.length,sets=list.reduce((a,x)=>a+x.sets,0);
    const comp=list.some(x=>x.comp),iso=list.some(x=>!x.comp);
    const csets=list.filter(x=>x.comp).reduce((a,x)=>a+x.sets,0);
    const gaps=[];if(n<2)gaps.push(`${n} exercise${n===1?"":"s"} (book: 2–3)`);if(sets<4)gaps.push(`${sets} sets (book: 4–9, about 6 often better)`);if(sets>9)gaps.push(`${sets} sets (book: no more than 9)`);
    if(!comp)gaps.push("no compound");else if(csets<3&&sets>=4)gaps.push(`${csets} compound sets (book: at least 3)`);if(!iso)gaps.push("no isolation");
    const idea=!iso&&ISO_IDEAS[g]?` Huberman's isolation option: <a href="${esc(ISO_IDEAS[g].url)}" target="_blank" rel="noopener">${esc(ISO_IDEAS[g].label)} (${ISO_IDEAS[g].t})</a>.`:"";
    return `<li><b>${esc(label)}</b>, ${PLAN[d].wd}: ${list.length?list.map(x=>esc(x.name)+" "+x.sets+"×").join(", "):"nothing direct"}.
      ${gaps.length?`<span class="chip hold">${gaps.join(" · ")}</span>`:`<span class="chip up">meets the book</span>`}${idea}</li>`}).join("");
  const ex=PLAN.D2.blocks.map((b,i)=>({n:EX[b.ex].name,w:warmups(b,i,"D2").length,s:b.sets,r:rangeTxt(b.min,b.max)}));
  $("#view").innerHTML=`<div class="dayhead"><div><h2>How the plan works</h2><p>The book builds each lifting day from muscle groups, not body parts. This tab explains how sets are counted, shows which exercise trains which group, and marks where codekiln's plan follows the book or departs from it.</p></div></div>
  <section class="panel"><h3>Warm-up sets and work sets are counted separately</h3>
   <div class="book" style="margin-top:8px"><div><ul>
     <li><b>Work sets</b> are the hard sets. Every set count in the plan ("3 × 6–8") is work sets, and only work sets count toward the 4–9 per muscle group.</li>
     <li><b>Warm-up sets</b> are light rehearsals before the work sets, never close to failure. The book's range is 1–3 per exercise.</li>
     <li><b>The full ramp is only for the day's first lift.</b> Two sets (about 40% × 6–10, then 65% × 4–8), plus a third (75% × 2–4) when the work sets are heavy. ${S2("Kindle p. 149","wufirst")} ${S2("p. 154","wuheavy")}</li>
     <li><b>Later lifts need less:</b> one light set to rehearse the movement. This is this page's reading of the range; the book doesn't spell it out.</li></ul></div>
   <div><div class="lbl">Worked example · Sunday</div><ol class="wex">${ex.map(x=>`<li>${esc(x.n)}: <b>${x.w}</b> warm-up${x.w===1?"":"s"}, then <b>${x.s}</b> work sets of ${x.r}</li>`).join("")}</ol>
     <p class="muted" style="margin:6px 0 0">${ex.reduce((a,x)=>a+x.w,0)} light sets and ${ex.reduce((a,x)=>a+x.s,0)} hard sets in all. The Session tab shows this count for each lifting day.</p></div></div></section>
  <div class="book">
   <section class="panel"><h3>Three rules for each muscle group</h3><ul>
     <li><b>A muscle group is a single muscle, not a region.</b> "Legs are not one muscle group." Quadriceps are one group and hamstrings another, so a leg day trains several groups. ${S2("Kindle p. 160","legs")}</li>
     <li><b>Two or three exercises per group.</b> Two is usually plenty; add a third for a group you want to focus on. ${S2("Kindle p. 158","expergroup")}</li>
     <li><b>At least one ${term("compound","compound")} exercise, usually one ${term("isolation","isolation")} too.</b> The compound moves heavier weight with help from other muscles; the isolation targets the one muscle. ${S2("Kindle p. 160","compound")}</li>
     <li><b>Two or three work sets per exercise, usually two.</b> That adds up to 4–9 work sets per group in the workout. ${S2("Kindle pp. 147, 160","setsper")}</li>
     <li><b>No more than 9 work sets for one group; about 6 is often better,</b> as long as at least 3 come from a compound exercise. ${S2("Kindle p. 160","sixsets")}</li></ul>
     <p class="muted" style="margin:10px 0 0">The book's own example for quadriceps: a back squat as the compound, a leg extension as the isolation, and a leg press or hack squat as an optional third.</p></section>
   <section class="panel"><h3>How codekiln's plan reads these rules</h3><ul>
     <li>Set counts on each day's page are work sets per exercise. The plan treats the book's 4–9 as a group's total across its exercises, not an extra amount to add to every lift.</li>
     <li>It keeps about one exercise per group on each day and spreads groups across the week: rows on leg day, a split squat on torso day, chest and rows again on Friday.</li>
     <li>The result is less volume per group than the book on its main day, shown in the checks below. That is a choice to revisit, not an error in the page.</li></ul></section>
  </div>
  <div class="panel"><h3>Which exercise trains which muscle group</h3>
   <p class="muted" style="margin:4px 0 10px">C = ${term("compound","compound")}, I = ${term("isolation","isolation")}, then work sets. Shaded cells are the day the book assigns that group. In the week bar, the green band is the book's 4–9 sets and the line marks 6.</p>
   <div class="mxwrap"><table class="mxt"><thead><tr><th scope="col">Muscle group</th>${LIFTDAYS.map(d=>`<th scope="col">${d} · ${PLAN[d].wd.slice(0,3)}</th>`).join("")}<th scope="col">Week</th></tr></thead><tbody>${rows}</tbody></table></div>
   <p class="src" style="margin-top:6px">Counts use each exercise's main muscles and the first choice where the plan offers an alternative; the optional Friday calf raise is shown dashed and left out of totals.</p></div>
  <div class="panel"><h3>Check against the book, group by group</h3><ul class="checks">${checks}</ul>
   <p class="muted" style="margin:8px 0 0">Abs, obliques and glutes are left out: the book trains abs once or twice a week and counts glutes as worked indirectly on leg day.</p></div>`;
}

/* ---------- quiz ---------- */
function quadsAnswer(){const c=coverage();return LIFTDAYS.flatMap(d=>c.quads[d]).map(x=>x.name).join(" and ")}
const QUIZ=[
  {id:"mg",q:"Which of these counts as one muscle group in the book?",o:["Quadriceps","Legs","Lower body","Leg day"],why:"The book says legs are not one muscle group: quadriceps are one, hamstrings another.",go:"plan"},
  {id:"ex",q:"How many exercises per muscle group does the book suggest in a workout?",o:["2–3","1","4–5","As many as fit in 75 minutes"],why:"Two is usually plenty; a third for a group you want to focus on.",go:"plan"},
  {id:"comp",q:"Of the exercises for a muscle group, at least one should be…",o:["a compound exercise","an isolation exercise","a machine exercise","a bodyweight exercise"],why:"At least one compound (multi-joint); usually one isolation (single-joint) as well.",go:"term-compound"},
  {id:"iso",q:"Which is an isolation exercise for the quadriceps?",o:["Leg extension","Back squat","Leg press","Split squat"],why:"Only the knee moves in a leg extension. The others move hip and knee together.",go:"term-isolation"},
  {id:"sets",q:"How many work sets per exercise does the book usually call for?",o:["2","1","4","6"],why:"Two to three, usually two.",go:"plan"},
  {id:"total",q:"How many work sets per muscle group in one workout?",o:["4–9","1–3","10–15","12–20"],why:"Two or three exercises of two or three sets each gives 4–9.",go:"plan"},
  {id:"wu1",q:"How many warm-up sets before the first exercise of the day?",o:["2, or 3 when the work sets are heavy","None","5–6","As many as it takes to feel warm"],why:"About 40% × 6–10 and 65% × 4–8; add 75% × 2–4 when you'd fail around 5–7 reps.",go:"plan"},
  {id:"wun",q:"Do you repeat the full warm-up ramp before every exercise?",o:["No: the full ramp is for the first lift; later lifts get one light set","Yes, 3 warm-ups before every exercise","Yes, but only for isolation exercises","No warm-ups after the first set of the day"],why:"The book's range is 1–3 per exercise, with 2–3 before the first. One light feeler set later is this page's reading.",go:"plan"},
  {id:"count",q:"What does \"3 × 6–8\" on a plan day count?",o:["Work sets only: 3 hard sets of 6–8 reps","Warm-up and work sets together","3 exercises of 6–8 sets","3 warm-ups, then 6–8 work sets"],why:"Warm-up sets come on top and don't count toward the 4–9 per muscle group.",go:"plan"},
  {id:"six",q:"How many hard work sets per muscle group does the book say is often better?",o:["About 6, with at least 3 from a compound exercise","About 12","1","20 or more"],why:"Never above 9 for one group in a workout, since you train several groups each day.",go:"plan"},
  {id:"warm",q:"What should your first warm-up set be?",o:["About 40% of the work load for 6–10 reps","About 65% for 15–20 reps","Your work load for 1 rep","No warm-up sets, just start"],why:"Then about 65% for 4–8 and 75% for 2–4, resting 1–2 minutes between.",go:"term-tags"},
  {id:"rest",q:"How long to rest between work sets of a compound lift?",o:["3–5 minutes","30–60 seconds","90 seconds","10 minutes"],why:"Isolation sets need less: 90 seconds to 3 minutes. Clock or feel both work.",go:"rules"},
  {id:"rir",q:"You finish a set and could have done two more clean reps. What is your RIR?",o:["2","0","1","8"],why:"Reps in reserve counts the reps left. This plan aims for 1–2.",go:"term-rir"},
  {id:"prog",q:"In this plan, when do you add weight to a lift?",o:["When every work set reaches the top of its rep range in good form","Every session","When a set feels easy","Every four weeks"],why:"That is progressive overload; the Add load chip checks it for you.",go:"term-overload"},
  {id:"jump",q:"How big should a weight increase be?",o:["5–10% of last session's load","5–10 more reps","About 25%","Double the load"],why:"Small jumps keep form and joints safe; on light lifts add reps first.",go:"rules"},
  {id:"fail",q:"How does this plan differ from the book on effort?",o:["It stops 1–2 reps short of failure; the book goes to failure","They are identical","It goes past failure on every set","It uses half the book's loads"],why:"The 2026 ACSM position stand finds failure isn't required for gains.",go:"term-failure"},
  {id:"hr",q:"What effort limit does the book give for the long Saturday run?",o:["The fastest pace you can hold breathing only through your nose","90–95% of max heart rate","A sprint every mile","Below 50% of max heart rate"],why:"That lands near 60–70% of max heart rate.",go:"term-maxhr"},
  {id:"miss",q:"You miss Saturday's long run. What does the book suggest?",o:["Skip it and lift legs on Sunday as planned","Run it Sunday on top of leg day","Do two long runs next week","Shift every workout back a day"],why:"Moving long cardio onto leg day hurts the leg session.",go:"rules"},
  {id:"off",q:"How often does the book suggest a full week off lifting?",o:["Every 12–16 weeks","Every 2 weeks","Once a year","Never"],why:"Or even every 10–12 weeks; joints and the nervous system catch up.",go:"rules"},
  {id:"mob",q:"How often and how long is the mobility circuit?",o:["2–4 times a week, about 10 minutes","Daily, one hour","Once a month","Before every set"],why:"Four movements, after Sunday, Tuesday and Friday lifting in this plan.",go:"mobility"},
  {id:"quads",q:"In this plan, which exercises train your quadriceps directly?",o:()=>[quadsAnswer(),"Leg extension and leg press","Romanian deadlift and seated row","Calf raise only"],why:"Squats on Sunday, split squats on Tuesday; both compound, so there is no quad isolation yet.",go:"plan"}
];
function shuffle(a){a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function newQuiz(only){
  const pool=only&&only.length?QUIZ.filter(q=>only.includes(q.id)):QUIZ;
  state.quiz={qs:shuffle(pool).map(q=>{const o=typeof q.o==="function"?q.o():q.o;return {...q,right:o[0],opts:shuffle(o)}}),i:0,pick:null,checked:false,score:0,missed:[],saved:false};
}
function missCounts(){const m={};(state.quizzes||[]).forEach(a=>(a.missed||[]).forEach(id=>m[id]=(m[id]||0)+1));return m}
function renderQuiz(){
  if(!state.quiz)newQuiz();
  const z=state.quiz,past=(state.quizzes||[]).slice().sort((a,b)=>a.at<b.at?1:-1);
  const hist=past.length?`<ol class="qhist">${past.slice(0,8).map(a=>`<li class="num">${fmtDate(a.at.slice(0,10))} · ${a.score}/${a.total}</li>`).join("")}</ol>`:`<p class="muted">No saved attempts yet${state.db?"":" (the log isn't connected here, so scores won't save)"}.</p>`;
  const mc=missCounts(),worst=Object.entries(mc).sort((a,b)=>b[1]-a[1]).slice(0,5);
  const side=`<aside class="panel"><h3>Your attempts</h3>${hist}${worst.length?`<div class="lbl" style="margin-top:10px">Missed most</div><ul>${worst.map(([id,n])=>`<li>${esc(QUIZ.find(q=>q.id===id)?.q||id)} <span class="muted">(${n}×)</span></li>`).join("")}</ul><button class="btn" data-quiz="missed">Practise these</button>`:""}</aside>`;
  let main;
  if(z.i>=z.qs.length){
    main=`<section class="panel qcard"><h3>Score: ${z.score} of ${z.qs.length}</h3>
      ${z.missed.length?`<p>To review:</p><ul>${z.missed.map(id=>{const q=QUIZ.find(x=>x.id===id);return `<li>${esc(q.q)}<br><span class="muted">${esc(q.why)}</span> <a href="#${q.go}">Read more</a></li>`}).join("")}</ul>`:`<p>Every answer right.</p>`}
      <p class="status">${z.saved?"Saved to your log.":state.db?"Saving…":"Not saved: the log isn't connected here."}</p>
      <div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn primary" data-quiz="again">Take it again</button>${z.missed.length?`<button class="btn" data-quiz="retry">Retry the ${z.missed.length} missed</button>`:""}</div></section>`;
    if(!z.saved&&state.db&&!z.saving)saveQuiz();
  } else {
    const q=z.qs[z.i],ok=z.checked&&z.pick===q.right;
    main=`<section class="panel qcard"><div class="lbl">Question ${z.i+1} of ${z.qs.length} · score ${z.score}</div>
      <fieldset><legend><h3>${esc(q.q)}</h3></legend>
      ${q.opts.map((o,k)=>{const cls=z.checked?(o===q.right?"right":o===z.pick?"wrong":""):"";
        return `<label class="qopt ${cls}"><input type="radio" name="qopt" id="qopt-${k}" value="${esc(o)}" ${z.pick===o?"checked":""} ${z.checked?"disabled":""}> <span>${esc(o)}</span></label>`}).join("")}</fieldset>
      ${z.checked?`<p class="qfb ${ok?"ok":"no"}" role="status"><b>${ok?"Right.":"Not quite: "+esc(q.right)+"."}</b> ${esc(q.why)} <a href="#${q.go}">Read more</a></p>`:""}
      <div style="display:flex;gap:8px">${z.checked?`<button class="btn primary" data-quiz="next">${z.i+1<z.qs.length?"Next question":"See score"}</button>`:`<button class="btn primary" data-quiz="check" ${z.pick==null?"disabled":""}>Check answer</button>`}</div></section>`;
  }
  $("#view").innerHTML=`<div class="dayhead"><div><h2>Quiz</h2><p>${QUIZ.length} questions on how the plan works and what the book says. Order changes each time; scores save to your log so you can see what sticks.</p></div></div>
   <div class="qgrid">${main}${side}</div>`;
}
async function saveQuiz(){
  const z=state.quiz;z.saving=true;const at=new Date().toISOString();
  try{await state.db.doc("quiz/"+at.replace(/[:.]/g,"-")).set({at,score:z.score,total:z.qs.length,missed:z.missed});z.saved=true}catch(e){z.saveErr=true}
  z.saving=false;if(state.view==="quiz")render();
}
document.addEventListener("change",ev=>{if(ev.target.name==="qopt"&&state.quiz){state.quiz.pick=ev.target.value;const b=document.querySelector('[data-quiz="check"]');if(b)b.disabled=false}});
document.addEventListener("click",ev=>{const t=ev.target.closest("[data-quiz]");if(!t)return;const z=state.quiz,a=t.dataset.quiz;
  if(a==="check"&&z.pick!=null){z.checked=true;const q=z.qs[z.i];if(z.pick===q.right)z.score++;else z.missed.push(q.id)}
  else if(a==="next"){z.i++;z.pick=null;z.checked=false}
  else if(a==="again")newQuiz();
  else if(a==="retry")newQuiz(z.missed);
  else if(a==="missed")newQuiz(Object.keys(missCounts()));
  render();const f=document.querySelector(".qcard input,.qcard button");if(f)f.focus();});

function render(){
  closeGloss(false);
  document.querySelectorAll("nav.tabs button").forEach(b=>b.setAttribute("aria-selected",b.dataset.view===state.view));
  ({today:renderToday,mobility:renderMobility,plan:renderPlan,quiz:renderQuiz,history:renderHistory,rules:renderRules,terms:renderTerms}[state.view]||renderToday)();
}
/* hash routing: #session #mobility #plan #quiz #history #rules #terms, or #term-<name> */
const HASH_VIEW={session:"today",mobility:"mobility",plan:"plan",quiz:"quiz",history:"history",rules:"rules",terms:"terms"};
const VIEW_HASH={today:"session",mobility:"mobility",plan:"plan",quiz:"quiz",history:"history",rules:"rules",terms:"terms"};
function route(){
  const h=decodeURIComponent((location.hash||"").slice(1));
  if(h.startsWith("term-")){
    state.view="terms";render();
    const el=document.getElementById(h.toLowerCase());
    if(el){el.scrollIntoView({block:"start"});el.focus({preventScroll:true});el.classList.add("flash");setTimeout(()=>el.classList.remove("flash"),1800)}
    else window.scrollTo({top:0});
    return true;
  }
  if(HASH_VIEW[h]){if(state.view!==HASH_VIEW[h]){state.view=HASH_VIEW[h];render()}return true}
  return false;
}
window.addEventListener("hashchange",route);
function goView(v){state.view=v;try{localStorage.setItem("wk.view",v)}catch(e){}
  const h="#"+VIEW_HASH[v];if(location.hash!==h){try{history.replaceState(null,"",h)}catch(e){location.hash=h}}render()}

/* ---------- database: this browser's localStorage, one JSON object {sessions, quiz, settings} ---------- */
function localDB(){
  const KEY="wk.log.v1";
  localStorage.setItem(KEY+".probe","1");localStorage.removeItem(KEY+".probe");
  let data;try{data=JSON.parse(localStorage.getItem(KEY)||"{}")||{}}catch(e){data={}}
  const subs={}; // "sessions", "quiz" or "settings/main" -> listeners
  const copy=v=>v==null?v:JSON.parse(JSON.stringify(v));
  const later=f=>setTimeout(f,0); // snapshots arrive after the write that caused them
  const on=(key,f)=>{(subs[key]||(subs[key]=new Set())).add(f);later(f);return()=>subs[key].delete(f)};
  const emit=keys=>later(()=>keys.forEach(k=>subs[k]&&subs[k].forEach(f=>f())));
  const persist=()=>{try{localStorage.setItem(KEY,JSON.stringify(data))}catch(e){const err=new Error("browser storage is full or blocked");err.code="storage";throw err}};
  const coll=c=>data[c]||(data[c]={});
  window.addEventListener("storage",ev=>{if(ev.key!==KEY)return;try{data=JSON.parse(ev.newValue||"{}")||{}}catch(e){data={}}emit(Object.keys(subs))});
  return {
    collection:c=>({onSnapshot:cb=>on(c,()=>cb({docs:Object.keys(data[c]||{}).map(id=>({id,data:()=>copy(data[c][id])}))}))}),
    doc:path=>{const i=path.indexOf("/"),c=path.slice(0,i),id=path.slice(i+1);return {
      set:async v=>{coll(c)[id]=copy(v);persist();emit([c,path])},
      update:async v=>{const cur=(data[c]||{})[id];if(cur==null){const err=new Error("no such document");err.code="not-found";throw err}
        Object.assign(cur,copy(v));persist();emit([c,path])},
      onSnapshot:cb=>on(path,()=>{const v=(data[c]||{})[id];cb({exists:v!=null,data:()=>copy(v)})})}},
    exportAll:()=>copy({sessions:data.sessions||{},quiz:data.quiz||{},settings:data.settings||{}}),
    importAll:r=>{let n=0;
      for(const [d,doc] of Object.entries(r.sessions||{}))if(/^\d{4}-\d{2}-\d{2}$/.test(d)&&doc&&typeof doc==="object"){coll("sessions")[d]=copy(doc);n++}
      for(const [id,doc] of Object.entries(r.quiz||{}))if(doc&&typeof doc==="object")coll("quiz")[id]=copy(doc);
      const st=r.settings&&r.settings.main;if(st&&typeof st==="object")coll("settings").main=Object.assign(coll("settings").main||{},copy(st));
      persist();emit(Object.keys(subs));return n}
  };
}
let saveTimer=null,inflight=false,dirty=false;
function setStatus(t,err){const s=$("#status");s.textContent=t;s.classList.toggle("err",!!err)}
function ensureDoc(){if(!state.doc)state.doc={date:state.date,day:dayFor(state.date),ex:{}};if(!state.doc.ex)state.doc.ex={};return state.doc}
function queueSave(){
  if(!state.db){setStatus("Not saved: the log is unavailable in this view.",true);return}
  dirty=true;clearTimeout(saveTimer);saveTimer=setTimeout(flush,700);setStatus("Saving…");
}
async function flush(){
  if(inflight||!dirty)return;inflight=true;dirty=false;
  const d=ensureDoc();d.updatedAt=new Date().toISOString();d.updatedBy="page";
  try{await state.db.doc("sessions/"+state.date).set(JSON.parse(JSON.stringify(d)));setStatus("Saved "+new Date().toLocaleTimeString([], {hour:"numeric",minute:"2-digit"}))}
  catch(e){setStatus("Couldn't save ("+(e.code||e.message||"error")+"). Your entry stays on screen; edit again to retry.",true);dirty=true}
  inflight=false;if(dirty)flush();
}
async function saveSettings(extra){
  if(!state.db)return;
  const ref=state.db.doc("settings/main"),data={unit:state.unit,...(extra||{}),updatedAt:new Date().toISOString()};
  try{await ref.update(data)}catch(e){try{await ref.set(data)}catch(e2){}}
}

async function connect(){
  const t=setTimeout(()=>{if(!state.ready)setStatus("The log didn't load. You can read the plan; entries won't be saved.",true)},10000);
  let db=null;try{db=localDB()}catch(e){}
  if(!db){clearTimeout(t);setStatus("This browser won't let the page save anything (private windows often block it), so sets can't be logged here. The plan still works.",true);render();return}
  state.db=db;
  db.collection("sessions").onSnapshot(snap=>{
    clearTimeout(t);state.ready=true;
    const all={};snap.docs.forEach(d=>{all[d.id]=d.data()});state.sessions=all;
    const fresh=all[state.date]||null;
    // keep local edits while typing; take remote doc otherwise
    if(!dirty&&!inflight){state.doc=fresh?JSON.parse(JSON.stringify(fresh)):null;
      const a=document.activeElement;const id=a&&a.id;const pos=a&&a.selectionStart;render();
      if(id){const n=document.getElementById(id);if(n){n.focus();try{n.setSelectionRange(pos,pos)}catch(e){}}}}
    if($("#status").textContent.startsWith("Loading"))setStatus(Object.keys(all).length?`${Object.keys(all).length} session${Object.keys(all).length>1?"s":""} saved in this browser`:"Nothing logged yet in this browser");
  },err=>{clearTimeout(t);setStatus("Log error: "+(err.code||err.message),true)});
  db.collection("quiz").onSnapshot(snap=>{state.quizzes=snap.docs.map(d=>d.data());if(state.view==="quiz")render()},()=>{});
  db.doc("settings/main").onSnapshot(s=>{const v=s.exists?s.data():null;if(!v)return;
    if(v.unit&&v.unit!==state.unit){state.unit=v.unit;$("#unit").value=v.unit}
    if(v.birthYear){const t=new Date(),m=v.birthMonth||1;
      // age from birth year and month; counts the birthday from the first of that month
      state.age=t.getFullYear()-v.birthYear-((t.getMonth()+1)<m?1:0);
      if(document.activeElement!==$("#born"))$("#born").value=v.birthYear+"-"+pad(m)}
    else state.age=null;
    if(!dirty)render()},()=>{});
}

/* ---------- events ---------- */
document.addEventListener("input",ev=>{
  const el=ev.target;
  if(el.dataset&&el.dataset.ex){
    const d=ensureDoc(),id=el.dataset.ex,i=+el.dataset.i,f=el.dataset.f;
    const e=d.ex[id]||(d.ex[id]={sets:[]});const arr=el.dataset.w?(e.warmups||(e.warmups=[])):e.sets;while(arr.length<=i)arr.push({});
    const raw=el.value.trim();arr[i][f]=(f==="note"||raw==="")?raw:(isNaN(+raw)?raw:+raw);
    queueSave();return;
  }
  if(["notes","steps","sleep","bw"].includes(el.id)){const d=ensureDoc();const raw=el.value;d[el.id]=el.id==="notes"?raw:(raw===""?"":+raw);queueSave()}
});
document.addEventListener("change",ev=>{
  const el=ev.target;
  if(el.id==="date"){if(el.value){flushNow();state.date=el.value;state.doc=state.sessions[el.value]?JSON.parse(JSON.stringify(state.sessions[el.value])):null;render()}}
  else if(el.id==="unit"){state.unit=el.value;saveSettings();render()}
  else if(el.id==="born"){const v=el.value.trim(),m=/^(\d{4})-(\d{1,2})$/.exec(v),y=m&&+m[1],mo=m&&+m[2];
    if(m&&y>1900&&y<=new Date().getFullYear()&&mo>=1&&mo<=12)saveSettings({birthYear:y,birthMonth:mo});
    else if(!v)saveSettings({birthYear:null,birthMonth:null});
    else setStatus("Born: enter a year and month like 1990-04.",true)}
  else if(el.id==="dayover"){const d=ensureDoc();d.day=el.value;queueSave();render()}
  else if(el.classList.contains("alt")){state.choice[el.dataset.ck]=el.value;render()}
  else if(el.dataset&&el.dataset.ex&&el.dataset.f==="load"){render()} // refresh ramp loads after typing set 1
});
document.addEventListener("click",ev=>{
  if(!ev.target.closest("#gloss,.term"))closeGloss(false);
  const t=ev.target.closest("button,a");if(!t)return;
  if(t.dataset.term){ev.preventDefault();openGloss(t);return}
  if(t.dataset.vscroll){const r=t.closest(".varwrap").querySelector(".vars");const c=r.querySelector(".var");r.scrollBy({left:(+t.dataset.vscroll)*((c?c.offsetWidth:300)+10),behavior:"smooth"});return}
  if(t.dataset.tog){const k=t.dataset.tog;state.collapsed.has(k)?state.collapsed.delete(k):state.collapsed.add(k);saveCollapsed();render();
    const n=document.querySelector(`[data-tog="${k}"]`);if(n)n.focus();return}
  if(t.dataset.collapseAll){const keys=t.dataset.keys.split(",");keys.forEach(k=>t.dataset.collapseAll==="collapse"?state.collapsed.add(k):state.collapsed.delete(k));saveCollapsed();render();return}
  if(t.dataset.view){goView(t.dataset.view);return}
  if(t.dataset.goto){ev.preventDefault();goView(t.dataset.goto);window.scrollTo({top:0});return}
  if(t.dataset.copy){const u=t.dataset.copy;
    const ok=()=>{t.textContent="Copied"},fail=()=>{const c=t.previousElementSibling;const r=document.createRange();r.selectNodeContents(c);const s=getSelection();s.removeAllRanges();s.addRange(r);t.textContent="Selected: copy it"};
    try{navigator.clipboard.writeText(u).then(ok,fail)}catch(e){fail()}return}
  if(t.tagName==="A"&&(t.getAttribute("href")||"").startsWith("#term-")){ev.preventDefault();location.hash=t.getAttribute("href").slice(1);route();return}
  if(t.dataset.date){flushNow();state.date=t.dataset.date;$("#date").value=state.date;state.doc=state.sessions[state.date]?JSON.parse(JSON.stringify(state.sessions[state.date])):null;render();return}
  if(t.dataset.add){const d=ensureDoc(),id=t.dataset.add;const e=d.ex[id]||(d.ex[id]={sets:[]});
    const want=Math.max(e.sets.length,(document.querySelectorAll(`input[data-ex="${id}"][data-f="${t.dataset.unit==="sec"?"sec":"reps"}"]`).length))+1;
    while(e.sets.length<want)e.sets.push({});queueSave();render();}
});
/* rest timer: one at a time, fixed to the bottom of the screen */
let rest=null;
function fmtClock(s){return Math.floor(s/60)+":"+String(Math.floor(s%60)).padStart(2,"0")}
function startRest(lo,hi,name){
  stopRest();const bar=$("#restbar"),scale=hi*1.25;
  rest={t0:Date.now(),lo,hi,last:""};
  $("#rb-name").textContent="Rest · "+name;
  $("#rb-lo").style.left=(lo/scale*100)+"%";$("#rb-hi").style.left=(hi/scale*100)+"%";
  bar.hidden=false;document.body.classList.add("resting");
  const tick=()=>{if(!rest)return;const s=(Date.now()-rest.t0)/1000;
    $("#rb-time").textContent=fmtClock(s);$("#rb-fill").style.width=Math.min(100,s/scale*100)+"%";
    const st=s<lo?"early":s<=hi?"ready":"late";
    const txt=st==="early"?`ready at ${fmtClock(lo)} (target ${fmtClock(lo)}–${fmtClock(hi)})`:st==="ready"?"in the range: next set when you feel ready":`past ${fmtClock(hi)}: start the set`;
    bar.dataset.s=st;if(rest.last!==st){$("#rb-state").textContent=txt;rest.last=st}
    else if(st==="early")$("#rb-state").textContent=txt;};
  tick();rest.iv=setInterval(tick,1000);
}
function stopRest(){if(rest){clearInterval(rest.iv);rest=null}const b=$("#restbar");if(b){b.hidden=true;document.body.classList.remove("resting")}}
document.addEventListener("click",ev=>{const t=ev.target.closest("[data-rest],#rb-stop");if(!t)return;
  if(t.id==="rb-stop"){stopRest();return}
  const [lo,hi]=t.dataset.rest.split(",").map(Number);startRest(lo,hi,t.dataset.restname)});
function flushNow(){if(dirty){clearTimeout(saveTimer);flush()}}

$("#date").value=state.date;
if(!route())render();
connect();
