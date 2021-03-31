var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginControl = function (_React$Component) {
  _inherits(LoginControl, _React$Component);

  function LoginControl(props) {
    _classCallCheck(this, LoginControl);

    var _this = _possibleConstructorReturn(this, (LoginControl.__proto__ || Object.getPrototypeOf(LoginControl)).call(this, props));

    _this.handleLoginClick = function () {
      _this.setState({ isLoggedIn: true });
    };

    _this.handleLogoutClick = function () {
      _this.setState({ isLoggedIn: false });
    };

    _this.state = { isLoggedIn: false };
    return _this;
  }

  _createClass(LoginControl, [{
    key: 'render',
    value: function render() {
      var isLoggedIn = this.state.isLoggedIn;

      return React.createElement(
        'div',
        null,
        React.createElement(Greeting, { isLoggedIn: isLoggedIn }),
        ';',
        isLoggedIn ? React.createElement(LogoutButton, { onClick: this.handleLogoutClick }) : React.createElement(LoginButton, { onClick: this.handleLoginClick })
      );
    }
  }]);

  return LoginControl;
}(React.Component);

function UserGreeting(props) {
  return React.createElement(
    'h1',
    null,
    'Witamy ponownie!'
  );
}
function GuestGreeting(props) {
  return React.createElement(
    'h1',
    null,
    'Zarejestruj si\u0119!'
  );
}
function Greeting(props) {
  var isLoggedIn = props.isLoggedIn;
  return isLoggedIn ? React.createElement(UserGreeting, null) : React.createElement(GuestGreeting, null);
}

function LoginButton(props) {
  return React.createElement(
    'button',
    { onClick: props.onClick },
    'Zaloguj'
  );
}
function LogoutButton(props) {
  return React.createElement(
    'button',
    { onClick: props.onClick },
    'Wyloguj'
  );
}

var domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(LoginControl, null), domContainer);