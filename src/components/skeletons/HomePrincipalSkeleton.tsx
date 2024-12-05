import { Skeleton } from "../ui/skeleton";

export function HomePrincipalSkeleton() {
  return (
    <div className="flex flex-row w-[20rem] items-center h-[8rem] gap-1">
      <div className="flex w-3/5">
        <Skeleton className="object-cover h-[8rem] w-full bg-dark-gray" />
      </div>
      <div className="flex flex-col items-center bg-surface-neutral h-[8rem] w-2/5 gap-2">
        <Skeleton className="object-cover bg-dark-gray h-[1.2rem] w-full" />
        <Skeleton className="object-cover bg-dark-gray h-[1.5rem] w-full" />
        <Skeleton className="object-cover bg-dark-gray h-[3rem] w-full" />
      </div>
    </div>
  )
}