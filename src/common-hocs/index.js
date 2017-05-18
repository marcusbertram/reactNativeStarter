import { connect } from 'react-redux';
import { compose } from 'redux';

const id = e => e;

export default({ redux }) => WrappedComponent => {
  const _connect = redux ? connect(redux.mapState, redux.mapDispatch) : id;

  const finalHoc = compose(_connect);

  return finalHoc(WrappedComponent);
};
