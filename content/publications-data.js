/* ══════════════════════════════════════════════
   publications-data.js  —  Yun Chen Personal Site
   ══════════════════════════════════════════════
   EDIT THIS FILE to add/update/remove publications and patents.
   No other file needs to change — js/publications.js parses the
   text below and renders it into the "Research & Publications"
   section of index.html automatically.

   (This used to be a separate content/publications.md loaded via
   fetch(), but opening index.html directly in a browser — file://,
   no server — blocks that fetch for security reasons. Keeping the
   exact same editable text format inside a JS template literal
   means the page works identically whether you double-click
   index.html, run a local server, or view it on GitHub Pages.)

   Format for each entry:

     ### [ID] Title
     Authors: ...
     Venue: ...
     Type: paper            (optional; "paper" is default, or "patent")
     Highlight: true        (optional; adds a highlight marker)
     Award: 🏆 Some Award   (optional; shown as a badge)
     Pending: Link pending — ...   (optional; shown as a muted "pending" badge, e.g. for in-progress dissertations or accepted-but-not-yet-published papers)
     Summary: ...           (optional; one-paragraph description)
     Link PDF: https://...
     Link arXiv: https://...
     Link Project Page: https://...
     Link Code: https://...
     Link Video: https://...
     Link Dataset: https://...
     Link Slides: https://...
     Link Poster: https://...
     Link Dissertation: https://...
     Link Full Text: https://...
     Link Patent: https://...

   You can use "Link <Any Label>:" — the label becomes the button text.
   If you don't provide a link for something, no button is shown for it.

   Separate entries with a line containing only: ---
   ══════════════════════════════════════════════ */

