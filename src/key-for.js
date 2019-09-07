import sha256 from 'hash.js/lib/hash/sha/256';

const ignoredValueTypes = new Set(['undefined', 'function', 'symbol']);

/**
 * Generate a <code>hydration</code> key based on an isomorphic component name and the props of one of its instances
 * or nested isomorphic component instances.
 *
 * @param {string} name  - isomorphic component name
 * @param {Object} props - isomorphic component instance props
 * @returns {string} the hydration key
 */
export default function keyFor(name, props) {
    return `${
        name
    }--${
        sha256()
            .update(
                JSON.stringify(
                    props,
                    (key, value) => (
                        // Improve hydration key match probability:
                        // Sort object entries by property name.
                        typeof value === 'object' && value !== null && !Array.isArray(value)
                            ? Object
                                .entries(value)
                                // Improve hydration key match probability:
                                // Filter out entries with unserializable values.
                                .filter(([, value]) => !ignoredValueTypes.has(typeof value))
                                .sort(([a], [b]) => a < b ? -1 : a > b ? 1 : 0)
                            : value
                    )
                )
            )
            .digest('hex')
    }`;
}
