import { refresh } from '../redux/users/operations.js';
import { createAction } from '@reduxjs/toolkit';

export const retryAction = createAction('RETRY_ACTION');

export const authMiddleware = store => next => async action => {
  console.log('Middleware received action:', action);

  if (
    action.type &&
    action.type.endsWith('/rejected') &&
    action.payload?.statusCode === 401
  ) {
    console.log('401 Unauthorized detected:', action);

    try {
      console.log('Attempting to refresh token...');
      const result = await store.dispatch(refresh()).unwrap();
      console.log('Token refreshed successfully:', result);

      if (action.meta && action.meta.arg !== undefined) {
        console.log('Retrying original action with meta:', action.meta);
        store.dispatch(
          retryAction({
            originalAction: action.meta.arg,
            type: action.type.split('/')[0],
          }),
        );
      } else {
        console.error('Action meta or meta.arg is undefined:', action.meta);
      }
    } catch (error) {
      console.error('Failed to refresh token', error);
    }
  } else if (action.type === retryAction.type) {
    const originalAction = action.payload.originalAction;
    const type = action.payload.type;
    console.log(
      'Retrying original action:',
      originalAction,
      'with type:',
      type,
    );
    store.dispatch({ ...originalAction, type: `${type}/pending` });
  }
  return next(action);
};
