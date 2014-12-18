Ext.define('BrazilJS.view.Viewport', {
    extend: 'Ext.container.Viewport',
    layout: 'border',
    requires: [
        'BrazilJS.view.Stock.StockPanel',
        'BrazilJS.view.contact.List',
        'BrazilJS.view.Regions.Regionfrm'
    ], 
    initComponent:function(){
    var me=this;
    Ext.apply(me,{
    items: [{
            region: 'north',
            html: '<h1 class="x-panel-header">Cibamex</h1>',
            border: false,
            margins: '0 0 5 0'
        }, {
            region: 'west',
            collapsible: true,
            title: 'Navigation',
            width: 150,
            items: [
                {
                    xtype: 'panel',
                    width: 150,
                    collapsible: true,
                    title: 'Administracion',
                    items: [{
                            xtype: 'button',
                            width: 150,
                            text: 'Regions',
                            handler: function()
                            {
                                if (!this.win)
                                {
                                    var win = Ext.create('BrazilJS.view.Regions.Regionfrm');
                                }
                                win.show();
                            }
                            
                        }, {
                            xtype: 'button',
                            width: 150,
                            text: 'StockPanel',
                            handler: function()
                            {
                                if (!this.win)
                                {
                                    var win = Ext.create("BrazilJS.view.Stock.StockPanel");
                                }
                                win.show();
                            }
                        }]
                }
            ]
                    // could use a TreePanel or AccordionLayout for navigational items
        }, {
            region: 'center'
        }]
    });
    me.callParent(arguments);
    }
});