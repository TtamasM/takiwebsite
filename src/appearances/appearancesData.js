// Data for Megjelenéseim (Appearances)
// Organized by the new category structure

import cover2022Okt from "../images/pkhome_images/amiotthonunk/amiotthonunk-2022-oktober-pkhome.hu_.jpg";
import cover2021Feb from "../images/pkhome_images/amiotthonunk/amiotthonunk-2021-februar-pkhome.hu_.jpg";
import cover2021 from "../images/pkhome_images/amiotthonunk/amiotthonunk-2021-februar-pkhome.hu_.jpg";
import cover2019Sep from "../images/pkhome_images/amiotthonunk/amiotthonunk-2019-szeptember-pkhome.hu_.jpg";
import cover2019Apr from "../images/pkhome_images/amiotthonunk/amiotthonunk-2019-aprilis-visegradi-utca-minden-passzol-megjelenes-kep-pkhome.hu_.jpg";

// Szép Lak images
import szeplak2020 from "../images/pkhome_images/szeplak/szeplak-2020-tavasz-pkhome.hu_.jpg";
import szeplak2018Tavasz from "../images/pkhome_images/szeplak/szeplak-2018-tavasz-pkhome.hu_.jpg";
import szeplak2018Osz from "../images/pkhome_images/szeplak/szeplak-2018-osz-szarnyra-kelt-pillango-megjelenes-kep-pkhome.hu_.jpg";
import szeplak2017Tel from "../images/pkhome_images/szeplak/szeplak-2017-tel-pkhome.hu_.jpg";
import szeplak2016Nyar from "../images/pkhome_images/szeplak/szeplak-2016-nyar-pkhome.hu_.jpg";

// Octogon Deco
import octogonDeco from "../images/pkhome_images/octogon_deco/Octogon-Deco-zoldben-telen-nyaron-pkhome.hu_.jpg";

// LOSZ images
import loszPalyazat from "../images/pkhome_images/losz/43-as-palyazat-losz-pkhome.hu_.jpg";
import loszDijnyertes from "../images/pkhome_images/losz/A-dijnyertes-lakas-szuletese-losz-pkhome.hu_.jpg";
import loszFelujitas from "../images/pkhome_images/losz/egy-felujitasi-naplo-losz-pkhome.hu_.jpg";
import loszInterju from "../images/pkhome_images/losz/interju-petyerak-katalinnal-losz-pkhome.hu_.jpg";

// PDFs
import pdf2022Okt from "../images/pk_home_pdfs/mitol-attraktiv-megsem-tolakodo-amiotthonunk-2022-oktober.pdf";
import pdf2021Feb from "../images/pk_home_pdfs/Nemesen-bronzba-hajlo-arannyal-amiotthonunk-2021-februar.pdf";
import pdf2021 from "../images/pk_home_pdfs/Zoldben-telen-nyaron-amiotthonunk-2021-pkhome.hu_.pdf";
import pdf2020Szeplak from "../images/pk_home_pdfs/Ev-lakberendezoi-szeplak-2020-tavasz-pkhome.hu_.pdf";
import pdf2018Tavasz from "../images/pk_home_pdfs/Csepregi-Eva-uj-lakasa-szeplak-2018-tavasz-pkhome.hu_.pdf";
import pdf2018Osz from "../images/pk_home_pdfs/Szarnyra-kelt-pillango-szeplak-2018-osz-pkhome.hu_.pdf";
import pdf2017Tel from "../images/pk_home_pdfs/Feher-es-szurke-keves-rozsaszinnel-szeplak-2017-tel-pkhome.hu_.pdf";
import pdf2016Nyar from "../images/pk_home_pdfs/Tavasz-a-telben-szeplak-2016-nyar-pkhome.hu_.pdf";

// Additional images for new categories
// Note: You'll need to add the actual image file for the Otthon.hu article
import otthonHuImage from "../images/pkhome_images/otthon/Otthon-cimlap-pkhome.hu_.jpg"; // Placeholder - replace with actual image

// Design Szerviz thumbnail
import designSzervizThumbnail from "../images/thumbnails/design_szerviz.jpg";
import fem3CafeThumbnail from "../images/thumbnails/fem3_cafe.png";

