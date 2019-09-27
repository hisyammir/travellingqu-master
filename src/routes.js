import React from 'react';

const Breadcrumbs = React.lazy(() => import('./views/Base/Breadcrumbs'));
const Cards = React.lazy(() => import('./views/Base/Cards'));
const Carousels = React.lazy(() => import('./views/Base/Carousels'));
const Collapses = React.lazy(() => import('./views/Base/Collapses'));
const Dropdowns = React.lazy(() => import('./views/Base/Dropdowns'));
const Forms = React.lazy(() => import('./views/Base/Forms'));
const Jumbotrons = React.lazy(() => import('./views/Base/Jumbotrons'));
const ListGroups = React.lazy(() => import('./views/Base/ListGroups'));
const Navbars = React.lazy(() => import('./views/Base/Navbars'));
const Navs = React.lazy(() => import('./views/Base/Navs'));
const Paginations = React.lazy(() => import('./views/Base/Paginations'));
const Popovers = React.lazy(() => import('./views/Base/Popovers'));
const ProgressBar = React.lazy(() => import('./views/Base/ProgressBar'));
const Switches = React.lazy(() => import('./views/Base/Switches'));
const Tables = React.lazy(() => import('./views/Base/Tables'));

const KelPerjalanan = React.lazy(() => import('./views/Base/Travel/KelPerjalanan'));
const JenPaketPerjalanan = React.lazy(() => import('./views/Base/Travel/JenPaketPerjalanan'));
const MaskapaiPenerbangan = React.lazy(() => import('./views/Base/Travel/MaskapaiPenerbangan'));

const Negara = React.lazy(() => import('./views/Base/Travel/Negara'));
const Propinsi = React.lazy(() => import('./views/Base/Travel/Propinsi'));

  const Kota = React.lazy(() => import('./views/Base/Travel/Kota'));
  
  const KelUserPengguna = React.lazy(() => import('./views/Base/Travel/KelUserPengguna'));
  // const UserPengelola = React.lazy(() => import('./views/Base/Travel/UserPengelola'));
  // const UserPengguna = React.lazy(() => import('./views/Base/Travel/UserPengguna/UserPengguna'));
  const MetodeBayar = React.lazy(() => import('./views/Base/Travel/MetodeBayar'));
  // const Hotel = React.lazy(() => import('./views/Base/Travel/Hotel'));
  const LokasiWisata = React.lazy(() => import('./views/Base/Travel/LokasiWisata'));
  const TripWisataperHari = React.lazy(() => import('./views/Base/Travel/TripWisataperHari'));
  const BookingPaketWisata = React.lazy(() => import('./views/Base/Travel/BookingPaketWisata'));


