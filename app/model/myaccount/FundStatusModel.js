//Created by yanshi on 1/21/2015
Ext.define('Catana.model.myaccount.FundStatusModel', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'amount',
            type: 'number'
        },
        {
            name: 'fundType',
            type: 'string'
        }
    ]
});