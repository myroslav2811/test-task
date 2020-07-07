import { Provider } from 'react-redux'
import { useStore } from '../redux'

export default function App({ Component, pageProps }: any) {
    const store = useStore(pageProps.initialReduxState)

    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}