import CancerScreeningFemale from "../../components/healthpackages/CancerScreeningFemale";
import CancerScreeningMale from "../../components/healthpackages/CancerScreeningMale";
import CardiacProfile from "../../components/healthpackages/CardiacProfile";
import DiabeticPackage from "../../components/healthpackages/DiabeticPackage";
import ExecutiveCardiacProfile from "../../components/healthpackages/ExecutiveCardiacProfile";
import ExecutiveHealthCheckup from "../../components/healthpackages/ExecutiveHealthCheckup";
import HealthScreen from "../../components/healthpackages/HealthScreen";
import MasterHealthCheckup from "../../components/healthpackages/MasterHealthCheckup";
import NutritionPackage from "../../components/healthpackages/NutritionPackage";
import WellWomenPackage from "../../components/healthpackages/WellWomenPackage";
import WholeBodyPackage from "../../components/healthpackages/WholeBodyPackage";

export const packagesData = [
  {
    id: 1,
    code: "001",
    title: "Health Screen",
    price: 1499,
    ftrImg:
      "/konnect/images/health-packages/hp-FeatureImages/diabetes_package.jpg",
    excerpt:
      "Basic Health Check-up Package can help in diagnosing conditions at an early stage and preventing",
    content: <HealthScreen />,
  },
  {
    id: 2,
    code: "002",
    title: "Diabetic Package",
    price: 2499,
    ftrImg:
      "/konnect/images/health-packages/hp-FeatureImages/diabetes_package.jpg",
    excerpt:
      "Basic Health Check-up Package can help in diagnosing conditions at an early stage and preventing",
    content: <DiabeticPackage />,
  },
  {
    id: 3,
    code: "003",
    title: "Konnect Master Health Checkup",
    price: 2999,
    ftrImg:
      "/konnect/images/health-packages/hp-FeatureImages/master_health_checkup.jpg",
    excerpt:
      "A master health check-up includes number of clinical tests utilized to assess the overall health of a person. The master health checkup includes a physical examination ultrasound and laboratory investigations that help evaluate the health of your vital organs and metabolism to identify any early symptoms of diseases to manage individual health better.",
    content: <MasterHealthCheckup />,
  },
  {
    id: 4,
    code: "004",
    title: "Executive Health Checkup",
    price: 5799,
    ftrImg:
      "/konnect/images/health-packages/hp-FeatureImages/executive_health_checkup.jpg",
    excerpt:
      "The aim of Executive Health Checkup is to extend the healthy life expectancy of population, to avoid untimely death and to improve the quality of life for people with a disease or disability by periodically checking all symptoms in the body.",
    content: <ExecutiveHealthCheckup />,
  },
  {
    id: 5,
    code: "005",
    title: "Cardiac Profile",
    price: 2999,
    ftrImg:
      "/konnect/images/health-packages/hp-FeatureImages/cardiac_profile.jpg",
    excerpt:
      "The cardiac profile is a comprehensive panel of tests that is used to check the overall functioning of the heart. By looking at the concentration of fats, certain enzymes, and the composition of urine and blood, it becomes easier for clinicians to evaluate the health of your heart.",
    content: <CardiacProfile />,
  },
  {
    id: 6,
    code: "006",
    title: "Executive Cardiac Profile",
    price: 4999,
    ftrImg:
      "/konnect/images/health-packages/hp-FeatureImages/executive_cardiac_profile.jpg",
    excerpt:
      "This package includes all important tests along with cardiac markers to give an overall idea of present cardiac health status. ",
    content: <ExecutiveCardiacProfile />,
  },
  {
    id: 7,
    code: "007",
    title: "Well Women Package",
    price: 6999,
    ftrImg:
      "/konnect/images/health-packages/hp-FeatureImages/well_women_package.jpg",
    excerpt:
      "This comprehensive package checks the possible causes of major ailments in women including some basic cancer screening tests to give an overall idea about their present health status.",
    content: <WellWomenPackage />,
  },
  {
    id: 8,
    code: "008",
    title: "Nutrition package",
    price: 1999,
    ftrImg:
      "/konnect/images/health-packages/hp-FeatureImages/nutrition_package.jpg",
    excerpt:
      "Deficiency of either Vitamins or Micronutrients in our body can result in long term adverse effects on multiple systems which can be prevented by proper nutrition and supplements. Konnect Nutrition Package covers essential tests to check the status of these Vitamins and Micronutrients in your body.",
    content: <NutritionPackage />,
  },
  {
    id: 9,
    code: "009",
    title: "Whole Body Package",
    price: 9999,
    ftrImg: "/konnect/images/health-packages/hp-FeatureImages/whole_body.jpg",
    excerpt:
      "A full body check-up generally includes assessments of a person's blood pressure, heart rate, breathing rate, temperature, weight, and height. It may also include tests to check cholesterol levels, blood sugar levels, and the presence of any infections.",
    content: <WholeBodyPackage />,
  },
  {
    id: 10,
    code: "010",
    title: "Cancer Screening – Male",
    price: 17999,
    ftrImg:
      "/konnect/images/health-packages/hp-FeatureImages/cancer_screening_male.jpg",
    excerpt:
      "All men should be screened for prostate cancer, colon cancer, and testicular cancer periodically, especially if there is a family history of these or any other cancer type. Screening tests look for cancer before a person has any signs or symptoms.",
    content: <CancerScreeningMale />,
  },
  {
    id: 11,
    code: "011",
    title: "Cancer Screening – Female",
    price: 19999,
    ftrImg:
      "/konnect/images/health-packages/hp-FeatureImages/cancer_screening_female.jpg",
    excerpt:
      "Clinical Breast Examination: Ideally done by a gynaecologist, it needs to be repeated every 2-3 years for women who are in their 30s and annually for women 40 & above. Mammogram: This is low dose x-ray test done to detect small and early stage breast cancers.",
    content: <CancerScreeningFemale />,
  },
];

