import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

import GlobalStyles from '~/components/GlobalStyles'
import { HelmetProvider } from 'react-helmet-async'
import AuthContextProvider from '~/context/AuthContext'

const client = new ApolloClient({
    uri: 'http://localhost:4000',
    cache: new InMemoryCache(),
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <HelmetProvider>
            <ApolloProvider client={client}>
                <AuthContextProvider>
                    <GlobalStyles>
                        <App />
                    </GlobalStyles>
                </AuthContextProvider>
            </ApolloProvider>
        </HelmetProvider>
    </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
