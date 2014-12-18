Ext.define('BrazilJS.view.Taxes.Taxesfrm',
        {
            extend: 'Ext.Window',
            xtype: 'windowform',
            title: 'Taxes',
            alias: 'widget.taxesfrm',
            width: 500,
            height: 350,
            iconCls: 'icon-grid',
            modal: true,
            items: [
                {
                    xtype: 'textfield',
                    name: 'Taxescode',
                    fieldLabel: 'Taxes Code',
                    allowBlanck: false
                }, {
                    xtype: 'textfield',
                    name: 'description',
                    fieldLabel: 'Description',
                    allowBlanck: false
                }, {
                    xtype: 'datefield',
                    name: 'lastupdate',
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