/**
 * Created by yanshi on 1/12/15.
 */
Ext.define('Catana.store.myaccount.AccountHistoryStore', {
    extend: 'Ext.data.Store',

    requires: [
        'Catana.model.myaccount.AccountHistoryModel'
    ],

    model: 'Catana.model.myaccount.AccountHistoryModel',

    storeId: 'accounthistory',

    autoLoad: true,

    proxy: {
        type: 'ajax',
        url: 'data/json/account-history.json',

        reader: {
            type: 'json'
        }
    }
});