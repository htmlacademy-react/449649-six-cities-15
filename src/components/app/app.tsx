import MainPage from '../../pages/main-page/mainPage';

type AppPageProps = {
  placesCount: number;
}

function App({ placesCount }: AppPageProps): JSX.Element {
  return (
    <MainPage placesCount={placesCount} />
  );
}

export default App;