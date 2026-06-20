window.RAW_EXAMS_PENDING.push({
  subject: 'Medical Imaging Internship 3',
  title:   'MRI Practice Exam',
  raw: `All of the following are true about fMRI EXCEPT: >> A)
* fMRI arises from the Blood De-oxygenation Level Dependent effect.
* fMRI is used to measure neuronal activation
* fMRI is a noninvasively technique
* fMRI doesn't use ionizing radiation.
-- BOLD stands for Blood Oxygenation Level Dependent, not De-oxygenation. All other options are correct statements about fMRI.

The suggested parameters in inversion recovery for T1 weighting are: >> A)
* Medium TI 400–800 ms · Short TE 10–20 ms · Long TR 3000 ms+
* Medium TI 500–800 ms · Short TE 10–20 ms · Long TR 3000 ms+
* Medium TI 400–800 ms · Short TE 10–30 ms · Long TR 3000 ms+
* Medium TI 400–800 ms · Short TE 10–20 ms · Long TR 4000 ms+
-- The standard textbook range starts TI at 400 ms (not 500), TE ceiling is 20 ms (not 30), and TR is 3000 ms+ (not specifically 4000+). Option A is the only one with all three values correct.

One of the patient preparations for MRA is: >> A)
* NPO for 4-6 hours
* NPO for 2 days
* NPO for 24 hours
* Give gastro oil 80 ml on night
* None of the above
-- Standard MRA preparation across clinical protocols requires fasting for 4–6 hours before the scan. 2 days and 24 hours are excessive and incorrect. Gastro oil has no role in MRA preparation.

Inversion recovery is conventionally used to produce heavily T2-weighted images to demonstrate pathology. :: F
-- Conventional IR was developed and historically used for T1-weighted imaging. T2-weighted IR variants like FLAIR are specific modifications, not the conventional application of the sequence.

To achieve a T2-weighted image in the spin echo pulse sequence: >> A)
* Both TR and TE must be long
* TR must be short and TE must be long
* Both TR and TE must be short
* TR must be long and TE must be short
-- Long TR (>2000 ms) eliminates T1 contrast by allowing full longitudinal recovery. Long TE (>80 ms) allows T2 differences between tissues to develop as image contrast. Both must be long simultaneously.

To increase image contrast in a GRE image: >> A)
* T1 W, use large flip angle
* PD W, use small FA, long TR and TE
* T2 W, use long TR and TE
* T1 W, use long TE
* T2 W, use large FA
-- In GRE, a large flip angle approaching 90° maximises T1 weighting. Using small FA with long TR/TE is wrong because PD requires short TE not long. Long TR and TE is wrong because GRE cannot produce true T2, only T2*. Long TE alone is wrong because it gives T2* not T1. Large FA with T2 labeling is wrong because large FA gives T1 weighting, not T2.

For a sagittal brain MRI slice, the phase encoding gradient should be set in the: >> A)
* Anterior-posterior (Y) direction
* Right-left (X) direction
* Superior-inferior (Z) direction
* Right-left (Y) direction
* None of the above
-- Standard brain sagittal protocol sets the phase encoding direction to anterior-posterior. This prevents ghosting artifacts from eye motion from propagating into the brain tissue along the phase direction.

In TSE: >> A)
* All of the above
* The 180° refocusing RF pulse is applied at a time TE/2 after the 90° RF pulse
* The time difference between each two subsequent 180° RF pulses is TE
* The echo is formed at TE after the 90° RF pulse
* None of the above
-- All three statements are correct. The 180° pulse is applied at TE/2 after the 90° pulse by definition, the interval between successive 180° pulses equals the echo spacing which equals TE, and the echo is formed at TE after the 90° pulse, also by definition.

The Driven Equilibrium technique produces increased signal intensity in fluid-based structures such as CSF when using a shorter TR than normal in TSE. :: T
-- Driven Equilibrium appends a final 90° pulse that flips residual transverse magnetisation back to the longitudinal axis, restoring fluid magnetisation rapidly. This allows a shorter TR to be used without losing the bright CSF/fluid signal.

STIR is an IR pulse sequence that uses a TI corresponding to the time it takes the fat vector to recover from full inversion to the transverse plane, so that there is no longitudinal magnetization corresponding to fat. :: T
-- In STIR, TI ≈ 0.693 × T1(fat) ≈ 150 ms at 1.5T. At this point fat's longitudinal magnetisation crosses zero, meaning the fat vector passes through the transverse plane going from negative to positive. The subsequent 90° pulse then has no fat longitudinal magnetisation to tip, producing no fat signal.

Metal implant artifact is significantly reduced when using TSE because the repeated 180° refocusing pulses compensate for magnetic field inhomogeneity. :: T
-- The repeated 180° refocusing pulses in TSE continuously rephase spins that are dephasing due to local field distortions created by metal implants. This dramatically reduces susceptibility artifacts compared to GRE sequences, which have no refocusing pulse at all.

The highest-SNR sequence among the following is: >> A)
* Conventional Spin Echo (SE)
* Turbo Spin Echo (TSE)
* Gradient Recalled Echo (GRE)
* All of the above
-- Conventional SE acquires a single echo at a fixed TE using a true 180° refocusing pulse, giving maximal and consistent signal. TSE acquires multiple echoes across a range of TEs, causing T2 blurring and reducing effective SNR. GRE lacks a 180° refocusing pulse entirely, decays by T2* instead of T2, and has lower SNR than spin echo sequences.

All of the following are true regarding suppression of fatty tissue EXCEPT: >> A)
* Fat sat technique is better at higher magnetic fields
* STIR suppresses fat signal depending on the T1 value of fat
* Fat sat technique suppresses fat signal depending on the resonant frequency of fat
* Fat suppression with a saturation slab suppresses fat signal depending on the spatial distribution of fat in the body
* All of the above
-- While chemical shift separation between fat and water increases with field strength, CHESS fat saturation becomes less reliable at higher fields (3T) due to increased B1 field inhomogeneity, producing non-uniform fat suppression in practice. This is precisely why STIR is often preferred over fat sat at 3T. The other three statements are all correct.

Which of the following MR protocols produces the smallest gradient-related hazard to the patient while acquiring axial slices? >> A)
* Head MRI
* Chest MRI
* Abdomen MRI
* Pelvis MRI
* B+D
-- Gradient-induced peripheral nerve stimulation is proportional to the induced current in tissue, which depends on the cross-sectional loop area. The head has a much smaller diameter than the chest, abdomen, or pelvis, so it carries the lowest PNS risk. MRI safety literature specifically identifies the abdomen and pelvis as higher-risk regions for PNS from gradient switching.

All are correct regarding brain MRI EXCEPT: >> A)
* Plan the coronal slices on the sagittal plane, angling the block perpendicular to the brain stem
* Head coil is used
* The interpupillary line is parallel to the couch
* Horizontal alignment light passes through the nasion
* For axial slices, the central sagittal plane should be parallel to a line running through the anterior and posterior commissure
-- Standard brain MRI protocol requires coronal slices to be angled parallel to the posterior surface of the brain stem, not perpendicular to it. All other options describe correct practice.

All are correct regarding RF safety EXCEPT: >> A)
* Involuntary muscle contractions
* Best expressed in terms of SAR
* Tattoos may cause some heating issue
* All patients should be advised not to cross their hands
* ECG electrodes and leads can cause burns
-- Involuntary muscle contractions result from rapidly switched gradient magnetic fields causing peripheral nerve stimulation, which is a dB/dt gradient hazard, not an RF hazard. RF safety is specifically about thermal heating quantified by SAR. All other options are genuine RF safety concerns.

Regarding a T2 TSE STIR sagittal C-spine MRI, select the correct answer: >> A)
* CSF: bright; Fat: grey-dark; Spinal cord: grey-dark
* CSF: bright; Fat: bright; Spinal cord: grey-dark
* TR is 3000–4000 ms and TE 100–120 ms
* On the coronal plane, angle the position block perpendicular to the spinal cord
* None of the above
-- In STIR the fat signal is nulled and appears grey-dark. CSF has long T2 and appears bright. The spinal cord, with shorter T2, appears grey-dark. The "fat bright" option is wrong because fat cannot be bright in a STIR sequence; the defining feature being tested is the signal behaviour of the STIR sequence itself.

All are correct regarding proton density contrast applications EXCEPT: >> A)
* Cortical bone
* Edema
* Inflammation
* Cyst
* Infection
-- Proton density contrast depends on the abundance of mobile hydrogen protons in tissue. Cortical bone is predominantly mineral with negligible mobile water content, producing essentially no MRI signal on any sequence. Edema, inflammation, cysts, and infection all involve increased free water, making them ideal PD contrast applications.`
});

