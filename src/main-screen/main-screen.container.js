import hocs from '../common-hocs/index';
import MainScreen from './main-screen';
import {selectIsLoggedIn} from '../login-screen/selectors';

const mapState = (state, props) => ({
  ...props.navigation,
  isLoggedIn: selectIsLoggedIn(state, props)
})

const mapDispatch = {
};

export default hocs({
  redux: {
    mapState,
    mapDispatch
  }
})(LoginScreen);
