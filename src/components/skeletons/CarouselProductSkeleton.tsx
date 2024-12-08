import { Skeleton } from "../ui/skeleton";

export function CarouselProductSkeleton() {
  return (
    <div className="flex flex-row items-center justify-between w-[15rem] h-[15rem] gap-2">
      <div className="flex flex-col w-full items-center gap-2">
        <Skeleton className="object-cover h-[8rem] w-full bg-black" />
        <Skeleton className="object-cover bg-black h-[1.2rem] w-full" />
        <Skeleton className="object-cover bg-black h-[1.5rem] w-full" />
      </div>
    </div>
  );
}
