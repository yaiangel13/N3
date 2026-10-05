var gCurrentLevel = null;
var gCurrentIssue = null;

clearIssueSelector = function () {
    $v('#issues>#issue_selector>button>selectedcontent').innerHTML('');
    
    vIssues = $v('#issues>#issue_selector>option').nodes;
    if (vIssues != undefined && vIssues.length != 0) {
        vIssues.forEach((pNode) => {
            document.getElementById('issue_selector').removeChild(pNode);
        });
    }
}

clearLevel = function () {
    //reset statusbar
    $v('#statusbar>#status').innerHTML(gDEFAULT_TITLE);

    //clear selected level
    $v('#' + gCurrentLevel).removeClass('selected');

    //clear globals
    gCurrentLevel = null;
    gCurrentIssue = null;
    
    //hide and clear nav + note
    $v('#aside').css('visibility','hidden');
    $v('#aside').innerHTML('');
    $v('#note').css('visibility','hidden');
    $v('#note>#note_content').innerHTML('');
    //clear issues
    clearIssueSelector();
}

getIssueSelectorIcon = function (pIssueType) {
    switch (pIssueType) {
        case gATTR_EXAM:
            return gICON_EXAM;
        case gATTR_EXERCISE:
            return gICON_EXERCISE;
        case gATTR_FLASHCARD:
            return gICON_FLASHCARD;
        case gATTR_NOTE:
        default:
            return gICON_ISSUE;
    }
}

setOnChangeIssueSelector = function () {
    $v('#issues>#issue_selector').addEvent('change', (pEvent) => {
        var vTriggerValue = pEvent.target.value;
        $v('#issues>#issue_selector>option').nodes.forEach(pNode => {
            if (pNode.innerText == vTriggerValue) {
                $v('#issues>#issues_icon').attr('src', pNode.firstChild.src);
            }
        });
    })
}

loadIssueSelector = function (pIssues) {
    clearIssueSelector();
    
    pIssues.forEach(pIssue => {
        var vIssueIcon = getIssueSelectorIcon(pIssue.type);
        
        var vOptionElement = $v().createElement({
            label: 'option',
            id: pIssue.file,
        });

        var vOptionImg = $v().createElement({
            label: 'img',
            classes: ['icon','menu_icon'],
            attrs: [{attr: 'src', value: vIssueIcon},{attr: 'alt', value: vIssueIcon.split('/').pop().split('.')[0]}]
        });

        var vOptionSpan = $v().createElement({
            label: 'span',
            classes: ['issue_name'],
            innerHTML: pIssue.title
        });

        //append issue on selector
        $v('#issues>#issue_selector').appendChilds(vOptionElement);
        $v('#issues>#issue_selector>#' + pIssue.file).appendChilds([vOptionImg, vOptionSpan]);
    });

    //update selector icon to match first issue type
    $v('#issues>#issues_icon').attr('src', getIssueSelectorIcon(pIssues[0].type));
    //set onChange event
    setOnChangeIssueSelector();
}

loadContentEvent = function (pEvent) {
    var vTriggerID = pEvent.currentTarget.id;
    var vContext = $v('#' + vTriggerID).attr('data-context');
    var vDeepLevel = $v('#' + vTriggerID).attr('data-deep').split('-');
    vIssues = gMenu.levels[vDeepLevel[0]].nav[vDeepLevel[1]].issues;
    
    console.log(vTriggerID);
    if (vContext != gATTR_EXAM) {
        if ($v('#' + vTriggerID).attr('data-issues') == 'true') {
            gCurrentIssue = vIssues[0].file;
            loadIssueSelector(vIssues);
        }
    }

    switch (vContext) {
        case gATTR_MD:
            loadIssueSelector([{
                title: pEvent.currentTarget.innerHTML,
                type: vContext,
                file: gCurrentIssue
            }]);
            //process MD file and break execution
            $v().processMD(gCurrentIssue);
            $v('#note').css('visibility','visible');
            return;
        case gATTR_EXAM:
            loadIssueSelector([{
                title: 'EXAM: ' + pEvent.currentTarget.parentElement.innerText,
                type: vContext,
                file: vTriggerID.split('-').slice(-1)}]);
            //call practice module
            break;
        case gATTR_FILE:
            //call file process module
            break;
        case gATTR_NAV:
            vTriggerID = gCurrentIssue;
        default:
            //nothing extra to do, just load content
            break;
    }
    $v($v().MAIN_NOTE_NODE).loadContent(vTriggerID);
    $v('#note').css('visibility','visible');
}

