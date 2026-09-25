const gNOLJA_NUGGET_MODAL = '#n3_helper_wrapper';
const gNOLJA_NUGGET_MODAL_TRIGGER = '#support';

$v(gNOLJA_NUGGET_MODAL_TRIGGER).addEvent('click', (pEvent) => {
    $v('#settings .selected').clearModals(gNOLJA_NUGGET_MODAL_TRIGGER, gNOLJA_NUGGET_MODAL);
    $v(gNOLJA_NUGGET_MODAL).toggleVisibility();
    $v(gNOLJA_NUGGET_MODAL_TRIGGER).toggleSelected();
});