export const organImages = [
  {
    src: "/konnect/images/organs/Heart.png",
    organ: "/",
    alt: "Heart",
  },
  {
    src: "/konnect/images/organs/Diabetes.png",
    alt: "Diabetes",
  },
  {
    src: "/konnect/images/organs/Allergy.png",
    alt: "Allergy",
  },
  {
    src: "/konnect/images/organs/Kidneys.png",
    alt: "Kidneys",
  },
  {
    src: "/konnect/images/organs/Pregnancy.png",
    alt: "Pregnancy",
  },
  {
    src: "/konnect/images/organs/Lungs.png",
    alt: "Lungs",
  },
  {
    src: "/konnect/images/organs/Fever.png",
    alt: "Fever",
  },
  {
    src: "/konnect/images/organs/Prostate.png",
    alt: "Prostate",
  },
  {
    src: "/konnect/images/organs/Thyroid.png",
    alt: "Thyroid",
  },
];

export const testsData = [
  {
    id: 1,
    category: "Blood",
    title: "HbA1c (Glycated Haemoglobin)",
    price: 2000,
    inv: "INV1663",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
  },
  {
    id: 2,
    category: "Heart",
    title: "IHC ER/PR/HER2nu(BREAST PANEL)",
    price: 4000,
    inv: "INV1441",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
  },
  {
    id: 3,
    category: "Cells",
    title: "HbA1c (Glycated Haemoglobin)",
    price: 2000,
    inv: "INV1663",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
  },
  {
    id: 4,
    category: "Breast",
    title: "IHC ER/PR/HER2nu(Breast panel) + Ki-67",
    price: 5000,
    inv: "INV2408",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
  },
  {
    id: 5,
    category: "Scan",
    title: "10X300 SWAB C/S",
    price: 3000,
    inv: "INV1441",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
  },
  {
    id: 6,
    category: "lung",

    title: "17-Ketosteroids",
    price: 1700,
    inv: "INV3",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
  },
];

export const ytPatExpVids = [
  {
    id: 1,
    vidCode: "O5OmR3qcXVI",
  },
  {
    id: 2,
    vidCode: "hBE14y9zUKI",
  },
  {
    id: 3,
    vidCode: "NdGRpPOwPZk",
  },
  {
    id: 4,
    vidCode: "6Hk_FrWZa9E",
  },
  {
    id: 5,
    vidCode: "UaLYILf7Hs8",
  },
];

export const patientStoryData = [
  {
    id: 1,
    photo: "/konnect/images/patients/patient1.jpg",
    video: "/konnect/images/videos/pe_vid1.mp4",
    name: "NameOne",
    info: "unde Description unde omnis one",
    bg: "/konnect/images/patients/patient1Bg.jpg",
    description:
      "One Sed ut perspiciande omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
  },
  {
    id: 2,
    photo: "/konnect/images/patients/patient2.jpg",
    video: "https://www.youtube.com/watch?v=ZSM3w1v-A_Y",
    name: "NameOneTwo",
    info: "The unde Description unde omnis two ",
    bg: "/konnect/images/patients/patient2Bg.jpg",
    description:
      "Two Sed ut perspptatem accusantium doloremque laudantium, toticiatis unde omnis iste natus error sit voluam rem aperiam",
  },
  {
    id: 3,
    photo: "/konnect/images/patients/patient3.jpg",
    name: "NameOneThree",
    info: "The unde Description unde omnis three ",
    bg: "/konnect/images/patients/patient3Bg.jpg",
    description:
      "Two Sed ut perspiciatis unde or sit voluptatem accusantium doloremque laudantium, totam rem aperiam omnis iste natus err",
  },
  {
    id: 4,
    photo: "/konnect/images/patients/patient4.jpg",
    name: "NameOneThree",
    info: "The unde Description unde omnis four ",
    bg: "/konnect/images/patients/patient4Bg.jpg",

    description:
      "Two Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
  },
  {
    id: 5,
    photo: "/konnect/images/patients/patient5.jpg",
    name: "NameOneThree",
    info: "The unde Description unde omnis five ",
    bg: "/konnect/images/patients/patient5Bg.jpg",
    description:
      "Two Sed ut perspiciatis undum doloremque laudantium, totam rem apee omnis iste natus error sit voluptatem accusantiriam",
  },

  {
    id: 6,
    photo: "/konnect/images/patients/patient6.jpg",
    name: "NameOneThree",
    info: "The unde Description unde omnis six ",
    bg: "/konnect/images/patients/patient6Bg.jpg",
    description:
      "natus error sit voluptatem accusantium doloremque laTwo Sed ut perspiciatis unde omnis iste udantium, totam rem aperiam",
  },
];
