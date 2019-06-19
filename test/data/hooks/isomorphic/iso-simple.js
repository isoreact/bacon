import hydrate from '../../../../src/hydrate';
import isomorphic from '../../../../src/isomorphic';

import Simple from '../components/simple';
import SimpleContext from '../../context/simple-context';
import getData from '../../iso-streams/simple';

const isoSimple = {
    name: 'iso-simple--hooked',
    component: Simple,
    context: SimpleContext,
    getData,
};

export const IsoSimple = isomorphic(isoSimple);

export function hydrateSimple(options) {
    hydrate(IsoSimple, options);
}
