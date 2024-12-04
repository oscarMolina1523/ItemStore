import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import { Ellipsis } from "lucide-react";
import React from "react";

interface ProductProfileComponentProps {
    imageUrl: string;
    category: string[];
    title: string;
    onClick: () => void;
    onEditClick: () => void;
    onDeleteClick: () => void;

}

const ProductProfileComponent: React.FC<ProductProfileComponentProps> = ({
    imageUrl,
    category,
    title,
    onClick,
    onEditClick,
    onDeleteClick,
}) => {
    return (
        <div className="flex flex-col gap-2 w-full h-full shadow-2xl pb-2">
            <div className="flex flex-row items-end justify-end w-full">
                {/* <Ellipsis onClick={onActionClick} className="h-6 w-8 text-right" /> */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Ellipsis className="h-6 w-8 text-right" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuGroup>
                            <DropdownMenuItem onClick={onEditClick}>
                                <span>Editar</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={onDeleteClick}>
                                <span>Eliminar</span>
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div onClick={onClick} className="w-full h-[12.5rem]">
                <img
                    className="object-cover w-full h-full"
                    src={imageUrl}
                    alt="post-image"
                />
            </div>
            <div className="inline-flex gap-2 flex-wrap">
                {category.map((categoria, index) => (
                    <Badge
                        key={index}
                        className="px-2 bg-blue text-surface-neutral"
                    >
                        {categoria}
                    </Badge>
                ))}
            </div>
            <Label className="text-ocean-blue dark:text-surface-neutral tracking-wide text-left font-semibold">{title}</Label>
        </div>
    );
}

export default ProductProfileComponent;