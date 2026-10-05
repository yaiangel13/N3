const gSPOTIFY_MODAL = '#spotify_wrapper';
const gSPOTIFY_MODAL_TRIGGER = '#music';

$v(gSPOTIFY_MODAL_TRIGGER).addEvent('click', (pEvent) => {
    $v('#settings .selected').clearModals(gSPOTIFY_MODAL_TRIGGER, gSPOTIFY_MODAL);
    $v(gSPOTIFY_MODAL).toggleVisibility();
    $v(gSPOTIFY_MODAL_TRIGGER).toggleSelected();
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
