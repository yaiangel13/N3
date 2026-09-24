$v('#music').addEvent('click', (pEvent) => {
    $v('#spotify-wrapper').toggleVisibility();
    var vIsSelected = $v('#music').hasClass('selected');
    (vIsSelected) ? $v('#music').removeClass('selected') : $v('#music').addClass('selected');
});

window.onSpotifyIframeApiReady = IFrameAPI => {
    let element = $v('#spotify').nodes[0];
    let options = {
        width: '100%',
        height: '160',
        uri: 'spotify:playlist:73xRrTos9HoxNvDIIZh2Un'
    };
    let callback = EmbedController => {};
    IFrameAPI.createController(element, options, callback);
};
