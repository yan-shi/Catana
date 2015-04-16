/**
 * Created by yanshi on 2015/1/18 0018.
 */
Ext.define('Catana.store.general.MarketDataStore', {
    extend: 'Ext.data.Store',
    requires: [
        'Catana.model.general.MarketDataModel'
    ],
    model: 'Catana.model.general.MarketDataModel',

    storeId: 'asset',

    autoLoad: true,

    proxy: {
        type: 'ajax',
        url: 'data/json/quote.json',
        reader: {
            type: 'json'
        }
    }
});