/**
 * Created by yanshi on 10/5/14.
 */
Ext.define('Catana.view.main.Center', {
    extend: 'Ext.container.Container',
    xtype: 'center',
    layout: 'card',
    activeItem: 0,
    requires: [
        'Catana.view.dashboard.DashBoard'
    ],
    items: [
        {
            xtype: 'c-dashboard'
        }
    ]
});