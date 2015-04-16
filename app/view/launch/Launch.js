/**
 * Created by yanshi on 10/6/2014.
 */
Ext.define('Catana.view.launch.Launch', {
    extend: 'Ext.container.Container',
    requires: [
        'Catana.view.main.Main',
        'Catana.view.login.Login'
    ],
    xtype: 'app-launch',
    layout: {
        type: 'border'
    },
    items: [
        {
            region: 'center',
            layout: 'card',
            xtype: 'container',
            activeItem: 'main',
            items: [
                {
                    xtype: 'app-main',
                    itemId: 'main'
                },
                {
                    xtype: 'app-login',
                    itemId: 'login'
                }
            ]
        }
    ]
});
