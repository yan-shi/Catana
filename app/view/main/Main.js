/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 */
Ext.define('Catana.view.main.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'Catana.view.main.MainViewController',
        'Catana.view.main.MainViewModel',
        'Catana.view.main.Navigation',
        'Catana.view.main.Header',
        'Catana.view.main.Center',
        'Catana.component.Button',
        'Catana.component.Panel',
        'Catana.component.View',
        'Catana.Utils',
        'Catana.component.chart.ux.Highcharts',
        'Catana.store.general.AssetStore'
    ],
    xtype: 'app-main',
    controller: 'main',
    cls: 'base',
    layout: {
        type: 'border'
    },
    items: [
        {
            region: 'west',
            xtype: 'container',
            width: 250,
            split: false,
            layout: {
                type: 'vbox',
                align: 'stretch',
                pack: 'start'
            },
            items: [
                {
                    xtype: 'app-header',
                    itemId: 'header',
                    height: 80
                },
                {
                    xtype: 'navigation',
                    itemId: 'navigation',
                    flex: 1,
                    listeners: {
                        'itemclick': 'onNavigationItemClick',
                        'scope': 'controller'
                    }
                }
            ]
        },
        {
            region: 'center',
            xtype: 'center',
            reference: 'center'
        }
    ]
});
