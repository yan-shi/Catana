//Created by yanshi on 1/20/2015
Ext.define('Catana.store.position.PositionStore', {
    extend: 'Ext.data.Store',

    requires: [
        'Catana.model.position.PositionModel'
    ],

    model: 'Catana.model.position.PositionModel',

    storeId: 'position',

    autoLoad: true,

    proxy: {
        type: 'ajax',
        url: 'data/json/quote.json',

        reader: {
            type: 'json'
        }
    }
});