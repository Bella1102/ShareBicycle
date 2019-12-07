const menuList = [
    {
        title:'Home',
        key:'/admin/home'
    },
    {
        title:'UI',
        key:'/admin/ui',
        children:[
            {
                title:'Button',
                key:'/admin/ui/buttons',
            },
            {
                title:'Modal',
                key:'/admin/ui/modals',
            },
            {
                title:'Loading',
                key:'/admin/ui/loadings',
            },
            {
                title:'Notification',
                key:'/admin/ui/notification',
            },
            {
                title:'Global Message',
                key:'/admin/ui/messages',
            },
            {
                title:'Tab',
                key:'/admin/ui/tabs',
            },
            {
                title:'Gallery',
                key:'/admin/ui/gallery',
            },
            {
                title:'Carousel',
                key:'/admin/ui/carousel',
            }
        ]
    },
    {
        title:'Form',
        key:'/admin/form',
        children:[
            {
                title:'Login',
                key:'/admin/form/login',
            },
            {
                title:'Register',
                key:'/admin/form/reg',
            }
        ]
    },
    {
        title:'Table',
        key:'/admin/table',
        children:[
            {
                title:'basic-table',
                key:'/admin/table/basic',
            },
            {
                title:'advanced-table',
                key:'/admin/table/advance',
            }
        ]
    },
    {
        title:'Rich Text',
        key:'/admin/rich'
    },
    {
        title:'City Management',
        key:'/admin/city'
    },
    {
        title:'Order Management',
        key:'/admin/order',
        btnList:[
            {
                title:'Order Detail',
                key:'detail'
            },
            {
                title:'Order Finish',
                key:'finish'
            }
        ]
    },
    {
        title:'Staff Management',
        key:'/admin/user'
    },
    {
        title:'BikeMap',
        key:'/admin/bikeMap'
    },
    {
        title:'Chart',
        key:'/admin/charts',
        children:[
            {
                title:'bar charts',
                key:'/admin/charts/bar'
            },
            {
                title:'pie charts',
                key:'/admin/charts/pie'
            },
            {
                title:'line charts',
                key:'/admin/charts/line'
            },
        ]
    },
    {
        title:'Permission Setting',
        key:'/admin/permission'
    },
];

export default menuList;