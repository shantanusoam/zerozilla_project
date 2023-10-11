import React from 'react';

function useFetch(url) {
  const [state, dispatch] = React.useReducer(fetchReducer, {
    loading: true,
    data: null,
    error: null,
  });

  React.useEffect(() => {
    let didCancel = false;

    dispatch({ type: 'FETCH_INIT' });

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (!didCancel) {
          // console.log('data', data);
          dispatch({ type: 'FETCH_SUCCESS', payload: data });
        }
      })
      .catch((e) => {
        if (!didCancel) {
          dispatch({ type: 'FETCH_FAILURE', payload: e.message });
        }
      });

    return () => {
      didCancel = true;
    };
  }, [url]);

  return state;
}

function fetchReducer(state, action) {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    case 'FETCH_FAILURE':
      return {
        ...state,
        loading: false,
        data: null,
        error: action.payload,
      };
    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
}

export default useFetch;
