import { GetPath, TemplateConfig, TemplateProps } from "@yext/pages";
import Banner from "../components/Banner";

export const config: TemplateConfig = {
  stream: {
    $id: "my-stream-id-1",
    filter: { entityTypes: ["location"] },
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

export default function Location({ document }: TemplateProps) {
  return <Banner />;
}
