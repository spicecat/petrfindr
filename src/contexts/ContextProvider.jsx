import { GameProvider } from '.';

const ContextProvider = ({ children }) => {
    return (
        <GameProvider>
            {children}
        </GameProvider>
    );
};

export default ContextProvider;