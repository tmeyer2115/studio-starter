import * as React from "react";

import { CheckIcon, StarIcon } from "@heroicons/react/20/solid";
import { twMerge } from "tailwind-merge";

export interface ProductDetailsProps {
  name: string;
  c_price: string;
  description: string;
  averageRating?: number;
  reviewCount?: number;
}

export const initialProps: ProductDetailsProps = {
  name: "Name goes here",
  c_price: "100",
  description: "Description goes here",
  averageRating: 5,
  reviewCount: 1995,
};

const ProductDetails = ({
  name,
  c_price,
  description,
  averageRating,
  reviewCount,
}: ProductDetailsProps) => {
  return (
    <div className="lg:max-w-lg lg:self-end">
      <div className="mt-4">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {name}
        </h1>
      </div>

      <section aria-labelledby="information-heading" className="mt-4">
        <h2 id="information-heading" className="sr-only">
          Product information
        </h2>

        <div className="flex items-center">
          <p className="text-lg text-gray-900 sm:text-xl">{`$${c_price}`}</p>

          <div className="ml-4 border-l border-gray-300 pl-4">
            <h2 className="sr-only">Reviews</h2>
            <div className="flex items-center">
              <div>
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={twMerge(
                        rating < (averageRating || 5)
                          ? "text-yellow-400"
                          : "text-gray-300",
                        "h-5 w-5 flex-shrink-0"
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>
              <p className="ml-2 text-sm text-gray-500">
                {reviewCount} reviews
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 space-y-6">
          <p className="text-base text-gray-500">{description}</p>
        </div>

        {/* <div className="mt-6 flex items-center">
                <CheckIcon
                  className="h-5 w-5 flex-shrink-0 text-green-500"
                  aria-hidden="true"
                />
                <p className="ml-2 text-sm text-gray-500">
                  In stock and ready to ship
                </p>
              </div>
              {abilityLevel && (
                <div className="flex items-center">
                  {abilityLevel.c_icon && <Image image={abilityLevel.c_icon} />}
                  <p className="ml-2 text-sm text-gray-500 text-left">
                    {abilityLevel.name}
                  </p>
                </div>
              )}
              {terrain && (
                <div className="flex items-center">
                  {terrain.c_icon && (
                    <Image className="" image={terrain.c_icon} />
                  )}
                  <p className="ml-2 text-sm text-gray-500 text-left">
                    {terrain.name}
                  </p>
                </div>
              )} */}
      </section>
    </div>
  );
};

export default ProductDetails;
