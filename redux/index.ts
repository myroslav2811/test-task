import { useMemo } from 'react'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'
import { rootStateType } from '../interfaces/rootState'

let store: any

function initStore(initialState: rootStateType) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunkMiddleware)
    )
}

export const initializeStore = (preloadedState: rootStateType) => {
    let _store = store ?? initStore(preloadedState)

    if (preloadedState && store) {
        _store = initStore({
            ...store.getState(),
            ...preloadedState,
        })
        store = undefined
    }

    if (typeof window === 'undefined') return _store
    if (!store) store = _store

    return _store
}

export function useStore(initialState: rootStateType) {
    const store = useMemo(() => initializeStore(initialState), [initialState])
    return store
}