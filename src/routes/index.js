import { Home, Login, SignUp, AboutPage, Contact, ForgotPassword, ResetPassword, QR_Code, HealthExercises, Profile} from '../pages/index';
const router = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/signup', component: SignUp},
    { path: '/forgot-password', component: ForgotPassword},
    { path: '/reset-password', component: ResetPassword},
    { path: '/qr-code', component: QR_Code},
    { path: '/healthExercises', component: HealthExercises},
    { path: '/profile', component: Profile},
    { path: '/about', component: AboutPage},
    { path: '/contact', component: Contact}
];

export {router}