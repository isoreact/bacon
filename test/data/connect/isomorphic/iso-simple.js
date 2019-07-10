import isomorphic from '../../../../src/isomorphic';

import SimpleContext from '../../context/simple-context';
import getData from '../../iso-streams/simple';
import Simple from '../components/simple';

export default isomorphic({
    name: 'iso-simple--connected',
    component: Simple,
    context: SimpleContext,
    getData,
});