parseLevelMenu = function () {
    gMenu.levels.forEach((pLevel, pIdxLevel) => {
        if (pLevel.id == gCurrentLevel) {
            //set statusbar
            $v('#statusbar>#status').innerHTML(pLevel.title);

            pLevel.nav.forEach((pNav, pIdxNav) => {
                var vNavID = pLevel.id + '-' + pNav.id;
                var vDeepLevel = pIdxLevel + '-' + pIdxNav;

                var vNavElement = $v().createElement({
                    label: 'div',
                    id: vNavID,
                    classes: ['navbar'],
                    attrs: [{attr: 'data-context', value: gATTR_NAV}, {attr: 'data-deep', value: vDeepLevel}],
                    innerHTML: pNav.title
                });

                $v('#aside').appendChilds(vNavElement);

                //set nav event
                $v('#aside>#' + vNavID).addEvent('click', (pEvent) => {
                    //clear current selected nav and/or exam
                    $v('#aside>div.selected').removeClass('selected');
                    $v('#aside>div>img').removeClass('selected');
                    //set event nav and load his content
                    $v('#' + pEvent.currentTarget.id).toggleSelected();
                    loadContentEvent(pEvent);
                });

                //set attributes if need
                if (pNav.attributes != undefined && pNav.attributes.length != 0) {
                    pNav.attributes.forEach(pAttribute => {
                        switch (pAttribute) {
                            case gATTR_DISABLED:
                                $v('#aside>#' + vNavID).addClass('disabled');
                                break;
                            case gATTR_NAV:
                            case gATTR_MD:
                            case gATTR_FILE:
                                $v('#aside>#' + vNavID).attr('data-context', pAttribute);
                                break;
                            case gATTR_EXAM:
                                var vExamID = vNavID + gPATH_EXAM + vNavID.split('-')[1];
                                var vBtnExam = $v().createElement({
                                    label: 'img',
                                    id: vExamID,
                                    classes: ['icon','menu_icon'],
                                    attrs: [
                                        {attr: 'src', value: gICON_EXAM}, {attr: 'alt', value: 'exam'},
                                        {attr: 'data-context', value: pAttribute}, {attr: 'data-deep', value: vDeepLevel}
                                    ]
                                });

                                $v('#aside>#' + vNavID).appendChilds(vBtnExam);

                                //set exam icon event
                                $v('#aside>#' + vNavID + '>#' + vExamID).addEvent('click', (pEvent) => {
                                    var vEventTarget = pEvent.currentTarget.id;
                                    var vCurrentExam = $v('#aside>div>img.selected').attr('id');

                                    //clear current selected exam and his nav
                                    $v('#aside>div.selected').removeClass('selected');
                                    $v('#aside>div>img').removeClass('selected');

                                    //if same exam triggered prevent reload
                                    if (vCurrentExam != vEventTarget) {
                                        //set event exam and his nav and load exam content
                                        $v('#' + pEvent.currentTarget.parentElement.id).toggleSelected();
                                        $v('#' + pEvent.currentTarget.id).toggleSelected();
                                        loadContentEvent(pEvent);
                                    }
                                    pEvent.stopPropagation();
                                });
                                break;
                        }
                    });
                }

                //set issues
                if (pNav.issues != undefined && pNav.issues.length != 0) {
                    $v('#aside>#' + vNavID).attr('data-issues', 'true');
                }
            });
        }
    });
}

loadLevelEvents = function () {
    $v('#statusbar>#status').innerHTML(gDEFAULT_TITLE);

    $v('#options>div').addEvent('click', (pEvent) => {
        var vEventTarget = pEvent.currentTarget.id;
        var vCurrentLevel = gCurrentLevel;
        
        //clear current level
        clearLevel();

        //if same level triggered prevent reload
        if (vCurrentLevel != vEventTarget) {
            //set event level and load his menu
            gCurrentLevel = vEventTarget;
            $v('#' + gCurrentLevel).addClass('selected');
            parseLevelMenu();
            $v('#aside').toggleVisibility();
        }
    });
}
