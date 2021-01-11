import { setBillingAddressRequest } from '../../../api';
import { SET_CART_BILLING_ADDRESS } from './types';

export async function setBillingAddressAction(dispatch, billingAddress) {
  try {
    const cartInfo = await setBillingAddressRequest(billingAddress);

    dispatch({
      type: SET_CART_BILLING_ADDRESS,
      payload: cartInfo,
    });
  } catch (error) {
    // @todo error message needs to be implemented
  }
}