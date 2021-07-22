// core components for Admin layout
// import Work from './component/Work';
import Home from './component/Home';
import Pricing from './component/Pricing';
import Album from './component/Album';
import StickyFooter from './component/StickyFooter';
import Checkout from './component/checkout/Checkout';
import SignUp from './component/auth/SignUp';
import SignIn from './component/auth/SignIn';
import Map from './component/Map';

const routes = [
    // {
    //     path: "/work",
    //     name: "Work",
    //     component: Work,
    //     layout: ""
    // },
    {
        path: "/signup",
        name: "SignUp",
        component: SignUp,
        layout: ""
    },
    {
        path: "/signin",
        name: "SignIn",
        component: SignIn,
        layout: ""
    },
    {
        path: "/home",
        name: "Home",
        component: Home,
        layout: ""
    },
    {
        path: "/pricing",
        name: "Pricing",
        component: Pricing,
        layout: ""
    },
    {
        path: "/album",
        name: "Album",
        component: Album,
        layout: ""
    },
    {
        path: "/stickyfooter",
        name: "StickyFooter",
        component: StickyFooter,
        layout: ""
    },
    {
        path: "/checkout",
        name: "Checkout",
        component: Checkout,
        layout: ""
    },
    {
        path: "/googlemap",
        name: "GoogleMap",
        component: Map,
        layout: ""
    }
]

export default routes;