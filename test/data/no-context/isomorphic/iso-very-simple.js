import isomorphic from '../../../../src/isomorphic';

import VerySimple from '../components/very-simple';
import getData from '../../iso-streams/very-simple';

export default isomorphic({
    name: 'iso-very-simple--no-context',
    component: VerySimple,
    getData,
});
