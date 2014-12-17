/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('BrazilJS.view.Stock.StockPanel', {
    extend: 'Ext.Window',
    xtype: 'windowform',
    requires: ['BrazilJS.view.contact.List',
        'BrazilJS.view.Regions.Regionfrm'],
    title: 'Stock',
    alias: 'widget.stockPanel',
    width: 500,
    height: 350,
    bodyPadding: 5,
    layout: 'column',
    modal:true,
    fieldDefaults: {
        labelAlign: 'left',
        msgTarget: 'side'
    },
    items: [{
            
            xtype: 'contactlist'
        }]
});

