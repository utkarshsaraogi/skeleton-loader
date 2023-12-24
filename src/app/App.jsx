import Header from "./components/Header";
import Home from "./pages/Home";

const App = () => {
    return (
        <div className='layout'>
            <div className='layout__header'>
                <Header title='Skeleton Loader' />
            </div>
            <div className='layout__body'>
                <Home />
            </div>
            <div className='layout__footer'>footer</div>
        </div>
    );
}

export default App;
