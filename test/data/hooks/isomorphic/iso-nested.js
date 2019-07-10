import isomorphic from '../../../../src/isomorphic';

import Nested from '../components/nested';
import NestedContext from '../../context/nested-context';
import getData from '../../iso-streams/nested';

export default isomorphic({
    name: 'iso-nested--hooked',
    component: Nested,
    context: NestedContext,
    getData,
});
