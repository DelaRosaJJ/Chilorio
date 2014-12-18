Ext.define('BrazilJS.controller.Regions', {
    extend: 'Ext.app.Controller',
    requires:'BrazilJS.view.Regions.Regionfrm',
    views: ['contact.Edit', 'contact.List','Regions.Regionfrm'],
    refs: [{
            ref:'regionfrm',
            selector:'regionfrm'
        }
    ],
    init: function() {
        this.control({
            'regionfrm button[action=add]':{
                        click: this.update
                    },
                    'regionfrm button[action=delete]':{
                        click:this.delete
                    }
        });
        
    },    
    update:function(){
        Ext.MessageBox.show({
                    title: 'REGIONS',
                    msg: 'Registro agregado exitosamente',
                    icon: Ext.MessageBox.INFO,
                    buttons: Ext.Msg.OK
                });
    },
    
    delete:function(){
        Ext.MessageBox.show({
            title:'REGIONS',
            msg:'Registro eliminado correctamente',
            icon:Ext.MessageBox.INFO,
            buttons:Ext.Msg.OK
        });
    }

});