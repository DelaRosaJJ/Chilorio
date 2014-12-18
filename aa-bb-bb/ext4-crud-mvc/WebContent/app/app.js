Ext.Loader.setConfig({enabled: true});

Ext.application({
    name: 'BrazilJS',
    views: ['contact.Edit', 'contact.List','Regions.Regionfrm'],
    
    controllers: ['Contacts','BrazilJS.controller.Regions'],
    

    autoCreateViewport: true
});
