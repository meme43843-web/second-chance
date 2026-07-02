
const params = new URLSearchParams(window.location.search);

const pet = (params.get("pet") || "")
.trim()
.toLowerCase()
.replace(/\s+/g, "");

const from = params.get("from");

const backBtn = document.getElementById("backBtn");

backBtn.addEventListener("click", () => {
  if (from === "smart") {
    window.location.href = "smart.html";
  } else {
    window.location.href = "rescue.html";
  }
});

console.log(pet);
const data = {  

leo:{   
title:"Leo’s Rescue Story",  
image:"images/Leok.jfif",  
rescue:"Leo was found injured near a busy intersection after being struck by a vehicle.",  
medical:"He required surgery for a fractured leg and treatment for internal bruising.",  
recovery:"With therapy and patient care, Leo slowly learned to walk confidently again.",  
adoption:"Fully healed and ready for a calm, loving home.",  
story:
`Leo was discovered late at night, unable to stand on the cold pavement. 
Though frightened, he allowed rescuers to approach. 
Surgery saved his leg, and weeks of rehabilitation restored his strength. 
Each small step became a victory. 
Today, Leo walks steadily, enjoys gentle affection, and is ready for a forever family who will keep him safe.`
},  


  
odin:{  
title:"Odin’s Rescue Story",  
image:"images/Odin.jfif",  
rescue:"Odin was rescued after falling into a construction trench and injuring his muscles.",  
medical:"He received fluids, anti-inflammatory treatment, and careful monitoring.",  
recovery:"Gradual strength training helped him regain full mobility.",  
adoption:"Strong, loyal, and ready for his forever home.",  
story:`Odin had been trapped overnight, exhausted and dehydrated. 
When rescuers reached him, he was too weak to climb out.
 After medical stabilization, his recovery required patience and structured exercise. 
 Slowly, his power returned. Now Odin stands tall again, his resilience stronger than ever.`  
},  

oscar:{  
title:"Oscar’s Rescue Story",  
image:"images/Oscar.jfif",  
rescue:"Oscar was found hiding with a deep injury on his paw.",  
medical:"Veterinarians cleaned and stitched the wound, preventing infection.",  
recovery:"Quiet rest and gentle reassurance helped him heal physically and emotionally.",  
adoption:"Ready for a peaceful and loving home.",  
story:`Oscar had likely been injured while searching for food. 
He limped painfully and avoided contact. With patience, rescuers earned his trust.
 After treatment, healing came slowly—but steadily.
  Today, Oscar walks comfortably and rests peacefully beside those he trusts.`
},  

maverick:{  
title:"Maverick’s Rescue Story",  
image:"images/Maverick.jfif",  
rescue:"Maverick was discovered grounded with a fractured wing after a collision.",  
medical:"His wing was stabilized and carefully supported during recovery.",  
recovery:"Controlled rehabilitation allowed him to regain safe flight ability.",  
adoption:"Needs a secure home where he can thrive safely.",  
story:`Unable to fly, Maverick was vulnerable and frightened.
 Specialists treated his injured wing and monitored him closely.
  Weeks of restricted movement were necessary for proper healing. 
  The first successful glide marked a turning point.
   Now Maverick perches confidently and moves without pain.`
},  

pumpkin:{  
title:"Pumpkin’s Rescue Story",  
image:"images/Pumpkin.jfif",  
rescue:"Pumpkin was found wandering with a collar embedded tightly around her neck.",  
medical:"Veterinarians safely removed the collar and treated the surrounding wound.",  
recovery:"With proper care and affection, Pumpkin regained comfort and trust.",  
adoption:"Gentle and ready for a loving family.",  
story:`Pumpkin’s injury showed signs of long neglect.
 Despite discomfort, she approached rescuers quietly.
  Treatment relieved her pain, and time restored her spirit. 
  Soon her tail began wagging freely again. 
  Pumpkin now leans into every gentle touch, grateful for her second chance.`
},  

piper:{
title:"Piper’s Rescue Story",
image:"images/Piper.jfif",
rescue:"Piper was found under a parked car after suffering a fall that injured her hip.",
medical:"She required surgery and weeks of monitored rest to stabilize her injury.",
recovery:"With careful rehabilitation, Piper slowly regained balance and confidence.",
adoption:"Piper is now healed and ready for a gentle, loving home.",
story:`Piper was discovered trembling beneath a car, unable to put weight on her back leg. 
A fall from a height had left her disoriented and in pain. Despite her fear, she allowed rescuers to carefully lift her into safety. \n\nVeterinarians confirmed a hip fracture that required delicate surgery.The days that followed were quiet and slow. Movement had to be limited, and every step forward was measured.\n\nAt first, Piper hesitated to stand.But with encouragement, soft bedding, and patient therapy, she began to trust her body again.\n\nToday, Piper walks gracefully and enjoys peaceful spaces. She seeks gentle affection and feels safest beside calm, caring people. \n\nHer fall is part of her past. Her future is filled with comfort, stability, and love.`
},  

havenperiwinkle:{
title:"Havenperiwinkle’s Rescue Story",
image:"images/H.jfif",
rescue:"Haven was rescued after being struck by a bicycle, leaving her with a shoulder injury.",
medical:"She underwent surgery and received continuous veterinary supervision.",
recovery:"Steady rehabilitation helped her rebuild strength and mobility.",
adoption:"Haven is fully recovered and ready for her forever home.",
story:`Haven was found lying on the sidewalk, unable to lift her front leg after a sudden collision. She was frightened and confused, unsure why she couldn’t move properly.\n\nWhen rescuers approached, she remained still, watching carefully but without aggression. She seemed to understand that help had arrived.\n\nX-rays confirmed a shoulder fracture that required surgical repair. Weeks of careful recovery followed. Physical therapy sessions were slow, but Haven remained patient.\n\nWith each passing day, she gained confidence. The first time she ran again, even briefly, it was a moment of quiet celebration. \n\nToday, Haven enjoys walks, gentle playtime, and affectionate attention. She is steady, loyal, and deeply grateful for her second chance.`
},


daisy:{
title:"Daisy’s Rescue Story",
image:"images/Daisy.jfif",
rescue:"Daisy was found after being hit by a slow-moving vehicle on a rainy evening.",
medical:"She received emergency treatment for a fractured rib and mild internal trauma.",
recovery:"Through careful monitoring and rest, Daisy regained her strength.",
adoption:"Daisy is now healthy and ready for a loving family.",
story:`On a rainy night, Daisy was discovered lying quietly near the roadside. 
She had been struck and was too weak to stand.\n\nDespite her pain, she remained calm when rescuers approached, as if she sensed she was finally safe.\n\nAt the clinic, doctors worked quickly to stabilize her breathing and treat her injuries. The first few days were critical, requiring close supervision.\n\nGradually, Daisy’s appetite returned. Her tail began to move again. Small signs of hope replaced fear. \n\nToday, Daisy enjoys calm environments and soft companionship.  She is gentle, affectionate, and ready to begin a life free from danger.`
},

coco:{
title:"Coco’s Rescue Story",
image:"images/Coco11.jfif",
rescue:"Coco was rescued from an abandoned lot with a deep cut on his side.",
medical:"The wound was cleaned, stitched, and treated to prevent infection.",
recovery:"With rest and antibiotics, Coco healed steadily.",
adoption:"Coco is now healthy and looking for a caring home.",
story:`Coco had been wandering alone when he was found with a painful injury along his side. It was clear he had been hurt and left without help.\n\nRescuers transported him carefully, speaking softly to ease his fear.\n\nVeterinary treatment required stitches and ongoing medication. The healing process demanded patience and limited movement.\n\nAt first, Coco was cautious. But kindness slowly replaced fear. He began to greet caregivers with hopeful eyes.\n\nNow fully recovered, Coco is friendly, social, and eager to belong to a family who will never let him face hardship alone.`
},

pickles:{
title:"Pickles’s Rescue Story",
image:"images/pickles11.jfif",
rescue:"Pickles was found collapsed from severe dehydration and exhaustion.",
medical:"He received IV fluids, nutritional support, and close medical observation.",
recovery:"Over several weeks, Pickles regained energy and stability.",
adoption:"Pickles is now strong and ready for a forever home.",
story:`Pickles was discovered lying weak beneath a tree, barely able to lift his head. Prolonged lack of food and water had taken a serious toll. \n\nWhen rescuers arrived, he didn’t resist. He simply watched quietly, too tired to move. \n\nEmergency fluids were administered immediately.  The first days focused on stabilizing his condition and restoring strength. \n\nGradually, his appetite improved. He began standing on his own, then walking short distances. \n\nToday, Pickles is energetic and affectionate.  His once fragile body is now strong, and his spirit is even stronger.  He is ready for a life filled with consistency, care, and love.`
},


shine:{
title:"Shine’s Rescue Story",
image:"images/sss.jfif",
rescue:"Shine was found after being caught in wire fencing, leaving deep cuts on her legs.",
medical:"She required wound treatment, stitches, and close monitoring to prevent infection.",
recovery:"With steady care and limited movement, Shine slowly regained her strength.",
adoption:"Shine is fully healed and ready for a safe, loving home.",
story:"Shine was discovered tangled in old fencing, unable to free herself. The struggle had left painful cuts along her legs, and exhaustion had replaced her fear.\n\nWhen rescuers approached, she stopped resisting and allowed them to gently untangle her. It was clear she had been trapped for hours.\n\nAt the clinic, her wounds were carefully cleaned and stitched. The healing process required patience and daily care.\n\nOver time, Shine’s energy returned. The first time she ran without discomfort, it truly reflected her name.\n\nToday, Shine moves freely and confidently. She is affectionate, loyal, and ready to shine in a home where she will always be protected."
},

phoenix:{
title:"Phoenix’s Rescue Story",
image:"images/ph-.jfif",
rescue:"Phoenix was rescued after surviving a small house fire that left him with minor burns.",
medical:"He received specialized burn treatment and continuous veterinary supervision.",
recovery:"Through weeks of care and rest, Phoenix’s skin healed and his strength returned.",
adoption:"Phoenix is now healthy and ready for a calm, loving family.",
story:"Phoenix was found hiding near the remains of a small fire, shaken and injured. Though the burns were not severe, they required immediate and careful treatment.\n\nAt the veterinary clinic, his wounds were gently treated and bandaged. Recovery demanded patience, as healing skin requires time and protection.\n\nDespite his frightening experience, Phoenix remained calm and surprisingly trusting.\n\nEach day brought visible improvement. His coat slowly grew back, and his energy returned.\n\nToday, Phoenix stands as a symbol of resilience. His past hardship no longer defines him. He is ready for a peaceful home filled with safety and warmth."
},


cookie:{
title:"Cookie’s Rescue Story",
image:"images/Cookie6.jfif",
rescue:"Cookie was found limping after being struck by a bicycle in a park.",
medical:"She required treatment for a fractured paw and careful stabilization.",
recovery:"With rest and physical therapy, Cookie slowly regained full movement.",
adoption:"Cookie is now fully healed and ready for a caring home.",
story:"Cookie was discovered in a quiet corner of the park, unable to put weight on her front paw. The injury had left her frightened and unsure of her surroundings.\n\nRescuers transported her carefully to ensure no further damage.\n\nX-rays confirmed a fracture that required stabilization and several weeks of restricted activity.\n\nAt first, Cookie was hesitant to move. But with time and gentle encouragement, she began taking small, confident steps.\n\nToday, Cookie walks comfortably and enjoys soft play sessions. She is sweet, gentle, and eager to bond with a family who will cherish her safety."
},

muffin:{
title:"Muffin’s Rescue Story",
image:"images/muu.jfif",
rescue:"Muffin was rescued after being found weak from untreated infection.",
medical:"She received antibiotics, nutritional support, and close medical supervision.",
recovery:"Gradually, her energy and appetite returned.",
adoption:"Muffin is now strong and ready for a loving forever home.",
story:"Muffin was discovered lying quietly near an alley, too weak to stand for long. An untreated infection had drained her strength.\n\nWhen rescuers approached, she barely reacted, conserving what little energy she had left.\n\nAt the clinic, immediate treatment began. Antibiotics and fluids stabilized her condition.\n\nDay by day, Muffin improved. She began eating regularly, lifting her head with curiosity, and eventually standing with confidence.\n\nToday, Muffin is calm, affectionate, and grateful for every gentle touch. She is ready for a home that will prioritize her health and happiness."
},

maple:{
title:"Maple’s Rescue Story",
image:"images/maa.jfif",
rescue:"Maple was found after being injured while trying to escape through a broken gate.",
medical:"She received treatment for a deep leg wound and required careful stitching.",
recovery:"With limited activity and consistent care, Maple healed steadily.",
adoption:"Maple is fully recovered and ready for a patient, loving family.",
story:"Maple had attempted to squeeze through a damaged gate, leaving her with a painful injury on her hind leg. She was found resting nearby, unable to move comfortably.\n\nRescuers gently transported her to safety, minimizing further strain.\n\nThe wound required stitching and several weeks of restricted movement to heal properly.\n\nMaple remained quiet and cooperative throughout her recovery, slowly regaining confidence.\n\nToday, Maple walks without pain and enjoys calm companionship. Her difficult moment is behind her, and a peaceful future awaits."
},


biscuit:{
title:"Biscuit’s Rescue Story",
image:"images/bbb.jfif",
rescue:"Biscuit was found after being hit by a slow-moving motorcycle, leaving him unable to stand.",
medical:"He required treatment for a fractured pelvis and several weeks of strict rest.",
recovery:"Through patient rehabilitation, Biscuit gradually regained mobility and strength.",
adoption:"Biscuit is now healed and ready for a calm, supportive home.",
story:"Biscuit was discovered lying quietly near the roadside, too weak to move. Though conscious, he could not stand without collapsing.\n\nRescuers carefully lifted him onto a stretcher to prevent further injury.\n\nAt the clinic, X-rays revealed a pelvic fracture. Surgery was not required, but recovery demanded complete rest and careful monitoring.\n\nThe first time Biscuit stood on his own again was a milestone. Slowly, short steps turned into steady walks.\n\nToday, Biscuit moves comfortably and enjoys peaceful environments. He is gentle, affectionate, and ready for a family who will always prioritize his safety."
},

peanut:{
title:"Peanut’s Rescue Story",
image:"images/aaaa.jfif",
rescue:"Peanut was rescued after being found with a severe leg sprain from a fall.",
medical:"He received stabilization, anti-inflammatory treatment, and monitored recovery.",
recovery:"With limited movement and therapy, Peanut regained full strength.",
adoption:"Peanut is healthy and ready for a loving forever home.",
story:"Peanut was discovered at the base of a staircase, unable to climb or walk properly. A fall had left his leg painfully swollen.\n\nDespite his discomfort, he remained calm when rescuers approached, as if hoping for help.\n\nVeterinary examination confirmed a serious sprain requiring rest and medication.\n\nFor weeks, Peanut’s activity was restricted. Slowly, the swelling decreased and strength returned.\n\nToday, Peanut runs confidently and plays without hesitation. His small size hides a brave and resilient spirit ready for a family’s love."
},

oliver:{
title:"Oliver’s Rescue Story",
image:"images/vvvv.jfif",
rescue:"Oliver was found hiding with a deep scratch across his shoulder from a territorial fight.",
medical:"The wound was cleaned, stitched, and treated to prevent infection.",
recovery:"With antibiotics and quiet rest, Oliver healed steadily.",
adoption:"Oliver is now fully recovered and ready for a peaceful home.",
story:"Oliver had likely been defending himself when he was injured. He was discovered beneath a porch, wary and in visible discomfort.\n\nRescuers approached slowly, giving him space until he allowed them closer.\n\nThe injury required stitching and careful daily cleaning to ensure proper healing.\n\nDuring recovery, Oliver remained cautious but observant. Gradually, he began accepting gentle affection.\n\nToday, Oliver is calm, affectionate, and thrives in quiet surroundings. His difficult encounter is behind him, and he now seeks safety and stability."
},

simba:{
title:"Simba’s Rescue Story",
image:"images/SI0.jfif",
rescue:"Simba was rescued after being trapped in a storage shed for several days without food.",
medical:"He received treatment for dehydration and nutritional deficiency.",
recovery:"Gradual feeding and monitored care restored his strength.",
adoption:"Simba is now strong and ready for a loving home.",
story:"Simba was discovered weak and disoriented inside a locked shed. Without access to food or water, his strength had nearly faded.\n\nWhen rescuers opened the door, he did not attempt to flee. He simply waited.\n\nEmergency fluids and careful refeeding stabilized him. The first days were focused entirely on restoring his energy.\n\nSlowly, Simba’s posture straightened and his eyes brightened.\n\nToday, Simba is confident, affectionate, and enjoys warm resting spots. He is ready to belong to a family who will never leave him behind."
},

charlie:{
title:"Charlie’s Rescue Story",
image:"images/h1.jfif",
rescue:"Charlie was found after suffering a minor head injury from a fall.",
medical:"He was monitored closely to ensure no lasting neurological damage.",
recovery:"Rest and observation allowed Charlie to regain full alertness and coordination.",
adoption:"Charlie is now healthy and ready for a caring forever family.",
story:"Charlie was discovered disoriented near a staircase, likely after slipping and falling. Though the injury was not severe, immediate evaluation was necessary.\n\nVeterinarians monitored him closely over several days, ensuring his reflexes and coordination returned fully.\n\nAt first, Charlie was quiet and cautious. Gradually, his playful curiosity resurfaced.\n\nSoon he began exploring again, moving confidently without imbalance.\n\nToday, Charlie is bright-eyed and energetic. His brief setback only revealed his resilience. He is ready to start a safe and joyful new chapter."
},

cleo:{
title:"Cleo’s Rescue Story",
image:"images/cleo.jfif",
rescue:"Cleo was found under a parked car during a heavy rainstorm, unable to put weight on her front paw.",
medical:"Veterinarians diagnosed a fractured paw and mild hypothermia. She received stabilization, pain management, and a cast.",
recovery:"With weeks of monitored rest and gradual mobility exercises, Cleo slowly regained strength and balance.",
adoption:"Cleo is now fully healed and ready for a warm, indoor home filled with patience and love.",
story:"Cleo was discovered on a cold evening, curled tightly beneath a car as rain poured onto the pavement. She was shivering and flinched whenever she tried to move her front paw.\n\nRescuers gently wrapped her in a blanket before transporting her to the clinic. X-rays confirmed a small fracture that required casting and strict rest.\n\nThe first days were quiet. Cleo barely moved, conserving her strength while her body began healing. Gradually, her appetite returned, and she began observing her surroundings with cautious curiosity.\n\nAs weeks passed, supervised exercises helped her regain mobility. The first time she stepped confidently without hesitation marked a turning point in her recovery.\n\nToday, Cleo walks gracefully, enjoys soft beds near sunny windows, and responds warmly to gentle affection. Her resilience turned a stormy night into the beginning of a safer, brighter life."
},

willow:{
title:"Willow’s Rescue Story",
image:"images/willow.jfif",
rescue:"Willow was rescued from an abandoned building after being trapped inside for days without access to food.",
medical:"She was treated for dehydration, mild malnutrition, and minor paw abrasions.",
recovery:"Careful feeding schedules and quiet care helped her regain strength and confidence.",
adoption:"Willow is now healthy and looking for a peaceful forever home.",
story:"Willow was found hiding in the corner of an empty building scheduled for demolition. Thin and exhausted, she had survived alone for days.\n\nWhen rescuers approached, she did not run. Instead, she watched silently, as if weighing whether it was safe to trust.\n\nAt the clinic, fluids and a carefully monitored feeding plan were started immediately. Her body needed time to adjust safely.\n\nDuring recovery, Willow preferred quiet spaces. She would sit near her caregivers, slowly accepting gentle strokes and soft voices.\n\nAs her strength returned, so did her curiosity. She began exploring her space, climbing carefully and watching birds through the window.\n\nToday, Willow is calm, observant, and deeply affectionate once she feels secure. She seeks a home where patience and kindness are constants."
},

toby:{
title:"Toby’s Rescue Story",
image:"images/فoby.jfif",
rescue:"Toby was found limping near a market area after sustaining a deep cut on his hind leg.",
medical:"The wound required stitching, antibiotics, and daily cleaning to prevent infection.",
recovery:"Through consistent treatment and limited activity, Toby healed steadily and regained full mobility.",
adoption:"Toby is now energetic, affectionate, and ready for a caring family.",
story:"Toby appeared near a busy marketplace, clearly injured and struggling to move away from foot traffic. A kind passerby contacted rescue volunteers.\n\nAt the veterinary clinic, his wound was carefully cleaned and stitched. The injury, though serious, had not damaged muscle or bone.\n\nFor several weeks, Toby remained under observation. His activity was restricted to ensure proper healing.\n\nDespite discomfort, he showed remarkable patience. He would gently lean into hands offering reassurance.\n\nGradually, swelling reduced and strength returned to his leg. The stitches were removed, revealing healthy healing beneath.\n\nToday, Toby runs, jumps, and plays without hesitation. He is social, brave, and ready to trade the chaos of the streets for a safe indoor life."
},

henry:{
title:"Henry’s Rescue Story",
image:"images/h88.jfif",
rescue:"Henry was rescued after being discovered with a respiratory infection during cold weather.",
medical:"He received antibiotics, supportive care, and a warm, monitored recovery environment.",
recovery:"Steady treatment restored his breathing and energy over several weeks.",
adoption:"Henry is now healthy and searching for a warm, loving forever home.",
story:"Henry was found coughing softly behind a storage shed during a chilly morning. His breathing was labored, and his small body trembled from the cold.\n\nRescuers acted quickly, bringing him indoors and seeking veterinary care.\n\nTests confirmed a respiratory infection likely worsened by exposure to harsh weather. Medication and warmth became his immediate lifeline.\n\nAt first, Henry slept often, conserving his strength. Gradually, the coughing eased and his appetite improved.\n\nWithin weeks, his playful personality began to emerge. He chased toys cautiously at first, then with growing confidence.\n\nToday, Henry breathes easily, plays energetically, and seeks gentle companionship. He deserves a home where warmth is permanent."
},

sky:{
title:"Sky’s Rescue Story",
image:"images/sky2.jfif",
rescue:"Sky was found grounded after colliding with a window, unable to fly properly.",
medical:"He was treated for wing strain and monitored to ensure no fractures were present.",
recovery:"With rest, nutritional support, and gradual wing movement exercises, Sky regained flight strength.",
adoption:"Sky is now ready for a safe aviary or experienced bird-loving home.",
story:"Sky was discovered sitting quietly near a glass building, disoriented after flying into a window. He attempted to flutter but could not lift himself properly.\n\nRescuers carefully placed him in a ventilated enclosure to minimize stress and transported him for evaluation.\n\nFortunately, there were no fractures—only a strained wing that required rest and limited movement.\n\nDuring recovery, Sky remained alert but calm. Gentle monitoring ensured he regained balance and coordination.\n\nThe first successful short flight inside a safe enclosure marked a major milestone.\n\nToday, Sky flies confidently once more. His feathers shine brightly, and his alert gaze reflects renewed strength. He is ready for a secure environment where he can thrive safely."
},

rio:{
title:"Rio’s Rescue Story",
image:"images/rrr.jfif",
rescue:"Rio was found grounded in a public park after a strong storm left him with an injured wing.",
medical:"He was treated for a partial wing ligament strain and mild exhaustion.",
recovery:"With rest, nutritional support, and gradual flight therapy, Rio slowly regained his strength.",
adoption:"Rio is now strong and ready for a secure aviary or experienced bird-loving home.",
story:"After a night of intense winds and heavy rain, Rio was discovered beneath a tree in a public park. He attempted to flutter away but could not lift himself more than a few inches off the ground.\n\nRescuers carefully secured him in a ventilated carrier to reduce stress. Veterinary examination confirmed a strained wing ligament—painful but treatable without surgery.\n\nFor the first week, Rio remained quiet, conserving energy while receiving supportive nutrition and anti-inflammatory care.\n\nGradually, supervised wing movements were introduced to rebuild strength safely.\n\nThe first time Rio managed a steady glide across a recovery enclosure marked a turning point. Day by day, his coordination improved.\n\nToday, Rio flies confidently once more. His feathers shine brightly, and his alert posture reflects renewed vitality. The storm that once grounded him is now only a distant memory."
},

snowball:{   
title:"Snowball’s Rescue Story",  
image:"images/snowball.jfif",  
rescue:"Snowball was found wandering inside a building hallway after escaping or being released.",  
medical:"She showed signs of stress and mild weight loss but no serious injuries.",  
recovery:"Given a quiet space and proper care, Snowball gradually became calm and comfortable.",  
adoption:"Gentle and peaceful, looking for a safe and quiet home.",  
story:
`Snowball was spotted moving cautiously along the hallway walls, searching for a place to hide. 
When she was safely picked up, she trembled but did not resist. 
At first, she stayed hidden, unsure of her surroundings. 
With time, soft bedding, and consistent care, she began to explore again. 
Now, Snowball is calm, observant, and enjoys building cozy nests, ready for a home where she can feel secure.`
},

nibbles:{   
title:"Nibbles’ Rescue Story",  
image:"images/nibbles.jfif",  
rescue:"Nibbles was found abandoned in a small cardboard box near a park bench.",  
medical:"He was dehydrated and weak, requiring careful feeding and monitoring.",  
recovery:"With warmth and proper nutrition, Nibbles slowly regained his energy.",  
adoption:"Now active and curious, ready for a caring and attentive home.",  
story:
`Nibbles was discovered quietly sitting inside a worn box, too weak to move much. 
He didn’t try to escape when help arrived, only blinking slowly as he was picked up. 
With gentle care, fresh food, and a safe enclosure, he began to recover. 
Day by day, his energy returned, and his curious nature appeared. 
Today, Nibbles enjoys exploring tunnels and storing tiny treats, ready to share his life with a loving family.`
},

snow:{
title:"Snow’s Rescue Story",
image:"images/snow.jfif",
rescue:"Snow was found abandoned in a small box, suffering from dehydration and fur loss due to poor care.",
medical:"She received fluid therapy, skin treatment, and a specialized diet to restore health.",
recovery:"With gentle handling and consistent care, Snow’s fur regrew and her energy returned.",
adoption:"Snow is now thriving and ready for a calm indoor home.",
story:"Snow was discovered inside a cardboard box left near a residential area. Weak and dehydrated, she barely reacted when rescued.\n\nAt the clinic, immediate fluids and nutritional support were provided. Her patchy fur indicated prolonged stress and inadequate care.\n\nDaily gentle grooming and prescribed skin treatment gradually improved her condition.\n\nSnow initially remained timid, preferring to hide in soft bedding.\n\nAs her body recovered, her personality began to emerge. She explored cautiously, nibbling fresh greens and responding to soft voices.\n\nWithin weeks, her white coat grew back thick and clean.\n\nToday, Snow hops confidently and enjoys quiet companionship. She is ready for a stable, loving home that understands her gentle nature."
},

shell:{
title:"Shell’s Rescue Story",
image:"images/shell.jfif",
rescue:"Shell was rescued after being found with cracks in her shell due to improper habitat conditions.",
medical:"She underwent shell repair treatment and received calcium supplementation and habitat correction.",
recovery:"Over several months, careful monitoring allowed the shell to strengthen and heal.",
adoption:"Shell is now stable and ready for an experienced reptile-friendly home.",
story:"Shell had been kept in unsuitable conditions, leading to shell weakness and visible cracks. She was surrendered for emergency care when her condition worsened.\n\nVeterinarians cleaned and stabilized the damaged areas, applying protective treatments to prevent infection.\n\nNutritional adjustments and proper UV lighting were introduced to support natural shell repair.\n\nRecovery for turtles requires patience. Progress was gradual but steady.\n\nAs weeks turned into months, the shell hardened and regained structural integrity.\n\nShell became more active, basking comfortably and exploring her enclosure.\n\nToday, Shell’s condition is stable, and her shell shows strong healing. With proper long-term care, she is expected to thrive for many years ahead."
},


milo:{
title:"Milo’s Rescue Story",
image:"images/milo.jfif",
rescue:"Milo was found hiding behind a restaurant dumpster with a severe eye infection and visible weight loss.",
medical:"He received antibiotic treatment, eye medication, and a carefully monitored nutritional plan.",
recovery:"Over several weeks, Milo regained strength, and his eye healed significantly with proper care.",
adoption:"Milo is now healthy, affectionate, and ready for a safe indoor home.",
story:"Milo had been surviving behind a busy restaurant, searching for scraps while avoiding loud noises and traffic. When volunteers noticed his swollen eye and thin frame, they knew immediate help was needed.\n\nAt first, Milo kept his distance, uncertain of human intentions. But hunger and exhaustion had weakened his resistance.\n\nAt the clinic, veterinarians diagnosed a serious eye infection that required daily medication. Malnutrition had also slowed his immune response.\n\nThe first few days were focused on stabilizing him. Warm bedding, quiet surroundings, and gentle handling allowed him to relax for the first time in months.\n\nGradually, the swelling in his eye reduced. His fur regained shine as proper nutrition took effect.\n\nWith healing came trust. Milo began seeking gentle head scratches and soft conversation.\n\nToday, Milo sees clearly, eats well, and enjoys lounging in sunny spots. His cautious street survival days are behind him, replaced by comfort and safety."
},

rocky:{
title:"Rocky’s Rescue Story",
image:"images/roc.jfif",
rescue:"Rocky was rescued after being found limping along a roadside with a fractured hind leg.",
medical:"He underwent surgery to repair the fracture, followed by pain management and supervised rehabilitation.",
recovery:"Months of physical therapy and careful monitoring restored Rocky’s mobility and strength.",
adoption:"Rocky is now fully recovered and ready for an active, loving family.",
story:"Rocky was spotted near a highway shoulder, struggling to move away from passing vehicles. Each step caused visible discomfort.\n\nRescue volunteers carefully secured him and transported him for emergency evaluation.\n\nX-rays confirmed a clean fracture in his hind leg. Surgery was required to stabilize the bone using internal support.\n\nThe recovery process demanded patience. Strict crate rest was followed by gradual physical therapy sessions.\n\nAt first, Rocky was hesitant to place weight on his leg. Encouragement, gentle exercises, and consistent reassurance slowly rebuilt his confidence.\n\nWeek by week, his stride became steadier. Soon he could walk without visible discomfort.\n\nToday, Rocky runs, plays, and greets people with enthusiasm. His scar has healed, and his strength reflects the dedication invested in his recovery."
},

chaz:{
title:"Chaz’s Rescue Story",
image:"images/chaz.jfif",
rescue:"Chaz was found trapped inside a storage container for several days without access to food or water.",
medical:"He was treated for dehydration, stress-related weakness, and minor paw injuries.",
recovery:"Careful rehydration and supportive care restored his energy and stability.",
adoption:"Chaz is now healthy and looking for a quiet, patient forever home.",
story:"Chaz had accidentally been locked inside a storage container, where he remained unnoticed for days. When finally discovered, he was weak but alert.\n\nRescuers acted immediately, providing hydration while transporting him safely.\n\nAt the clinic, veterinarians monitored his electrolyte levels and began controlled refeeding to avoid complications.\n\nInitially, Chaz remained withdrawn, adjusting slowly to new surroundings.\n\nAs strength returned, so did his natural curiosity. He began exploring his enclosure and interacting gently with caregivers.\n\nWithin weeks, his posture improved and his coat regained softness.\n\nToday, Chaz is calm, observant, and affectionate once comfortable. He seeks stability and a peaceful indoor life."
},

tundra:{
title:"Tundra’s Rescue Story",
image:"images/tt.jfif",
rescue:"Tundra was rescued during extreme cold weather after suffering from frostbite on his ears.",
medical:"He received wound care, antibiotics, and warming treatment to prevent further tissue damage.",
recovery:"With careful monitoring and gradual rewarming, Tundra healed steadily over several weeks.",
adoption:"Tundra is now healthy and ready for a secure, climate-safe home.",
story:"Tundra was discovered during a freezing night, curled tightly beside a building in an attempt to shield himself from the wind. His ears showed signs of frostbite.\n\nRescuers wrapped him immediately and transported him to warmth.\n\nVeterinary teams treated the affected areas and monitored for complications. Fortunately, the damage was manageable without surgical intervention.\n\nThe first days required strict indoor warmth and medication.\n\nAs circulation improved, Tundra’s energy gradually returned.\n\nHe began wagging his tail at caregivers, responding positively to gentle affection.\n\nToday, Tundra’s ears have healed well, and he thrives in warm environments. He enjoys soft bedding and steady companionship—comfort he once lacked."
},

angel:{
title:"Angel’s Rescue Story",
image:"images/angel11.jfif",
rescue:"Angel was found grounded after escaping from an improper enclosure, showing signs of wing fatigue and malnutrition.",
medical:"She received nutritional rehabilitation and monitored wing strengthening therapy.",
recovery:"With improved diet and controlled exercise, Angel regained flight ability and vitality.",
adoption:"Angel is now thriving and ready for an experienced, attentive bird-loving home.",
story:"Angel was discovered perched low on a fence, too weak to fly higher. Her feathers appeared dull, and she lacked the energy typical of healthy birds.\n\nRescuers gently secured her and arranged immediate veterinary evaluation.\n\nExamination revealed nutritional deficiency that had weakened her flight muscles.\n\nA specialized feeding plan was introduced alongside gradual wing-strengthening exercises.\n\nAt first, her flights were short and unstable.\n\nWith time, stamina improved. Her feathers regained shine, and her posture became upright and confident.\n\nThe day she completed a full enclosure flight without difficulty marked her complete recovery.\n\nToday, Angel chirps brightly and moves with graceful precision. She is ready for a secure environment where proper care ensures lifelong wellbeing."
},


butterscotch:{   
title:"Butterscotch’s Rescue Story",  
image:"images/butte.jfif",  
rescue:"Butterscotch was surrendered after being kept in an overcrowded enclosure.",  
medical:"He had minor fur loss and required a better diet and clean environment.",  
recovery:"With proper care and space, his health and coat improved significantly.",  
adoption:"Playful and energetic, ready for a spacious and loving home.",  
story:
`Butterscotch came from a place where he had little room to move or explore. 
He was shy at first, often staying in one corner of his enclosure. 
After receiving proper care, fresh food, and space to roam, he began to change. 
His fur grew back soft and healthy, and his playful side emerged. 
Today, Butterscotch runs happily on his wheel and enjoys exploring, ready to bring joy to a new home.`
},

bunny:{
title:"Bunny’s Rescue Story",
image:"images/bunny.jfif",
rescue:"Bunny was found abandoned in a park, exposed to heat and suffering from dehydration and overgrown teeth.",
medical:"She received fluid therapy, dental trimming, and a structured dietary plan to restore digestive balance.",
recovery:"With gentle handling and consistent care, Bunny regained strength and a healthy appetite.",
adoption:"Bunny is now thriving and ready for a calm indoor home with experienced rabbit care.",
story:"Bunny was discovered sitting motionless near a park bench during a warm afternoon. Her small body showed signs of dehydration, and she appeared unusually thin.\n\nRescuers carefully secured her and transported her to a clinic specializing in small animals.\n\nExamination revealed overgrown teeth, which had made eating painful and reduced her food intake.\n\nAfter safe dental correction and fluid therapy, Bunny was placed on a carefully monitored feeding plan rich in hay and fresh greens.\n\nThe first days were delicate. Rabbits are sensitive animals, and stress can slow recovery.\n\nGradually, Bunny began nibbling more confidently. Her posture became more upright, and her eyes appeared brighter.\n\nWithin weeks, she began exploring her enclosure with gentle hops, responding calmly to soft voices.\n\nToday, Bunny’s coat is smooth, her weight is healthy, and her movements are energetic yet relaxed. She now seeks a quiet home where stability and gentle companionship are guaranteed."
},


tiny:{
title:"Tiny’s Rescue Story",
image:"images/tiny.jfif",
rescue:"Tiny was surrendered after developing shell softening due to improper lighting and calcium deficiency.",
medical:"She received shell support treatment, calcium supplementation, and a corrected habitat setup with proper UV lighting.",
recovery:"Over several months, her shell gradually hardened and strengthened under careful monitoring.",
adoption:"Tiny is now stable and ready for a responsible reptile-experienced home.",
story:"Tiny had been living in a small enclosure without adequate UV lighting or proper dietary balance. Over time, her shell began to soften—a serious condition for turtles.\n\nConcerned caretakers sought professional help once the issue became visible.\n\nVeterinary evaluation confirmed metabolic bone weakness caused by calcium deficiency.\n\nA structured rehabilitation plan was implemented, including dietary correction, calcium supplementation, and installation of appropriate UVB lighting.\n\nProgress in turtles requires patience. Unlike other animals, healing can take months rather than weeks.\n\nGradually, Tiny’s shell began regaining firmness. Regular checkups monitored structural improvement.\n\nAs her strength returned, she became more active—basking confidently and exploring her habitat.\n\nToday, Tiny’s shell shows strong recovery. With proper long-term care and environment maintenance, she is expected to live a long, healthy life. Her journey highlights the importance of correct reptile care and early intervention."
},

};  











