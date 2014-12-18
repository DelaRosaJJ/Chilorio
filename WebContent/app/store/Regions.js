/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('BrazilJS.store.Regions', {
    extend: 'Ext.data.Store',
    model: 'BrazilJS.model.Regions',
    autoLoad: true,
    pageSize: 35,
    autoLoad:{start: 0, limit: 35},
    proxy: {
        type: ajax,
        api: {
            read: 'Regions/view.action',
            create: 'Regions/create.action',
            update: 'Regions/update.action',
            destroy: 'Regions/delete.action'
        },
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        }, writer: {
            type: 'json',
            writeAllFields: true,
            encode: false,
            root: 'data'
        },
        listeners: {
            exception: function(proxy, response, operation) {
                Ext.MessageBox.show({
                    title: 'REMOTE EXCEPTION',
                    msg: operation.getError(),
                    icon: Ext.MessageBox.ERROR,
                    buttons: Ext.Msg.OK
                });
            }
        }

    }

});

