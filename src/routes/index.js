import { Home, Login, SignUp, AboutPage, Contact, ForgotPassword, ResetPassword, QR_Code, HealthExercises, Profile, Favorites, ChangePassword, BloodDonation, MenuFood, ExerciseDetail, Account, Dashboard, Event, BloodGroup} from '../pages/index';
const router = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/signup', component: SignUp},
    { path: '/forgot-password', component: ForgotPassword},
    { path: '/reset-password', component: ResetPassword},
    { path: '/qr-code', component: QR_Code},
    { path: '/healthExercises', component: HealthExercises},
    { path: '/exerciseDetail', component: ExerciseDetail},
    { path: '/exrcise/:exercisId', component: ExerciseDetail },
    { path: '/profile', component: Profile},
    { path: '/favorites', component: Favorites},
    { path: '/changePassword', component: ChangePassword},
    { path: '/about', component: AboutPage},
    { path: '/contact', component: Contact},
    { path: '/bloodDonation', component: BloodDonation},
    { path: '/menu-food', component: MenuFood},

    { path: '/admin/acount', component: Account},
    { path: '/admin/dashboard', component: Dashboard},
    { path: '/admin/bloodGroup', component: BloodGroup},

    { path: '/admin/event', component: Event},




];

export {router}