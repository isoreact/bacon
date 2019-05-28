export const SSR_TIMEOUT_ERROR = Symbol();

export function noImmediateStateOnServerError(name) {
    return `An unexpected error occurred while server-side rendering '${name || '(unknown)'}'`;
}

export function noImmediateStateOnHydrationError(name, elementId) {
    return (
        `Cannot hydrate isomorphic component "${name}" at DOM node "#${elementId}" because the Observable`
        + ' returned by its getData(props, hydration) function does not produce an event immediately upon subscription.'
        + ' To avoid this error, ensure getData(props, hydration) returns a Bacon.js Property which produces an event'
        + ' immediately when the hydration object is provided.'
    );
}

export function noImmediateStateOnRenderError(name) {
    return (
        `Isomorphic component "${name}" is being rendered client-side, but the Observable returned by its`
        + ' getData(props, hydration) function does not produce an event immediately upon subscription. To avoid this'
        + ' error, ensure getData(props, hydration) returns a Bacon.js Property which produces an event immediately.'
    );
}
