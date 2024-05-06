import { CustomTableBuilder } from './components/CustomTableBuilder';
import { TEST_DATA } from './mock-data';

function App() {
    return (
        <div className='App'>
            <div className='App'>
                <CustomTableBuilder
                    showCaptionByDefault={true}
                    data={TEST_DATA}
                    caption='Tennis Racket Properties'
                />
            </div>
        </div>
    );
}

export default App;
