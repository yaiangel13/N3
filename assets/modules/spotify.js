const gSPOTIFY_MODAL = '#spotify_wrapper';
const gSPOTIFY_MODAL_TRIGGER = '#music';
let gSPOTYFY_LOADED = false;

$v(gSPOTIFY_MODAL_TRIGGER).addEvent('click', (pEvent) => {
    $v('#settings .selected').clearModals(gSPOTIFY_MODAL_TRIGGER, gSPOTIFY_MODAL);
    $v(gSPOTIFY_MODAL).toggleVisibility();
    $v(gSPOTIFY_MODAL_TRIGGER).toggleSelected();

    //prevent spotify instantiation unless the user calls for it
    if (!gSPOTYFY_LOADED) {
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
        gSPOTYFY_LOADED = true;
    }
});

