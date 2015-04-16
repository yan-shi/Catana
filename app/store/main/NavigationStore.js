/**
 * Created by yanshi on 10/5/14.
 */
Ext.define('Catana.store.main.NavigationStore', {
    extend: 'Ext.data.Store',

    requires: [
        'Catana.model.main.NavigationModel'
    ],

    model: 'Catana.model.main.NavigationModel',

    storeId: 'navigation',

    autoLoad: true,

    proxy: {
        type: 'ajax',
        url: 'data/json/navigation.json',

        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});