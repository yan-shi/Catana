/**
 * Created by yanshi on 1/3/15.
 */
Ext.define('Catana.store.general.AssetStore', {
    extend: 'Ext.data.Store',
    requires: [
        'Catana.model.general.AssetModel'
    ],
    model: 'Catana.model.general.AssetModel',
    sorters: 'symbol',
    autoLoad: true,

    proxy: {
        type: 'ajax',
        url: 'data/json/assets.json',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});