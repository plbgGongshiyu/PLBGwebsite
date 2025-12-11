export function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-black border-r-transparent"></div>
        <p className="mt-4 text-sm tracking-wider opacity-60" style={{ fontFamily: 'Roboto' }}>
          Loading...
        </p>
      </div>
    </div>
  );
}