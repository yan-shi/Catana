/**
 * Created by yanshi on 3/28/15.
 */
Ext.define('Catana.component.ConstructionPanel', {
    extend: 'Ext.container.Container',
    xtype: 'construction-panel',
    height: '100%',
    cls: 'construction-panel',

    initComponent: function () {
        var title = this.viewTitle;
        this.html = '<div>' + title + ' page is under construction</div>';
        this.callParent(arguments);
    }
});