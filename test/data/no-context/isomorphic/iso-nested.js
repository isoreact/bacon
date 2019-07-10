import isomorphic from '../../../../src/isomorphic';

import Nested from '../components/nested';
import getData from '../../iso-streams/nested';

export default isomorphic({
    name: 'iso-nested--no-context',
    component: Nested,
    getData,
});
