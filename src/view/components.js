// imprtando vistas
import { viewHome } from './home.js';
import { registerVisitor } from './register.js'
import { existingUser } from './existingUser.js'
import { welcomeUser } from './welcome.js'

const components = {
    home: viewHome,
    registerVisitor: registerVisitor,
    user: existingUser,
    welcome: welcomeUser
}

export { components };