import hocs from '../common-hocs/index';
import LoginScreen from './login-screen';

const mapState = (state, props) => ({
  ...props.navigation,
  ...state
})

const mapDispatch = {
};

export default hocs({
  redux: {
    mapState,
    mapDispatch
  }
})(LoginScreen);
