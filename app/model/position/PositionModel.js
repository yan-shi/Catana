/**
 * Created by yanshi on 2015/1/18 0018.
 */
Ext.define('Catana.model.position.PositionModel', {
    extend: 'Catana.model.general.MarketDataModel',
    fields: [
        { name: 'TotalChange', type: 'number', convert: function (value, record) {
            return ((Math.random() * 2 - 1) / 10);
        }},
        { name: 'TotalGL', type: 'number', convert: function (value, record) {
            return ((Math.random() * 2 - 1) * 10000);
        }}
    ]
});