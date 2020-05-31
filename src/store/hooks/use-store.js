import { useContext } from 'react';

import { StoreContext } from '../components';

/**
 * Return a React Context to access mobx store properties and methods.
 * @returns {{
 *  user: {
 *    signed: boolean,
 *    email: string,
 *    sign: () => {},
 *    unsign: () => {},
 *    populate: (data: string) => {}
 *  }
 *}} Root store hook
 */
const useStore = () => useContext(StoreContext) || null;

export default useStore;
