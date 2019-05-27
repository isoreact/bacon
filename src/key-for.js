import sha256 from 'hash.js/lib/hash/sha/256';

/**
 * Generate a <code>hydration</code> key based on an isomorphic component name and the props of one of its instances
 * or nested isomorphic component instances.
 *
 * @param {string} name  - isomorphic component name
 * @param {Object} props - isomorphic component instance props
 * @return {string} the hydration key
 */
export default function keyFor(name, props) {
    return `${
        name
    }--${
        sha256()
            .update(JSON.stringify(Object.entries(props).sort(([a], [b]) => a < b ? -1 : a > b ? 1 : 0))) // eslint-disable-line no-nested-ternary
            .digest('hex')
    }`;
}