const key = Object.keys(data).find(k => k.toLowerCase() === pet);

if (!key) {
  document.getElementById("title").textContent = "Story Not Found";
} else {
  const p = data[key];

  document.getElementById("title").textContent = p.title;
  document.getElementById("petImage").src = p.image;
  document.getElementById("rescue").textContent = p.rescue;
  document.getElementById("medical").textContent = p.medical;
  document.getElementById("recovery").textContent = p.recovery;
  document.getElementById("adoption").textContent = p.adoption;
  document.getElementById("story").textContent = p.story;
}


function requireLogin() {
    let loggedIn = localStorage.getItem("loggedIn");

    if (String(loggedIn).toLowerCase() === "true") {
        const params = new URLSearchParams(window.location.search);
        const petName = params.get("pet");

        if (!petName) return;

        let savedPets = JSON.parse(localStorage.getItem("savedPets")) || [];

        if (!savedPets.includes(petName)) {
            savedPets.push(petName);
            localStorage.setItem("savedPets", JSON.stringify(savedPets));
            alert("✅ " + petName + " has been saved to your profile!");
        } else {
            alert("⚠️ This pet is already in your saved list.");
        }

    } else {
        const modal = document.getElementById("loginModal");
        modal.style.display = "flex";
    }
}


function handleShare() {
    let loggedIn = localStorage.getItem("loggedIn");
    if (String(loggedIn).toLowerCase() === "true") {
        if (navigator.share) {
            navigator.share({
                title: document.getElementById("title").textContent,
                url: window.location.href
            }).catch(console.error);
        } else {
            alert("Copy link: " + window.location.href);
        }
    } else {
        document.getElementById("loginModal").style.display = "flex";
    }
}

function handleMessage() {
    let loggedIn = localStorage.getItem("loggedIn");
    if (String(loggedIn).toLowerCase() === "true") {
        const petTitle = document.getElementById("title").textContent;
        const email = "hello@secondchance.com";
        const subject = encodeURIComponent(`Inquiry about ${petTitle}`);
        window.location.href = `mailto:${email}?subject=${subject}`;
    } else {
        document.getElementById("loginModal").style.display = "flex";
    }
}


