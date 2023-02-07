import * as React from "react";
export interface ProductTableProps {
  title: string;
  rockerType: string;
  flex: string;
  shape: string;
  core: string;
  sidewalls: string;
  base: string;
  edges: string;
  additionalFeatures: string;
  bindingCompatibility: string;
}

export const initialProps: ProductTableProps = {
  title: "Product Details",
  rockerType:
    "AR Freestyle Rocker – Rockered tips and tails are combined with positive camber underfoot to allow the ski to charge with ease through unpredictable snow and maintain a solid carve when asked to do so. Turn the whole mountain into your playground.",
  flex: "Flex (1=Soft, 10=Stiff) – Tip: 8 | Mid: 6 | Tail: 10",
  shape: "Pin Tip and Tail",
  core: "Caruba Core – Armada's lightest wood species creates the best uphill feel while retaining the power and dampness required for descending in the gnarliest of terrain. This core makes no concessions in its quest to be ultralight.",
  sidewalls:
    "AR75 Sidewall – Sidewalls provide improved edge pressure under the boot, while cap constuction in the tip and tail provides smooth turn initiation and less hookiness - 75% sidewall, 25% cap.",
  base: "Comp Series Base – Sintered UHMW polyethylene with added carbon aids in speed and durability on snow.",
  edges:
    "1.7 Lightweight Edge – Light and strong, these heat-treated edges effect the feel of the ski minimally to ensure a snappy, lightweight feel.",
  additionalFeatures:
    "Swivel Tech – A 3D beveled base in the tip and tail creates a unique feel in all snow conditions. Less likely to catch in crud, self-centering in deep snow, and uncatchable on takeoffs, Swivel Tech lets you float effortlessly whether sliding forwards, backwards, left, or right.",
  bindingCompatibility:
    "We recommend a brake width equal to or at most 15 mm wider than the ski waist width.",
};

const ProductTable = ({
  rockerType,
  flex,
  shape,
  core,
  sidewalls,
  base,
  edges,
  additionalFeatures,
  bindingCompatibility,
}: ProductTableProps) => {
  const renderRow = (title: string, value: string) => {
    return (
      // title should be a fixed width so that the value is aligned
      <div className="border-t border-gray-400 py-2">
        <div className="grid grid-cols-4 gap-x-4">
          <dt className="text-sm font-medium text-gray-500">{title}</dt>
          <dd className="col-span-3 text-sm text-gray-900">{value}</dd>
        </div>
      </div>
    );
  };

  return (
    <div className="px-4">
      <h2 className="text-lg font-medium text-gray-900">Product Details</h2>

      <div className="mt-4">
        <div className="gap-x-4 gap-y-8">
          {renderRow("Rocker Type", rockerType)}
          {renderRow("Flex", flex)}
          {renderRow("Shape", shape)}
          {renderRow("Core", core)}
          {renderRow("Sidewalls", sidewalls)}
          {renderRow("Base", base)}
          {renderRow("Edges", edges)}
          {renderRow("Additional Features", additionalFeatures)}
          {renderRow("Binding Compatibility", bindingCompatibility)}
        </div>
      </div>
    </div>
  );
};

export default ProductTable;
