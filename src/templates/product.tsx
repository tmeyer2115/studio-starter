import { GetPath, TemplateConfig, TemplateProps } from "@yext/pages";
import GridContainer from "../components/GridContainer";
import "../index.css";

import HeaderSimple from "../components/HeaderSimple";
import Headline from "../components/Headline";
import HStack from "../components/HStack";
import Item from "../components/Item";
import ItemsGrid from "../components/ItemsGrid";
import Label from "../components/Label";

import CenteredContainer from "../components/CenteredContainer";
import PageLayout from "../components/PageLayout";
import Paragraph from "../components/Paragraph";
import ProductImage from "../components/ProductImage";
import Reviews from "../components/Reviews";
import VStack from "../components/VStack";
import "../index.css";

export const config: TemplateConfig = {
  stream: {
    $id: "skis",
    filter: { entityTypes: ["ce_skis"] },
    localization: { locales: ["en"], primary: false },
    fields: ["name", "c_price", "description", "photoGallery", "slug"],
  },
};
export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug ?? document.id.toString();
};

export default function Product({ document }: TemplateProps) {
  return (
    <>
      <>
        <PageLayout backgroundColor="#FFFFFF">
          <HeaderSimple
            backgroundColor="#BAD8FD"
            logo=" https://a.mktgcdn.com/p/R9FjcYjRNA5dAespqgHFLMvu2m18-E5Apnb3KON0oJY/300x300.png"
          />
          <CenteredContainer>
            <GridContainer>
              <VStack>
                <Headline
                  value={`${document.name}`}
                  fontWeight="bold"
                  textSize="4xl"
                />
                <HStack>
                  <Label value={document.c_price} />
                  <Reviews averageRating={5} reviewCount={1995} />
                </HStack>
                <Paragraph
                  value={`${document.description}`}
                  fontWeight=""
                  textSize=""
                />
              </VStack>
              <ProductImage
                src={document.photoGallery[0].image.url}
                alt="Light green backpack with black canvas straps and front zipper pouch."
              />
            </GridContainer>
            <ItemsGrid title="Similar Items">
              <Item
                name="Atomic Bent 100 Skis 2023"
                image="https://images.evo.com/imgp/250/219400/896899/atomic-bent-100-skis-2023-.jpg"
                price={599.95}
              />
              <Item
                name="Nordica Enforcer 88 Skis"
                image="https://images.evo.com/imgp/250/224771/910233/nordica-enforcer-88-skis-2023-.jpg"
                price={699.99}
              />
              <Item
                name="Saloman QST 98 Skis 2023"
                image="https://images.evo.com/imgp/250/197273/812057/salomon-qst-98-skis-2023-.jpg"
                price={599.95}
              />
              <Item
                name="Nordica Enforcer 100 Skis 2023"
                image="https://images.evo.com/imgp/250/224769/902350/nordica-enforcer-100-skis-2023-.jpg"
                price={799.99}
              />
            </ItemsGrid>
          </CenteredContainer>
        </PageLayout>
      </>
    </>
  );
}
