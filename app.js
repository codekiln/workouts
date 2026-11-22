/* Generated from the Workouts artifact by tools/sync_from_artifact.py. In a fork, edit this file directly. */
/* ---------- exercise library ---------- */
const HV = { // Huberman's Protocols demonstration videos
  d2:"https://www.youtube.com/watch?v=CbEFgDFQBvk", d4:"https://www.youtube.com/watch?v=UEU6NYLRi6o",
  d7:"https://www.youtube.com/watch?v=IzpGEk-2th4", mob:"https://www.youtube.com/watch?v=SzufA9jqrPw",
  face:"https://www.youtube.com/watch?v=UMGpxwhsy_k",
  forearm:"https://www.youtube.com/watch?v=4EkKhkSNjWY", neck:"https://www.youtube.com/watch?v=wjiZaCJ6tCA"
};
const yt=(base,s)=>base+"&t="+s+"s";
const ts=s=>Math.floor(s/60)+":"+String(s%60).padStart(2,"0");
/* demonstrations open on codekiln's garden site, where the timestamp plays the embedded video from that moment without pre-roll ads */
const GV={"CbEFgDFQBvk": {"url": "https://codekiln.github.io/logseq-encode-garden/Person/Andrew%20Huberman/Book/26/Protocols/YouTube/26/09/Day%202%20-%20Major%20Lower%20Body%20Muscles/", "ids": {"27": "901e5f09-94a2-4fee-bf5f-8109c25fb004", "67": "2e0a04b6-fefe-46c1-b237-7df3021eb7a9", "100": "ab4347a5-dad6-4193-b182-1f5b6b3e18b0", "172": "9fcbe827-b89d-4e61-8cf1-8675e801b3cb", "294": "b99e21b7-702f-4ac6-88b4-dac7a99aeff0", "312": "843d11c2-d24a-4087-a63d-62e3988ede89", "378": "7ceee6d1-0f28-4d02-a88a-43cb490d0c4e", "459": "bd1db1a5-6dc7-4f39-abd8-2a40a5db88ba", "578": "e2a920af-2226-40e5-ae39-363a79363c01", "632": "265a87d4-a41c-4dd9-871f-8bed11046aac", "746": "e1e61834-5587-45d4-ba16-b4f04270c711"}}, "UEU6NYLRi6o": {"url": "https://codekiln.github.io/logseq-encode-garden/Person/Andrew%20Huberman/Book/26/Protocols/YouTube/26/09/Day%204%20-%20Major%20Torso%20Muscles/", "ids": {"7": "cef17f00-8c35-4496-a037-a97e00f17a21", "68": "e79ae95f-5009-47e5-921d-e100fb2df8a2", "125": "484942d7-73a6-4455-a03c-fb4fd473bfe9", "195": "1792ee0a-d1c7-4331-921b-49055187aeec", "260": "1a4639cf-76e4-4611-9270-29042252ad87", "291": "524713da-ce84-4511-a449-aaf09bcc80fc", "335": "a26c99ea-3c9a-4f8e-a2ae-ae7862484dc5", "373": "d6c65c35-9c7d-4df5-8254-c4d608228b73", "416": "d4f77d4c-c58c-42e6-8f15-6469d462770e", "463": "b15df1e9-1bed-4f6b-94af-7f19b2a84e28", "568": "17a80f05-1d17-4b76-a914-6ba7317adb0d", "593": "bdb8450c-91d6-4681-a533-0dffd109e207", "709": "db99f82c-b2d9-470a-b1e0-948a994cad28", "821": "330a11fd-6b04-4b90-921d-9619310f7c93"}}, "IzpGEk-2th4": {"url": "https://codekiln.github.io/logseq-encode-garden/Person/Andrew%20Huberman/Book/26/Protocols/YouTube/26/09/Day%207%20-%20Shoulders%20and%20Arms/", "ids": {"11": "84c8fab6-5702-41ab-8350-0cd0c7dd1405", "52": "0c053dcc-3303-4ab5-845f-7bbb3012e633", "105": "7a5ed56a-fca1-4109-954d-048c1a74fae8", "142": "1b5c89c9-cb77-47e1-bfde-033d46504832", "185": "0866e5ad-c910-41ee-b272-af0d3bb6a115", "200": "6d306dd0-8f61-4b5b-97a6-c4fc1787c217", "284": "7fd19ecd-b67d-4213-81b3-407a95d6e237", "376": "12975d4b-8af5-452f-8800-050555150579", "426": "0c3972bd-cdf8-41dc-a1d9-6a4984f172fb", "460": "164c7bff-91c3-4893-80e5-52ebc42618ac", "523": "e1ca0318-8b68-423e-9006-00feedc0588f"}}, "SzufA9jqrPw": {"url": "https://codekiln.github.io/logseq-encode-garden/Person/Andrew%20Huberman/Book/26/Protocols/YouTube/26/09/Mobility%20and%20Flexibility/", "ids": {"28": "5a63aaec-784d-44f1-8c7e-3cb69dbde082", "135": "b3a9c4d8-81a9-42c2-974d-34171680be43", "221": "8bd1efd8-0419-48db-b02b-6f0f6e505035", "315": "b05f1545-c94e-41cd-b1dc-1a8e74fecc9e", "396": "656e84a1-f2f1-44ee-bc54-c513ee6e4653"}}, "UMGpxwhsy_k": {"url": "https://codekiln.github.io/logseq-encode-garden/Person/Andrew%20Huberman/Book/26/Protocols/YouTube/26/05/Jeff%20Cavaliere%20Shows%20Andrew%20Huberman%20the%20Face%20Pull/", "ids": {"0": "d4c681f2-ed5d-4a24-9dbd-480e3421a790", "67": "0d966897-cc51-4956-ac6c-7277c97765d1", "111": "a1d42a8f-e94c-4565-a6c2-54d2cebf5240", "167": "66ed3dc6-2ca3-4f3b-975c-34c23b2d61be", "241": "d4fcd2c4-5789-4255-9367-5c2687e93826", "286": "3ed9e707-b6dc-4045-8a3a-1bb7d3fa6d17", "334": "345a4003-c67f-4e1b-bd49-589caaaa6c19", "398": "4caaba5c-5d17-4f29-9669-12f081f1e856"}}};
GV["4EkKhkSNjWY"]={url:"https://codekiln.github.io/logseq-encode-garden/Person/Andrew%20Huberman/Book/26/Protocols/YouTube/18/12/The%20Perfect%20Forearm%20Workout/",ids:{}};
GV["wjiZaCJ6tCA"]={url:"https://codekiln.github.io/logseq-encode-garden/Person/Andrew%20Huberman/Book/26/Protocols/YouTube/16/11/Neck%20Exercises%20that%20Kill%20Your%20Neck/",ids:{}};
const V=(label,base,s)=>{const id=base.split("v=")[1],g=GV[id],b=g&&g.ids[String(s)];
  return {label,url:g?g.url+(b?"#block-"+b:""):yt(base,s),t:ts(s),yt:yt(base,s)}};

const EX = {
  "back-squat":{name:"Back Squat",kind:"strength",compound:true,bar:true,m:{p:["quads","glutes"],s:["hamstrings","lowerback","abs"]},
    setup:"Rack hooks just below shoulder height, safeties below your bottom position. Bar across the upper back, stand it up, short step back.",
    practice:"Brace, whole foot planted, bend hips and knees together. Go as deep as you control, then push the floor away. Knees follow toes.",
    cues:"Heels lift or trunk position changes abruptly: lighten the load or shorten the depth.",
    vids:[V("Huberman · back squat",HV.d2,27),V("Huberman · front and hack squat",HV.d2,67)]},
  "leg-press":{name:"Leg Press",kind:"strength",compound:true,rng:[6,8],m:{p:["quads","glutes"],s:["hamstrings"]},
    setup:"Seat so back and pelvis stay supported, heels flat on the plate, a comfortable starting knee bend.",
    practice:"Press smoothly, stop short of locking the knees. Lower until just before the pelvis lifts or the low back rounds off the pad.",
    cues:"Check the release and safety stops with a light load first; machines differ.",
    vids:[V("Huberman · other compound leg options",HV.d2,294)],ref:[["ACE seated leg press","https://www.acefitness.org/resources/everyone/exercise-library/154/seated-leg-press/"]]},
  "rdl":{name:"Romanian Deadlift",kind:"strength",compound:true,bar:true,rng:[6,10],m:{p:["hamstrings","glutes"],s:["lowerback","forearms"]},
    setup:"Stand with the bar or dumbbells in front of the thighs, feet hip width, knees slightly bent, weights close to the legs.",
    practice:"Hips back as the torso tips forward, knees barely bend, spine steady. Stop at hamstring tension, drive the hips forward to stand tall.",
    cues:"The weights need not reach the floor. Rounding the back to reach lower changes the exercise.",
    vids:[V("Huberman · deadlift",HV.d2,378),V("Huberman · other hamstring options",HV.d2,578)],ref:[["ACE Romanian deadlift","https://www.acefitness.org/resources/everyone/exercise-library/317/romanian-deadlift/"]]},
  "trap-bar":{name:"Trap-Bar Deadlift",kind:"strength",compound:true,rng:[6,10],m:{p:["quads","glutes","hamstrings"],s:["lowerback","traps","forearms"]},
    setup:"Stand in the middle of the hex bar, feet about shoulder width. Bend hips and knees to grip the middle of both handles.",
    practice:"Brace, push the floor away and extend hips and knees together. Lower both sides under control and reset each rep.",
    cues:"Keep the same handle height between sessions. Hips shooting up first or leaning back at the top: lighten it.",
    vids:[V("Huberman · deadlift",HV.d2,378)],ref:[["U.S. Army fitness test deadlift","https://www.army.mil/aft/"]]},
  "seated-row":{name:"Seated Cable Row",kind:"strength",compound:true,rng:[8,10],m:{p:["lats","traps"],s:["biceps","delts","forearms"]},
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
    cues:"No rack or spotter: use dumbbells instead. They can be set down to the sides if a rep fails.",
    vids:[V("Huberman · bench press",HV.d4,7),V("Huberman · dumbbell bench",HV.d4,68)],ref:[["ACE barbell chest press","https://www.acefitness.org/resources/everyone/exercise-library/5/chest-press/"]]},
  "chest-press":{name:"Machine Chest Press",kind:"strength",compound:true,rng:[8,10],m:{p:["chest"],s:["delts","triceps"]},
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
  "pallof":{name:"Pallof Press",kind:"strength",compound:false,rng:[8,12],m:{p:["abs","obliques"],s:["delts"]},
    setup:"Cable or anchored band at chest height, stand side-on to the pull, handle at the chest, feet hip width, knees soft.",
    practice:"Keep chest and hips facing forward and press the hands straight out. Hold two seconds, return slowly. Switch sides.",
    cues:"If the torso turns or leans, use less resistance or keep the hands closer.",
    vids:[V("Huberman · core",HV.d4,709)],ref:[["ACE standing anti-rotation press","https://www.acefitness.org/resources/everyone/exercise-library/332/standing-anti-rotation-press/"]]},
  "ohp":{name:"Overhead Press",kind:"strength",compound:true,bar:true,m:{p:["delts"],s:["triceps","traps","abs"]},
    setup:"Bar at the front of the shoulders or dumbbells at shoulder height. Brace, ribs over pelvis. Seated with back support is an option.",
    practice:"Press overhead, moving the head just enough for the bar to pass. Lower slowly. Forearms stay under the load.",
    cues:"Leaning back or using leg drive: reduce the load.",
    vids:[V("Huberman · barbell press",HV.d7,11),V("Huberman · dumbbell press",HV.d7,52)]},
  "cs-row":{name:"Chest-Supported Row",kind:"strength",compound:true,rng:[8,10],m:{p:["lats","traps"],s:["delts","biceps"]},
    setup:"Chest pad set so you reach the handles with straight arms while the chest stays supported.",
    practice:"Brace, row the handles toward the ribs, pause, extend slowly. Chest stays on the pad.",
    cues:"With dumbbells, use an incline bench that leaves room for the arms to hang.",
    aka:"Huberman doesn't use this name. His Day 4 video shows a one-arm dumbbell row and says barbell and machine rows also work. The pad keeps the torso from helping.",
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
  "plank":{name:"Forearm Plank",kind:"hold",compound:false,rng:[20,40],m:{p:["abs"],s:["obliques","delts","glutes"]},
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
  "stadium":{name:"Stadium Run-Ups",kind:"cardio",custom:true,zone:[0.90,0.95],m:{p:["quads","glutes","calves"],s:["hamstrings"]},
    setup:"Custom: codekiln's own interval choice, not in the book. Stadium stairs with big steps. Start the HIIT workout with heart-rate tracking in Oura before leaving the gym. Warm up about 5 minutes.",
    practice:"Run up one section, taking the big steps like small jumps. Walk down to recover; the walk down takes about twice as long as the run up. One section up and down is one round. Daylight in the eyes is a bonus.",
    cues:"Each climb should be repeatable. Slowing climbs, missed footing or heavy legs: walk the rest or stop.",
    vids:[],ref:[]},
  "sprint":{name:"Sprint Interval",kind:"cardio",zone:[0.90,0.95],m:{p:["quads","glutes"],s:["hamstrings","calves"]},
    setup:"Stationary bike, assault bike or rower with a familiar setup. Warm up 5–10 minutes with a few short pickups.",
    practice:"30 seconds hard, 60 seconds easy, repeated. Five minutes easy to finish.",
    cues:"Each hard effort should be repeatable. A fading final round or heavy legs: stop or switch to easy cardio.",
    vids:[],ref:[["Protocols, Exercise Protocol 3 (Kindle p. 187)","https://read.amazon.com/?asin=B0D3JFXBFW"]]},
  "walk":{name:"Walk",kind:"cardio",zone:[0.45,0.60],m:{p:["calves"],s:["quads","hamstrings","glutes"]},
    setup:"Comfortable shoes; route, hallway or treadmill.",
    practice:"Upright, natural arm swing. Five to ten minutes after meals; five minutes per half-hour of sitting. Look around, not at the phone.",
    cues:"Walking should leave you fresher. Build daily steps from your current average toward about 7,000.",
    vids:[],ref:[["Protocols, Exercise Protocol 1 (Readwise)","https://readwise.io/open/1063860508"]]},
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
  "face-pull":{name:"Face Pull",kind:"strength",compound:false,rng:[12,15],m:{p:["delts","traps"],s:[]},
    setup:"Set the pulley at face height and attach two ropes so the hands can travel wide enough to reach 90 degrees at the elbows. Grip the ropes underhand with the thumbs pointing back. A band anchored at face height works too.",
    practice:"Pull toward the face while rotating the forearms up and back, ending in a double-biceps position with the elbows at 90 degrees and the thumbs pointing behind you. Squeeze the shoulder blades together, hold, and return under control.",
    cues:"An overhand grip or pulling the hands straight to the face leaves the shoulder internally rotated and removes the rotator cuff work. A single rope is too narrow to reach the 90-degree angle. Open the elbows a little wider if the rear deltoids aren't working. A few plates on the stack is enough load.",
    aka:"Huberman's Day 7 video doesn't show it. The book asks for face pulls on shoulders and arms day and points to Jeff Cavaliere's demonstration.",
    vids:[V("Jeff Cavaliere · face pull setup",HV.face,111),V("Jeff Cavaliere · execution cues",HV.face,167),V("Jeff Cavaliere · mistakes fixed",HV.face,334)]}
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
  "stadium":["Running up stadium stairs, section by section, and walking back down to recover. A custom pick, not from the book.","Big stadium steps taken at a run, almost hop by hop, then an easy walk down."],
  "sprint":["Short all-out efforts on a bike or rower with easy pedalling or rowing between them.","30 seconds of maximum effort, then 60 seconds easy, repeated."],
  "walk":["Ordinary walking, easy to brisk, spread through the day.","A walk outdoors or on a treadmill, head up and looking around."],
  "sumo-rot":["A deep wide-legged squat held at the bottom while you twist your upper body and reach one arm to the ceiling.","Squatting low with elbows pressing the knees apart, one arm pointing straight up and eyes following it."],
  "hip-flexor":["A lunge-position stretch for the front of the hip of the back leg.","Half-kneeling or in a long lunge, back knee behind the hips, torso upright."],
  "tabletop":["Lifting your hips from sitting so your body forms a flat table, face-up, supported on hands and feet. It opens the shoulders and chest.","Face-up, hands and feet on the floor, hips raised until thighs and torso are level and knees are at right angles."],
  "founder":["A standing half-squat with a long spine and the arms raised back, taught by Eric Goodman. It works the back of the body.","Hips pushed back, knees slightly bent, chest lifted, arms raised with thumbs turned out."],
  "incline-bench":["A bench press on a bench tilted up 30–45°, which shifts more work to the upper chest and front shoulders.","Lying back on an inclined bench, bar lowered to the upper chest, pressed up over the shoulders."],
  "sa-pulldown":["Pulling a high cable down to your thighs with straight arms. It works the lats with only the shoulder joint moving.","Standing at a high pulley, arms straight out in front, sweeping down in an arc to the thighs."],
  "back-ext":["Bending forward at the hips over a pad and rising back up, to strengthen the lower back, glutes and hamstrings.","Face-down on an angled bench, hips on the pad, torso lowering toward the floor and rising to a straight line."],
  "face-pull":["Pulling two ropes toward your face while turning the hands back, for the rear shoulders, rotator cuff and upper back.","Standing at a cable set at face height, elbows high and bent to 90 degrees, hands finishing beside the ears with the thumbs pointing back."]
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

/* ---------- Huberman's Protocols videos, cut into chapter clips (assets in this artifact) ---------- */
Object.assign(EX,{"belt-squat": {"name": "Belt Squat", "kind": "strength", "compound": true, "m": {"p": ["quads", "glutes"], "s": ["hamstrings"]}, "setup": "Use a belt-squat machine, or a dip belt with a plate hanging between the feet while you stand on two raised boxes. Fasten the belt around the hips and hold the machine's handles or a support for balance.", "practice": "Stand tall, then bend hips and knees together to lower the load under control. Keep the torso upright and the whole foot planted. Push the floor away to stand.", "cues": "Huberman likes this compound option, though most gyms don't have the machine. It suits days when the back or shoulders limit the [[Exercise/Body/Strength/Back Squat]].", "vids": [], "video": true}, "cable-fly": {"name": "Cable Fly", "kind": "strength", "compound": false, "m": {"p": ["chest"], "s": ["delts"]}, "setup": "Set two cable pulleys slightly above shoulder height. Take a handle in each hand, step forward into a staggered stance, and let the arms open out to the sides with a slight bend in the elbows.", "practice": "Keeping the elbow bend fixed, draw the hands together in front of the chest. Pause for a second, then let the arms open slowly back to the start.", "cues": "Reduce the load if you lean or step to finish a repetition. Moving the pulleys higher or lower changes the line of pull toward the lower or upper chest. A seated fly machine (pec deck) uses the same pattern with a fixed path and back support.", "vids": [], "video": true}, "deadlift": {"name": "Deadlift", "kind": "strength", "compound": true, "m": {"p": ["hamstrings", "glutes", "lowerback"], "s": ["quads", "traps", "forearms"]}, "setup": "Stand with feet about hip to shoulder width apart and the bar over the middle of the feet, close to the shins. Hinge and bend the knees to grip the bar just outside the legs with an overhand grip. Flatten the back and lift the chest.", "practice": "Brace, then push the feet into the floor and drive the hips forward to stand tall, keeping the bar close to the legs. Think of hinging instead of yanking the bar upward. Lower it by pushing the hips back and bending the knees once the bar passes them, and keep the back flat until the bar touches the floor.", "cues": "Grip often gives out before the legs; an over-under grip, with one palm up, is a common way to hold heavier loads. The glutes and hamstrings should do the work, not the lower back. The [[Exercise/Body/Strength/Trap-Bar Deadlift]] uses neutral handles beside the body; the [[Exercise/Body/Strength/Romanian Deadlift]] starts standing and keeps the knees nearly straight.", "vids": [], "video": true}, "dip": {"name": "Dip", "kind": "strength", "compound": true, "m": {"p": ["chest", "triceps"], "s": ["delts"]}, "setup": "Grip parallel bars, jump or step up, and support yourself with straight arms and the shoulders pulled down away from the ears.", "practice": "Lean the torso forward somewhat and bend the elbows to lower the body under control until the upper arms are about parallel to the floor or to the deepest point you control without shoulder pain. Press back up to straight arms. Keep the shoulder blades set back and down so the shoulders do not roll forward at the bottom.", "cues": "A more forward lean emphasizes the chest; a more upright torso shifts work toward the triceps. Use an assisted dip machine or a band for support until full bodyweight repetitions are possible. Stop the set if the front of the shoulder hurts at the bottom.", "vids": [], "video": true}, "dumbbell-bench-press": {"name": "Dumbbell Bench Press", "kind": "strength", "compound": true, "m": {"p": ["chest"], "s": ["delts", "triceps"]}, "setup": "Sit on the end of a flat bench with the dumbbells standing on your knees. Lean back and kick them up one knee at a time so they arrive at the shoulders as your back reaches the bench. Plant the feet, pull the shoulder blades down and back, and keep head, shoulders, and hips on the bench.", "practice": "Press the dumbbells up until the elbows are straight, with wrists stacked over the elbows. Lower slowly toward the middle of the chest, slightly wide toward the armpits, then press back up without arching the lower back. At the end of the set, bring the weights back to the chest and sit up with them on the knees, or hand them to a spotter.", "cues": "If a repetition fails, lower the dumbbells to the sides and drop them clear of the body rather than straining to finish. Getting into and out of position safely limits the usable load more than the press itself; practice the kick-up with a light pair. Keeping the elbows closer to the sides shifts work toward the triceps; flaring them shifts it toward the chest.", "vids": [], "video": true}, "dumbbell-fly": {"name": "Dumbbell Fly", "kind": "strength", "compound": false, "m": {"p": ["chest"], "s": ["delts"]}, "setup": "Lie on a flat or slightly inclined bench with a dumbbell in each hand, feet planted and shoulder blades pulled down and back. Hold the weights above the chest, palms facing each other, elbows slightly bent.", "practice": "Keeping the elbow bend fixed, lower the dumbbells in a wide arc until the upper arms reach about chest level or a comfortable stretch. Bring them back up along the same arc, as if hugging a large barrel.", "cues": "If the elbows bend more as the weights come down, the fly has turned into a press; use lighter dumbbells. Huberman demonstrates a slight incline. At the end of a set, bring the weights together over the chest and sit up before setting them down rather than straining to lower them to the floor from the bottom position. A [[Exercise/Body/Strength/Cable Fly]] keeps tension through the whole movement.", "vids": [], "video": true}, "dumbbell-overhead-press": {"name": "Dumbbell Overhead Press", "kind": "strength", "compound": true, "m": {"p": ["delts"], "s": ["triceps", "traps"]}, "setup": "Lift the dumbbells off the floor with bent knees and a flat back, as in a deadlift, then bring them to the shoulders. Sit on a flat bench or a bench with back support, plant the feet, and brace the trunk.", "practice": "Press both dumbbells overhead, then lower them under control to shoulder height. Keep the forearms underneath the dumbbells and the ribs over the pelvis.", "cues": "Reduce the load if the dumbbells drift apart or you lean back to finish. At the end of a set, lower the dumbbells to the knees and then to the floor rather than dropping them from the shoulders. The barbell [[Exercise/Body/Strength/Overhead Press]] and [[Exercise/Body/Strength/Machine Shoulder Press]] train the same pattern with less balance demand.", "vids": [], "video": true}, "dumbbell-row": {"name": "Dumbbell Row", "kind": "strength", "compound": true, "m": {"p": ["lats", "traps"], "s": ["biceps", "delts", "forearms"]}, "setup": "Hold a dumbbell in one hand. Rest the other hand and the knee on that same side on the bench, with the bench hand under the shoulder and the knee under the hip. Brace the core, keep the back flat, and let the weighted arm hang.", "practice": "Lift the weight slightly first to feel the target muscles engage. Row the dumbbell up by driving the elbow back close to the side, stopping before the torso has to twist. Lower slowly, and set the weight down at the end of the set rather than dropping it.", "cues": "Reduce the load if the torso rotates or the back rounds to finish a repetition. Barbell and machine rows train the same pattern. Huberman uses compound pulls and rows with progressive overload for the back and skips isolation movements.", "vids": [], "video": true}, "front-raise": {"name": "Front Raise", "kind": "strength", "compound": false, "m": {"p": ["delts"], "s": []}, "setup": "Stand holding a light dumbbell in each hand in front of the thighs, or a cable handle from a low pulley.", "practice": "Raise the arms forward to about shoulder height with a slight bend in the elbows, then lower slowly.", "cues": "Add front raises when bench and overhead presses aren't developing the front deltoids enough. Reduce the load if you lean back or swing to lift.", "vids": [], "video": true}, "front-squat": {"name": "Front Squat", "kind": "strength", "compound": true, "m": {"p": ["quads", "glutes"], "s": ["abs", "lowerback"]}, "setup": "Set the rack hooks just below shoulder height and the safety bars below the bottom of your squat. Step under the bar so it rests on the front of the shoulders against the neck, with the elbows raised in front and the fingers or crossed arms keeping the bar in place. Stand to unrack it and take a short step back.", "practice": "Brace your trunk, keep the elbows high and the chest up, and bend hips and knees together. Lower as deep as you can while keeping the whole foot planted, then drive up to stand. Let your knees track in the direction of your toes.", "cues": "Huberman offers it for people who lack the ankle or shoulder flexibility to squat deep with the bar on their back. If the elbows drop, the bar rolls forward; use less weight. Holding a dumbbell at each shoulder is a way to learn the pattern; the [[Exercise/Body/Strength/Back Squat]] is the back-loaded version.", "vids": [], "video": true}, "glute-ham-raise": {"name": "Glute-Ham Raise", "kind": "strength", "compound": true, "m": {"p": ["hamstrings", "glutes"], "s": ["lowerback", "calves"]}, "setup": "Adjust the bench so the knees rest just behind the thigh pad and the ankles are locked under the rollers with the feet against the plate. Start upright on the knees with the hips extended and arms crossed over the chest.", "practice": "Lower the torso by letting the knees straighten while the hips stay in line with the torso. As the body nears parallel to the floor, the hips can bend to continue downward. Return by curling the heels into the rollers and driving the hips forward until upright.", "cues": "The movement takes some skill. Push off the floor or a band with the hands to assist the ascent while learning it, or lower slowly and use the hands to return.", "vids": [], "video": true}, "hack-squat": {"name": "Hack Squat", "kind": "strength", "compound": true, "m": {"p": ["quads"], "s": ["glutes"]}, "setup": "Stand on the platform with your back and shoulders against the pads. Test the machine's angle with little or no weight first, and choose a foot position that lets you bend deeply without joint pain.", "practice": "Release the safety handles, then lower the sled under control by bending the knees and hips. Stop at the deepest range you can control with the back still against the pad, then push through the whole foot to return. Re-engage the safeties before stepping off.", "cues": "Moving the feet higher on the platform shifts work toward the hips and glutes; lower and narrower emphasizes the quadriceps. Change the angle or foot position before adding weight if any joint hurts. The [[Exercise/Body/Strength/Leg Press]] is a similar machine alternative.", "vids": [], "video": true}, "hanging-leg-raise": {"name": "Hanging Leg Raise", "kind": "strength", "compound": false, "m": {"p": ["abs", "hipflexors"], "s": ["obliques", "forearms"]}, "setup": "Hang from a secure pull-up bar with an overhand grip, arms straight, and the shoulders engaged rather than slumped toward the ears. Let the body settle so it is not swinging.", "practice": "Brace the abdominals and lift the legs in front of you without swinging, then lower them slowly to a still hang before the next repetition. The progression stage sets how high and how straight the legs go.", "cues": "If the body swings, pause in a still hang between repetitions or return to the previous stage. Grip often fails before the abdominals at first; that is part of the training effect Huberman describes. Straps or a captain's-chair station with forearm pads take grip out of the movement.", "vids": [], "video": true}, "lateral-raise": {"name": "Lateral Raise", "kind": "strength", "compound": false, "m": {"p": ["delts"], "s": []}, "setup": "Stand holding a light dumbbell in each hand at your sides; some people need as little as 5 pounds to keep the movement controlled.", "practice": "Raise the dumbbells out and slightly in front of the body to about shoulder height, keeping the thumbs level with or a little higher than the pinkies. Lower slowly.", "cues": "Reduce the load if you swing the torso or shrug to lift. Experiment with the path: some people feel the side deltoids best straight out to the side, others slightly in front of the body.", "vids": [], "video": true}, "leg-extension": {"name": "Leg Extension", "kind": "strength", "compound": false, "m": {"p": ["quads"], "s": []}, "setup": "Adjust the seat so the knee lines up with the machine's pivot and the roller pad rests on the front of the lower shin. Hold the handles and sit with your back against the pad.", "practice": "Lift the weight about a centimeter off the stack so the muscle is under tension before the first repetition. Straighten the knees, squeeze the quadriceps at the top, then lower slowly. Stop each descent just before the weight touches the stack.", "cues": "Setting the weight down between repetitions releases tension; keep the stack off its rest for the whole set. Use less weight if the hips lift off the seat or the movement turns into a kick.", "vids": [], "video": true}, "lying-leg-curl": {"name": "Lying Leg Curl", "kind": "strength", "compound": false, "m": {"p": ["hamstrings"], "s": ["calves"]}, "setup": "Lie face down with the knees just past the bench and lined up with the machine's pivot. Set the roller pad on the lower Achilles, near the ankle. Hold the handles and brace the trunk.", "practice": "Curl the pad toward the buttocks without lifting the hips or arching the back. Pause briefly at the top, then lower slowly. Stop just short of the stack touching so the hamstrings stay under tension through the set.", "cues": "Toe position changes which part of the hamstring works; Huberman suggests experimenting. If the lower back takes over, use less weight. Curling one leg at a time is a variation.", "vids": [], "video": true}, "machine-shoulder-press": {"name": "Machine Shoulder Press", "kind": "strength", "compound": true, "m": {"p": ["delts"], "s": ["triceps"]}, "setup": "Adjust the seat so the handles start at about shoulder height. Plant the feet and keep the back against the pad.", "practice": "Press the handles overhead without forcing the elbows into lockout, then lower them under control to the starting height.", "cues": "Avoid arching away from the backrest. The machine guides the path, so it asks less coordination than the barbell [[Exercise/Body/Strength/Overhead Press]] or [[Exercise/Body/Strength/Dumbbell Overhead Press]]; Huberman prefers the free-weight versions for that reason.", "vids": [], "video": true}, "overhead-cable-triceps-extension": {"name": "Overhead Cable Triceps Extension", "kind": "strength", "compound": true, "m": {"p": ["triceps"], "s": ["delts"]}, "setup": "Set the cable above and behind you, face away from the stack, and hold the handles behind the head. Step far enough from the machine to feel a stretch on the triceps at the start. Lock the lats and brace the core.", "practice": "Extend the elbows to press the handles forward and overhead, like a soccer throw-in, then return to the stretched position. The movement is mostly at the elbow; as the set gets harder, let the shoulders come back a little while keeping the stretch.", "cues": "Reduce the load if the trunk arches or the stretch disappears. [[Exercise/Body/Strength/Triceps Pressdown]] trains the triceps with the arms at the sides.", "vids": [], "video": true}, "preacher-curl": {"name": "Preacher Curl", "kind": "strength", "compound": false, "m": {"p": ["biceps"], "s": ["forearms"]}, "setup": "Sit at a preacher curl machine with the backs of the upper arms on the pad. Lift the weight slightly off its rest; that is the starting position.", "practice": "Curl by bending only the elbows, then lower under control to the start without straightening the arms fully. Continue until you can no longer lift the weight.", "cues": "At failure, stand up out of the seat to set the weight down. Letting the weight drop with a straightening arm can strain or tear a biceps. The standing [[Exercise/Body/Strength/Biceps Curl]] trains the same muscle with more supination.", "vids": [], "video": true}, "rear-delt-fly": {"name": "Rear Delt Fly", "kind": "strength", "compound": false, "m": {"p": ["delts"], "s": ["traps"]}, "setup": "For the bent-over dumbbell version, stand a little wider than shoulder width and hinge forward with a dumbbell in each hand. A rear delt fly machine or a cable stack works too; face inward toward the machine.", "practice": "With the elbows bent and fixed, raise the arms out and back so only the shoulders move. Keep the sternum high and the chin in, squeeze, then lower under control.", "cues": "Keep continuous tension; letting the weights clank at the bottom means the lowering phase is uncontrolled. Back training reaches the rear deltoids only indirectly, so this isolation work fills the gap.", "vids": [], "video": true}, "shrug": {"name": "Shrug", "kind": "strength", "compound": false, "m": {"p": ["traps"], "s": ["forearms"]}, "setup": "Stand tall holding a dumbbell in each hand at your sides, palms facing in, or a barbell in front of the thighs. Brace the core and keep the head in line with the spine.", "practice": "With the arms straight, raise the shoulders straight up toward the ears, pause briefly, then lower them slowly to the start. Move only the shoulders; do not roll them or bend the elbows.", "cues": "Huberman treats shrugs as optional, because deadlifts and rows already work the traps, and suggests people with rounded shoulders may want to skip them. Reduce the load if the lower back arches or the head juts forward.", "vids": [], "video": true}, "standing-leg-curl": {"name": "Standing Leg Curl", "kind": "strength", "compound": false, "m": {"p": ["hamstrings"], "s": []}, "setup": "Adjust the machine so the working knee lines up with its pivot and the roller pad rests on the back of the lower leg, above the heel. Stand on the other leg, hold the handles, and press the front of the thigh against its pad.", "practice": "Curl the heel toward the buttocks without moving the hips or arching the back. Pause briefly, then lower slowly, stopping before the stack touches. Finish the set, then switch legs.", "cues": "Use less weight if the hips swing or the thigh leaves its pad. The [[Exercise/Body/Strength/Lying Leg Curl]] trains both legs at once.", "vids": [], "video": true}});
Object.assign(DESC,{"belt-squat": ["Practice a squat with the load hung from a hip belt, training the legs without loading the spine or shoulders.", ""], "cable-fly": ["Practice a chest isolation movement against cables, which keep resistance on the chest through the whole range.", ""], "deadlift": ["Practice lifting a barbell from the floor with a hip hinge, training the hamstrings, glutes, and lower back along with grip and trunk strength.", ""], "dip": ["Practice lowering and pressing the body between parallel bars to train the chest, front and side shoulders, and triceps.", ""], "dumbbell-bench-press": ["Practice a horizontal press with a dumbbell in each hand, which lets each arm work on its own path and allows the weights to be set aside if a repetition fails.", ""], "dumbbell-fly": ["Practice an arcing chest isolation movement with dumbbells and a fixed bend in the elbows.", ""], "dumbbell-overhead-press": ["Practice pressing a pair of dumbbells from shoulder height overhead while each arm balances its own load.", ""], "dumbbell-row": ["Practice a one-arm horizontal pull with a dumbbell while a bench supports the opposite hand and knee.", ""], "front-raise": ["Practice raising a load in front of the body to train the front deltoids.", ""], "front-squat": ["Practice a squat with the load held in front of the shoulders, developing the quadriceps with a more upright torso than the back squat.", ""], "glute-ham-raise": ["Practice lowering and raising the torso on a glute-ham bench, combining a hip hinge with a hamstring curl.", ""], "hack-squat": ["Practice a machine squat in which an angled sled holds the torso in place so that only the knees and hips move.", ""], "hanging-leg-raise": ["Practice raising the legs while hanging from a bar to train the abdominals and grip together.", ""], "lateral-raise": ["Practice raising light dumbbells out to the sides to train the side deltoids.", ""], "leg-extension": ["Practice isolating the quadriceps by straightening the knees against a machine pad.", ""], "lying-leg-curl": ["Practice isolating the hamstrings by curling the heels toward the hips while lying face down on a machine.", ""], "machine-shoulder-press": ["Practice a supported overhead press for the shoulders and triceps on a guided machine.", ""], "overhead-cable-triceps-extension": ["Practice extending the elbows overhead against a cable to stretch and train the long head of the triceps.", ""], "preacher-curl": ["Practice elbow flexion with the upper arm braced against a pad.", ""], "rear-delt-fly": ["Practice moving the arms out and back at the shoulder to train the rear deltoids.", ""], "shrug": ["Practice raising and lowering the shoulders under load to train the upper trapezius.", ""], "standing-leg-curl": ["Practice isolating the hamstrings one leg at a time by curling the heel toward the hip from a standing position.", ""]});
const EQUIP={"angled-calf-raise-machine": {"name": "Angled Calf Raise Machine", "desc": "A sled on an angled track with shoulder pads and a platform for the balls of the feet, for loaded calf raises.", "v": "d2", "s": 696, "ex": ["calf-raise"], "garden": true}, "back-extension-bench": {"name": "Back Extension Bench", "desc": "A bench that locks the ankles under pads and supports the hips, so the torso can lower and rise to work the lower back. Also called a hyperextension bench.", "v": "d4", "s": 630, "ex": ["back-ext"], "garden": true}, "barbell": {"name": "Barbell", "desc": "A long steel bar, usually 20 kg, loaded with weight plates at each end and gripped with both hands.", "v": "d2", "s": 420, "ex": ["bench", "deadlift", "front-squat", "ohp", "back-squat", "incline-bench", "rdl", "shrug"], "garden": true}, "cable-machine": {"name": "Cable Machine", "desc": "A weight stack connected through pulleys to a cable, with a movable pulley and swappable handles such as a rope; the cable keeps tension through the whole range of a movement.", "v": "d7", "s": 492, "ex": ["overhead-cable-triceps-extension", "cable-fly", "pressdown", "seated-row", "pallof", "sa-pulldown", "face-pull", "front-raise"], "garden": true}, "chest-fly-machine": {"name": "Chest Fly Machine", "desc": "A seated machine with two handles or arms that swing together in front of the chest, keeping resistance through the whole fly. Also called a pec deck.", "v": "d4", "s": 300, "ex": ["cable-fly"], "garden": true}, "dip-station": {"name": "Dip Station", "desc": "Two parallel handles at about hip height that support the body for dips.", "v": "d4", "s": 228, "ex": ["dip"], "garden": true}, "dumbbell": {"name": "Dumbbell", "desc": "A short handle with a fixed or adjustable weight at each end, held in one hand, so each side of the body works on its own.", "v": "d7", "s": 342, "ex": ["calf-raise", "dumbbell-fly", "back-ext", "rear-delt-fly", "dumbbell-row", "rfess", "dip", "dumbbell-bench-press", "curl", "lateral-raise", "dumbbell-overhead-press", "rdl", "cs-row", "front-raise", "shrug"], "garden": true}, "glute-ham-developer": {"name": "Glute-Ham Developer", "desc": "A bench with a foot plate and ankle rollers that hold the lower legs while the body hinges forward and the hamstrings pull it back up.", "v": "d2", "s": 594, "ex": ["glute-ham-raise"], "garden": true}, "hack-squat-machine": {"name": "Hack Squat Machine", "desc": "A plate-loaded sled on an angled track: the back rests against a pad and the shoulders sit under padded yokes while the legs push the sled.", "v": "d2", "s": 120, "ex": ["hack-squat"], "garden": true}, "lat-pulldown-machine": {"name": "Lat Pulldown Machine", "desc": "A seated cable station with thigh pads and an overhead bar pulled down toward the chest.", "v": "d4", "s": 438, "ex": ["lat-pulldown"], "garden": true}, "leg-extension-machine": {"name": "Leg Extension Machine", "desc": "A seated machine with a roller pad in front of the shins; straightening the knees lifts the weight, isolating the quadriceps.", "v": "d2", "s": 342, "ex": ["leg-extension"], "garden": true}, "lying-leg-curl-machine": {"name": "Lying Leg Curl Machine", "desc": "A machine with a bench to lie face down on and a roller pad behind the lower Achilles; bending the knees lifts the weight, isolating the hamstrings.", "v": "d2", "s": 498, "ex": ["lying-leg-curl"], "garden": true}, "power-rack": {"name": "Power Rack", "desc": "A steel cage with adjustable hooks and safety bars that holds a barbell at shoulder or chest height, so heavy squats and presses can be done without a spotter. Its top crossbar doubles as a pull-up bar.", "v": "d2", "s": 42, "ex": ["bench", "pull-up", "front-squat", "ohp", "back-squat", "incline-bench"], "garden": true}, "preacher-curl-machine": {"name": "Preacher Curl Machine", "desc": "A seated machine with an angled arm pad, so only the elbow bends during a curl.", "v": "d7", "s": 390, "ex": ["preacher-curl"], "garden": true}, "pull-up-bar": {"name": "Pull-Up Bar", "desc": "A fixed horizontal bar to hang from, for pull-ups and hanging core work.", "v": "d4", "s": 402, "ex": ["hanging-leg-raise", "pull-up"], "garden": true}, "reverse-hyperextension-machine": {"name": "Reverse Hyperextension Machine", "desc": "A high pad to lie face down on, with the legs hanging off the end; lifting the legs works the lower back, glutes, and hamstrings.", "v": "d4", "s": 684, "ex": ["back-ext"], "garden": true}, "standing-leg-curl-machine": {"name": "Standing Leg Curl Machine", "desc": "A machine that curls one leg at a time against a roller pad, with the knee braced on a pad and the hands holding a support.", "v": "d2", "s": 618, "ex": ["standing-leg-curl"], "garden": true}, "weight-bench": {"name": "Weight Bench", "desc": "A padded bench that supports the body for pressing, rowing, and split squats; adjustable versions set a flat, incline, or decline angle.", "v": "d2", "s": 222, "ex": ["dumbbell-fly", "bench", "dumbbell-row", "rfess", "dumbbell-bench-press", "incline-bench", "dumbbell-overhead-press", "cs-row"], "garden": true}, "trap-bar": {"name": "Trap Bar", "desc": "A six-sided bar you stand inside, with handles at your sides, so the load sits in line with the body for deadlifts. Also called a hex bar.", "img": "", "photo": "trap-bar", "v": "", "s": 0, "ex": ["trap-bar"], "garden": false}, "leg-press-machine": {"name": "Leg Press Machine", "desc": "A seated or reclined sled you push away with the feet; the back pad takes balance out of the movement.", "img": "", "photo": "leg-press", "v": "", "s": 0, "ex": ["leg-press"], "garden": false}, "chest-press-machine": {"name": "Chest Press Machine", "desc": "A seated machine with two handles at chest height, pressed forward along a fixed path, so no spotter is needed.", "img": "", "photo": "chest-press", "v": "", "s": 0, "ex": ["chest-press"], "garden": false}, "shoulder-press-machine": {"name": "Shoulder Press Machine", "desc": "A seated machine with handles at shoulder height, pressed overhead along a fixed path.", "img": "", "photo": "", "v": "", "s": 0, "ex": ["machine-shoulder-press"], "garden": false}, "belt-squat-machine": {"name": "Belt Squat Machine", "desc": "A machine that hangs the load from a hip belt, so the legs squat heavy weight without loading the spine. Huberman owns one but notes most gyms don't.", "img": "", "photo": "", "v": "", "s": 0, "ex": ["belt-squat"], "garden": false}, "resistance-band": {"name": "Resistance Band", "desc": "An elastic loop or tube that adds or takes away resistance: anchored for a Pallof press, or looped under the knees to assist pull-ups.", "img": "", "photo": "", "v": "", "s": 0, "ex": ["pull-up", "pallof"], "garden": false}, "exercise-bike": {"name": "Exercise Bike", "desc": "A stationary bike for steady cardio and sprint intervals; set the saddle so the knee stays slightly bent at the bottom.", "img": "", "photo": "steady", "v": "", "s": 0, "ex": ["steady", "sprint"], "garden": false}, "rowing-machine": {"name": "Rowing Machine", "desc": "An indoor rower; a flywheel resists each pull, which makes it a whole-body option for hard intervals.", "img": "", "photo": "sprint", "v": "", "s": 0, "ex": ["sprint"], "garden": false}};
const EXEQ={"hanging-leg-raise": ["pull-up-bar"], "calf-raise": ["angled-calf-raise-machine", "dumbbell"], "dumbbell-fly": ["dumbbell", "weight-bench"], "bench": ["barbell", "weight-bench", "power-rack"], "standing-leg-curl": ["standing-leg-curl-machine"], "deadlift": ["barbell"], "back-ext": ["back-extension-bench", "reverse-hyperextension-machine", "dumbbell"], "pull-up": ["pull-up-bar", "power-rack", "resistance-band"], "lat-pulldown": ["lat-pulldown-machine"], "rear-delt-fly": ["dumbbell"], "glute-ham-raise": ["glute-ham-developer"], "dumbbell-row": ["dumbbell", "weight-bench"], "rfess": ["weight-bench", "dumbbell"], "front-squat": ["barbell", "power-rack"], "dip": ["dip-station", "dumbbell"], "overhead-cable-triceps-extension": ["cable-machine"], "cable-fly": ["chest-fly-machine", "cable-machine"], "dumbbell-bench-press": ["dumbbell", "weight-bench"], "pressdown": ["cable-machine"], "leg-extension": ["leg-extension-machine"], "ohp": ["barbell", "power-rack"], "hack-squat": ["hack-squat-machine"], "lying-leg-curl": ["lying-leg-curl-machine"], "back-squat": ["barbell", "power-rack"], "preacher-curl": ["preacher-curl-machine"], "incline-bench": ["barbell", "weight-bench", "power-rack"], "curl": ["dumbbell"], "lateral-raise": ["dumbbell"], "dumbbell-overhead-press": ["dumbbell", "weight-bench"], "rdl": ["barbell", "dumbbell"], "trap-bar": ["trap-bar"], "leg-press": ["leg-press-machine"], "seated-row": ["cable-machine"], "chest-press": ["chest-press-machine"], "cs-row": ["dumbbell", "weight-bench"], "pallof": ["cable-machine", "resistance-band"], "sa-pulldown": ["cable-machine"], "face-pull": ["cable-machine"], "steady": ["exercise-bike"], "sprint": ["exercise-bike", "rowing-machine"], "front-raise": ["dumbbell", "cable-machine"], "shrug": ["dumbbell", "barbell"], "machine-shoulder-press": ["shoulder-press-machine"], "belt-squat": ["belt-squat-machine"]};
const HVID={"d2": {"yt": "CbEFgDFQBvk", "day": "D2", "title": "Day 2: Major Lower Body Muscles", "ch": [{"s": 0, "e": 27, "t": "Leg day overview", "ex": [], "c": "https://www.youtube.com/watch?v=CbEFgDFQBvk&t=0s", "sum": "", "hl": [], "tr": [[0, "In chapter 2 on exercise, I refer to the foundational fitness program and day two being the day that you directly target your legs, meaning your quadricep muscles, your hamstrings, your glutes, and your calves."], [11, "So first I'm going to demonstrate compound exercises to target your quadriceps. So we're going to start with a <a class=\"exref\" href=\"#ex-back-squat\">back squat</a>, then we'll do a <a class=\"exref\" href=\"#ex-front-squat\">front squat</a>. And then a couple other squat variations."], [21, "These are designed to be movements that you can generally find the equipment <del title=\"Caption said\">to</del> <ins title=\"Correction\">for</ins> in any gym. Or you could put together in a home gym."]]}, {"s": 27, "e": 67, "t": "Back Squat", "ex": ["back-squat"], "c": "https://www.youtube.com/watch?v=CbEFgDFQBvk&t=27s", "sum": "Compound movement for the quadriceps. Work out stance width with light weights during the break-in weeks, squat below parallel, pause, and stand.", "hl": [], "tr": [[27, "OK, so first we're going to start with the compound movement, the good old <a class=\"exref\" href=\"#ex-back-squat\">back squat</a>. So this is the basic movement of the back squat."], [34, "Remember you would learn how to do all this during your break in week or two using very light weights for you, figuring out how wide a stance you need in order to go down to break parallel, and then you simply squat down."], [49, "I generally like to pause and then go up. You do that for the required number of repetitions. Again, everything with the repetitions, weights and so on are described in the book. You'd walk it back, and re-rack the weight. That's the back squat."]]}, {"s": 67, "e": 100, "t": "Front Squat", "ex": ["front-squat"], "c": "https://www.youtube.com/watch?v=CbEFgDFQBvk&t=67s", "sum": "A variation for people who lack the ankle or shoulder flexibility to squat deep with the bar on their back.", "hl": [], "tr": [[67, "Another variation that's very common, especially for people that don't have the flexibility in their ankles and other regions to be able to squat down deep with it on their back, maybe they don't have the shoulder flexibility to hold, it is the <a class=\"exref\" href=\"#ex-front-squat\">front squat</a> which is very similar."], [90, "Right? Once again, you take those sets to failure or close to failure, and that's the front squat."]]}, {"s": 100, "e": 172, "t": "Hack Squat", "ex": ["hack-squat"], "c": "https://www.youtube.com/watch?v=CbEFgDFQBvk&t=100s", "sum": "Test the machine's angle with little or no weight first. The sled locks the torso, so only the knee and hip move. Pick an angle and foot position that cause no joint pain.", "hl": [], "tr": [[100, "Another compound movement mainly targeting the quadriceps is the <a class=\"exref\" href=\"#ex-hack-squat\">hack squat</a>. I should say that you need to experiment with no weight or very lightweight to see whether the angle of the <a class=\"eqref\" href=\"#eq-hack-squat-machine\" title=\"Equipment: Hack Squat Machine\">hack machine</a> squat is comfortable for you."], [115, "This one is a rather shallow angle so I can go with a little bit narrower stance, focus more on the quadriceps lower down, break parallel. So you'll notice like it's more than 90 degrees here. And then all the way up."], [127, "Some people opt to go all the way down where they really, really go low-low low-low. That's fine if you have the ability and the flexibility. Some people will just go until the knee, hamstring is at 90 degrees."], [138, "When you're doing compound exercises for the quadriceps, so like front squats and back squats, think about keeping your chest and hips. They always move together with the hack squat you're locked into the sled."], [152, "So really the only movements are going to be at the knee and the hip joint. You don't have to think so much about the movement."], [158, "So it's a great movement if you find an angle that works for you and a foot position that works for you, meaning no joint pain, no sharp pain, right? And I discuss the difference between good and bad pain with respect to resistance training in chapter 2."]]}, {"s": 172, "e": 294, "t": "Rear-Foot-Elevated Split Squat", "ex": ["rfess"], "c": "https://www.youtube.com/watch?v=CbEFgDFQBvk&t=172s", "sum": "Also called the Bulgarian split squat; works with dumbbells alone, in a hotel or home gym. Standing farther from the bench emphasizes the quadriceps; standing closer leans the torso forward and shifts work to the glutes. Grip strength can limit the load.", "hl": [], "tr": [[172, "OK, another great compound movement mainly for the quadriceps is the <a class=\"exref\" href=\"#ex-rfess\">rear leg elevated split squat</a>, sometimes called the Bulgarian split squat. This is a great movement if you find yourself in a hotel or home gym and you only have access to <a class=\"eqref\" href=\"#eq-dumbbell\" title=\"Equipment: Dumbbell\">dumbbells</a>."], [187, "I'm going to show you using a relatively lightweight, but you would obviously use the weight that allows you to get the appropriate number of repetitions for you and get to failure."], [196, "The challenge with this movement is that you are somewhat limited by your grip strength. In any event, rear leg elevated. Some people do it like so, some people do it like so. This is how I do it. You essentially look forward and you squat down and then up."], [214, "You're noticing mainly targeting the quadricep on this side, but of course glutes and other muscles as well of the leg. People will play with different distances from the <a class=\"eqref\" href=\"#eq-weight-bench\" title=\"Equipment: Weight Bench\">bench</a> in order to target the glutes or quads more. There I find it targets my quad more."], [233, "Getting closer to the bench, I find it puts me into more of a forward lean at the waist, which puts more of a glute emphasis. So you do the appropriate number of repetitions, set it down, take a rest, and then do the other side."], [245, "Do the same movement essentially. Keep in mind anytime you're getting more forward, lean at the bottom of the squat, chances are, again, it depends on your body mechanics. Chances are you're getting more of a glute lower back emphasis."], [264, "But again, people's shapes and abilities to target different movements, neural control of different muscles varies. You have to experiment. That's the key thing about this break in period of experimenting with movements."], [277, "Or if you're an experienced lifter, you already know what's best for you to target your quadriceps with compound movements safely. Again, there's a huge number of different excellent compound exercises for the quadriceps."], [289, "I tried to show you the ones that you're most likely to have or encounter the equipment for."]]}, {"s": 294, "e": 312, "t": "Belt squat, mentioned", "ex": ["belt-squat"], "c": "https://www.youtube.com/watch?v=CbEFgDFQBvk&t=294s", "sum": "Huberman likes the belt squat, though most gyms don't have one.", "hl": [], "tr": [[294, "In a typical commercial gym, or that you could set up in a home gym. There are, of course, many other movements. I'm a huge fan of the <a class=\"exref\" href=\"#ex-belt-squat\">belt squat</a>, I have a belt squat."], [303, "I'm fortunate to have one, but they're very-- most gyms don't have them, but they're terrific. OK, isolation movements for quadriceps."]], "talk": true}, {"s": 312, "e": 378, "t": "Leg Extension", "ex": ["leg-extension"], "c": "https://www.youtube.com/watch?v=CbEFgDFQBvk&t=312s", "sum": "Isolation movement for the quadriceps. Start each rep by lifting the weight a centimeter so the muscle is under tension, squeeze at the top, and lower without setting the weight down between reps.", "hl": [], "tr": [[312, "Basically the one that almost every gym has equipment for is the <a class=\"exref\" href=\"#ex-leg-extension\">leg extension</a>. And there are a huge variety of these. Some have a weight stack where you set a pin. Others use a chain cam like a nautilus."], [325, "I happen to have a plate loaded hammer strength leg extension, but the principle is the same."], [330, "I prefer to start each repetition by lifting the weight just a centimeter off, so it's under-- now my quadriceps are under tension, focusing my mind on the quadriceps and then lifting my feet until I feel really strong contraction in the quadriceps."], [347, "Lowering, I prefer not to set the weight down in between reps, so the tension is on it the whole time. And I would do my set until failure, as described in the chapter failure being the inability to continue the movement in good form any longer."], [362, "So I try to not use momentum, pause at the top and really squeeze the quadriceps, lower it under control, and so on. Finish your set. Come out. So if it's a work set it would be to failure. Do your rest. Do your next set. Move to your next exercise."], [375, "OK, compound movements for hamstrings."]]}, {"s": 378, "e": 459, "t": "Deadlift", "ex": ["deadlift"], "c": "https://www.youtube.com/watch?v=CbEFgDFQBvk&t=378s", "sum": "Compound movement for the hamstrings, glutes, and lower back that also trains grip and core. Overhand grip, bar close to the shins, back flat; think of pushing the feet into the floor and hinging rather than yanking the bar up.", "hl": [], "tr": [[378, "What I'm going to demonstrate is the most basic <a class=\"eqref\" href=\"#eq-barbell\" title=\"Equipment: Barbell\">straight bar</a> <a class=\"exref\" href=\"#ex-deadlift\">deadlift</a> from the ground. And for me, it's to emphasize the hamstrings and to some extent the glutes and lower back. It's also great for building grip strength."], [388, "And in fact, it's a whole body exercise because you really have to brace your core, it involves back muscles, et cetera. Most typical way to do this is to load up the bar. Again, this isn't a heavy work set."], [400, "You would do your warm up with the appropriate number of sets and amount of weight for you. And then moving to your work set, I prefer to use a overhand grip for both. Some people use what's called a mixed grip, but the basic movement is like so."], [414, "More close to the shins for me, I use an overhand grip to try and keep my back relatively flat, and I think about pushing my feet into the ground as much as I think about straight and opening the hip hinge here."], [428, "So I'm not so much thinking about yanking the bar off the ground as I am thinking about pushing my feet down and hinging forward like so, that's what works for me. I set it down lightly, but I don't let go and continue the set. Until I would hit failure."], [452, "And that's the classic deadlift. OK, isolation movements for hamstrings."]]}, {"s": 459, "e": 578, "t": "Lying Leg Curl", "ex": ["lying-leg-curl"], "c": "https://www.youtube.com/watch?v=CbEFgDFQBvk&t=459s", "sum": "Isolation movement for the hamstrings. Set the roller pad on the lower Achilles near the ankle. Keep continuous tension by stopping just short of touching the stack. Toe position changes which part of the hamstring works; experiment.", "hl": [], "tr": [[459, "Almost every gym-- commercial gym that has some sort of <a class=\"eqref\" href=\"#eq-lying-leg-curl-machine\" title=\"Equipment: Lying Leg Curl Machine\">leg curl machine</a>. So make sure that the roller pad is, you know, somewhere on the lower achilles near the ankle. It's not too far down nor too far up on the calf. These are typical lying leg curl machine."], [480, "Where you basically lie down. Usually there's some handles. Again, sometimes it's flat the whole way through. Other times it's at a steeper angle with the head below the hips. It varies. I happen to like this one that's nearly completely flat."], [497, "And I like to raise the weight just a little bit a centimeter off, make sure I'm in position. And then curl the weight until I feel really strong contraction in the hamstrings. I lower it till it almost touches down, but I like to keep continuous tension."], [514, "So I'm not doing this, I'm not that person. Don't be that person, be this person. That brings it almost to touching down maybe a half or a quarter centimeter from the weights touching and then back up. Some people will opt to squeeze very hard at the top."], [534, "And so on, and you just complete your set. There are a lot of variations out there you can read about with toes pointed out, toes pointed in with your toes pointed away from you."], [545, "There's a huge amount of discussion about how that targets different aspects of the hamstring. I suggest you try all those and go by, feel, and do what's needed for you."], [553, "Meaning, if you're lacking development in particular part of the hamstring, you could emphasize different foot positions, pointing the toes, et cetera. But you have to experiment, you have to feel what's right for you."], [563, "But the basic movement is that isolation again, just one joint moving, <a class=\"exref\" href=\"#ex-lying-leg-curl\">lying hamstring curl</a>. As with quadriceps movements, there's a near infinite number of movements that you can do for the hamstrings that I did not cover."], [574, "This isn't meant to be exhaustive coverage of all movements, but there are."]]}, {"s": 578, "e": 632, "t": "Other hamstring options: Glute-Ham Raise and Standing Leg Curl", "ex": ["glute-ham-raise", "standing-leg-curl"], "c": "https://www.youtube.com/watch?v=CbEFgDFQBvk&t=578s", "sum": "Glute ham raise, which combines a deadlift-like hinge with a leg curl and takes some skill; standing leg curl.", "hl": [], "tr": [[578, "I love these there are <a class=\"exref\" href=\"#ex-glute-ham-raise\">glute ham raises</a> where you essentially drape down. If you have access to these, they involve some skill. But this is essentially, if you think of it as like a <a class=\"exref\" href=\"#ex-deadlift\">deadlift</a> into a hamstring curl, right?"], [591, "The feet-- if the floor were where my feet are, we just rotated up. This part from here to here is like a deadlift, and here to here is like a leg curl. But it takes some skill and some strength to develop."], [601, "But if you can do that, there's a really efficient movement also for the lower back because you get the deadlift component and hamstring. But I would still deadlift now and again."], [611, "There-- for isolation movements, there are, you know, there's movements like this one, which isn't even plate loaded here, which is the <a class=\"exref\" href=\"#ex-standing-leg-curl\">standing leg curls</a>. And on and on and on. There's so many variations."], [624, "Find what works for you, and you'll have a nice little kit of movements that you can do while on the road or at home."]]}, {"s": 632, "e": 746, "t": "Standing Calf Raise", "ex": ["calf-raise"], "c": "https://www.youtube.com/watch?v=CbEFgDFQBvk&t=632s", "sum": "Huberman trains calves twice a week, once on leg day. Standing or angled calf raises probably cover both calf muscles; add seated calf raises if available. Knees locked, feet about shoulder width, full stretch at the bottom with the calves still active, then rise as high as possible.", "hl": [], "tr": [[632, "OK, Calves. The Calves are targeted by what is essentially propping yourself up on your toes, but with weight typically on your shoulders or in your hands. I always do calf raises twice a week, one of those days is leg day."], [647, "Almost all commercial gyms have some sort of either <a class=\"exref\" href=\"#ex-calf-raise\">standing or angled calf raise</a> or seated calf raise."], [653, "Many people will say the <del title=\"Caption said\">calf raise</del> <ins title=\"Correction\">seated calf raise</ins> is what gives width to the calf, whereas standing calf raise gives more bulk to the gastrocnemius, which is the muscle on top of the soleus."], [663, "The data say that standing or angled calf raises probably accomplish the best of both, but if you have access to a standing and a seated calf raise, by all means, do two or three work sets of both. That would be wonderful."], [675, "I don't have a seated calf raise machine, I do have an <a class=\"eqref\" href=\"#eq-angled-calf-raise-machine\" title=\"Equipment: Angled Calf Raise Machine\">angled calf raise machine</a>. You can think of this more or less like a standing calf raise machine. The only difference is with a standing calf raise machine. It's like so."], [684, "And with the angled calf raise it's very straightforward, it's the same as with the standing calf raise. You get into the machine after your warm up. You put your balls of your feet on the platform, you straighten out your knees."], [701, "Typically, it's best to have your knees locked. Feet about shoulder width apart, and you lower down until you feel a nice stretch in the calves. You want to concentrate on having the activation of the calf muscles."], [711, "So you're not just passively loading your shoulders and stretching, you're actually-- you contract the muscles-- your calf muscles all the way at the top and then lower down into a full stretch, but not passive. So you're maintaining focus on the calves."], [729, "Up, I make it a four part movement, down make sure I'm going down even more up, up, even further, as far as I can on my tippy toes all the way down. I try and go down even further."], [740, "Angled or standing calf raises are great sets, reps and all that business is in chapter 2."]]}, {"s": 746, "e": 815, "t": "Standing Calf Raise, single-leg with a dumbbell", "ex": ["calf-raise"], "c": "https://www.youtube.com/watch?v=CbEFgDFQBvk&t=746s", "sum": "Done on a step that isn't slippery, holding something lightly for balance. Very strong calves may outlast grip strength.", "hl": [], "tr": [[746, "Another great movement is the <a class=\"exref\" href=\"#ex-calf-raise\">single legged calf raise</a> holding a <a class=\"eqref\" href=\"#eq-dumbbell\" title=\"Equipment: Dumbbell\">dumbbell</a> for some added resistance. You can do it on a step. Just be sure it's not slippery."], [754, "You don't want to slip off, especially while you're in that calf stretch position while holding a weight. Most people, including me, like to have something to hold on to just lightly for balance."], [764, "So I'm just I'm not gripping it tight and pulling myself up, but I just have something to lean on. Get the stretch into that calf. Up, up, to contract the calf. Down, down, down, down."], [783, "If you're really, really strong in the calves, you may find that your grip is going to be limiting because you're trying to hold on to some, you know, outrageously heavy dumbbell while doing calf raises."], [793, "But most people find they can-- with proper focus on the muscle, they can target them without having to use excessively heavy weights. Certainly not weights that make their grip the weak point."], [801, "But again, standing calf raise, <del title=\"Caption said\">angle, calf raise</del> <ins title=\"Correction\">angled calf raise</ins>, seated calf raise as well as the dumbbell, single legged calf dumbbell holding a dumbbell, single legged calf raise. I don't know a better name for it."], [812, "Are all terrific keep in mind those are all isolation movements."]]}]}, "d4": {"yt": "UEU6NYLRi6o", "day": "D4", "title": "Day 4: Major Torso Muscles", "ch": [{"s": 0, "e": 7, "t": "Torso day overview", "ex": [], "c": "https://www.youtube.com/watch?v=UEU6NYLRi6o&t=0s", "sum": "", "hl": [], "tr": [[0, "OK, torso day in chapter 2. What it really means is chest and back, abdominals and neck."]]}, {"s": 7, "e": 68, "t": "Barbell Bench Press", "ex": ["bench"], "c": "https://www.youtube.com/watch?v=UEU6NYLRi6o&t=7s", "sum": "Compound movement for the chest that also works the front and side deltoids and the triceps. Grip just outside shoulder width, lower the bar slowly to the chest, press up.", "hl": [], "tr": [[7, "Compound movements for chest are what we're going to cover first. It's going to be the shoulder joint. It's going to move the elbow joint <a class=\"exref\" href=\"#ex-bench\">bench press</a>. The bench press setup is going to differ depending on where you're training."], [16, "This movement is straightforward. Obviously you need to select a weight that's right for you. This isn't a work set, nor are we emphasizing weight sets and reps here. That's all in chapter 2. I use just outside of shoulder width grip."], [34, "Take the bar off the rack, get nice and stable, lower the bar relatively slowly, touch my chest and push it up and repeat until I would do that for a work set with the appropriate amount of weight until I hit failure in the <del title=\"Caption said\">rev</del> <ins title=\"Correction\">rep</ins> range I'm trying to target, and then I'd rack it."], [53, "But that's essentially the movement, the bench press. And of course, it targets the pectoralis muscles. But of course, it's a compound movement. So it's also involving the front and side deltoids and the triceps."], [65, "When you do this compound movement for the chest."]]}, {"s": 68, "e": 125, "t": "Dumbbell Bench Press", "ex": ["dumbbell-bench-press"], "c": "https://www.youtube.com/watch?v=UEU6NYLRi6o&t=68s", "sum": "Dumbbells can be dropped to the side if a rep fails; getting into position with a knee kick-up takes care.", "hl": [], "tr": [[68, "Some people either have to because they don't have access to a <a class=\"eqref\" href=\"#eq-barbell\" title=\"Equipment: Barbell\">barbell bench press setup</a>, or prefer to use <a class=\"exref\" href=\"#ex-dumbbell-bench-press\">dumbbells for the bench press</a>. The advantage of <a class=\"eqref\" href=\"#eq-dumbbell\" title=\"Equipment: Dumbbell\">dumbbells</a> is if you get stuck, you can just drop them or set them to the side."], [82, "The disadvantage is there's some additional work in getting yourself into position properly. So perhaps the easiest way to do it is to lift them to your knees and then sort of lean back."], [94, "You want to make sure you're gripping them, kick them up to your shoulders so not quite leaning back all at once, not kicking them into my face like so. And I'm keeping <del title=\"Caption said\">the real</del> <ins title=\"Correction\">them really</ins> close to my body."], [105, "I feel most comfortable with my arm length, arm lengths and <del title=\"Caption said\">kinetics</del> <ins title=\"Correction\">kinematics</ins> bringing the weights to approximately here. But you know, some people like to bring them out further from the body. Some people like to, you know, rotate them."], [118, "You're just going to have to experiment with weights that are relatively light for you to figure out what works best to target the pectoralis muscles."]]}, {"s": 125, "e": 195, "t": "Incline Bench Press", "ex": ["incline-bench"], "c": "https://www.youtube.com/watch?v=UEU6NYLRi6o&t=125s", "sum": "Barbell or dumbbell; shifts work toward the upper chest and front deltoids. Dumbbells allow a deeper stretch at the bottom.", "hl": [{"s": 125, "q": "OK, another great compound movement for the chest muscles is the low incline or incline bench press, which targets more of the upper chest region and a bit more of the front deltoids. This movement is very similar to the flat bench press. And the basic movement is similar, except your back is at an angle. So you unpack it, lower it under control, touch it to your upper chest region and press up. And then you do the number of-- most number of reps you could do under control, while focusing your mental attention on your pecs and driving it away from your chest. Incline bench press.", "u": "https://read.readwise.io/read/01m72ncsdbepa5r0m8sqzq1kbe"}], "tr": [[125, "OK, another great compound movement for the chest muscles is the <a class=\"exref\" href=\"#ex-incline-bench\">low incline or incline bench press</a>, which targets more of the upper chest region and a bit more of the front deltoids. This movement is very similar to the flat <a class=\"exref\" href=\"#ex-bench\">bench press</a>."], [139, "And the basic movement is similar, except your back is at an angle. So you <del title=\"Caption said\">unpack</del> <ins title=\"Correction\">unrack</ins> it, lower it under control, touch it to your upper chest region and press up."], [160, "And then you do the number of-- most number of reps you could do under control, while focusing your mental attention on your pecs and driving it away from your chest. Incline bench press. And you can use <a class=\"eqref\" href=\"#eq-dumbbell\" title=\"Equipment: Dumbbell\">dumbbells</a>. And a lot of people prefer to do it."], [176, "You really can get a nice stretch on the chest from the bottom position. Press them up, almost touch them. Some people will turn them to get a better contraction on the chest."], [186, "It's, you know, a <ins title=\"Word the captions dropped\">lot</ins> of that is going to be how it feels to you as you do the movement. OK, so tons and tons of compound movement, bench press variations."]]}, {"s": 195, "e": 260, "t": "Dip", "ex": ["dip"], "c": "https://www.youtube.com/watch?v=UEU6NYLRi6o&t=195s", "sum": "Lean forward somewhat to work the chest, front and side shoulders, and triceps. Add weight, such as a dumbbell held between the feet, once 10 to 15 bodyweight reps come easily. Huberman calls weighted dips an upper body squat.", "hl": [{"s": 195, "q": "the other classic in my mind, critical one that&#x27;s also very useful for a number of other reasons is the dip. Once you&#x27;re at the top, then I like to bend my knees lower, press up, leaning forward somewhat to target the lower pack and mid pack shoulders front of the shoulder, side of the shoulder and triceps, of course. I really like this movement. Once you can hit 12 to 15 repetitions with body weight or maybe even 10, you could add weight. So that you hit failure earlier between six and eight repetitions. Let&#x27;s say you do that by holding a dumbbell between your feet. It&#x27;s the easiest one to set up for, but I find it to be the most awkward one. Well, it&#x27;s to do like so. So you could do it like so. Some people, including myself, refer to it as kind of an upper body squat, especially when done weighted because it works so many muscles. You also have to tighten your core. It&#x27;s a great movement. L", "u": "https://read.readwise.io/read/01m72new6kt2g9vk2btdwc6dp0"}], "tr": [[195, "I would say the other classic in my mind, critical one that's also very useful for a number of other reasons is <a class=\"exref\" href=\"#ex-dip\">the dip</a>."], [202, "Once you're at the top, then I like to bend my knees lower, press up, leaning forward somewhat to target the lower <del title=\"Caption said\">pack</del> <ins title=\"Correction\">pecs</ins> and mid <del title=\"Caption said\">pack</del> <ins title=\"Correction\">pecs</ins> shoulders front of the shoulder, side of the shoulder and triceps, of course."], [221, "I really like this movement. Once you can hit 12 to 15 repetitions with body weight or maybe even 10, you could add weight. So that you hit failure earlier between six and eight repetitions. Let's say you do that by holding a <a class=\"eqref\" href=\"#eq-dumbbell\" title=\"Equipment: Dumbbell\">dumbbell</a> between your feet."], [239, "It's the easiest one to set up for, but I find it to be the most awkward one. Well, it's to do like so. So you could do it like so."], [250, "Some people, including myself, refer to it as kind of an upper body squat, especially when done weighted because it works so many muscles. You also have to tighten your core. It's a great movement."]]}, {"s": 260, "e": 291, "t": "Dumbbell Fly", "ex": ["dumbbell-fly"], "c": "https://www.youtube.com/watch?v=UEU6NYLRi6o&t=260s", "sum": "Slight-incline dumbbell flies with a fixed bend in the elbows. Resistance fades at the top of the movement.", "hl": [], "tr": [[260, "Let's talk about isolation movements for the pectoralis muscles or the chest. So these would be <a class=\"exref\" href=\"#ex-dumbbell-fly\">dumbbell slight incline flies</a>. You can do this on a <a class=\"eqref\" href=\"#eq-weight-bench\" title=\"Equipment: Weight Bench\">flat bench</a>, you could do it on a decline bench. It almost looks like you're going to start a <a class=\"exref\" href=\"#ex-bench\">bench press</a>."], [273, "But keep a slight bend in the elbows and you're going to get a stretch on the chest. You'll notice there's only one joint moving. Even though my elbows are slightly bent, they're not moving through the exercise."], [285, "But frankly, because there isn't any resistance at the top of the movement, just at the bottom, in the middle, that's why a lot of people will <a class=\"exref\" href=\"#ex-cable-fly\">use cables</a>."]]}, {"s": 291, "e": 335, "t": "Cable Fly", "ex": ["cable-fly"], "c": "https://www.youtube.com/watch?v=UEU6NYLRi6o&t=291s", "sum": "Cables or a fly machine keep resistance through the whole movement. Two to three work sets of 6 to 15 reps. Stand up before re-racking a weight rather than straining to set it down.", "hl": [], "tr": [[292, "They'll grab onto a <a class=\"eqref\" href=\"#eq-cable-machine\" title=\"Equipment: Cable Machine\">cable stack</a> and they'll do this kind of thing. And then, of course, there are a <a class=\"eqref\" href=\"#eq-chest-fly-machine\" title=\"Equipment: Chest Fly Machine\">lot of machines in gyms</a>, and this one provides resistance throughout the movement."], [301, "So you would do your appropriate number of sets and reps, which, again, is probably somewhere between two and three work sets. Since it's an isolation movement, probably six to 15 repetitions before hitting failure. A lot of people hurt themselves."], [322, "Re-racking weights. I talk about this in the book, so be careful as you rack things. Stand up, set it down. There's no shame in that."], [329, "In fact, there's a lot of glory in being the person that isn't complaining about some injury that they got doing something really silly."]]}, {"s": 335, "e": 373, "t": "Back overview", "ex": [], "c": "https://www.youtube.com/watch?v=UEU6NYLRi6o&t=335s", "sum": "Lats, traps, and lower back. Two or three exercises, each with two or three work sets taken to failure.", "hl": [], "tr": [[335, "OK, so next on torso day is you're going to train your back. Back includes a lot of muscles. You do have the lat muscles, you also have the upper traps, middle traps are kind of this kite shaped muscle. Through the middle of the back, you have your lower back."], [349, "So typically, it's going to be two or three exercises to target all of those things. That's good enough for most people. And two or three work sets taken to failure for each of those, as mentioned in chapter 2."], [361, "Compound exercises for the lats are many, many, many. But they have two sort of broad distinctions, I would say pull downs and chins and rowing type movements."]]}, {"s": 373, "e": 416, "t": "Pull-Up", "ex": ["pull-up"], "c": "https://www.youtube.com/watch?v=UEU6NYLRi6o&t=373s", "sum": "Palms facing away. Think of driving the elbows back, as if elbowing someone behind you, and bring the chest toward the bar. Add weight once 10 to 12 good-form reps are possible.", "hl": [{"s": 373, "q": "So we&#x27;ll start with pull down, pull up type variations. Typically it&#x27;s palms facing away and you grip the bar and rather than pull yourself up with your arms, it&#x27;s very, very helpful because the lats are much bigger muscles than the bicep muscles. And everybody to think about elbowing someone behind you. And ideally you would touch your chest to the bar or come close to it, but at least clear your chin of the bar. So from a dead hang you would pull, pull, pull, pull, pull, pull, pull, and then lower under control like so. Like so. I think if you can do 10 to 12 pull ups in good form without hitting failure, then you can think about starting to add weight.", "u": "https://read.readwise.io/read/01m72np8fjvfw1svpzzvepm2qd"}], "tr": [[373, "So we'll start with pull down, <a class=\"exref\" href=\"#ex-pull-up\">pull up</a> type variations. Typically it's palms facing away and you grip the bar and rather than pull yourself up with your arms, it's very, very helpful because the lats are much bigger muscles than the bicep muscles."], [390, "And everybody to think about elbowing someone behind you. And ideally you would touch your chest to the bar or come close to it, but at least <a class=\"eqref\" href=\"#eq-pull-up-bar\" title=\"Equipment: Pull-Up Bar\">clear your chin of the bar</a>."], [397, "So from a dead hang you would pull, pull, pull, pull, pull, pull, pull, and then lower under control like so. Like so. I think if you can do 10 to 12 pull ups in good form without hitting failure, then you can think about starting to add weight."]]}, {"s": 416, "e": 463, "t": "Lat Pulldown", "ex": ["lat-pulldown"], "c": "https://www.youtube.com/watch?v=UEU6NYLRi6o&t=416s", "sum": "For anyone not yet strong enough for pull-ups. Huberman prefers an underhand, close grip, pulling to just below the chest line.", "hl": [{"s": 420, "q": "The pull down variation I like a lot is the underhand, relatively close grip. Obviously you set the weight to where it&#x27;s appropriate for your work set. You get a nice stretch on your lats here. And again, you think about elbowing someone behind you. Not necessarily fast, by the way. You&#x27;re going to lower it to just below your peck line or so, you can get a really strong contraction of the lats. If you think about touching your elbows behind your back, you actually can contract them even harder. The mental focus is really the key. Even though it looks like a curl with a cable, it&#x27;s the back muscles that are doing the majority of the work. And then when you hit failure, just stand up to set it down.", "u": "https://read.readwise.io/read/01m72nqya7rrw2a62xhe1m4k78"}], "tr": [[416, "If you're not strong enough to do <a class=\"exref\" href=\"#ex-pull-up\">pull ups</a>, I suggest you do pull downs. The <a class=\"exref\" href=\"#ex-lat-pulldown\">pull down variation</a> I like a lot is the underhand, relatively close grip. Obviously you set the weight to where it's appropriate for your work set."], [433, "You get a nice stretch on your lats here. And again, you think about elbowing someone behind you. Not necessarily fast, by the way. You're going to lower it to just below your <del title=\"Caption said\">peck</del> <ins title=\"Correction\">pec</ins> line or so, you can get a really strong contraction of the lats."], [446, "If you think about touching your elbows behind your back, you actually can contract them even harder. The mental focus is really the key. Even though it looks like a <a class=\"eqref\" href=\"#eq-lat-pulldown-machine\" title=\"Equipment: Lat Pulldown Machine\">curl with a cable</a>, it's the back muscles that are doing the majority of the work."], [459, "And then when you hit failure, just stand up to set it down."]]}, {"s": 463, "e": 568, "t": "Dumbbell Row", "ex": ["dumbbell-row"], "c": "https://www.youtube.com/watch?v=UEU6NYLRi6o&t=463s", "sum": "Brace the core, lift the weight slightly to find the target muscle, row, and set the weight down rather than dropping it. Barbell and machine rows also work. Huberman shows no back isolation movements; compound pulls and rows with progressive overload are enough.", "hl": [], "tr": [[463, "And then that way, keeping a tiny bit of bend in your elbows, you'll protect your elbows. Next would be rowing movements. The classic one is that's available in pretty much every gym, even hotel gyms, it is the <a class=\"exref\" href=\"#ex-dumbbell-row\">dumbbell row</a>."], [479, "You do want to brace your core again. You'll notice a theme here raising the weight off the ground a little bit, finding the muscle that you're trying to target mentally and engaging it physically."], [489, "And then doing the row and keeping the tension on that muscle and then set down, not drop it down. Don't want to be that guy. And then you'd do a bit of rest and then the opposite side. OK. The leg on the side that's rowing is back."], [508, "And again make sure that you're bracing everything. And again, so many other movements you could do. <a class=\"eqref\" href=\"#eq-barbell\" title=\"Equipment: Barbell\">Barbell</a> rows with classic underhand grip."], [518, "Barbell rows, there's many machine row type setups where you put your legs out in front and machine row if you have access to them, see if those work for you. But you really can't go wrong with pull up variations or pull down variations and <a class=\"eqref\" href=\"#eq-dumbbell\" title=\"Equipment: Dumbbell\">dumbbell</a> rows."], [534, "It's actually very hard to isolate the lats. I wouldn't worry about it, I would just do compound movements for your back and you'll be just fine. If you do have access to a pullover machine, great."], [543, "Some people will try using dumbbell pullovers lying on a bench. The problem there's no resistance at the top, and getting that right without putting undue stress on the shoulder can be tricky."], [553, "But if you're interested in that, there are a lot of YouTube videos on how you could do that. So back is one of the movements where I'm not going to show you any isolation movements."], [560, "I know you'll do just fine with pull downs or <a class=\"exref\" href=\"#ex-pull-up\">pull ups</a> of some sort, and some sort of rowing movement. With progressive overload, your back will get plenty strong."]]}, {"s": 568, "e": 593, "t": "Shrugs, mentioned", "ex": ["shrug"], "c": "https://www.youtube.com/watch?v=UEU6NYLRi6o&t=568s", "sum": "Deadlifts and rows work the traps. Shrugs are optional; people with rounded shoulders may want to skip them.", "hl": [], "tr": [[568, "Some people are probably going to say, well, what about the trap muscles? You're going to get a lot of trap strength and development from deadlifting and from some of the back movements, especially rowing, that we just went through."], [580, "If you want to do some <a class=\"exref\" href=\"#ex-shrug\">shrugs</a> for traps, you can. Many people who have very rounded shoulders probably won't want to, because that rounded shoulder look is not a good one. But some people want more strength in their traps and size in their traps."]], "talk": true}, {"s": 593, "e": 709, "t": "Back Extension", "ex": ["back-ext"], "c": "https://www.youtube.com/watch?v=UEU6NYLRi6o&t=593s", "sum": "Back hyperextensions for the lower back, 8 to 25 controlled reps. Huberman does 100 reps a week.", "hl": [{"s": 605, "q": "One of the best ways to do that is back hyperextensions. You can find these in most gyms, but I&#x27;ll show you a variation that you don&#x27;t even need a piece of equipment for. And these are terrific for strengthening the lower back. Just make sure everything&#x27;s locked in tight. I&#x27;ve seen some gym disasters where people didn&#x27;t check and things slid down quickly. Because you essentially put your achilles against those pads there, you lower down, almost like you&#x27;re going to do a toe touch. Then you lift up using the spinal erector muscles. And you would do that for anywhere from 8 to 25 repetitions under control. You could add weight by holding on to a light plate or dumbbell, working up or attaching a band. Any number of different variations it is important to get those muscles strong and keep them strong for posture, for longevity, for overall strength, even for running, et cetera. Really terrific and important to train your lower back.", "u": "https://read.readwise.io/read/01m72nxxkxpzrffhxy0zjzqx96"}, {"s": 690, "q": "make it a point to do 100 repetitions a week at 51 years old, I have a healthy lower back. I attribute that a lot of that to the fact that I&#x27;ve always done some back hyperextensions. If I neglect to do them for two weeks or so, then I start getting a little bit of aching when I sit too long and so forth. So great movement all around.", "u": "https://read.readwise.io/read/01m72p02zkykvfbvybytt7cc4v"}], "tr": [[593, "And you could hold on to some <a class=\"eqref\" href=\"#eq-dumbbell\" title=\"Equipment: Dumbbell\">dumbbells</a> or a <a class=\"eqref\" href=\"#eq-barbell\" title=\"Equipment: Barbell\">barbell</a> and do <a class=\"exref\" href=\"#ex-shrug\">shrugs</a>. OK, what about lower back? You're going to get some indirect targeting of lower back for your compound movements on leg day. I do suggest training your lower back a bit."], [605, "One of the best ways to do that is <a class=\"exref\" href=\"#ex-back-ext\">back hyperextensions</a>. You can find these in most gyms, but I'll show you a variation that you don't even need a piece of equipment for. And these are terrific for strengthening the lower back."], [616, "Just make sure everything's locked in tight. I've seen some gym disasters where people didn't check and things slid down quickly. Because you essentially put your achilles against those pads there, you lower down, almost like you're going to do a toe touch."], [631, "Then you lift up using the spinal erector muscles. And you would do that for anywhere from 8 to 25 repetitions under control. You could add weight by holding on to a light plate or dumbbell, working up or attaching a band."], [648, "Any number of different variations it is important to get those muscles strong and keep them strong for posture, for longevity, for overall strength, even for running, et cetera. Really terrific and important to train your lower back."], [662, "If you don't have access to <a class=\"eqref\" href=\"#eq-back-extension-bench\" title=\"Equipment: Back Extension Bench\">a machine like this</a>, you could find some sort of high countertop. <a class=\"eqref\" href=\"#eq-reverse-hyperextension-machine\" title=\"Equipment: Reverse Hyperextension Machine\">This</a> is actually designed to train the similar muscles, but most people are not going to have access to one of these."], [674, "But you probably could find a high countertop or even mid height countertop, and you would hold on to the countertop like so and lift your legs. This way will also accomplish lower back strengthening."], [690, "I make it a point to do 100 repetitions a week at 51 years old, I have a healthy lower back. I attribute that a lot of that to the fact that I've always done some back hyperextensions."], [702, "If I neglect to do them for two weeks or so, then I start getting a little bit of aching when I sit too long and so forth. So great movement all around."]]}, {"s": 709, "e": 821, "t": "Hanging Leg Raise", "ex": ["hanging-leg-raise"], "c": "https://www.youtube.com/watch?v=UEU6NYLRi6o&t=709s", "sum": "A hanging progression that trains abs and grip together: knee raises, then L-sits, then full pikes, working toward three sets of five pikes.", "hl": [{"s": 716, "q": "One thing that&#x27;s very effective for training abs and grip at the same time is at the end of your torso day, you hang from a bar and you just do a few sets of abs by starting with. I recommend just trying to get to this progression. I talk about this in chapter 2, where you do five or six repetitions of just raising your knees at 90 degrees. So that your thighs are parallel to the floor. And that would just be one warm up set. You could do three sets of those. And then next time try and do progress. But if you can-- if you find that it&#x27;s already too easy to do those, I recommend doing something like raising your thighs and doing an l-sit like so. And seeing if you can get five repetitions of these. And by the way, if they look really hard, they&#x27;re always hard when you first start trying them. But everyone I know male, female, young and old has worked through these progressions really quickly. So that by the end of four to six workouts of doing them, they find it very easy to do the final thing, which is a pike where you bring your legs up. Really trains your core and your grip, it takes basically no time as compared to doing lots of crunches or something. The goal is to get three sets of five repetitions of full pikes. Your core will be very, very strong and that will serve you on all the other lifts. For stability, for safety, for posture. Having a strong core is really important functionally and for safety reasons. So the goal is ultimately that the pike looks something like this where you pike your legs up because really all it is a knee raise an l-sit, and this. That&#x27;s the progression.", "u": "https://read.readwise.io/read/01m72p25a57e897h5ecrycpb4d"}], "tr": [[709, "On torso day, I recommend people train their core. Your core region includes the abs and muscles around and underneath them."], [716, "One thing that's very effective for training abs and grip at the same time is at the end of your torso day, you <a class=\"eqref\" href=\"#eq-pull-up-bar\" title=\"Equipment: Pull-Up Bar\">hang from a bar</a> and you just do a few sets of abs by starting with. I recommend just trying to get to this progression."], [730, "I talk about this in chapter 2, where you do five or six repetitions of just <a class=\"exref\" href=\"#ex-hanging-leg-raise\">raising your knees</a> at 90 degrees. So that your thighs are parallel to the floor. And that would just be one warm up set. You could do three sets of those."], [744, "And then next time try and do progress. But if you can-- if you find that it's already too easy to do those, I recommend doing something like raising your thighs and doing an l-sit like so. And seeing if you can get five repetitions of these."], [759, "And by the way, if they look really hard, they're always hard when you first start trying them. But everyone I know male, female, young and old has worked through these progressions really quickly."], [771, "So that by the end of four to six workouts of doing them, they find it very easy to do the final thing, which is a pike where you bring your legs up."], [780, "Really trains your core and your grip, it takes basically no time as compared to doing lots of crunches or something. The goal is to get three sets of five repetitions of full pikes."], [793, "Your core will be very, very strong and that will serve you on all the other lifts. For stability, for safety, for posture. Having a strong core is really important functionally and for safety reasons."], [804, "So the goal is ultimately that the pike looks something like this where you pike your legs up because really all it is a knee raise an l-sit, and this. That's the progression. I find these to be immensely useful for strengthening the core and grip all at once."]]}, {"s": 821, "e": 843, "t": "Neck training, pointer to another video", "ex": [], "c": "https://www.youtube.com/watch?v=UEU6NYLRi6o&t=821s", "sum": "Huberman points to <ins title=\"Word the captions dropped\">[Person/Andrew Huberman/Book/26/Protocols/YouTube/16/11/Neck Exercises that Kill Your Neck</ins>] for neck training.", "hl": [], "tr": [[821, "That's torso day, chest, back, core, neck. Is important for people to train, especially men and to some extent women too. For strength reasons, some men might actually want a larger neck, maybe even some women too."], [836, "And I put a link to the best and safest way to train your neck below, and next is shoulders and arms."]], "talk": true}]}, "d7": {"yt": "IzpGEk-2th4", "day": "D7", "title": "Day 7: Shoulders and Arms", "ch": [{"s": 0, "e": 11, "t": "Shoulders and arms overview", "ex": [], "c": "https://www.youtube.com/watch?v=IzpGEk-2th4&t=0s", "sum": "", "hl": [], "tr": [[0, "So the resistance training program in chapter 2 also includes a day called shoulders and arms, which is really shoulders, biceps and triceps. And again, we have compound exercises and isolation exercises."]]}, {"s": 11, "e": 52, "t": "Overhead Press", "ex": ["ohp"], "c": "https://www.youtube.com/watch?v=IzpGEk-2th4&t=11s", "sum": "Barbell version. Huberman uses a full range of motion rather than stopping with the elbows at 90 degrees.", "hl": [{"s": 22, "q": "Overhead shoulder press with a barbell, as the name implies, you unrack it, press overhead, lower it, make sure you get your head out of the way while you lower it. Seriously, I&#x27;ve seen people drop on the top of their head, press up, down, up, and so forth. Some people will take it just to where the elbows are at 90 degrees, and then up. For me, that&#x27;s a partial repetition. I prefer to do a full range of motion this way. And then eventually I&#x27;ll hit failure, usually somewhere around here, and then I&#x27;ll re-rack it. The same movement, of course, can be done as I mentioned, with dumbbells.", "u": "https://read.readwise.io/read/01m7a521mxwseq5t26sgyv6yak"}], "tr": [[11, "And perhaps the most basic compound exercise for the shoulders, which is really referring to the deltoids, is the <a class=\"exref\" href=\"#ex-ohp\">overhead press</a>. Which can be done with a <a class=\"eqref\" href=\"#eq-barbell\" title=\"Equipment: Barbell\">barbell</a>-- so barbell overhead press or with <a class=\"eqref\" href=\"#eq-dumbbell\" title=\"Equipment: Dumbbell\">dumbbells</a>."], [22, "Overhead shoulder press with a barbell, as the name implies you, unrack it, press overhead, lower it, make sure you get your head out of the way while you lower it. Seriously, I've seen people drop on the top of their head, press up, down, up, and so forth."], [39, "Some people will take it just to where the elbows are at 90 degrees, and then up. For me, that's a partial repetition. I prefer to do a full range of motion this way."], [47, "And then eventually I'll hit failure, usually somewhere around here, and then I'll re-rack it."]]}, {"s": 52, "e": 105, "t": "Dumbbell Overhead Press", "ex": ["dumbbell-overhead-press"], "c": "https://www.youtube.com/watch?v=IzpGEk-2th4&t=52s", "sum": "Lift the dumbbells off the floor with bent knees, as in a deadlift. Seated on a flat bench or with back support.", "hl": [], "tr": [[52, "The same movement, of course, can be done as I mentioned, with <a class=\"eqref\" href=\"#eq-dumbbell\" title=\"Equipment: Dumbbell\">dumbbells</a>. You have to be thoughtful, if not careful, about getting the dumbbells up to your shoulders. You don't want to just yank them off the floor."], [64, "You want to bend your knees, and you're essentially <del title=\"Caption said\">dead, lifting</del> <ins title=\"Correction\">deadlifting</ins> them off the floor. If they're light enough for you to swing up to your shoulders, like so, you could <a class=\"exref\" href=\"#ex-dumbbell-overhead-press\">overhead press them</a> like this. Right like this."], [80, "And then you'd have to carefully set them back down. So you could do this with a <a class=\"eqref\" href=\"#eq-weight-bench\" title=\"Equipment: Weight Bench\">flat bench</a> like so, or you could do it with a-- you could do a back supported."], [89, "So in this case, you're going to kick it up to your shoulders, and plant your feet strong and press overhead. Lower them, press overhead like so, until you would reach failure on your work sets. And then you'd let them drop to your knees."]]}, {"s": 105, "e": 142, "t": "Machine variations, and why he prefers free weights", "ex": ["machine-shoulder-press"], "c": "https://www.youtube.com/watch?v=IzpGEk-2th4&t=105s", "sum": "Machine variations of the overhead press, still compound movements. Huberman favors barbells and dumbbells because balancing the weight takes extra coordination.", "hl": [], "tr": [[105, "If you're a good citizen, you re-rack your weights. OK, so those are compound movements for the shoulders. There are a lot of <a class=\"exref\" href=\"#ex-machine-shoulder-press\">machine variations</a> on these."], [114, "I personally believe that doing compound lifts with barbells and with <a class=\"eqref\" href=\"#eq-dumbbell\" title=\"Equipment: Dumbbell\">dumbbells</a>, where the balance has not <ins title=\"Word the captions dropped\">been</ins> taken over by the machine, right, can be very beneficial. Some additional coordination is required and so forth."], [128, "But some people really like the machine variations on them, so you'll have to explore and see what works best for you."], [133, "They still qualify as compound movements targeting the shoulders, meaning primarily the anterior, and what people typically call the side <del title=\"Caption said\">belt</del> <ins title=\"Correction\">delt</ins>."]], "talk": true}, {"s": 142, "e": 185, "t": "Lateral Raise", "ex": ["lateral-raise"], "c": "https://www.youtube.com/watch?v=IzpGEk-2th4&t=142s", "sum": "Light dumbbells, sometimes as little as 5 pounds, raised under control with thumbs level with or higher than the pinkies, slightly in front of the body.", "hl": [], "tr": [[142, "OK, let's talk isolation exercises for the shoulders. You have a front or anterior side and a rear delt. Make sure you're doing some work for your rear deltoids, we'll do that in a moment."], [152, "But if you wanted to target your side deltoids for more, sort of, width that rounding of the shoulders."], [158, "Most people will have to use a relatively light <a class=\"eqref\" href=\"#eq-dumbbell\" title=\"Equipment: Dumbbell\">dumbbells</a>, maybe even as little as 5 pounds, to <ins title=\"Word the captions dropped\">make</ins> sure you're doing them under control and you're raising them up and in front of you."], [165, "The best targeting of these muscles is often by keeping your thumbs a little bit higher, or level with your pinkies and bring them out. You'll notice they're a little bit in front of my body. But you have to experiment for you."], [177, "Some people find that straight out to the side, targets those muscles best, other people in front of their body a little bit. You have to find what targets those side delts best."]]}, {"s": 185, "e": 200, "t": "Front raise, mentioned", "ex": ["front-raise"], "c": "https://www.youtube.com/watch?v=IzpGEk-2th4&t=185s", "sum": "With dumbbells or cables, if the bench and shoulder presses don't develop the front deltoids enough.", "hl": [], "tr": [[185, "And if you need anterior delt development, you're not getting enough from your bench presses, your Shoulder presses, you could do <a class=\"exref\" href=\"#ex-front-raise\">front raises</a> with <a class=\"eqref\" href=\"#eq-dumbbell\" title=\"Equipment: Dumbbell\">dumbbells</a> or with cables as well."], [195, "Keep in mind when you train your back, when you're doing your pulling, you get some indirect targeting of those rear delts."]], "talk": true}, {"s": 200, "e": 284, "t": "Rear Delt Fly", "ex": ["rear-delt-fly"], "c": "https://www.youtube.com/watch?v=IzpGEk-2th4&t=200s", "sum": "Bent-over dumbbell fly, or a cable or machine version. Back training works the rear deltoids only indirectly.", "hl": [], "tr": [[200, "But in my mind, the two best ways to target the rear delts these would be isolation exercises, of course, the <a class=\"exref\" href=\"#ex-rear-delt-fly\">bent over rear delt fly</a>. Most people will opt to take a little wider than shoulder width stance."], [213, "The movement is only at the shoulder if done properly and raising up like so. The rear delt muscles will, you know, golf ball-sized muscle for most people back here. And it makes your default posture more like so than like so."], [230, "If you have access to a rear delt fly machine or a <a class=\"eqref\" href=\"#eq-cable-machine\" title=\"Equipment: Cable Machine\">cable machine</a>, you can find these in most gyms, but if you can't do the <a class=\"eqref\" href=\"#eq-dumbbell\" title=\"Equipment: Dumbbell\">dumbbell</a> or a cable variation. And here you face inward, obviously."], [243, "The elbows are bent, but they're not going to move during the movement, the only thing that moves is the shoulders. And try not to point your chin out or your cranium chin. Keep your sternum relatively high, you'll feel a nice contraction on the rear delts."], [260, "Like so, and you would do your work set to failure. That's not what this is now, but that's what you would do. And then do progressive overload. And again, none of this-- you don't want to hear yourself dropping the weight each time."], [271, "You want to keep the continuous tension squeeze and lower and that's your rear delt training. That takes care of that very important muscle back there for safety, stability, aesthetics, and on and on and on."]]}, {"s": 284, "e": 376, "t": "Biceps Curl", "ex": ["curl"], "c": "https://www.youtube.com/watch?v=IzpGEk-2th4&t=284s", "sum": "The biceps flex the elbow, turn the palm up (supination), and lift the shoulder slightly. Dumbbells allow all three; curl both arms at once or alternate. Barbell and EZ-bar curls are other options.", "hl": [], "tr": [[284, "Let's talk about biceps and triceps. The biceps actually have multiple functions, but the primary one is to bring the wrist toward the shoulder, like contract the biceps. But the other one, it's called supinate or turn the pinky out this way."], [300, "OK, that's the other thing that contracts the biceps further. And the other one is to slightly lift the shoulder, think pinkies higher than thumbs. And that can be accomplished with a <a class=\"eqref\" href=\"#eq-barbell\" title=\"Equipment: Barbell\">barbell</a>."], [311, "You could imagine getting all three of those movements, of bringing the wrist toward the shoulder, right? And lifting the shoulder a little bit, but then it's hard you can't turn the bar, right?"], [323, "But with <a class=\"eqref\" href=\"#eq-dumbbell\" title=\"Equipment: Dumbbell\">dumbbells</a>, you can really get all three of those movements. Bring the wrist toward the shoulder to supinate."], [334, "Get that pinky, think higher or sort of away from the midline, this is your midline, the center of your body, away from the midline and then the shoulder lifts a little bit. So some people will opt to do this, right?"], [345, "Other people will opt to do them alternating, like so. Makes it, in my opinion, easier to contract the muscle really hard, which is what you want. The downside is the other one is typically resting while you're doing this one, right."], [358, "it's hanging there passively. So, any number of these different variations will work. Straight bar, curly bar, what's called the <del title=\"Caption said\">easy bar</del> <ins title=\"Correction\">EZ bar</ins>, thick bar, thin bar, tons of variations. Most people, it seems, end up doing <a class=\"exref\" href=\"#ex-curl\">bicep curls</a> with dumbbells."]]}, {"s": 376, "e": 426, "t": "Preacher Curl", "ex": ["preacher-curl"], "c": "https://www.youtube.com/watch?v=IzpGEk-2th4&t=376s", "sum": "Machine version; only the elbow bends. At failure, stand up and set the weight down instead of letting the arm drop straight.", "hl": [], "tr": [[376, "So this is a so-called <a class=\"eqref\" href=\"#eq-preacher-curl-machine\" title=\"Equipment: Preacher Curl Machine\">preacher curl machine</a>. It's an isolation movement because the only joint that moves is going to be the elbow joint. You would lift the weight just a tiny bit, that's always the starting position."], [387, "That's what's going to be safest because, you know you have it under control. And then you would go through your repetitions until you reach failure. This obviously isn't the work set."], [397, "One important point is, let's say you get to here and you cannot move the weight anymore, some people will just let the weight drop back like so by straightening their arm all the way out. You can really strain something or even tear a bicep."], [411, "I've seen that there are plenty of videos of that online. Better to just stand up out of the chair, set it down, save that last centimeter of that rep for someone else. You're not doing yourself any disservice."], [423, "In fact, you're just protecting yourself against injury."]]}, {"s": 426, "e": 460, "t": "Triceps overview", "ex": [], "c": "https://www.youtube.com/watch?v=IzpGEk-2th4&t=426s", "sum": "Dips on torso day already work the triceps, so shoulders and arms day adds only a little direct work.", "hl": [], "tr": [[426, "Arms day, of course, includes training your triceps, which as the name suggests, has three different heads. So for me, <a class=\"exref\" href=\"#ex-dip\">the dips</a> that I do on chest and back day leave my triceps feeling like they've done some real work."], [440, "So when I come around to shoulders and arms day, I'm really trying to target the triceps directly, but I don't need to do too much more. Some people may need much more tricep development."], [450, "There are two ways that I tend to target the triceps, one is a compound movement, one is an isolation movement. Keep in mind there are lots of different ways that you could do what I'm going to describe."]]}, {"s": 460, "e": 523, "t": "Overhead Cable Triceps Extension", "ex": ["overhead-cable-triceps-extension"], "c": "https://www.youtube.com/watch?v=IzpGEk-2th4&t=460s", "sum": "The compound triceps movement, with the cable set above and behind. Usually three sets to or near failure.", "hl": [], "tr": [[460, "But the first one, the compound movement, is an overhead movement where <del title=\"Caption said\">there&#x27;s</del> <ins title=\"Correction\">the</ins> long head of the triceps gets a really good stretch."], [465, "If you ever played soccer, think about throwing the soccer ball back into play from the side of the field, this kind of thing. The shoulders are going to move a bit and the elbows a bit, compound movement."], [475, "What I really like is if you have access to a <a class=\"eqref\" href=\"#eq-cable-machine\" title=\"Equipment: Cable Machine\">cable machine</a>, you can set the cable above you and behind you. Depending on how far away I stand from the machine, I can get a nice stretch on that long head of the triceps."], [491, "I'll lock my lat, so I'm in position, lock my core and just-- So the movement looks like it's only at the elbow, but as the set gets harder, I'll allow my shoulders to come back a bit, making sure that I still have a stretch."], [503, "I'm not setting the weight down, that's the weight down. The beginning of the movement is here, so there's a nice stretch on the triceps. So there is some shoulder movement here, so it's a bit of a compound movement."], [513, "And I will take those sets-- usually we'll do three sets to failure or somewhere close to failure in the rep range that I'm trying to target."]]}, {"s": 523, "e": 572, "t": "Triceps Pressdown", "ex": ["pressdown"], "c": "https://www.youtube.com/watch?v=IzpGEk-2th4&t=523s", "sum": "The isolation triceps movement: same cable setup with only the elbows moving, pressing the handles out behind and to the sides. Huberman then names it a pushdown. Two or three sets to failure.", "hl": [], "tr": [[523, "Separately, I'll do an isolation movement using basically the same setup. And here only the elbows are going to move. It's getting into position where the tension is on the muscle I'm trying to target, the triceps."], [537, "And then, taking the handles out behind me and to the sides. I will generally do two or three sets to failure of those as well."], [548, "For me, that accomplishes what I'm trying to accomplish <a class=\"exref\" href=\"#ex-pressdown\">tricep pushdowns</a>, some sort of <a class=\"exref\" href=\"#ex-overhead-cable-triceps-extension\">overhead tricep extension</a>, and then dipping either on your chest and back day, or you could do dips on your shoulders and arms day."], [558, "OK, so that's it for shoulders, biceps, triceps, I wish you the best in your resistance training. Stay safe, but push hard. Find the movements that work for you, and most importantly, have fun training hard. I'm certain the results will come."]]}]}};
const THUMB={};
const RELATED={"rdl": [["d2", 378, "Same hinge pattern as the deadlift"]], "trap-bar": [["d2", 378, "Huberman demonstrates the straight-bar deadlift"]], "seated-row": [["d4", 335, "Back overview"], ["d4", 463, "Rowing movements, machine rows included"]], "cs-row": [["d4", 463, "Huberman shows a one-arm dumbbell row"]], "leg-press": [["d2", 294, "Other compound options for the quads"]], "chest-press": [["d7", 105, "Machine variations of pressing"]], "pallof": [["d4", 709, "Core training on torso day"]], "plank": [["d4", 709, "Core training on torso day"]], "sa-pulldown": [["d4", 463, "Isolating the lats is hard; Huberman sticks to compound pulls"]]};
/* forearm and neck work from the Jeff Cavaliere videos the book points to */
Object.assign(EX,{
  "prone-wrist-curl":{name:"Prone Wrist Curl",kind:"strength",compound:false,rng:[12,30],m:{p:["forearms"],s:[]},
    setup:"Stand facing a low cable pulley or an anchored band and take the handle with the palm facing down and the elbow bent. The handle sits in the palm, away from the fingertips.",
    practice:"Keep the elbow still and push the handle down and away by bending the wrist, letting the handle press deeper into the palm. Return slowly to the start.",
    cues:"The bent elbow takes the biceps out of the movement. Standard wrist curls on a bench let the bar sink into the fingers as you tire, which strains the finger tendons and the inner elbow; this version avoids that.",
    vids:[V("Jeff Cavaliere · prone wrist curl",HV.forearm,97)]},
  "reverse-curl":{name:"Reverse Curl",kind:"strength",compound:false,bar:true,rng:[12,30],m:{p:["forearms"],s:["biceps"]},
    setup:"Stand holding a barbell or EZ bar with an overhand grip about shoulder width apart, arms hanging straight and elbows at your sides.",
    practice:"Bend the elbows to curl the bar up toward the shoulders without letting the elbows drift forward, then lower it under control.",
    cues:"Keep the wrists straight and the bar in the palms; as you tire the bar tends to roll into the fingers. Use a lighter bar than for a biceps curl. In the video it pairs with the reverse wrist roll in a ladder taken to failure.",
    vids:[V("Jeff Cavaliere · reverse curl ladder",HV.forearm,316)]},
  "reverse-wrist-roll":{name:"Reverse Wrist Roll",kind:"strength",compound:false,rng:[12,30],m:{p:["forearms"],s:[]},
    setup:"Stand holding a barbell or wrist-roller handle in front of you with an overhand grip and the arms extended.",
    practice:"Extend one wrist to roll the bar back, then the other, alternating left and right. Standing keeps the hand working against gravity even at full extension.",
    cues:"Keep the elbows still and let only the wrists move. In the video it runs as a ladder with the reverse curl: one second of rolls and one reverse curl, then two and two, then three and three, climbing until failure.",
    vids:[V("Jeff Cavaliere · reverse wrist roll ladder",HV.forearm,316)]},
  "wrist-deviation":{name:"Wrist Deviation",kind:"strength",compound:false,rng:[12,30],m:{p:["forearms"],s:[]},
    setup:"Attach a rope to a cable pulley and take one end in one hand. Stand close to the stack with the arm down at your side.",
    practice:"For ulnar deviation, bend the wrist down toward the little-finger side, slowly and under control. For radial deviation, turn around, take the grip on top, and push down through the little-finger side of the hand so the wrist bends up toward the thumb side.",
    cues:"The range is small; keep the forearm still so only the wrist moves. Work each direction on each arm. A sledgehammer held at the side and lifted forward or backward trains the same motions.",
    vids:[V("Jeff Cavaliere · radial and ulnar deviation",HV.forearm,422)]},
  "forearm-rotation":{name:"Forearm Rotation",kind:"strength",compound:false,rng:[12,30],m:{p:["forearms"],s:[]},
    setup:"Attach a rope to a cable pulley and hold one end so the rope pulls across the hand.",
    practice:"For pronation, start with the palm up and turn the forearm over, pushing the fingers into the rope on every repetition. For supination, take the hand out to the side and turn it so the palm faces back toward the machine. Return slowly each time.",
    cues:"Twirling a dumbbell lets the weight spin the hand, so the forearm falls into each position without resisting it. The rope keeps tension through the whole turn.",
    vids:[V("Jeff Cavaliere · supination and pronation",HV.forearm,558)]},
  "farmers-carry":{name:"Farmer's Carry",kind:"strength",compound:true,m:{p:["forearms","traps"],s:["abs","obliques"]},
    setup:"Pick up a pair of heavy dumbbells with a hip hinge, then stand tall with the weights at your sides and the shoulders pulled back.",
    practice:"Walk at a steady pace with short, even steps, keeping the trunk upright and the weights from swinging. Set the weights down with the same hinge you used to lift them.",
    cues:"Squeeze the handles throughout and keep the shoulders from rounding forward. Use lighter weights or a shorter walk if the grip fails before the posture does. In Jeff Cavaliere's forearm workout, one lap around the gym follows every set of every exercise.",
    vids:[V("Jeff Cavaliere · farmer's carry",HV.forearm,266)]},
  "dead-hang":{name:"Dead Hang",kind:"hold",compound:false,m:{p:["forearms"],s:["lats"]},
    setup:"Grip a pull-up bar overhand about shoulder width apart and lift the feet so the body hangs with the arms straight.",
    practice:"Hold the hang with a firm grip, keeping the bar in the palms. End the set when the grip fails, then step down.",
    cues:"Squeeze hard and keep the bar from sliding into the fingers, which loads the inner elbow. Feet on a box for partial support is an easier version. Jeff Cavaliere gives 1:40 as an average fresh hang and closes his forearm workout aiming for one more minute.",
    vids:[V("Jeff Cavaliere · dead arm hang",HV.forearm,764)]},
  "plate-neck-raise":{name:"Plate Neck Raise",kind:"strength",compound:false,m:{p:["neck"],s:["traps"]},
    setup:"Wrap a weight plate in a towel. For flexion, lie face up with the head over the end of the bench and the plate on the forehead. For extension, lie face down with the plate on the back of the head. For side bending, lie on your side with the plate on the upper side of the head.",
    practice:"Set a chin tuck first. Lower the head toward the floor, then raise it against the plate through a controlled range, holding the plate with one hand. Repeat in each of the four directions.",
    cues:"Progress by adding plate weight; drop repetitions or weight before giving up the chin tuck. The neck moves while the spine is unloaded. Neck bridges on the floor build size but compress the cervical spine while it moves.",
    vids:[V("Jeff Cavaliere · plate neck series",HV.neck,230),V("Jeff Cavaliere · why to skip neck bridges",HV.neck,55)]},
  "chin-tuck":{name:"Chin Tuck",kind:"strength",compound:false,m:{p:["neck"],s:[]},
    setup:"Sit, stand, or lie with the head level and the eyes looking straight ahead.",
    practice:"Draw the chin straight back without tipping the head up or down. If needed, place an index finger on the point of the chin and push it straight in. Hold, then release.",
    cues:"The movement is straight back, not down toward the chest. Once the tuck is strong, hold it through each direction of the plate neck raise.",
    vids:[V("Jeff Cavaliere · chin tuck",HV.neck,307)]}
});
Object.assign(DESC,{
  "prone-wrist-curl":["Practice wrist flexion against a cable or band with the palm turned down, so the forearm flexors work without help from the biceps.","Elbow bent at the side, palm down on a low cable handle, the wrist bending to push the handle down and away."],
  "reverse-curl":["Practice an overhand-grip elbow curl that trains the brachioradialis on the top of the forearm.","A curl with the knuckles facing up, bar travelling from the thighs to the shoulders, elbows pinned at the sides."],
  "reverse-wrist-roll":["Practice wrist extension by rolling a held bar backward one hand at a time, training the muscles on the top of the forearm.","Standing with arms out in front, an overhand grip on a bar, the wrists taking turns rolling it back."],
  "wrist-deviation":["Practice side-to-side wrist bending against a cable rope, toward the thumb and toward the little finger.","Standing beside a cable stack, arm down at the side, the hand tipping a short way up or down at the wrist."],
  "forearm-rotation":["Practice turning the forearm palm-down and palm-up against a cable rope, so each rotation meets resistance.","One hand on a cable rope, the forearm turning over and back like turning a doorknob."],
  "farmers-carry":["Practice walking while holding heavy weights at the sides to build grip endurance and trunk stability.","Walking upright across the gym with a heavy dumbbell hanging in each hand."],
  "dead-hang":["Practice hanging from a bar with straight arms for as long as possible to build grip endurance.","Hanging still from a pull-up bar, arms straight, feet off the floor."],
  "plate-neck-raise":["Practice neck flexion, extension, and side bending against a towel-wrapped weight plate while lying on a bench.","Lying on a bench with the head past the end, a towel-wrapped plate held on the head, the head lowering and rising."],
  "chin-tuck":["Practice pulling the chin straight back to activate the deep neck flexors that forward head posture weakens.","Head level, eyes forward, the chin sliding straight back to make a double chin."]
});
Object.assign(RELATED,{"face-pull":[["d7",200,"Huberman's rear delt isolation work"]],"plate-neck-raise":[["d4",821,"Huberman points to Jeff Cavaliere's neck video"]],"chin-tuck":[["d4",821,"Huberman points to Jeff Cavaliere's neck video"]]});
[["prone-wrist-curl",["cable-machine","resistance-band"]],["reverse-curl",["barbell"]],["reverse-wrist-roll",["barbell"]],["wrist-deviation",["cable-machine"]],["forearm-rotation",["cable-machine"]],["farmers-carry",["dumbbell"]],["dead-hang",["pull-up-bar"]],["plate-neck-raise",["weight-bench"]],["face-pull",["resistance-band"]]]
  .forEach(([id,ks])=>{EXEQ[id]=[...new Set([...(EXEQ[id]||[]),...ks])];ks.forEach(k=>{if(EQUIP[k]&&!EQUIP[k].ex.includes(id))EQUIP[k].ex.push(id)})});
const OVERVIEW={"lats": [["d4", 335]], "triceps": [["d7", 426]], "quads": [["d2", 0]], "chest": [["d4", 0]], "delts": [["d7", 0]]};

/* ---------- the plan (Saturday = Day 1) ---------- */
const MOB_BLOCKS=[
  {ex:"sumo-rot",sets:3,unit:"sec",min:3,max:10,perSide:true,note:"Shallower squat or smaller turn as needed."},
  {ex:"hip-flexor",sets:3,unit:"sec",min:10,max:30,perSide:true,note:"Supported standing or half-kneeling lunge."},
  {ex:"tabletop",sets:3,unit:"sec",min:5,max:10,note:"Start lower if shoulders or wrists need it."},
  {ex:"founder",sets:2,unit:"sec",min:5,max:5,note:"A few calm breaths per rep; stand to reset."}
];
EX.deadlift.bar=true;EX["front-squat"].bar=true;
/* earlier variants whose history shows when a lift has none of its own */
EX.deadlift.rel=["rdl","trap-bar"];EX["dumbbell-row"].rel=["cs-row","seated-row"];
/* lifts done with your own bodyweight: bodyweight is entered once per session, not per set; a set's load is only weight added with a belt (+) or taken off by an assisted machine (−) */
const BWX=new Set(["pull-up","chin-up","dip","hanging-leg-raise"]);
/* lifts with a dumbbell in each hand: load is logged per dumbbell, as earlier logs did ("per arm"), and the total for both is shown beside it */
const DBP=new Set(["dumbbell-fly","dumbbell-bench-press","dumbbell-overhead-press","curl","lateral-raise","front-raise","rear-delt-fly","rfess"]);
const dbTot=v=>{const a=num(v);return a==null?"":Math.round(a*2*100)/100};
/* lifts done one side at a time: a work set can log left and right reps separately when one side fails first.
   reps keeps the lower of the two, so the progression rule (every set reaches the top of the range) counts a set only when both sides got there */
const UNI=new Set(["dumbbell-row","rfess","lying-leg-curl","standing-leg-curl","calf-raise","curl","prone-wrist-curl","wrist-deviation","forearm-rotation"]);
const lrSplit=x=>!!(x&&x.lr);
const lrMin=x=>{const a=[num(x.l),num(x.r)].filter(v=>v!=null);return a.length?Math.min(...a):""};
const repTxt=x=>lrSplit(x)&&num(x.l)!=null&&num(x.r)!=null&&num(x.l)!==num(x.r)?`L${x.l}/R${x.r}`:(x.reps??"");
function dbSetsTxt(e){const ss=(e.sets||[]).filter(s=>s&&num(s.reps)!=null),groups=[];
  for(const s of ss){const L=num(s.load),g=groups[groups.length-1];if(g&&g.load===L)g.sets.push(s);else groups.push({load:L,sets:[s]})}
  return groups.map(g=>(g.load!=null?`${g.load} ${state.unit} per dumbbell (${dbTot(g.load)} total): `:"")+g.sets.map(s=>repTxt(s)+(num(s.rir)>0?" (RIR "+s.rir+")":"")+(s.rom?" (short ROM)":"")).join(", ")+(g.sets.length===1?" rep"+(num(g.sets[0].reps)===1?"":"s"):" reps")).join("; ")}
function bwFor(date){const d=date||state.date,cur=d===state.date?state.doc:state.sessions[d];if(cur&&num(cur.bw)!=null)return num(cur.bw);
  for(const k of Object.keys(state.sessions).filter(x=>x<d).sort().reverse()){const b=num(state.sessions[k]?.bw);if(b!=null)return b}return null}
const bwLoad=v=>{const a=num(v);return a==null||a===0?"BW":a>0?"BW+"+a:"BW−"+Math.abs(a)};
const signedNum=raw=>{const t=String(raw).trim().replace(/[−–]/g,"-");return t===""?"":isNaN(+t)?"":+t};
function bwSetsTxt(e){const ss=(e.sets||[]).filter(s=>s&&num(s.reps)!=null),groups=[];
  for(const s of ss){const L=num(s.load)??0,g=groups[groups.length-1];if(g&&g.load===L)g.sets.push(s);else groups.push({load:L,sets:[s]})}
  return groups.map(g=>bwLoad(g.load)+" × "+g.sets.map(s=>repTxt(s)+(num(s.rir)>0?" (RIR "+s.rir+")":"")+(s.rom?" (short ROM)":"")).join(" · ")).join("; ")}
EX["chin-up"]={name:"Chin-Up",kind:"strength",compound:true,m:{p:["biceps","lats"],s:["forearms","traps"]},
  setup:"Underhand grip on a secure bar, palms facing you, hands about shoulder width, starting from a comfortable hang.",
  practice:"Drive the elbows down toward the ribs to bring the chest toward the bar, then lower to the full hang. No swinging or kicking.",
  cues:"The book suggests palms-facing pull-ups on shoulders and arms day as compound work for the biceps. Leave load empty for bodyweight; log added weight as load.",
  vids:[V("Huberman · pull-ups",HV.d4,373)]};
DESC["chin-up"]=["A pull-up with the palms facing you: the compound biceps exercise the book suggests for shoulders and arms day.","Hands overhead on a bar, palms toward the face, body rising toward the bar."];
EXEQ["chin-up"]=["pull-up-bar","power-rack"];
const PLAN={
  D1:{wd:"Saturday",title:"Long Run",kind:"cardio",time:"45–75 min",
      intro:"Continuous, at a pace where you can just barely hold a conversation: the most you can sustain breathing only through the nose, near 70% of max heart rate.",
      blocks:[{ex:"easy-run",sets:1,unit:"min",min:45,max:75,note:"Book: 45–75 min at 60–70% of max heart rate, ideally near 70%. Out of shape: start at 15–20 min and add a few minutes each week. Cycling, the elliptical, a stair climber or a weighted hike also work."}]},
  D2:{wd:"Sunday",title:"Lower Body",kind:"lift",time:"60–80 min",mob:true,
      intro:"Five minutes of brisk walking or easy cycling, then ramp into the squat.",
      blocks:[
        {ex:"back-squat",grp:"Quadriceps",role:"Compound",alt:["front-squat","hack-squat","rfess","belt-squat"],over:{rfess:{perSide:true}},sets:3,unit:"reps",min:6,max:10,rest:[180,300],note:"Choose one squat for the session. Huberman shows the front squat, hack squat and rear-foot-elevated split squat, and also names the belt squat."},
        {ex:"leg-extension",grp:"Quadriceps",role:"Isolation",sets:2,unit:"reps",min:8,max:15,rest:[90,180]},
        {ex:"deadlift",grp:"Hamstrings",role:"Compound",alt:["glute-ham-raise"],sets:2,unit:"reps",min:6,max:10,rest:[180,300],note:"Pull from the floor with a straight bar, as Huberman does. He names the glute-ham raise as an alternative."},
        {ex:"lying-leg-curl",grp:"Hamstrings",role:"Isolation",alt:["standing-leg-curl"],over:{"standing-leg-curl":{perSide:true}},sets:2,unit:"reps",min:8,max:15,rest:[90,180],note:"Huberman names the standing leg curl as an alternative."},
        {ex:"calf-raise",grp:"Calves",role:"Calf raise",sets:4,unit:"reps",min:8,max:15,rest:[90,180],note:"S1 and S2 on the calf-raise machine. S3 and S4 single-leg on a step, holding a dumbbell; log reps per leg. Huberman also names the seated calf raise."}]},
  D3:{wd:"Monday",title:"Recovery",kind:"rest",time:"walks",
      intro:"Walk during the day. Optional gentle mobility; stay fresh for Tuesday.",
      blocks:[{ex:"walk",sets:1,unit:"min",min:15,max:40,note:"5–10 min after each meal plus breaks from sitting."}]},
  D4:{wd:"Tuesday",title:"Torso",kind:"lift",time:"60–80 min",mob:true,
      intro:"Five minutes of whole-body warm-up, then ramp into the bench press.",
      blocks:[
        {ex:"bench",grp:"Chest",role:"Compound",alt:["dumbbell-bench-press","incline-bench"],sets:3,unit:"reps",min:6,max:10,rest:[180,300],note:"Set the rack safeties or use a spotter. When benching alone, dumbbells are the safer choice."},
        {ex:"dumbbell-fly",grp:"Chest",role:"Isolation",alt:["cable-fly"],sets:2,unit:"reps",min:8,max:15,rest:[90,180],note:"A fly machine works like the cable fly."},
        {ex:"dip",grp:"Chest",role:"Optional third compound",sets:2,unit:"reps",min:6,max:12,rest:[180,300],optional:true,note:"Huberman does dips on chest and back day or on shoulders and arms day. They also work the triceps."},
        {ex:"pull-up",grp:"Back",role:"Compound pull",alt:["lat-pulldown"],sets:3,unit:"reps",min:6,max:10,rest:[180,300],note:"Once you can do 10–12 good pull-ups without hitting failure, start adding weight. The lat pulldown is Huberman's alternative."},
        {ex:"dumbbell-row",grp:"Back",role:"Compound row",sets:2,unit:"reps",min:6,max:10,perSide:true,rest:[180,300],note:"Barbell or machine rows also work. Huberman names the shrug as an option for the traps."},
        {ex:"back-ext",grp:"Back",role:"Lower back",sets:2,unit:"reps",min:8,max:15,rest:[90,180],note:"Without a bench, Huberman lifts his legs while holding a high countertop."},
        {ex:"hanging-leg-raise",grp:"Abdominals and core",role:"Core",sets:2,sets2:3,unit:"reps",min:5,max:6,rest:[90,180],note:"Knee raises, then L-sits, then pikes; write the stage in the notes. Huberman starts with 5 or 6 knee raises and works toward 3 sets of 5 pikes.",cue:{top:"Every set hit 6: move to the next stage (knee raise, L-sit, pike)",low:"A set fell below 5: stay at this stage next time"}}],
      extras:[{title:"Optional neck",ex:["plate-neck-raise","chin-tuck"],v:V("Jeff Cavaliere · neck exercises",HV.neck,230),
        text:"After the hanging leg raises, if there's time. Huberman points to Jeff Cavaliere's neck video for this. The plan sets no sets or reps, so write what you did in the notes."}]},
  D5:{wd:"Wednesday",title:"Moderate Cardio",kind:"cardio",time:"30–35 min",
      intro:"Five minutes of low-intensity movement, then 25–30 minutes breathing fairly hard, but not gasping or needing to stop.",
      blocks:[{ex:"steady",sets:1,unit:"min",min:25,max:30,note:"Book: 25–30 min at 75–85% of max heart rate, after a five-minute warm-up."}]},
  D6:{wd:"Thursday",title:"Intervals",kind:"cardio",time:"~25 min",
      intro:"5–10 min warm-up, then 30 s as hard and fast as you can and 60 s easy. About 25 minutes in all.",
      blocks:[{ex:"sprint",alt:["stadium"],sets:1,unit:"rounds",min:6,max:12,note:"Near all-out: 90–95% of max heart rate on the hard efforts, 6–12 rounds. Huberman does these on an assault bike. Book alternatives: the Cooper test or the Norwegian 4×4."}]},
  D7:{wd:"Friday",title:"Shoulders + Arms",kind:"lift",time:"60–80 min",mob:true,
      intro:"Trim the optional forearm, neck and calf work first when time is short.",
      blocks:[
        {ex:"ohp",grp:"Shoulders",role:"Compound",alt:["dumbbell-overhead-press","machine-shoulder-press"],sets:3,unit:"reps",min:6,max:10,rest:[180,300],note:"Huberman shows the dumbbell overhead press as an alternative and also names the machine shoulder press."},
        {ex:"lateral-raise",grp:"Shoulders",role:"Isolation",sets:2,unit:"reps",min:8,max:15,rest:[90,180]},
        {ex:"face-pull",grp:"Shoulders",role:"Rear delts",alt:["rear-delt-fly"],sets:2,unit:"reps",min:12,max:15,rest:[90,180],note:"Use a cable machine or exercise band. The book asks for face pulls on this day; the rear delt fly Huberman demonstrates is the alternative, for 8–15 reps."},
        {ex:"chin-up",grp:"Biceps",role:"Compound",sets:2,unit:"reps",min:6,max:10,rest:[180,300],note:"The book suggests palms-facing pull-ups on this day as compound work for the biceps. Leave load empty for bodyweight; log added weight as load."},
        {ex:"curl",grp:"Biceps",role:"Isolation",alt:["preacher-curl"],sets:2,unit:"reps",min:8,max:15,rest:[90,180],note:"Dumbbells, both arms together or alternating, or the preacher curl Huberman shows."},
        {ex:"overhead-cable-triceps-extension",grp:"Triceps",role:"Compound",sets:2,sets2:3,unit:"reps",min:6,max:12,rest:[180,300],note:"Huberman treats this as the compound triceps movement. Tuesday's dips, on a day you do them, also work the triceps."},
        {ex:"pressdown",grp:"Triceps",role:"Isolation",sets:2,unit:"reps",min:8,max:15,rest:[90,180]},
        {ex:"hanging-leg-raise",grp:"Abdominals and core",role:"Core",sets:2,unit:"reps",min:5,max:6,rest:[90,180],note:"The week's second core session, at the progression stage reached on Tuesday.",cue:{top:"Every set hit 6: move to the next stage (knee raise, L-sit, pike)",low:"A set fell below 5: stay at this stage next time"}},
        {ex:"prone-wrist-curl",grp:"Optional",role:"Forearms",alt:["reverse-curl","reverse-wrist-roll","wrist-deviation","forearm-rotation","farmers-carry","dead-hang"],label:"Forearms",sets:3,sets2:4,unit:"reps",min:12,max:30,rest:[90,180],optional:true,
          over:{"farmers-carry":{unit:"sec",min:null,max:null},"dead-hang":{unit:"sec",min:null,max:null}},note:"Flexor and extensor movements from Jeff Cavaliere's forearm workout. The farmer's carry and dead hang go by time: log seconds."},
        {ex:"calf-raise",grp:"Optional",role:"Calves",sets:2,unit:"reps",min:8,max:15,rest:[90,180],optional:true,note:"Huberman does calf raises twice a week, one of those days being leg day. Include it if Sunday's work has recovered."}],
      extras:[{title:"Optional neck",ex:["plate-neck-raise","chin-tuck"],v:V("Jeff Cavaliere · neck exercises",HV.neck,230),
        text:"The book lists neck work as optional on this day too. Huberman points to Jeff Cavaliere's neck video for this. The plan sets no sets or reps, so write what you did in the notes."}]}
};
const DAY_ORDER=["D1","D2","D3","D4","D5","D6","D7"];
const KIND_COLOR={lift:"var(--accent)",cardio:"var(--blue)",rest:"var(--green)"};

/* Photos (Wikimedia Commons, uploaded to this artifact). Filled after upload. */
const PHOTOS={"back-squat": [{"url": "img/back-squat.png", "alt": "Squats", "cap": "Everkinetic, adapted by Urutseg, CC BY-SA 3.0", "src": "https://commons.wikimedia.org/wiki/File:Squats.svg"}], "leg-press": [{"url": "img/leg-press.jpg", "alt": "Young man using a leg press machine at the gym", "cap": "Nenad Stojkovic, CC BY 2.0", "src": "https://commons.wikimedia.org/wiki/File:Young_man_using_a_leg_press_machine_at_the_gym.jpg"}], "rdl": [{"url": "img/rdl-1.png", "alt": "Romanian-deadlift-1", "cap": "Start · Everkinetic, CC BY-SA 3.0", "src": "https://commons.wikimedia.org/wiki/File:Romanian-deadlift-1.png"}, {"url": "img/rdl-2.png", "alt": "Romanian-deadlift-2", "cap": "Finish · Everkinetic, CC BY-SA 3.0", "src": "https://commons.wikimedia.org/wiki/File:Romanian-deadlift-2.png"}], "trap-bar": [{"url": "img/trap-bar-1.jpg", "alt": "U.S. Army recruiter demonstrates correct way to properly lift deadlift, Gaithersburg, Maryland (2020), 1", "cap": "Start · U.S. Army, Public domain", "src": "https://commons.wikimedia.org/wiki/File:U.S._Army_recruiter_demonstrates_correct_way_to_properly_lift_deadlift,_Gaithersburg,_Maryland_(2020),_1.jpg"}, {"url": "img/trap-bar-2.jpg", "alt": "U.S. Army recruiter demonstrates correct way to properly lift deadlift, Gaithersburg, Maryland (2020), 2", "cap": "Finish · U.S. Army, Public domain", "src": "https://commons.wikimedia.org/wiki/File:U.S._Army_recruiter_demonstrates_correct_way_to_properly_lift_deadlift,_Gaithersburg,_Maryland_(2020),_2.jpg"}], "seated-row": [{"url": "img/seated-row-1.png", "alt": "Seated cable rows 1", "cap": "Start · Everkinetic, CC BY-SA 3.0", "src": "https://commons.wikimedia.org/wiki/File:Seated_cable_rows_1.svg"}, {"url": "img/seated-row-2.png", "alt": "Seated cable rows 2", "cap": "Finish · Everkinetic, CC BY-SA 3.0", "src": "https://commons.wikimedia.org/wiki/File:Seated_cable_rows_2.svg"}], "calf-raise": [{"url": "img/calf-raise-1.png", "alt": "Standing-calf-raises-1", "cap": "Start · CFCF, CC BY-SA 4.0", "src": "https://commons.wikimedia.org/wiki/File:Standing-calf-raises-1.svg"}, {"url": "img/calf-raise-2.png", "alt": "Standing-calf-raises-2", "cap": "Finish · CFCF, CC BY-SA 4.0", "src": "https://commons.wikimedia.org/wiki/File:Standing-calf-raises-2.svg"}], "bench": [{"url": "img/bench-1.png", "alt": "Bench press 1", "cap": "Start · Everkinetic, CC BY-SA 3.0", "src": "https://commons.wikimedia.org/wiki/File:Bench_press_1.svg"}, {"url": "img/bench-2.png", "alt": "Bench press 2", "cap": "Finish · Everkinetic, CC BY-SA 3.0", "src": "https://commons.wikimedia.org/wiki/File:Bench_press_2.svg"}], "chest-press": [{"url": "img/chest-press-1.png", "alt": "Machine bench press 1", "cap": "Start · Everkinetic, CC BY-SA 3.0", "src": "https://commons.wikimedia.org/wiki/File:Machine_bench_press_1.svg"}, {"url": "img/chest-press-2.png", "alt": "Machine bench press 2", "cap": "Finish · Everkinetic, CC BY-SA 3.0", "src": "https://commons.wikimedia.org/wiki/File:Machine_bench_press_2.svg"}], "pull-up": [{"url": "img/pull-up.jpg", "alt": "Pull-ups exercise from back", "cap": "PTPioneer, CC BY 2.0", "src": "https://commons.wikimedia.org/wiki/File:Pull-ups_exercise_from_back.jpg"}], "lat-pulldown": [{"url": "img/lat-pulldown.jpg", "alt": "Girl doing lat pulldown exercise", "cap": "Tyler  Read, CC BY 2.0", "src": "https://commons.wikimedia.org/wiki/File:Girl_doing_lat_pulldown_exercise.jpg"}], "ohp": [{"url": "img/ohp-1.png", "alt": "Dumbbell shoulder press 1", "cap": "Start · Everkinetic, CC BY-SA 3.0", "src": "https://commons.wikimedia.org/wiki/File:Dumbbell_shoulder_press_1.svg"}, {"url": "img/ohp-2.png", "alt": "Dumbbell shoulder press 2", "cap": "Finish · Everkinetic, CC BY-SA 3.0", "src": "https://commons.wikimedia.org/wiki/File:Dumbbell_shoulder_press_2.svg"}], "curl": [{"url": "img/curl-1.png", "alt": "Alternating bicep curl with dumbbell 1", "cap": "Start · Everkinetic, CC BY-SA 3.0", "src": "https://commons.wikimedia.org/wiki/File:Alternating_bicep_curl_with_dumbbell_1.svg"}, {"url": "img/curl-2.png", "alt": "Alternating bicep curl with dumbbell 2", "cap": "Finish · Everkinetic, CC BY-SA 3.0", "src": "https://commons.wikimedia.org/wiki/File:Alternating_bicep_curl_with_dumbbell_2.svg"}], "pressdown": [{"url": "img/pressdown-1.png", "alt": "Triceps pushdown with cable 1", "cap": "Start · Everkinetic, CC BY-SA 3.0", "src": "https://commons.wikimedia.org/wiki/File:Triceps_pushdown_with_cable_1.svg"}, {"url": "img/pressdown-2.png", "alt": "Triceps pushdown with cable 2", "cap": "Finish · Everkinetic, CC BY-SA 3.0", "src": "https://commons.wikimedia.org/wiki/File:Triceps_pushdown_with_cable_2.svg"}], "plank": [{"url": "img/plank.png", "alt": "Plank exercise", "cap": "Pk0001, CC BY-SA 4.0", "src": "https://commons.wikimedia.org/wiki/File:Plank_exercise.svg"}], "easy-run": [{"url": "img/easy-run.jpg", "alt": "Jogger on the street", "cap": "James Moore200, CC BY-SA 4.0", "src": "https://commons.wikimedia.org/wiki/File:Jogger_on_the_street.jpg"}], "steady": [{"url": "img/steady.jpg", "alt": "Magnetic resistance stationary bicycle exercise bike", "cap": "T g7, CC BY-SA 3.0", "src": "https://commons.wikimedia.org/wiki/File:Magnetic_resistance_stationary_bicycle_exercise_bike.JPG"}], "sprint": [{"url": "img/sprint.jpg", "alt": "Concept 2 Indoor Rowers", "cap": "Wikimedia Commons, Public domain", "src": "https://commons.wikimedia.org/wiki/File:Concept_2_Indoor_Rowers.JPG"}], "walk": [{"url": "img/walk.jpg", "alt": "Walking exercise (16818224061)", "cap": "bluesbby from Mountain View, USA, CC BY 2.0", "src": "https://commons.wikimedia.org/wiki/File:Walking_exercise_(16818224061).jpg"}]};

/* citations: permalinks to the quote's line in codekiln's logseq-garden on GitHub (private; opens when signed in) */
const CITE={"week": "https://github.com/codekiln/logseq-garden/blob/74ce6a4401645c4b944b7ba0b254c5215ef2e4e5/pages/Person___Andrew%20Huberman___Book___2026___Protocols___02%20Exercise___02%20Resistance%20Training.md#L21", "startday": "https://github.com/codekiln/logseq-garden/blob/74ce6a4401645c4b944b7ba0b254c5215ef2e4e5/pages/Person___Andrew%20Huberman___Book___2026___Protocols___02%20Exercise___02%20Resistance%20Training.md#L67", "missedlong": "https://github.com/codekiln/logseq-garden/blob/74ce6a4401645c4b944b7ba0b254c5215ef2e4e5/pages/Person___Andrew%20Huberman___Book___2026___Protocols___02%20Exercise___03%20Cardio%20Training.md#L61", "duration": "https://github.com/codekiln/logseq-garden/blob/74ce6a4401645c4b944b7ba0b254c5215ef2e4e5/pages/Person___Andrew%20Huberman___Book___2026___Protocols___02%20Exercise___02%20Resistance%20Training___02%20How%20It%20Works.md#L7", "wuramp": "https://github.com/codekiln/logseq-garden/blob/74ce6a4401645c4b944b7ba0b254c5215ef2e4e5/pages/Person___Andrew%20Huberman___Book___2026___Protocols___02%20Exercise___02%20Resistance%20Training___05%20Warm-Up%20Sets.md#L8", "wufirst": "https://github.com/codekiln/logseq-garden/blob/74ce6a4401645c4b944b7ba0b254c5215ef2e4e5/pages/Person___Andrew%20Huberman___Book___2026___Protocols___02%20Exercise___02%20Resistance%20Training___05%20Warm-Up%20Sets.md#L18", "wuheavy": "https://github.com/codekiln/logseq-garden/blob/74ce6a4401645c4b944b7ba0b254c5215ef2e4e5/pages/Person___Andrew%20Huberman___Book___2026___Protocols___02%20Exercise___02%20Resistance%20Training___05%20Warm-Up%20Sets.md#L14", "expergroup": "https://github.com/codekiln/logseq-garden/blob/74ce6a4401645c4b944b7ba0b254c5215ef2e4e5/pages/Person___Andrew%20Huberman___Book___2026___Protocols___02%20Exercise___02%20Resistance%20Training.md#L29", "legs": "https://github.com/codekiln/logseq-garden/blob/74ce6a4401645c4b944b7ba0b254c5215ef2e4e5/pages/Person___Andrew%20Huberman___Book___2026___Protocols___02%20Exercise___02%20Resistance%20Training.md#L31", "compound": "https://github.com/codekiln/logseq-garden/blob/74ce6a4401645c4b944b7ba0b254c5215ef2e4e5/pages/Person___Andrew%20Huberman___Book___2026___Protocols___02%20Exercise___02%20Resistance%20Training.md#L33", "setsper": "https://github.com/codekiln/logseq-garden/blob/74ce6a4401645c4b944b7ba0b254c5215ef2e4e5/pages/Person___Andrew%20Huberman___Book___2026___Protocols___02%20Exercise___02%20Resistance%20Training.md#L38", "sixsets": "https://github.com/codekiln/logseq-garden/blob/74ce6a4401645c4b944b7ba0b254c5215ef2e4e5/pages/Person___Andrew%20Huberman___Book___2026___Protocols___02%20Exercise___02%20Resistance%20Training___06%20Work%20Sets%20per%20Muscle%20Group.md#L14", "summary": "https://github.com/codekiln/logseq-garden/blob/74ce6a4401645c4b944b7ba0b254c5215ef2e4e5/pages/Person___Andrew%20Huberman___Book___2026___Protocols___02%20Exercise___02%20Resistance%20Training___02%20How%20It%20Works.md#L20", "rest": "https://github.com/codekiln/logseq-garden/blob/74ce6a4401645c4b944b7ba0b254c5215ef2e4e5/pages/Person___Andrew%20Huberman___Book___2026___Protocols___02%20Exercise___02%20Resistance%20Training___10%20Rest%20Between%20Sets.md#L5", "restclock": "https://github.com/codekiln/logseq-garden/blob/74ce6a4401645c4b944b7ba0b254c5215ef2e4e5/pages/Person___Andrew%20Huberman___Book___2026___Protocols___02%20Exercise___02%20Resistance%20Training___10%20Rest%20Between%20Sets.md#L7", "track": "https://github.com/codekiln/logseq-garden/blob/74ce6a4401645c4b944b7ba0b254c5215ef2e4e5/pages/Person___Andrew%20Huberman___Book___2026___Protocols___02%20Exercise___02%20Resistance%20Training___03%20Workout%20Duration.md#L10", "repscompound": "https://github.com/codekiln/logseq-garden/blob/74ce6a4401645c4b944b7ba0b254c5215ef2e4e5/pages/Person___Andrew%20Huberman___Book___2026___Protocols___02%20Exercise___02%20Resistance%20Training___09%20Reps%20per%20Set.md#L8", "overload": "https://github.com/codekiln/logseq-garden/blob/74ce6a4401645c4b944b7ba0b254c5215ef2e4e5/pages/Person___Andrew%20Huberman___Book___2026___Protocols___02%20Exercise___02%20Resistance%20Training___09%20Reps%20per%20Set.md#L23", "jump": "https://github.com/codekiln/logseq-garden/blob/74ce6a4401645c4b944b7ba0b254c5215ef2e4e5/pages/Person___Andrew%20Huberman___Book___2026___Protocols___02%20Exercise___02%20Resistance%20Training.md#L56", "noprogress": "https://github.com/codekiln/logseq-garden/blob/74ce6a4401645c4b944b7ba0b254c5215ef2e4e5/pages/Person___Andrew%20Huberman___Book___2026___Protocols___02%20Exercise___02%20Resistance%20Training___09%20Reps%20per%20Set.md#L28", "weekoff": "https://github.com/codekiln/logseq-garden/blob/74ce6a4401645c4b944b7ba0b254c5215ef2e4e5/pages/Person___Andrew%20Huberman___Book___2026___Protocols___02%20Exercise___02%20Resistance%20Training___10%20Rest%20Between%20Sets.md#L19", "breakin": "https://github.com/codekiln/logseq-garden/blob/74ce6a4401645c4b944b7ba0b254c5215ef2e4e5/pages/Person___Andrew%20Huberman___Book___2026___Protocols___02%20Exercise.md#L8", "cardiolong": "https://github.com/codekiln/logseq-garden/blob/74ce6a4401645c4b944b7ba0b254c5215ef2e4e5/pages/Person___Andrew%20Huberman___Book___2026___Protocols___02%20Exercise___03%20Cardio%20Training.md#L10", "nasal": "https://github.com/codekiln/logseq-garden/blob/74ce6a4401645c4b944b7ba0b254c5215ef2e4e5/pages/Person___Andrew%20Huberman___Book___2026___Protocols___02%20Exercise___03%20Cardio%20Training.md#L18", "maxhr": "https://github.com/codekiln/logseq-garden/blob/74ce6a4401645c4b944b7ba0b254c5215ef2e4e5/pages/Person___Andrew%20Huberman___Book___2026___Protocols___02%20Exercise___03%20Cardio%20Training.md#L20", "moderate": "https://github.com/codekiln/logseq-garden/blob/74ce6a4401645c4b944b7ba0b254c5215ef2e4e5/pages/Person___Andrew%20Huberman___Book___2026___Protocols___02%20Exercise___03%20Cardio%20Training.md#L27", "brief": "https://github.com/codekiln/logseq-garden/blob/74ce6a4401645c4b944b7ba0b254c5215ef2e4e5/pages/Person___Andrew%20Huberman___Book___2026___Protocols___02%20Exercise___03%20Cardio%20Training.md#L36", "alts": "https://github.com/codekiln/logseq-garden/blob/74ce6a4401645c4b944b7ba0b254c5215ef2e4e5/pages/Person___Andrew%20Huberman___Book___2026___Protocols___02%20Exercise___03%20Cardio%20Training.md#L42", "walkmeal": "https://github.com/codekiln/logseq-garden/blob/74ce6a4401645c4b944b7ba0b254c5215ef2e4e5/pages/Person___Andrew%20Huberman___Book___2026___Protocols___02%20Exercise___01%20Walk___02%20How%20It%20Works.md#L5", "optic": "https://github.com/codekiln/logseq-garden/blob/74ce6a4401645c4b944b7ba0b254c5215ef2e4e5/pages/Person___Andrew%20Huberman___Book___2026___Protocols___02%20Exercise___01%20Walk___02%20How%20It%20Works.md#L8", "steps": "https://github.com/codekiln/logseq-garden/blob/74ce6a4401645c4b944b7ba0b254c5215ef2e4e5/pages/Person___Andrew%20Huberman___Book___2026___Protocols___02%20Exercise___01%20Walk.md#L10", "mobfreq": "https://github.com/codekiln/logseq-garden/blob/74ce6a4401645c4b944b7ba0b254c5215ef2e4e5/pages/Person___Andrew%20Huberman___Book___2026___Protocols___02%20Exercise___04%20Mobility%20and%20Flexibility.md#L9", "mobholds": "https://github.com/codekiln/logseq-garden/blob/74ce6a4401645c4b944b7ba0b254c5215ef2e4e5/pages/Person___Andrew%20Huberman___Book___2026___Protocols___02%20Exercise___04%20Mobility%20and%20Flexibility.md#L16", "mobslow": "https://github.com/codekiln/logseq-garden/blob/74ce6a4401645c4b944b7ba0b254c5215ef2e4e5/pages/Person___Andrew%20Huberman___Book___2026___Protocols___02%20Exercise___04%20Mobility%20and%20Flexibility.md#L36"};
Object.assign(CITE,{"safety": "https://github.com/codekiln/logseq-garden/blob/bb3c88f1221087ff2ebe7f4ab9e9a249cc63f852/pages/Person___Andrew%20Huberman___Book___2026___Protocols___02%20Exercise___02%20Resistance%20Training.md#L87", "pain": "https://github.com/codekiln/logseq-garden/blob/bb3c88f1221087ff2ebe7f4ab9e9a249cc63f852/pages/Person___Andrew%20Huberman___Book___2026___Protocols___02%20Exercise___02%20Resistance%20Training.md#L97", "facepull": "https://github.com/codekiln/logseq-garden/blob/bb3c88f1221087ff2ebe7f4ab9e9a249cc63f852/pages/Person___Andrew%20Huberman___Book___2026___Protocols___02%20Exercise___02%20Resistance%20Training.md#L128", "forearms": "https://github.com/codekiln/logseq-garden/blob/bb3c88f1221087ff2ebe7f4ab9e9a249cc63f852/pages/Person___Andrew%20Huberman___Book___2026___Protocols___02%20Exercise___02%20Resistance%20Training.md#L108", "abs": "https://github.com/codekiln/logseq-garden/blob/bb3c88f1221087ff2ebe7f4ab9e9a249cc63f852/pages/Person___Andrew%20Huberman___Book___2026___Protocols___02%20Exercise___02%20Resistance%20Training.md#L114", "rir": "https://github.com/codekiln/logseq-garden/blob/bb3c88f1221087ff2ebe7f4ab9e9a249cc63f852/pages/Person___Andrew%20Huberman___Book___2026___Protocols___02%20Exercise___02%20Resistance%20Training___09%20Reps%20per%20Set.md#L32", "reprange": "https://github.com/codekiln/logseq-garden/blob/bb3c88f1221087ff2ebe7f4ab9e9a249cc63f852/pages/Person___Andrew%20Huberman___Book___2026___Protocols___02%20Exercise___02%20Resistance%20Training___02%20How%20It%20Works.md#L24", "pastfail": "https://github.com/codekiln/logseq-garden/blob/bb3c88f1221087ff2ebe7f4ab9e9a249cc63f852/pages/Person___Andrew%20Huberman___Book___2026___Protocols___02%20Exercise___02%20Resistance%20Training___09%20Reps%20per%20Set.md#L59", "badday": "https://github.com/codekiln/logseq-garden/blob/bb3c88f1221087ff2ebe7f4ab9e9a249cc63f852/pages/Person___Andrew%20Huberman___Book___2026___Protocols___02%20Exercise___02%20Resistance%20Training___09%20Reps%20per%20Set.md#L42", "sleep": "https://github.com/codekiln/logseq-garden/blob/bb3c88f1221087ff2ebe7f4ab9e9a249cc63f852/pages/Person___Andrew%20Huberman___Book___2026___Protocols___02%20Exercise___02%20Resistance%20Training.md#L65"});
Object.assign(CITE,{"exper": "https://github.com/codekiln/logseq-garden/blob/0486d1ea2f393670ffebe7203e8e93cc0a335eeb/pages/Person___Andrew%20Huberman___Book___2026___Protocols___02%20Exercise___02%20Resistance%20Training.md#L54", "thirdc": "https://github.com/codekiln/logseq-garden/blob/0486d1ea2f393670ffebe7203e8e93cc0a335eeb/pages/Person___Andrew%20Huberman___Book___2026___Protocols___02%20Exercise___02%20Resistance%20Training___02%20How%20It%20Works.md#L20", "groups34": "https://github.com/codekiln/logseq-garden/blob/0486d1ea2f393670ffebe7203e8e93cc0a335eeb/pages/Person___Andrew%20Huberman___Book___2026___Protocols___02%20Exercise___02%20Resistance%20Training___06%20Work%20Sets%20per%20Muscle%20Group.md#L43", "chinbook": "https://github.com/codekiln/logseq-garden/blob/0486d1ea2f393670ffebe7203e8e93cc0a335eeb/pages/Person___Andrew%20Huberman___Book___2026___Protocols___02%20Exercise___02%20Resistance%20Training___06%20Work%20Sets%20per%20Muscle%20Group.md#L40"});
const C=k=>CITE[k]||"";
const KLOC={"week": 2529, "duration": 2553, "summary": 2553, "wuramp": 2646, "rest": 2565, "track": 2611, "repscompound": 2829, "breakin": 2034, "walkmeal": 2434, "optic": 2463};
const KWEB="https://read.amazon.com/?asin=B0D3JFXBFW";
/* Kindle app links open the exact location; Kindle for Web opens the book only (it ignores location) */
const KL=k=>KLOC[k]?` <a class="src kin" href="kindle://book?action=open&amp;asin=B0D3JFXBFW&amp;location=${KLOC[k]}" title="Opens the Kindle app at location ${KLOC[k]}">open in Kindle</a>`:` <a class="src kin" href="${KWEB}" target="_blank" rel="noopener" title="Opens the book in Kindle for Web; go to the page from there">open book</a>`;
const S2=(t,k)=>`<a class="src" href="${CITE[k]}" target="_blank" rel="noopener" title="Quote in logseq-garden">${t}</a>${KL(k)}`;
/* a narration-only quote: link straight to the quote and its Snipd clips */
const AU=k=>` <a class="src" href="${CITE[k]}" target="_blank" rel="noopener" title="Quote in logseq-garden, with its Snipd clips">Audiobook</a>`;
const SITE="https://codekiln.github.io/logseq-encode-garden/";
const sitePage=p=>SITE+p.split("/").map(encodeURIComponent).join("/")+"/";
function gardenPage(e){if(e.custom)return "";const cat=e.kind==="cardio"?"Cardio":e.kind==="mobility"?"Flexibility":"Strength";return sitePage("Exercise/Body/"+cat+"/"+e.name)}
const PLANPAGE={D1:"D1-Long-Run",D2:"D2-Lower-Body",D3:"D3-Recovery",D4:"D4-Torso",D5:"D5-Moderate-Cardio",D6:"D6-Intervals",D7:"D7-Shoulders-and-Arms"};


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
const MNAME={quads:"Quadriceps",hamstrings:"Hamstrings",glutes:"Glutes",calves:"Calves",chest:"Chest",lats:"Lats",traps:"Traps",delts:"Shoulders",biceps:"Biceps",triceps:"Triceps",forearms:"Forearms",abs:"Abs",obliques:"Obliques",lowerback:"Lower back",hipflexors:"Hip flexors",neck:"Neck"};
const MORDER=Object.keys(MNAME);
function pickEx(b,bi,dayKey){const logged=Object.keys((state.doc&&state.doc.ex)||{});
  return state.choice[dayKey+":"+bi]||[b.ex,...(b.alt||[])].find(id=>logged.includes(id))||b.ex}
function musclesHTML(m){
  return m.p.map(k=>MUS[k]?`<button type="button" class="mg p term" data-mterm="${k}" aria-expanded="false" aria-controls="gloss">${esc(MNAME[k]||k)}</button>`:`<span class="mg p">${esc(MNAME[k]||k)}</span>`).join("")+(m.s.length?`<span class="mg s">also ${m.s.map(k=>mterm(k,esc((MNAME[k]||k).toLowerCase()))).join(", ")}</span>`:"");
}
let mf={},mfSec=false;
try{const o=JSON.parse(localStorage.getItem("wk.mfilter")||"{}");for(const k in o)mf[k]=new Set(o[k]);mfSec=localStorage.getItem("wk.mfsec")==="1"}catch(e){}
function saveMf(){try{const o={};for(const k in mf)o[k]=[...mf[k]];localStorage.setItem("wk.mfilter",JSON.stringify(o));localStorage.setItem("wk.mfsec",mfSec?"1":"0")}catch(e){}}
const musclesOf=(id)=>{const m=EX[id].m;return mfSec?[...m.p,...m.s]:m.p};
/* the book's slots for each muscle group, shown above its exercises */
const gvl=(t,id,sec)=>` <a class="src" href="${GV[id].url}#block-${GV[id].ids[String(sec)]}" target="_blank" rel="noopener">${t}</a>`;
/* questions and answers: each tagged with the muscle group it came up under */
const QA=[
  {g:"Shoulders",date:"2026-11-20",q:"Should I do a whole muscle group in series, or rotate through its exercises?",
   a:["In series: finish one exercise’s sets before starting the next. Every exercise in a group hits the same muscle, so if you rotate through them it never gets its full rest, and every set after the first starts tired. That works against taking each set to failure with good loads; the book’s 2–5 minute rests exist for this.",
      "Rotating pays off between groups that don’t compete. To save time, pair a shoulder set with a biceps or triceps set inside the rest gap: the shoulders still get their full rest, and you lose little."],
   ctx:"Came up on 20 Nov, when Shoulders took 43 min done in series."}];
function qaHTML(list){return list.map(x=>`<details class="qa" style="margin:6px 0"><summary style="cursor:pointer;font-weight:600">${esc(x.q)}</summary>${x.a.map(p=>`<p style="margin:6px 0">${esc(p)}</p>`).join("")}${x.ctx?`<p class="muted" style="margin:4px 0;font-size:.84rem">${esc(x.ctx)}${x.g?` · ${esc(x.g)}`:""}</p>`:""}</details>`).join("")}
function grpHead(g){const N={
  Quadriceps:`One compound and one isolation exercise: pick one of each. A third compound, such as the hack squat or leg press, is for a day you have the energy.${S2(" Kindle p. 158","exper")}`,
  Hamstrings:`One compound and one isolation exercise: pick one of each.${S2(" Kindle p. 158","exper")}`,
  Calves:`Huberman shows only calf raises: standing or angled, with two or three sets of a seated calf raise too when one is available.${gvl("Day 2 video","CbEFgDFQBvk",632)}`,
  Chest:`One compound and one isolation exercise: pick one of each. Dips are the optional third compound.${S2(" Kindle p. 147","thirdc")}`,
  Back:`Two or three exercises covering the lats, traps and lower back: a compound pull, a compound row, and the back extension for the lower back.${gvl("Day 4 video","UEU6NYLRi6o",335)} Huberman says the lats are hard to isolate and shows no isolation exercise for them. <a class="src" href="${YTQ("UEU6NYLRi6o",534)}" target="_blank" rel="noopener">Day 4 video at 8:54</a>`,
  "Abdominals and core":`Once or twice a week: Tuesday and Friday.${S2(" Kindle p. 180","abs")}`,
  Shoulders:`One compound, one isolation, and the face pull the book asks for on this day: three exercises, the book's upper limit.${S2(" Kindle p. 181","facepull")}`,
  Biceps:`One compound and one isolation exercise. The compound is the palms-facing pull-up the book suggests for this day.${S2(" Kindle p. 157","chinbook")}`,
  Triceps:`One compound and one isolation exercise. Tuesday's dips, on a day you do them, also count.${gvl("Day 7 video","IzpGEk-2th4",523)}`,
  Optional:"Extra work the book allows on this day. Skip it when time is short."}[g];
  const ks={Quadriceps:["quads"],Hamstrings:["hamstrings"],Calves:["calves"],Chest:["chest"],Back:["lats","traps","lowerback"],"Abdominals and core":["abs","obliques"],Shoulders:["delts"],Biceps:["biceps"],Triceps:["triceps"]}[g]||[];
  const gt=Object.values(state.sessions||{}).filter(s=>s&&s.grpMin&&s.grpMin[g]!=null).sort((a,b)=>a.date<b.date?1:-1)[0];
  const gtTxt=gt?`<p class="muted" style="margin:2px 0">Whole group took <b>${esc(String(gt.grpMin[g]))} min</b>${gt.date===state.date?" today":" on "+esc(gt.date)}.</p>`:"";
  return `<div class="grphead"><h3>${esc(g)}</h3>${gtTxt}${ks.length?`<p class="grpm">${ks.map(k=>`${mterm(k,esc(MUS[k].n))}: ${esc(MUS[k].short)}`).join(" · ")}</p>`:""}${N?`<p>${N}</p>`:""}${(()=>{const qs=QA.filter(x=>x.g===g);return qs.length?`<div class="lbl" style="margin-top:8px">Questions and answers</div>${qaHTML(qs)}`:""})()}</div>`}
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
  let lastG=null;
  const body=shown.length?shown.map(x=>{const g=x.b.grp;let h="";if(!sel.size&&g&&g!==lastG){lastG=g;h=grpHead(g)}return h+sheet(x.b,x.i,pageKey)}).join(""):`<div class="empty">No exercise here works ${[...sel].map(g=>MNAME[g]).join(" or ")}${mfSec?"":" as a main muscle; try including secondary muscles"}.</div>`;
  return bar+toggleBar(shown.map(x=>pageKey+":"+x.i))+body;
}
document.addEventListener("click",ev=>{const t=ev.target.closest("[data-mf]");if(!t)return;
  const k=t.dataset.mf,g=t.dataset.g,s=mf[k]||(mf[k]=new Set());
  if(!g)s.clear();else s.has(g)?s.delete(g):s.add(g);
  saveMf();render();const n=document.querySelector(`[data-mf="${k}"][data-g="${g}"]`);if(n)n.focus()});
document.addEventListener("change",ev=>{if(ev.target.dataset&&ev.target.dataset.mfsec){mfSec=ev.target.checked;saveMf();render();const n=document.getElementById(ev.target.id);if(n)n.focus()}});
/* ---------- glossary ---------- */
const GLOSS={
  rir:["Reps in reserve (RIR)","How many more clean reps you could have done when you ended the set. RIR 0 means you reached failure. Work sets in this plan go to failure, as the book says, so most work sets log as 0."],
  failure:["Failure","The rep you cannot complete with good form despite full effort. The book takes work sets to it, and so does this plan. On the first work set of an exercise, keep trying for three to five seconds past it. Warm-up sets stay well short of it."],
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
  perside:["Per side","Do the listed reps or seconds on the left, then the same on the right; one set covers both sides. If one side stops short, tap L/R on that set to log each side; the lower number is the one progression goes by."]
};
const term=(k,label)=>`<button type="button" class="term" data-term="${k}" aria-expanded="false" aria-controls="gloss">${label}</button>`;
let glossBtn=null;
function closeGloss(refocus){const g=document.getElementById("gloss");if(!g||g.hidden)return;g.hidden=true;
  if(glossBtn){glossBtn.setAttribute("aria-expanded","false");glossBtn.removeAttribute("aria-describedby");if(refocus&&document.body.contains(glossBtn))glossBtn.focus()}glossBtn=null}
function openGloss(btn){
  const g=document.getElementById("gloss"),mk=btn.dataset.mterm,[t,d]=mk?["",""]:(GLOSS[btn.dataset.term]||["",""]);
  if(glossBtn===btn){closeGloss(false);return}
  closeGloss(false);
  g.innerHTML=mk?muscleTip(mk):`<b>${esc(t)}</b><br>${esc(d)}<br><a href="#term-${btn.dataset.term}">More in Terms</a>`;g.hidden=false;
  const r=btn.getBoundingClientRect(),w=g.offsetWidth,vw=document.documentElement.clientWidth;
  g.style.left=Math.max(16,Math.min(r.left+window.scrollX,vw-w-16+window.scrollX))+"px";
  g.style.top=(r.bottom+window.scrollY+6)+"px";
  btn.setAttribute("aria-expanded","true");btn.setAttribute("aria-describedby","gloss");glossBtn=btn;
}
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeGloss(true)});
/* keep each exercise's details open or closed across re-renders */
document.addEventListener("toggle",ev=>{const d=ev.target;if(!d.dataset||!d.dataset.det)return;d.open?state.openDet.add(d.dataset.det):state.openDet.delete(d.dataset.det)},true);

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
/* a block may give a set range (sets to sets2) */
const setsLabel=b=>b.sets2?b.sets+"–"+b.sets2:String(b.sets);
const maxSets=b=>b.sets2||b.sets;
/* a block can change its dose for one of its alternatives (e.g. timed forearm work) */
const forEx=(b,id)=>b.over&&b.over[id]?Object.assign({},b,b.over[id]):b;
/* library text links other exercises as [[Exercise/Body/Strength/Name]]: show them as links to their page */
const wl=t=>esc(t).replace(/\[\[Exercise\/Body\/[A-Za-z]+\/([^\]]+)\]\]/g,(m,name,at,all)=>{const id=Object.keys(EX).find(k=>EX[k].name===name);
  const start=!all.slice(0,at).trim()||/[.:;]\s*$/.test(all.slice(0,at)),label=start?name:name.toLowerCase().replace(/^romanian/,"Romanian");
  return id?`<a class="exref" href="#ex-${id}">${label}</a>`:label});
const restTxt=r=>r?(r[0]<120?r[0]+" s":r[0]/60+" min")+"–"+(r[1]/60)+" min rest":"";

let state={date:iso(new Date()),view:"today",unit:"lb",age:null,sessions:{},doc:null,db:null,ready:false,choice:{},collapsed:new Set(),openDet:new Set()};
try{const v=localStorage.getItem("wk.view");if(v&&v!=="exercise"&&v!=="equip")state.view=v}catch(e){}
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
  const per=b.perSide?" per side":"",n=setsLabel(b);
  if(b.unit==="reps")return `${n} × ${rangeTxt(b.min,b.max)}${per}`;
  if(b.unit==="sec")return b.max==null?`${n} timed sets${per}`:`${n} holds × ${rangeTxt(b.min,b.max)} s${per}`;
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
  if(!last)return {cls:"",txt:"No history yet: pick a load you can take to failure inside the rep range",load:null,last};
  const sets=(last.entry.sets||[]).filter(s=>s&&(num(s.reps)!=null||num(s.sec)!=null));
  if(b.unit==="sec"){
    if(b.max==null)return {cls:"",txt:"",last};
    const all=sets.every(s=>num(s.sec)>=b.max);
    return all?{cls:"up",txt:"Hit the top of the range: add a few seconds or a harder version",last}:{cls:"hold",txt:"Repeat and add a little time",last};
  }
  if(b.unit!=="reps")return {cls:"",txt:"",last};
  const loads=sets.map(s=>num(s.load)).filter(x=>x!=null);
  const load=loads.length?Math.max(...loads):null;
  const top=sets.length>=b.sets&&sets.every(s=>num(s.reps)>=b.max);
  const low=sets.some(s=>num(s.reps)!=null&&num(s.reps)<b.min);
  if(top){
    if(load==null||load<=0)return {cls:"up",txt:b.cue?.top||`Every set hit ${b.max}: add a little resistance`,load,last};
    const step=nextStep(load), pct=Math.round(step/load*100);
    return pct>10
      ?{cls:"up",txt:`Every set hit ${b.max}. The smallest step (${step} ${state.unit}) is ${pct}% of ${load}: add reps first, or use microplates`,load,last}
      :{cls:"up",txt:`Every set hit ${b.max}: add ${step} ${state.unit} (${pct}% of ${load})`,load:load+step,last};
  }
  if(low&&load==null&&b.cue?.low)return {cls:"hold",txt:b.cue.low,load:null,last};
  if(low&&load==null)return {cls:"hold",txt:`A set fell below ${b.min}. If only five come, do five; strive for more reps next time`,load:null,last};
  if(low)return {cls:"hold",txt:`A set fell below ${b.min}. Don't worry about it: keep the load and strive for more reps`,load,last};
  return {cls:"hold",txt:`Keep the load, add reps toward ${b.max}`,load,last};
}
function lastLine(v){
  if(!v.last)return "";
  const s=(v.last.entry.sets||[]).filter(Boolean).map(x=>x.sec!=null&&x.sec!==""?x.sec+"s":x.min!=null&&x.min!==""?x.min+" min":x.rounds!=null&&x.rounds!==""?x.rounds+" rds":(x.load!=null&&x.load!==""?x.load+"×":"")+repTxt(x)).filter(t=>t&&t!=="×").join(", ");
  return `Last · ${fmtDate(v.last.date)}: ${esc(s)}`;
}

/* the last few times this exercise was done, on any day: a quick reference above the log */
function setsTxt(e){
  return (e.sets||[]).filter(s=>s&&["reps","sec","min","rounds"].some(f=>num(s[f])!=null)).map(x=>num(x.sec)!=null?x.sec+" s":num(x.min)!=null?x.min+" min":num(x.rounds)!=null?x.rounds+" rds":(num(x.load)!=null?x.load+"×":"")+repTxt(x)+(num(x.rir)>0?" (RIR "+x.rir+")":"")+(x.rom?" (short ROM)":"")).join(" · ");
}
/* distinct days with at least one logged set of this exercise, today's unsaved edits included: shown beside each choice in the swap dropdown */
function daysDone(exId){const has=e=>(e?.sets||[]).some(s=>s&&["reps","sec","min","rounds"].some(f=>num(s[f])!=null));
  const ds=new Set(Object.keys(state.sessions||{}).filter(d=>d!==state.date&&has(state.sessions[d].ex?.[exId])));
  if(has((state.doc||state.sessions?.[state.date])?.ex?.[exId]))ds.add(state.date);return ds.size}
function loggedDates(exId){return Object.keys(state.sessions).filter(d=>d<state.date&&(state.sessions[d].ex?.[exId]?.sets||[]).some(s=>s&&["reps","sec","min","rounds"].some(f=>num(s[f])!=null))).sort().reverse()}
function recentLines(exId,ds){const bar=EX[exId]?.bar;return ds.map((d,i)=>{const e=state.sessions[d].ex[exId],wu=(e.warmups||[]).filter(w=>w&&num(w.reps)!=null),bw=num(e.barw)??BAR();
    const notes=(e.sets||[]).map((x,j)=>x&&x.note?`S${j+1}: ${x.note}`:"").filter(Boolean);
    return `<li${i?"":` class="first"`}><button type="button" class="btn" data-open="${d}" title="Open this session">${esc(fmtDate(d))}</button> <span class="sets">${esc(bar?barSetsTxt(e):BWX.has(exId)?bwSetsTxt(e):DBP.has(exId)?dbSetsTxt(e):setsTxt(e))}</span>${wu.length?`<span class="wu"><b>Warm-ups</b> ${esc(wu.map(w=>(num(w.load)!=null?(bar?barPlates(num(w.load),bw)+" × ":w.load+"×"):"")+w.reps).join(" · "))}</span>`:`<span class="wu"><b>Warm-ups</b> none logged</span>`}${notes.length?`<span class="wu">${esc(notes.join(" · "))}</span>`:""}${e.notes?`<span class="wu">${esc(e.notes)}</span>`:""}</li>`}).join("")}
function recentHTML(exId){
  const all=loggedDates(exId),ds=all.slice(0,3),bar=EX[exId]?.bar,times=n=>`${n} time${n===1?"":"s"}`;
  const foot=`<p class="muted" style="font-size:.76rem;margin:4px 0 0">Work sets are to failure unless an RIR is shown. ${bar?`Plates per side; the total load, bar included, is in brackets.`:BWX.has(exId)?`BW is your bodyweight; + is weight added with a belt, − is help from an assisted machine.`:DBP.has(exId)?`Reps are listed set by set, in order.`:`Loads in ${esc(state.unit)}.`}</p>`;
  if(!ds.length){
    const rel=(EX[exId]?.rel||[]).map(r=>({r,all:loggedDates(r)})).filter(x=>x.all.length);
    return `<div class="recent"><div class="lbl">Last time</div><p class="muted" style="margin:2px 0 0">${esc(EX[exId]?.name||"This lift")}: not logged before.</p>${rel.map(x=>`<div class="lbl" style="margin-top:8px">Related lift: ${esc(EX[x.r].name)}, done ${times(x.all.length)}</div><ol>${recentLines(x.r,x.all.slice(0,2))}</ol>`).join("")}${rel.length?foot:""}</div>`;
  }
  return `<div class="recent"><div class="lbl">Done ${times(all.length)} before · last time${ds.length>1?", then the times before":""}</div><ol>${recentLines(exId,ds)}</ol>${foot}</div>`;
}

/* plates per side for a barbell load */
/* the barbell is 20 kg (44.1 lb) */
const BAR=()=>state.unit==="kg"?20:44.1, BARNAME=()=>state.unit==="kg"?"20 kg bar":"20 kg (44.1 lb) bar";
/* bar weight for a barbell lift: this session's setting, else the last one logged for that lift, else the 20 kg bar */
function barFor(exId){const e=entryFor(exId);if(e&&num(e.barw)!=null)return num(e.barw);
  for(const d of Object.keys(state.sessions).filter(d=>d<state.date).sort().reverse()){const b=num(state.sessions[d]?.ex?.[exId]?.barw);if(b!=null)return b}
  return BAR()}
/* plates per side implied by a total load, for loads logged before plates were entered */
const sideOf=(load,bar)=>load==null?null:Math.max(0,roundTo((load-bar)/2,state.unit==="kg"?0.25:0.5));
const totalOf=(bar,side)=>Math.round((bar+2*side)*100)/100;
function plateList(side){const set=state.unit==="kg"?[25,20,15,10,5,2.5,1.25]:[45,35,25,10,5,2.5],out=[];for(const p of set){while(side>=p-0.2){out.push(p);side-=p}}return out}
/* a barbell load as plates per side, rounded to the smallest plate pair */
function barTxt(load){const step=state.unit==="kg"?1.25:2.5,side=Math.max(0,roundTo((load-BAR())/2,step));
  return side?`${side} ${state.unit} per side (${plateList(side).join(" + ")}), ${Math.round((BAR()+2*side)*10)/10} ${state.unit} total`:`empty bar, ${BAR()} ${state.unit}`}
function plates(load,bar){
  if(load==null)return "";
  bar=bar??BAR();const set=state.unit==="kg"?[25,20,15,10,5,2.5,1.25]:[45,35,25,10,5,2.5];
  let side=(load-bar)/2; if(side<0)return "";
  const out=[];for(const p of set){while(side>=p-0.2){out.push(p);side-=p}}
  return out.length?`Per side on a ${bar} ${state.unit} bar: ${out.join(" + ")}`:`Empty ${bar} ${state.unit} bar`;
}
/* a logged barbell load as bar plus plates per side, for the last-time box */
function barPlates(load,bar){bar=bar??BAR();const step=state.unit==="kg"?1.25:2.5,side=roundTo((load-bar)/2,step);
  if(side<0)return `${load} ${state.unit}`;return side?`bar + ${plateList(side).join(" + ")}`:"empty bar"}
function barSetsTxt(e){
  const ss=(e.sets||[]).filter(s=>s&&num(s.reps)!=null),groups=[];
  for(const s of ss){const L=num(s.load),g=groups[groups.length-1];if(g&&g.load===L)g.sets.push(s);else groups.push({load:L,sets:[s]})}
  const bw=num(e.barw)??BAR();return groups.map(g=>(g.load!=null?`${barPlates(g.load,bw)} per side (${g.load} ${state.unit}) × `:"")+g.sets.map(s=>repTxt(s)+(num(s.rir)>0?" (RIR "+s.rir+")":"")+(s.rom?" (short ROM)":"")).join(" · ")).join("; ");
}

/* ---------- diagrams ---------- */
/* ---------- muscle groups: where each one is, front or back, and what it does ----------
   Anatomy follows the linked Wikipedia articles; hub is Huberman naming or describing the muscle, linked to that moment of the video. */
const WP=t=>"https://en.wikipedia.org/wiki/"+t;
const YTQ=(v,s)=>`https://www.youtube.com/watch?v=${v}&t=${s}s`;
const SIDE={front:"Front of the body",back:"Back of the body",both:"Front and back"};
const MUS={
 quads:{n:"Quadriceps",l:"quadriceps (quads)",pl:1,side:"front",short:"front of the thigh",
   latin:"Quadriceps femoris",full:"Quadriceps femoris: four muscles, the rectus femoris and three vastus muscles.",
   where:"The front of the thigh, from the hip down to just above the knee.",
   doesShort:"Straighten the knee",does:"They straighten the knee. The rectus femoris, the one that crosses the hip, also helps lift the thigh.",
   life:"Standing up from a chair, climbing stairs, kicking a ball.",which:"straightens the knee, as when you stand up from a chair",
   hub:{q:"your legs, meaning your quadricep muscles, your hamstrings, your glutes, and your calves",v:"CbEFgDFQBvk",s:0,l:"Day 2 video"},wiki:"Quadriceps"},
 hamstrings:{n:"Hamstrings",l:"hamstrings",pl:1,side:"back",short:"back of the thigh",
   latin:"Biceps femoris, semitendinosus and semimembranosus",full:"Three muscles: the biceps femoris, semitendinosus and semimembranosus.",
   where:"The back of the thigh, from the sit bones at the bottom of the pelvis to just below the knee.",
   doesShort:"Bend the knee and pull the thigh back",does:"They bend the knee and pull the thigh back at the hip.",
   life:"Pushing your hips back to pick something up, sprinting.",which:"bends the knee and pulls the thigh back at the hip",
   hub:{q:"curl the weight until I feel really strong contraction in the hamstrings",v:"CbEFgDFQBvk",s:497,l:"Day 2 video"},wiki:"Hamstring"},
 glutes:{n:"Glutes",l:"glutes",pl:1,side:"back",short:"buttocks",
   latin:"Gluteus maximus, medius and minimus",full:"Three muscles: the gluteus maximus, medius and minimus.",
   where:"The buttocks, from the back of the pelvis to the top of the thigh bone.",
   doesShort:"Drive the thigh back and out to the side at the hip",does:"They drive the thigh back at the hip, straightening it, and move the leg out to the side.",
   life:"Climbing stairs, standing up out of a deep squat, running uphill.",which:"straightens the hip, driving the thigh back, as when you climb stairs",
   hub:{q:"a forward lean at the waist, which puts more of a glute emphasis",v:"CbEFgDFQBvk",s:233,l:"Day 2 video"},wiki:"Gluteal_muscles"},
 calves:{n:"Calves",l:"calves",pl:1,side:"back",short:"back of the lower leg",
   latin:"Gastrocnemius and soleus",full:"Two muscles: the gastrocnemius on top and the soleus underneath, joined to the heel by the Achilles tendon.",
   where:"The back of the lower leg, from just above the knee down to the heel.",
   doesShort:"Point the foot and lift the heel",does:"They point the foot down and lift the heel, raising you onto your toes.",
   life:"Walking, running, jumping, rising onto tiptoe.",which:"lifts the heel and raises you onto your toes",
   hub:{q:"The Calves are targeted by what is essentially propping yourself up on your toes",v:"CbEFgDFQBvk",s:632,l:"Day 2 video"},wiki:"Triceps_surae_muscle"},
 chest:{n:"Chest",l:"pecs",pl:1,side:"front",short:"front of the upper chest",
   latin:"Pectoralis major",full:"Pectoralis major, the \"pecs\": a fan-shaped muscle on each side of the chest.",
   where:"The front of the upper chest, fanning from the breastbone and collarbone to the upper arm.",
   doesShort:"Bring the upper arm forward and across the body",does:"They bring the upper arm forward and across the body, and turn it inward.",
   life:"Pushing a heavy door, pushing yourself up off the floor, hugging.",which:"brings the upper arm forward and across the body, as in a push-up",
   hub:{q:"the bench press. And of course, it targets the pectoralis muscles.",v:"UEU6NYLRi6o",s:53,l:"Day 4 video"},wiki:"Pectoralis_major"},
 lats:{n:"Lats",l:"lats",pl:1,side:"back",short:"sides of the back",
   latin:"Latissimus dorsi",full:"Latissimus dorsi, Latin for \"broadest muscle of the back\".",
   where:"The sides of the back. Each one fans out from under the armpit, down the side of the back, to the lower spine and the top of the pelvis.",
   doesShort:"Pull the upper arm down and back toward the body",does:"They pull the upper arm down and back toward the body, and give the back its V shape.",
   life:"Climbing, pulling yourself up, rowing a boat, pulling open a heavy door.",which:"pulls the upper arm down and back toward the body, as when you climb or row",
   hub:{q:"the lats are much bigger muscles than the bicep muscles",v:"UEU6NYLRi6o",s:373,l:"Day 4 video"},wiki:"Latissimus_dorsi_muscle"},
 traps:{n:"Traps",l:"traps",pl:1,side:"back",short:"upper and middle back",
   latin:"Trapezius",full:"Trapezius: a kite-shaped muscle with upper, middle and lower parts.",
   where:"A kite shape on the upper back: from the base of the skull and the neck, down the middle of the back, and out to the tops of the shoulders.",
   doesShort:"Shrug the shoulder blades up, squeeze them together and pull them down",does:"They move the shoulder blades: the upper part shrugs them up, the middle squeezes them together, the lower part pulls them down.",
   life:"Shrugging, carrying heavy bags, holding the shoulders back.",which:"shrugs the shoulder blades up and squeezes them together",
   hub:{q:"upper traps, middle traps are kind of this kite shaped muscle",v:"UEU6NYLRi6o",s:335,l:"Day 4 video"},wiki:"Trapezius"},
 lowerback:{n:"Lower back",l:"spinal erectors",pl:1,side:"back",short:"either side of the spine, low on the back",
   latin:"Erector spinae",full:"Erector spinae, the \"spinal erectors\": columns of muscle up either side of the spine.",
   where:"Two columns of muscle running up either side of the spine, thickest in the lower back.",
   doesShort:"Straighten the back and hold it upright",does:"They straighten the back, hold it upright, and help it twist.",
   life:"Standing up straight, lifting something from a bent-over position.",which:"straightens the spine and holds it upright",
   hub:{q:"Then you lift up using the spinal erector muscles.",v:"UEU6NYLRi6o",s:631,l:"Day 4 video"},wiki:"Erector_spinae_muscles"},
 abs:{n:"Abs",l:"abs",pl:1,side:"front",short:"front of the belly",
   latin:"Rectus abdominis",full:"Rectus abdominis, the \"six-pack\": a pair of long, segmented muscles.",
   where:"Down the front of the belly, from the lower ribs and breastbone to the pubic bone.",
   doesShort:"Curl the ribs toward the hips and brace the belly",does:"They curl the ribs toward the hips, bending the trunk forward, and brace the belly before a heavy lift.",
   life:"Sitting up from lying down, bracing before a heavy lift.",which:"curls the ribs toward the hips, as in a sit-up",
   hub:{q:"What it really means is chest and back, abdominals and neck.",v:"UEU6NYLRi6o",s:0,l:"Day 4 video"},wiki:"Rectus_abdominis_muscle"},
 obliques:{n:"Obliques",l:"obliques",pl:1,side:"front",short:"sides of the waist",
   latin:"External and internal obliques",full:"The external and internal obliques: flat, layered muscles on each side of the waist.",
   where:"The sides of the waist, from the lower ribs to the top of the pelvis.",
   doesShort:"Twist the trunk and bend it to the side",does:"They twist the trunk and bend it to the side.",
   life:"Turning to look behind you, swinging a bat or racket.",which:"twists the trunk and bends it to the side",wiki:"Abdominal_external_oblique_muscle"},
 hipflexors:{n:"Hip flexors",l:"hip flexors",pl:1,side:"front",short:"front of the hip",
   latin:"Iliopsoas",full:"Mainly the iliopsoas (the psoas major and iliacus), helped by the rectus femoris of the quadriceps.",
   where:"Deep at the front of the hip, from the lower spine and the inside of the pelvis to the top of the thigh bone.",
   doesShort:"Lift the thigh toward the chest",does:"They lift the thigh toward the chest.",
   life:"Climbing stairs, lifting the knee to run, hanging leg raises.",which:"lifts the thigh toward the chest",wiki:"Iliopsoas"},
 delts:{n:"Shoulders",l:"deltoids (delts)",pl:1,side:"both",short:"cap of each shoulder",
   latin:"Deltoids",full:"Deltoids, the \"delts\": front (anterior), side and rear (posterior) heads.",
   where:"The rounded cap of each shoulder, wrapping over the joint from front to back.",
   doesShort:"Lift the arm forward, out to the side, and back",does:"They lift the arm: the front head forward, the side head out to the side, the rear head back.",
   life:"Lifting a bag onto a high shelf, reaching out to the side.",which:"lifts the arm forward, out to the side and back",
   hub:{q:"You have a front or anterior side and a rear delt.",v:"IzpGEk-2th4",s:142,l:"Day 7 video"},wiki:"Deltoid_muscle"},
 biceps:{n:"Biceps",l:"biceps",pl:1,side:"front",short:"front of the upper arm",
   latin:"Biceps brachii",full:"Biceps brachii: a two-headed muscle of the upper arm.",
   where:"The front of the upper arm, between the shoulder and the elbow.",
   doesShort:"Bend the elbow and turn the palm up",does:"They bend the elbow and turn the palm up.",
   life:"Lifting a cup, carrying a bag with a bent arm, turning a doorknob.",which:"bends the elbow and turns the palm up",
   hub:{q:"the primary one is to bring the wrist toward the shoulder",v:"IzpGEk-2th4",s:284,l:"Day 7 video"},wiki:"Biceps"},
 triceps:{n:"Triceps",l:"triceps",pl:1,side:"back",short:"back of the upper arm",
   latin:"Triceps brachii",full:"Triceps brachii: a three-headed muscle (long, lateral and medial heads).",
   where:"The back of the upper arm, from the shoulder to the elbow.",
   doesShort:"Straighten the elbow",does:"They straighten the elbow. The long head, which crosses the shoulder, also helps pull the arm back.",
   life:"Pushing yourself up from a chair, pushing a door open.",which:"straightens the elbow",
   hub:{q:"triceps, which as the name suggests, has three different heads",v:"IzpGEk-2th4",s:426,l:"Day 7 video"},wiki:"Triceps"},
 forearms:{n:"Forearms",l:"forearms",pl:1,side:"both",short:"between the elbow and the wrist",nowhere:1,noside:1,nofull:1,
   latin:"Wrist and finger flexors and extensors",full:"Many small muscles: the wrist and finger flexors on the palm side, the extensors on the back, and the brachioradialis.",
   where:"Between the elbow and the wrist: the gripping muscles on the palm side, the extensors on the back.",
   doesShort:"Grip, and bend and straighten the wrist",does:"They close the hand to grip, bend and straighten the wrist, and turn the hand palm up or down.",
   life:"Carrying heavy bags, opening a jar, hanging from a bar.",which:"grips, and bends and straightens the wrist",wiki:"Forearm"},
 neck:{n:"Neck",l:"neck muscles",pl:1,side:"both",short:"front, sides and back of the neck",nowhere:1,noside:1,nofull:1,
   latin:"Sternocleidomastoid and neck extensors",full:"In front, the strap-like sternocleidomastoid down each side; at the back, the top of the trapezius and the upper spinal erectors.",
   where:"Around the neck: the sternocleidomastoid runs down each side of the front, from behind the ear to the breastbone; the extensors run up the back to the base of the skull.",
   doesShort:"Nod, tip back, turn and tilt the head",does:"The front muscles bend the neck forward and turn the head; the back muscles tip it back and hold it up.",
   life:"Holding the head up, turning to look over your shoulder.",which:"nods the head forward, tips it back and turns it",
   hub:{q:"That's torso day, chest, back, core, neck.",v:"UEU6NYLRi6o",s:821,l:"Day 4 video"},wiki:"Sternocleidomastoid_muscle",wiki2:"Trapezius"}
};
const MK=Object.keys(MUS);
const mterm=(k,label)=>MUS[k]?`<button type="button" class="term" data-mterm="${k}" aria-expanded="false" aria-controls="gloss">${label}</button>`:label;
const PLANEX=()=>new Set(Object.values(PLAN).flatMap(P=>(P.blocks||[]).flatMap(b=>[b.ex,...(b.alt||[])])));
/* exercises in the plan that work a muscle group as a main muscle (or, with sec, as a helper) */
function planExFor(k,sec){const inP=PLANEX();return [...inP].filter(id=>{const e=EX[id];return e&&e.m&&(sec?e.m.s:e.m.p).includes(k)})}

/* ---------- body map: every muscle group, front and back ---------- */
/* a tapered capsule from (x1,y1), half-width w1, to (x2,y2), half-width w2 */
function capP(x1,y1,w1,x2,y2,w2){const dx=x2-x1,dy=y2-y1,L=Math.hypot(dx,dy)||1,nx=-dy/L,ny=dx/L,f=n=>Math.round(n*100)/100;
  return `M${f(x1+nx*w1)},${f(y1+ny*w1)} L${f(x2+nx*w2)},${f(y2+ny*w2)} A${w2},${w2} 0 0 0 ${f(x2-nx*w2)},${f(y2-ny*w2)} L${f(x1-nx*w1)},${f(y1-ny*w1)} A${w1},${w1} 0 0 0 ${f(x1+nx*w1)},${f(y1+ny*w1)} Z`}
const ELL=(cx,cy,rx,ry)=>`M${cx-rx},${cy} A${rx},${ry} 0 1 0 ${cx+rx},${cy} A${rx},${ry} 0 1 0 ${cx-rx},${cy} Z`;
/* shapes for a figure centred on x=0; a 1 in the last place mirrors the shape onto the other side */
const BODY=[[ELL(0,15,9.5,11.5)],["M-5,24 h10 v12 h-10 Z"],
  ["M-19,34 C-25,35 -27,42 -24,50 L-18,88 C-19,96 -20,102 -19,110 L19,110 C20,102 19,96 18,88 L24,50 C27,42 25,35 19,34 Z"],
  [capP(25,40,6,29,78,4.5),1],[capP(29.5,80,4.6,33,110,3),1],[ELL(33.8,116,3.4,5.5),1],
  [capP(10,108,9.5,10.5,150,5.5),1],[capP(10.5,152,5.8,9.5,196,3.2),1],[ELL(10.5,201,4.2,3),1]];
const MSHAPE={front:[
  ["neck",capP(5.4,24,1.5,2,34,1.7),1],
  ["delts",capP(23.5,38.5,6.2,27,52,3.6),1],
  ["chest","M1.5,39 L17,38 C22,40 23,49 18,55 C12,60 5,59 1.5,57 Z",1],
  ["biceps",capP(27,56,3.6,29.2,74,2.8),1],
  ["forearms",capP(30,84,3.8,32.6,106,2.2),1],
  ["abs","M-7,61 L7,61 L7.5,93 C5,99 -5,99 -7.5,93 Z"],
  ["obliques","M10.5,62 C15.5,64 18,74 17.2,85 C16.6,91 14,95 11,98 C12.6,88 12.6,72 10.5,62 Z",1],
  ["hipflexors",capP(8,100,2.4,12.5,113,2.6),1],
  ["quads",capP(10.2,117,7.4,10.6,145,4.6),1]],
 back:[
  ["lats","M15,44 C21,50 22,64 18,78 C15,87 10,93 5,97 L6,72 C8,61 10,51 15,44 Z",1],
  ["traps","M0,27 L4,31 L21,36 L16,41 L7,57 L0,72 L-7,57 L-16,41 L-21,36 L-4,31 Z"],
  ["neck",capP(2.6,24,1.6,2.6,31,1.8),1],
  ["delts",capP(23.5,38.5,6.2,27,52,3.6),1],
  ["triceps",capP(26.6,53,3.8,29,74,2.8),1],
  ["forearms",capP(30,84,3.8,32.6,106,2.2),1],
  ["lowerback",capP(3.4,75,2.8,3.6,102,3.6),1],
  ["glutes","M1,104 C8,101 17,103 18,111 C18.5,119 11,122 5,120 C2,119 1,116 1,112 Z",1],
  ["hamstrings",capP(10.2,127,6.6,10.6,148,4.2),1],
  ["calves",capP(10.4,160,5.9,9.8,184,2.8),1]]};
const mir=(d,m)=>`<path d="${d}"/>`+(m?`<path d="${d}" transform="scale(-1,1)"/>`:"");
const SIL=BODY.map(([d,m])=>mir(d,m)).join("");
/* o.p: main muscles (accent), o.s: helpers (lighter), o.titles: hover names (off for quiz figures), o.pick: tappable */
function bodyMap(o){
  o=o||{};const p=new Set(o.p||[]),s=new Set(o.s||[]),T=o.titles!==false;
  const fig=(view,cx)=>`<g transform="translate(${cx},0)"><g fill="var(--body)">${SIL}</g><g stroke="var(--surface)" stroke-width=".6" stroke-linejoin="round">${MSHAPE[view].map(([k,d,m])=>
    `<g data-mk="${k}" fill="${p.has(k)?"var(--accent)":s.has(k)?"var(--mus2)":"var(--muscle)"}">${T?`<title>${esc(MUS[k].n)}</title>`:""}${mir(d,m)}</g>`).join("")}</g></g>`;
  return `<svg class="bodymap${o.pick?" pick":""}" viewBox="0 0 200 222" role="img" aria-label="${esc(o.label||"Front and back of the body")}">${fig("front",50)}${fig("back",150)}
    <text x="50" y="217" text-anchor="middle" font-size="9" fill="var(--muted)" font-family="IBM Plex Mono,monospace">front</text>
    <text x="150" y="217" text-anchor="middle" font-size="9" fill="var(--muted)" font-family="IBM Plex Mono,monospace">back</text></svg>`;
}
function muscleMap(m){
  const nm=k=>MUS[k]?.n||k,al="Muscles worked: "+m.p.map(nm).join(", ")+(m.s.length?"; also "+m.s.map(k=>nm(k).toLowerCase()).join(", "):"");
  return bodyMap({p:m.p,s:m.s,label:al})+`<div style="font-size:.78rem;margin-top:4px"><span style="color:var(--accent);font-weight:600">${m.p.map(k=>mterm(k,esc(nm(k)))).join(", ")}</span>${m.s.length?` <span class="muted">· also ${m.s.map(k=>mterm(k,esc(nm(k).toLowerCase()))).join(", ")}</span>`:""}</div>`;
}
function muscleTip(k){const M=MUS[k];
  return `<b>${esc(M.n)}</b><span class="sidetag">${esc(SIDE[M.side])}</span><div class="gmap">${bodyMap({p:[k],label:`The ${M.l} highlighted: ${M.short}`})}</div>${esc(M.where)} ${esc(M.does)}<br><a href="#muscle-${k}">More in Muscles</a>`}

/* ---------- your notes, kept in the log: one per muscle group, or one per question ---------- */
const qnPending=new Set(),qnTimers={};
const editingNow=()=>{const a=document.activeElement;return !!(a&&a.closest&&a.closest("#view")&&/^(INPUT|TEXTAREA|SELECT)$/.test(a.tagName))};
const noteKey=q=>q.mk?"m-"+q.mk:q.id;
const noteText=key=>((state.qnotes||{})[key]?.text||"");
function noteBox(key,label,qt,mk,bare){
  return `<div class="qnote">${bare?"":`<label class="lbl" for="qn-${key}">${esc(label)}</label>`}<textarea id="qn-${key}" data-qnote="${key}" data-qt="${esc(qt)}"${mk?` data-qmk="${mk}"`:""} rows="2"${bare?` aria-label="${esc(label)}"`:""} placeholder="Anything that helps you remember">${esc(noteText(key))}</textarea><span class="qnstat" id="qns-${key}" aria-live="polite">${state.db?"":"Notes save only when the log is connected."}</span></div>`}
document.addEventListener("input",ev=>{const el=ev.target;if(!el.dataset||!el.dataset.qnote)return;const key=el.dataset.qnote;
  state.qnotes=state.qnotes||{};state.qnotes[key]={key,text:el.value,q:el.dataset.qt||"",mk:el.dataset.qmk||"",at:new Date().toISOString()};qnPending.add(key);
  const st=document.getElementById("qns-"+key);if(st)st.textContent=state.db?"Saving…":"Not saved: the log isn't connected here.";
  clearTimeout(qnTimers[key]);qnTimers[key]=setTimeout(()=>saveNote(key),700)});
async function saveNote(key){const st=()=>document.getElementById("qns-"+key);if(!state.db)return;
  try{await state.db.doc("quiznotes/"+key).set(JSON.parse(JSON.stringify(state.qnotes[key])));qnPending.delete(key);if(st())st().textContent="Saved"}
  catch(e){if(st())st().textContent="Couldn't save; edit again to retry."}}

/* ---------- the Muscles page ---------- */
function renderMuscles(){
  const k=MUS[state.msel]?state.msel:"lats",M=MUS[k];state.msel=k;
  const exs=planExFor(k),also=planExFor(k,true).filter(id=>!exs.includes(id));
  const exl=ids=>ids.map(id=>`<a class="exref" href="#ex-${id}">${esc(EX[id].name)}</a>`).join(", ");
  const list=side=>MK.filter(x=>MUS[x].side===side).map(x=>`<li><button type="button" class="mitem${x===k?" on":""}" id="muscle-${x}" data-msel="${x}" aria-pressed="${x===k}"><b>${esc(MUS[x].n)}</b><span>${esc(MUS[x].short)}</span></button></li>`).join("");
  $("#view").innerHTML=`<div class="dayhead"><div><h2>Muscles</h2><p>Every muscle group the plan trains: where it is, whether it's on the front or the back, and what it does. Tap a muscle on the figure or a name in the lists.</p></div><button type="button" class="btn primary" data-quiz="set-muscles">Quiz me on muscles</button></div>
  <div class="mgrid">
    <figure class="panel bodyfig">${bodyMap({p:[k],pick:true,label:`Front and back of the body with the ${M.l} highlighted: ${M.short}`})}<figcaption>Highlighted: <b>${esc(M.n)}</b>, ${esc(M.short)}.</figcaption></figure>
    <section class="panel mdetail" id="mdetail" tabindex="-1" aria-labelledby="mdh"><h3 id="mdh">${esc(M.n)}<span class="sidetag">${esc(SIDE[M.side])}</span></h3>
      <p class="muted">${esc(M.full)}</p>
      <dl class="mdl"><dt>Where</dt><dd>${esc(M.where)}</dd><dt>What ${M.pl?"they do":"it does"}</dt><dd>${esc(M.does)}</dd><dt>In daily life</dt><dd>${esc(M.life)}</dd>
        <dt>In this plan</dt><dd>${exs.length?exl(exs):"No exercise in the plan aims at it directly."}${also.length?`<br><span class="muted">Also helped by: ${exl(also)}</span>`:""}</dd>
        ${M.hub?`<dt>Huberman</dt><dd>“${esc(M.hub.q)}” <a class="src" href="${YTQ(M.hub.v,M.hub.s)}" target="_blank" rel="noopener">${esc(M.hub.l)} at ${ts(M.hub.s)}</a></dd>`:""}</dl>
      <p class="src">Anatomy: <a class="src" href="${WP(M.wiki)}" target="_blank" rel="noopener">Wikipedia, ${esc(M.wiki.replace(/_/g," "))}</a>${M.wiki2?` · <a class="src" href="${WP(M.wiki2)}" target="_blank" rel="noopener">${esc(M.wiki2.replace(/_/g," "))}</a>`:""}</p>
      ${noteBox("m-"+k,`Your notes on the ${M.l}`,M.n,k)}
    </section>
  </div>
  <div class="mlists">${[["front","Front of the body"],["back","Back of the body"],["both","Front and back"]].map(([s,t])=>`<section><h3>${t}</h3><ul class="mlist">${list(s)}</ul></section>`).join("")}</div>`;
}
/* from a list: bring the figure and its details back into view; from the figure: stay put */
function selMuscle(k,fromList){if(!MUS[k])return;state.msel=k;try{history.replaceState(null,"","#muscle-"+k)}catch(e){}render();
  const g=document.querySelector(".mgrid");if(fromList&&g&&g.getBoundingClientRect().top<0)g.scrollIntoView({block:"start"})}
document.addEventListener("click",ev=>{
  const b=ev.target.closest("[data-msel]");if(b){const k=b.dataset.msel;selMuscle(k,true);const n=document.getElementById("muscle-"+k);if(n)n.focus({preventScroll:true});return}
  const g=ev.target.closest(".bodymap.pick [data-mk]");if(g)selMuscle(g.dataset.mk,false)});

/* ---------- muscle-group questions: where, front or back, what it does, its name, the plan's exercises ---------- */
const capF=s=>s[0].toUpperCase()+s.slice(1),lcF=s=>s[0].toLowerCase()+s.slice(1);
/* giveaway check: does an exercise name contain a muscle group's own word ("Biceps Curl" for the biceps)? */
const MWORDS={quads:["quad","quadricep"],hamstrings:["hamstring","ham"],glutes:["glute"],calves:["calf","calve"],chest:["chest","pec"],lats:["lat"],traps:["trap"],lowerback:["back"],abs:["ab"],obliques:["oblique"],hipflexors:["hip","flexor"],delts:["delt","deltoid","shoulder"],biceps:["bicep"],triceps:["tricep"],forearms:["forearm"],neck:["neck"]};
const namesM=(name,k)=>{const w=String(name).toLowerCase().split(/[^a-z]+/).filter(Boolean).map(x=>x.replace(/s$/,""));return w.some(x=>(MWORDS[k]||[]).includes(x))};
const namesAnyM=name=>Object.keys(MWORDS).some(k=>namesM(name,k));
/* wrong answers that name no muscle first, so a muscle word never singles one option out */
const plainFirst=a=>[...a.filter(x=>!namesAnyM(x)),...a.filter(x=>namesAnyM(x))];
function MQ(){
  const qs=[],inP=PLANEX();
  /* three wrong answers from other muscle groups, from the same side of the body first */
  const pickO=(k,f)=>{const o=shuffle(MK.filter(x=>x!==k&&MUS[x][f]&&MUS[x][f]!==MUS[k][f]));
    return [...o.filter(x=>MUS[x].side===MUS[k].side),...o.filter(x=>MUS[x].side!==MUS[k].side)].slice(0,3).map(x=>MUS[x][f])};
  MK.forEach(k=>{const M=MUS[k],L=M.l,are=M.pl?"are":"is",doo=M.pl?"do":"does",base={mk:k,go:"muscle-"+k};
    if(!M.nowhere)qs.push({...base,id:`mq-where-${k}`,kind:"where",q:`Where ${are} the ${L}?`,accept:[capF(M.short)],o:()=>[capF(M.short),...pickO(k,"short").map(capF)],why:`${M.n}: ${lcF(M.where)}`});
    if(!M.noside)qs.push({...base,id:`mq-side-${k}`,kind:"side",q:`Front or back of the body: the ${L}?`,accept:[SIDE[M.side]],o:[SIDE[M.side],...Object.values(SIDE).filter(x=>x!==SIDE[M.side])],fixed:Object.values(SIDE),why:`${SIDE[M.side]}. ${M.where}`});
    qs.push({...base,id:`mq-does-${k}`,kind:"does",q:`What ${doo} the ${L} do?`,accept:[M.doesShort],o:()=>[M.doesShort,...pickO(k,"doesShort")],why:`${M.does} In daily life: ${M.life}`});
    qs.push({...base,id:`mq-which-${k}`,kind:"which",q:`Which muscle group ${M.which}?`,accept:[M.n],o:()=>[M.n,...pickO(k,"n")],why:`The ${L}, ${M.short}. ${M.does}`});
    qs.push({...base,id:`mq-fig-${k}`,kind:"fig",fig:k,q:"Which muscle group is highlighted?",listq:`Diagram with the ${L} highlighted: name the muscle group.`,accept:[M.n],o:()=>[M.n,...pickO(k,"n")],why:`The ${L}: ${lcF(M.where)}`});
    if(!M.nofull)qs.push({...base,id:`mq-full-${k}`,kind:"full",q:`What is the anatomical name for the ${L}?`,accept:[M.latin],o:()=>[M.latin,...pickO(k,"latin")],why:M.full});
    const ex=planExFor(k);if(ex.length){const not=[...inP].filter(id=>EX[id]&&EX[id].kind==="strength"&&EX[id].m&&!EX[id].m.p.includes(k)&&!EX[id].m.s.includes(k));
      const clean=ex.filter(id=>!namesM(EX[id].name,k)),showFig=!clean.length;
      if(not.length>=3)qs.push({...base,id:`mq-ex-${k}`,kind:"ex",...(showFig?{fig:k,q:"Which exercise in this plan mainly trains the highlighted muscle group?",listq:`Diagram with the ${L} highlighted: which exercise in this plan mainly trains it?`}:{q:`Which exercise in this plan mainly trains the ${L}?`}),accept:ex.map(id=>EX[id].name),o:()=>[EX[shuffle(showFig?ex:clean)[0]].name,...plainFirst(shuffle(not).map(id=>EX[id].name)).slice(0,3)],why:`In this plan: ${ex.map(id=>EX[id].name).join(", ")}.`})}
  });
  return qs}
/* a round of 12: up to 4 missed before, then one question per muscle group until full */
function muscleRound(n){n=n||12;const pool=MQ(),mc=missCounts(),out=shuffle(pool.filter(q=>mc[q.id])).slice(0,4),used=new Set(out.map(q=>q.mk));
  for(const q of shuffle(pool)){if(out.length>=n)break;if(out.includes(q)||used.has(q.mk))continue;out.push(q);used.add(q.mk)}
  return out}
const QSETS={review:"Review",muscles:"Muscle groups",plan:"How the plan works",missed:"Missed before",day:"Day quiz"};

/* warm-up ramp + work sets, drawn to scale as % of work load */
/* warm-up sets: the book's 2–3-set ramp before the day's first lift (3 when work sets are heavy: the range starts at 7 reps or fewer, the book's "failure around 5–7 reps");
   one light set before each later lift, this page's reading of the book's 1–3-per-exercise range */
function warmups(b,bi,dayKey){
  if(b.unit!=="reps"||!PLAN[dayKey])return [];
  const first=PLAN[dayKey].blocks.findIndex(x=>x.unit==="reps")===bi;
  if(first)return b.min<=7?[[40,"6–10"],[65,"4–8"],[75,"2–4"]]:[[40,"6–10"],[65,"4–8"]];
  return [[40,"6–10"]];
}
function rampSVG(b,target,wu){
  const rows=[];
  (wu||[]).forEach((w,i)=>rows.push(["W"+(i+1),w[0],w[1]]));
  for(let i=1;i<=maxSets(b);i++)rows.push(["S"+i,100,rangeTxt(b.min,b.max)]);
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
  const bpm=max?`<text x="${W/2}" y="66" font-size="11" text-anchor="middle" fill="var(--blue)" font-family="IBM Plex Mono,monospace">target ${Math.round(max*z[0])}–${Math.round(max*z[1])} bpm (max ≈ 220 − ${age} = ${max})</text>`:`<text x="${W/2}" y="66" font-size="10" text-anchor="middle" fill="var(--muted)" font-family="IBM Plex Sans,sans-serif">set Born at the top of the page</text>`;
  return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Target heart-rate band ${z[0]*100} to ${z[1]*100} percent of max">${bands}${tgt}${ticks}${bpm}</svg>`;
}
function intervalSVG(rounds){
  const segs=[["warm",420,"var(--blue-soft)"]];for(let i=0;i<rounds;i++){segs.push(["hard",30,"var(--blue)"],["easy",60,"var(--blue-soft)"])}
  const total=segs.reduce((a,s)=>a+s[1],0),W=320,sx=t=>t/total*W;let t=0;
  const r=segs.map(([n,d,c])=>{const x=sx(t);t+=d;const hgt=n==="hard"?30:n==="easy"?12:16;return `<rect x="${x}" y="${34-hgt}" width="${Math.max(sx(d)-0.6,0.8)}" height="${hgt}" fill="${c}"/>`}).join("");
  return `<svg viewBox="0 0 ${W} 58" role="img" aria-label="Interval timeline, ${rounds} rounds"><line x1="0" x2="${W}" y1="34" y2="34" stroke="var(--line)"/>${r}
   <text x="0" y="50" font-size="9" fill="var(--muted)" font-family="IBM Plex Mono,monospace">7 min warm-up</text><text x="${W}" y="50" font-size="9" text-anchor="end" fill="var(--muted)" font-family="IBM Plex Mono,monospace">≈${Math.round(total/60)} min</text></svg>`;
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
  if((!ph||!ph.length)&&THUMB[id])return "";
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
function sheetClip(id){const x=exClips(id)[0];if(!x)return "";
  return `<div class="sheetclip"><div class="lbl">${x.rel?"Related clip":"Huberman's demo"} · ${HVID[x.v].day} ${ts(x.c.s)}</div>${wkChapter(x.c)}<a href="#ex-${id}" style="font-size:.8rem">Summary and transcript →</a></div>`}
/* the prominent "do this today" card: work load as plates per side, the warm-up ramp worked out, and last time in one line */
function loadTxt(exId,load,bar,brief){if(load==null)return "";
  if(EX[exId]?.bar){const step=state.unit==="kg"?1.25:2.5,side=Math.max(0,roundTo((load-bar)/2,step));
    return side?`${side} ${state.unit}/side <small>(${plateList(side).join(" + ")})${brief?"":` · ${totalOf(bar,side)} ${state.unit} total`}</small>`:brief?"empty bar":`empty bar <small>· ${bar} ${state.unit}</small>`}
  if(DBP.has(exId))return brief?`${load} ${state.unit} each`:`${load} ${state.unit} each <small>· ${dbTot(load)} total</small>`;
  return `${load} ${state.unit}`}
function suggestHTML(b,exId,v,target,wu){
  const bar=barFor(exId),reps=rangeTxt(b.min,b.max),u=state.unit;
  const head=target!=null?`<div class="big">${loadTxt(exId,target,bar)}</div><div class="why">${setsLabel(b)} work sets × ${reps} reps, to failure${v.txt?` · ${esc(v.txt)}`:""}</div>`
    :`<div class="big">${setsLabel(b)} × ${reps} reps</div><div class="why">${esc(v.txt||"")}</div>`;
  const w=wu.map(([pct,r],j)=>{const l=target!=null?roundTo(target*pct/100,inc()):null;
    return `<li><b>W${j+1}</b>${l==null?pct+"% of work load":loadTxt(exId,l,bar,1)} × ${r}</li>`}).join("");
  const s=`<li class="work"><b>S1–${setsLabel(b)}</b>${target!=null?loadTxt(exId,target,bar,1):"work load"} × ${reps}</li>`;
  const ll=v.last?`<div class="last">Last time, ${esc(fmtDate(v.last.date))}: ${esc(EX[exId]?.bar?barSetsTxt(v.last.entry):BWX.has(exId)?bwSetsTxt(v.last.entry):DBP.has(exId)?dbSetsTxt(v.last.entry):setsTxt(v.last.entry))}</div>`:"";
  return `<div class="suggest"><div class="lbl">Today's suggestion</div>${head}<ol>${w}${s}</ol>${ll}</div>`}
function entryFor(exKey){const d=state.doc||{};return (d.ex&&d.ex[exKey])||null}

function sheet(b,bi,dayKey){
  const choiceKey=dayKey+":"+bi;
  const logged=Object.keys((state.doc&&state.doc.ex)||{});
  let exId=pickEx(b,bi,dayKey);
  b=forEx(b,exId);
  const e=EX[exId], kind=e.kind;
  const v=verdict(b,exId);
  const entry=entryFor(exId)||{sets:[]};
  const cls=kind==="cardio"?"cardio":kind==="mobility"?"mob":"";
  const altSel=b.alt?`<select class="alt" id="alt-${dayKey}-${bi}" data-ck="${choiceKey}" aria-label="Exercise choice">${[b.ex,...b.alt].map(id=>`<option value="${id}" ${id===exId?"selected":""}>${esc(EX[id].name)} (${daysDone(id)})</option>`).join("")}</select>`:"";

  /* prescription diagram */
  let rx="",sug="";
  if(b.unit==="reps"){
    /* bodyweight lifts have no work load to ramp from: their load is only what is added or assisted */
    const typed=num(entry.sets?.[0]?.load);
    const target=BWX.has(exId)?null:typed??v.load;
    const wu=warmups(b,bi,dayKey);
    sug=suggestHTML(b,exId,v,target,wu);
    rx=`<div><div class="lbl">${wu.length} ${term("tags","warm-up set"+(wu.length===1?"":"s"))} (light, never near failure) + ${setsLabel(b)} work sets${target!=null?` · work load ${target} ${state.unit}${DBP.has(exId)?` per dumbbell (${dbTot(target)} total)`:""}`:""}</div>${rampSVG(b,target,wu)}
        <div class="plates">${wu.length>1?"First lift of the day: the book's warm-up ramp.":"Your muscles are already warm from the first lift: one light feeler set is enough."} Only the work sets count toward progress.</div>
        ${e.bar&&target!=null?`<div class="plates">${plates(target,barFor(exId))}</div>`:""}</div>`;
  } else if(b.unit==="sec"){rx=b.max==null?"":`<div><div class="lbl">Holds (dark = minimum, light = goal)</div>${holdSVG(b)}</div>`}
  else if(b.unit==="rounds"){const r=num(entry.sets?.[0]?.rounds)??b.min;rx=`<div><div class="lbl">Session shape</div>${intervalSVG(r)}</div><div><div class="lbl">${term("zones","Heart-rate zone")} in the hard efforts · ${term("maxhr","max HR")}</div>${zoneSVG(exId)}</div>`}
  else if(b.unit==="min"){rx=`<div><div class="lbl">${term("zones","Heart-rate zone")} target · ${term("maxhr","max HR")}</div>${zoneSVG(exId)}</div>`}

  /* log grid */
  const n=Math.max(maxSets(b),(entry.sets||[]).length);
  const lastSets=v.last?.entry?.sets||[];
  let head,rows="";
  if(b.unit==="reps"){
    const bw=e.bar?barFor(exId):null,bwx=BWX.has(exId);
    /* barbell lifts take plates per side and show the total; bodyweight lifts take no load per set; other lifts take the load */
    const dbp=DBP.has(exId);
    const loadCells=(idp,attrs,sv,ph,label)=>bwx?"":dbp
      ?`<td><input id="in-${exId}-${idp}-load" inputmode="decimal" ${attrs} data-f="load" value="${esc(sv.load??"")}" placeholder="${ph??""}" aria-label="${label} load per dumbbell"></td><td class="num tot" id="tot-${exId}-${idp}">${esc(dbTot(sv.load))}</td>`
      :bw==null
      ?`<td><input id="in-${exId}-${idp}-load" inputmode="decimal" ${attrs} data-f="load" value="${esc(sv.load??"")}" placeholder="${ph??""}" aria-label="${label} load"></td>`
      :`<td><input id="in-${exId}-${idp}-load" inputmode="decimal" ${attrs} data-f="side" value="${esc(sv.side??sideOf(num(sv.load),bw)??"")}" placeholder="${ph==null?"":typeof ph==="number"?sideOf(ph,bw):ph}" aria-label="${label} plates per side"></td><td class="num tot" id="tot-${exId}-${idp}">${esc(sv.load??"")}</td>`;
    head=`<tr><th>${term("tags","Set")}</th>${bwx?"":dbp?`<th>Per dumbbell (${state.unit})</th><th>Total</th>`:bw==null?`<th>Load (${state.unit})</th>`:`<th>Plates / side (${state.unit})</th><th>Total</th>`}<th>Reps${b.perSide?" / "+term("perside","side"):""}</th><th>Reps left (${term("rir","RIR")})</th><th title="Tick when the range of motion shrank in this set: the point of failure for some lifts">Short ROM</th><th>Note</th><th>Done at</th></tr>`;
    /* each set: a note, and the time it was finished (stamped when its reps are entered), with the time since the set before */
    const clk=x=>{if(!x)return "";if(/^\d{1,2}:\d{2}/.test(x))return x;const d=new Date(x);return isNaN(d)?"":d.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"})};
    const gap=(p,q)=>{const t1=Date.parse(p),t2=Date.parse(q);return isNaN(t1)||isNaN(t2)||t2<t1?"":fmtClock((t2-t1)/1000)};
    const noteTime=(idp,attrs,sv,prev)=>`<td><input id="in-${exId}-${idp}-note" ${attrs} data-f="note" value="${esc(sv.note??"")}" placeholder="note" aria-label="Note"></td><td class="at" id="at-${exId}-${idp}">${esc(clk(sv.at)||sv.end||sv.start||"")}${prev&&sv.at&&gap(prev,sv.at)?`<span class="rest">+${gap(prev,sv.at)} since last set</span>`:""}</td>`;
    /* one-side lifts: each work set has an L/R switch that splits its reps into left and right */
    const uni=UNI.has(exId);
    const repsIn=(i,s)=>`<input id="in-${exId}-${i}-reps" inputmode="numeric" data-ex="${exId}" data-i="${i}" data-f="reps" value="${esc(s.reps??"")}" placeholder="${rangeTxt(b.min,b.max)}" aria-label="Set ${i+1} reps">`;
    const lrBtn=(i,on)=>`<button type="button" class="lrb" data-lr="${exId}" data-i="${i}" aria-pressed="${on}" title="${on?"Back to one number for both sides":"Log left and right reps separately"}" aria-label="Set ${i+1}: ${on?"one number for both sides":"log left and right separately"}">L/R</button>`;
    const repsCell=(i,s)=>!uni?repsIn(i,s):lrSplit(s)
      ?`<span class="lrc">${["l","r"].map(f=>`<label class="lrs"><span>${f.toUpperCase()}</span><input id="in-${exId}-${i}-${f}" inputmode="numeric" data-ex="${exId}" data-i="${i}" data-f="${f}" value="${esc(s[f]??"")}" placeholder="${rangeTxt(b.min,b.max)}" aria-label="Set ${i+1} ${f==="l"?"left":"right"} reps"></label>`).join("")}${lrBtn(i,true)}</span>`
      :`<span class="lrc">${repsIn(i,s)}${lrBtn(i,false)}</span>`;
    /* warm-up rows: saved with the session, left out of progression and est. 1RM */
    const wuRows=warmups(b,bi,dayKey),wTarget=num(entry.sets?.[0]?.load)??v.load;
    wuRows.forEach(([pct,reps],j)=>{const s=entry.warmups?.[j]||{},ph=wTarget!=null?roundTo(wTarget*pct/100,inc()):pct+"%";
      rows+=`<tr class="wu"><td class="tag">W${j+1}</td>
      ${loadCells(`w${j}`,`data-ex="${exId}" data-w="1" data-i="${j}"`,s,ph,`Warm-up ${j+1}`)}
      <td><input id="in-${exId}-w${j}-reps" inputmode="numeric" data-ex="${exId}" data-w="1" data-i="${j}" data-f="reps" value="${esc(s.reps??"")}" placeholder="${reps}" aria-label="Warm-up ${j+1} reps"></td>
      <td class="muted" style="font-size:.78rem">light, not counted</td><td></td>${noteTime(`w${j}`,`data-ex="${exId}" data-w="1" data-i="${j}"`,s,entry.warmups?.[j-1]?.at)}</tr>`});
    for(let i=0;i<n;i++){const s=entry.sets?.[i]||{},L=lastSets[i]||{};
      const ph=v.load??num(L.load);
      rows+=`<tr class="work"><td class="tag">S${i+1}</td>
      ${loadCells(i,`data-ex="${exId}" data-i="${i}"`,s,ph,`Set ${i+1}`)}
      <td>${repsCell(i,s)}</td>
      <td><input id="in-${exId}-${i}-rir" inputmode="numeric" data-ex="${exId}" data-i="${i}" data-f="rir" value="${esc(s.rir??"")}" placeholder="0" aria-label="Set ${i+1} reps in reserve"></td><td class="rom"><input type="checkbox" id="in-${exId}-${i}-rom" data-ex="${exId}" data-i="${i}" data-f="rom"${s.rom?" checked":""} title="Range of motion got shorter in this set" aria-label="Set ${i+1}: range of motion got shorter"></td>${noteTime(i,`data-ex="${exId}" data-i="${i}"`,s,i?entry.sets?.[i-1]?.at:(entry.warmups||[]).filter(w=>w&&w.at).at(-1)?.at)}</tr>`}
  } else if(b.unit==="sec"){
    head=`<tr><th>${term("tags","Hold")}</th><th>Seconds${b.perSide?" / "+term("perside","side"):""}</th><th>Note</th></tr>`;
    for(let i=0;i<n;i++){const s=entry.sets?.[i]||{};
      rows+=`<tr class="work"><td class="tag">H${i+1}</td><td><input id="in-${exId}-${i}-sec" inputmode="numeric" data-ex="${exId}" data-i="${i}" data-f="sec" value="${esc(s.sec??"")}" placeholder="${b.max==null?"sec":rangeTxt(b.min,b.max)}" aria-label="Hold ${i+1} seconds"></td>
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
  if(warmups(b,bi,dayKey).length>2)chips.push(`<span class="chip">W3 only when work sets will fail at 5–7 reps</span>`);
  if(b.optional)chips.push(`<span class="chip opt">optional</span>`);
  if(v.txt)chips.push(`<span class="chip wrap ${v.cls}">${esc(v.txt)}</span>`);
  if(v.txt&&v.txt.includes("microplates"))chips.push(`<span class="chip">${term("micro","What are microplates?")}</span>`);
  if(v.cls)chips.push(`<span class="chip">${term("overload","Why add load?")}</span>`);

  const isActive=!!(state.doc&&state.doc.active&&state.doc.active.ex===exId);
  const closed=state.collapsed.has(choiceKey)&&!isActive;
  const doneSets=(entry.sets||[]).filter(s=>s&&["reps","sec","min","rounds"].some(f=>num(s[f])!=null)).length;
  const prog=doneSets?`<span class="chip ${doneSets>=b.sets?"up":""}">${doneSets}/${setsLabel(b)} logged</span>`:"";
  /* done: marked by hand, or every planned set logged unless unmarked. While the exercise is still in progress,
     logging every set doesn't count as done: the button stays "Mark done", so one tap finishes it and ends In progress
     (otherwise the button already showed "✓ Done" and a tap toggled it off, back to In progress) */
  const isDone=entry.done===true||(entry.done!==false&&doneSets>=b.sets&&!isActive);
  const restsDone=(entry.rests||[]).filter(r=>r&&r.sec!=null);
  const restLog=restsDone.length?`<span class="restlog">Rests logged: ${restsDone.map(r=>fmtClock(r.sec)).join(" · ")}</span>`:"";
  const restAttrs=b.rest?`data-rest="${b.rest[0]},${b.rest[1]}" data-restname="${esc(e.name)}" data-restex="${exId}"`:"";
  /* a rest running for this exercise: the rest buttons turn into a live "Resting" readout that ends it, and it keeps running after Mark done */
  const restingHere=!!(rest&&rest.ex===exId);
  const restLive=restingHere?`⏱ Resting <span class="num" data-restlive>${fmtClock((Date.now()-rest.t0)/1000)}</span> · End`:"";
  return `<article class="sheet ${cls}${closed?" closed":""}${isDone?" isdone":""}${isActive?" isactive":""}" data-exsheet="${exId}">
    <header class="sh">
      <button class="tog" data-tog="${choiceKey}" aria-expanded="${!closed}" aria-controls="body-${choiceKey.replace(/\W/g,"-")}"><span class="chev" aria-hidden="true"></span><h3>${isDone?"✓ ":""}${esc(e.name)}</h3></button>
      <span class="dose">${esc(doseTxt(b))}</span>${b.role?`<span class="chip rolechip">${esc(b.role)}${b.alt?" · pick one":""}</span>`:""}${altSel}
      <span class="mgroups" aria-label="Muscle groups">${musclesHTML(e.m)}</span>
      <span class="shchips">${isDone?"":`<button type="button" class="btn actbtn" data-active="${exId}" data-ck="${choiceKey}" ${restAttrs.replace("data-rest=","data-arest=")} aria-pressed="${isActive}">${isActive?"● In progress":"▶ Start"}</button>`}${restingHere?`<button type="button" class="btn hdrrest resting" data-reststop="1" aria-label="Rest in progress: tap to end it">${restLive}</button>`:b.rest&&isActive?`<button type="button" class="btn hdrrest" ${restAttrs}>⏱ Start rest</button>`:""}<button type="button" class="btn donebtn" data-done="${exId}" data-ck="${choiceKey}" aria-pressed="${isDone}">${isDone?"✓ Done":"Mark done"}</button><a class="exlink" href="#ex-${exId}">Exercise page &amp; clips →</a>${prog}${closed&&v.cls?`<span class="chip ${v.cls}">${v.cls==="up"?"add load":v.cls==="down"?"reduce":"hold load"}</span>`:""}${b.optional?`<span class="chip opt">optional</span>`:""}${e.custom?`<span class="chip opt">custom · not in the book</span>`:""}</span>
      ${closed&&v.last?`<p class="lastline" style="margin:4px 0 0">${lastLine(v)}</p>`:""}
      ${!closed&&DESC[exId]?`<p class="desc">${esc(DESC[exId][0])}</p>`:""}
      ${!closed?eqTags(exId):""}
      ${!closed&&e.aka?`<p class="aka"><span class="lbl">In the book's videos</span> ${esc(e.aka)}</p>`:""}
    </header>
    <div class="shbody" id="body-${choiceKey.replace(/\W/g,"-")}" ${closed?"hidden":""}>
    <div class="media">
      ${photosHTML(exId)}
      ${sheetClip(exId)}
      <div class="diagram"><div class="lbl">Muscles worked</div>${muscleMap(e.m)}</div>
      ${videosHTML(e)}
    </div>
    <div class="main">
      ${sug?`${sug}<details class="exdet" data-det="${choiceKey}"${state.openDet.has(choiceKey)?" open":""}><summary>Details: history, warm-up ramp, setup and form</summary>`:""}
      ${recentHTML(exId)}
      ${varsHTML(e)}
      ${b.note?`<div class="muted">${esc(b.note)}</div>`:""}
      <div class="chips">${chips.join("")}</div>
      <div class="rx">${rx}</div>
      <div class="howto"><div><div class="lbl">Setup</div><p>${wl(e.setup)}</p></div><div><div class="lbl">Movement</div><p>${wl(e.practice)}</p></div><div><div class="lbl">Watch for</div><p>${wl(e.cues)}</p></div></div>
      ${sug?"</details>":""}
      <div>
        ${e.bar&&b.unit==="reps"?`<label class="barw"><span class="lbl">Bar</span><input id="in-${exId}-barw" inputmode="decimal" data-barw="${exId}" value="${barFor(exId)}" aria-label="Bar weight for ${esc(e.name)}"> ${state.unit} · each set's total is the bar plus twice the plates per side</label>`:""}
        ${BWX.has(exId)&&b.unit==="reps"?`<div class="barw bwrow"><label><span class="lbl">Bodyweight</span><input id="in-${exId}-bwt" inputmode="decimal" data-bwt="1" value="${esc(bwFor()??"")}" placeholder="enter once" aria-label="Your bodyweight in ${state.unit}, saved with this session"> ${state.unit}</label><label><span class="lbl">Added</span><input id="in-${exId}-add" data-bwadd="${exId}" value="${esc(entry.add??"")}" placeholder="none" aria-label="Weight added to every set of ${esc(e.name)}: plus for a belt, minus for an assisted machine"> ${state.unit}</label><span>Every set is ${bwLoad(entry.add)}${num(entry.add)?"":": your bodyweight"}. Fill Added only for a weight belt (+25) or an assisted machine (−40). Bodyweight carries over to later sessions until you change it.</span></div>`:""}
        <div class="logwrap"><table class="log${b.unit==="reps"?" wide":""}"><thead>${head}</thead><tbody>${rows}</tbody></table></div>
        <div class="logfoot"><span class="lastline">${lastLine(v)}</span><span style="display:flex;gap:8px;flex-wrap:wrap">${restingHere?`<button class="btn resting" data-reststop="1" aria-label="Rest in progress: tap to end it">${restLive}</button>`:b.rest?`<button class="btn" data-rest="${b.rest[0]},${b.rest[1]}" data-restname="${esc(e.name)}" data-restex="${exId}">Start rest</button>`:""}${canAdd&&state.db?`<button class="btn" data-add="${exId}" data-unit="${b.unit}">+ Add a set</button>`:""}</span></div>
      </div>
      ${restLog}
      <label class="exnotes" style="display:block;margin-top:12px"><span class="lbl">Notes on this exercise</span><textarea id="exnote-${exId}" data-exnote="${exId}" aria-label="Notes on ${esc(e.name)}" placeholder="How it went, form, setup, what to change next time, etc.">${esc(entry.notes??"")}</textarea></label>
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
    const work=doseTxt(b);
    return {name:(b.label?b.label+": "+e.name+" or an alternative":e.name)+(b.optional?" (optional)":""),wu:wu.length,wuTxt:wu.length?wu.map(w=>w[0]+"% × "+w[1]).join(", "):"none",work,ws:b.unit==="min"?0:b.sets,wsHi:b.unit==="min"?0:maxSets(b),opt:b.optional}});
  const live=rows.filter(r=>!r.opt),tw=live.reduce((a,r)=>a+r.wu,0),tk=live.reduce((a,r)=>a+r.ws,0),tkHi=live.reduce((a,r)=>a+r.wsHi,0);
  const scK="setcount",scClosed=state.collapsed.has(scK);
  return `<section class="panel setcount${scClosed?" closed":""}"><button class="tog" data-tog="${scK}" aria-expanded="${!scClosed}" aria-controls="scbody"><span class="chev" aria-hidden="true"></span><h3>Today's set count</h3>${scClosed?`<span class="muted" style="font-size:.85rem">${tw} light · ${rangeTxt(tk,tkHi)} hard</span>`:""}</button>
   <div class="scbody" id="scbody"><p class="muted" style="margin:4px 0 10px">Order: 5 minutes of easy cardio, then each exercise in turn: its ${term("tags","warm-up sets")} (light) followed by its work sets (hard, taken to ${term("failure","failure")}).</p>
   <div class="logwrap"><table class="log sc"><thead><tr><th>Exercise</th><th>Warm-up sets</th><th>Work sets</th></tr></thead><tbody>
   ${rows.map(r=>`<tr${r.opt?' class="optrow"':""}><td>${esc(r.name)}</td><td><b class="num">${r.wu}</b> <span class="muted">${esc(r.wuTxt)}</span></td><td><b class="num">${r.ws?rangeTxt(r.ws,r.wsHi):"–"}</b> <span class="muted">${esc(r.work)}</span></td></tr>`).join("")}
   </tbody><tfoot><tr><th>Total</th><th class="num">${tw} light</th><th class="num">${rangeTxt(tk,tkHi)} hard</th></tr></tfoot></table></div>
   <p class="src" style="margin-top:6px">Book: 2–3 warm-up sets before the first exercise (${S2("Kindle p. 149","wufirst")}); the third only when work sets are heavy (${S2("p. 154","wuheavy")}). One light set before later exercises is this page's reading of the book's 1–3-per-exercise range.</p></div></section>`;
}
/* ---------- voice-mode session: a prompt to paste into a voice assistant, and an importer for its report ---------- */
function voiceSetsTxt(sets,u){return (sets||[]).filter(Boolean).map(x=>x.sec!=null&&x.sec!==""?x.sec+" s":x.min!=null&&x.min!==""?x.min+" min":x.rounds!=null&&x.rounds!==""?x.rounds+" rounds":(x.load!=null&&x.load!==""?x.load+" "+u+" × ":"")+repTxt(x)+(x.rir!=null&&x.rir!==""?" (RIR "+x.rir+")":"")+(x.rom?" (short ROM)":"")+(x.note?" ["+x.note+"]":"")).filter(t=>t&&t.trim()&&t.trim()!=="×").join(", ")}
function voiceBlock(b,bi,k,n){
  const id=pickEx(b,bi,k),u=state.unit,L=[];b=forEx(b,id);const e=EX[id],v=verdict(b,id);
  L.push(`${n}. ${e.name} [id: ${id}]${b.optional?" (optional)":""}`);
  if(b.alt)L.push(`   Allowed swap: ${[b.ex,...b.alt].filter(x=>x!==id).map(x=>EX[x].name+" [id: "+x+"]").join(", ")}`);
  const wu=warmups(b,bi,k);
  const T=v.load;
  if(b.unit==="reps"&&e.bar)L.push(`   Barbell: ${BARNAME()}. Say every load as plates per side.`);
  if(b.unit==="reps"&&DBP.has(id))L.push(`   Dumbbells: say and record every load per dumbbell (one hand), not the total for both.`);
  if(b.unit==="reps"&&UNI.has(id))L.push(`   One side at a time: if my left and right reps differ on a set, record l and r for that set, with reps as the lower.`);
  if(b.unit==="reps"&&BWX.has(id))L.push(`   Bodyweight lift: don't ask for a load. Record added weight only if I mention a belt (+) or an assisted machine (−).`);
  if(wu.length)L.push(`   Warm-up sets, ${wu.length} (light, not counted, 60–120 s rest between): ${wu.map(([p,r],j)=>`W${j+1} ${p}% × ${r}`+(T!=null?" = "+(e.bar?barTxt(T*p/100):roundTo(T*p/100,inc())+" "+u):"")).join("; ")}${T==null?". No work load yet: ask me for today's work load before the first warm-up, then work these out":""}`);
  L.push(`   ${b.unit==="sec"?"Holds":b.unit==="reps"?"Work sets":"Target"}: ${doseTxt(b).replace(" holds × "," × ")}${b.unit==="reps"?", each taken to failure":""}${T!=null&&b.unit==="reps"?" at "+(e.bar?barTxt(T):T+" "+u):""}`);
  if(b.rest)L.push(`   Rest after each work set: ${b.rest[0]}–${b.rest[1]} s`);
  L.push(`   Last time: ${v.last?fmtDate(v.last.date)+": "+(voiceSetsTxt(v.last.entry.sets,u)||"no numbers"):"no record"}`);
  if(v.txt&&(v.last||b.unit==="reps"))L.push(`   Progression: ${v.txt}`);
  if(b.note)L.push(`   Note: ${b.note}`);
  return L.join("\n");
}
function voicePrompt(k){
  const p=PLAN[k],u=state.unit,date=state.date;
  let n=0;
  const lastNotes=Object.keys(state.sessions).filter(d=>d<date&&(state.sessions[d].day||dayFor(d))===k&&state.sessions[d].notes).sort().reverse().map(d=>({date:d,notes:state.sessions[d].notes}))[0]||null;
  const main=p.blocks.map((b,i)=>voiceBlock(b,i,k,++n)).join("\n\n");
  const extra=(p.extras||[]).map(x=>`${x.title}, if I have time: ${x.ex.map(id=>EX[id].name+" [id: "+id+"]").join(", ")}. The plan sets no sets or reps for it; log what I do.`).join("\n");
  const mob=p.mob?MOB_BLOCKS.map((b,i)=>voiceBlock(b,i,"MOB",++n)).join("\n\n"):"";
  const b0=p.blocks[0],id0=pickEx(b0,0,k);
  const exSet=b0.unit==="reps"?{load:185,reps:7,rir:2,start:"18:12:05",end:"18:12:40",rest_s:210}:b0.unit==="sec"?{sec:30,start:"18:12:05",end:"18:12:40"}:b0.unit==="rounds"?{rounds:8,hr:150,note:"rower"}:{min:30,hr:135,note:"3.1 mi"};
  const exEntry={sets:[exSet]};if(b0.unit==="reps"&&warmups(b0,0,k).length)exEntry.warmups=[{load:75,reps:8}];
  const dq=dayQuiz(k),example=JSON.stringify(Object.assign({type:"workout-voice-log",date,day:k,unit:u,start:"18:02",end:"19:01",ex:{[id0]:exEntry},notes:"left knee a bit stiff on squats"},dq.length?{quiz:[{id:dq[0].id,answer:dq[0].accept[0].toLowerCase(),correct:true}]}:{}));
  return `# Workout coach: ${p.wd} ${date}, ${p.title}

You are my coach and logger for this workout. I'm in voice mode with my phone in my pocket, so I can't see the screen: everything happens by voice.

## Before we start
Remind me to start Oura strength tracking. Then read me the checklist: each exercise with its number of work sets, then the mobility circuit.

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
- "Done" (or "finished"), then load, reps, and reps left in reserve (RIR), e.g. "done, 185 for 7, failed the eighth" (that logs as RIR 0), or "done, 185 for 7, one left" if a set stopped short.
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
${main}${extra?`

${extra}`:""}${mob?`

## Then the mobility circuit (about 10 minutes; holds, short rests)
${mob}`:""}${quizVoiceSection(k)}${lastNotes?`

## Notes from last ${p.wd} (${fmtDate(lastNotes.date)})
${lastNotes.notes}`:""}

## When I say "wrap up"
1. Check the checklist first. If anything wasn't done, ask whether I'm skipping it. Then remind me to stop Oura tracking.
2. In one or two sentences: total time, longest rest, and what went up or down against last time. If you asked quiz questions, add my quiz score.
3. Then make the log below as a downloadable file named workout-${date}.json. If you can't make files, show it as a single code block. Use exactly this shape and the ids in square brackets above. Include only what I actually did, and leave out any field you don't know.

${example}

Fields: lifts use load, reps, rir, rom (1 when the range of motion got shorter in that set, left out otherwise), and note when needed (plates per side on machines of unknown weight); one-side lifts add l and r (left and right reps) only when the sides differ; holds use sec (per side when the plan says per side); cardio uses min or rounds, plus hr and note. Any exercise can also take notes: free text about that exercise as a whole. Times are 24-hour local time. rest_s is seconds from the end of the previous set to the start of this one.${dayQuiz(k).length?" quiz lists every question you asked: its id, my answer as I said it, and correct as true or false.":""}
`;
}
function voicePanel(k){
  return `<section class="panel voice"><div class="vtop"><div><h3>Voice session</h3><p class="muted">Paste into a new ChatGPT chat, send it, then switch to voice. It coaches set by set, keeps last week's numbers and the rest times, and ends with a report.</p></div>
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
  const NUMF=["load","reps","l","r","rir","rom","sec","min","rounds","hr","rest_s"],TXT=["note","start","end"];
  const clean=a=>Array.isArray(a)?a.filter(s=>s&&typeof s==="object").map(s=>{const o={};NUMF.forEach(f=>{if(s[f]!=null&&s[f]!=="")o[f]=isNaN(+s[f])?s[f]:+s[f]});TXT.forEach(f=>{if(s[f])o[f]=String(s[f])});if(o.l!=null||o.r!=null){o.lr=1;o.reps=lrMin(o)}return o}):[];
  let n=0;const skipped=[];
  for(const id in r.ex){if(!EX[id]){skipped.push(id);continue}const x=r.ex[id]||{},e={sets:clean(x.sets)};if(x.notes)e.notes=String(x.notes);const w=clean(x.warmups);if(w.length)e.warmups=w;d.ex[id]=e;n++}
  if(r.start||r.end)d.voice={start:String(r.start||""),end:String(r.end||"")};
  if(r.notes)d.notes=(d.notes?d.notes+"\n":"")+String(r.notes);
  queueSave();
  if(Array.isArray(r.quiz)&&r.quiz.length)saveVoiceQuiz(r,date,d.day||dayFor(date)).then(m=>{state.voiceMsg=(state.voiceMsg||"")+m;const el=$("#vmsg");if(el)el.textContent=state.voiceMsg});
  return `Imported ${n} exercise${n===1?"":"s"} for ${fmtDate(date)}.${skipped.length?" Skipped unknown ids: "+skipped.join(", ")+".":""}`;
}
let downloadsNs;async function getDownloads(){if(downloadsNs===undefined){try{downloadsNs=await window.claude?.use?.("downloads")}catch(e){downloadsNs=null}}return downloadsNs||null}
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
/* prev / next calendar day, plus the last time this plan day was logged */
function dayNav(k){
  const shift=n=>{const d=parseISO(state.date);d.setDate(d.getDate()+n);return iso(d)};
  const prev=shift(-1),next=shift(1);
  const lastSame=Object.keys(state.sessions).filter(d=>d<state.date&&(state.sessions[d].day||dayFor(d))===k).sort().pop();
  const label=s=>{const sk=state.sessions[s]?.day||dayFor(s);return `${esc(fmtDate(s))} · ${esc(PLAN[sk]?.title||"")}${state.sessions[s]?" ●":""}`};
  return `<div class="daynav"><button type="button" class="btn" data-date="${prev}" aria-label="Previous day">← ${label(prev)}</button>
    ${lastSame&&lastSame!==prev?`<button type="button" class="btn" data-date="${lastSame}">Last ${esc(PLAN[k].title)}: ${esc(fmtDate(lastSame))}</button>`:""}
    <button type="button" class="btn" data-date="${next}" aria-label="Next day">${label(next)} →</button></div>`;
}
/* optional work the plan names without a set dose */
function extrasHTML(p){return (p.extras||[]).map(x=>`<section class="panel"><h3>${esc(x.title)}</h3><p class="muted" style="margin:6px 0 0">${esc(x.text)}</p>
  <div class="tags" style="margin-top:10px">${x.ex.map(id=>`<a class="tag ex" href="#ex-${id}">${esc(EX[id].name)} →</a>`).join("")}</div>
  ${x.v?`<div class="vids" style="margin-top:10px"><a class="vid" href="${esc(x.v.url)}" target="_blank" rel="noopener"><span class="play" aria-hidden="true"></span><span>${esc(x.v.label)}</span><span class="t">${x.v.t}</span></a></div>`:""}</section>`).join("")}
function renderToday(){
  const k=state.doc?.day||dayFor(state.date), p=PLAN[k];
  const dayNotes=state.doc||{};
  const html=`${weekStrip()}
   ${dayNav(k)}
   <p class="qlink">${qlinkHtml()}</p>
   <div class="dayhead"><div><div class="lbl">${esc(fmtDate(state.date))} · ${k}</div><h2>${esc(p.wd)}: ${esc(p.title)}</h2><p>${esc(p.intro)} Allow ${esc(p.time)}. <a href="${sitePage("My/Exercise/Body/Plan/"+PLANPAGE[k])}" target="_blank" rel="noopener">This day in the garden</a></p>${p.kind==="lift"?`<p class="rule">Book: two exercises per muscle group, one compound and one isolation, with a third compound only when needed, and three or four muscle groups per workout. Huberman's videos show several options for each slot; pick one per slot from its menu, not all of them.${S2(" Kindle p. 158","exper")}${AU("groups34")}</p>`:""}</div>
   <div class="controls"><label class="lbl" for="dayover">Plan</label><select id="dayover">${DAY_ORDER.map(d=>`<option value="${d}" ${d===k?"selected":""}>${d} · ${PLAN[d].title}</option>`).join("")}</select></div></div>
   ${k==="D6"?ivPanel():""}
   ${voicePanel(k)}
   ${DAYVID[k]?dayVideoPanel(k):""}
   ${p.kind==="lift"?setCount(k):""}
   ${sessionList(p.blocks,k)}
   ${extrasHTML(p)}
   ${extraLogged(p,k)}
   ${p.mob?`<div class="panel"><h3>Then the mobility circuit</h3><p class="muted" style="margin:6px 0 0">About ten minutes, logged on the <a href="#mobility" data-goto="mobility">Mobility circuit</a> tab for the same date.</p></div>`:""}
   <div class="daynotes">
     <label><span class="lbl">Steps today</span><input id="steps" inputmode="numeric" value="${esc(dayNotes.steps??"")}" placeholder="toward ~7,000"></label>
     <label><span class="lbl">Sleep last night (h)</span><input id="sleep" inputmode="decimal" value="${esc(dayNotes.sleep??"")}"></label>
     <label><span class="lbl">Bodyweight (${state.unit})</span><input id="bw" inputmode="decimal" value="${esc(dayNotes.bw??"")}" placeholder="${esc(bwFor()??"")}"></label>
   </div>
   <label style="display:block;margin-top:12px"><span class="lbl">Notes: pain, fatigue, substitutions, etc.</span><textarea id="notes" placeholder="Anything worth remembering about this session: how it felt, what changed, reminders for next time">${esc(dayNotes.notes??"")}</textarea></label>`;
  $("#view").innerHTML=html;
  if(k==="D6")ivPaint();
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
  if(!dates.length){$("#view").innerHTML=`<div class="empty">No sessions logged yet. Fill in a set on the Session tab, or import a log file below; each lift's trend appears here.</div>`;return}
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
    <div class="hist">${cards||`<div class="empty">No lifting logged yet.</div>`}${cardio?`<div class="card"><h3>Cardio</h3><ol>${cardio}</ol></div>`:""}</div>`;
}

/* ---------- weeks: plan week numbers, break-in phase, weekly dashboard, per-exercise progress ---------- */
async function savePlanStart(){
  if(!state.db)return;
  const ref=state.db.doc("settings/main"),data={planStart:state.planStart||"",updatedAt:new Date().toISOString()};
  try{await ref.update(data)}catch(e){try{await ref.set(data)}catch(e2){}}
}
const addDays=(s,n)=>{const d=parseISO(s);d.setDate(d.getDate()+n);return iso(d)};
const workSets=e=>(e&&e.sets||[]).filter(s=>s&&(num(s.reps)!=null||num(s.sec)!=null||num(s.min)!=null||num(s.rounds)!=null));
function planStartISO(){
  if(state.planStart)return iso(weekStart(state.planStart));
  const d=Object.keys(state.sessions).filter(k=>workSets({sets:Object.values(state.sessions[k].ex||{}).flatMap(e=>e.sets||[])}).length).sort()[0];
  return d?iso(weekStart(d)):null;
}
function weekNo(date,start){return Math.floor((weekStart(date)-parseISO(start))/(7*864e5))+1}
/* best set of an exercise on one session: by est. 1RM when loaded, else most reps or longest hold */
function bestOf(e){
  const ss=workSets(e);if(!ss.length)return null;
  const loaded=ss.some(s=>num(s.load)>0);
  const score=s=>loaded?e1rm(num(s.load)||0,num(s.reps)||0):(num(s.reps)??num(s.sec)??0);
  const best=ss.reduce((a,s)=>score(s)>score(a)?s:a);
  const txt=num(best.sec)!=null?best.sec+" s":num(best.load)>0?best.load+"×"+(best.reps??""):(best.reps??"")+" reps";
  return {txt,score:score(best),loaded,sets:ss.length,reps:ss.reduce((a,s)=>a+(num(s.reps)||0),0)};
}
function miniSpark(vals,label){
  const v=vals.map((x,i)=>[i,x]).filter(p=>p[1]!=null);
  if(v.length<2)return `<span class="muted" style="font-size:.76rem">needs 2 times</span>`;
  const n=vals.length,mn=Math.min(...v.map(p=>p[1])),mx=Math.max(...v.map(p=>p[1])),r=mx-mn||1,W=110,H=34;
  const sx=i=>5+i*(W-10)/Math.max(1,n-1),sy=x=>H-5-(x-mn)/r*(H-12);
  const pts=v.map(p=>`${sx(p[0])},${sy(p[1])}`).join(" "),last=v.at(-1);
  return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(label)}"><polyline points="${pts}" fill="none" stroke="var(--accent)" stroke-width="2"/>${v.map(p=>`<circle cx="${sx(p[0])}" cy="${sy(p[1])}" r="${p===last?3.5:2}" fill="var(--accent)"/>`).join("")}</svg>`;
}
function renderWeeks(){
  const start=planStartISO();
  const today=iso(new Date()),cur=start?weekNo(today,start):null;
  const ctl=`<div class="wkctl"><label class="lbl" for="planstart">Plan started the week of</label><input type="date" id="planstart" value="${start||""}">
    <span class="muted" style="font-size:.84rem">${state.planStart?"Set by you.":"Taken from your first logged session; change it if that's wrong."} Weeks run Saturday to Friday.</span></div>`;
  const head=`<div class="dayhead"><div><h2>Weeks${cur?` · you're in week ${cur}`:""}</h2><p>Week numbers, the break-in, and each lift's history, time by time.</p></div></div>${ctl}`;
  if(!state.db){$("#view").innerHTML=head+`<div class="empty">Weeks needs the log connection. ${esc($("#status").textContent)}</div>`;return}
  if(!start){$("#view").innerHTML=head+`<div class="empty">No sessions logged yet. Log a session and the weeks start counting from it.</div>`;return}

  /* every lift done so far, in plan order, then anything swapped in */
  const ordTxt=n=>n+(n%100>=11&&n%100<=13?"th":["th","st","nd","rd"][n%10]||"th");
  const planIds=[];LIFTDAYS.forEach(k=>PLAN[k].blocks.forEach(b=>[b.ex,...(b.alt||[])].forEach(id=>{if(EX[id]&&EX[id].kind!=="cardio"&&!planIds.includes(id))planIds.push(id)})));
  const allIds=planIds.slice();Object.keys(state.sessions).forEach(d=>Object.keys(state.sessions[d].ex||{}).forEach(id=>{if(EX[id]&&EX[id].kind!=="cardio"&&EX[id].kind!=="mobility"&&!allIds.includes(id))allIds.push(id)}));
  const done=allIds.map(id=>({id,recs:exRecords(id)})).filter(x=>x.recs.length);

  /* when each lift was first and last logged */
  const biRows=done.map(({id,recs})=>{const first=recs[0],days=Math.round((parseISO(today)-parseISO(first))/864e5);
    const inWin=days<21;
    return `<tr><th scope="row">${esc(EX[id].name)}</th><td class="num">${recs.length}</td><td>${esc(fmtDate(first))}</td><td>${esc(fmtDate(recs.at(-1)))}</td><td>${days} days</td></tr>`}).join("");
  const breakin=`<section class="panel"><h3>Break-in</h3>
    <p>Huberman, quoting Mike Mentzer: if you're new to resistance training, take one to three weeks to find movements that train all the major muscles and suit your body, and learn them with a weight you could lift 10–12 times while easily able to do five more. If you've been training with weights for a while, start with a full week off instead.${S2(" Kindle p. 116","breakin")} Cardio follows the same idea: if you're out of shape, start long cardio at 15–20 minutes and add a few each week.${S2(" Kindle p. 185","cardiolong")}</p>
    <p>After the break-in, work sets go to ${term("failure","failure")}, as the book says. The table shows when you first and last logged each lift.</p>
    ${done.length?`<div class="mxwrap" style="margin-top:8px"><table class="exw"><thead><tr><th scope="col">Exercise</th><th scope="col">Times done</th><th scope="col">First</th><th scope="col">Last</th><th scope="col">Since first time</th></tr></thead><tbody>${biRows}</tbody></table></div>`:`<p class="muted">No lifts logged yet.</p>`}</section>`;

  /* weekly dashboard */
  const weeks=[];for(let w=1;w<=Math.max(cur,1);w++){const a=addDays(start,(w-1)*7),b=addDays(a,6);weeks.push({w,a,b,dates:Object.keys(state.sessions).filter(d=>d>=a&&d<=b).sort()})}
  weeks.forEach(W=>{let lift=new Set(),cardio=0,sets=0,reps=0,vol=0,fail=0;
    W.dates.forEach(d=>{const s=state.sessions[d];let any=false;
      Object.entries(s.ex||{}).forEach(([id,e])=>{const ss=workSets(e);if(!ss.length)return;
        if(EX[id]?.kind==="cardio"){cardio++;return}if(EX[id]?.kind!=="mobility")any=true;
        sets+=ss.length;ss.forEach(x=>{reps+=num(x.reps)||0;vol+=(num(x.load)||0)*(num(x.reps)||0);if(num(x.rir)===0||x.rom)fail++})});
      if(any)lift.add(d)});
    Object.assign(W,{lift:lift.size,cardio,sets,reps,vol:Math.round(vol),fail})});
  const now=weeks.at(-1),prev=weeks.at(-2),maxSets=Math.max(1,...weeks.map(W=>W.sets));
  const delta=(a,b)=>b==null?"":a>b?`<span class="dl up">▲ ${a-b}</span>`:a<b?`<span class="dl down">▼ ${b-a}</span>`:`<span class="dl same">=</span>`;
  const tiles=`<div class="wktiles">
    <div class="t"><span class="lbl">Lift days this week</span><b>${now.lift} of 3</b></div>
    <div class="t"><span class="lbl">Work sets</span><b>${now.sets}${delta(now.sets,prev?.sets)}</b></div>
    <div class="t"><span class="lbl">Reps</span><b>${now.reps}${delta(now.reps,prev?.reps)}</b></div>
    <div class="t"><span class="lbl">Volume (${state.unit} × reps)</span><b>${now.vol.toLocaleString()}</b></div>
    <div class="t"><span class="lbl">Sets to failure</span><b>${now.fail}</b></div></div>`;
  const table=`<div class="mxwrap" style="margin-top:12px"><table class="wkt"><thead><tr><th scope="col">Week</th><th scope="col">Dates</th><th scope="col">Lift days</th><th scope="col">Cardio</th><th scope="col">Work sets</th><th scope="col">Reps</th><th scope="col">Volume</th><th scope="col">To failure</th></tr></thead><tbody>
    ${weeks.slice().reverse().map(W=>`<tr class="${W.w===cur?"now":""}"><th scope="row">${W.w}</th><td>${fmtDate(W.a)} – ${fmtDate(W.b)}</td><td class="num">${W.lift}/3</td><td class="num">${W.cardio}</td>
      <td class="num">${W.sets}<span class="wbar" style="width:${Math.round(W.sets/maxSets*60)}px" aria-hidden="true"></span></td><td class="num">${W.reps}</td><td class="num">${W.vol.toLocaleString()}</td><td class="num">${W.fail}</td></tr>`).join("")}
    </tbody></table></div>`;

  const dash=`<section class="panel"><h3>Week by week</h3>${tiles}${table}</section>`;

  /* each lift's own history: 1st time, 2nd time… whichever day it was logged on */
  const maxN=Math.max(1,...done.map(x=>x.recs.length)),planSet=new Set(planIds);
  const histRows=done.map(({id,recs})=>{let prevS=null;
    const cells=recs.map(d=>({d,b:bestOf(state.sessions[d].ex[id])}));
    const tds=Array.from({length:maxN},(_,i)=>{const c=cells[i];if(!c)return `<td class="c muted">–</td>`;
      const dl=prevS==null?"":c.b.score>prevS+0.01?`<span class="dl up">▲</span>`:c.b.score<prevS-0.01?`<span class="dl down">▼</span>`:`<span class="dl same">=</span>`;prevS=c.b.score;
      return `<td class="c"><button type="button" data-open="${c.d}" title="Open ${esc(fmtDate(c.d))}">${esc(c.b.txt)}</button>${dl}<span class="sub">${esc(fmtDate(c.d))} · ${c.b.sets} set${c.b.sets>1?"s":""} · ${c.b.reps} reps</span></td>`}).join("");
    return `<tr><th scope="row">${esc(EX[id].name)}${planSet.has(id)?"":`<span class="muted">not in the current plan</span>`}</th>${tds}<td class="tr">${miniSpark(cells.map(c=>c.b.score),EX[id].name+(cells[0].b.loaded?" estimated one-rep max, time by time":" best reps, time by time"))}</td></tr>`}).join("");
  const days=`<section class="panel"><p class="muted" style="font-size:.84rem;margin:0">Each column is the next time you did that lift, counted from its own record, so a lift moved to another day still lines up. Each cell is that session's best set, with its date; tap it to open the session. ▲▼ compare with the time before (by ${term("e1rm","est. 1RM")} for loaded lifts, reps for bodyweight).</p>
    ${done.length?`<div class="mxwrap" style="margin-top:8px"><table class="exw"><thead><tr><th scope="col">Exercise</th>${Array.from({length:maxN},(_,i)=>`<th scope="col">${ordTxt(i+1)}</th>`).join("")}<th scope="col">Trend</th></tr></thead><tbody>${histRows}</tbody></table></div>`:`<p class="muted">No lifts logged yet.</p>`}</section>`;

  $("#view").innerHTML=head+breakin+dash+`<div class="dayhead"><div><h2>Exercise history</h2><p>Every time you've done each lift, in order.</p></div></div>`+days;
}
function renderRules(){
  const R=(t,k)=>CITE[k]?" "+S2(t,k):k?` <a class="src" href="${k}" target="_blank" rel="noopener">${t}</a>`:` <span class="src">${t}</span>`;
  const rw=id=>"https://readwise.io/open/"+id;
  $("#view").innerHTML=`<div class="dayhead"><div><h2>Rules from the book</h2><p>Huberman's Exercise Protocols 1–4 in Chapter 2, summarised, with the places codekiln's plan departs from them. Links open your Readwise highlights; page numbers are the Kindle edition.</p></div></div>
  <div class="book">
   <section class="panel"><h3>The week</h3><ul>
    <li>Day 1 long cardio, Day 2 legs, Day 3 rest, Day 4 torso, Day 5 moderate cardio, Day 6 brief hard cardio, Day 7 shoulders and arms.${R("Kindle p. 146","week")}</li>
    <li>Day 2 trains the quadriceps, hamstrings and calves; glutes, core and lower back get indirect work. Day 4 trains the chest, back, abdominals and core, with optional neck. Day 7 trains the shoulders, biceps, triceps and abdominals or core, with optional forearms and neck.${R("Kindle p. 146","week")}</li>
    <li>Start the sequence on any weekday; keep the order. Saturday is Day 1 here.${R("Kindle p. 179","startday")}</li>
    <li>Missed long cardio: skip it rather than moving it onto leg day. Otherwise keep the order, missing days here and there or doubling up when there is no other option.${R("Kindle pp. 193–195","missedlong")}</li></ul></section>
   <section class="panel"><h3>A lifting session</h3><ul>
    <li>About 60 ± 20 minutes. Five minutes of whole-body warm-up, then 1–3 ${term("tags","warm-up sets")} per exercise; 2–3 of them before the first exercise.${R("Kindle p. 147","duration")}</li>
    <li>Warm-up ramp: about 40% of the work load for 6–10 reps, then 65% for 4–8, with 1–2 minutes between. Add 75% for 2–4 when the work sets are heavy (failure around 5–7 reps). Warm-ups never come close to failure.${R("Kindle p. 154","wuramp")}</li>
    <li>Two exercises per muscle group is usually plenty: one ${term("compound","compound")} and one ${term("isolation","isolation")}, with a third compound only when needed. 2–3 work sets each, usually 2; 4–9 work sets per group; three or four muscle groups per workout.${R("Kindle p. 158","exper")}${R("Kindle p. 160","setsper")}</li>
    <li>Rest 1–2 minutes between warm-up sets. Between work sets rest 2–5 minutes: 3–5 after ${term("compound","compound")} sets, 90 s–3 min after ${term("isolation","isolation")} sets.${R("Kindle p. 148","rest")}</li>
    <li>Time rest by the clock or by feel; either works. Huberman times it to learn how his own sense of "ready for another set" lines up with the ranges. Keep talking, texting and scrolling to a minimum between sets. The Start rest button on each exercise does the timing.${R("Kindle p. 171","restclock")}</li>
    <li>Track every set and rep on paper or a log, with the phone out of the way.${R("Kindle p. 151","track")}</li>
    <li>Reach failure safely: rack safety pins, or a spotter strong enough to lift the bar off you; dumbbells when benching alone.${R("Kindle p. 162","safety")}</li>
    <li>Sharp or dull joint pain, not soreness or the burn: stop that exercise for the day and find an alternative.${R("Kindle p. 164","pain")}</li></ul></section>
   <section class="panel"><h3>What Huberman demonstrates on each lifting day</h3><ul>
    <li>Day 2: back squat, front squat, hack squat and rear-foot-elevated split squat; leg extension; deadlift from the floor; lying leg curl; standing calf raise on a machine and single-leg with a dumbbell. He also names the belt squat, glute-ham raise, standing leg curl and seated calf raise.${R("Day 2 video",GV.CbEFgDFQBvk.url)}</li>
    <li>Day 4: barbell, dumbbell and incline bench press; dip; dumbbell fly and cable fly; pull-up, lat pulldown and dumbbell row, with no back isolation; back extension; the hanging leg raise progression from knee raise to L-sit to pike. He names shrugs as optional and points to a separate video for the neck.${R("Day 4 video",GV.UEU6NYLRi6o.url)}</li>
    <li>Day 7: barbell and dumbbell overhead press; lateral raise; rear delt fly; dumbbell curl and preacher curl; overhead cable triceps extension as the compound triceps movement and the pressdown as the isolation. He names the machine shoulder press and the front raise.${R("Day 7 video",GV["IzpGEk-2th4"].url)}</li>
    <li>Face pulls belong on shoulders and arms day, with a cable machine or exercise bands; the book points to Jeff Cavaliere's demonstration.${R("Kindle p. 181","facepull")}</li>
    <li>Forearms, for those who want them: three to four sets of flexor or extensor movements on shoulders and arms day, 12–30 reps, no heavy low-rep work.${R("Kindle p. 180","forearms")}</li>
    <li>Abs and core once or twice a week. Hanging knee raises that progress to L-sits beat endless crunches.${R("Kindle p. 180","abs")}</li>
    <li>Calves twice a week, one of those days leg day.${R("Day 2 video",GV.CbEFgDFQBvk.url)}</li></ul></section>
   <section class="panel"><h3>Reps, effort and progress</h3><ul>
    <li>Compound lifts: a load that fails between 5 and 12 reps, occasionally a heavier 3–5. Isolation: 8–15. Quads and calves respond to higher-rep sets too.${R("Kindle p. 165","repscompound")}</li>
    <li>Take every work set to ${term("failure","failure")} (${term("rir","RIR")} 0). The book answers the reps-in-reserve argument directly: with this few work sets, take all of them to failure; what most people call failure already leaves a rep or two in reserve.${AU("rir")}</li>
    <li>The rep range is a guide, not a stopping point: if only five reps come, do five; if you can keep going past the top in good form, keep going to failure.${R("Kindle p. 147","reprange")}</li>
    <li>First work set of an exercise: when the weight stops moving, keep trying hard for three to five more seconds, then rack it. The second set goes to failure without that fight. Push past failure on two or three sets at most per workout, and not on a stressed day.${R("Kindle pp. 169–170","pastfail")}</li>
    <li>${term("overload","Progressive overload")}: once every set reaches the top of the range in good form, add weight next session. This page's chip does that check.${R("Kindle p. 169","overload")}</li>
    <li>Raise the weight in small jumps: at most 5–10% of the load you lifted last session (a 135 lb bench goes to about 142–148 lb), and only once you reach 8–12 good reps. Reps and sets stay as planned. The page suggests about 5%, rounded to a 2.5 lb (1.25 kg) step. Where that step is more than 10% of a light load, add reps first.${R("Kindle pp. 164, 169","jump")}</li>
    <li>Some days a weight that went 10 times only goes three or four. Don't worry about it; keep striving to add reps or weight. The page holds the load rather than lowering it.${AU("badday")}</li>
    <li>A full week away from lifting every 12–16 weeks, or every 10–12. Dragging yourself to the gym, more interested in texting than training, is another sign to take one.${R("Kindle pp. 178–179","weekoff")}</li>
    <li>A bit short on sleep: the lower end of exercises and sets, but still the compound movements. Two or more really bad nights in a row: get sleep back on track before training.${R("Kindle p. 193","sleep")}</li>
    <li>New to resistance training: Mike Mentzer's one-to-three-week break-in, learning movements with a weight you could lift 10–12 times while easily able to do five more. Already training: start with a full week off instead.${R("Kindle p. 116","breakin")}</li></ul></section>
   <section class="panel"><h3>Cardio</h3><ul>
    <li>Long: 45–75 min at 60–70% of ${term("maxhr","max heart rate")}, the fastest pace you can hold with nose breathing. Out of shape: start at 15–20 min and add a few each week.${R("Kindle p. 185","cardiolong")}</li>
    <li>Moderate: 5 min easy, then 25–30 min at 75–85% of max.${R("Kindle p. 186","moderate")}</li>
    <li>Brief: 5–10 min warm-up, then efforts at 90–95% of max. Example: 30 s all-out, 60 s easy, 6–12 rounds. The book frames all three sessions around ${term("vo2","VO₂ max")}. Alternatives: a timed mile, ${term("nor44","Norwegian 4×4")}, a ${term("cooper","Cooper test")}.${R("Kindle pp. 187–189","brief")}</li>
    <li>Max heart rate ≈ 220 − age; the book also gives 208 − 0.7 × age for men and 206 − 0.88 × age for women.${R("Kindle p. 185","maxhr")}</li></ul></section>
   <section class="panel"><h3>Walking</h3><ul>
    <li>Walk within 30 minutes after meals, even five minutes; ten to thirty is better.${R("Kindle p. 140","walkmeal")}</li>
    <li>About five minutes of walking per half-hour of sitting; 7,000 steps a day is a good goal and 10,000 is better.${R("Kindle p. 138","steps")}</li>
    <li>Look forward and around while walking; the phone cancels the calming effect of optic flow.${R("Kindle p. 142","optic")}</li></ul></section>
   <section class="panel"><h3>Mobility</h3><ul>
    <li>Two to four times a week, about ten minutes, any time of day.${R("Kindle p. 196","mobfreq")}</li>
    <li>Sumo squat with rotation: 3–10 s per point, three per side. Knee behind the glutes: 10–30 s, three per side. Reverse tabletop: work toward 10 s. Founder pose: hold 5 s, once or twice, as often as daily.${R("Kindle pp. 197–202","mobholds")}</li>
    <li>Full-range lifting with a controlled lowering also builds flexibility.${R("Kindle p. 196","mobslow")}</li></ul></section>
  </div>`;
}
const ARTIFACT_URL=location.origin+location.pathname;
function renderTerms(){
  const keys=Object.keys(GLOSS).sort((a,b)=>GLOSS[a][0].localeCompare(GLOSS[b][0]));
  $("#view").innerHTML=`<div class="dayhead"><div><h2>Terms</h2><p>Every term the page underlines. Each entry has its own link: open the page with <span class="mono">#term-</span> and the term's name to land on it. Muscle names have their own page: <a href="#muscles">Muscles</a>.</p></div></div>
  <div class="terms">${keys.map(k=>{const [t,d]=GLOSS[k],u=ARTIFACT_URL+"#term-"+k;
    return `<section class="termentry" id="term-${k}" tabindex="-1" aria-labelledby="h-term-${k}"><h3 id="h-term-${k}">${esc(t)}</h3><p>${esc(d)}</p>
      <div class="link"><code>${esc(u)}</code><button type="button" class="btn" data-copy="${esc(u)}">Copy link</button></div></section>`}).join("")}</div>`;
}
/* ---------- how the plan works: muscle-group coverage ---------- */
const GROUPS=[["quads","Quadriceps"],["hamstrings","Hamstrings"],["glutes","Glutes"],["calves","Calves"],["chest","Chest"],["lats","Back (lats)"],["traps","Traps (upper back)"],["lowerback","Lower back"],["abs","Abs"],["obliques","Obliques"],["delts","Shoulders"],["biceps","Biceps"],["triceps","Triceps"],["forearms","Forearms"]];
const BOOKDAY={quads:["D2"],hamstrings:["D2"],glutes:["D2"],calves:["D2"],chest:["D4"],lats:["D4"],traps:["D4"],lowerback:["D4"],abs:["D4","D7"],obliques:["D4","D7"],delts:["D7"],biceps:["D7"],triceps:["D7"],forearms:["D7"]};
const LIFTDAYS=["D2","D4","D7"];
/* isolation options Huberman demonstrates, for groups the plan trains with compounds only */
const ISO_IDEAS={quads:V("leg extension",HV.d2,312),hamstrings:V("lying leg curl",HV.d2,459),chest:V("chest isolation",HV.d4,260),delts:V("lateral and front raises",HV.d7,142),traps:V("shrug",HV.d4,568)};
function coverage(){
  const cov={};GROUPS.forEach(([g])=>{cov[g]={};LIFTDAYS.forEach(d=>cov[g][d]=[])});
  LIFTDAYS.forEach(d=>PLAN[d].blocks.forEach(b=>{const e=EX[b.ex];if(!e||e.kind==="cardio")return;
    e.m.p.forEach(g=>{if(cov[g])cov[g][d].push({id:b.ex,name:e.name,sets:b.sets,hi:maxSets(b),comp:!!e.compound,opt:!!b.optional})})}));
  return cov;
}
function setsBar(n){const W=120,mx=12,sx=v=>v/mx*W;
  return `<svg viewBox="0 0 ${W} 18" width="${W}" height="18" role="img" aria-label="${n} work sets; book range 4 to 9, about 6 often better"><rect x="${sx(4)}" y="2" width="${sx(9)-sx(4)}" height="14" fill="var(--green-soft)"/><line x1="${sx(6)}" x2="${sx(6)}" y1="0" y2="18" stroke="var(--green)" stroke-width="2"/><rect x="0" y="6" width="${sx(Math.min(n,mx))}" height="6" rx="2" fill="${n>=4&&n<=9?"var(--green)":"var(--accent)"}"/></svg>`}
function renderPlan(){
  const cov=coverage();
  const cell=list=>list.length?list.map(x=>`<span class="mx ${x.comp?"c":"i"}${x.opt?" opt":""}">${esc(x.name)} <b>${x.comp?"C":"I"}·${rangeTxt(x.sets,x.hi)}</b></span>`).join(""):`<span class="muted">·</span>`;
  const rows=GROUPS.map(([g,label])=>{
    const all=LIFTDAYS.flatMap(d=>cov[g][d]).filter(x=>!x.opt);
    const sets=all.reduce((a,x)=>a+x.sets,0),hi=all.reduce((a,x)=>a+x.hi,0),n=new Set(all.map(x=>x.id)).size;
    return `<tr><th scope="row">${esc(label)}</th>${LIFTDAYS.map(d=>`<td class="${BOOKDAY[g].includes(d)?"bookday":""}">${cell(cov[g][d])}</td>`).join("")}
      <td class="wk">${setsBar(sets)}<span class="num">${rangeTxt(sets,hi)} sets · ${n} ex.</span></td></tr>`}).join("");
  const checks=GROUPS.filter(([g])=>!["abs","obliques","glutes","lowerback","forearms"].includes(g)).map(([g,label])=>{
    const d=BOOKDAY[g][0],list=cov[g][d].filter(x=>!x.opt),n=list.length,sets=list.reduce((a,x)=>a+x.sets,0),hi=list.reduce((a,x)=>a+x.hi,0);
    const comp=list.some(x=>x.comp),iso=list.some(x=>!x.comp);
    const cHi=list.filter(x=>x.comp).reduce((a,x)=>a+x.hi,0),cLo=list.filter(x=>x.comp).reduce((a,x)=>a+x.sets,0);
    const gaps=[];if(n<2)gaps.push(`${n} exercise${n===1?"":"s"} (book: 2–3)`);if(hi<4)gaps.push(`${rangeTxt(sets,hi)} sets (book: 4–9, about 6 often better)`);if(sets>9)gaps.push(`${rangeTxt(sets,hi)} sets (book: no more than 9)`);
    if(!comp&&g!=="calves")gaps.push("no compound");else if(cHi<3&&hi>=6)gaps.push(`${rangeTxt(cLo,cHi)} compound sets (book: at least 3 when aiming for about six)`);if(!iso&&g!=="lats")gaps.push("no isolation");
    const idea=g==="calves"&&!comp?" Huberman calls every calf raise an isolation movement.":!iso&&g==="lats"?" Huberman skips lat isolation: he says the lats are hard to isolate and compound pulls and rows are enough.":!iso&&ISO_IDEAS[g]?` Huberman's isolation option: <a href="${esc(ISO_IDEAS[g].url)}" target="_blank" rel="noopener">${esc(ISO_IDEAS[g].label)} (${ISO_IDEAS[g].t})</a>.`:"";
    return `<li><b>${esc(label)}</b>, ${PLAN[d].wd}: ${list.length?list.map(x=>esc(x.name)+" "+rangeTxt(x.sets,x.hi)+"×").join(", "):"nothing direct"}.
      ${gaps.length?`<span class="chip hold">${gaps.join(" · ")}</span>`:`<span class="chip up">meets the book</span>`}${idea}</li>`}).join("");
  const ex=PLAN.D2.blocks.filter(b=>!b.optional).map((b,i)=>({n:EX[b.ex].name,w:warmups(b,i,"D2").length,s:b.sets,r:rangeTxt(b.min,b.max)}));
  $("#view").innerHTML=`<div class="dayhead"><div><h2>How the plan works</h2><p>The book builds each lifting day from muscle groups, not body parts. This tab explains how sets are counted, shows which exercise trains which group, and marks where codekiln's plan follows the book or departs from it.</p></div></div>
  <section class="panel"><h3>Warm-up sets and work sets are counted separately</h3>
   <div class="book" style="margin-top:8px"><div><ul>
     <li><b>Work sets</b> are the hard sets. Every set count in the plan ("3 × 6–10") is work sets, and only work sets count toward the 4–9 per muscle group.</li>
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
     <li>Each lifting day uses the exercises Huberman demonstrates in that day's video. Most groups get a compound exercise first and an isolation exercise after it.</li>
     <li>Where he shows several exercises for the same job, the day lists one and puts the rest in its exercise menu: the front squat, hack squat or split squat for the back squat, and the dumbbell or incline bench for the barbell bench.</li>
     <li>Back work is compound only, as in his video. The face pull, the forearm work and the neck work come from Jeff Cavaliere videos the book points to.</li>
     <li>The checks below compare each group's main day with the book's numbers.</li></ul></section>
  </div>
  <div class="panel"><h3>Which exercise trains which muscle group</h3>
   <p class="muted" style="margin:4px 0 10px">C = ${term("compound","compound")}, I = ${term("isolation","isolation")}, then work sets. Shaded cells are the day the book assigns that group. In the week bar, the green band is the book's 4–9 sets and the line marks 6.</p>
   <div class="mxwrap"><table class="mxt"><thead><tr><th scope="col">Muscle group</th>${LIFTDAYS.map(d=>`<th scope="col">${d} · ${PLAN[d].wd.slice(0,3)}</th>`).join("")}<th scope="col">Week</th></tr></thead><tbody>${rows}</tbody></table></div>
   <p class="src" style="margin-top:6px">Counts use each exercise's main muscles and the first choice where the plan offers an alternative; the optional Friday forearm and calf work is shown dashed and left out of totals.</p></div>
  <div class="panel"><h3>Check against the book, group by group</h3><ul class="checks">${checks}</ul>
   <p class="muted" style="margin:8px 0 0">Abs, obliques, glutes, lower back and forearms are left out: the book trains abs once or twice a week, counts glutes and lower back as worked indirectly on leg day, and makes forearms optional.</p></div>
  <div class="panel" id="qa"><h3>Questions and answers</h3><p class="muted" style="margin:4px 0 8px">Questions that came up during sessions. Each also shows under its muscle group on the Session tab.</p>${qaHTML(QA)}</div>`;
}

/* ---------- quiz ---------- */
function quadsAnswer(){const c=coverage();return LIFTDAYS.flatMap(d=>c.quads[d]).map(x=>x.name).join(" and ")}
const QUIZ=[
  {id:"mg",q:"Which of these counts as one muscle group in the book?",o:["Quadriceps","Legs","Lower body","Leg day"],why:"The book says legs are not one muscle group: quadriceps are one, hamstrings another.",go:"plan"},
  {id:"pick",q:"Huberman's Day 2 video shows four squat variations. How many do you do in one session?",o:["One, as the quadriceps compound","All four","Two","Three"],why:"The book pairs one compound with one isolation exercise for each muscle group; the other squats are options for the same slot.",go:"plan"},
  {id:"ex",q:"How many exercises per muscle group does the book suggest in a workout?",o:["2–3","1","4–5","As many as fit in 75 minutes"],why:"Two is usually plenty; a third for a group you want to focus on.",go:"plan"},
  {id:"comp",q:"Of the exercises for a muscle group, at least one should be…",o:["a compound exercise","an isolation exercise","a machine exercise","a bodyweight exercise"],why:"At least one compound (multi-joint); usually one isolation (single-joint) as well.",go:"term-compound"},
  {id:"iso",q:"Which is an isolation exercise for the quadriceps?",o:["Leg extension","Back squat","Hack squat","Split squat"],why:"Only the knee moves in a leg extension. The others move hip and knee together.",go:"term-isolation"},
  {id:"sets",q:"How many work sets per exercise does the book usually call for?",o:["2","1","4","6"],why:"Two to three, usually two.",go:"plan"},
  {id:"total",q:"How many work sets per muscle group in one workout?",o:["4–9","1–3","10–15","12–20"],why:"Two or three exercises of two or three sets each gives 4–9.",go:"plan"},
  {id:"wu1",q:"How many warm-up sets before the first exercise of the day?",o:["2, or 3 when the work sets are heavy","None","5–6","As many as it takes to feel warm"],why:"About 40% × 6–10 and 65% × 4–8; add 75% × 2–4 when you'd fail around 5–7 reps.",go:"plan"},
  {id:"wun",q:"Do you repeat the full warm-up ramp before every exercise?",o:["No: the full ramp is for the first lift; later lifts get one light set","Yes, 3 warm-ups before every exercise","Yes, but only for isolation exercises","No warm-ups after the first set of the day"],why:"The book's range is 1–3 per exercise, with 2–3 before the first. One light feeler set later is this page's reading.",go:"plan"},
  {id:"count",q:"What does \"3 × 6–10\" on a plan day count?",o:["Work sets only: 3 hard sets of 6–10 reps","Warm-up and work sets together","3 exercises of 6–10 sets","3 warm-ups, then 6–10 work sets"],why:"Warm-up sets come on top and don't count toward the 4–9 per muscle group.",go:"plan"},
  {id:"six",q:"How many hard work sets per muscle group does the book say is often better?",o:["About 6, with at least 3 from a compound exercise","About 12","1","20 or more"],why:"Never above 9 for one group in a workout, since you train several groups each day.",go:"plan"},
  {id:"warm",q:"What should your first warm-up set be?",o:["About 40% of the work load for 6–10 reps","About 65% for 15–20 reps","Your work load for 1 rep","No warm-up sets, just start"],why:"Then about 65% for 4–8 and 75% for 2–4, resting 1–2 minutes between.",go:"term-tags"},
  {id:"rest",q:"How long to rest between work sets of a compound lift?",o:["3–5 minutes","30–60 seconds","90 seconds","10 minutes"],why:"Isolation sets need less: 90 seconds to 3 minutes. Clock or feel both work.",go:"rules"},
  {id:"rir",q:"You finish a set and could have done two more clean reps. What is your RIR?",o:["2","0","1","8"],why:"Reps in reserve counts the reps left. Work sets in this plan go to failure, so they log as 0.",go:"term-rir"},
  {id:"prog",q:"In this plan, when do you add weight to a lift?",o:["When every work set reaches the top of its rep range in good form","Every session","When a set feels easy","Every four weeks"],why:"That is progressive overload; the Add load chip checks it for you.",go:"term-overload"},
  {id:"jump",q:"How big should a weight increase be?",o:["5–10% of last session's load","5–10 more reps","About 25%","Double the load"],why:"Small jumps keep form and joints safe; on light lifts add reps first.",go:"rules"},
  {id:"fail",q:"How hard should a work set be?",o:["Taken to failure: the next rep can't be completed with good form","Stopped one or two reps short of failure","Stopped at the bottom of the rep range","As hard as a warm-up set"],why:"The book takes work sets to failure, and this plan follows it.",go:"term-failure"},
  {id:"hr",q:"What effort limit does the book give for the long Saturday run?",o:["The fastest pace you can hold breathing only through your nose","90–95% of max heart rate","A sprint every mile","Below 50% of max heart rate"],why:"That lands near 60–70% of max heart rate.",go:"term-maxhr"},
  {id:"miss",q:"You miss Saturday's long run. What does the book suggest?",o:["Skip it and lift legs on Sunday as planned","Run it Sunday on top of leg day","Do two long runs next week","Shift every workout back a day"],why:"Moving long cardio onto leg day hurts the leg session.",go:"rules"},
  {id:"off",q:"How often does the book suggest a full week off lifting?",o:["Every 12–16 weeks","Every 2 weeks","Once a year","Never"],why:"Or even every 10–12 weeks; joints and the nervous system catch up.",go:"rules"},
  {id:"mob",q:"How often and how long is the mobility circuit?",o:["2–4 times a week, about 10 minutes","Daily, one hour","Once a month","Before every set"],why:"Four movements, after Sunday, Tuesday and Friday lifting in this plan.",go:"mobility"},
  {id:"quads",q:"In this plan, which exercises train your quadriceps directly?",o:()=>[quadsAnswer(),"Leg press and split squat","Deadlift and lying leg curl","Calf raise only"],why:"Sunday's back squat is the compound and the leg extension the isolation. The front squat, hack squat and split squat are alternatives to the back squat.",go:"plan"},
  {id:"back",q:"Which back exercises does Huberman demonstrate on torso day?",o:["Pull-up, lat pulldown and dumbbell row, all compound","Straight-arm pulldown and pullover","Shrugs only","Back extension only"],why:"He says the lats are hard to isolate, and compound pulls and rows with progressive overload are enough. The back extension is for the lower back.",go:"ex-dumbbell-row"},
  {id:"tri",q:"Which triceps exercise does Huberman treat as the compound movement?",o:["Overhead cable triceps extension","Triceps pressdown","Preacher curl","Lateral raise"],why:"The shoulders move a little as well as the elbows, and the long head of the triceps gets a stretch. The pressdown is his isolation movement.",go:"ex-overhead-cable-triceps-extension"},
  {id:"face",q:"When does the book ask for face pulls?",o:["On shoulders and arms day, with a cable machine or exercise bands","On leg day","Every day","Only in the break-in weeks"],why:"The book points to Jeff Cavaliere's demonstration. This plan does 2 sets of 12–15 on Friday.",go:"ex-face-pull"},
  {id:"abs",q:"How often does the book suggest training abs and core?",o:["Once or twice a week","Every day","Once a month","Never directly"],why:"This plan does hanging leg raises on Tuesday and Friday, from knee raises to L-sits to pikes.",go:"ex-hanging-leg-raise"},
  {id:"fore",q:"What does the book suggest for optional forearm work?",o:["3–4 sets of 12–30 reps on shoulders and arms day","Heavy sets of 3–5 reps","100 reps every day","Nothing: forearms need no direct work"],why:"Higher reps, no heavy weight. This plan puts it at the end of Friday as optional.",go:"rules"},
  {id:"calf",q:"How often does Huberman train calves?",o:["Twice a week, one of those days leg day","Only on leg day","Once a month","Every day"],why:"He says so in the Day 2 video. This plan's Friday calf raise is optional.",go:"ex-calf-raise"}
];
function shuffle(a){a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
/* ---------- spaced repetition: FSRS-6 ----------
   Formulas and default parameters from "The Algorithm" (open-spaced-repetition), linked as FSRS_URL. Each quiz question is a card.
   Its state lives in the log's srs collection: stability S (days until recall falls to 90%), difficulty D (1 to 10) and the due date.
   Every rating also goes to srslog, the review history FSRS needs to fit its parameters to one person later. Target recall: 90%. */
const FSRS_W=[0.212,1.2931,2.3065,8.2956,6.4133,0.8334,3.0194,0.001,1.8722,0.1666,0.796,1.4835,0.0614,0.2629,1.6483,0.6014,1.8729,0.5425,0.0912,0.0658,0.1542];
const FSRS_URL="https://github.com/open-spaced-repetition/awesome-fsrs/wiki/The-Algorithm#fsrs-6";
const RETAIN=0.9,DAYMS=864e5,RELEARN_MIN=10,RATING=["","Again","Hard","Good","Easy"];
const F6=(()=>{const w=FSRS_W,factor=Math.pow(0.9,-1/w[20])-1,clampD=d=>Math.min(10,Math.max(1,d)),D0=G=>w[4]-Math.exp(w[5]*(G-1))+1;
  return {
    R:(t,S)=>Math.pow(1+factor*t/S,-w[20]),                         // chance of recall t days after a review
    I:S=>S/factor*(Math.pow(RETAIN,-1/w[20])-1),                    // days until that chance falls to RETAIN
    S0:G=>w[G-1],D0:G=>clampD(D0(G)),                              // after the first rating
    D:(D,G)=>clampD(w[7]*D0(4)+(1-w[7])*(D-w[6]*(G-3)*(10-D)/9)),     // linear damping, then mean reversion toward D0(Easy)
    Sr:(D,S,R,G)=>S*(Math.exp(w[8])*(11-D)*Math.pow(S,-w[9])*(Math.exp(w[10]*(1-R))-1)*(G===2?w[15]:1)*(G===4?w[16]:1)+1),
    Sf:(D,S,R)=>Math.min(S,w[11]*Math.pow(D,-w[12])*(Math.pow(S+1,w[13])-1)*Math.exp(w[14]*(1-R))),
    Ss:(S,G)=>{let inc=Math.exp(w[17]*(G-3+w[18]))*Math.pow(S,-w[19]);if(G>=2)inc=Math.max(1,inc);return S*inc}}})(); // a second review the same day
const dayStr=t=>iso(new Date(t));
const eod=()=>{const d=new Date();d.setHours(23,59,59,999);return d.getTime()};
/* the card after rating G at time now; Again brings it back in RELEARN_MIN minutes, the others in whole days */
function nextCard(c,G,now){
  const seen=!!(c&&c.reps>0);let S,D;
  if(!seen){S=F6.S0(G);D=F6.D0(G)}
  else{const last=Date.parse(c.last);
    if(dayStr(last)===dayStr(now))S=F6.Ss(c.s,G);
    else{const R=F6.R(Math.max(0,(now-last)/DAYMS),c.s);S=G===1?F6.Sf(c.d,c.s,R):F6.Sr(c.d,c.s,R,G)}
    D=F6.D(c.d,G)}
  const days=G===1?0:Math.min(36500,Math.max(1,Math.round(F6.I(S))));
  return {s:+S.toFixed(4),d:+D.toFixed(4),days,due:new Date(G===1?now+RELEARN_MIN*6e4:now+days*DAYMS).toISOString(),last:new Date(now).toISOString(),
    first:seen?c.first:dayStr(now),reps:(seen?c.reps:0)+1,lapses:(seen?c.lapses||0:0)+(seen&&G===1?1:0)}}
const ivTxt=(G,c)=>{if(G===1)return RELEARN_MIN+" min";const d=nextCard(c,G,Date.now()).days;return d<30?d+(d===1?" day":" days"):d<365?(Math.round(d/3)/10)+" mo":(Math.round(d/36.5)/10)+" yr"};
async function srsReview(id,G,src){
  state.srs=state.srs||{};const now=Date.now(),c=state.srs[id],card={id,...nextCard(c,G,now)};state.srs[id]=card;
  if(!state.db)return;
  try{await state.db.doc("srs/"+id).set(card);
    await state.db.doc("srslog/"+card.last.replace(/[:.]/g,"-")+"-"+id).set({id,at:card.last,rating:G,src:src||"page",
      elapsed:c&&c.last?+((now-Date.parse(c.last))/DAYMS).toFixed(4):null,before:c&&c.reps?{s:c.s,d:c.d}:null,s:card.s,d:card.d,days:card.days})}catch(e){}}
/* the order new cards arrive in: muscle groups first (where each one is and what it does, then the diagram and front or back,
   then the rest), with one question on the plan's exercises or the book after every four */
function cardPool(){
  const mq=MQ(),seen=new Set(),mus=[],other=[];
  [["where","does"],["fig","side"],["which","full"],["ex"]].forEach(ks=>MK.forEach(m=>ks.forEach(k=>{const q=mq.find(x=>x.kind===k&&x.mk===m);if(q&&!seen.has(q.id)){seen.add(q.id);mus.push(q)}})));
  [...allDayQ(),...QUIZ].forEach(q=>{if(!seen.has(q.id)){seen.add(q.id);other.push(q)}});
  const out=[];let i=0,j=0;while(i<mus.length||j<other.length){for(let n=0;n<4&&i<mus.length;n++)out.push(mus[i++]);if(j<other.length)out.push(other[j++])}
  return out}
const newPerDay=()=>state.srsNew||10;
const isSeen=id=>!!(state.srs&&state.srs[id]&&state.srs[id].reps);
function srsCounts(){const pool=cardPool(),srs=state.srs||{},e=eod(),today=dayStr(Date.now());
  const seen=pool.filter(q=>isSeen(q.id)),due=seen.filter(q=>Date.parse(srs[q.id].due)<=e);
  const left=Math.max(0,newPerDay()-Object.values(srs).filter(c=>c&&c.first===today).length);
  return {pool,seen,due,left,fresh:pool.filter(q=>!isSeen(q.id)).slice(0,left),
    week:seen.filter(q=>{const t=Date.parse(srs[q.id].due);return t>e&&t<=e+7*DAYMS}).length,
    next:seen.filter(q=>Date.parse(srs[q.id].due)>e).map(q=>srs[q.id].due).sort()[0]}}
/* the small quiz link at the top of the session: cards due now, or done for today */
function qlinkHtml(){const c=srsCounts(),n=c.due.length+c.fresh.length,today=dayStr(Date.now());
  const done=Object.values(state.srs||{}).filter(x=>x&&x.last&&dayStr(Date.parse(x.last))===today).length;
  const txt=n?`Quiz · ${n} card${n===1?"":"s"} due${done?` · ${done} reviewed today`:""}`:done?`✓ Quiz done today (${done} reviewed)`:"Quiz · nothing due";
  return `<a id="qlink" class="${n?"due":""}" href="#quiz" data-quiz="set-review">${esc(txt)} →</a>`}
function srsSide(){const c=srsCounts();
  return `<h3>Spaced repetition</h3><p class="num" style="margin:4px 0">Due today: <b>${c.due.length}</b> · new left today: <b>${c.left}</b></p>
  <p class="muted" style="font-size:.84rem;margin:4px 0">${c.seen.length} of ${c.pool.length} cards started · ${c.week} due in the next 7 days${c.next&&!c.due.length?` · next due ${esc(fmtDate(dayStr(Date.parse(c.next))))}`:""}</p>
  <label class="srsnew" for="srsnew">New cards a day <select id="srsnew">${[5,10,15,20,30].map(n=>`<option${n===newPerDay()?" selected":""}>${n}</option>`).join("")}</select></label>
  <p class="src" style="margin:8px 0 0"><a class="src" href="${FSRS_URL}" target="_blank" rel="noopener">FSRS-6</a> with its default parameters, aiming for 90% recall. Every rating is kept in your log, so the parameters can later be fitted to your own answers.</p>`}
document.addEventListener("change",ev=>{if(ev.target.id!=="srsnew")return;state.srsNew=+ev.target.value;
  if(state.db){const ref=state.db.doc("settings/main"),v={srsNew:state.srsNew};(async()=>{try{await ref.update(v)}catch(e){try{await ref.set(v)}catch(e2){}}})()}
  const z=state.quiz;if(z&&z.set==="review"&&z.i===0&&!z.checked)newQuiz();render()});
/* in a review session a card rated Again comes back at the end, up to twice */
function requeue(z,q){if(z.set!=="review"||(q.requeued||0)>=2)return;const o=typeof q.o==="function"?q.o():q.o;z.qs.push({...q,requeued:(q.requeued||0)+1,right:o[0],opts:q.fixed||shuffle(o)})}

function newQuiz(only,set){
  const some=only&&only.length;let pool;
  if(some)pool=shuffle(ALLQ().filter(q=>only.includes(q.id)));
  else if(set==="plan")pool=shuffle(QUIZ);
  else if(set==="muscles")pool=shuffle(muscleRound());
  else{set="review";const c=srsCounts(),srs=state.srs||{};pool=[...c.due.sort((a,b)=>Date.parse(srs[a.id].due)-Date.parse(srs[b.id].due)),...c.fresh]}
  state.quiz={set:some?(set||"missed"):set,qs:pool.map(q=>{const o=typeof q.o==="function"?q.o():q.o;return {...q,right:o[0],opts:q.fixed||shuffle(o)}}),i:0,pick:null,checked:false,score:0,missed:[],saved:false};
}
function missCounts(){const m={};(state.quizzes||[]).forEach(a=>(a.missed||[]).forEach(id=>m[id]=(m[id]||0)+1));return m}
function renderQuiz(){
  if(!state.quiz)newQuiz();
  const z=state.quiz,past=(state.quizzes||[]).slice().sort((a,b)=>a.at<b.at?1:-1),QA=ALLQ(),sc=srsCounts();
  const hist=past.length?`<ol class="qhist">${past.slice(0,8).map(a=>`<li class="num">${fmtDate(a.at.slice(0,10))} · ${a.score}/${a.total}${a.day?` · ${a.day} muscle groups${a.source==="voice"?" (voice)":""}`:a.set&&QSETS[a.set]?` · ${QSETS[a.set]}`:""}</li>`).join("")}</ol>`:`<p class="muted">No saved attempts yet${state.db?"":" (the log isn't connected here, so scores won't save)"}.</p>`;
  const mc=missCounts(),worst=Object.entries(mc).sort((a,b)=>b[1]-a[1]).slice(0,5);
  const side=`<aside class="panel">${srsSide()}<h3 style="margin-top:18px">Your attempts</h3>${hist}${worst.length?`<div class="lbl" style="margin-top:10px">Missed most</div><ul>${worst.map(([id,n])=>`<li>${qLabel(QA.find(q=>q.id===id))||esc(id)} <span class="muted">(${n}×)</span></li>`).join("")}</ul><button class="btn" data-quiz="missed">Practise these</button>`:""}${notesSide()}</aside>`;
  let main;
  if(!z.qs.length){
    main=`<section class="panel qcard"><h3>Nothing due right now</h3>
      <p>${sc.next?`The next card comes back ${esc(fmtDate(dayStr(Date.parse(sc.next))))}.`:"No cards started yet."}${sc.left?"":` You've had today's ${newPerDay()} new cards; raise the number under Spaced repetition to learn more today.`}</p>
      <div class="qsets"><button type="button" class="btn primary" data-quiz="set-muscles">Practise a muscle round</button></div></section>`;
  } else if(z.i>=z.qs.length){
    const miss=[...new Set(z.missed)];
    main=`<section class="panel qcard"><h3>Score: ${z.score} of ${z.qs.length}</h3>
      ${miss.length?`<p>To review:</p><ul>${miss.map(id=>{const q=z.qs.find(x=>x.id===id)||QA.find(x=>x.id===id),nt=noteText(noteKey(q));return `<li>${qLabel(q)}<br><span class="muted">${esc(q.why)}</span> <a href="#${q.go}">Read more</a>${nt?`<span class="mynote">Your note: ${esc(nt)}</span>`:""}</li>`}).join("")}</ul>`:`<p>Every answer right.</p>`}
      ${z.set==="review"?`<p class="muted">Due today now: ${sc.due.length} · new left today: ${sc.left}.</p>`:""}
      <p class="status">${z.saved?"Saved to your log.":state.db?"Saving…":"Not saved: the log isn't connected here."}</p>
      <div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn primary" data-quiz="again">${z.set==="review"?"Check for more due cards":"Take it again"}</button>${miss.length?`<button class="btn" data-quiz="retry">Retry the ${miss.length} missed</button>`:""}</div></section>`;
    if(!z.saved&&state.db&&!z.saving)saveQuiz();
  } else {
    const q=z.qs[z.i],ok=z.checked&&z.pick===q.right,card=(state.srs||{})[q.id];
    const nk=noteKey(q),nl=q.mk?`Your notes on the ${MUS[q.mk].l}`:"Your notes on this question",has=!!noteText(nk);
    const after=!z.checked?`<div style="display:flex;gap:8px"><button class="btn primary" data-quiz="check" ${z.pick==null?"disabled":""}>Check answer</button></div>`
      :ok?`<div class="rate" role="group" aria-label="How well did you know it? Each button shows when the card comes back.">${[1,2,3,4].map(G=>`<button type="button" class="btn${G===3?" primary":""}" data-quiz="rate-${G}"><b>${RATING[G]}</b><small>${ivTxt(G,card)}</small></button>`).join("")}</div>
        <p class="muted rhelp">Again: a guess, or you nearly missed it. Hard: right, with effort. Good: you knew it. Easy: you knew it at once. Under each is when the card comes back.</p>`
      :`<p class="muted rhelp">Counts as Again: the card comes back in ${RELEARN_MIN} minutes${z.set==="review"&&(q.requeued||0)<2?", so you'll see it once more at the end of this session":""}.</p>
        <div style="display:flex;gap:8px"><button class="btn primary" data-quiz="next">${z.i+1<z.qs.length?"Next question":"See score"}</button></div>`;
    main=`<section class="panel qcard"><div class="lbl">${esc(QSETS[z.set]||"Quiz")}${z.day?" · "+esc(z.day):""} · question ${z.i+1} of ${z.qs.length} · score ${z.score} · ${card&&card.reps?`card seen ${card.reps}×`:"new card"}</div>
      ${q.fig?`<figure class="qfig">${bodyMap({p:[q.fig],titles:z.checked,label:z.checked?`The ${MUS[q.fig].l} highlighted`:"Front and back of the body with one muscle group highlighted"})}</figure>`:""}
      <fieldset><legend><h3>${q.qh||esc(q.q)}</h3></legend>
      ${q.opts.map((o,k)=>{const cls=z.checked?(o===q.right?"right":o===z.pick?"wrong":""):"";
        return `<label class="qopt ${cls}"><input type="radio" name="qopt" id="qopt-${k}" value="${esc(o)}" ${z.pick===o?"checked":""} ${z.checked?"disabled":""}> <span>${esc(o)}</span></label>`}).join("")}</fieldset>
      ${z.checked?`<p class="qfb ${ok?"ok":"no"}" role="status"><b>${ok?"Right.":"Not quite: "+esc(q.right)+"."}</b> ${esc(q.why)} <a href="#${q.go}">Read more</a></p>`:""}
      ${after}
      <details class="qnd"${z.checked?" open":""}><summary>${esc(nl)}${has&&!z.checked?" (you have a note here)":""}</summary>${noteBox(nk,nl,q.mk?MUS[q.mk].n:q.q,q.mk,true)}</details></section>`;
  }
  const setBtn=(k,label)=>`<button type="button" class="btn${z.set===k?" primary":""}" data-quiz="set-${k}" aria-pressed="${z.set===k}">${label}</button>`;
  $("#view").innerHTML=`<div class="dayhead"><div><h2>Quiz</h2><p><b>Review</b> is spaced repetition with <a class="src" href="${FSRS_URL}" target="_blank" rel="noopener">FSRS-6</a>: every question is a card, and each card comes back about when you'd otherwise be likely to forget it. Cards due today come first, then up to ${newPerDay()} new cards a day, muscle groups first. Rate each answer you get right; a wrong answer counts as Again. <b>Muscle groups</b> (rounds of 12 from ${MQ().length} questions) and <b>How the plan works</b> (${QUIZ.length} questions on the book's rules) are practice rounds; their answers update the cards too.</p></div></div>
   <div class="qsets" role="group" aria-label="Choose a quiz">${setBtn("review",`Review · ${sc.due.length} due, ${sc.left} new`)}${setBtn("muscles","Muscle groups")}${setBtn("plan","How the plan works")}<a class="btn" href="#muscles">Study the muscles</a></div>
   <div class="qgrid">${main}${side}</div>`;
}
async function saveQuiz(){
  const z=state.quiz;z.saving=true;const at=new Date().toISOString();
  try{await state.db.doc("quiz/"+at.replace(/[:.]/g,"-")).set(Object.assign({at,set:z.set||"plan",score:z.score,total:z.qs.length,missed:[...new Set(z.missed)]},z.day?{day:z.day,source:"page"}:{}));z.saved=true}catch(e){z.saveErr=true}
  z.saving=false;if(state.view==="quiz"&&!editingNow())render();
}
document.addEventListener("change",ev=>{if(ev.target.name==="qopt"&&state.quiz){state.quiz.pick=ev.target.value;const b=document.querySelector('[data-quiz="check"]');if(b)b.disabled=false}});
document.addEventListener("click",ev=>{const t=ev.target.closest("[data-quiz]");if(!t)return;if(!state.quiz)newQuiz();const z=state.quiz,a=t.dataset.quiz;
  if(a==="check"&&z.pick!=null){z.checked=true;const q=z.qs[z.i];if(z.pick===q.right)z.score++;else{z.missed.push(q.id);srsReview(q.id,1,z.set);requeue(z,q)}}
  else if(a.startsWith("rate-")&&z.checked){const q=z.qs[z.i],G=+a.slice(5);srsReview(q.id,G,z.set);if(G===1)requeue(z,q);z.i++;z.pick=null;z.checked=false}
  else if(a==="next"){z.i++;z.pick=null;z.checked=false}
  else if(a==="again"){if(z.set==="day"&&z.day){newQuiz(dayQuiz(z.day).map(q=>q.id),"day");state.quiz.day=z.day}else newQuiz(null,z.set==="plan"||z.set==="muscles"?z.set:"review")}
  else if(a==="retry")newQuiz(z.missed);
  else if(a==="missed")newQuiz(Object.keys(missCounts()));
  else if(a.startsWith("set-")){newQuiz(null,a.slice(4));if(state.view!=="quiz"){goView("quiz");window.scrollTo({top:0});return}}
  render();const f=document.querySelector('.qcard [data-quiz="rate-3"]')||document.querySelector(".qcard .qopt input:not(:disabled)")||document.querySelector(".qcard [data-quiz]");if(f)f.focus();});


/* ---------- relations: exercise <-> video chapters, plan days, logged records ---------- */
const VKEYS=["d2","d4","d7"];
const chapterAt=(v,s)=>HVID[v].ch.find(c=>c.s===s);
function exClips(id){const out=[];VKEYS.forEach(v=>HVID[v].ch.forEach(c=>{if(c.ex.includes(id))out.push({v,c,rel:""})}));
  (RELATED[id]||[]).forEach(([v,s,why])=>{const c=chapterAt(v,s);if(c&&!out.some(o=>o.c===c))out.push({v,c,rel:why})});return out}
function exDays(id){const ds=DAY_ORDER.filter(k=>PLAN[k].blocks.some(b=>b.ex===id||(b.alt||[]).includes(id))||(PLAN[k].extras||[]).some(x=>x.ex.includes(id)));
  if(MOB_BLOCKS.some(b=>b.ex===id))ds.push("MOB");return ds}
const dayName=k=>k==="MOB"?"Mobility":PLAN[k].wd.slice(0,3);
function exRecords(id){return Object.keys(state.sessions).filter(d=>workSets(state.sessions[d].ex?.[id]).length).sort()}
const kindOf=id=>{const e=EX[id];return e.kind==="cardio"?"Cardio":e.kind==="mobility"?"Mobility":e.kind==="hold"?"Hold":e.compound?"Compound":"Isolation"};

/* ---------- clip player: one chapter clip with summary, highlights and a synced transcript ---------- */
function clipHTML(v,c,opts={}){
  const V=HVID[v],dur=c.e-c.s,ex=c.ex.filter(id=>EX[id]);
  const exl=ex.length?`<div class="cliptags">${ex.map(id=>`<a class="tag ex" href="#ex-${id}">${esc(EX[id].name)} →</a>`).join("")}</div>`:"";
  const hl=c.hl.map(h=>`<blockquote class="hlq"><span class="lbl">Your highlight · ${ts(h.s)}</span><p>${h.q}</p>${h.u?`<a href="${esc(h.u)}" target="_blank" rel="noopener">Readwise</a>`:""}</blockquote>`).join("");
  const tr=c.tr.map(([s,t])=>`<li><button type="button" class="trl" data-seek="${s-c.s}" data-abs="${s}"><span class="num">${ts(s)}</span></button><span>${t}</span></li>`).join("");
  return `<figure class="clip" data-s="${c.s}">
    ${wkChapter(c)}
    <figcaption><div class="cliphead"><b>${esc(c.t)}</b><span class="num muted">${V.day} video · ${ts(c.s)}–${ts(c.e)} · ${Math.round(dur/6)/10} min</span></div>
    ${c.talk?`<p class="talk">Discussed only: the video doesn't demonstrate this exercise.</p>`:""}
    ${opts.rel?`<p class="muted rel">Related: ${esc(opts.rel)}</p>`:""}
    ${c.sum?`<p class="clipsum">${c.sum}</p>`:""}${exl}${hl}
    ${tr?`<details class="trwrap"${opts.open?" open":""}><summary>Transcript <span class="muted">· ${c.tr.length} lines, tap a time to jump</span></summary><ol class="tr">${tr}</ol></details>`:""}
    </figcaption></figure>`;
}
document.addEventListener("click",ev=>{const b=ev.target.closest("[data-seek]");if(!b)return;
  const fig=b.closest(".clip,.dayvid");const vid=fig&&fig.querySelector("video");if(!vid)return;
  vid.currentTime=+b.dataset.seek;try{vid.play()}catch(e){}});
document.addEventListener("timeupdate",ev=>{const vid=ev.target;if(!(vid instanceof HTMLVideoElement))return;
  const fig=vid.closest(".clip,.dayvid");if(!fig)return;const t=vid.currentTime;let cur=null;
  fig.querySelectorAll(".trl").forEach(b=>{if(+b.dataset.seek<=t+0.25)cur=b});
  fig.querySelectorAll(".trl.on").forEach(b=>{if(b!==cur)b.classList.remove("on")});if(cur)cur.classList.add("on")},true);

/* ---------- day view: the day's whole Huberman video, chapter by chapter ---------- */
const DAYVID={D2:"d2",D4:"d4",D7:"d7"};
const dvState={};
function dayVideoPanel(k){
  const v=DAYVID[k];if(!v)return "";const V=HVID[v],i=dvState[k]||0,c=V.ch[i];
  const planned=new Set(PLAN[k].blocks.flatMap(b=>[b.ex,...(b.alt||[])]));
  const list=V.ch.map((x,j)=>{const inPlan=x.ex.some(id=>planned.has(id));
    return `<li><button type="button" class="dvch${j===i?" on":""}" data-dv="${k}" data-ci="${j}" aria-current="${j===i}"><span class="num">${ts(x.s)}</span><span>${esc(x.t)}</span>${x.talk?`<span class="tag" title="Discussed, not demonstrated">talk</span>`:""}${inPlan?`<span class="tag plan" title="In today's plan">in plan</span>`:""}</button></li>`}).join("");
  const tr=c.tr.map(([s,t])=>`<li><button type="button" class="trl" data-seek="${s-c.s}"><span class="num">${ts(s)}</span></button><span>${t}</span></li>`).join("");
  return `<section class="panel dayvid" id="dayvid-${k}" data-day="${k}" data-ci="${i}">
    <div class="dvtop"><div><div class="lbl">Huberman's ${V.day} video · ${V.ch.length} chapters · each chapter opens on YouTube</div><h3>${esc(V.title)}</h3></div>
    <a class="btn" href="#exercises">All exercises</a></div>
    <div class="dvgrid"><div class="dvmain">
      ${wkChapter(c)}
      <div class="cliphead"><b>${esc(c.t)}</b><span class="num muted">${ts(c.s)}–${ts(c.e)}</span></div>
      ${c.talk?`<p class="talk">Discussed only: the video doesn't demonstrate this exercise.</p>`:""}
      ${c.sum?`<p class="clipsum">${c.sum}</p>`:""}
      ${c.ex.filter(id=>EX[id]).length?`<div class="cliptags">${c.ex.filter(id=>EX[id]).map(id=>`<a class="tag ex" href="#ex-${id}">${esc(EX[id].name)} →</a>`).join("")}</div>`:""}
      ${tr?`<details class="trwrap"><summary>Transcript of this chapter</summary><ol class="tr">${tr}</ol></details>`:""}
    </div><ol class="dvlist" aria-label="Chapters">${list}</ol></div></section>`;
}
function dvShow(k,i,play){dvState[k]=i;const box=document.getElementById("dayvid-"+k);if(!box)return;
  box.outerHTML=dayVideoPanel(k);const vid=document.getElementById("dvv-"+k);if(play&&vid){try{vid.play()}catch(e){}}}
document.addEventListener("click",ev=>{const b=ev.target.closest("[data-dv]");if(!b)return;dvShow(b.dataset.dv,+b.dataset.ci,true);
  const n=document.querySelector(`[data-dv="${b.dataset.dv}"][data-ci="${b.dataset.ci}"]`);if(n)n.focus()});
document.addEventListener("ended",ev=>{const vid=ev.target;if(!(vid instanceof HTMLVideoElement)||!vid.id.startsWith("dvv-"))return;
  const k=vid.id.slice(4),n=(dvState[k]||0)+1;if(n<HVID[DAYVID[k]].ch.length)dvShow(k,n,true)},true);

/* ---------- exercises: a searchable catalog linked to days, clips and your log ---------- */
let exq="",exF={m:new Set(),d:new Set(),k:new Set(),q:new Set(),logged:false,video:false},exSort="name",exMode="list";
try{const o=JSON.parse(localStorage.getItem("wk.exf")||"null");if(o){exF={m:new Set(o.m||[]),d:new Set(o.d||[]),k:new Set(o.k||[]),q:new Set(o.q||[]),logged:!!o.logged,video:!!o.video};exSort=o.sort||"name";exMode=o.mode||"list"}}catch(e){}
function saveExF(){try{localStorage.setItem("wk.exf",JSON.stringify({m:[...exF.m],d:[...exF.d],k:[...exF.k],q:[...exF.q],logged:exF.logged,video:exF.video,sort:exSort,mode:exMode}))}catch(e){}}
const exIds=()=>Object.keys(EX);
function exMatches(id){const e=EX[id];
  if(exq){const hay=(e.name+" "+(DESC[id]?.[0]||"")+" "+[...e.m.p,...e.m.s].map(g=>MNAME[g]).join(" ")+" "+kindOf(id)+" "+exDays(id).map(dayName).join(" ")+" "+eqOf(id).map(k=>EQUIP[k].name).join(" ")).toLowerCase();
    if(!exq.toLowerCase().split(/\s+/).filter(Boolean).every(w=>hay.includes(w)))return false}
  if(exF.m.size&&!e.m.p.some(g=>exF.m.has(g)))return false;
  if(exF.d.size&&!exDays(id).some(d=>exF.d.has(d)))return false;
  if(exF.k.size&&!exF.k.has(kindOf(id)))return false;
  if(exF.q.size&&!eqOf(id).some(k=>exF.q.has(k)))return false;
  if(exF.logged&&!exRecords(id).length)return false;
  if(exF.video&&!exClips(id).some(x=>!x.rel))return false;
  return true}
function tagsHTML(id,link){const e=EX[id],n=exRecords(id).length;
  return `${e.m.p.map(g=>`<span class="tag mus">${esc(MNAME[g])}</span>`).join("")}<span class="tag kind k-${kindOf(id).toLowerCase()}">${kindOf(id)}</span>${exDays(id).map(d=>link?`<button type="button" class="tag day" data-openday="${d}">${d==="MOB"?"Mobility":d+" · "+dayName(d)}</button>`:`<span class="tag day">${d==="MOB"?"Mobility":d+" · "+dayName(d)}</span>`).join("")}${n?`<span class="tag rec">${n} logged</span>`:""}${exClips(id).some(x=>!x.rel)?`<span class="tag vid">▶ ${exClips(id).filter(x=>!x.rel).length} clip${exClips(id).filter(x=>!x.rel).length>1?"s":""}</span>`:""}`}
function exCard(id){const e=EX[id],img=THUMB[id]||PHOTOS[id]?.[0]?.url;
  return `<a class="excard" href="#ex-${id}"><span class="exthumb">${img?`<img src="${esc(img)}" alt="" loading="lazy">`:`<span class="noth">${esc(kindOf(id))}</span>`}</span>
    <span class="exbody"><b>${esc(e.name)}</b><span class="exdesc">${esc((DESC[id]?.[0]||e.practice||"").slice(0,140))}${(DESC[id]?.[0]||"").length>140?"…":""}</span><span class="tags">${tagsHTML(id,false)}</span></span></a>`}
function exListHTML(){
  let ids=exIds().filter(exMatches);
  ids.sort(exSort==="logged"?(a,b)=>exRecords(b).length-exRecords(a).length||EX[a].name.localeCompare(EX[b].name):exSort==="day"?(a,b)=>((exDays(a)[0]||"Z").localeCompare(exDays(b)[0]||"Z"))||EX[a].name.localeCompare(EX[b].name):(a,b)=>EX[a].name.localeCompare(EX[b].name));
  return `<p class="muted mfcount" role="status">${ids.length} of ${exIds().length} exercises</p>`+(ids.length?`<div class="exgrid">${ids.map(exCard).join("")}</div>`:`<div class="empty">Nothing matches. Clear a filter or the search.</div>`)}
function chipRow(label,key,items){return `<div class="frow"><span class="lbl">${label}</span>${items.map(([v,t])=>`<button type="button" class="mfb${exF[key].has(v)?" on":""}" data-exf="${key}" data-v="${v}" aria-pressed="${exF[key].has(v)}">${esc(t)}</button>`).join("")}</div>`}
function groupsHTML(){
  const gs=[["quads","Quadriceps"],["hamstrings","Hamstrings"],["calves","Calves"],["chest","Chest"],["lats","Back (lats)"],["traps","Traps (upper back)"],["lowerback","Lower back"],["abs","Core"],["delts","Shoulders"],["biceps","Biceps"],["triceps","Triceps"]];
  return gs.map(([g,label])=>{
    const seen=new Set(),comp=[],iso=[],ov=[];
    (OVERVIEW[g]||[]).forEach(([v,s])=>{const c=chapterAt(v,s);if(c){ov.push({v,c});seen.add(c)}});
    VKEYS.forEach(v=>HVID[v].ch.forEach(c=>{if(seen.has(c))return;const ids=c.ex.filter(id=>EX[id]&&EX[id].m.p.includes(g));if(!ids.length)return;seen.add(c);
      (ids.some(id=>EX[id].compound)?comp:iso).push({v,c})}));
    if(!comp.length&&!iso.length&&!ov.length)return "";
    const col=(t,list,cls)=>`<div class="gcol"><div class="lbl ${cls}">${t} · ${list.length}</div>${list.length?list.map(x=>clipHTML(x.v,x.c)).join(""):`<p class="muted">None shown in the videos.${g==="lats"?" Huberman says the lats are hard to isolate and compound pulls and rows are enough.":""}</p>`}</div>`;
    return `<section class="panel grp" id="grp-${g}"><h3>${esc(label)}</h3>${ov.length?`<div class="gov">${ov.map(x=>clipHTML(x.v,x.c)).join("")}</div>`:""}<div class="gcols">${col("Compound",comp,"c")}${col("Isolation",iso,"i")}</div></section>`}).join("")}
function renderExercises(){
  const head=`<div class="dayhead"><div><h2>Exercises</h2><p>Every exercise in the plan and in Huberman's Day 2, 4 and 7 videos, the face pull, forearm and neck work the book points to, and lifts from earlier versions of the plan. Tags show the main muscles, the day the plan assigns it, how many sessions you've logged, and whether a clip from the videos covers it. Open one for its clips, transcript and your records.</p></div>
    <div class="seg" role="tablist"><button type="button" role="tab" class="mfb${exMode==="list"?" on":""}" data-exmode="list" aria-selected="${exMode==="list"}">List</button><button type="button" role="tab" class="mfb${exMode==="groups"?" on":""}" data-exmode="groups" aria-selected="${exMode==="groups"}">By muscle group</button><button type="button" role="tab" class="mfb${exMode==="equip"?" on":""}" data-exmode="equip" aria-selected="${exMode==="equip"}">Equipment</button></div></div>`;
  if(exMode==="equip"){$("#view").innerHTML=head+`<div class="exfilters panel"><label class="search"><span class="lbl">Search equipment</span><input id="eqq" type="search" value="${esc(exq)}" placeholder="Type a name or an exercise: cable, bench, curl…" autocomplete="off"></label></div><div id="eqlist">${equipListHTML()}</div>`;return}
  if(exMode==="groups"){$("#view").innerHTML=head+`<p class="muted">The parts of the videos where Huberman covers each major muscle group, split into compound movements (several joints) and isolation movements (one joint).</p>${groupsHTML()}`;return}
  const muscles=MORDER.filter(g=>exIds().some(id=>EX[id].m.p.includes(g))).map(g=>[g,MNAME[g]]);
  $("#view").innerHTML=head+`<div class="exfilters panel">
    <label class="search"><span class="lbl">Search</span><input id="exq" type="search" value="${esc(exq)}" placeholder="Type a name, muscle or day: squat, chest, Friday…" autocomplete="off"></label>
    ${chipRow("Muscle","m",muscles)}
    ${chipRow("Plan day","d",[...LIFTDAYS.map(d=>[d,d+" · "+PLAN[d].wd]),["D1","D1 · Saturday run"],["D6","D6 · Intervals"],["MOB","Mobility"]])}
    ${chipRow("Equipment","q",Object.keys(EQUIP).filter(k=>eqExercises(k).length).sort((a,b)=>EQUIP[a].name.localeCompare(EQUIP[b].name)).map(k=>[k,EQUIP[k].name]))}
    ${chipRow("Type","k",[["Compound","Compound"],["Isolation","Isolation"],["Hold","Hold"],["Cardio","Cardio"],["Mobility","Mobility"]])}
    <div class="frow"><label class="mfsec"><input type="checkbox" id="exlogged" ${exF.logged?"checked":""}> only ones I've logged</label><label class="mfsec"><input type="checkbox" id="exvideo" ${exF.video?"checked":""}> only ones with a clip</label>
    <label class="mfsec">Sort <select id="exsort" class="exsel"><option value="name" ${exSort==="name"?"selected":""}>A–Z</option><option value="logged" ${exSort==="logged"?"selected":""}>Most logged</option><option value="day" ${exSort==="day"?"selected":""}>Plan day</option></select></label>
    <button type="button" class="btn" data-exclear="1">Clear filters</button></div></div>
    <div id="exlist">${exListHTML()}</div>`;
}
function renderExDetail(){
  const id=state.exId,e=EX[id];
  if(!e){$("#view").innerHTML=`<div class="empty">No exercise called “${esc(id)}”. <a href="#exercises">Back to all exercises</a></div>`;return}
  const clips=exClips(id),recs=exRecords(id).slice().reverse(),days=exDays(id);
  const recHTML=recs.length?`<ol class="recs">${recs.slice(0,12).map(d=>{const b=bestOf(state.sessions[d].ex[id]);return `<li><button type="button" class="btn" data-open="${d}">${esc(fmtDate(d))}</button> <span class="num">${esc(b?b.txt:"")}</span> <span class="muted">${b?b.sets+" set"+(b.sets>1?"s":""):""}</span></li>`}).join("")}</ol>`:`<p class="muted">${state.db?"Not logged yet.":"The log isn't connected in this view."}</p>`;
  const dayHTML=days.length?days.map(d=>{const bl=(d==="MOB"?MOB_BLOCKS:PLAN[d].blocks).find(b=>b.ex===id||(b.alt||[]).includes(id));
    const xt=!bl&&d!=="MOB"&&(PLAN[d].extras||[]).find(x=>x.ex.includes(id));
    return `<li><button type="button" class="btn" data-openday="${d}">${d==="MOB"?"Mobility circuit":d+" · "+esc(PLAN[d].wd)+": "+esc(PLAN[d].title)}</button> <span class="muted">${bl?esc(doseTxt(forEx(bl,id)))+(bl.ex!==id?" (alternative to "+esc(EX[bl.ex].name)+")":""):xt?esc(xt.title)+", no set dose":""}</span></li>`}).join(""):`<li class="muted">Not in the plan. ${exClips(id).some(x=>!x.rel)?"Huberman shows it in the videos as an option. ":""}Log it on any day and it shows under “Also logged”.</li>`;
  $("#view").innerHTML=`<p style="margin:16px 0 0"><a href="#exercises">← All exercises</a></p>
   <div class="dayhead"><div><div class="lbl">${esc(kindOf(id))}</div><h2>${esc(e.name)}</h2>${DESC[id]?.[0]?`<p>${esc(DESC[id][0])}</p>`:""}</div></div>
   <div class="tags">${tagsHTML(id,true)}</div>${eqTags(id)}
   <div class="exdetail"><div class="exside">
     <div class="diagram panel"><div class="lbl">Muscles worked</div>${muscleMap(e.m)}</div>
     <section class="panel"><h3>In your plan</h3><ul class="plain">${dayHTML}</ul></section>
     <section class="panel"><h3>Your records <span class="muted num">${recs.length}</span></h3>${recHTML}</section>
   </div><div class="exmain">
     ${e.aka?`<p class="aka"><span class="lbl">In the book's videos</span> ${esc(e.aka)}</p>`:""}
     <div class="howto panel"><div><div class="lbl">Setup</div><p>${wl(e.setup)}</p></div><div><div class="lbl">Movement</div><p>${wl(e.practice)}</p></div><div><div class="lbl">Watch for</div><p>${wl(e.cues)}</p></div></div>
     <h3 style="margin-top:20px">From Huberman's videos</h3>
     ${clips.length?clips.map((x,j)=>clipHTML(x.v,x.c,{eager:j===0,rel:x.rel,open:j===0&&!x.rel})).join(""):`<p class="muted">No chapter of the Day 2, 4 or 7 videos covers this one.${videosHTML(e)?" Other demonstrations:":""}</p>${videosHTML(e)}`}
   </div></div>`;
}
/* the most recent date on or before today that falls on this plan day */
function dateForDay(k){const d=new Date();for(let i=0;i<7;i++){const s=iso(d);if(dayFor(s)===k)return s;d.setDate(d.getDate()-1)}return iso(new Date())}
document.addEventListener("click",ev=>{const t=ev.target.closest("[data-exf],[data-exmode],[data-exclear],[data-openday]");if(!t)return;
  if(t.dataset.openday){ev.preventDefault();const d=t.dataset.openday;if(d==="MOB"){goView("mobility");window.scrollTo({top:0});return}
    flushNow();state.date=dateForDay(d);$("#date").value=state.date;state.doc=state.sessions[state.date]?JSON.parse(JSON.stringify(state.sessions[state.date])):null;
    const back=state.exId;goView("today");const n=back&&document.querySelector(`[data-exsheet="${back}"]`);if(n)n.scrollIntoView({block:"start"});else window.scrollTo({top:0});return}
  if(t.dataset.exmode){exMode=t.dataset.exmode;saveExF();render();return}
  if(t.dataset.exclear){exq="";exF={m:new Set(),d:new Set(),k:new Set(),q:new Set(),logged:false,video:false};saveExF();render();return}
  const key=t.dataset.exf,v=t.dataset.v;exF[key].has(v)?exF[key].delete(v):exF[key].add(v);saveExF();
  t.classList.toggle("on");t.setAttribute("aria-pressed",exF[key].has(v));const l=$("#exlist");if(l)l.innerHTML=exListHTML()});
document.addEventListener("input",ev=>{if(ev.target.id!=="exq")return;exq=ev.target.value;const l=$("#exlist");if(l)l.innerHTML=exListHTML()});
document.addEventListener("change",ev=>{const id=ev.target.id;if(!["exlogged","exvideo","exsort"].includes(id))return;
  if(id==="exlogged")exF.logged=ev.target.checked;else if(id==="exvideo")exF.video=ev.target.checked;else exSort=ev.target.value;saveExF();const l=$("#exlist");if(l)l.innerHTML=exListHTML()});

/* ---------- equipment: kinds of gear, linked to exercises and to the moment the videos show them ---------- */
const eqOf=id=>(EXEQ[id]||[]).filter(k=>EQUIP[k]);
const eqExercises=k=>EQUIP[k].ex.filter(id=>EX[id]);
const eqImg=k=>EQUIP[k].img||PHOTOS[EQUIP[k].photo]?.[0]?.url||"";
function eqTags(id){const l=eqOf(id);return l.length?`<div class="tags eqtags"><span class="lbl">Equipment</span>${l.map(k=>`<a class="tag eq" href="#eq-${k}">${esc(EQUIP[k].name)}</a>`).join("")}</div>`:""}
function eqCard(k){const q=EQUIP[k],img=eqImg(k),n=eqExercises(k).length;
  return `<a class="excard" href="#eq-${k}"><span class="exthumb">${img?`<img src="${esc(img)}" alt="" loading="lazy">`:`<span class="noth">Equipment</span>`}</span>
   <span class="exbody"><b>${esc(q.name)}</b><span class="exdesc">${esc(q.desc)}</span><span class="tags"><span class="tag">${n} exercise${n===1?"":"s"}</span>${q.v?`<span class="tag vid">▶ in the ${HVID[q.v].day} video</span>`:""}</span></span></a>`}
function equipListHTML(){
  const ks=Object.keys(EQUIP).filter(k=>{if(!exq)return true;const q=EQUIP[k],hay=(q.name+" "+q.desc+" "+eqExercises(k).map(id=>EX[id].name).join(" ")).toLowerCase();return exq.toLowerCase().split(/\s+/).filter(Boolean).every(w=>hay.includes(w))})
    .sort((a,b)=>eqExercises(b).length-eqExercises(a).length||EQUIP[a].name.localeCompare(EQUIP[b].name));
  return `<p class="muted mfcount" role="status">${ks.length} of ${Object.keys(EQUIP).length} pieces of equipment, most-used first</p>`+(ks.length?`<div class="exgrid">${ks.map(eqCard).join("")}</div>`:`<div class="empty">Nothing matches that search.</div>`)}
function renderEquipDetail(){
  const k=state.eqId,q=EQUIP[k];
  if(!q){$("#view").innerHTML=`<div class="empty">No equipment called “${esc(k)}”. <a href="#equipment">Back to all equipment</a></div>`;return}
  const ids=eqExercises(k),img=eqImg(k);
  const c=q.v?HVID[q.v].ch.find(x=>x.s<=q.s&&q.s<x.e):null;
  const mentions=VKEYS.flatMap(v=>HVID[v].ch.filter(x=>x!==c&&x.tr.some(([,t])=>t.includes(`href="#eq-${k}"`))).map(x=>({v,c:x})));
  $("#view").innerHTML=`<p style="margin:16px 0 0"><a href="#equipment">← All equipment</a></p>
   <div class="dayhead"><div><div class="lbl">Equipment${q.garden?"":" · used in the plan, not shown in the videos"}</div><h2>${esc(q.name)}</h2><p>${esc(q.desc)}</p></div></div>
   <div class="exdetail"><div class="exside">
     ${img?`<figure class="panel eqfig"><img src="${esc(img)}" alt="${esc(q.name)}">${q.v?`<figcaption class="muted">${HVID[q.v].day} video at ${ts(q.s)}</figcaption>`:""}</figure>`:""}
     <section class="panel"><h3>Exercises that use it <span class="muted num">${ids.length}</span></h3>${ids.length?`<ul class="plain">${ids.sort((a,b)=>EX[a].name.localeCompare(EX[b].name)).map(id=>`<li><a href="#ex-${id}">${esc(EX[id].name)}</a> <span class="muted" style="font-size:.8rem">${esc(kindOf(id))}${exDays(id).length?" · "+exDays(id).map(dayName).join(", "):""}</span></li>`).join("")}</ul>`:`<p class="muted">None in this page yet.</p>`}</section>
   </div><div class="exmain">
     ${ids.length?`<div class="exgrid">${ids.map(exCard).join("")}</div>`:""}
     ${c?`<h3 style="margin-top:20px">Where the video shows it</h3>${clipHTML(q.v,c,{eager:true})}`:""}
     ${mentions.length?`<h3 style="margin-top:20px">Also mentioned in</h3>${mentions.map(x=>clipHTML(x.v,x.c)).join("")}`:""}
   </div></div>`;
}
document.addEventListener("input",ev=>{if(ev.target.id!=="eqq")return;exq=ev.target.value;const l=$("#eqlist");if(l)l.innerHTML=equipListHTML()});

/* ---------- muscle-group quiz for each lifting day: compound vs isolation ---------- */
const DQ_GROUPS={D2:["quads","hamstrings","calves"],D4:["chest","lats","lowerback"],D7:["delts","biceps","triceps"]};
const GLABEL={quads:"quadriceps",hamstrings:"hamstrings",calves:"calves",chest:"chest",lats:"lats",lowerback:"lower back",delts:"shoulders (deltoids)",biceps:"biceps",triceps:"triceps"};
/* muscle groups whose anatomy the day quiz asks about */
const DA_GROUPS={D2:["quads","hamstrings","glutes","calves"],D4:["chest","lats","traps","lowerback"],D7:["delts","biceps","triceps","forearms"]};
/* exercises for a group on a day: what that day's video demonstrates plus what the plan assigns */
function dayGroupEx(k,g){const ids=new Set();
  HVID[DAYVID[k]].ch.forEach(c=>{if(!c.talk)c.ex.forEach(id=>ids.add(id))});
  PLAN[k].blocks.forEach(b=>[b.ex,...(b.alt||[])].forEach(id=>ids.add(id)));
  return [...ids].filter(id=>EX[id]&&EX[id].kind==="strength"&&EX[id].m.p.includes(g))}
const nm=id=>EX[id].name;
function dayQuiz(k){
  if(!DQ_GROUPS[k])return [];
  const qs=[],all=DQ_GROUPS[k].flatMap(g=>dayGroupEx(k,g));
  const isoAll=[...new Set(all.filter(id=>!EX[id].compound))],compAll=[...new Set(all.filter(id=>EX[id].compound))];
  const fill=(right,pool,extra)=>{const o=[right];for(const x of plainFirst([...pool,...extra]))if(o.length<4&&!o.includes(x))o.push(x);return o};
  const otherIso=Object.keys(EX).filter(id=>EX[id].kind==="strength"&&!EX[id].compound).map(nm);
  const otherComp=Object.keys(EX).filter(id=>EX[id].kind==="strength"&&EX[id].compound).map(nm);
  const mq=MQ();
  DA_GROUPS[k].forEach(g=>{const M=MUS[g];
    [M.nowhere?"full":"where","does","fig"].forEach(t=>{const q=mq.find(x=>x.id===`mq-${t}-${g}`);if(q)qs.push({...q,day:k})});
    if(!DQ_GROUPS[k].includes(g))return;
    const ex=dayGroupEx(k,g),comp=ex.filter(id=>EX[id].compound),iso=ex.filter(id=>!EX[id].compound),L=GLABEL[g],LH=mterm(g,esc(L));
    /* show a right answer that doesn't name the muscle; if every one does, the on-screen question stops naming it */
    const pick=a=>a.find(id=>!namesM(nm(id),g)),cR=pick(comp),iR=pick(iso);
    if(comp.length)qs.push({id:`dq-${k}-${g}-c`,day:k,mk:g,q:`Name a compound exercise for the ${L}.`,qh:cR?`Name a compound exercise for the ${LH}.`:"Which of these is a compound exercise?",accept:comp.map(nm),
      o:fill(nm(cR||comp[0]),isoAll.map(nm),otherIso),why:`Compound exercises move several joints at once. For the ${L}: ${comp.map(nm).join(", ")}.`,go:"exercises"});
    if(iso.length)qs.push({id:`dq-${k}-${g}-i`,day:k,mk:g,q:`Name an isolation exercise for the ${L}.`,qh:iR?`Name an isolation exercise for the ${LH}.`:"Which of these is an isolation exercise?",accept:iso.map(nm),
      o:fill(nm(iR||iso[0]),compAll.map(nm),otherComp),why:`Isolation exercises move one joint. For the ${L}: ${iso.map(nm).join(", ")}.`,go:"exercises"});
    else if(g==="lats")qs.push({id:`dq-${k}-lats-i`,day:k,mk:g,q:"Which isolation exercise does Huberman demonstrate for the lats?",qh:`Which isolation exercise does Huberman demonstrate for the ${LH}?`,accept:["None"],
      o:["None: he says the lats are hard to isolate, and compound pulls and rows are enough","The straight-arm cable pulldown","The pullover machine","The shrug"],why:"In the Day 4 video he skips lat isolation and relies on pull-ups, pulldowns and rows with progressive overload.",go:"exercises"});
  });
  return qs}
/* earlier day-quiz questions (compound or isolation, one per exercise): kept so past answers still name their question */
function typeQs(k){const qs=[];
  PLAN[k].blocks.forEach(b=>{const e=EX[b.ex];if(!e||e.kind!=="strength"||b.optional||e.m.p.some(x=>x==="abs"||x==="obliques"))return;const r=e.compound?"Compound":"Isolation";
    qs.push({id:`dq-${k}-type-${b.ex}`,day:k,q:`Today's ${e.name}: compound or isolation?`,accept:[r],o:[r,r==="Compound"?"Isolation":"Compound"],
      why:e.compound?`Compound: more than one joint moves (main muscles: ${e.m.p.map(x=>MNAME[x].toLowerCase()).join(", ")}).`:`Isolation: only one joint moves (${e.m.p.map(x=>MNAME[x].toLowerCase()).join(", ")}).`,go:"ex-"+b.ex})});
  return qs}
const allDayQ=()=>LIFTDAYS.flatMap(dayQuiz);
/* every question once, by id */
const ALLQ=()=>{const m=new Map();[...QUIZ,...allDayQ(),...MQ(),...LIFTDAYS.flatMap(typeQs)].forEach(q=>{if(!m.has(q.id))m.set(q.id,q)});return [...m.values()]};
/* a question as listed: diagram questions say what was shown; the muscle group is named when the question calls it something else */
function qLabel(q){if(!q)return "";const t=q.listq||q.q,M=q.mk&&MUS[q.mk];return esc(t)+(M&&!t.toLowerCase().includes(M.n.toLowerCase())?` <span class="muted">· ${esc(M.n)}</span>`:"")}
function notesSide(){const ns=Object.values(state.qnotes||{}).filter(n=>n&&n.text&&n.text.trim()).sort((a,b)=>a.at<b.at?1:-1).slice(0,8);
  return `<div class="lbl" style="margin-top:14px">Your notes</div>${ns.length?`<ul class="qnl">${ns.map(n=>`<li><b>${n.mk&&MUS[n.mk]?`<a href="#muscle-${n.mk}">${esc(MUS[n.mk].n)}</a>`:esc(n.q||n.key)}</b>: ${esc(n.text)}</li>`).join("")}</ul>`:`<p class="muted" style="font-size:.84rem;margin:4px 0 0">None yet. After you check an answer, the notes box under it keeps a note for that muscle group, or for that question.</p>`}`}
function dayQuizPanel(k){
  const qs=dayQuiz(k);if(!qs.length)return "";
  const past=(state.quizzes||[]).filter(a=>a.day===k).sort((a,b)=>a.at<b.at?1:-1),last=past[0];
  return `<section class="panel dquiz"><div class="vtop"><div><h3>Muscle-group quiz · ${qs.length} questions</h3>
    <p class="muted">Where today's muscle groups are, what they do, and which exercises train them. The voice session asks these during long rests, all but the diagram questions, and puts your answers in its report; importing the report saves the score under Quiz.</p></div>
    <div class="vbtns"><button type="button" class="btn" data-dquiz="${k}">Take it here</button></div></div>
    <p class="lastline">${last?`Last attempt ${esc(fmtDate(last.at.slice(0,10)))}${last.source==="voice"?" (voice)":""}: ${last.score}/${last.total}${last.missed?.length?" · missed: "+esc(last.missed.map(id=>ALLQ().find(q=>q.id===id)?.q||id).join("; ")):""}`:"No attempts yet."}</p>
    <details class="vmore"><summary>Questions and answers</summary><ol class="dqlist">${qs.map(q=>`<li><b>${esc(q.listq||q.q)}</b><br><span class="muted">${esc(q.why)}</span></li>`).join("")}</ol></details></section>`}
document.addEventListener("click",ev=>{const t=ev.target.closest("[data-dquiz]");if(!t)return;const k=t.dataset.dquiz;
  newQuiz(dayQuiz(k).map(q=>q.id),"day");state.quiz.day=k;goView("quiz");window.scrollTo({top:0})});
function quizVoiceSection(k){const qs=dayQuiz(k).filter(q=>!q.fig);if(!qs.length)return "";
  return `

## Muscle-group quiz (${qs.length} questions)
Ask these one at a time, in order, during the long rests after work sets (never during a set or a warm-up rest, and never more than one per rest). If I say "skip quiz", stop asking. Accept any answer in the Accept list, in my own words. After each answer say right or wrong in a few words, and if wrong, give the reason. Record every question you asked.
${qs.map((q,i)=>`Q${i+1} [id: ${q.id}] ${q.q}
   Accept: ${q.accept.join(", ")}
   Reason: ${q.why}`).join("\n")}`}
async function saveVoiceQuiz(r,date,k){
  if(!Array.isArray(r.quiz)||!r.quiz.length||!state.db)return "";
  const known=new Map(ALLQ().map(q=>[q.id,q]));
  const items=r.quiz.filter(x=>x&&known.has(String(x.id))).map(x=>({id:String(x.id),answer:String(x.answer??""),correct:x.correct===true||x.correct==="true"}));
  if(!items.length)return " Quiz answers had no known question ids.";
  const at=new Date().toISOString(),score=items.filter(x=>x.correct).length;
  try{await state.db.doc("quiz/"+at.replace(/[:.]/g,"-")).set({at,date,day:k,source:"voice",score,total:items.length,missed:items.filter(x=>!x.correct).map(x=>x.id),answers:items});
    for(const x of items)await srsReview(x.id,x.correct?3:1,"voice");
    return ` Quiz saved: ${score}/${items.length}.`}catch(e){return " The quiz answers couldn't be saved."}}

function render(){
  closeGloss(false);
  {const cur=b=>b.dataset.view===state.view||((state.view==="exercise"||state.view==="equip")&&b.dataset.view==="exercises");
  document.querySelectorAll(".mainnav button").forEach(b=>{if(cur(b))b.setAttribute("aria-current","page");else b.removeAttribute("aria-current")});
  const on=[...document.querySelectorAll(".mainnav button")].find(cur);const nc=document.getElementById("navcur");if(nc)nc.textContent=on?on.textContent:"";}
  ({today:renderToday,exercises:renderExercises,exercise:renderExDetail,equip:renderEquipDetail,weeks:renderWeeks,mobility:renderMobility,plan:renderPlan,muscles:renderMuscles,quiz:renderQuiz,history:renderHistory,rules:renderRules,terms:renderTerms}[state.view]||renderToday)();
  paintBar();
}
/* hash routing: #session #weeks #mobility #plan #quiz #history #rules #terms, or #term-<name> */
const HASH_VIEW={session:"today",exercises:"exercises",weeks:"weeks",mobility:"mobility",plan:"plan",muscles:"muscles",quiz:"quiz",history:"history",rules:"rules",terms:"terms"};
const VIEW_HASH={today:"session",exercises:"exercises",weeks:"weeks",mobility:"mobility",plan:"plan",muscles:"muscles",quiz:"quiz",history:"history",rules:"rules",terms:"terms"};
function route(){
  const h=decodeURIComponent((location.hash||"").slice(1));
  if(h.startsWith("term-")){
    state.view="terms";render();
    const el=document.getElementById(h.toLowerCase());
    if(el){el.scrollIntoView({block:"start"});el.focus({preventScroll:true});el.classList.add("flash");setTimeout(()=>el.classList.remove("flash"),1800)}
    else window.scrollTo({top:0});
    return true;
  }
  if(h.startsWith("muscle-")&&MUS[h.slice(7)]){state.msel=h.slice(7);state.view="muscles";render();const d=document.querySelector(".mgrid");if(d)d.scrollIntoView({block:"start"});return true}
  if(h==="equipment"){exMode="equip";state.view="exercises";render();return true}
  if(h.startsWith("eq-")){state.eqId=h.slice(3);state.view="equip";render();window.scrollTo({top:0});return true}
  if(h.startsWith("ex-")){state.exId=h.slice(3);state.view="exercise";render();window.scrollTo({top:0});return true}
  if(HASH_VIEW[h]){if(state.view!==HASH_VIEW[h]){state.view=HASH_VIEW[h];render()}return true}
  return false;
}
window.addEventListener("hashchange",route);
function goView(v){state.view=v;try{if(v!=="exercise"&&v!=="equip")localStorage.setItem("wk.view",v)}catch(e){}
  const h="#"+(v==="exercise"?"ex-"+state.exId:v==="equip"?"eq-"+state.eqId:VIEW_HASH[v]);if(location.hash!==h){try{history.replaceState(null,"",h)}catch(e){location.hash=h}}render()}

/* ---------- database ---------- */
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
async function saveSettings(){
  if(!state.db)return;
  const ref=state.db.doc("settings/main"),data={unit:state.unit,updatedAt:new Date().toISOString()};
  try{await ref.update(data)}catch(e){try{await ref.set(data)}catch(e2){}}
}

async function connect(){
  const t=setTimeout(()=>{if(!state.ready)setStatus("The log didn't answer. You can read the plan; entries won't be saved.",true)},10000);
  let db=null;try{db=await window.claude?.use?.("db")}catch(e){}
  if(!db){clearTimeout(t);setStatus("This browser won't let the page save anything (private windows often block it), so sets can't be logged here. The plan still works.",true);render();return}
  state.db=db;
  db.collection("sessions").onSnapshot(snap=>{
    clearTimeout(t);state.ready=true;
    const all={};snap.docs.forEach(d=>{all[d.id]=d.data()});state.sessions=all;
    const fresh=all[state.date]||null;
    // keep local edits while typing; take remote doc otherwise
    const a=document.activeElement,editing=!!(a&&a.closest&&a.closest("#view")&&/^(INPUT|TEXTAREA|SELECT)$/.test(a.tagName));
    if(!dirty&&!inflight&&!editing){state.doc=fresh?JSON.parse(JSON.stringify(fresh)):null;
      const id=a&&a.id;const pos=a&&a.selectionStart;render();
      if(id){const n=document.getElementById(id);if(n){n.focus();try{n.setSelectionRange(pos,pos)}catch(e){}}}}
    restoreRest();paintBar();
    if(!jumpedToActive&&state.view==="today"&&state.doc&&state.doc.active){jumpedToActive=true;setTimeout(()=>{const el=document.querySelector(`[data-exsheet="${state.doc.active.ex}"]`);if(el)el.scrollIntoView({block:"start"})},60)}
    if($("#status").textContent.startsWith("Connecting"))setStatus(Object.keys(all).length?`${Object.keys(all).length} session${Object.keys(all).length>1?"s":""} in the log`:"Log connected · nothing recorded yet");
  },err=>{clearTimeout(t);setStatus("Log error: "+(err.code||err.message),true)});
  db.collection("quiz").onSnapshot(snap=>{state.quizzes=snap.docs.map(d=>d.data());if(state.view==="quiz"&&!editingNow())render()},()=>{});
  db.collection("srs").onSnapshot(snap=>{const o={};snap.docs.forEach(d=>{o[d.id]=d.data()});
    for(const k in state.srs||{}){const l=state.srs[k];if(l&&(!o[k]||Date.parse(l.last)>Date.parse(o[k].last)))o[k]=l}
    state.srs=o;const z=state.quiz;if(z&&z.set==="review"&&z.i===0&&!z.checked&&z.pick==null)newQuiz();
    if(state.view==="quiz"&&!editingNow())render();
    const ql=document.getElementById("qlink");if(ql)ql.outerHTML=qlinkHtml()},()=>{});
  db.collection("quiznotes").onSnapshot(snap=>{const o={};snap.docs.forEach(d=>{o[d.id]=d.data()});qnPending.forEach(k=>{if(state.qnotes&&state.qnotes[k])o[k]=state.qnotes[k]});state.qnotes=o;
    if((state.view==="quiz"||state.view==="muscles")&&!editingNow())render()},()=>{});
  db.doc("settings/main").onSnapshot(s=>{const v=s.exists?s.data():null;if(!v)return;
    if(v.unit&&v.unit!==state.unit){state.unit=v.unit;$("#unit").value=v.unit}
    state.planStart=v.planStart||null;if(v.srsNew)state.srsNew=+v.srsNew;
    if(v.birthYear){const t=new Date(),m=v.birthMonth||1;
      // age from birth year and month; counts the birthday from the first of that month
      state.age=t.getFullYear()-v.birthYear-((t.getMonth()+1)<m?1:0)}
    if(!dirty)render()},()=>{});
}

/* ---------- events ---------- */
document.addEventListener("input",ev=>{
  const el=ev.target;
  if(el.dataset&&el.dataset.ex){
    const d=ensureDoc(),id=el.dataset.ex,i=+el.dataset.i,f=el.dataset.f;
    const e=d.ex[id]||(d.ex[id]={sets:[]});const arr=el.dataset.w?(e.warmups||(e.warmups=[])):e.sets;while(arr.length<=i)arr.push({});
    if(el.type==="checkbox"){if(el.checked)arr[i][f]=1;else delete arr[i][f];queueSave();return}
    const raw=el.value.trim();arr[i][f]=(f==="note"||raw==="")?raw:(isNaN(+raw)?raw:+raw);
    if(f==="reps"&&BWX.has(id)&&!el.dataset.w)arr[i].load=e.add??"";
    if(f==="load"&&DBP.has(id)){const t=document.getElementById(`tot-${id}-${el.dataset.w?"w":""}${i}`);if(t)t.textContent=dbTot(arr[i].load)}
    if(f==="l"||f==="r")arr[i].reps=lrMin(arr[i]);
    if((f==="reps"||f==="l"||f==="r")&&raw!==""&&!arr[i].at){arr[i].at=new Date().toISOString();const c=document.getElementById(`at-${id}-${el.dataset.w?"w":""}${i}`);if(c)c.textContent=new Date(arr[i].at).toLocaleTimeString([],{hour:"numeric",minute:"2-digit"})}
    if(f==="side"){const bw=num(e.barw)??barFor(id);if(num(e.barw)==null)e.barw=bw;const sd=num(arr[i].side);arr[i].load=sd==null?"":totalOf(bw,sd);
      const t=document.getElementById(`tot-${id}-${el.dataset.w?"w":""}${i}`);if(t)t.textContent=arr[i].load}
    queueSave();return;
  }
  if(el.dataset&&el.dataset.bwt){const d=ensureDoc();d.bw=signedNum(el.value);queueSave();return}
  if(el.dataset&&el.dataset.bwadd){const d=ensureDoc(),id=el.dataset.bwadd,e=d.ex[id]||(d.ex[id]={sets:[]});e.add=signedNum(el.value);(e.sets||[]).forEach(x=>{if(x)x.load=e.add});queueSave();return}
  if(el.dataset&&el.dataset.barw){const d=ensureDoc(),id=el.dataset.barw;const e=d.ex[id]||(d.ex[id]={sets:[]});const raw=el.value.trim();e.barw=raw===""?"":+raw;
    const bw=num(e.barw)??BAR();[["",e.sets||[]],["w",e.warmups||[]]].forEach(([p,arr])=>arr.forEach((x,i)=>{if(x&&num(x.side)!=null){x.load=totalOf(bw,num(x.side));const t=document.getElementById(`tot-${id}-${p}${i}`);if(t)t.textContent=x.load}}));
    queueSave();return}
  if(el.dataset&&el.dataset.exnote){const d=ensureDoc(),id=el.dataset.exnote;const e=d.ex[id]||(d.ex[id]={sets:[]});e.notes=el.value;queueSave();return}
  if(["notes","steps","sleep","bw"].includes(el.id)){const d=ensureDoc();const raw=el.value;d[el.id]=el.id==="notes"?raw:(raw===""?"":+raw);queueSave()}
});
document.addEventListener("change",ev=>{
  const el=ev.target;
  if(el.id==="date"){if(el.value){flushNow();state.date=el.value;state.doc=state.sessions[el.value]?JSON.parse(JSON.stringify(state.sessions[el.value])):null;render()}}
  else if(el.id==="unit"){state.unit=el.value;saveSettings();render()}
  else if(el.id==="planstart"){state.planStart=el.value?iso(weekStart(el.value)):null;savePlanStart();render()}
  else if(el.id==="dayover"){const d=ensureDoc();d.day=el.value;queueSave();render()}
  else if(el.classList.contains("alt")){state.choice[el.dataset.ck]=el.value;render()}
  else if(el.dataset&&el.dataset.ex&&(el.dataset.f==="load"||el.dataset.f==="side")){render()} // refresh ramp loads after typing set 1
  else if(el.dataset&&el.dataset.barw){render()}
});
document.addEventListener("click",ev=>{
  if(!ev.target.closest("#gloss,.term"))closeGloss(false);
  const t=ev.target.closest("button,a");if(!t)return;
  if(t.dataset.term||t.dataset.mterm){ev.preventDefault();openGloss(t);return}
  if(t.dataset.lr){const d=ensureDoc(),id=t.dataset.lr,i=+t.dataset.i,e=d.ex[id]||(d.ex[id]={sets:[]});e.sets=e.sets||[];while(e.sets.length<=i)e.sets.push({});const x=e.sets[i];
    if(x.lr){delete x.lr;delete x.l;delete x.r}else{x.lr=1;if(num(x.reps)!=null){x.l=x.reps;x.r=x.reps}}
    queueSave();render();const n=document.getElementById(`in-${id}-${i}-${x.lr?"l":"reps"}`);if(n&&x.lr)n.focus();return}
  if(t.dataset.vscroll){const r=t.closest(".varwrap").querySelector(".vars");const c=r.querySelector(".var");r.scrollBy({left:(+t.dataset.vscroll)*((c?c.offsetWidth:300)+10),behavior:"smooth"});return}
  if(t.dataset.done){const d=ensureDoc(),id=t.dataset.done,e=d.ex[id]||(d.ex[id]={sets:[]}),k=t.dataset.ck;e.done=t.getAttribute("aria-pressed")!=="true";
    if(e.done&&d.active&&d.active.ex===id){d.active=null} // the rest keeps running: it ends when the next exercise starts or on End
    if(e.done)state.collapsed.add(k);else state.collapsed.delete(k);saveCollapsed();queueSave();render();return}
  if(t.dataset.active){const d=ensureDoc(),id=t.dataset.active,on=t.getAttribute("aria-pressed")!=="true";
    if(on&&rest&&rest.ex!==id)stopRest(); // starting the next exercise ends the previous one's rest and logs it
    if(on){const [lo,hi]=(t.dataset.arest||"").split(",").map(Number);d.active={ex:id,name:t.dataset.restname||EX[id].name,lo:lo||null,hi:hi||null,at:new Date().toISOString()};
      const e=d.ex[id]||(d.ex[id]={sets:[]});if(!e.startedAt)e.startedAt=d.active.at;state.collapsed.delete(t.dataset.ck);saveCollapsed()}
    else d.active=null;
    queueSave();render();return}
  if(t.dataset.tog){const k=t.dataset.tog;state.collapsed.has(k)?state.collapsed.delete(k):state.collapsed.add(k);saveCollapsed();render();
    const n=document.querySelector(`[data-tog="${k}"]`);if(n)n.focus();return}
  if(t.dataset.collapseAll){const keys=t.dataset.keys.split(",");keys.forEach(k=>t.dataset.collapseAll==="collapse"?state.collapsed.add(k):state.collapsed.delete(k));saveCollapsed();render();return}
  if(t.dataset.open){flushNow();state.date=t.dataset.open;$("#date").value=state.date;state.doc=state.sessions[state.date]?JSON.parse(JSON.stringify(state.sessions[state.date])):null;goView("today");window.scrollTo({top:0});return}
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
/* rest timer: one at a time, in a bar floating at the bottom of the screen.
   Every rest is saved: the running one as restNow on the session document (so a refresh picks it up),
   and each finished one in ex[id].rests as {start,end,sec,lo,hi}. */
let rest=null;
const REST_STALE=60*60*1000;
function fmtClock(s){return Math.floor(s/60)+":"+String(Math.floor(s%60)).padStart(2,"0")}
/* edit the session document for a date: the open one through the normal save, another one directly */
function editSession(date,fn){
  if(date===state.date){fn(ensureDoc());queueSave();return}
  if(!state.db)return;const d=JSON.parse(JSON.stringify(state.sessions[date]||{date,day:dayFor(date),ex:{}}));if(!d.ex)d.ex={};
  fn(d);d.updatedAt=new Date().toISOString();d.updatedBy="page";state.sessions[date]=d;
  state.db.doc("sessions/"+date).set(JSON.parse(JSON.stringify(d))).catch(()=>{});
}
function lsRest(v){try{v?localStorage.setItem("wk.restNow",JSON.stringify(v)):localStorage.removeItem("wk.restNow")}catch(e){}}
function startRest(lo,hi,name,ex,opts){
  opts=opts||{};
  if(!opts.resume)stopRest();
  const bar=$("#restbar"),scale=hi*1.25;
  const t0=opts.t0||Date.now(),date=opts.date||state.date;
  rest={t0,lo,hi,name,ex:ex||null,date,last:"",min:Math.floor((Date.now()-t0)/60000)};
  const rec={ex:rest.ex,name,lo,hi,start:new Date(t0).toISOString(),date};
  lsRest(rec);
  if(!opts.resume)editSession(date,d=>{d.restNow=rec;
    if(rest.ex&&!(d.ex[rest.ex]&&d.ex[rest.ex].done===true)&&(!d.active||d.active.ex!==rest.ex)){d.active={ex:rest.ex,name,lo,hi,at:rec.start}}});
  /* the tap that starts the rest also unlocks sound; the screen stays awake so the minute chimes keep playing */
  ivAudio();ivLock(true);
  /* pre-schedule the minute chimes on the audio clock, which keeps running when the tab is in the background (timers don't) */
  {const ac=IV.ac;if(ac){if(ac.state==="running")restSched();else ac.resume().then(restSched).catch(()=>{})}}
  $("#rb-lo").style.left=(lo/scale*100)+"%";$("#rb-hi").style.left=(hi/scale*100)+"%";
  const tick=()=>{if(!rest)return;const s=(Date.now()-rest.t0)/1000;
    $("#rb-time").textContent=fmtClock(s);document.querySelectorAll("[data-restlive]").forEach(n=>{n.textContent=fmtClock(s)});$("#rb-fill").style.width=Math.min(100,s/scale*100)+"%";
    const st=s<lo?"early":s<=hi?"ready":"late";
    const txt=st==="early"?`ready at ${fmtClock(lo)} (target ${fmtClock(lo)}–${fmtClock(hi)})`:st==="ready"?"in the range: next set when you feel ready":`past ${fmtClock(hi)}: start the set`;
    const m=Math.floor(s/60);if(m>rest.min){rest.min=m;restChime(m,!rest.osc)}
    bar.dataset.s=st;if(rest.last!==st){$("#rb-state").textContent=txt;rest.last=st}
    else if(st==="early")$("#rb-state").textContent=txt;};
  tick();rest.iv=setInterval(tick,1000);
  if(!opts.resume)render();else paintBar();
}
function stopRest(){
  if(rest){const r=rest;clearInterval(r.iv);restUnsched();rest=null;if(!IV.t0)ivLock(false);lsRest(null);
    const end=new Date(),sec=Math.round((end-r.t0)/1000);
    editSession(r.date,d=>{delete d.restNow;
      if(r.ex){const e=d.ex[r.ex]||(d.ex[r.ex]={sets:[]});(e.rests=e.rests||[]).push({start:new Date(r.t0).toISOString(),end:end.toISOString(),sec,lo:r.lo,hi:r.hi})}
      else (d.rests=d.rests||[]).push({name:r.name,start:new Date(r.t0).toISOString(),end:end.toISOString(),sec,lo:r.lo,hi:r.hi})});
    render();return}
  paintBar();
}
/* the bar: the running rest, or else the exercise in progress with a one-tap Start rest */
function paintBar(){
  const bar=$("#restbar");if(!bar)return;
  const act=state.doc&&state.doc.active;
  if(rest){bar.dataset.mode="rest";$("#rb-name").textContent="Rest · "+rest.name;bar.hidden=false}
  else if(act&&act.lo&&act.hi){bar.dataset.mode="idle";$("#rb-name").textContent="In progress · "+act.name;bar.hidden=false}
  else bar.hidden=true;
  document.body.classList.toggle("resting",!bar.hidden);
}
/* after a refresh: pick the running rest back up from this device, or from the log */
function restoreRest(){
  if(rest)return;
  let rec=null;try{rec=JSON.parse(localStorage.getItem("wk.restNow")||"null")}catch(e){}
  for(const k in state.sessions){const r=state.sessions[k]&&state.sessions[k].restNow;if(r&&(!rec||Date.parse(r.start)>Date.parse(rec.start)))rec=Object.assign({date:k},r)}
  if(!rec||!rec.lo||!rec.hi)return;
  const t0=Date.parse(rec.start);
  if(!(t0>0)||Date.now()-t0>REST_STALE){/* forgotten: close it out at its maximum so the log isn't left with a dangling timer */
    lsRest(null);if(rec.date&&(state.sessions[rec.date]||{}).restNow)editSession(rec.date,d=>{delete d.restNow;
      if(rec.ex){const e=d.ex[rec.ex]||(d.ex[rec.ex]={sets:[]});(e.rests=e.rests||[]).push({start:rec.start,end:null,sec:null,lo:rec.lo,hi:rec.hi,abandoned:true})}});return}
  startRest(rec.lo,rec.hi,rec.name,rec.ex,{resume:true,t0,date:rec.date||state.date});
}
let jumpedToActive=false;
function jumpToActive(){const a=state.doc&&state.doc.active;if(!a)return;
  if(state.view!=="today"){goView("today")}
  const el=document.querySelector(`[data-exsheet="${a.ex}"]`);if(el)el.scrollIntoView({block:"start",behavior:"smooth"})}
/* a chime at each full minute of rest: one beep at 1:00, two at 2:00, and so on, up to five */
function restChime(m,snd){if(snd!==false)for(let i=0;i<Math.min(m,5);i++)ivBeep(784,.14,i*.24);try{navigator.vibrate&&navigator.vibrate(Array.from({length:Math.min(m,5)*2-1},(x,i)=>i%2?90:140))}catch(e){}}
function restSched(){if(!rest)return;restUnsched();const ac=IV.ac;if(!ac||ac.state!=="running")return;
  const s=(Date.now()-rest.t0)/1000,osc=[];
  for(let m=Math.floor(s/60)+1;m<=15;m++){const at=m*60-s;for(let i=0;i<Math.min(m,5);i++){const o=ivBeep(784,.14,at+i*.24);if(o)osc.push(o)}}
  rest.osc=osc}
function restUnsched(){if(rest&&rest.osc){rest.osc.forEach(o=>{try{o.stop()}catch(e){}});rest.osc=null}}
document.addEventListener("visibilitychange",()=>{if(document.visibilityState==="visible"&&rest){ivLock(true);restSched()}});
document.addEventListener("click",ev=>{const t=ev.target.closest("[data-rest],[data-reststop],#rb-stop,#rb-go,#rb-name");if(!t)return;
  if(t.id==="rb-stop"||t.dataset.reststop){stopRest();return}
  if(t.id==="rb-name"){ev.preventDefault();jumpToActive();return}
  if(t.id==="rb-go"){const a=state.doc&&state.doc.active;if(a&&a.lo&&a.hi)startRest(a.lo,a.hi,a.name,a.ex);return}
  const [lo,hi]=t.dataset.rest.split(",").map(Number);startRest(lo,hi,t.dataset.restname,t.dataset.restex)});
/* interval timer: wall-clock based, so pauses and throttled tabs don't drift */
const IV={n:null,acc:0,t0:null,iv:null,last:-1,cd:-1,ac:null,wl:null,talk:true};
function ivRounds(){if(IV.n)return IV.n;const e=entryFor("sprint")||entryFor("stadium");return Math.min(12,Math.max(1,num(e?.sets?.[0]?.rounds)??PLAN.D6.blocks[0].min))}
function ivPhases(n){const p=[{k:"warm",d:420,t:"Warm-up",s:"Easy pace, build gradually"}];
  for(let i=1;i<=n;i++)p.push({k:"hard",d:30,t:"Fast",s:`Round ${i} of ${n} · hard effort, 90–95% of max HR`},{k:"easy",d:60,t:"Slow",s:`Recover · round ${i} of ${n} done`});
  return p}
function ivElapsed(){return IV.acc+(IV.t0?(Date.now()-IV.t0)/1000:0)}
function ivPos(){const ph=ivPhases(ivRounds());let t=ivElapsed();
  for(let i=0;i<ph.length;i++){if(t<ph[i].d)return{ph,i,left:ph[i].d-t,done:false};t-=ph[i].d}
  return{ph,i:ph.length-1,left:0,done:true}}
function ivPanel(){const n=ivRounds();return `<div class="panel ivp" id="ivp" data-k="warm">
  <div class="iv-top"><span class="lbl">Interval timer · 7 min warm-up, then 30 s all-out / 60 s easy</span>
  <span class="iv-rounds"><span class="lbl">Rounds</span><button type="button" class="btn" id="iv-minus" aria-label="Fewer rounds">−</button><span class="num" id="iv-n">${n}</span><button type="button" class="btn" id="iv-plus" aria-label="More rounds">+</button><span class="muted num" id="iv-total"></span></span></div>
  <div class="iv-main"><div class="iv-mode" id="iv-mode" role="status" aria-live="polite">Warm-up</div><div class="iv-clock num" id="iv-clock">7:00</div></div>
  <div class="iv-sub" id="iv-sub"></div>
  <div class="iv-track" aria-hidden="true"><span id="iv-fill"></span></div>
  <div class="muted" id="iv-next"></div>
  <div class="iv-btns"><button type="button" class="btn" id="iv-prev" aria-label="Previous phase" title="Back to the start of this phase; tap again within 3 s to go to the previous phase">⏮ Prev</button><button type="button" class="btn primary" id="iv-play">Start</button><button type="button" class="btn" id="iv-skip" aria-label="Next phase">Next ⏭</button><button type="button" class="btn" id="iv-reset">Reset</button>
  <label><input type="checkbox" id="iv-talk" ${IV.talk?"checked":""}> Say “fast” / “slow” out loud</label></div>
  <p class="muted" style="margin:8px 0 0;font-size:.82rem">Beeps and vibrates at each change, counts down the last 3 seconds, and keeps the screen awake while running. Keep this tab open in front.</p></div>`}
function ivPaint(){const box=$("#ivp");if(!box)return;const p=ivPos(),c=p.ph[p.i],started=ivElapsed()>0;
  box.dataset.k=p.done?"done":c.k;
  $("#iv-mode").textContent=p.done?"Done":c.t;
  $("#iv-sub").textContent=p.done?"Session complete. Log your rounds below.":c.s;
  $("#iv-clock").textContent=fmtClock(Math.ceil(p.left));
  $("#iv-fill").style.width=(p.done?100:(1-p.left/c.d)*100)+"%";
  const nx=p.ph[p.i+1];$("#iv-next").textContent=p.done?"":nx?`Next: ${nx.t.toLowerCase()} for ${fmtClock(nx.d)}`:"Last phase";
  $("#iv-play").textContent=IV.t0?"Pause":p.done?"Start again":started?"Resume":"Start";
  $("#iv-n").textContent=ivRounds();$("#iv-total").textContent="≈"+Math.round(p.ph.reduce((a,x)=>a+x.d,0)/60)+" min";
  $("#iv-minus").disabled=$("#iv-plus").disabled=started&&!p.done}
function ivBeep(f,d,at=0){const ac=IV.ac;if(!ac)return;try{const o=ac.createOscillator(),g=ac.createGain(),t=ac.currentTime+at;
  o.frequency.value=f;o.connect(g);g.connect(ac.destination);g.gain.setValueAtTime(0.0001,t);g.gain.exponentialRampToValueAtTime(0.4,t+0.01);g.gain.exponentialRampToValueAtTime(0.0001,t+d);o.start(t);o.stop(t+d+0.02);return o}catch(e){}}
function ivSay(w){if(!IV.talk||!window.speechSynthesis)return;try{speechSynthesis.cancel();speechSynthesis.speak(new SpeechSynthesisUtterance(w))}catch(e){}}
function ivCue(k){const vib=p=>{try{navigator.vibrate&&navigator.vibrate(p)}catch(e){}};
  if(k==="hard"){ivBeep(990,.15);ivBeep(990,.15,.22);vib([200,100,200]);ivSay("Fast")}
  else if(k==="easy"){ivBeep(440,.45);vib(400);ivSay("Slow")}
  else if(k==="cool"){ivBeep(440,.45);vib(400);ivSay("Cool down")}
  else if(k==="done"){[0,.25,.5].forEach(a=>ivBeep(880,.15,a));vib([150,80,150,80,150]);ivSay("Done")}}
async function ivLock(on){try{if(on&&navigator.wakeLock&&!IV.wl){IV.wl=await navigator.wakeLock.request("screen");IV.wl.addEventListener("release",()=>{IV.wl=null})}
  else if(!on&&IV.wl){await IV.wl.release();IV.wl=null}}catch(e){}}
document.addEventListener("visibilitychange",()=>{if(document.visibilityState==="visible"&&IV.t0){ivLock(true);ivTick()}});
function ivTick(){const p=ivPos();
  if(p.done){ivStop();ivCue("done");ivPaint();return}
  if(IV.last!==p.i){if(IV.last!==-1)ivCue(p.ph[p.i].k);IV.last=p.i;IV.cd=-1}
  const s=Math.ceil(p.left);if(s>=1&&s<=3&&s!==IV.cd){IV.cd=s;ivBeep(660,.08)}
  ivPaint()}
function ivStop(){if(IV.t0){IV.acc=ivElapsed();IV.t0=null}clearInterval(IV.iv);IV.iv=null;ivLock(false)}
/* mix beeps over Spotify/podcasts instead of pausing them (iOS 17+ Safari: navigator.audioSession) */
function ivAudio(){try{if(navigator.audioSession)navigator.audioSession.type="ambient"}catch(e){}
  if(!IV.ac){try{IV.ac=new(window.AudioContext||window.webkitAudioContext)()}catch(e){}}try{IV.ac&&IV.ac.resume()}catch(e){}}
function ivPlay(){ivAudio();
  if(IV.t0){ivStop();ivPaint();return}
  if(ivPos().done)IV.acc=0;
  const p=ivPos();IV.t0=Date.now();IV.last=p.i;IV.cd=-1;
  if(IV.acc===0)ivSay("Warm up");ivBeep(880,.12);
  IV.iv=setInterval(ivTick,250);ivLock(true);ivPaint()}
function ivJump(i){const ph=ivPhases(ivRounds());i=Math.max(0,Math.min(i,ph.length));let t=0;for(let j=0;j<i;j++)t+=ph[j].d;
  IV.acc=t;if(IV.t0){IV.t0=Date.now();IV.last=-2;ivTick()}else{IV.last=-1;ivPaint()}}
function ivSkip(){const p=ivPos();if(p.done)return;ivJump(p.i+1)}
function ivPrev(){const p=ivPos();if(p.done){ivJump(p.ph.length-1);return}
  const into=p.ph[p.i].d-p.left;ivJump(into>3||p.i===0?p.i:p.i-1)}
document.addEventListener("click",ev=>{const t=ev.target.closest("#iv-play,#iv-skip,#iv-prev,#iv-reset,#iv-minus,#iv-plus");if(!t)return;
  if(t.id==="iv-play")ivPlay();else if(t.id==="iv-skip")ivSkip();else if(t.id==="iv-prev")ivPrev();
  else if(t.id==="iv-reset"){ivStop();IV.acc=0;IV.last=-1;ivPaint()}
  else{IV.n=Math.min(12,Math.max(1,ivRounds()+(t.id==="iv-plus"?1:-1)));ivPaint()}});
document.addEventListener("change",ev=>{if(ev.target.id==="iv-talk")IV.talk=ev.target.checked});
/* install-as-app button: hidden when already running as an installed app */
(function(){const btn=$("#installbtn"),dlg=$("#installdlg");if(!btn||!dlg)return;
  const mm=q=>{try{return matchMedia(q).matches}catch(e){return false}};
  const installed=()=>navigator.standalone===true||["standalone","fullscreen","minimal-ui","window-controls-overlay"].some(m=>mm(`(display-mode: ${m})`));
  btn.hidden=installed();
  const ua=navigator.userAgent,ios=/iPhone|iPad|iPod/.test(ua)||(/Macintosh/.test(ua)&&navigator.maxTouchPoints>1),android=/Android/.test(ua),
    edge=/Edg\//.test(ua),firefox=/Firefox|FxiOS/.test(ua),chrome=/Chrome\//.test(ua)&&!edge,macSafari=/Macintosh/.test(ua)&&/Safari/.test(ua)&&!chrome&&!edge&&!ios;
  const S={
    ios:["iPhone or iPad",["Tap the Share button (square with an up arrow).","Scroll down and tap <b>Add to Home Screen</b>.","If you see <b>Open as Web App</b>, leave it on. Tap <b>Add</b>."]],
    android:["Android",["Tap the ⋮ menu in Chrome.","Tap <b>Add to Home screen</b> (or <b>Install app</b>).","Choose <b>Install</b> if asked, then <b>Add</b>."]],
    chrome:["Chrome on a computer",["Click the ⋮ menu.","Choose <b>Cast, save, and share</b> → <b>Install page as app…</b>","Click <b>Install</b>. It opens in its own window and shows up in your apps."]],
    edge:["Edge on a computer",["Click the ⋯ menu.","Choose <b>Apps</b> → <b>Install this site as an app</b>.","Click <b>Install</b>."]],
    safari:["Safari on a Mac",["In the menu bar, choose <b>File</b> → <b>Add to Dock…</b>","Click <b>Add</b>. It opens from the Dock in its own window."]],
    firefox:["Firefox",["Firefox can't install pages as apps. Bookmark this page, or open it in Chrome, Edge or Safari to install it."]]};
  const mine=ios?"ios":android?"android":edge?"edge":firefox?"firefox":macSafari?"safari":"chrome";
  const block=k=>`<p style="margin:10px 0 0"><b>${S[k][0]}</b></p><ol>${S[k][1].map(s=>`<li>${s}</li>`).join("")}</ol>`;
  btn.addEventListener("click",()=>{
    $("#install-body").innerHTML=`<p class="muted" style="margin:6px 0 0">The log stays in the browser that saved it. If the installed app opens with an empty log, use Export log on the History tab here and Import a file… in the app.</p>${block(mine)}<details><summary>Other devices</summary>${Object.keys(S).filter(k=>k!==mine).map(block).join("")}</details>`;
    try{dlg.showModal()}catch(e){dlg.setAttribute("open","")}});
  $("#install-close").addEventListener("click",()=>{try{dlg.close()}catch(e){dlg.removeAttribute("open")}});
  dlg.addEventListener("click",ev=>{if(ev.target===dlg)dlg.close()});
})();
/* menu button on narrow screens */
function setNav(open){const t=$("#navtoggle"),n=$("#mainnav");if(!t||!n)return;t.setAttribute("aria-expanded",open);n.classList.toggle("open",open)}
document.addEventListener("click",ev=>{
  if(ev.target.closest("#navtoggle")){setNav($("#navtoggle").getAttribute("aria-expanded")!=="true");return}
  if(ev.target.closest(".mainnav button"))setNav(false);
  else if(!ev.target.closest("#mainnav"))setNav(false)});
document.addEventListener("keydown",ev=>{if(ev.key==="Escape"&&$("#navtoggle")?.getAttribute("aria-expanded")==="true"){setNav(false);$("#navtoggle").focus()}});
function flushNow(){if(dirty){clearTimeout(saveTimer);flush()}}

$("#date").value=state.date;
/* static.js starts the page */
