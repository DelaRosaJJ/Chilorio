Ext.define('BrazilJS.view.PurchaseOrderStatus.PurchaseOrderStatusfrm',
{
    extend: 'Ext.Window',
            xtype: 'windowform',
            title: 'PurchaseOrderStatus',
            alias: 'widget.POStatusfrm',
            width: 500,
            height: 350,
            iconCls: 'icon-grid',
            modal: true,
            items: [
                {
                    xtype: 'textfield',
                    name: 'POStatusCode',
                    fieldLabel: 'POStatusCode',
                    allowBlanck: false
                }, {
                    xtype: 'textfield',
                    name: 'Description',
                    fieldLabel: 'Description',
                    allowBlanck: false
                }, {
                    xtype: 'datefield',
                    name: 'Lastupdate',
                    fieldLabel: 'LastUpdate',
                    allowBlanck: false,
                    value: new Date()
                }
            ],
            initComponent: function() {

                this.dockedItems = [{
                        xtype: 'toolbar',
                        items: [{
                                text: 'Agregar',
                                iconCls: 'icon-save',
                                itemId: 'save',
                                action: 'add'
                            }, {
                                iconCls: 'icon-delete',
                                text: 'Delete',
                                action: 'delete'
                            }]
                    }];

                this.callParent(arguments);
            }

        });