const PUBLICATIONS_MD = String.raw`
### [D1] Hybrid Model/Data-Driven Solutions in ISAC — Improving Link Establishment, Channel Estimation, and User Localization in mmWave Vehicular Networks
Authors: Y. Chen
Venue: Ph.D. Dissertation · UC San Diego · Advisor: Prof. Nuria González-Prelcic · 2026
Highlight: true
Pending: Pending Release

---

### [J3] A Hybrid Model/Data-Driven Solution to Channel, Position and Orientation Tracking in mmWave Vehicular Systems
Authors: Y. Chen, N. González-Prelcic, T. Shimizu, C. Mahabal
Venue: IEEE J. Sel. Areas Commun., vol. 44, pp. 927–941 · Mar. 2026
Link IEEE Xplore: https://ieeexplore.ieee.org/document/11174124

---

### [C8] Learning-Based Cross-Frequency Channel Prediction in the Upper Mid-band
Authors: S. Javid, Y. Chen, N. González-Prelcic
Venue: IEEE GLOBECOM 2025 · Dec. 2025
Link IEEE Xplore: https://ieeexplore.ieee.org/document/11432700

---

### [C7] V2X-Enabled Collaborative Orientation Estimation and Position Tracking in mmWave Networks
Authors: Y. Chen, N. González-Prelcic, T. Shimizu, C. Mahabal
Venue: 58th Asilomar Conference on Signals, Systems, and Computers · Pacific Grove, CA · Oct. 2024
Link IEEE Xplore: https://ieeexplore.ieee.org/document/10942730

---

### [C6] DeepSatLoc: A Multimodal Fusion Strategy for Enhanced Localization in Urban Canyons Exploiting GPS and LEO Satellite Communication Signals
Authors: B. Kumar, Y. Chen, N. González-Prelcic, T. Shimizu, A. Ganlath
Venue: 58th Asilomar Conference on Signals, Systems, and Computers · Pacific Grove, CA · Oct. 2024
Link IEEE Xplore: https://ieeexplore.ieee.org/document/10942643

---

### [C5] Beamspace ESPRIT-D for Joint 3D Angle and Delay Estimation for Joint Localization and Communication at mmWave
Authors: Y. Chen, N. González-Prelcic, T. Shimizu, H. Lu, C. Mahabal
Venue: IEEE International Conference on Communications (ICC 2024) · Denver, CO · Jun. 2024
Link IEEE Xplore: https://ieeexplore.ieee.org/document/10623018

---

### [J2] Learning to Localize with Attention: From Sparse mmWave Channel Estimates from a Single BS to High Accuracy 3D Location
Authors: Y. Chen, N. González-Prelcic, T. Shimizu, H. Lu
Venue: IEEE Trans. Wireless Commun. · 2024
Summary: Two-stage MOMP · ESPRIT-D · PathNet · ChanFormer (Transformer) · single-BS 3D localization · 28 cm LOS / sub-meter NLOS accuracy
Link arXiv: https://arxiv.org/abs/2307.00167

---

### [C4] Sparse Recovery with Attention: A Hybrid Data/Model Driven Solution for High Accuracy Position and Channel Tracking at mmWave
Authors: Y. Chen, N. González-Prelcic, T. Shimizu, H. Lu, C. Mahabal
Venue: IEEE SPAWC 2023 · Shanghai, China · Sep. 2023
Highlight: true
Award: 🏆 Best Student Paper Award
Summary: F-MOMP channel tracking · VO-ChAT/VP-ChAT attention networks · V2V sidelink for NLOS · 90th-pct 2D position error &lt; 20 cm
Link IEEE Xplore: https://ieeexplore.ieee.org/document/10304480

---

### [B1] Radar-aided Millimeter Wave Communication
Authors: N. González-Prelcic, A. Ali, Y. Chen
Venue: Signal Processing for Joint Radar Communications, Wiley-IEEE Press · 2023
Link DOI: https://doi.org/10.1002/9781119795568.ch6
Link Publisher: https://onlinelibrary.wiley.com/doi/10.1002/9781119795568.ch6

---

### [J1] Deep Learning-based Link Configuration for Radar-aided Multiuser mmWave Vehicle-to-Infrastructure Communication
Authors: A. Graff, Y. Chen, N. González-Prelcic, T. Shimizu
Venue: IEEE Trans. Veh. Technol. · 2023
Link IEEE Xplore: https://ieeexplore.ieee.org/document/10024760

---

### [C3] Joint Initial Access and Localization in Millimeter Wave Vehicular Networks: A Hybrid Model/Data Driven Approach
Authors: Y. Chen, J. Palacios, N. González-Prelcic, T. Shimizu, H. Lu
Venue: IEEE 12th Sensor Array and Multichannel Signal Processing Workshop (SAM 2022) · Trondheim, Norway · Jun. 2022
Link IEEE Xplore: https://ieeexplore.ieee.org/document/9827854

---

### [S1] What Will the Future of UAV Cellular Communications Be? A Flight from 5G to 6G
Authors: G. Geraci, A. Garcia-Rodriguez, M. Azari, A. Lozano, M. Mezzavilla, S. Chatzinotas, Y. Chen, S. Rangan, M. Renzo
Venue: IEEE Commun. Surveys Tuts., vol. 24, no. 3, pp. 1304–1335 · Q3 2022
Link IEEE Xplore: https://ieeexplore.ieee.org/document/9768113

---

### [C2] Radar Aided mmWave Vehicle-to-Infrastructure Link Configuration Using Deep Learning
Authors: Y. Chen, A. Graff, N. González-Prelcic, T. Shimizu
Venue: IEEE Global Communications Conference (GLOBECOM 2021) · Madrid, Spain · Dec. 2021
Summary: Passive radar-aided V2I link configuration · DNN radar-to-comm covariance mapping · 32× smaller beam search · +21.9% rate
Link IEEE Xplore: https://ieeexplore.ieee.org/document/9685360

---

### [C1·b] 5G Air-to-Ground Network Design and Optimization: A Deep Learning Approach
Authors: Y. Chen, X. Lin, T. Khan, M. Afshang, M. Mozaffari
Venue: IEEE 93rd Vehicular Technology Conference (VTC 2021) · Helsinki, Finland · Apr. 2021
Link IEEE Xplore: https://ieeexplore.ieee.org/document/9448879

---

### [C1·a] A Deep Learning Approach to Efficient Drone Mobility Support
Authors: Y. Chen, X. Lin, T. Khan, M. Mozaffari
Venue: 2nd Workshop on Drone Assisted Wireless Communications for 5G and Beyond, co-located with ACM MobiCom (DroneCom 2020) · London, UK · Sep. 2020
Link ACM: https://dl.acm.org/doi/10.1145/3414045.3415948

---

### [C0·b] Collision-free UAV Navigation with a Monocular Camera Using Deep Reinforcement Learning
Authors: Y. Chen, N. González-Prelcic, R.W. Heath
Venue: IEEE International Workshop on Machine Learning for Signal Processing (MLSP 2020) · Espoo, Finland · Sep. 2020
Summary: Monocular-camera UAV navigation · object detection + deep RL · 25% shorter flight paths, 50% fewer unnecessary turns
Link IEEE Xplore: https://ieeexplore.ieee.org/document/9231577
Link Video: https://www.youtube.com/embed/M79ctCjrBLc

---

### [C0·a] Efficient Drone Mobility Support Using Reinforcement Learning
Authors: Y. Chen, X. Lin, T. Khan, M. Mozaffari
Venue: IEEE WCNC 2020 · Seoul, South Korea · May 2020
Highlight: true
Award: 🏆 Best Paper Award
Link IEEE Xplore: https://ieeexplore.ieee.org/document/9120595

---

### [C·e] Personalized Optimal Bicycle Trip Planning Based on Q-learning Algorithm
Authors: Y. Chen, W. Yan, C. Li, Y. Huang, L. Yang
Venue: IEEE WCNC 2018 · Barcelona, Spain · Apr. 2018
Link IEEE Xplore: https://ieeexplore.ieee.org/document/8377056

---

### [C·f] A Learning-Based Approach for Proactive Caching in Wireless Communication Networks
Authors: Y. Wang, Y. Chen, H. Dai, Y. Huang, L. Yang
Venue: 9th International Conference on Wireless Communications and Signal Processing (WCSP 2017) · Nanjing, China · Oct. 2017
Link IEEE Xplore: https://ieeexplore.ieee.org/document/8170984

---

### [P1] Efficient 3D Mobility Support Using Reinforcement Learning
Authors: X. Lin, Y. Chen, M. Mozaffari, T. Khan
Venue: US20240056933A1 · Feb. 2024
Type: patent
Link Google Patents: https://patents.google.com/patent/US20240056933A1

---

### [P2] Network Design and Optimization Using Deep Learning
Authors: M. Mozaffari, X. Lin, T. Khan, M. Afshang, Y. Chen
Venue: US20230388196A1 · Nov. 2023
Type: patent
Link Google Patents: https://patents.google.com/patent/US20230388196A1
`;
