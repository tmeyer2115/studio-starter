import { TemplateConfig, TemplateProps } from "@yext/pages";
import Banner from "../components/Banner";

export const config: TemplateConfig = {
  stream: {
    $id: "my-stream-id-1",
    filter: { entityTypes: ["location"] },
    localization: { locales: ["en"], primary: false },
    fields: ["name"],
  },
};

export default function Location({ document }: TemplateProps) {
  return (
    <div>
      <Banner name={document.name} />
    </div>
  );
}
