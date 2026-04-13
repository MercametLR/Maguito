import React, { createContext, useContext, useReducer, ReactNode } from 'react';

// Define the state types
interface Sales {
    // Define sales states
}

interface Inventory {
    // Define inventory states
}

interface Clients {
    // Define client states
}

interface Accounts {
    // Define account states
}

interface AppState {
    sales: Sales;
    inventory: Inventory;
    clients: Clients;
    accounts: Accounts;
}

// Initial state
const initialState: AppState = {
    sales: {},
    inventory: {},
    clients: {},
    accounts: {}
};

// Define action types
type Action = 
    | { type: 'ADD_SALE', payload: any } 
    | { type: 'UPDATE_INVENTORY', payload: any }
    | { type: 'ADD_CLIENT', payload: any }
    | { type: 'ADD_ACCOUNT', payload: any };

// Create context
const AppContext = createContext<{
    state: AppState;
    dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => null });

// Create reducer
const appReducer = (state: AppState, action: Action): AppState => {
    switch (action.type) {
        case 'ADD_SALE':
            return { ...state, sales: {/* updated sales */} };
        case 'UPDATE_INVENTORY':
            return { ...state, inventory: {/* updated inventory */} };
        case 'ADD_CLIENT':
            return { ...state, clients: {/* updated clients */} };
        case 'ADD_ACCOUNT':
            return { ...state, accounts: {/* updated accounts */} };
        default:
            return state;
    }
};

// Provider component
const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialState);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};

// Custom hook to use the AppContext
const useAppContext = () => {
    return useContext(AppContext);
};

export { AppProvider, useAppContext };