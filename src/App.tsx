import { CustomTableBuilder } from './components/CustomTableBuilder';
import { TEST_DATA } from './mock-data';

function App() {
    return (
        <div className='App'>
            <div className='App'>
                <CustomTableBuilder data={TEST_DATA} />
            </div>
        </div>
    );
}

export default App;
