import { GetPath, TemplateConfig, TemplateProps } from "@yext/pages";
import GridContainer from "../components/GridContainer";
import PageLayout from "../components/PageLayout";
import ProductDetails from "../components/ProductDetails";
import ProductImage from "../components/ProductImage";
import ProductTable from "../components/ProductTable";

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
    <PageLayout backgroundColor="bg-white">
      <GridContainer>
        <ProductDetails
          name="Armada Whitewalker 121 Skis 2023"
          price="949.95"
          description="Sammy Cs Whitewalker Skis have quickly gone from experimental offering to freestyle staple, and now they have a big brother. The Armada Whitewalker 121 Skis feature the same pintail, twin tip design as the the originals, but with an even wider waist width for the deepest days. These skis are the ultimate playful powder tool. Theyre nimble, surfy, easy to spin, easy stomp, and ski just about as well backwards as they do forwards. And with a respectably lightweight build, theyre an awesome choice to pair with a hybrid binding for a 50/50 powder ski."
          reviewCount={1995}
          averageRating={5}
        />
        <ProductImage
          src="https://dynl.mktgcdn.com/p/CSFKvh8AjX-j6N8xztp5eNVo75d-4Hc4afbbGzBAeiE/1280x1280"
          alt="Black and gold skis"
        />
      </GridContainer>
      <ProductTable
        title="Product Details"
        rockerType="AR Freestyle Rocker – Rockered tips and tails are combined with positive camber underfoot to allow the ski to charge with ease through unpredictable snow and maintain a solid carve when asked to do so. Turn the whole mountain into your playground."
        flex="Flex (1=Soft, 10=Stiff) – Tip: 8 | Mid: 6 | Tail: 10"
        shape="Pin Tip and Tail"
        core="Caruba Core – Armadas lightest wood species creates the best uphill feel while retaining the power and dampness required for descending in the gnarliest of terrain. This core makes no concessions in its quest to be ultralight."
        sidewalls="AR75 Sidewall – Sidewalls provide improved edge pressure under the boot, while cap constuction in the tip and tail provides smooth turn initiation and less hookiness - 75% sidewall, 25% cap."
        base="Comp Series Base – Sintered UHMW polyethylene with added carbon aids in speed and durability on snow."
        edges="1.7 Lightweight Edge – Light and strong, these heat-treated edges effect the feel of the ski minimally to ensure a snappy, lightweight feel."
        additionalFeatures="Swivel Tech – A 3D beveled base in the tip and tail creates a unique feel in all snow conditions. Less likely to catch in crud, self-centering in deep snow, and uncatchable on takeoffs, Swivel Tech lets you float effortlessly whether sliding forwards, backwards, left, or right."
        bindingCompatibility="We recommend a brake width equal to or at most 15 mm wider than the ski waist width."
      />
    </PageLayout>
  );
}
