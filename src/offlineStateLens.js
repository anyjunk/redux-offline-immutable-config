// @flow

import { Map } from 'immutable';

export default (state: Map<string, any>) => ({
  get: state.get('offline'),
  set: (offlineState: any) => typeof offlineState === 'undefined'
    ? state.delete('offline')
    : state.set('offline', offlineState)
});