const Tabs = React.lazy(() => import('./views/Base/Tabs'));
const Tooltips = React.lazy(() => import('./views/Base/Tooltips'));
const BrandButtons = React.lazy(() => import('./views/Buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('./views/Buttons/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./views/Buttons/ButtonGroups'));
const Buttons = React.lazy(() => import('./views/Buttons/Buttons'));
const Charts = React.lazy(() => import('./views/Charts'));
const Dashboard = React.lazy(() => import('./views/Dashboard'));
const CoreUIIcons = React.lazy(() => import('./views/Icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./views/Icons/Flags'));
const FontAwesome = React.lazy(() => import('./views/Icons/FontAwesome'));
const SimpleLineIcons = React.lazy(() => import('./views/Icons/SimpleLineIcons'));
const Alerts = React.lazy(() => import('./views/Notifications/Alerts'));
const Badges = React.lazy(() => import('./views/Notifications/Badges'));
const Modals = React.lazy(() => import('./views/Notifications/Modals'));
const Colors = React.lazy(() => import('./views/Theme/Colors'));
const Typography = React.lazy(() => import('./views/Theme/Typography'));
const Widgets = React.lazy(() => import('./views/Widgets/Widgets'));

//Route Page Kelompok User Pengelola
const KelUserPengelola = React.lazy(() => import('./views/KelUserPengelola/KelUserPengelola'));
const CreateKelUserPengelola = React.lazy(() => import('./views/KelUserPengelola/CreateKelUserPengelola'));
const EditKelUserPengelola = React.lazy(() => import ('./views/KelUserPengelola/EditKelUserPengelola'));
const DeleteKelUserPengelola = React.lazy(() => import ('./views/KelUserPengelola/DeleteKelUserPengelola'));

//Route Page User Pengguna
const UserPengguna = React.lazy(() => import('./views/KelUsers/UsersPengguna/UserPengguna'));

//Route Paket Perjalan
const PaketPerjalanan = React.lazy(() => import('./views/PaketPerjalanan/PaketPerjalanan'));
const PaketPerjalananDetail = React.lazy(() => import('./views/PaketPerjalanan/PaketPerjalananDetail'));
const DetailPaketPerjalanan = React.lazy(() => import('./views/PaketPerjalanan/DetailPaketPerjalanan'))


const Users = React.lazy(() => import('./views/Users/UsersPengguna/Users'));
const User = React.lazy(() => import('./views/Users/UsersPengguna/User'));

const UsersPengelola = React.lazy(() => import ('./views/Users/UsersPengelola/UsersPengelola'));
const UserPengelola = React.lazy(() => import ('./views/Users/UsersPengelola/UserPengelola'));

const Hotels = React.lazy(() => import ('./views/Hotels/Hotels'));
const Hotel = React.lazy(() => import ('./views/Hotels/Hotel'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/theme', exact: true, name: 'Theme', component: Colors },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/theme/typography', name: 'Typography', component: Typography },
  { path: '/base', exact: true, name: 'Base', component: Cards },
  { path: '/base/cards', name: 'Cards', component: Cards },
  { path: '/base/forms', name: 'Forms', component: Forms },
  { path: '/base/switches', name: 'Switches', component: Switches },
  { path: '/base/tables', name: 'Tables', component: Tables },

  { path: '/base/travel/kelperjalanan', name: 'KelPerjalanan', component: KelPerjalanan },
  { path: '/base/travel/jenpaketperjalanan', name: 'JenPaketPerjalanan', component: JenPaketPerjalanan },
  { path: '/base/travel/maskapaipenerbangan', name: 'MaskapaiPenerbangan', component: MaskapaiPenerbangan },
  
  { path: '/base/travel/negara', name: 'Negara', component: Negara },
  { path: '/base/travel/propinsi', name: 'Propinsi', component: Propinsi },

  { path: '/base/travel/kota', name: 'Kota', component: Kota },

  //Route Page Kelompok User Pengelola
  { path: '/keluserpengelola', exact: true, name: 'KelUserPengelola', component : KelUserPengelola},
  { path: '/keluserpengelola/createkeluserpengelola', exact: true, name: 'Create KelUser Pengelola', component: CreateKelUserPengelola},
  { path: '/keluserpengelola/editkeluserpengelola/:id', exact: true, name: 'Edit KelUser Pengelola', component: EditKelUserPengelola},
  { path: '/keluserpengelola/deletekeluserpengelola/:id', exact: true, name: 'Delete KelUser Pengelola', component: DeleteKelUserPengelola},

  //Route Page User Pengguna
  { path: '/kelusers/userspengguna', exact: true, name: 'User Pengguna', component : UserPengguna},

  //Route Paket Perjalanan
  { path: '/paketperjalanan',exact: true, name: 'PaketPerjalanan', component: PaketPerjalanan },
  { path: '/paketperjalanan/PaketPerjalananDetail/:id', exact: true, name: 'PaketPerjalananDetail', component: PaketPerjalananDetail },
  { path: '/paketperjalanan/detailpaketperjalanan/:id', exact: true, name: 'DetailPaketPerjalanan', component: DetailPaketPerjalanan},

  { path: '/base/travel/keluserpengguna', KelUserPengguna, component : KelUserPengguna},
  // { path: '/base/travel/userpengelola', UserPengelola, component : UserPengelola},
  // { path: '/base/travel/userpengguna', UserPengguna, component : UserPengguna},
  { path: '/base/travel/metodebayar', MetodeBayar, component : MetodeBayar},
  // { path: '/base/travel/hotel', Hotel, component : Hotel},
  { path: '/base/travel/lokasiwisata', LokasiWisata, component : LokasiWisata},
  { path: '/base/travel/tripwisataperhari', TripWisataperHari, component : TripWisataperHari},
  { path: '/base/travel/bookingpaketwisata', BookingPaketWisata, component : BookingPaketWisata},

  { path: '/base/tabs', name: 'Tabs', component: Tabs },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/base/dropdowns', name: 'Dropdowns', component: Dropdowns },
  { path: '/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/base/navs', name: 'Navs', component: Navs },
  { path: '/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/buttons', exact: true, name: 'Buttons', component: Buttons },
  { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/buttons/button-dropdowns', name: 'Button Dropdowns', component: ButtonDropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/font-awesome', name: 'Font Awesome', component: FontAwesome },
  { path: '/icons/simple-line-icons', name: 'Simple Line Icons', component: SimpleLineIcons },
  { path: '/notifications', exact: true, name: 'Notifications', component: Alerts },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  { path: '/notifications/modals', name: 'Modals', component: Modals },
  { path: '/widgets', name: 'Widgets', component: Widgets },
  { path: '/charts', name: 'Charts', component: Charts },

  { path: '/users/userspengguna', exact: true,  name: 'Users', component: Users },
  { path: '/users/userspengguna/:id', exact: true, name: 'User Details', component: User },

  { path: '/users/userspengelola', exact: true, name: 'UsersPengelola', component: UsersPengelola},
  { path: '/users/userspengelola/:id', exact: true, name: 'UserPengelola', component: UserPengelola},

  { path: '/hotels', exact: true, name: 'Hotels', component: Hotels},
  { path: '/hotels/:id', exact: true, name: 'Hotel Detail', component: Hotel}


];

export default routes;
