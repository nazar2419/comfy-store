import { Button } from "./components/ui/button";
import { useAppSelector } from "./hooks";

function App() {
  const { name } = useAppSelector((state) => state.userState);
  console.log(name);  
  return (
    <>
      <h1 className="text-7xl font-bold">h1</h1>;
      <Button
        variant="destructive"
        size='lg'
        onClick={() => console.log('it worked!!!')}
      >
        Click  me
      </Button>
    </>
  )
}

export default App;
