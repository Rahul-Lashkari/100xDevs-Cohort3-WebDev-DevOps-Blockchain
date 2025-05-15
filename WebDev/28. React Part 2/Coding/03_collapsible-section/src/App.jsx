import { useState } from 'react';

const App = () => {
    return (
        <div>
            <Collapsible title="Section 1">
                <p>This is the content of section 1.</p>
            </Collapsible>
            
            <Collapsible title="Section 2">
                <p>This is the content of section 2.</p>
            </Collapsible>
        </div>
    );
};

const Collapsible = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setIsOpen(!isOpen)}>
                {title} {isOpen ? '-' : '+'} 
            </button>
            
            {isOpen && <div>{children}</div>}
        </div>
    );
};

export default App;
