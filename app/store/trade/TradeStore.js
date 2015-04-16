/**
 * Created by yanshi on 1/26/15.
 */
Ext.define('Catana.store.trade.TradeStore', {
    extend: 'Ext.data.Store',

    requires: [
        'Catana.model.trade.TradeModel'
    ],

    model: 'Catana.model.trade.TradeModel',

    storeId: 'trade',

    proxy: {
        type: 'ajax',
        url: 'data/json/order.json',
        reader: {
            type: 'json'
        }
    }
});