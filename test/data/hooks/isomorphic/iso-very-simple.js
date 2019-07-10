import isomorphic from '../../../../src/isomorphic';

import VerySimple from '../components/very-simple';
import VerySimpleContext from '../../context/very-simple-context';
import getData from '../../iso-streams/very-simple';

export default isomorphic({
    name: 'iso-very-simple--hooked',
    component: VerySimple,
    context: VerySimpleContext,
    getData,
});
