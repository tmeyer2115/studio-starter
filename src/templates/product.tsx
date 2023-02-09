import { GetPath, TemplateConfig, TemplateProps } from "@yext/pages";
import GridContainer from "../components/GridContainer";

import HeaderSimple from "../components/HeaderSimple";
import Headline from "../components/Headline";
import HStack from "../components/HStack";
import Item from "../components/Item";
import ItemsGrid from "../components/ItemsGrid";
import Label from "../components/Label";

import PageLayout from "../components/PageLayout";
import Paragraph from "../components/Paragraph";
import ProductImage from "../components/ProductImage";
import ProductTable from "../components/ProductTable";
import Reviews from "../components/Reviews";
import VStack from "../components/VStack";

export const config: TemplateConfig = {
  stream: {
    $id: "skis",
    filter: { entityTypes: ["ce_skis"] },
    localization: { locales: ["en"], primary: false },
    fields: [],
  },
};
export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug
    ? document.slug
    : `${document.locale}/${document.address.region}/${document.address.city}/${
        document.address.line1
      }-${document.id.toString()}`;
};

export default function Product({ document }: TemplateProps) {
  return (
    <>
      <PageLayout backgroundColor="#FFFFFF">
        <HeaderSimple
          backgroundColor="#BAD8FD"
          logo=" https://a.mktgcdn.com/p/R9FjcYjRNA5dAespqgHFLMvu2m18-E5Apnb3KON0oJY/300x300.png"
        />
        <GridContainer>
          <VStack>
            <Headline
              value="Nordica Enforcer 94 Unlimited Skis 2023"
              fontWeight="bold"
              textSize="4xl"
            />
            <HStack>
              <Label value="$799.99" />
              <Reviews averageRating={5} reviewCount={1995} />
            </HStack>
            <Paragraph value="The all new Nordica Enforcer 94 Unlimited Skis are ready to take the touring world by storm. Lightweight, maneuverable, and super efficient on the skin track, they give the classic Enforcer design a gram-conscious makeover that doesnt skimp on downhill performance. Nordicas Carbon Chassis LT brings the heat instead of heavy Titanal, and early rise tip and tail rocker makes them formidable in variable snow while remaining plenty approachable to those looking for a powerful, yet easy to control ski. Whether youre ditching civilization for a Spring tour or just ripping around the sidecountry, the Nordica Enforcer 94 Unlimited Skis deliver the goods." />
          </VStack>
          <ProductImage
            src="https://images.evo.com/imgp/700/217382/882112/clone.jpg"
            alt="Light green backpack with black canvas straps and front zipper pouch."
          />
        </GridContainer>
        <ItemsGrid title="Similar Items">
          <Item
            name="Nordica Enforcer 100 Skis 2023"
            image="https://images.evo.com/imgp/250/224769/902350/nordica-enforcer-100-skis-2023-.jpg"
            price={799.99}
          />
          <Item
            name="Atomic Bent 100 Skis 2023"
            image="https://images.evo.com/imgp/250/219400/896899/atomic-bent-100-skis-2023-.jpg"
            price={599.95}
          />
          <Item
            name="Saloman QST 98 Skis 2023"
            image="https://images.evo.com/imgp/250/197273/812057/salomon-qst-98-skis-2023-.jpg"
            price={599.95}
          />
          <Item
            name="Nordica Enforcer 88 Skis"
            image="https://images.evo.com/imgp/250/224771/910233/nordica-enforcer-88-skis-2023-.jpg"
            price={699.99}
          />
        </ItemsGrid>
        <ProductTable
          title="Product Details"
          rockerType="All Mountain Rocker – Smooth rocker at both tip and tail with camber underfoot provides balanced performance anywhere on the mountain."
          shape="True Tip LT – By trimming the amount of heavy ABS plastic in the tip and extending the lightweight wood core into this area with a taper that further reduces weight, Nordica enhances playfulness and maneuverability of the ski without compromising that unmatchable feeling of powerful and control."
          core="Lite Performance Wood | Poplar / Beech"
          laminates="Carbon Chassis LT – A proprietary blend of carbon materials to reduce weight while maximizing performance."
          sidewalls="ABS Sidewalls"
          bindingCompatibility="We recommend a brake width equal to or at most 15 mm wider than the ski waist width."
        />
      </PageLayout>
    </>
  );
}
