import * as React from "react";
import { GetPath, TemplateConfig, TemplateProps } from "@yext/pages";
import GridContainer from "../components/GridContainer";
import ProductDetails from "../components/ProductDetails";
import ProductImage from "../components/ProductImage";

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
      <GridContainer>
        <ProductDetails
          name="Name goes here"
          c_price="100"
          description="Description goes here"
          reviewCount={1995}
          averageRating={2}
        />
        <ProductImage
          src="https://dynl.mktgcdn.com/p/CSFKvh8AjX-j6N8xztp5eNVo75d-4Hc4afbbGzBAeiE/1280x1280"
          alt="Black and gold skis"
        />
      </GridContainer>
    </>
  );
}