// Organized by the new category structure
export const appearancesBySource = {
  "A Mi Otthonunk": [
    {
      id: "amiotthonunk-2022-oktober",
      title: "A Mi Otthonunk – 2022 Október",
      type: "pdf",
      image: cover2022Okt,
      pdf: pdf2022Okt,
      description: "Mitől attraktív, mégsem tolakodó"
    },
    {
      id: "amiotthonunk-2021-februar",
      title: "A Mi Otthonunk – 2021 Február",
      type: "pdf",
      image: cover2021Feb,
      pdf: pdf2021Feb,
      description: "Nemesen bronzba hajló arannyal"
    },
    {
      id: "amiotthonunk-2021",
      title: "A Mi Otthonunk – 2021",
      type: "pdf",
      image: cover2021,
      pdf: pdf2021,
      description: "Zöldben télen-nyáron"
    },
    {
      id: "amiotthonunk-2019-szeptember",
      title: "A Mi Otthonunk – 2019 Szeptember",
      type: "pdf",
      image: cover2019Sep,
      pdf: pdf2016Nyar, // Using available PDF
      description: "Lakberendezési megoldások"
    },
    {
      id: "amiotthonunk-2019-aprilis",
      title: "A Mi Otthonunk – 2019 Április",
      type: "pdf",
      image: cover2019Apr,
      pdf: pdf2016Nyar, // Using available PDF
      description: "Visegrádi utca - minden passzol"
    }
  ],
  "Szép Lak": [
    {
      id: "szeplak-2020-tavasz",
      title: "Szép Lak – 2020 Tavasz",
      type: "pdf",
      image: szeplak2020,
      pdf: pdf2020Szeplak,
      description: "Év lakberendezői"
    },
    {
      id: "szeplak-2018-tavasz",
      title: "Szép Lak – 2018 Tavasz",
      type: "pdf",
      image: szeplak2018Tavasz,
      pdf: pdf2018Tavasz,
      description: "Csepregi Éva új lakása"
    },
    {
      id: "szeplak-2018-osz",
      title: "Szép Lak – 2018 Ősz",
      type: "pdf",
      image: szeplak2018Osz,
      pdf: pdf2018Osz,
      description: "Szárnyra kelt pillangó"
    },
    {
      id: "szeplak-2017-tel",
      title: "Szép Lak – 2017 Tél",
      type: "pdf",
      image: szeplak2017Tel,
      pdf: pdf2017Tel,
      description: "Fehér és szürke kevés rózsaszínnel"
    },
    {
      id: "szeplak-2016-nyar",
      title: "Szép Lak – 2016 Nyár",
      type: "pdf",
      image: szeplak2016Nyar,
      pdf: pdf2016Nyar,
      description: "Tavasz a télben"
    }
  ],
  "Octogon Deco": [
    {
      id: "octogon-deco-zoldben",
      title: "Octogon Deco – Zöldben télen-nyáron",
      type: "pdf",
      image: octogonDeco,
      pdf: pdf2021, // Using related PDF
      description: "Lakberendezési megoldások"
    }
  ],
  "Lakberendezk Országos Szövetsége": [
    {
      id: "losz-palyazat",
      title: "43-as pályázat",
      type: "pdf",
      image: loszPalyazat,
      pdf: pdf2016Nyar, // Using available PDF
      description: "Lakberendezési pályázat"
    },
    {
      id: "losz-dijnyertes",
      title: "A díjnyertes lakás születése",
      type: "pdf",
      image: loszDijnyertes,
      pdf: pdf2016Nyar, // Using available PDF
      description: "Díjnyertes lakás bemutatása"
    },
    {
      id: "losz-felujitas",
      title: "Egy felújítási napló",
      type: "pdf",
      image: loszFelujitas,
      pdf: pdf2016Nyar, // Using available PDF
      description: "Felújítási folyamat dokumentálása"
    },
    {
      id: "losz-interju",
      title: "Interjú Petyerák Katalinnal",
      type: "pdf",
      image: loszInterju,
      pdf: pdf2016Nyar, // Using available PDF
      description: "Szakmai interjú"
    }
  ],
  "Videok": [
    {
      id: "design-szerviz-34",
      title: "Design Szerviz 34: Egy helység éjjel-nappal: a Nappali",
      type: "youtube",
      videoId: "ZICdiRNMHcg",
      thumbnail: designSzervizThumbnail,
      description: "Egy helység éjjel-nappal"
    },
    {
      id: "design-szerviz-35",
      title: "Design Szerviz 35: A tökéletes kanapé",
      type: "youtube",
      videoId: "YW6-pS0bEt4",
      thumbnail: designSzervizThumbnail,
      description: "A tökéletes kanapé"
    },
    {
      id: "design-szerviz-36",
      title: "Design Szerviz 36: Harmónia a nappaliban",
      type: "youtube",
      videoId: "vXaoEzsXYcA",
      thumbnail: designSzervizThumbnail,
      description: "Harmónia a nappaliban"
    },
    {
      id: "design-szerviz-37",
      title: "Design Szerviz 37: Most pedig egy kis matek: számold meg a fényforrásokat a videóban!",
      type: "youtube",
      videoId: "x0zJ3L4avFo",
      thumbnail: designSzervizThumbnail,
      description: "Fényforrások a lakberendezésben"
    }
  ],
  "Fem3 Cafe": [
    {
      id: "fem3-cafe-feng-shui",
      title: "Fem3 Cafe - Feng Shui: a harmonikus otthon titka",
      type: "external",
      link: "https://tv2play.hu/fem3_cafe/feng-shui-a-harmonikus-otthon-titka",
      thumbnail: fem3CafeThumbnail, // External thumbnail for TV2 content
      description: "A harmonikus otthon titka"
    }
  ],
  "Tovabbi Megjelenesek": [
    {
      id: "otthon-hu-uj-elet",
      title: "Otthon.hu - Új élet más színtéren",
      type: "external",
      image: otthonHuImage, // You'll need to add the actual image
      link: "https://www.otthon.hu/stilusos_otthonok/4929_uj_elet_mas_szinteren.html",
      description: "Új élet más színtéren"
    },
    {
      id: "tv-szentendre-muveszvaros",
      title: "TV Szentendre - Művészváros",
      type: "youtube",
      videoId: "vCJCCjyF6e0",
      thumbnail: "https://img.youtube.com/vi/vCJCCjyF6e0/maxresdefault.jpg",
      description: "Művészváros Szentendrén"
    }
  ]
};

// Keep the original export for backward compatibility
export const appearancesData = Object.values(appearancesBySource).flat();

export default appearancesData;


