import HeroSection, { HeroSectionProps } from "../../components/HeroSection";
import PricingSection from "../../components/PricingSection";

type HomePageProps = HeroSectionProps & { customPropNe: string };

export const HomePageDataOne: HomePageProps = {
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Exclusive Access",
  headline: "Unlimited Transactions with zero fees.",
  description:
    "Get access to our exclusive diamond card that allows you to send unlimited transactions without getting charged any fees.",
  btnLabel: "Get started!",
  imgStart: "",
  img: "images/svg-1.svg",
  alt: "Credit card image.",
  customPropNe: "asd"
};

export const HomePageDataTwo: HomePageProps = {
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "100% SECURE",
  headline: "Stay protected 24/7 anywhere anytime",
  description:
    "We have you covered no matter where you are located. Over 140 locations worldwide to ensure you have access anytime",
  btnLabel: "Learn More",
  imgStart: "",
  img: "images/svg-5.svg",
  alt: "Vault",
  customPropNe: "asd"
};

export const HomePageDataThree: HomePageProps = {
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "EASY SETUP",
  headline: "Super fast and simple onboarding process",
  description:
    "Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go.",
  btnLabel: "Start Now",
  imgStart: "start",
  img: "images/svg-7.svg",
  alt: "Vault",
  customPropNe: "asd"
};

export const HomePageDataFour: HomePageProps = {
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "DATA ANALYTICS",
  headline: "Every transaction is stored on our secure cloud database",
  description: "Never ever have to worry again about saved receipts. We store your data, so you can access it anytime.",
  btnLabel: "Sign Up Now",
  imgStart: "start",
  img: "images/svg-8.svg",
  alt: "Vault",
  customPropNe: "asd"
};

const HomePage = (): JSX.Element => {
  return (
    <>
      <HeroSection {...HomePageDataOne} />
      <HeroSection {...HomePageDataThree} />
      <HeroSection {...HomePageDataTwo} />
      <PricingSection />
      <HeroSection {...HomePageDataFour} />
    </>
  );
};

export default HomePage;
