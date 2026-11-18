import ContributionCell from "./ContributionCell";

function App() {
  return (
    <main className="center min-h-screen text-white">
      <div className="grid grid-cols-6">
        {Array.from({ length: 30 }, (_, index) => (
          <ContributionCell key={index} />
        ))}
      </div>
    </main>
  );
}

export default App;
