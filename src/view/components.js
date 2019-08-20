// imprtando vistas
import { viewHome } from './home.js';
import { registerVisitor } from './register.js'
import { existingUser } from './existingUser.js'
import { welcomeUser } from './welcome.js'
import { Camera} from './camera.js'

const components = {
    home: viewHome,
    registerVisitor: registerVisitor,
    user: existingUser,
    welcome: welcomeUser,
    camera: Camera
}

export { components };