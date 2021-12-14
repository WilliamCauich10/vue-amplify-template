/**
 * @copyright       Palace Resorts
 * @description     Mensajes para la sección de login.
 * @author          Roberto Pérez Guzmán
 * @creationDate    18 de Mayo del 2020
 */

export default {
  fallbackLocale: 'es-MX',
  locale: 'es-MX',
  messages: {
    'es-MX': {
      lblTitle: 'Iniciar sesión',
      lblRegister: 'Registrarse',
      lblSubtitle: '¡Bienvenido a Clever Ventas!',
      lblUsername: 'Nombre de usuario',
      lblUsernameTip: 'Introduzca su nombre de usuario',
      lblPassword: 'Contraseña',
      lblPasswordTip: 'Introduzca su contraseña',

      lblPasswordRecovery: '¿Has olvidado tu contraseña? Recupérala',
      lblPasswordRecoveryLink: 'aquí',

      lblRule4User1: 'Se requiere nombre de usuario',
      lblRule4User2:
        'El nombre de usuario debe tener más de 6 caracteres',

      lblRule4Password1:
        'La contraseña debe contener al menos 5 caracteres',
      lblRule4Password2:
        'La contraseña debe contener un carácter en mayúscula',
      lblRule4Password3:
        'La contraseña debe contener un carácter en minúscula',
      lblRule4Password4: 'La contraseña debe contener un número',
      lblRule4Password5:
        'La contraseña debe contener un carácter especial [! @ # $%]',
      lblRule4Password6: 'La contraseña es requerida',

      btnClear: 'Limpiar',
      btnSubmit: 'Iniciar sesión',

      lblInvalidCredentials:
        'Las credenciales ingresadas no son correctas.',

      lblUnknownError:
        'Ocurrió un error al realizar el proceso de inicio de sesión',
    },
    'en-US': {
      title: 'Welcome!',
      subtitle: 'Summit de ventas',
      lblTitle: 'Sign In',
      lblSubtitle: '¡Welcome to Clever Ventas!',
      lblRegister: 'Register',
      lblUsername: 'User name',
      lblUsernameTip: 'Provide your user name',
      lblPassword: 'Password',
      lblPasswordTip: 'Provide you password',

      lblPasswordRecovery: '¿Forgot password? Retrieve it',
      lblPasswordRecoveryLink: 'here',

      lblRule4Password1: 'Password must have 5+ characters',
      lblRule4Password2: 'Password must have one uppercase character',
      lblRule4Password3: 'Password must have one lowercase character',
      lblRule4Password4: 'Password must have one number',
      lblRule4Password5:
        'Password must have one special character [!@#$%]',
      lblRule4Password6: 'Password is required',
      lblRule4User1: 'Username is required',
      lblRule4User2: 'Username must have 6+ characters',

      btnClear: 'Clear',
      btnSubmit: 'Submit',

      lblInvalidCredentials: 'Invalid credentials',

      lblUnknownError: 'There was an error in the login process',
    },
  },
};
