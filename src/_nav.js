export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer'
    },

    {
      title: true,
      name: 'Master',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },

    {
      name: 'Master',
      url: '/buttons',
      icon: 'icon-layers',
      children: [
        {
          name: 'Kategori Wisata',
          url: '/base/travel/travel',
          icon: 'icon-briefcase',
          attributes: { disabled: true },
        },
        {
          name: 'Kelompok Perjalanan',
          url: '/base/travel/kelperjalanan',
          icon: 'icon-bag',
        },
        {
          name: 'Jenis Paket Perjalanan',
          url: '/base/travel/jenpaketperjalanan',
          icon: 'icon-book-open',
        },
        {
          name: 'Maskapai Penerbangan',
          url: '/base/travel/maskapaipenerbangan',
          icon: 'icon-plane',
        },
        {
          name: 'Paket Perjalanan',
          url: '/paketperjalanan',
          icon: 'icon-handbag',
        },

        {
          name: 'Negara',
          url: '/base/travel/negara',
          icon: 'icon-map',
        },
        {
          name: 'Propinsi',
          url: '/base/travel/propinsi',
          icon: 'icon-map',
        },
        {
          name: 'Kota',
          url: '/base/travel/kota',
          icon: 'icon-map',
        },

        {
          name: 'Kelompok User Pengelola',
          url: '/keluserpengelola',
          icon: 'icon-people',
        },
        {
          name: 'Kelompok User Pengguna',
          url: '/base/travel/keluserpengguna',
          icon: 'icon-people',
        },
        {
          name: 'User Pengelola',
          url: '/users/userspengelola',
          icon: 'icon-user',
        },
        {
          name: 'User Pengguna',
          url: '/kelusers/userspengguna',
          icon: 'icon-user',
        },
        {
          name: 'Metode pembayaran',
          url: '/base/travel/metodebayar',
          icon: 'icon-credit-card',
        },
        {
          name: 'Hotel',
          url: '/hotels',
          icon: 'icon-home',
        },
        {
          name: 'Lokasi Wisata',
          url: '/base/travel/lokasiwisata',
          icon: 'icon-location-pin',
        },
        {
          name: 'Trip Wisata Perhari',
          url: '/base/travel/tripwisataperhari',
          icon: 'icon-briefcase',
        },
        {
          name: 'Booking Paket Wisata',
          url: '/base/travel/bookingpaketwisata',
          icon: 'icon-calendar',
        },
      ],
    },
    

    // {
    //   title: true,
    //   name: 'Travel',
    //   wrapper: {            // optional wrapper object
    //     element: '',        // required valid HTML5 element tag
    //     attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
    //   },
    //   class: ''             // optional class names space delimited list for title item ex: "text-center"
    // },
    // {
    //   name: 'Colors',
    //   url: '/theme/colors',
    //   icon: 'icon-drop',
    // },
    // {
    //   name: 'Typography',
    //   url: '/theme/typography',
    //   icon: 'icon-pencil',
    // },
    // {
    //   title: true,
    //   name: 'Components',
    //   wrapper: {
    //     element: '',
    //     attributes: {},
    //   },
    // },
    // {
    //   name: 'Base',
    //   url: '/base',
    //   icon: 'icon-puzzle',
    //   children: [
    //     {
    //       name: 'Breadcrumbs',
    //       url: '/base/breadcrumbs',
    //       icon: 'icon-puzzle',
    //     },
    //     {
    //       name: 'Cards',
    //       url: '/base/cards',
    //       icon: 'icon-puzzle',
    //     },
    //     {
    //       name: 'Carousels',
    //       url: '/base/carousels',
    //       icon: 'icon-puzzle',
    //     },
    //     {
    //       name: 'Collapses',
    //       url: '/base/collapses',
    //       icon: 'icon-puzzle',
    //     },
    //     {
    //       name: 'Dropdowns',
    //       url: '/base/dropdowns',
    //       icon: 'icon-puzzle',
    //     },
    //     {
    //       name: 'Forms',
    //       url: '/base/forms',
    //       icon: 'icon-puzzle',
    //     },
    //     {
    //       name: 'Jumbotrons',
    //       url: '/base/jumbotrons',
    //       icon: 'icon-puzzle',
    //     },
    //     {
    //       name: 'List groups',
    //       url: '/base/list-groups',
    //       icon: 'icon-puzzle',
    //     },
    //     {
    //       name: 'Navs',
    //       url: '/base/navs',
    //       icon: 'icon-puzzle',
    //     },
    //     {
    //       name: 'Paginations',
    //       url: '/base/paginations',
    //       icon: 'icon-puzzle',
    //     },
    //     {
    //       name: 'Popovers',
    //       url: '/base/popovers',
    //       icon: 'icon-puzzle',
    //     },
    //     {
    //       name: 'Progress Bar',
    //       url: '/base/progress-bar',
    //       icon: 'icon-puzzle',
    //     },
    //     {
    //       name: 'Switches',
    //       url: '/base/switches',
    //       icon: 'icon-puzzle',
    //     },
    //     {
    //       name: 'Tables',
    //       url: '/base/tables',
    //       icon: 'icon-puzzle',
    //     },
    //     {
    //       name: 'Tabs',
    //       url: '/base/tabs',
    //       icon: 'icon-puzzle',
    //     },
    //     {
    //       name: 'Tooltips',
    //       url: '/base/tooltips',
    //       icon: 'icon-puzzle',
    //     },
    //   ],
    // },
    // {
    //   name: 'Buttons',
    //   url: '/buttons',
    //   icon: 'icon-cursor',
    //   children: [
    //     {
    //       name: 'Buttons',
    //       url: '/buttons/buttons',
    //       icon: 'icon-cursor',
    //     },
    //     {
    //       name: 'Button dropdowns',
    //       url: '/buttons/button-dropdowns',
    //       icon: 'icon-cursor',
    //     },
    //     {
    //       name: 'Button groups',
    //       url: '/buttons/button-groups',
    //       icon: 'icon-cursor',
    //     },
    //     {
    //       name: 'Brand Buttons',
    //       url: '/buttons/brand-buttons',
    //       icon: 'icon-cursor',
    //     },
    //   ],
    // },
    // {
    //   name: 'Charts',
    //   url: '/charts',
    //   icon: 'icon-pie-chart',
    // },
    // {
    //   name: 'Icons',
    //   url: '/icons',
    //   icon: 'icon-star',
    //   children: [
    //     {
    //       name: 'CoreUI Icons',
    //       url: '/icons/coreui-icons',
    //       icon: 'icon-star',
    //       badge: {
    //         variant: 'info',
    //         text: 'NEW',
    //       },
    //     },
    //     {
    //       name: 'Flags',
    //       url: '/icons/flags',
    //       icon: 'icon-star',
    //     },
    //     {
    //       name: 'Font Awesome',
    //       url: '/icons/font-awesome',
    //       icon: 'icon-star',
    //       badge: {
    //         variant: 'secondary',
    //         text: '4.7',
    //       },
    //     },
    //     {
    //       name: 'Simple Line Icons',
    //       url: '/icons/simple-line-icons',
    //       icon: 'icon-star',
    //     },
    //   ],
    // },
    // {
    //   name: 'Notifications',
    //   url: '/notifications',
    //   icon: 'icon-bell',
    //   children: [
    //     {
    //       name: 'Alerts',
    //       url: '/notifications/alerts',
    //       icon: 'icon-bell',
    //     },
    //     {
    //       name: 'Badges',
    //       url: '/notifications/badges',
    //       icon: 'icon-bell',
    //     },
    //     {
    //       name: 'Modals',
    //       url: '/notifications/modals',
    //       icon: 'icon-bell',
    //     },
    //   ],
    // },
    // {
    //   name: 'Widgets',
    //   url: '/widgets',
    //   icon: 'icon-calculator',
    //   badge: {
    //     variant: 'info',
    //     text: 'NEW',
    //   },
    // },
    // {
    //   divider: true,
    // },
    // {
    //   title: true,
    //   name: 'Extras',
    // },
    // {
    //   name: 'Pages',
    //   url: '/pages',
    //   icon: 'icon-star',
    //   children: [
    //     {
    //       name: 'Login',
    //       url: '/login',
    //       icon: 'icon-star',
    //     },
    //     {
    //       name: 'Register',
    //       url: '/register',
    //       icon: 'icon-star',
    //     },
    //     {
    //       name: 'Error 404',
    //       url: '/404',
    //       icon: 'icon-star',
    //     },
    //     {
    //       name: 'Error 500',
    //       url: '/500',
    //       icon: 'icon-star',
    //     },
    //   ],
    // },

    {
      title: true,
      name: 'Account',
    },
    {
      name: 'Account',
      url: '/pages',
      icon: 'icon-user',
      children: [
        {
          name: 'Update',
          url: '/dashboard',
          icon: 'icon-pencil',
          attributes: { disabled: true },
        },
        {
          name: 'Change Password',
          url: '/dashboard',
          icon: 'icon-lock',
          attributes: { disabled: true },
        },
      ],
    },

    {
      name: 'Logout',
      url: '/login',
      icon: 'icon-logout'
    },


    // {
    //   name: 'Disabled',
    //   url: '/dashboard',
    //   icon: 'icon-ban',
    //   attributes: { disabled: true },
    // },
  ],
};
