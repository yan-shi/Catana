//Created by yanshi on 1/20/2015
Ext.define('Catana.view.watchlist.WatchListGrid', {
    extend: 'Ext.grid.Panel',
    requires: [
        'Catana.store.general.MarketDataStore'
    ],
    xtype: 'watch-list-grid',
    columns: {
        defaults: {
            align: 'right',
            flex: 1,
            minWidth: 100
        },
        items: [
            {
                text: 'Symbol',
                dataIndex: 'Symbol',
                align: 'left'
            },
            {
                text: 'Last Price',
                dataIndex: 'LastPrice',
                renderer: Catana.Utils.priceRenderer
            },
            {
                text: 'Change',
                dataIndex: 'Change',
                renderer: Catana.Utils.priceChangeRenderer
            },
            {
                text: 'Change %',
                dataIndex: 'ChangePercent',
                renderer: Catana.Utils.priceChangePercentageRenderer
            },
            {
                text: 'Volume',
                dataIndex: 'Volume',
                renderer: Catana.Utils.largeIntRenderer
            },
            {
                text: 'High',
                dataIndex: 'High',
                renderer: Catana.Utils.priceRenderer
            },
            {
                text: 'Low',
                dataIndex: 'Low',
                renderer: Catana.Utils.priceRenderer
            },
            {
                text: 'Open',
                dataIndex: 'Open',
                renderer: Catana.Utils.priceRenderer
            }
        ]
    },
    initComponent: function () {
        this.store = Ext.StoreManager.lookup('watchListStore') || Ext.create('Catana.store.general.MarketDataStore', {
            storeId: 'watchListStore'
        });
        this.callParent(arguments);
    }
});