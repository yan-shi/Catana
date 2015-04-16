/**
 * Created by yanshi on 10/5/14.
 */
Ext.define('Catana.model.main.NavigationModel', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'id', type: 'number' },
        { name: 'title', type: 'string' },
        { name: 'view', type: 'string' },
        { name: 'default', type: 'boolean' }
    ]
});