'use client'

function Tourslayout({children}: {children: React.ReactNode}) {
  return (
    <div>
      <header className="py-2 w-1/2 bg-slate-500 rounded mb-4">
        <h1 className="text-3xl font-bold text-white">
          Nested Layout
        </h1>
      </header>
      {children}
    </div>
  )
}

export default Tourslayout;