window.RAW_EXAMS_PENDING.push({
  subject: 'Medical Imaging Internship 3',
  title:   'CT Practice Exam',
  raw: `One of the following improves image spatial resolution: >> A)
* Large matrix size
* Large pixel size
* Large pitch
* Large focal spot size
* None of the above
-- Pixel size = FOV ÷ matrix size. A larger matrix produces smaller pixels and therefore better spatial resolution. Large pixel size, large pitch, and large focal spot all degrade spatial resolution.

All of the following statements are true regarding the Test Bolus procedure EXCEPT: >> A)
* None of the above
* Obtain scout views
* Using a mechanical injector
* Inject 10-20 ml of contrast
* Determine target region
-- All four steps are correct parts of the test bolus procedure: scout views are obtained, a mechanical power injector is used, 10–20 ml of contrast is injected as the test bolus, and a target region is identified for timing measurements. None of them is false, so the exception is "none of the above."

Thorough patient preparation and education prior to a CT scan will: >> A)
* All of the above
* Reduce repeat radiation exposure
* Reduce patient anxiety
* Ensure best possible images
* a+c
-- Good preparation reduces the need for repeat scans (less radiation), alleviates anxiety and claustrophobia, and ensures full patient cooperation for the best image quality. All three benefits are well established.

Which factor(s) determine the automatic power injector flow rate during a CT exam? >> A)
* All of the above
* IV size and location
* Type of CT exam
* Speed of CT scanner
* a+b
-- IV catheter size and location limit the maximum achievable flow rate. The type of exam dictates the required rate (CTA needs faster injection than routine CT). Scanner speed affects how long peak contrast must be maintained. All three are standard determinants.

Most routine angiography scans are acquired while contrast is in the non-equilibrium phase. :: F
-- The three phases are bolus/arterial, non-equilibrium/venous, and equilibrium. CTA is acquired during the bolus/arterial phase at the moment of peak arterial enhancement. The non-equilibrium phase is the venous phase roughly 1 minute post-injection and is not used for angiography.

Stair-step artefact can be best alleviated by: >> A)
* a + b
* Narrow collimation
* Pitch < 1
* Wide collimation
* All of the above
-- Narrow collimation reduces slice thickness, directly reducing the step size between reconstructed planes. Pitch less than 1 produces overlapping acquisitions, which reduces inter-slice gaps. Wide collimation makes stair-step worse, not better, so "all of the above" is wrong.

The three phases of IV contrast enhancement are: >> A)
* Bolus, Non-Equilibrium, Equilibrium
* Equilibrium, Portal Venous, velocity
* Equilibrium, Portal Venous, Arterial
* Velocity, Bolus, Venous
* Arterial, Venous, Delayed
-- The standard classification is bolus (peak arterial enhancement immediately after injection), non-equilibrium (venous phase around 1 minute post-injection), and equilibrium (contrast distributed into the interstitial space). This is the specific classification used in CT contrast pharmacokinetics teaching.

Compared with traditional angiography, CTA has all of the following advantages EXCEPT: >> A)
* More invasive
* Widely available
* Time saving
* Cheap
* None of the above
-- CTA is actually less invasive than traditional catheter angiography, which requires arterial puncture and catheter placement. Less invasiveness is one of CTA's main advantages, not a drawback. Widely available, time-saving, and cheaper are all genuine CTA advantages.

Head CT is usually scanned using two slice-thickness settings in order to: >> A)
* Decrease beam hardening artifact
* Increase the spatial resolution
* Increase the contrast resolution
* Decrease scan time
* All of the above
-- Thinner slices (e.g. 5 mm) are used in the posterior fossa specifically to reduce beam hardening artifacts from the dense petrous bones, while thicker slices (e.g. 10 mm) are used supratentorially. The primary rationale for two thicknesses is managing beam hardening in the posterior fossa.

Which laboratory test(s) should be performed prior to CT exams that require IV contrast media injection? >> A)
* Blood Urea Nitrogen (BUN) and Creatinine
* Liver enzymes
* Platelet count and Complete Blood Count (CBC)
* Prothrombin Time (PT)
* All of the above
-- Iodinated IV contrast is renally excreted and can cause contrast-induced nephropathy. BUN and creatinine (commonly reported as eGFR) are the mandatory pre-contrast renal function tests. Liver enzymes, CBC, and PT are not routinely required specifically for IV contrast administration in CT.

The radiation dose during helical acquisition depends on the speed of the patient through the scanner, also known as the: >> A)
* Pitch
* Linear interpolation (LI)
* Detection
* Scan time
* Volume coverage
-- Pitch = table feed per rotation ÷ beam collimation width. A higher pitch means the table moves faster, covering more distance per rotation and reducing dose per unit volume. Pitch directly describes the patient's travel speed through the scanner.

Tissue death (necrosis) due to inadequate blood supply, which may be caused by artery blockage, rupture, mechanical compression, or vasoconstriction, is called: >> A)
* Infarction
* Ischemic stroke
* Intracranial bleeding
* Hydrocephalus
* An arteriovenous malformation (AVM)
-- This is the textbook definition of infarction: tissue necrosis resulting from ischaemia. Ischaemic stroke is a specific type of cerebral infarction. Intracranial bleeding, hydrocephalus, and AVM are entirely distinct pathological entities.

A sensation of loss of balance is called: >> A)
* Vertigo
* Dural Sinuses
* Intracranial bleeding
* Infarction
* Ataxia
-- Vertigo is defined as the sensation of movement or loss of balance. Ataxia is a disorder of motor coordination producing unsteady gait and is a physical sign, not a sensation. Dural sinuses, intracranial bleeding, and infarction are anatomical or pathological terms, not symptoms.

All of the following statements are true regarding the Test Bolus procedure EXCEPT: >> A)
* Using a Hand Bolus injector (Mechanical injector)
* Obtain scout views
* Inject 10-20 ml of contrast
* Determine target region
* All of the above
-- A hand bolus injector and a mechanical power injector are not the same thing. The test bolus technique requires a mechanical power injector for the precise, consistent flow rates needed for accurate scan delay timing — a hand injection cannot achieve this.

Reactions which require treatment but are not immediately life-threatening are called: >> A)
* Moderate Reactions
* Mild Reactions
* Severe Reactions
* None of the above
-- Per ACR classification, mild reactions are self-limiting and require only observation, moderate reactions require active medical treatment but are not immediately life-threatening, and severe reactions are life-threatening and always require immediate emergency intervention.

All of the following are true regarding factors related to haemorrhagic stroke EXCEPT: >> A)
* Controlled high blood pressure
* Overtreatment with blood thinners (anticoagulants)
* Aneurysms
* Road traffic accident (RTA)
* Ischemic stroke leading to haemorrhage
-- Uncontrolled hypertension is the single leading risk factor for haemorrhagic stroke; controlled blood pressure is protective, not a risk factor. Anticoagulant overtreatment, aneurysms, trauma from RTA, and haemorrhagic transformation of ischaemic stroke are all genuine risk factors.

Which of the following is NOT typically recommended during a CT soft tissue neck study? >> A)
* Raising arms above the head
* Removal of dentures
* Suspended swallowing
* Suspended breathing
* All of the above
-- For CT of the soft tissue neck, the patient lies supine with arms by the sides. Raising arms above the head is the instruction for chest and abdominal CT, not neck CT. Removing dentures, not swallowing, and breath-holding are all standard and correct instructions for this study.

Which of the following would reduce the viscosity of an IV contrast agent? >> A)
* Warming
* Stirring
* Shaking
* Cooling
* None of the above
-- Warming iodinated contrast to body temperature (37°C) can reduce viscosity by up to 50%, lowering injection pressure and reducing extravasation risk. Cooling increases viscosity; stirring and shaking do not meaningfully alter it.

All are correct regarding CT scans of the abdomen EXCEPT: >> A)
* Conventional barium suspension cannot be used
* Require the administration of an oral CM
* Requires greater attention to patient preparation than any other area of the body
* Patient should not have food at least 5 hours before the CT scan
* None of the above
-- This statement is false. Dilute barium sulfate (2–3% by weight) is a standard, widely used oral contrast agent for CT abdomen. Only the concentrated high-density barium used in fluoroscopy causes streaking artifacts and is unsuitable — saying conventional barium cannot be used at all is incorrect.`
});
