export default function JobCardSkeleton() {
  return (
    <div className="w-full">
      <div className="border rounded-md p-6 w-full bg-base-100">
        <div className="animate-pulse">
          <div className="flex items-start justify-between gap-3">
            <div className="flex flex-col gap-1 w-full">
              <p className="bg-slate-200 h-2"></p>
              <p className="bg-slate-200 h-1.5"></p>
              <p className="bg-slate-200 h-1"></p>
            </div>

            <div className="flex justify-end gap-2 w-1/2">
              <div className="rounded bg-slate-200 h-16 w-24"></div>
            </div>
          </div>

          <div className="grid grid-cols-3 mt-6 gap-6">
            <div className="mt-2 flex flex-col gap-1">
              <p className="bg-slate-200 h-1.5"></p>
              <p className="bg-slate-200 h-1.5"></p>
            </div>

            <div className="mt-2 flex flex-col gap-1">
              <p className="bg-slate-200 h-1.5"></p>
              <p className="bg-slate-200 h-1.5"></p>
            </div>

            <div className="mt-2 flex flex-col gap-1">
              <p className="bg-slate-200 h-1.5"></p>
              <p className="bg-slate-200 h-1.5"></p>
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-1">
            <p className="bg-slate-200 h-1"></p>
            <p className="bg-slate-200 h-1"></p>
            <p className="bg-slate-200 h-1"></p>
          </div>

          <div className="mt-4 flex gap-2">
            <div className="bg-slate-200 h-6 w-14 rounded-md"></div>
            <div className="bg-slate-200 h-6 w-14 rounded-md"></div>
            <div className="bg-slate-200 h-6 w-14 rounded-md"></div>
            <div className="bg-slate-200 h-6 w-14 rounded-md"></div>
          </div>

          <div className="mt-4 border-t">
            <p className="bg-slate-200 h-1"></p>
          </div>
        </div>
      </div>
    </div>
  );
}
