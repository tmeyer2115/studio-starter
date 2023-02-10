import "../index.css"
import { GetPath, TemplateConfig, TemplateProps } from "@yext/pages";
import CTASectionCentered from "../components/CTASectionCentered";
import CTASectionWithPhoto from "../components/CTASectionWithPhoto";
import Divider from "../components/Divider";
import Footer from "../components/Footer";
import HeaderSimple from "../components/HeaderSimple";
import Pricing from "../components/Pricing";

export const config: TemplateConfig = {
  stream: {
    $id: "my-stream-id-1",
    filter: { entityTypes: ["location"] },
    localization: { locales: ["en"], primary: false },
    fields: [],
  },
};
export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug ?? document.id.toString();
};

export default function Location({ document }: TemplateProps) {
  return (
    <>
      <>
        <HeaderSimple logo="https://companieslogo.com/img/orig/YEXT_BIG-19bc7630.png?t=1659967381" />
        <CTASectionCentered
          cta2Color=""
          cta2Label="Learn More"
          cta1Color=""
          cta1Label="Buy Now"
          paragraph="This paragraph was handcrafted by Luc Marrie from Rosemarys café on 20th and 1st."
          heading="CTA Section"
        />
        <Pricing
          cta2Color=""
          cta2Label=""
          cta1Color=""
          cta1Label=""
          paragraph=""
          heading=""
        />
        <Divider width="" color="" />
        <CTASectionWithPhoto
          cta1Color=""
          cta1Label="Please Click Me"
          bgImage="https://a.mktgcdn.com/p/ldN8e6Xb-snsRXqH_z1S_6ru4sbu16N2s9V6uod6wV0/1560x878.jpg"
          paragraph="Arrr me hearties! Make traditional Latin walk the plank and opt for pirate lorem ipsum for your next high seas design adventure."
          subheading="CTA Section with Photo"
          heading="Award winning design"
        />
      </>
      <Footer
        paragraph="Making the world a better place by driving conversions."
        logo="https://companieslogo.com/img/orig/YEXT_BIG-19bc7630.png?t=1659967381"
      />
    </>
  );
}
