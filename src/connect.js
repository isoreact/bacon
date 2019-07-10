import propTypes from 'prop-types';

import useIsomorphicContext from './use-isomorphic-context';

export default function Connect({
    context,
    isEqual,
    children,
}) {
    const state = useIsomorphicContext(context, isEqual);

    return state ? children(state) : null;
}

/* istanbul ignore next */
if (process.env.NODE_ENV === 'development') {
    Connect.propTypes = {

        /** React context for all instances of this component */
        context: propTypes.object.isRequired,

        /** If provided: Given two consecutive states, a and b, skip state b if isEqual(a, b). */
        isEqual: propTypes.func,

        /** A function that converts isomorphic component state into React elements */
        children: propTypes.func.isRequired,
    };
}
