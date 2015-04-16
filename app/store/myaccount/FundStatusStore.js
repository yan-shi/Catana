//Created by yanshi on 1/21/2015
Ext.define('Catana.store.myaccount.FundStatusStore', {
    extend: 'Ext.data.Store',

    requires: [
        'Catana.model.myaccount.FundStatusModel'
    ],

    model: 'Catana.model.myaccount.FundStatusModel',

    storeId: 'fundStatus',

    autoLoad: true,

    proxy: {
        type: 'ajax',
        url: 'data/json/fund-status.json',
        reader: {
            type: 'json'
        }
    }
});