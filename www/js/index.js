
var app = {

    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);

        var divApp = document.getElementById('app');
        divApp.addEventListener('click', function() {
            navigator.camera.getPicture(function(fileUri) {
                divApp.style.backgroundImage = 'url(' + fileUri + ')';
            }, function(error) {

            }, {
                destinationType: navigator.camera.DestinationType.FILE_URI,
                sourceType: navigator.camera.PictureSourceType.CAMERA,
                targetWidth: 600,
                targetHeight: 600,
                quality: 80
            });
        });
    },

    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },

    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
    }
};

app.initialize();