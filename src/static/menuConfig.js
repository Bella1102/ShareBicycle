const menuConfig = [
    {
        title: 'UI',
        key: '/ui',
        children:[
            {
                title: 'Button',
                key: '/ui/buttons',
            },
            {
                title: 'Modal',
                key: '/ui/modals',
            },
            {
                title: 'Loading',
                key: '/ui/loadings',
            },
            {
                title: 'Notification',
                key: '/ui/notifications',
            },
            {
                title: 'Global Message',
                key: '/ui/messages',
            },
            {
                title: 'Tab',
                key: '/ui/tabs',
            },
            {
                title: 'Gallery',
                key: '/ui/gallery',
            },
            {
                title: 'Carousel',
                key: '/ui/carousel',
            }
        ]
    },
    {
        title: 'Form',
        key: '/form',
        children:[
            {
                title: 'login',
                key: '/form/login',
            },
            {
                title: 'register',
                key: '/form/register',
            }
        ]
    },
    {
        title: 'Table',
        key: '/table',
        children:[
            {
                title: 'basic-table',
                key: '/table/basic',
            },
            {
                title: 'advanced-table',
                key: '/table/advanced',
            }
        ]
    },
    {
        title: 'Chart',
        key: '/chart',
        children:[
            {
                title: 'bar-chart',
                key: '/chart/bar'
            },
            {
                title: 'pie-chart',
                key: '/chart/pie'
            },
            {
                title: 'line-chart',
                key: '/chart/line'
            },
        ]
    },
    {
        title: 'Rich Text',
        key: '/richtext'
    },
    {
        title: 'City Management',
        key: '/city'
    },
    {
        title: 'Staff Management',
        key: '/staff'
    },
    {
        title: 'Order Management',
        key: '/order',
        btnList:[
            {
                title: 'Order Detail',
                key: 'detail'
            },
            {
                title: 'Order Finish',
                key: 'finish'
            }
        ]
    },
    {
        title: 'BikeMap',
        key: '/bikemap'
    },
    {
        title: 'Permission Setting',
        key: '/permission'
    },
];

export default menuConfig;