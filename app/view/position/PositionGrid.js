//Created by yanshi on 1/20/2015
//Created by yanshi on 1/20/2015
Ext.define('Catana.view.position.PositionGrid', {
    extend: 'Ext.grid.Panel',
    requires: [
        'Catana.store.position.PositionStore'
    ],
    xtype: 'position-grid',

    initComponent: function () {
        this.columns = this.createColumns();
        this.store = Ext.StoreManager.lookup('positionStore') || Ext.create('Catana.store.position.PositionStore', {
            storeId: 'positionStore'
        });
        this.callParent(arguments);
    },

    createColumns: function () {
        return {
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
                    text: 'Total Change',
                    dataIndex: 'TotalChange',
                    renderer: Catana.Utils.priceChangePercentageRenderer
                },
                {
                    text: 'Total G/L',
                    dataIndex: 'TotalGL',
                    renderer: Catana.Utils.priceChangeRenderer
                }
            ]
        }
    }
});