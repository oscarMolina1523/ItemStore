import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import React from "react";

interface ProductComponentProps {
  imageUrl: string;
  category: string[];
  title: string;
  onClick: () => void;
}

const ProductComponent: React.FC<ProductComponentProps> = ({
  imageUrl,
  category,
  title,
  onClick
}) => {
  return (
    <div onClick={onClick} className="flex flex-col gap-2 w-full h-full shadow-2xl pb-2">
      <div className="w-full h-[12.5rem]">
        <img
          className="object-cover w-full h-full"
          src={imageUrl}
          alt="post-image"
        />
      </div>
      <div className="inline-flex gap-2 flex-wrap pl-2">
        {category.map((categoria, index) => (
          <Badge
            key={index}
            className="px-2 bg-blue text-surface-neutral"
          >
            {categoria}
          </Badge>
        ))}
      </div>
      <Label className="text-ocean-blue pl-2 dark:text-surface-neutral tracking-wide text-left font-semibold">{title}</Label>
    </div>
  );
}

export default ProductComponent;