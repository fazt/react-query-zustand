import Card from "./components/Card";
import { useFetchRepositories } from "./hooks/useRepos";
import { useFavoriteReposStore } from "./store/favoriteRepos";

function App() {
  const { data, isLoading } = useFetchRepositories("fazt");
  const favoriteRepos = useFavoriteReposStore(
    (state) => state.favoriteReposIds
  );

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {data.map((repository) => (
        <Card
          repository={repository}
          key={repository.id}
          isFavorite={favoriteRepos.includes(repository.id)}
        />
      ))}
    </div>
  );
}

export default App;
