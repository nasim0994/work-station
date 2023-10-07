export default function CategorySkeleton() {
  return (
    <div>
      <div className="border rounded-md p-6 w-full bg-base-100">
        <div className="animate-pulse">
          <div className="flex gap-3 items-center">
            <div className="rounded-full bg-slate-200 h-8 w-10"></div>
            <div className="w-full h-2 bg-slate-200 rounded"></div>
          </div>

          <div className="grid grid-cols-2 mt-4 gap-10">
            <div className="w-full h-2 bg-slate-200 rounded"></div>
            <div className="w-full h-2 bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
