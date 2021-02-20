var i = 0;
var loadingEdits = 0;
angular.module("swv", ["ui.directives", "ui.filters"])
.controller("Queue", function ($scope, $compile, $timeout) {

    const ns = ["<font color='green'>Main</font>", "<font color='tomato'>Talk</font>", "<font color='tomato'>User</font>", "<font color='tomato'>User talk</font>", "<font color='orange'>Project</font>", "<font color='tomato'>Project talk</font>", "<font color='orange'>File</font>", "<font color='tomato'>File talk</font>", "<font color='tomato'>MediaWiki</font>", "<font color='tomato'>MediaWiki talk</font>", "<font color='orange'>Template</font>", "<font color='tomato'>Template talk</font>", "<font color='orange'>Help</font>", "<font color='tomato'>Help talk</font>", "<font color='orange'>Category</font>", "<font color='tomato'>Category talk</font>"];
    const wikis = ["afwiki", "alswiki", "amwiki", "anwiki", "angwiki", "arwikisource", "arwikiversity", "aswikisource", "astwiki", "avwiki", "azwiki", "wikisource", "wikisourcewiki", "sourceswiki", "bat_smgwiki", "bgwikibooks", "brwiki", "bswiki", "bswikiquote", "cawikiquote", "cswiktionary", "csbwiki", "csbwiktionary", "cywiki", "dawikisource", "dewikisource", "dinwiki", "diqwiki", "elwikiquote", "elwikisource", "enwikiversity", "eowikinews", "eowiki", "eowikisource", "eswiktionary", "etwikibooks", "fawikiquote", "fawikivoyage", "fiwikisource", "frwikinews", "frpwiki", "gawiki", "glwikibooks", "hewikibooks", "hewikiquote", "hrwikisource", "hrwiktionary", "htwiki", "huwikibooks", "huwikiquote", "huwiktionary", "hywiktionary", "iawiktionary", "idwikiquote", "iewiktionary", "iowiki", "iswiktionary", "jvwiki", "kawiki", "kkwiki", "kowikibooks", "kowikisource", "kuwiki", "kywiki", "lawiki", "lawikisource", "lawiktionary", "ladwiki", "lbwiki", "liwiki", "lmowiki", "ltgwiki", "lvwiki", "maiwiki", "map_bmswiki", "metawiki", "mgwiki", "mkwikibooks", "mlwiki", "mlwiktionary", "mrwikisource", "mrjwiki", "mswiktionary", "ndswiktionary", "nds_nlwiki", "newwiki", "nlwikisource", "nowikisource", "orwikisource", "pamwiki", "pdcwiki", "plwikinews", "plwikiquote", "pnbwiktionary", "pswiki", "rmywiki", "rowikinews", "ruewiki", "sawiki", "sawiktionary", "sdwiktionary", "siwiki", "skwiktionary", "sqwiki", "srwikisource", "stwiktionary", "stqwiki", "svwikibooks", "svwikinews", "svwikiversity", "tawikinews", "tawiki", "tewiki", "ttwiki", "tyvwiki", "ugwiki", "urwiki", "vepwiki", "vlswiki", "yiwiktionary", "zhwikiquote", "zh_classicalwiki", "zh_yuewiki", "abwiki", "adywiki", "afwiktionary", "angwiktionary", "arcwiki", "aywiki", "aywiktionary", "barwiki", "be_x_oldwiki", "be_taraskwiki", "biwiki", "bnwikisource", "bswikisource", "cawikibooks", "crwiki", "crhwiki", "cuwiki", "cvwiki", "dewikibooks", "dewiktionary", "dvwiki", "dvwiktionary", "eewiki", "eowikibooks", "eswikibooks", "eswikinews", "eswikiquote", "eswikisource", "eswikiversity", "euwikiquote", "fawiktionary", "fjwiki", "fowiktionary", "fywiki", "glwiktionary", "guwiki", "hewikisource", "hewiktionary", "hiwiktionary", "hsbwiki", "hsbwiktionary", "huwikisource", "hywikibooks", "iawiki", "idwikibooks", "iewiki", "jbowiki", "kawiktionary", "klwiki", "kmwikibooks", "kmwiktionary", "knwiki", "kuwikiquote", "kvwiki", "kywikibooks", "ltwikisource", "ltwiktionary", "lvwiktionary", "mediawikiwiki", "mznwiki", "nawiktionary", "nahwiktionary", "ndswiki", "newiki", "newiktionary", "nlwiktionary", "nnwikiquote", "nnwiktionary", "ocwiki", "outreachwiki", "pagwiki", "papwiki", "piwiki", "plwikibooks", "ptwikibooks", "ptwikinews", "ptwikiquote", "ptwikisource", "ptwikivoyage", "ptwiktionary", "quwiki", "rmwiki", "ruwikiquote", "ruwikisource", "rwwiki", "sawikisource", "sahwikisource", "scowiki", "skwikibooks", "skwiki", "skwikiquote", "slwikibooks", "slwiki", "snwiki", "sowiki", "sqwikibooks", "sqwikiquote", "stwiki", "suwiktionary", "swwiktionary", "tawikiquote", "tawikisource", "tgwiki", "tgwiktionary", "thwikibooks", "thwikiquote", "thwikisource", "thwiktionary", "tkwiki", "tnwiki", "towiki", "tpiwiki", "twwiki", "tywiki", "udmwiki", "ukwikiquote", "uzwiki", "viwikibooks", "viwikisource", "vowiki", "vowiktionary", "wowiki", "xhwiki", "yiwikisource", "yowiki", "zh_min_nanwiki", "amwiktionary", "arwikinews", "arwiktionary", "astwiktionary", "bewikisource", "betawikiversity", "bmwiki", "bnwiki", "brwiktionary", "bswikibooks", "bswiktionary", "bxrwiki", "cawiktionary", "cswikinews", "cswikiquote", "cswikiversity", "dawikibooks", "dewikinews", "dewikiquote", "dtywiki", "enwikibooks", "enwikiquote", "etwiki", "etwikiquote", "euwikibooks", "extwiki", "fawikibooks", "ffwiki", "fiwikinews", "fiwiktionary", "fjwiktionary", "frwikibooks", "frwikiversity", "ganwiki", "gdwiki", "glwikiquote", "gnwiktionary", "gotwiki", "guwikisource", "gvwiki", "hewikinews", "hiwikibooks", "hiwiki", "hifwiki", "hrwiki", "iawikibooks", "idwikisource", "ikwiki", "incubatorwiki", "jamwiki", "kaawiki", "kabwiki", "kbdwiki", "kgwiki", "kiwiki", "knwikiquote", "kswiki", "kuwikibooks", "kuwiktionary", "kwwiki", "kywikiquote", "liwikisource", "ltwikibooks", "ltwikiquote", "mdfwiki", "mgwikibooks", "miwiki", "mlwikiquote", "mrwikibooks", "mrwikiquote", "mrwiktionary", "mtwiki", "myvwiki", "nlwikibooks", "nowikibooks", "nowiktionary", "novwiki", "nvwiki", "olowiki", "omwiki", "oswiki", "plwikisource", "plwikivoyage", "ptwikiversity", "quwiktionary", "rowikiquote", "rowikisource", "ruwikibooks", "ruwikimedia", "ruwikinews", "ruwiktionary", "sahwiki", "sewiki", "sgwiki", "slwiktionary", "sqwikinews", "srwikibooks", "srwikinews", "srnwiki", "sswiki", "suwiki", "svwikiquote", "svwikisource", "swwiki", "szlwiki", "szywiki", "shywiktionary", "tcywiki", "tewikisource", "tewiktionary", "thwiki", "tiwiki", "tlwiki", "ttwiktionary", "ukwikinews", "ukwiktionary", "urwikiquote", "wuuwiki", "xalwiki", "zhwikibooks", "acewiki", "afwikiquote", "anwiktionary", "arwikibooks", "azwikiquote", "azwiktionary", "bewiki", "bewiktionary", "bgwiki", "bgwikiquote", "bgwiktionary", "bjnwiki", "bpywiki", "brwikisource", "bswikinews", "bugwiki", "cdowiki", "chrwiki", "chywiki", "ckbwiki", "cswikibooks", "cswikisource", "dawiktionary", "dsbwiki", "elwikinews", "elwikiversity", "elwiktionary", "eowiktionary", "etwikisource", "etwiktionary", "fawikinews", "fiwikibooks", "fiwikiversity", "fiwikivoyage", "fiu_vrowiki", "fowiki", "fowikisource", "fywikibooks", "gagwiki", "glkwiki", "guwikiquote", "guwiktionary", "hawiki", "hywiki", "hywikiquote", "idwiktionary", "ilowiki", "iowiktionary", "iswiki", "jvwiktionary", "kawikibooks", "kkwikibooks", "kkwiktionary", "kmwiki", "kowikiversity", "koiwiki", "krcwiki", "kwwiktionary", "lezwiki", "lgwiki", "liwikibooks", "liwiktionary", "lnwiktionary", "mhrwiki", "mnwiki", "mnwwiki", "mnwiktionary", "mswikibooks", "mwlwiki", "newikibooks", "nlwikiquote", "nowikiquote", "nsowiki", "nycwikimedia", "orwiktionary", "pawikibooks", "pawikisource", "pflwiki", "pihwiki", "plwiktionary", "pnbwiki", "pntwiki", "pswiktionary", "rowiktionary", "ruwikiversity", "rwwiktionary", "sawikibooks", "sawikiquote", "sdwiki", "siwikibooks", "siwiktionary", "slwikiquote", "slwikiversity", "specieswiki", "srwiktionary", "suwikiquote", "svwiktionary", "tawikibooks", "tewikiquote", "tgwikibooks", "trwikibooks", "trwikimedia", "trwikinews", "trwikiquote", "trwikisource", "trwiktionary", "tswiki", "ukwikibooks", "uzwikiquote", "vewiki", "vecwiktionary", "viwikiquote", "viwiktionary", "wawiki", "xmfwiki", "yiwiki", "zeawiki", "zhwikinews", "zhwikisource", "zh_min_nanwiktionary", "afwikibooks", "akwiki", "arwikiquote", "arzwiki", "aswiki", "azwikibooks", "azwikisource", "bawiki", "bclwiki", "bewikibooks", "bewikiquote", "bgwikisource", "bhwiki", "bnwikibooks", "bnwiktionary", "bowiki", "brwikiquote", "cawikinews", "cawikisource", "cbk_zamwiki", "cewiki", "chwiki", "chrwiktionary", "cowiki", "cvwikibooks", "cywikibooks", "cywikiquote", "cywikisource", "cywiktionary", "dawikiquote", "dewikiversity", "dkwikimedia", "dzwiki", "elwikibooks", "eowikiquote", "euwiki", "euwiktionary", "fawikisource", "fiwikiquote", "frwikiquote", "frrwiki", "fywiktionary", "gawiktionary", "gdwiktionary", "glwiki", "glwikisource", "gnwiki", "gvwiktionary", "hawiktionary", "hakwiki", "hawwiki", "hiwikiquote", "hiwikisource", "hrwikibooks", "hrwikiquote", "hywikisource", "igwiki", "iswikibooks", "iswikiquote", "iswikisource", "iuwiki", "iuwiktionary", "jbowiktionary", "kawikiquote", "klwiktionary", "knwikisource", "knwiktionary", "kowikinews", "kowikiquote", "kowiktionary", "kswiktionary", "kshwiki", "kywiktionary", "lawikibooks", "lawikiquote", "lbwiktionary", "lbewiki", "liwikiquote", "lnwiki", "lowiki", "lowiktionary", "ltwiki", "miwiktionary", "minwiki", "mkwikisource", "mkwiktionary", "mlwikibooks", "mlwikisource", "mswiki", "mtwiktionary", "mywiki", "mywiktionary", "nawiki", "nahwiki", "nlwikimedia", "nowikinews", "nrmwiki", "nywiki", "ocwikibooks", "ocwiktionary", "omwiktionary", "orwiki", "pawiki", "pawiktionary", "pcdwiki", "plwikimedia", "rnwiki", "rowikibooks", "roa_rupwiki", "roa_rupwiktionary", "sgwiktionary", "shwiktionary", "skwikisource", "slwikisource", "smwiki", "gcrwiki", "smwiktionary", "sowiktionary", "sqwiktionary", "srwikiquote", "sswiktionary", "tawiktionary", "tewikibooks", "tetwiki", "tiwiktionary", "tkwiktionary", "tlwikibooks", "tlwiktionary", "tnwiktionary", "tpiwiktionary", "tswiktionary", "ttwikibooks", "tumwiki", "uawikimedia", "nqowiki", "ugwiktionary", "ukwikisource", "urwikibooks", "urwiktionary", "uzwiktionary", "wawiktionary", "wowikiquote", "wowiktionary", "zawiki", "zh_min_nanwikisource", "zuwiki", "zuwiktionary", "arwikimedia", "bdwikimedia", "bewikimedia", "brwikimedia", "cawikimedia", "cowikimedia", "eewikimedia", "fiwikimedia", "mkwikimedia", "mxwikimedia", "nowikimedia", "sewikimedia", "ptwikimedia", "bawikibooks", "itwikibooks", "itwikinews", "jawikinews", "nlwikinews", "liwikinews", "furwiki", "lijwiki", "roa_tarawiki", "scwiki", "lrcwiki", "gomwiki", "atjwiki", "banwiki", "kbpwiki", "gorwiki", "inhwiki", "lfnwiki", "satwiki", "shnwiki", "jawikiquote", "sahwikiquote", "jawikisource", "vecwikisource", "euwikisource", "pmswikisource", "itwikiversity", "jawikiversity", "hiwikiversity", "zhwikiversity", "frwikivoyage", "itwikivoyage", "nlwikivoyage", "ruwikivoyage", "svwikivoyage", "eswikivoyage", "rowikivoyage", "elwikivoyage", "hewikivoyage", "ukwikivoyage", "viwikivoyage", "zhwikivoyage", "hiwikivoyage", "bnwikivoyage", "pswikivoyage", "cowiktionary", "hifwiktionary", "yuewiktionary", "wikimaniawiki"];
    const active_users = ["alswikibooks", "jawikibooks", "enwikinews", "cebwiki", "emlwiki", "mkwiki", "napwiki", "nnwiki", "pmswiki", "scnwiki", "shwiki", "vecwiki", "warwiki", "azbwiki", "alswikiquote", "itwikiquote", "frwikisource", "itwikisource", "dewikivoyage", "alswiktionary", "itwiktionary", "jawiktionary", "mgwiktionary", "mowiktionary", "scnwiktionary", "simplewiktionary", "zhwiktionary"];

    const edits_history = [];
    const deleteReasonsArray = ["Nonsense", "Vandalism", "Spam", "Test page", "Empty page", "No useful content", "Out of project scope"];
    var vandalsReport = [];
    var countConnectAttemp = 0;

    // ===> $scope variables
    $scope.oresWikiList = {}; // list of ores wiki.
    $scope.edits = []; // for edits in queue.
    $scope.users = []; // for online users.
    $scope.offlineUsers = offlineUsers; // for offline users.
    
    // ===> Currently opened edit
    $scope.selectedEdit = {};
    $scope.getSelectedEdit = () => { return {...$scope.selectedEdit} };
    $scope.setSelectedEdit = (edit) => { 
        $scope.selectedEdit = {...edit};
        $scope.selectedEdit.config = getConfig(edit.wiki);
        $scope.selectedEdit.settings = {
            checkWarnDelete: (defaultDeleteList.indexOf(edit.wiki) !== -1)? true: false,
            checkWarn: (defaultWarnList.indexOf(edit.wiki) !== -1)? true: false
        };
    };

    $scope.selectTop = function() { 
        if ($scope.edits.length > 0) {
            $scope.select($scope.edits[0]);
        } else document.getElementById('btn-home').click();
    }
    // ===> Selecting an edit from queue.
    $scope.select = function (edit) {
        if (!$scope.recentChange.isConnected) $scope.recentChange.connect();
        disableNewUI();
        firstClickEdit = true;
        document.getElementById("queue").classList.add("disabled"); // disable queue during change diff
        homeBtn(false);
        if (document.getElementById('eqBody').classList.contains('eq__body__active')) toggleMDrawer();

        if ($scope.selectedEdit !== null && i === 0) {
            if (edits_history.length === 6) edits_history.splice(5, 1);
            edits_history.unshift($scope.getSelectedEdit());
        }
        i = 0;
        $scope.setSelectedEdit(edit);
        loadingEdits++;
        enableLoadingDiffUI();
        loadDiff($scope.selectedEdit);
        $scope.edits.splice($scope.edits.indexOf(edit), 1);
    };

    // ===> To navigate back into edit_history.
    $scope.Back = function () {
        if (edits_history.length > 0 && edits_history.length - 1 >= i) disableNewUI();
        else return;
        homeBtn(false);
        if (i === 0) {
            if (edits_history.length === 6) edits_history.splice(5, 1);
            edits_history.unshift($scope.getSelectedEdit());
            i = i + 1;
        }

        $scope.setSelectedEdit(edits_history[i]);
        loadDiff($scope.selectedEdit);
        i = i + 1;
    }

    $scope.editColor = function (edit) {
        if (vandals.indexOf(edit.user) !== -1 || (vandals.indexOf(edit.user) !== -1 && suspects.indexOf(edit.user) !== -1)) {
            if (dirLang === "rtl") {
                return {color: "red", display: "flex", 'align-items': 'center'}
            } else {
                return {color: "red"};
            }
        } else if (suspects.indexOf(edit.user) !== -1) {
            if (dirLang === "rtl") {
                return {color: "pink", display: "flex", 'align-items': 'center'}
            } else
                return {color: "pink"};

        }
        if (dirLang === "rtl")
            return {display: "flex", 'align-items': 'center'}
    };
    $scope.byteCountColor = function (byteCount) {
        if (byteCount == 0) return {opacity: "0.6", paddingRight: '4px'};
        if (byteCount > 0) if (byteCount < 500) return {color: "var(--tc-positive)", paddingRight: '4px'};
            else return {color: "var(--tc-positive)", fontWeight: "bold", paddingRight: '4px'};
        if (byteCount > -500) return {color: "hsl(0, 50%, 56%)", paddingRight: '4px'};
        return {color: "hsl(0, 50%, 56%)", fontWeight: "bold", paddingRight: '4px'};
    }
    $scope.descriptionColor = function (description) {
        if ($scope.selectedEdit.settings.checkWarn === true && description.warn !== null && typeof description.warn !== "undefined" && description.warn !== "")
            return {color: "var(--tc-positive)"};
        else {
            if (description.global === true) {
                return {color: "var(--tc-secondary)"};
            }
            if (typeof description.global == "undefined")
                return {color: "var(--tc-secondary-low)"};
        }
    };
    $scope.speedyColor = function (speedy) {
        if ($scope.selectedEdit.settings.checkWarnDelete === true && speedy.warn !== null && typeof speedy.warn !== "undefined" && speedy.warn !== "")
            return {color: "var(--tc-positive)"};
        else
            return {color: "var(--link-color)"};
    };
    
    // ===> To open edit on wiki.
    $scope.browser = function () {
        if (typeof $scope.selectedEdit.new === "undefined") return;
        var url;
        if ($scope.selectedEdit.old !== null) url = $scope.selectedEdit.server_url + $scope.selectedEdit.script_path + "/index.php?diff=" + $scope.selectedEdit.new + "&oldid=" + $scope.selectedEdit.old + "&uselang=" + languageIndex + "&redirect=no&mobileaction=toggle_view_desktop";
        else url = $scope.selectedEdit.server_url + "?uselang=" + languageIndex + "&redirect=no&mobileaction=toggle_view_desktop";
        var diffWindow = window.open(url, "_blank");
        diffWindow.location;
        diffWindow.focus();
    }

    // ===> Open to edit source.
    $scope.openEditSource = async function () {
        if (typeof $scope.selectedEdit.new === "undefined") return;
        
        document.getElementById("editFormBody").classList.add("disabled");
        document.getElementById('textpage').value = "";
        document.getElementById('textpage').style.display = 'none';
        document.getElementById('editSourceLoadingAnim').style.display = 'unset';

        await isLatestRevision($scope.selectedEdit.server_url, $scope.selectedEdit.script_path, $scope.selectedEdit.title, $scope.selectedEdit.new)
        .then(async edit => {
            if (edit.isLatest) {
                await getEditSource($scope.selectedEdit.server_url, $scope.selectedEdit.script_path, $scope.selectedEdit.new)
                .then(editSource => {
                    document.getElementById('textpage').value = editSource;
                    $scope.selectedEdit.timestamp = edit.revision.timestamp;
                })
                .catch(err => ESOpeningError(err));
            } else {
                if ($scope.selectedEdit.old == null) {
                    $scope.selectedEdit.old = $scope.selectedEdit.new;
                    if (i > 0) edits_history[i - 1]["old"] = $scope.selectedEdit.new;
                }
                
                $scope.selectedEdit.user = edit.revision.user;
                $scope.selectedEdit.new = edit.revision.revid;
                $scope.selectedEdit.comment = edit.revision.comment;
                if (i > 0) {
                    edits_history[i - 1]["user"] = edit.revision.user;
                    edits_history[i - 1]["new"] = edit.revision.revid;
                    edits_history[i - 1]["comment"] = edit.revision.comment;
                }
                await getDiff($scope.selectedEdit.server_url, $scope.selectedEdit.script_path, $scope.selectedEdit.wiki, $scope.selectedEdit.new, $scope.selectedEdit.old)
                .then(async diff => {
                    await getUserInfo($scope.selectedEdit.server_url, $scope.selectedEdit.script_path, $scope.selectedEdit.user)
                    .then(user => {
                        if (user.editcount === 'undefined') {
                            $scope.selectedEdit.isIp = "ip";
                            if (i > 0) edits_history[i - 1]["isIp"] = "ip";
                        } else {
                            $scope.selectedEdit.isIp = "registered";
                            if (i > 0) edits_history[i - 1]["isIp"] = "registered";
                        }
                        loadDiffDesc($scope.selectedEdit);
                        document.getElementById('page').srcdoc = diff;
                        
                        throw useLang["error-cant-perform"];
                    }).catch(err => ESOpeningError(err));
                }).catch(err => ESOpeningError(err));
            }
        }).catch(err => ESOpeningError(err));

        function ESOpeningError(err) {
            closePW();
            createDialog({
                parentId: 'angularapp', id: 'editSourceErrorDialog',
                title: useLang["error-loading-title"], removable: true,
                alert: {
                    emoji: '⚠️',
                    message: err
                },
                buttons: [{ type: 'accent', title: useLang["alright"], remove: true }]
            });
        }

        document.getElementById('textpage').scrollTop = 0;
        document.getElementById('summaryedit').value = "";
        document.getElementById('textpage').style.display = 'unset';
        document.getElementById('editSourceLoadingAnim').style.display = 'none';
        document.getElementById("editFormBody").classList.remove("disabled");
    }

    // ===> open Tag panel
    $scope.openTagPanel = function () {
        if (typeof $scope.selectedEdit.new === "undefined") return;

        const warnBoxDelete = document.getElementById('warn-box-delete');
        warnBoxDelete.parentElement.parentElement.classList.add('disabled');
        $scope.selectedEdit.config.speedy.forEach(elS => {
            if (typeof elS.warn !== "undefined") warnBoxDelete.parentElement.parentElement.classList.remove('disabled');
        });

        if (defaultDeleteList.indexOf($scope.selectedEdit.wiki) !== -1) {
            warnBoxDelete.classList.add('t-btn__active');
            $scope.selectedEdit.settings.checkWarnDelete = true;
        } else {
            warnBoxDelete.classList.remove('t-btn__active');
            $scope.selectedEdit.settings.checkWarnDelete = false;
        }

        document.getElementById('btn-group-addToGSR').classList.add('disabled');
        document.getElementById('addToGSR').classList.remove('i-checkbox__active');
        const GSR_description = document.getElementById('addToGSR-description');
        GSR_description.textContent = "";
        if (Object.keys(activeSysops).find(key => key === $scope.selectedEdit.wiki)) {
            const createGSRDesc = (color, text) => bakeEl({
                type: 'span', child:[
                    bakeEl({ type: 'span', att: { style: `display: inline-block; margin-right: 8px; width: 8px; height: 8px; background-color: ${color}; border-radius: 50%;` } }),
                    text
                ]
            });
            if (activeSysops[$scope.selectedEdit.wiki][1] === 0) {
                GSR_description.append(createGSRDesc('var(--bc-positive)', useLang["sysops-active"].replace("$1", activeSysops[$scope.selectedEdit.wiki][3]).replace("$2", activeSysops[$scope.selectedEdit.wiki][2])));
                document.getElementById('btn-group-addToGSR').classList.remove('disabled');
            } else if (activeSysops[$scope.selectedEdit.wiki][1] === 1) {
                GSR_description.append(createGSRDesc('orange', useLang["sysops-active"].replace("$1", activeSysops[$scope.selectedEdit.wiki][3]).replace("$2", activeSysops[$scope.selectedEdit.wiki][2]) + ((userRole == "GS" || userRole == "S") ? "" : (" " + useLang["sysops-wait"]))));
                document.getElementById('btn-group-addToGSR').classList.remove('disabled');
            } else {
                if (activeSysops[$scope.selectedEdit.wiki][3] == "3+")
                    GSR_description.append(createGSRDesc('var(--bc-negative)', useLang["sysops-more-than-3"].replace("$1", activeSysops[$scope.selectedEdit.wiki][2])));
                else
                    GSR_description.append(createGSRDesc('var(--bc-negative)', useLang["sysops-unknown"].replace("$1", activeSysops[$scope.selectedEdit.wiki][3].replace("?", "unknown")).replace("$2", activeSysops[$scope.selectedEdit.wiki][2])));
            }
        } else GSR_description.append(useLang["sysops-not-gs"]);
        openPO('tagPanel');
    }

    // ===> on selected speedy delete
    $scope.selectSpeedy = function(speedy) {
        if (!speedy.hasOwnProperty('template')) return;
        if (speedy.template === null || speedy.template === "") return;

        var warnDelete = null;
        var speedySection = null;
        if (typeof speedy.warn !== 'undefined' && speedy.warn !== null && speedy.warn !== '') warnDelete = speedy.warn;
        if (typeof speedy.sectionWarn !== 'undefined' && speedy.sectionWarn !== null && speedy.sectionWarn !== '') speedySection = speedy.sectionWarn.replace(/\$1/gi, $scope.selectedEdit.title);
        
        const SEdit = {...$scope.selectedEdit};
        if (SEdit.wiki + SEdit.new !== callbackDiffNow) {
            alert("Error: Non-sync. Please report the error to developers. Details: " + SEdit.wiki + SEdit.new + " " + callbackDiffNow)
            return;
        }
        getEditSource(SEdit.server_url, SEdit.script_path, SEdit.new)
        .then(editSourceData => {
            const editSource = speedy.template.replace(/\$1/gi, userSelf) + editSourceData;
            const editSummary = SEdit.config.speedySummary;
            const speedyLabel = speedy.name;

            $scope.doEdit(SEdit, editSource, editSummary, speedyLabel, speedySection, warnDelete, true);
        })
        .catch(err => createNotify({
            img: '/img/warning-filled.svg',
            title: useLang["error-speedy-title"],
            content: err,
            removable: true
        }));
        closePO();
        $scope.selectTop();
    }

    $scope.openCustomRevertPanel = function () {
        if ($scope.selectedEdit.old === null || isNaN($scope.selectedEdit.old) === true) return;
        document.getElementById('credit').value = "";
        openPO('customRevert');
    
        const warnBtn = document.getElementById('warn-box');
        if ($scope.selectedEdit.config.warn !== null && typeof $scope.selectedEdit.config.warn !== "undefined") {
            warnBtn.parentElement.parentElement.classList.remove('disabled');
            if (defaultWarnList.indexOf($scope.selectedEdit.wiki) !== -1) {
                warnBtn.classList.add('t-btn__active');
                $scope.selectedEdit.settings.checkWarn = true;
            } else {
                warnBtn.classList.remove('t-btn__active');
                $scope.selectedEdit.settings.checkWarn = false;
            }
        } else {
            warnBtn.parentElement.parentElement.classList.add('disabled');
        }
    }
    
    $scope.selectRollbackDescription = function (description) {
        if (!description.hasOwnProperty('summary')) return;
        if (description.summary === null || description.summary === "") return;
        if (!($scope.selectedEdit.settings.checkWarn === true && 
            $scope.selectedEdit.config.warn !== null && 
            typeof description.warn !== "undefined" && 
            typeof $scope.selectedEdit.config.warn[description.warn] !== "undefined")) description.warn = null;
    
        description.withoutSection = description.withoutSection || false;
        $scope.doRevert(description);
    }


    // ===> on saving the edited article
    $scope.saveEdit = function() {
        const editSource = document.getElementById('textpage').value;
        var editSummary = "";
        const ESElement = document.getElementById('summaryedit');
        if (ESElement.value !== '' && ESElement.value !== null && typeof ESElement !== 'undefined') editSummary = ESElement.value;

        if ($scope.selectedEdit.wiki + $scope.selectedEdit.new !== callbackDiffNow) {
            alert("Error: Non-sync. Please report the error to developers. Details: " + $scope.selectedEdit.wiki + $scope.selectedEdit.new + " " + callbackDiffNow)
            return;
        }
        $scope.doEdit({...$scope.selectedEdit}, editSource, editSummary);
        closePW();
        $scope.selectTop();
    }

    // ===> do the edit.
    $scope.doEdit = function(SEdit, editSource, editSummary, speedyLabel, speedySection, warnDelete, isDelete = false) {
        document.getElementById('textpage').value = "";
        document.getElementById('summaryedit').value = "";

        isLatestRevision(SEdit.server_url, SEdit.script_path, SEdit.title, SEdit.new)
        .then(edit => {
            SEdit.timestamp = edit.revision.timestamp;
            if (edit.isLatest) performEdit(SEdit.server_url, SEdit.script_path, SEdit.wiki, SEdit.title, SEdit.timestamp, editSource, editSummary, isDelete)
            .then(async editData => {
                const isReportGSR = document.getElementById("addToGSR").classList.contains("i-checkbox__active") && isDelete === true;
                
                if (isReportGSR) {
                    speedyLabel = deleteReasonsArray.includes(speedyLabel)? speedyLabel: "none";
                    await reportGSR(SEdit.server_url, SEdit.wiki, SEdit.title, speedyLabel)
                    .then(() => createNotify({
                        img: '/img/warning-filled.svg',
                        title: useLang["gsr-success-title"],
                        content: useLang["gsr-success-content"].replace("$1", `[[${SEdit.title}||${SEdit.server_url}${SEdit.script_path}/index.php?title=${SEdit.title}&action=history]]`),
                        removable: true
                    })).catch(err => createNotify({
                        img: '/img/warning-filled.svg',
                        title: useLang["gsr-fail-title"],
                        content: "Error 3.1: " + err,
                        removable: true
                    }));
                }
                if (isDelete) {
                    suspects.push(SEdit.user);
                    var rawSend = {"type": "synch", "wiki": SEdit.wiki, "nickname": SEdit.user, "vandal": "2", "page": SEdit.title};
                    connectTalk.talkSendInside(rawSend);
                }
                if (isDelete && SEdit.settings.checkWarnDelete && warnDelete !== null && SEdit.config.speedyWarnSummary !== null) {
                    await getFirstEditor(SEdit.server_url, SEdit.script_path, SEdit.wiki, SEdit.title, SEdit.user)
                    .then(firstEditor => notifyEditor(SEdit.server_url, SEdit.script_path, SEdit.wiki, 
                        warnDelete.replace(/\$1/gi, SEdit.title).replace(/\$2/gi, SEdit.user).replace(/\$3/gi, userSelf),
                        SEdit.config.speedyWarnSummary.replace(/\$1/gi, SEdit.title),
                        speedySection, firstEditor
                    )).then((isNotifyed) => {
                        if (typeof isNotifyed === 'undefined') return
                        createNotify({
                            img: '/img/warning-filled.svg',
                            title: useLang["warn-success-title"],
                            content: useLang["warn-success-content"].replace("$1", `[[${SEdit.user}||${SEdit.server_url}/wiki/Special:Contributions/${SEdit.user}]]`).replace("$2", `[[${SEdit.title}||${SEdit.server_url}${SEdit.script_path}/index.php?title=${SEdit.title}&action=history]]`),
                            removable: true
                        });
                    }).catch(err => createNotify({
                        img: '/img/warning-filled.svg',
                        title: useLang["warn-fail-title"],
                        content: 'Error: 3.2' + err,
                        removable: true
                    }));
                }
                $scope.reqSuccessNotify(editData, SEdit, 'edit');
            }).catch(err => createNotify({
                img: '/img/warning-filled.svg',
                title: useLang["edit-fail-title"],
                content: "Error 2: " + err,
                removable: true
            }));
            else return bindLatestRevision(SEdit, edit.revision)
        }).then(latestEdit => {
            if (typeof latestEdit === 'undefined') return;
            createNotify({
                img: '/img/edit-filled.svg',
                title: useLang["edit-fail-title"],
                content: useLang["error-cant-perform"],
                removable: true,
                buttons: [{
                    title: useLang["view-latest"],
                    remove: true, type: 'positive',
                    onClick: () => { closePO(); $scope.select(latestEdit); }
                }, { title: useLang["cancel"], remove: true }]
            })
        }).catch(error => createNotify({
            img: '/img/warning-filled.svg',
            title: useLang["edit-fail-title"],
            content: "Error 1: " + error,
            removable: true
        }));
    }

    $scope.doRevert = function (description = {}) {
        const SEdit = {...$scope.selectedEdit};
        if (SEdit.old == null || isNaN(SEdit.old) === true) return;
        if (SEdit.wiki + SEdit.new !== callbackDiffNow) {
            alert("Error: Non-sync. Please, tell about that error to developers. Details: " + SEdit.wiki + SEdit.new + " " + callbackDiffNow + " " + synccheck )
            return;
        }
        var rollbackSummary = "";
        const RSInput = document.getElementById('credit');
        if (description.summary !== null && typeof description.summary !== "undefined") rollbackSummary = description.summary.replace(/\$7/gi, $scope.selectedEdit.title);
        else if (RSInput.value !== "" && RSInput.value !== null && document.getElementById('customRevert').classList.contains('po__active')) {
            rollbackSummary = RSInput.value;
        }
        RSInput.value = "";
        closePO();
    
        isLatestRevision(SEdit.server_url, SEdit.script_path, SEdit.title, SEdit.new)
        .then(edit => {
            if (!edit.isLatest) return bindLatestRevision(SEdit, edit.revision);
            SEdit.timestamp = edit.revision.timestamp;
            checkMultipleEdits(SEdit.server_url, SEdit.script_path, SEdit.user, SEdit.new)
            .then(async isMulitpleEdits => {
                if (isMulitpleEdits && checkMode === 1) {
                    const lastUserRevId = await getLastUserRevId(SEdit.server_url, SEdit.script_path, SEdit.title, SEdit.user, SEdit.new);
                    if (lastUserRevId !== SEdit.old) return lastUserRevId;
                }
                var RBMode = document.getElementById("treatUndo").classList.contains("i-checkbox__active")? "undo": "rollback";
                if (isGlobalModeAccess === true && local_wikis.includes(SEdit.wiki) === false) RBMode = 'undo';
    
                const revertData = {
                    rbmode: RBMode,
                    basetimestamp: SEdit.timestamp,
                    page: SEdit.title,
                    id: SEdit.new,
                    user: SEdit.user,
                    wiki: SEdit.wiki,
                    project: SEdit.server_url + SEdit.script_path + '/api.php'
                };
                if (rollbackSummary === "") {
                    if (RBMode === 'undo') {
                        var undoSummary = 'Undid edits by [[Special:Contribs/$2|$2]] ([[User talk:$2|talk]]) to last version by $1';
                        if (SEdit.config.hasOwnProperty('defaultUndoSummary'))
                        if (SEdit.config['defaultUndoSummary'] !== null && SEdit.config['defaultUndoSummary'] !== "")
                            undoSummary = SEdit.config['defaultUndoSummary'];
                        revertData.summary = undoSummary.replace(/\$2/gi, SEdit.user).replace(/\$3/gi, SEdit.title);
                    }
                } else {
                    if (RBMode === 'undo') {
                        var undoPrefix = 'Undid edits by [[Special:Contribs/$2|$2]] ([[User talk:$2|talk]]) to last version by $1: '.replace(/\$2/gi, SEdit.user).replace(/\$3/gi, SEdit.title);
                        if (SEdit.config.hasOwnProperty('defaultUndoPrefix'))
                        if (SEdit.config['defaultUndoPrefix'] !== null && SEdit.config['defaultUndoPrefix'] !== "")
                            undoPrefix = SEdit.config['defaultUndoPrefix'].replace(/\$2/gi, SEdit.user).replace(/\$3/gi, SEdit.title);
                        revertData.summary = undoPrefix + rollbackSummary;
                    } else {
                        var rollbackPrefix = 'Reverted edits by [[Special:Contribs/$2|$2]] ([[User talk:$2|talk]]) to last version by $1: ';
                        if (SEdit.config.hasOwnProperty('defaultRollbackPrefix'))
                        if (SEdit.config['defaultRollbackPrefix'] !== null && SEdit.config['defaultRollbackPrefix'] !== "")
                            rollbackPrefix = SEdit.config['defaultRollbackPrefix'].replace(/\$7/gi, SEdit.title);
                        revertData.summary = rollbackPrefix + rollbackSummary;
                    }
                }
                const rawV = { user: SEdit.user, project: SEdit.server_url + SEdit.script_path, wiki: SEdit.wiki, oldid: SEdit.old, newid: SEdit.new };
                vandalsReport.push(rawV);
                suspects.push(SEdit.user);
                const rawSend = {"type": "synch", "wiki": SEdit.wiki, "nickname": SEdit.user, "vandal": rollbackSummary === ""? "1": "2", "page": SEdit.title};
                connectTalk.talkSendInside(rawSend);
    
                performRollback(revertData)
                .then(rollbackData => {
                    $scope.$apply(() => $scope.edits.map((e, index) => {
                        if (e.wiki === SEdit.wiki && e.title === SEdit.title) {
                            $scope.edits.splice($scope.edits.indexOf($scope.edits[index]), 1);
                        }
                    }));
    
                    $scope.reqSuccessNotify(rollbackData, SEdit, 'rollback', RBMode);
                    if (description.warn === null || typeof description.warn === 'undefined') return;
                    $scope.doWarn(rollbackData, SEdit, description);
                }).catch(err => createNotify({
                    img: '/img/warning-filled.svg',
                    title: useLang["rollback-fail-title"],
                    content: err,
                    removable: true
                }));
            }).then(revId => {
                if (typeof revId === 'undefined') return;
                SEdit.old = revId;
                createNotify({
                    img: "/img/rollback-filled.svg",
                    title: useLang["rollback-fail-title"],
                    content: useLang["rollback-fail-content"].replace("$1", `[[${SEdit.user}||${SEdit.server_url}/wiki/Special:Contributions/${SEdit.user}]]`).replace("$2", `[[${SEdit.title}||${SEdit.server_url}${SEdit.script_path}/index.php?title=${SEdit.title}&action=history]]`),
                    removable: true,
                    buttons: [{
                        title: useLang["load-history"],
                        type: 'positive', remove: true,
                        onClick: () => { closePO(); $scope.select(SEdit); }
                    }, {title: useLang["cancel"], remove: true }]
                });
            }).catch(err => createNotify({
                img: '/img/warning-filled.svg',
                title: useLang["rollback-fail-title"],
                content: err,
                removable: true
            }));
        }).then(latestEdit => {
            if (typeof latestEdit === 'undefined') return;
            createNotify({
                img: "/img/rollback-filled.svg", 
                title: useLang["rollback-fail-title"],
                content: useLang["rollback-fail-not-latest"].replace("$1", `[[${latestEdit.title}||${latestEdit.server_url}${latestEdit.script_path}/index.php?title=${latestEdit.title}&action=history]]`),
                removable: true,
                buttons: [{
                    title: useLang["view-latest"],
                    remove: true, type: 'positive',
                    onClick: () => { closePO(); $scope.select(latestEdit); }
                }, { title: useLang["cancel"], remove: true }]
            })
        }).catch(err => createNotify({
            img: '/img/warning-filled.svg',
            title: useLang["rollback-fail-title"],
            content: err,
            removable: true
        }));
        $scope.selectTop();
    }

    $scope.doWarn = function (rollbackData, SEdit, description) {
        
        if (SEdit.config.warn === null ||
            typeof SEdit.config.warn['summaryWarn'] === 'undefined' || SEdit.config.warn['summaryWarn'] === null || SEdit.config.warn['summaryWarn'] === "" ||
            typeof SEdit.config.warn['sectionWarn'] === 'undefined' || SEdit.config.warn['sectionWarn'] === null || SEdit.config.warn['sectionWarn'] === "" ||
            typeof SEdit.config.warn['countWarn'] === 'undefined' || SEdit.config.warn['countWarn'] === null || SEdit.config.warn['countWarn'] === "" ||
            typeof SEdit.config.warn[description.warn] === 'undefined' || SEdit.config.warn[description.warn] === null || SEdit.config.warn[description.warn] === "" ||
            typeof SEdit.config.warn[description.warn][0]['tags'] === 'undefined' || SEdit.config.warn[description.warn][0]['tags'] === null || SEdit.config.warn[description.warn][0]['tags'] === "" ||
            typeof SEdit.config.warn[description.warn][0]['templates'] === 'undefined' || SEdit.config.warn[description.warn][0]['templates'] === null || SEdit.config.warn[description.warn][0]['templates'] === ""
        ) return createNotify({
            img: '/img/warning-filled.svg',
            title: 'Warn failed!',
            content: `Warn for ${SEdit.title} is not being send. Maybe config are not define correctly`,
            removable: true
        });

        const timeWarn = moment.utc().subtract('10', 'days').format('YYYY-MM-DDTHH:mm:ss') + "Z";
        var maxWarnCount = Number(SEdit.config.warn['countWarn']) - 1;
        var warnMonth = moment.utc().format('MMMM');

        if (typeof SEdit.config.warn['months'] !== 'undefined')
        if (typeof SEdit.config.warn['months'][0][parseInt(moment.utc().format('MM'))] !== 'undefined')
        if (SEdit.config.warn['months'][0][parseInt(moment.utc().format('MM'))] !== null)
            warnMonth = SEdit.config.warn['months'][0][parseInt(moment.utc().format('MM'))];
        
        const tags = [];
        const templates = [];

        for (let tagKey in SEdit.config.warn[description.warn][0]['tags'][0]) tags.push(SEdit.config.warn[description.warn][0]['tags'][0][tagKey]);
        for (let templateKey in SEdit.config.warn[description.warn][0]['templates'][0]) templates.push(SEdit.config.warn[description.warn][0]['templates'][0][templateKey]);

        getUrlToCountWarn(SEdit.server_url, SEdit.script_path, SEdit.user, timeWarn)
        .then(url => getExistingWarnCount(url, tags))
        .then(async warnCount => {
            if (warnCount === -1 || (warnCount !== -1 && warnCount < maxWarnCount)) {
                warnCount = warnCount + 1;
                if (templates[warnCount] === "undefined") throw useLang["warn-perform-fail"].replace("$1", SEdit.title);
                await sendWarning(SEdit.server_url, SEdit.script_path, SEdit.wiki, SEdit.new, SEdit.old, SEdit.title, SEdit.user, warnCount, templates, warnMonth, SEdit.config.warn['summaryWarn'], SEdit.config.warn['sectionWarn'], (description.withoutSection || false));
                createNotify({
                    img: '/img/warning-filled.svg',
                    title: useLang["warn-performed-title"],
                    content: useLang["warn-performed-content"].replace("$1", `[[${SEdit.user}||${SEdit.server_url}/wiki/Special:Contributions/${SEdit.user}]]`).replace("$2", `[[${SEdit.title}||${SEdit.server_url}${SEdit.script_path}/index.php?title=${SEdit.title}&action=history]]`),
                    removable: true
                });
            } else if (warnCount === maxWarnCount) $scope.doReport(SEdit);
        }).catch(err => createNotify({
            img: '/img/warning-filled.svg',
            title: useLang["warn-fail-title"],
            content: err,
            removable: true
        }));
    }

    $scope.doReport = function (SEdit) {
        if (!(checkKey('autoReport', SEdit.config.report) &&
            SEdit.config.report['autoReport'] === true &&
            checkKey('pageReport', SEdit.config.report) &&
            checkKey('regexReport', SEdit.config.report) &&
            (checkKey('sectionReport', SEdit.config.report) || (checkKey('withoutSectionReport', SEdit.config.report) && SEdit.config.report['withoutSectionReport'] === true)) &&
            checkKey('textReport', SEdit.config.report))
        ) return createNotify({
            img: '/img/warning-filled.svg',
            title: useLang["report-fail-title"],
            content: useLang["report-fail-content"].replace("$1", SEdit.title),
            removable: true
        });

        var pageReport = SEdit.config.report['pageReport'];
        var regexReport = SEdit.config.report['regexReport'].replace(/\$1/gi, SEdit.user);
        var regexReport2 = "";
        if (checkKey('regexReport2', SEdit.config.report)) regexReport2 = SEdit.config.report['regexReport2'].replace(/\$1/gi, SEdit.user);
        var textReport = SEdit.config.report['textReport'].replace(/\$1/gi, SEdit.user);
        if (checkKey('textReportIP', SEdit.config.report))
            if (SEdit.isIp === "ip") textReport = SEdit.config.report['textReportIP'].replace(/\$1/gi, SEdit.user);
        var summaryReport = "[[Special:Contribs/" + SEdit.user + "|" + SEdit.user + "]]";
        if (checkKey('summaryReport', SEdit.config.report)) summaryReport = SEdit.config.report['summaryReport'].replace(/\$1/gi, SEdit.user);
        var withoutSectionReport = false;
        if (checkKey('withoutSectionReport', SEdit.config.report))
            if (SEdit.config.report['withoutSectionReport'] === true) withoutSectionReport = true;
        var sectionReport = null;
        if (withoutSectionReport === false) sectionReport = SEdit.config.report['sectionReport'].replace(/\$1/gi, SEdit.user);
        
        checkIfAlreadyReported(SEdit.server_url, SEdit.script_path, SEdit.wiki, SEdit.user, pageReport, textReport, regexReport, regexReport2, summaryReport)
        .then(isAreadyReported => {
            if (isAreadyReported) throw useLang["report-already-reported"];
            var isTop = false;
            var preamb = false;
            if (SEdit.config.report['reportTop'] === true) isTop = true;
            if (SEdit.config.report['reportPreamb'] === true) preamb = true;
            createNotify({
                img: '/img/warning-filled.svg',
                title: useLang["autoreport-title"],
                content: useLang["autoreport-content"].replace("$1", `[[${SEdit.user}||${SEdit.server_url}/wiki/Special:Contributions/${SEdit.user}]]`),
                removable: true,
                buttons: [{
                    type: 'negative',
                    title: useLang["report-title"],
                    remove: true, 
                    onClick: () => {
                        closePO();
                        performReport(SEdit.server_url, SEdit.script_path, SEdit.wiki, withoutSectionReport, isTop, preamb, pageReport, textReport, sectionReport, summaryReport)
                        .then(() => createNotify({
                            img: '/img/warning-filled.svg',
                            title: useLang["warn-performed-title"],
                            content: useLang["report-performed-content"].replace("$1", `[[${SEdit.user}||${SEdit.server_url}/wiki/Special:Contributions/${SEdit.user}]]`).replace("$2", `[[${SEdit.title}||${SEdit.server_url}${SEdit.script_path}/index.php?title=${SEdit.title}&action=history]]`),
                            removable: true
                        })).catch(err => createNotify({
                            img: '/img/warning-filled.svg',
                            title: useLang["report-fail-title"],
                            content: err,
                            removable: true
                        }));
                    }
                }, {
                    title: 'Cancel',
                    remove: true
                }]
            });
        }).catch(err => createNotify({
            img: '/img/warning-filled.svg',
            title: useLang["report-fail-title"],
            content: err,
            removable: true
        }));
    }

    function connectTalk() {
        var sc = new WebSocket("wss://iluvatarbot.toolforge.org/:9030?name=" + userSelf + "&token=" + talktoken);
    
        sc.onclose = function () {
            setTimeout(function () {
                connectTalk();
            }, 1000);
        };
        sc.onerror = function () {
            $scope.$apply(function () {
                $scope.users = [];
            });
            if (countConnectAttemp === 0) {
                if (document.getElementById('talkForm') !== null) {
                    var newDiv = document.createElement('div');
                    newDiv.className = 'phrase-talk';
                    newDiv.style.color = 'var(--tc-negative)';
                    newDiv.textContent = "SYSTEM: connection lost";
                    document.getElementById('form-talk').appendChild(newDiv);
                    scrollToBottom("form-talk");
                }
            }
            countConnectAttemp++;
            document.getElementById('badge-talk').style.background = "var(--bc-negative)";
            sc.close();
        };
    
        function sendTalk () {
            var phraseTalk = document.getElementById('phrase-send-talk').value;
            if (typeof phraseTalk !== "undefined" && phraseTalk !== null && phraseTalk !== "" && sc.readyState === 1) {
                document.getElementById('phrase-send-talk').value = '';
                sc.send(JSON.stringify({"type": "message", "text": phraseTalk}));
            }
        };
    
        sc.onmessage = function (event) {
            var msg = JSON.parse(event.data);
            var indextmp = 0;
            if (msg.type === 'hello') {
                if (countConnectAttemp >= 1) {
                    $scope.user = [];
                    if (document.getElementById('talkForm') !== null) {
                            downloadHistoryTalk();
                            var newDiv = document.createElement('div');
                            newDiv.className = 'phrase-talk';
                            newDiv.style.color = 'var(--tc-positive)';
                            newDiv.textContent = "SYSTEM: connection restored";
                            document.getElementById('form-talk').appendChild(newDiv);
                            scrollToBottom("form-talk");
                    }
                    document.getElementById('badge-talk').style.background = "var(--tc-primary)";
                }
                countConnectAttemp = 0;
                $scope.$apply(function () {
                    let data = msg.clients.split(',');
                    $scope.users = data.filter((value, index) => data.indexOf(value) === index);
                });
                while (indextmp <= $scope.users.length - 1) {
                    if ($scope.offlineUsers.indexOf($scope.users[indextmp]) !== -1)
                        $scope.$apply(function () {
                            $scope.offlineUsers.splice($scope.offlineUsers.indexOf($scope.users[indextmp]), 1);
                        });
                    indextmp++;
                }
    
            }
    
            if (msg.type === 'connected') {
                $scope.$apply(function () {
                    if ($scope.users.find(user => user === msg.nickname) === undefined) $scope.users.push(msg.nickname);
                });
                indextmp = 0;
                if ($scope.offlineUsers.indexOf(msg.nickname) !== -1)
                    $scope.$apply(function () {
                        $scope.offlineUsers.splice($scope.offlineUsers.indexOf(msg.nickname), 1);
                    });
            }
            if (msg.type === 'disconnected') {
                $scope.$apply(function () {
                    let data = msg.clients.split(',');
                    $scope.users = data.filter((value, index) => data.indexOf(value) === index);
                });
                if ($scope.offlineUsers.indexOf(msg.client) === -1 && $scope.users.indexOf(msg.client) === -1)
                    $scope.$apply(function () {
                        $scope.offlineUsers.push(msg.client);
                    });
            }
            if (msg.type === 'message') {
                if (document.getElementById('talkForm') !== null) {
                    if (daysAgoToday === false && historyCount !== 0) {
                        addToTalkSection("Today", false);
                        daysAgoToday = true;
                    }
                    addToTalk(null, msg.nickname, msg.text);
                }
                if (msg.nickname !== userSelf && !document.getElementById('btn-talk').classList.contains('tab__active')) {
                    var userSelfTmp1 = "@" + userSelf + " ";
                    var userSelfTmp2 = "@" + userSelf + ",";
                    if ((msg.text.toUpperCase().indexOf(userSelfTmp1.toUpperCase()) !== -1 || msg.text.toUpperCase().indexOf(userSelfTmp2.toUpperCase()) !== -1) && (sound === 1 || sound === 2 || sound === 3 || sound === 4) && typeof privateMessageSound !== "undefined")
                        playSound(privateMessageSound, true);
                    else {
                        if (typeof messageSound !== "undefined" && (sound === 1 || sound === 2))
                            playSound(messageSound, false);
                    }
                }
                if (!document.getElementById('btn-talk').classList.contains('tab__active')) {
                    document.getElementById('badge-talk').style.background = "var(--bc-positive)";
                }
            }
    
            if (msg.type === "synch") {
                $scope.edits.map(function (e, index) {
                    if (e.wiki === msg.wiki && e.title === msg.page)
                        $scope.$apply(function () {
                            $scope.edits.splice($scope.edits.indexOf($scope.edits[index]), 1);
                        });
                });
                if (msg.vandal === "1")
                    $scope.$apply(function () {
                        vandals.push(msg.nickname);
                    });
                if (msg.vandal === "2")
                    $scope.$apply(function () {
                        suspects.push(msg.nickname);
                    });
            }
        };
    
        function talkSendInside(messageInside) {
            if (sc.readyState === 1)
                sc.send(JSON.stringify(messageInside));
        }
    
        connectTalk.talkSendInside = talkSendInside;
        connectTalk.sendTalk = sendTalk;
    }
    
    $scope.displayTalkPeople = () => {
        const peopleTemplate = `<div style="display: flex; flex-direction: column-reverse"> <div class="user-container fs-md" ng-repeat="talkUser in users|unique: talkUser as filteredUsersTalk"> <div class="user-talk" onclick="selectTalkUsers(this)">{{talkUser}}</div> <a class="user-talk-CA" rel="noopener noreferrer" href="https://meta.wikimedia.org/wiki/Special:CentralAuth/{{talkUser}}" target="_blank">CA</a> </div> </div> <div style="display: flex; flex-direction: column-reverse"> <div ng-repeat="talkUserOffline in offlineUsers track by $index"> <div class="user-talk fs-md" style="color: gray;">{{talkUserOffline}}</div> </div> </div>`;
        var peopleCompiled = $compile(peopleTemplate)($scope)
        angular.element(document.getElementById('talkPeopleContent')).append(peopleCompiled);
        $scope.$apply();
    }
    

    $.ajax({
        type: 'GET',
        url: 'https://ores.wikimedia.org/v3/scores',
        dataType: 'text json',
        success: result => $scope.oresWikiList = result
    });
    $scope.genORES = (wiki, revId, callback) => {
        if (Object.keys($scope.oresWikiList).length === 0) return callback(undefined);
        if (Object.keys($scope.oresWikiList).find(oresWiki => oresWiki === wiki) === undefined) return callback(undefined);
        var oresModel;
        if ($scope.oresWikiList[wiki]['models']['damaging'] !== undefined) oresModel = 'damaging';
        else if ($scope.oresWikiList[wiki]['models']['reverted'] !== undefined) oresModel = 'reverted';
        else return callback(undefined);
        $.ajax({
            type: 'GET',
            url: `https://ores.wikimedia.org/v3/scores/${wiki}/${revId}/${oresModel}`,
            dataType: 'text',
            success: res => {
                let oresData = JSON.parse(res);
                if (oresData[wiki]['scores'][revId][oresModel]['score'] === undefined) return callback(undefined);
                const damage = oresData[wiki]['scores'][revId][oresModel]['score']['probability']['true'];
                const damagePer = parseInt(damage * 100);
                callback({ score: damagePer, color: `hsl(0, ${damagePer}%, 56%)` });
            },
            error: e => { console.error(e); callback(undefined); }
        });
    }
    
    if (typeof (EventSource) == "undefined") {
        alert(useLang["browser-sse"]);
        return;
    }
    $scope.recentChange = {
        connect: function () {
            if (this.isConnected) return;
            this.source = new EventSource("https://stream.wikimedia.org/v2/stream/recentchange");
            this.isConnected = true;
            this.source.onmessage = function (event) {
                const editData = JSON.parse(event.data);
                var namespaceTemp = "";
                var swmt = false;
                var lt300 = false;
                if (isGlobal || isGlobalModeAccess) {
                    swmt = (presets[selectedPreset]["swmt"] === "1" || presets[selectedPreset]["swmt"] === "2")? true: false;
                    lt300 = (presets[selectedPreset]["users"] === "1" || presets[selectedPreset]["users"] === "2")? true: false;
                }
    
                var registeredSSE = (presets[selectedPreset]["registered"] === "1") ? true : false;
                var newPages = (presets[selectedPreset]["new"] === "1") ? "new" : "none";
                var onlyNewPages = (presets[selectedPreset]["onlynew"] === "1") ? "none" : "edit";
                var anonsSSE = (presets[selectedPreset]["anons"] === "1") ? true : false;
    
                if (editData.namespace >= 0 && editData.namespace <= 15) namespaceTemp = ns[editData.namespace];
                else namespaceTemp = "<font color='brown'>Non-canon (" + editData.namespace + ")</font>";
    
                if (editData.user !== userSelf && (editData.type === newPages || editData.type === onlyNewPages) && editData.bot === false && (presets[selectedPreset]["namespaces"].split(',').includes(editData.namespace.toString()) || presets[selectedPreset]["namespaces"].length === 0) && editData.patrolled !== true && ((presets[selectedPreset]["blprojects"].split(',').includes(editData.wiki)) || (local_wikis.includes(editData.wiki) && isGlobal === false) || (wikis.includes(editData.wiki) && swmt === true && (isGlobal === true || isGlobalModeAccess === true)) || (active_users.includes(editData.wiki) && lt300 === true && (isGlobal === true || isGlobalModeAccess === true)))) 
                {} else return;
                if (typeof sandboxlist[editData.wiki] !== "undefined" && sandboxlist[editData.wiki].split(',').includes(editData.title)) return;
                if (global.includes(editData.user) || presets[selectedPreset]["wlusers"].split(',').includes(editData.user) || presets[selectedPreset]["wlprojects"].split(',').includes(editData.wiki)) return;
                
                // ==> IP user.
                if (/^\d*?\.\d*?\.\d*?\.\d*?$/.test(editData.user) || editData.user.indexOf(":") !== -1) {
                    if (!anonsSSE) return;
                    $scope.addToQueue(editData, namespaceTemp, 'ip');
                    return;
                }
                
                if (!registeredSSE) return;
                // ==> Registered user.
                getUserInfo(editData.server_url, editData.server_script_path, editData.user)
                .then(user => {
                    const userGroup = user['groups'];
                    if (userGroup.includes("sysop") || userGroup.includes("editor") || userGroup.includes("autoreviewer") || userGroup.includes("confirmed") || userGroup.includes("extendedconfirmed") || userGroup.includes("filemover") || userGroup.includes("patroller") || userGroup.includes("templateeditor") || userGroup.includes("autopatrolled") || userGroup.includes("autoeditor") || userGroup.includes("closer") || userGroup.includes("rollbacker") || userGroup.includes("translator") || userGroup.includes("translationadmin") || userGroup.includes("engineer") || userGroup.includes("global-renamer") || userGroup.includes("oversight") || userGroup.includes("reviewer") || userGroup.includes("bureaucrat"))
                        return;
                    
                    if (user["registration"] == null) return; // WMF have lost registration date of some very old accounts
                    const d = new Date();
                    var dateDiff = (Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(), d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds(), d.getUTCMilliseconds()) - Date.parse(user["registration"])) / 1000 / 60 / 60 / 24;
                    if (parseInt(user["editcount"]) >= parseInt(presets[selectedPreset]["editscount"]) && dateDiff >= parseInt(presets[selectedPreset]["regdays"])) return;
    
                    // => Checking CVN blacklist
                    return getCVNBlacklist(editData.user)
                }).then(blacklist => {
                    if (typeof blacklist == "undefined") return;
                    if (typeof blacklist[editData.user] !== "undefined")
                        if (blacklist[editData.user]["type"] === "whitelist") return;
                    
                    $scope.addToQueue(editData, namespaceTemp, 'registered');
                }).catch(error => { })
            }
        }, 
        disconnect: function() {
            if (!this.isConnected) return;
            this.source.close();
            this.isConnected = false;
        }
    }
    function downloadIMPData() {
        $.ajax({
            type: 'POST',
            url: 'php/getConfig.php',
            dataType: 'text',
            success: result =>{ 
                config = JSON.parse(result);
                startEsenServices();
            }
        });
        $.ajax({
            type: 'POST',
            url: 'lists/activeSysops.txt',
            dataType: 'text',
            success: result =>{ 
                activeSysops = JSON.parse(result);
                Object.keys(activeSysops).forEach(key => {
                    if (Number(key + 1)) {
                        activeSysops[activeSysops[key][0]] = activeSysops[key].slice(1);
                        delete activeSysops[key];
                    }
                });
                startEsenServices();
            }
        });
        var globalFileCheck = true;
        function checkGlobals() {
            if (global.length < 5 || globalFileCheck === false) {
                globalFileCheck = false;
                $.ajax({
                    type: 'POST',
                    url: 'php/getGlobals.php',
                    dataType: 'text',
                    success: result =>{ 
                        global = result.slice(0, -1).split(",");
                        startEsenServices();
                    }
                });
            } else startEsenServices();
        }
        $.ajax({
            type: 'POST',
            url: 'lists/globalUsers.txt',
            dataType: 'text',
            success: result =>{ 
                try {
                    global = result.slice(0, -1).split(",");
                } catch (e) {
                    globalFileCheck = false;
                }
                checkGlobals();
            }, error: err => checkGlobals()
        });
        $.ajax({
            type: 'POST',
            url: 'php/getOfflineUsers.php',
            dataType: 'text',
            success: result => { 
                offlineUsers = JSON.parse(result);
                $scope.offlineUsers = offlineUsers;
                startEsenServices();
            }
        });
        $.ajax({
            type: 'POST',
            url: 'php/getSandbox.php',
            dataType: 'text',
            success: sandbox => {
                sandbox = JSON.parse(sandbox);
                for(var sb in sandbox["entities"]["Q3938"]["sitelinks"]) {
                    if (sandbox["entities"]["Q3938"]["sitelinks"].hasOwnProperty(sb)) {
                        window.sandboxlist[sandbox["entities"]["Q3938"]["sitelinks"][sb]["site"]] = sandbox["entities"]["Q3938"]["sitelinks"][sb]["title"];
                    }
                }
                function addSandbox(sbList, wiki, page) {
                    if (sbList.hasOwnProperty(wiki))
                        sbList[wiki] = sbList[wiki] + "," + page;
                }
                addSandbox(window.sandboxlist, "eswiki", "Wikipedia:Zona_de_pruebas/1");
                addSandbox(window.sandboxlist, "eswiki", "Wikipedia:Zona_de_pruebas/2");
                addSandbox(window.sandboxlist, "eswiki", "Wikipedia:Zona_de_pruebas/3");
                addSandbox(window.sandboxlist, "eswiki", "Wikipedia:Zona_de_pruebas/4");
                addSandbox(window.sandboxlist, "eswiki", "Wikipedia:Zona_de_pruebas/5");
                addSandbox(window.sandboxlist, "eswiki", "Wikipedia:Zona_de_pruebas/6");
                addSandbox(window.sandboxlist, "eswiki", "Wikipedia:Zona_de_pruebas/7");
                addSandbox(window.sandboxlist, "eswiki", "Wikipedia:Zona_de_pruebas/8");
                addSandbox(window.sandboxlist, "eswiki", "Wikipedia:Zona_de_pruebas/9");
                addSandbox(window.sandboxlist, "eswiki", "Wikipedia:Zona_de_pruebas/10");
                addSandbox(window.sandboxlist, "mediawikiwiki", "VisualEditor:Test");
                addSandbox(window.sandboxlist, "simplewiki", "Wikipedia:Introduction");
                addSandbox(window.sandboxlist, "wikidatawiki", "Q4115189");
                addSandbox(window.sandboxlist, "wikidatawiki", "Q13406268");
                addSandbox(window.sandboxlist, "wikidatawiki", "Q15397819");
                addSandbox(window.sandboxlist, "wikidatawiki", "Property:P368");
                addSandbox(window.sandboxlist, "wikidatawiki", "Property:P369");
                addSandbox(window.sandboxlist, "wikidatawiki", "Property:P370");
                addSandbox(window.sandboxlist, "wikidatawiki", "Property:P578");
                addSandbox(window.sandboxlist, "wikidatawiki", "Property:P626");
                addSandbox(window.sandboxlist, "wikidatawiki", "Property:P855");
                addSandbox(window.sandboxlist, "wikidatawiki", "Property:P1106");
                addSandbox(window.sandboxlist, "wikidatawiki", "Property:P1450");
                addSandbox(window.sandboxlist, "wikidatawiki", "Property:P2368");
                addSandbox(window.sandboxlist, "wikidatawiki", "Property:P2535");
                addSandbox(window.sandboxlist, "wikidatawiki", "Property:P2536");
                addSandbox(window.sandboxlist, "wikidatawiki", "Property:P4047");
                addSandbox(window.sandboxlist, "wikidatawiki", "Property:P5188");
                addSandbox(window.sandboxlist, "wikidatawiki", "Property:P5189");
                addSandbox(window.sandboxlist, "wikidatawiki", "Property:P6604");
                addSandbox(window.sandboxlist, "wikidatawiki", "Lexeme:L123");
                addSandbox(window.sandboxlist, "wikidatawiki", "Lexeme:L1234");
                addSandbox(window.sandboxlist, "wikidatawiki", "Q17339402");
                addSandbox(window.sandboxlist, "wikidatawiki", "Q85408509");
                addSandbox(window.sandboxlist, "wikidatawiki", "Q85409163");
                addSandbox(window.sandboxlist, "wikidatawiki", "Q16943273");
                addSandbox(window.sandboxlist, "wikidatawiki", "Q85409446");
                addSandbox(window.sandboxlist, "wikidatawiki", "Q85409596");
                addSandbox(window.sandboxlist, "wikidatawiki", "Q85409310");
                addSandbox(window.sandboxlist, "wikidatawiki", "Q17566023");
                addSandbox(window.sandboxlist, "wikidatawiki", "Q17578745");
                addSandbox(window.sandboxlist, "wikidatawiki", "Q85408938");
                startEsenServices();
            }
        })
    }
    var esenServicesCount = 0;
    const totalEsenServicesCount = 5;
    function startEsenServices() {
        ++esenServicesCount;
        if (esenServicesCount < totalEsenServicesCount) return;
        $scope.recentChange.connect();
        connectTalk();
        $scope.sendTalkMsg = connectTalk.sendTalk;
        document.getElementById('btn-talk').classList.remove('disabled');
    }
    downloadIMPData();

    $scope.addToQueue = async function (editData, namespaceTemp, ipType) {
        // => If it's element of wikidata. get label
        var wikidataTitle = null;
        if (editData.wiki === "wikidatawiki" && (editData.namespace === 120 || editData.namespace === 0)) {
            if (editData.title.search(/^P\d*?$/gm) !== -1 || editData.title.search(/^Q\d*?$/gm) !== -1)
                wikidataTitle = await getWikidataTitle(editData.title);
        }
    
        // ==> remove old edits by same user in same wiki on same page
        $scope.edits.map((e, index) => {
            if (e.wiki === editData.wiki && e.title === editData.title && e.user === editData.user && checkMode === 2) $scope.$apply(() =>  $scope.edits.splice($scope.edits.indexOf($scope.edits[index]), 1) );
        });
    
        $scope.$apply(() => {
            if (countqueue !== 0 && $scope.edits.length >= countqueue) {
                if (terminateStream === 1) {
                    $scope.recentChange.disconnect();
                    return;
                }
                $scope.edits.pop();
            }
            var editTemp = {
                "server_url": editData.server_url,
                "server_name": editData.server_name,
                "script_path": editData.server_script_path,
                "server_uri": editData.meta.uri,
                "wiki": editData.wiki,
                "namespace": namespaceTemp,
                "user": editData.user,
                "title": editData.title,
                "comment": editData.comment,
                "old": editData.revision.old,
                "new": editData['revision']['new'],
                "isIp": ipType,
                "wikidata_title": wikidataTitle,
                "ores": undefined,
                "isNew": (editData.type === "new") ? "N" : "",
                "byteCount": ((newByte, oldByte) => {
                    let byteCount
                    if (typeof oldByte === 'undefined') byteCount = newByte;
                    else byteCount = newByte - oldByte;
                    if (byteCount > 0) return "+" + byteCount;
                    return byteCount;
                })(editData.length.new, editData.length.old)
            };
            const oresFilter = presets[selectedPreset]['oresFilter'];
            const unshiftEdit = () => {
                $scope.edits.unshift(editTemp);
                if ((sound === 1 || sound === 4 || sound === 5) && typeof newSound !== "undefined") playSound(newSound, false);
            }
            if (oresFilter !== undefined && oresFilter !== 0) {
                return $scope.genORES(editData.wiki, editData['revision']['new'], (ores) => {
                    if (ores === undefined) return unshiftEdit()
                    if (ores.score < oresFilter) return;
                    editTemp.ores = ores;
                    unshiftEdit();
                });
            }
            $scope.genORES(editData.wiki, editData['revision']['new'], (ores) => {
                if (ores === undefined) return
                editTemp.ores = ores;
                $scope.$apply();
            });
            unshiftEdit();
        });
    }

    // => Send notification to after request complition
    $scope.reqSuccessNotify = function(newEdit, oldEdit, type, extra) {
        extra = extra || type;
        const action_translated = { 'rollback': useLang["logs-action-rollback"], 'undo': useLang["logs-action-undo"], 'delete': useLang["delete"], 'edit': useLang["logs-action-edit"], 'warn': useLang["logs-action-warn"], 'report': useLang["logs-action-report"], 'protect': useLang["logs-action-protect"] };
        extra = action_translated[extra];
        oldEdit = {...oldEdit};
        oldEdit.user = newEdit.user;
        oldEdit.old = newEdit.oldrevid;
        oldEdit.new = newEdit.newrevid;
        oldEdit.comment = newEdit.summary;
        oldEdit.isIp = 'registered';
        createNotify({
            img: `/img/${type}-filled.svg`,
            title: useLang["request-performed-title"],
            content: useLang["request-performed-content"].replace('$1', extra).replace('$2', `[[${oldEdit.title}||${oldEdit.server_url}${oldEdit.script_path}/index.php?title=${oldEdit.title}&action=history]]`),
            removable: true,
            buttons: [{
                title: useLang["view-latest"],
                remove: true, type: 'accent',
                onClick: () => { closePO(); $scope.select(oldEdit); }
            }, { title: useLang["cancel"], remove: true }]
        });
    }

    var noDiffON = false;
    $scope.nextDiff = function () {
        if ($scope.edits.length > 0) {
            $scope.select($scope.edits[0]);
        } else if (!noDiffON) {
            noDiffON = true;
            document.getElementById('next-diff-title').style.width = '70px';
            setTimeout(() => {
                noDiffON = false;
                document.getElementById('next-diff-title').style.width = '1px';
            }, 1000);
        }
    };

    $scope.openLink = function (tTYPE) {
        if (tTYPE === "page") {
            var urldiff = $scope.selectedEdit.server_url + "/w/index.php?oldid=" + $scope.selectedEdit.new;
            var diffWindow = window.open(urldiff, "_blank");
            diffWindow.location;
            diffWindow.focus();
            return;
        }
        var urldiff = $scope.selectedEdit.server_url + "/wiki/Special:Contributions/" + encodeURIComponent($scope.selectedEdit.user).replace(/'/g, '%27');
        if (tTYPE === "diff") {
            var diffWindow = window.open(urldiff, "_blank");
            diffWindow.location;
            diffWindow.focus();
        }
    };
    $scope.copyViewHistory = () => copyToClipboard(encodeURI(`${$scope.selectedEdit.server_url}${$scope.selectedEdit.script_path}/index.php?title=${$scope.selectedEdit.title}&action=history`));
    $scope.copyGlobalContribs = () => copyToClipboard(encodeURI(`https://guc.toolforge.org/?src=hr&by=date&user=${$scope.selectedEdit.user}`));
    $scope.copyCentralAuth = () => copyToClipboard(encodeURI(`https://meta.wikimedia.org/wiki/Special:CentralAuth?target=${$scope.selectedEdit.user}`));

    document.getElementById('warn-box').onclick = function () {
        if ($scope.selectedEdit.settings.checkWarn === false) {
            this.classList.add('t-btn__active');
            $scope.selectedEdit.settings.checkWarn = true;
            if (defaultWarnList.indexOf($scope.selectedEdit.wiki) === -1) {
                defaultWarnList.push($scope.selectedEdit.wiki);
                sendDefaultWarnList()
            }

        } else {
            this.classList.remove('t-btn__active');
            $scope.selectedEdit.settings.checkWarn = false;
            if (defaultWarnList.indexOf($scope.selectedEdit.wiki) !== -1) {
                for (var dflcount = defaultWarnList.length - 1; dflcount >= 0; dflcount--) {
                    if (defaultWarnList[dflcount] === $scope.selectedEdit.wiki) {
                        defaultWarnList.splice(dflcount, 1);
                    }
                }
                sendDefaultWarnList();
            }
        }
        function sendDefaultWarnList() {
            // send default-warn list to DB
            $.ajax({
                url: 'php/settings.php',
                type: 'POST',
                crossDomain: true,
                data: {action: 'set', query: "defaultwarn", defaultwarn: defaultWarnList.join(',')},
                dataType: 'json'
            });
        }
        $scope.$apply(function () {
            $scope.selectedEdit.config.rollback;
        });
    };

    document.getElementById("warn-box-delete").onclick = function () {
        if ($scope.selectedEdit.settings.checkWarnDelete === false) {
            this.classList.add('t-btn__active');
            $scope.selectedEdit.settings.checkWarnDelete = true;
            if (defaultDeleteList.indexOf($scope.selectedEdit.wiki) === -1) {
                defaultDeleteList.push($scope.selectedEdit.wiki);
                sendDefaultDeleteList();
            }

        } else {
            this.classList.remove('t-btn__active');
            $scope.selectedEdit.settings.checkWarnDelete = false;
            if (defaultDeleteList.indexOf($scope.selectedEdit.wiki) !== -1) {
                for (var dflcount = defaultDeleteList.length - 1; dflcount >= 0; dflcount--) {
                    if (defaultDeleteList[dflcount] === $scope.selectedEdit.wiki) {
                        defaultDeleteList.splice(dflcount, 1);
                    }
                }
                sendDefaultDeleteList();
            }
        }
        function sendDefaultDeleteList() {
            // send default-warn list (about speedy deletion) to DB
            $.ajax({
                url: 'php/settings.php',
                type: 'POST',
                crossDomain: true,
                data: {action: 'set', query: "defaultdelete", defaultdelete: defaultDeleteList.join(',')},
                dataType: 'json'
            });
        }
        $scope.$apply(function () {
            $scope.selectedEdit.config.speedy;
        });
    };

    var timeoutkey = setTimeout(() => checktimeout = true, 5000);
    var checktimeout = true;
    document.onkeydown = function (e) {
        if (!e) e = window.event;
        var keyCode = e.which || e.keyCode || e.key;
        $scope.keyDownFunct(keyCode);
    };

    $scope.keyDownFunct = function (keyCode) {
        keyCode = Number(keyCode);
        if (keyCode !== 13 && keyCode !== 27 && keyCode !== 32 && keyCode !== 65 && keyCode !== 68 && keyCode !== 191 && keyCode !== 85 && keyCode !== 80 && keyCode !== 83 && keyCode !== 84 && keyCode !== 89 && keyCode !== 78 && keyCode !== 79 && keyCode !== 76 && keyCode !== 69 && keyCode !== 82 && keyCode !== 219 && keyCode !== 144 && keyCode !== 145 && keyCode !== 37 && keyCode !== 38 && keyCode !== 39 && keyCode !== 40)
            if (isNotModal()) {
                if (timeoutkey) {
                    clearTimeout(timeoutkey);
                    timeoutkey = null;
                    checktimeout = false;
                }
                timeoutkey = setTimeout(function () {
                    checktimeout = true;
                }, 5000);
            }

        if (checktimeout === false && isNotModal()) return;

        if (keyCode === 82 && isNotModal() && document.getElementById('page-welcome').style.display === 'none') {
            document.getElementById('revert').click();
            return false;
        }
        if (keyCode === 89 && isNotModal() && document.getElementById('page-welcome').style.display === 'none') {
            document.getElementById('customRevertBtn').click();
            return false;
        }
        if ((keyCode === 219 || keyCode === 80) && isNotModal() && document.getElementById('page-welcome').style.display === 'none') {
            document.getElementById('back').click();
            return false;
        }
        if (keyCode === 68 && isNotModal() && document.getElementById('page-welcome').style.display === 'none') {
            document.getElementById('tagBtn').click();
            return false;
        }
        if (keyCode === 69 && isNotModal() && document.getElementById('page-welcome').style.display === 'none') {
            document.getElementById('editBtn').click();
            return false;
        }
        if (keyCode === 76 && isNotModal()) {
            document.getElementById('btn-logs').click();
            return false;
        }
        if (keyCode === 78 && isNotModal()) {
            document.getElementById('btn-notification').click();
            return false;
        }
        if (keyCode === 79 && isNotModal() && document.getElementById('page-welcome').style.display === 'none') {
            document.getElementById('browser').click();
            return false;
        }
        if (keyCode === 84 && isNotModal()) {
            document.getElementById('btn-talk').click();
            return false;
        }
        if (keyCode === 83 && isNotModal()) {
            document.getElementById('btn-settings').click();
            return false;
        }
        if (keyCode === 85 && isNotModal()) {
            document.getElementById('btn-unlogin').click();
            return false;
        }
        if (keyCode === 191 && isNotModal() && document.getElementById('page-welcome').style.display === 'none') {
            document.getElementById('luxo').click();
            return false;
        }
        if (keyCode === 65 && isNotModal() && document.getElementById('page-welcome').style.display === 'none') {
            if (document.getElementById('userLinkSpec').style.display !== "none") {
                document.getElementById('userLinkSpec').click();
                return false;
            }
        }
        if (keyCode === 32 && isNotModal()) {
            if ($scope.edits.length > 0) {
                $scope.select($scope.edits[0]);
                $scope.$digest();
                return false;
            }
        }
        if (keyCode === 27) {
            if (Object.keys(dialogStack).length !== 0) removeDialog();
            else if (document.getElementById('POOverlay').classList.contains('po__overlay__active')) 
                closePO();
            else if (!document.getElementById('btn-home').classList.contains('tab__active')) 
                closePW();
            return false;
        }
    };
});


// => load diff to view
async function loadDiff(edit, showAll) {
    disableControl(); closeMoreControl();
    closePW();
    loadDiffDesc(edit);
    document.getElementById('page').srcdoc = `<html style="height: 100%;">
            <head>
                <link rel="stylesheet" href="css/base/variables.css">
                <link rel="stylesheet" href="css/base/base.css">
            </head>
            <body style="margin: 0; height: 100%; background-color: transparent;">
                <div style="height: 100%; display: flex; justify-content: center; align-items: center;">
                    <img class="secondary-icon touch-ic" src="/img/swviewer-loading-anim.svg" style="opacity: 0.4; width: 100px; height: 100px; margin: auto;">
                </div>
            </body>
        </html>`;

    if (typeof edit.old !== "undefined" && (checkMode === 2 || showAll === true)) {

        await getLastUserRevId(edit.server_url, edit.script_path, edit.title, edit.user, edit.new)
        .then(revId => {
            if (i > 0) edit_history[i - 1]["old"] = old
            edit.old = revId;
        }).catch(err => {});
    }

    if (edit.isNew === "N") enableNewUI();
    await getDiff(edit.server_url, edit.script_path, edit.wiki, edit.new, edit.old)
    .then(diff => document.getElementById('page').srcdoc = diff)
    .catch(err => createDialog({
        parentId: 'angularapp', id: 'diffLoadingErrorDialog',
        title: useLang["error-loading-title"],
        alert: { message: err },
        buttons: [{ type: 'accent', title: useLang["alright"], remove: true }]
    }));
    if (loadingEdits !== 0) loadingEdits--;
    if (loadingEdits === 0) disableLoadingDiffUI();
    homeBtn(false);
}

// => load diff description container
function loadDiffDesc(edit) {
    document.getElementById('description-container').style.marginTop = '0px';
    if (edit.isIp === "registered") document.getElementById("userLinkSpec").style.color = "#3366BB";
    else document.getElementById("userLinkSpec").style.color = "green";
    if (edit.isIp === "ip") document.getElementById('CAUTH').classList.add('disabled');
    else document.getElementById('CAUTH').classList.remove('disabled');
    document.getElementById("userLinkSpec").textContent = edit.user;
    document.getElementById('com').textContent = edit.comment;

    var tempNs = edit.namespace;
    if (edit.wiki === "wikidatawiki") {
        if (edit.namespace === "<font color='brown'>Non-canon (146)</font>") tempNs = "Lexeme";
        if (edit.namespace === "<font color='brown'>Non-canon (122)</font>") tempNs = "Query";
        if (edit.namespace === "<font color='brown'>Non-canon (120)</font>")
            if (edit.title.search(/^P\d*?$/gm) !== -1) tempNs = "Property";
        if (edit.wikidata_title !== null) {
            document.getElementById("tit").setAttribute("aria-label", edit.wikidata_title);
            document.getElementById("tit").setAttribute("i-tooltip", "bottom-left");
            document.getElementById("pageLinkSpec").style.borderBottom = "1px dotted var(--link-color)";
        }
    } else {
        if (edit.wiki === "enwiki" && edit.namespace === "<font color='brown'>Non-canon (118)</font>") tempNs = "Draft";
        if (edit.wiki === "enwiki" && edit.namespace === "<font color='brown'>Non-canon (119)</font>") tempNs = "Draft talk";
    }
    if (edit.wikidata_title === null) {
        document.getElementById("tit").removeAttribute("aria-label");
        document.getElementById("tit").removeAttribute("i-tooltip");
        document.getElementById("pageLinkSpec").style.borderBottom = "unset";
    }
    document.getElementById('pageLinkSpec').textContent = edit.title;
    if ((edit.title === "testwiki") || (edit.title === "test2wiki") || (edit.title === "testwikidata") || (edit.title === "testwikidatawiki"))
        document.getElementById('wiki').innerHTML = "<font color='tomato'>" + edit.wiki + "</font>";
    else
        document.getElementById('wiki').innerHTML = edit.wiki;
    document.getElementById('ns').innerHTML = tempNs;
}

// => perform edit on page.
function performEdit(serverUrl, scriptPath, wiki, title, timestamp, editSource, editSummary, isDelete) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: 'php/doEdit.php',
            type: 'POST',
            crossDomain: true,
            dataType: 'text',
            data: {
                project: serverUrl + scriptPath + '/api.php',
                wiki: wiki,
                isdelete: isDelete,
                page: title,
                text: editSource,
                summary: editSummary,
                basetimestamp: timestamp
            },
            success: editData => {
                editData = JSON.parse(editData);
                if (editData['result'] === 'Success') resolve(editData);
                if (editData['result'] == null || editData['code'] === "alreadydone") reject(useLang["already-done"]);
                reject(useLang["error-edit"].replace("$1", escapeXSS(editData['result'])));
            }, error: (error, e2) => reject(`Failed... dev code: 007; error code: ${escapeXSS(error.status)}${escapeXSS(e2)}`)
        });
    });
}

// => report to GSR
function reportGSR(serverUrl, wiki, title, speedyLabel) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: 'php/gsr.php',
            type: 'POST',
            crossDomain: true,
            dataType: 'text',
            data: {
                project: serverUrl,
                wiki: wiki,
                title: title,
                type: "delete",
                reason: speedyLabel
            }, success: () => resolve(),
            error: err => reject(err)
        })
    });
}

// => notify the editor.
function notifyEditor(serverUrl, scriptPath, wiki, text, summary, speedySection, firstEditor) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: 'php/doEdit.php', type: 'POST',
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Api-User-Agent', 'SWViewer/1.3 (https://swviewer.toolforge.org; swviewer@tools.wmflabs.org) Ajax / Warns');
            },
            crossDomain: true, dataType: 'text',
            data: {
                warn: "speedy",
                project: serverUrl + scriptPath + "/api.php",
                wiki: wiki,
                page: "User_talk:" + firstEditor,
                text: text,
                sectiontitle: speedySection,
                summary: summary
            },
            success: () => resolve(true),
            error: () => reject(useLang["error-network"])
        });
    });
}

function performRollback(revertData) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: 'php/rollback.php',
            type: 'POST',
            crossDomain: true,
            data: revertData,
            dataType: 'json',
            success: rollbackData => {
                if (rollbackData['result'] === "Success") resolve(rollbackData);
                reject(useLang["error-rollback"].replace("$1", rollbackData['result']));
            }, error: err => reject(useLang["error-rollback-browser"].replace("$1", escapeXSS(err.status)))
        });
    });
}

function sendWarning(serverUrl, scriptPath, wiki, newId, oldId, title, user, warnLevel, warnTemplates, warnMonth, warnSummary, warnSection, withoutSection) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: 'php/doEdit.php',
            type: 'POST',
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Api-User-Agent', 'SWViewer/1.3 (https://swviewer.toolforge.org; swviewer@tools.wmflabs.org) Ajax / Warns');
            },
            crossDomain: true,
            dataType: 'json',
            data: {
                warn: "rollback",
                withoutsection: withoutSection,
                project: serverUrl + scriptPath + "/api.php",
                wiki: wiki,
                page: 'User_talk:' + user,
                text: warnTemplates[warnLevel].replace(/\$1/gi, title).replace(/\$2/gi, oldId).replace(/\$3/gi, newId).replace(/\$4/gi, user).replace(/\$5/gi, "Special:Diff/" + oldId + "/" + newId).replace(/\$6/gi, serverUrl + scriptPath + "/index.php?oldid=" + oldId + "&diff=" + newId),
                sectiontitle: warnSection.replace(/\$DD/gi, moment.utc().format('DD')).replace(/\$MMMM/gi, warnMonth).replace(/\$MM/gi, moment.utc().format('MM')).replace(/\$M/gi, moment.utc().format('M')).replace(/\$YYYY/gi, moment.utc().format('YYYY')),
                summary: warnSummary.replace(/\$1/gi, warnLevel + 1)
            },
            success: () => resolve(),
            error: err => reject(err)
        });
    });
}


function performReport(serverUrl, scriptPath, wiki, withoutSectionReport, isTop, preamb, pageReport, textReport, sectionReport, summaryReport) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: 'php/doEdit.php',
            type: 'POST',
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Api-User-Agent', 'SWViewer/1.3 (https://swviewer.toolforge.org; swviewer@tools.wmflabs.org) Ajax / Report');
            },
            crossDomain: true,
            dataType: 'json',
            data: {
                warn: "report",
                withoutsection: withoutSectionReport,
                project: serverUrl + scriptPath + "/api.php",
                wiki: wiki,
                top: isTop,
                preamb: preamb,
                page: pageReport,
                text: textReport,
                sectiontitle: sectionReport,
                summary: summaryReport
            },
            success: () => resolve(),
            error: err => reject(err)
        });
    });
}


/*  
====================
----Data getters----
====================
*/
// get diff html from wikipedia
function getDiff(serverUrl, scriptPath, wiki, newId, oldId) {
    return new Promise((resolve, reject) => {
        const url = `${serverUrl}${scriptPath}/api.php?action=compare&format=json&uselang=${languageIndex}&fromrev=${(typeof oldId === 'undefined')? newId + "&torelative=prev": oldId + "&torev=" + newId }&utf8=1&prop=diff`;
        $.ajax({
            url: url,
            type: 'GET',
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Api-User-Agent', 'SWViewer/1.3 (https://swviewer.toolforge.org; swviewer@tools.wmflabs.org) Ajax / diff');
            },
            crossDomain: true,
            dataType: 'jsonp',
            success: data => {
                if (typeof data.error !== "undefined") {
                    if (data.error.code === "nosuchrevid") reject(useLang["error-del"]);
                    reject(useLang["error-opening-del-spec"].replace("$1", escapeXSS(data.error.info)));
                }
                if (typeof data.compare === 'undefined') reject(`Please report this error to developer. ERROR: Unable to get difference. Info: ${url}`);
                if (data.compare['*'] === "" || data.compare['*'].indexOf("<tr>") === -1) {
                    if (typeof oldId !== 'undefined') reject(useLang["error-already-reverted"]);
                    var newPageDiff = startstring + data.compare['*'] + endstring;
                    newstart = newstart.replace('[new-page-frame-not-exist]', useLang['new-page-frame-not-exist']).replace('[new-page-frame-new]', useLang['new-page-frame-new']);
                    resolve(newstart + newPageDiff + newend + getUniqID(wiki, newId));
                }
                var diffTextToFrame = data.compare['*'];
                if (typeof oldId === 'undefined') diffTextToFrame = '<tr><td colspan="2" class="diff-lineno">' + useLang['new-page-frame-not-exist'] + diffTextToFrame.substring(diffTextToFrame.indexOf("</td>"), diffTextToFrame.length);
                if (wiki !== "commonswiki" && wiki !== "wikidatawiki") diffTextToFrame = escapeXSSDiff(diffTextToFrame);
                else diffTextToFrame = structuredData(diffTextToFrame.replace(/<a class="mw-diff-movedpara-left".*?<\/a>/g, '-').replace(/<a class="mw-diff-movedpara-right".*?<\/a>/g, '+').replace(/<a name="movedpara_.*?<\/a>/g, ''), serverUrl);
                resolve(diffstart + diffTextToFrame + diffend + getUniqID(wiki, newId));
            },
            error: error => reject(`Failed... dev code: 010; error code: ${error.status}.`)
        });
    });
}

function getUniqID(wiki, newId) {
    return startCb + wiki + newId + endCb;
}

// get last user revision id to show all edits.
function getLastUserRevId(serverUrl, scriptPath, title, user, newId) {
    return new Promise((resolve, reject) => {
        const url = serverUrl + scriptPath + "/api.php?action=query&prop=revisions&titles=" + encodeURIComponent(title) + "&rvprop=ids|user&rvlimit=1&rvexcludeuser=" + encodeURIComponent(user) + "&rvstartid=" + newId + "&format=json&utf8=1";
        $.ajax({
            url: url, type: 'GET', beforeSend: function (xhr) {
                xhr.setRequestHeader('Api-User-Agent', 'SWViewer/1.3 (https://swviewer.toolforge.org; swviewer@tools.wmflabs.org) Ajax / diff');
            }, crossDomain: true, dataType: 'jsonp', success: fdata => {
                if (typeof fdata["query"] === "undefined" || typeof fdata["query"]["pages"] === "undefined") reject();
                var pageFData = null;
                for(let k in fdata["query"]["pages"]) 
                    if (fdata["query"]["pages"].hasOwnProperty(k))
                    if (Number(k) !== -1)
                    pageFData = fdata["query"]["pages"][k];
                if (pageFData !== null && typeof pageFData["revisions"] !== "undefined" && typeof pageFData["revisions"][0] !== "undefined" && typeof pageFData["revisions"][0]["revid"] !== "undefined" && pageFData["revisions"][0]["revid"] !== 0)
                    resolve(pageFData["revisions"][0]["revid"]);
                reject(useLang["error-get-last"]);
            }, error: error => reject(error)

        });
    });
}
// get information about user account.
function getUserInfo (serverUrl, scriptPath, username) {
    return new Promise((resolve, reject) => {
        const url = serverUrl + scriptPath + "/api.php?action=query&list=users&ususers=" + encodeURIComponent(username).replace(/'/g, '%27') + "&usprop=groups|registration|editcount&utf8&format=json";
        $.ajax({
            url: url, type: 'GET',
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Api-User-Agent', 'SWViewer/1.3 (https://swviewer.toolforge.org; swviewer@tools.wmflabs.org) Ajax / SSE parsing');
            },
            crossDomain: true, dataType: 'jsonp',
            success: datainfo => resolve(datainfo["query"]["users"][0]),
            error: error => reject(error)
        });
    });
}

// get CVN blacklist of users
function getCVNBlacklist (username) {
    return new Promise((resolve, reject) => {
        const url = "https://cvn.wmflabs.org/api.php?users=" + encodeURIComponent(username).replace(/'/g, '%27');
        $.ajax({
            url: url, type: 'GET',
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Api-User-Agent', 'SWViewer/1.3 (https://swviewer.toolforge.org; swviewer@tools.wmflabs.org) Ajax / SSE parsing');
            },
            crossDomain: true, dataType: 'jsonp', success: data => resolve(data["users"]), 
            error: error => reject(error)
        });
    });
}

// Get labels for Wikidata elements. Instead "Q2735363" we will see title of article
function getWikidataTitle (editTitle) {
    return new Promise((resolve, reject) => {
        var url = "https://www.wikidata.org/w/api.php?action=wbgetentities&ids=" + encodeURIComponent(editTitle) + "&props=labels&languages=en&format=json&utf8=1";
        $.ajax({
            url: url, type: 'GET',
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Api-User-Agent', 'SWViewer/1.3 (https://swviewer.toolforge.org; swviewer@tools.wmflabs.org) Ajax / SSE parsing');
            },
            crossDomain: true, dataType: 'jsonp', success: wikidatatitle => {
                if (wikidatatitle.hasOwnProperty("entities"))
                if (wikidatatitle["entities"].hasOwnProperty(editTitle))
                if (wikidatatitle["entities"][editTitle].hasOwnProperty("labels"))
                if (wikidatatitle["entities"][editTitle]["labels"].hasOwnProperty("en"))
                if (wikidatatitle["entities"][editTitle]["labels"]["en"].hasOwnProperty("value"))
                if (wikidatatitle["entities"][editTitle]["labels"]["en"]["value"] !== null || wikidatatitle["entities"][editTitle]["labels"]["en"]["value"] !== "")
                    resolve(wikidatatitle["entities"][editTitle]["labels"]["en"]["value"]);
            }, error: error => resolve(null)
        });
    });
}

// => to see if the given revision is latest or not
function isLatestRevision(serverUrl, scriptPath, title, newId) {
    return new Promise((resolve, reject) => {
        const url = `${serverUrl}${scriptPath}/api.php?action=query&prop=revisions&titles=${encodeURIComponent(title).replace(/'/g, '%27')}&rvprop=ids|timestamp|user|comment&rvlimit=1&format=json&utf8=1`;
        $.ajax({
            url: url,
            type: 'GET',
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Api-User-Agent', 'SWViewer/1.3 (https://swviewer.toolforge.org; swviewer@tools.wmflabs.org) Ajax / isCurrent');
            },
            crossDomain: true,
            dataType: 'jsonp',
            success: data => {
                if (typeof data.error !== "undefined") reject(useLang["error-opening"].replace("$1", escapeXSS(data.error.info)));
                var pageId = "";
                if (typeof data['query']['pages'] !== 'undefined') for (let k in data['query']['pages']) pageId = k;
                if (typeof data['query']['pages'] === 'undefined' || data['query']['pages'] === '-1' || typeof data['query']['pages'][pageId]['revisions'][0]['revid'] === 'undefined') {
                    if (typeof data.error !== 'undefined') reject(useLang["error-opening-del-spec"].replace("$1", escapeXSS(data.error.info)));
                    else reject(useLang["error-opening-del"]);
                }

                if (newId === data["query"]["pages"][pageId]["revisions"][0]["revid"]) resolve({ isLatest: true, revision: data["query"]["pages"][pageId]["revisions"][0] });
                resolve({ isLatest: false, revision: data["query"]["pages"][pageId]["revisions"][0] });
            }, error: error => reject(error)
        });
    });
}

// => get the latest revision with old
function bindLatestRevision(oldEdit, revision) {
    return new Promise(async (resolve, reject) => {
        if (oldEdit.old == null) oldEdit.old = oldEdit.new;
        oldEdit.user = revision.user;
        oldEdit.old = oldEdit.new;
        oldEdit.new = revision.revid;
        oldEdit.comment = revision.comment;
        await getUserInfo(oldEdit.server_url, oldEdit.script_path, oldEdit.user)
        .then(user => {
            if (user.editcount === 'undefined') oldEdit.isIp = 'ip';
            else oldEdit.isIp = 'registered';
            resolve(oldEdit);
        }).catch(err => reject(err));
    });
}

// => check for multiple edits if true return true else false.
function checkMultipleEdits(serverUrl, scriptPath, user, newId) {
    return new Promise((resolve, reject) => {
        const url = serverUrl + scriptPath + "/api.php?action=compare&fromrev=" + newId + "&torelative=prev&prop=user&utf8=1&format=json";
        $.ajax({
            url: url, type: 'GET', beforeSend: function (xhr) {
                xhr.setRequestHeader('Api-User-Agent', 'SWViewer/1.3 (https://swviewer.toolforge.org; swviewer@tools.wmflabs.org) Ajax / checkLast');
            }, crossDomain: true, dataType: 'jsonp', 
            success: function (fdata) {
                if (typeof fdata["compare"] !== "undefined" &&
                    typeof fdata["compare"]["fromuser"] !== "undefined" &&
                    fdata["compare"]["fromuser"] === user) resolve(true);
                
                resolve(false);
            }, error: err => {
                reject(err);
            }
        });
    });
}

// => to get source code of an edit
function getEditSource(serverUrl, scriptPath, newId) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: "php/getPage.php",
            type: 'POST',
            dataType: 'text',
            data: {
                server: serverUrl + scriptPath,
                oldid: newId
            }, success: pageData => {
                if (pageData === "Error! Loading page is not success") reject(useLang["error-get-source"] + " (Dev code: 004.1)");
                resolve(pageData);
            }, error: err => reject(`Failed... dev code: 004; error code: ${err.status}.`)
        });
    });
}

// => get first editor of the page.
function getFirstEditor(serverUrl, scriptPath, wiki, title, user) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: 'php/doEdit.php', type: 'POST',
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Api-User-Agent', 'SWViewer/1.3 (https://swviewer.toolforge.org; swviewer@tools.wmflabs.org) Ajax / Warns');
            },
            crossDomain: true, dataType: 'text',
            data: {
                getfirstuser: 1, warn: 1,
                project: serverUrl + scriptPath + "/api.php",
                wiki: wiki, 
                page: title, text: "1", 
                user: user, summary: "1"
            },
            success: firstEditorData => {
                if (firstEditorData === null || firstEditorData === "") reject(useLang["error-first-editor"]);
                firstEditorData = JSON.parse(firstEditorData);
                if (firstEditorData['result'] !== "sucess") reject(useLang["error-first-editor"]);
                resolve(firstEditorData['user']);
            },
            error: () => reject(useLang["error-network-first-editor"])
        });
    });
}

function getUrlToCountWarn(serverUrl, scriptPath, username, timeWarn) {
    return new Promise((resolve, reject) => {
        const url = serverUrl + scriptPath + "/api.php?action=query&prop=revisions&titles=User_talk:" + encodeURIComponent(username) + "&rvslots=main&rvprop=ids&rvdir=newer&rvstart=" + timeWarn + "&rvlimit=500&format=json&utf8=1";
        $.ajax({
            url: url,
            type: 'GET',
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Api-User-Agent', 'SWViewer/1.3 (https://swviewer.toolforge.org; swviewer@tools.wmflabs.org) Ajax / Warns');
            },
            crossDomain: true,
            dataType: 'jsonp',
            success: idsWarns => {
                if (typeof idsWarns['query'] === 'undefined' || typeof idsWarns['query']['pages'] === 'undefined')
                    reject(useLang["error-get-url"]);
                var pageIds = null;
                for (let key in idsWarns['query']['pages'])
                    if (idsWarns['query']['pages'].hasOwnProperty(key))
                    if (Number(key) !== -1) pageIds = idsWarns['query']['pages'][key];
                
                var oldId = -1, newId = -1;
                if (pageIds !== null && typeof pageIds['revisions'] !== 'undefined') {
                    newId = pageIds['revisions'][pageIds['revisions'].length - 1]['revid'];
                    if (typeof pageIds['revisions'][0]['parentid'] !== 'undefined' && pageIds['revisions'][0]['parentid'] !== null && pageIds['revisions'][0]['parentid'] !== "")
                        oldId = pageIds['revisions'][0]['parentid'];
                }
                var url = serverUrl + scriptPath + "/api.php?action=compare&fromrev=" + oldId + "&torev=" + newId + "&utf8=1&format=json";
                if (oldId === -1) url = serverUrl + scriptPath + "/api.php?action=compare&fromrev=" + newId + "&torelative=prev&utf8=1&format=json";
                if (oldId === 0) url = serverUrl + scriptPath + "/api.php?action=query&prop=revisions&titles=User_talk:" + encodeURIComponent(username) + "&rvslots=main&rvprop=content&rvlimit=1&format=json&utf8=1";
                resolve(url);
            }, error: err => reject(err)
        });
    });
}
function getExistingWarnCount(url, tags) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: url,
            type: 'GET',
            crossDomain: true,
            dataType: 'jsonp',
            success: revisionsWarn => {
                var diffWarnContent = "", level = -1;
                if ((typeof revisionsWarn['compare'] === 'undefined' || typeof revisionsWarn['compare']['*'] === 'undefined') && (typeof revisionsWarn['query'] === 'undefined' || typeof revisionsWarn['query']['pages'] === 'undefined' || revisionsWarn['query']['pages'] === -1))
                    resolve(level);
                if (typeof revisionsWarn["query"] !== "undefined" && typeof revisionsWarn["query"]["pages"] !== "undefined") {
                    var pageIdContent;
                    for (let key in revisionsWarn['query']['pages']) if (Number(key) !== -1) pageIdContent = revisionsWarn['query']['pages'][key];
                    if (typeof pageIdContent["revisions"] !== "undefined" && typeof pageIdContent["revisions"][0] !== "undefined" && typeof pageIdContent["revisions"][0]["slots"] !== "undefined" && typeof pageIdContent["revisions"][0]["slots"]["main"] !== "undefined" && typeof pageIdContent["revisions"][0]["slots"]["main"]["*"] !== "undefined")
                        diffWarnContent = pageIdContent["revisions"][0]["slots"]["main"]["*"];
                } else if (typeof revisionsWarn["compare"] !== "undefined" && typeof revisionsWarn["compare"]["*"] !== "undefined") {
                    diffWarnContent = revisionsWarn["compare"]["*"]; 
                }
                diffWarnContent = getNewFromDiff(diffWarnContent);
                for (let tagWarn in tags) if(diffWarnContent.indexOf(tags[tagWarn]) !== -1) if (level < tagWarn) level = Number(tagWarn);
                resolve(level);
            }, error: err => reject(err)
        });
    });
}

function checkIfAlreadyReported(serverUrl, scriptPath, wiki, user, pageReport, textReport, regexReport, regexReport2, summaryReport) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: 'php/doEdit.php',
            type: 'POST',
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Api-User-Agent', 'SWViewer/1.3 (https://swviewer.toolforge.org; swviewer@tools.wmflabs.org) Ajax / Report');
            },
            crossDomain: true,
            dataType: 'json',
            data: {
                checkreport: 1,
                warn: 1,
                project: serverUrl + scriptPath + "/api.php",
                wiki: wiki,
                page: pageReport,
                text: textReport,
                user: user,
                regexreport: regexReport,
                regexreport2: regexReport2,
                summary: summaryReport
            },
            success: s => {
                if (s['result'] === false) resolve(false);
                resolve(true);
            }, error: err => reject(err)
        });
    });
}

function getNewFromDiff(diffContent) {
    return diffContent.replace(/<tr>([^]*?)<\/tr>/g, function ($0, $1) {
        if ($1.search(/<td class="deletedline">/g) === -1 &&
            $1.search(/<td class="diff-marker">-<\/td>/g) === -1 &&
            $1.search(/<td class="diff-context">/g) === -1 &&
            $1.search(/<ins/g) === -1 &&
            $1.search(/<del/g) === -1)
            return $1;
        else
            return "";
    });
}

function checkKey(k, targetArray) {
    var checkArrayKey = false;
    if (targetArray.hasOwnProperty(k))
        if (targetArray[k] !== null)
            if (targetArray[k] !== "")
                if (typeof targetArray[k] !== "undefined")
                    checkArrayKey = true;
    return checkArrayKey;
}

// => get wiki configs
function getConfig(wiki) {
    var wikiConfig;
    if (config["wikis"][0].hasOwnProperty(wiki)) wikiConfig = { ...config["wikis"][0][wiki][0] }
    else wikiConfig = { ...config["wikis"][0]["others"][0] }

    if (!wikiConfig.hasOwnProperty('speedySummary')) wikiConfig['speedySummary'] = "+ delete";
    if (!wikiConfig.hasOwnProperty('speedyWarnSummary')) wikiConfig['speedyWarnSummary'] = null;
    if (!wikiConfig.hasOwnProperty('speedy')) wikiConfig['speedy'] = config["wikis"][0]["others"][0]['speedy'];
    if (!wikiConfig.hasOwnProperty('rollback')) wikiConfig['rollback'] = config["wikis"][0]["others"][0]['rollback'];
    if (!wikiConfig.hasOwnProperty('warn') || !wikiConfig.hasOwnProperty('rollback')) wikiConfig['warn'] = null;
    else wikiConfig['warn'] = wikiConfig['warn'][0];
    if (!wikiConfig.hasOwnProperty('report')) wikiConfig['report'] = null;
    else wikiConfig['report'] = wikiConfig['report'][0];
    if (!wikiConfig.hasOwnProperty('protect')) wikiConfig['protect'] = null;
    else wikiConfig['protect'] = wikiConfig['protect'][0];
    return wikiConfig;
}

/*  
====================
-----UI handlers----
====================
*/
// => to enable newPage UI
function enableNewUI() {
    document.getElementById("revert").classList.add("disabled");
    document.getElementById("customRevertBtn").classList.add("disabled");
}

// => To disabe newPage UI
function disableNewUI() {
    document.getElementById("queue").classList.remove("disabled");
    document.getElementById("revert").classList.remove("disabled");
    document.getElementById("customRevertBtn").classList.remove("disabled");
}

// => ready ui to show diff
function enableLoadingDiffUI() {
    document.getElementById("page-welcome").style.display = "none";
    document.getElementById("description-container").style.display = "grid";
    document.getElementById("controlsBase").style.display = "block";
    document.getElementById("moreOptionBtnMobile").classList.remove('disabled');
    document.getElementById("page").style.display = "block";
}
// => enable ui after diff load
function disableLoadingDiffUI() {
    document.getElementById("queue").classList.remove("disabled");
    document.getElementById("control").classList.remove("disabled");
    document.getElementById('next-diff').classList.remove('disabled');
}

// => disable controls
function disableControl() {
    document.getElementById("control").classList.add("disabled");
}


function isNotModal() {
    let allInputs = document.getElementsByTagName('input');
    let allTextarea = document.getElementsByTagName('textarea');
    for (let i = 0; i < allInputs.length; i++) if (allInputs[i] === document.activeElement) return false;
    for (let i = 0; i < allTextarea.length; i++) if (allTextarea[i] === document.activeElement) return false;
    return !document.getElementsByClassName("po__active").length && Object.keys(dialogStack).length === 0;
}

function selectTalkUsers(selectedUser) {
    document.getElementById("phrase-send-talk").value = "@" + selectedUser.textContent + ", " + document.getElementById("phrase-send-talk").value;
    document.getElementById("phrase-send-talk").focus();
    closePWDrawer('talkPWDrawer', 'talkPWOverlay');
}
function keyDownFunctOutside(keyCode) {
    angular.element(document.getElementById('angularapp')).scope().keyDownFunct(keyCode);
}

function structuredData(str, server) {
    str = str.replace(/<a title="(.*?)" href="(\/w.*?)">(.*?)<\/a>/g, function ($0, $1, $2, $3) {
        return '<a title="' + $1 + '" href="' + server + $2 + '">' + $3 + '</a>';
    });
    return str;
}

function escapeXSS(str) {
    if (str === undefined) return 'undefined';
    str = str.replace(/&amp;/g, 'ampersanttempprepswv');
    str = str.replace(/&lt;/g, 'leftbracetempprepswv');
    str = str.replace(/&gt;/g, 'rightbracetempprepswv');
    str = str.replace(/<ins class="diffchange diffchange-inline">/g, 'inspreptempswv').replace(/<\/ins>/g, 'insendpreptempswv');
    str = str.replace(/<del class="diffchange diffchange-inline">/g, 'delpreptempswv').replace(/<\/del>/g, 'delendpreptempswv');

    str = str.replace(/&/g, '&ampprerep').replace(/;/g, '&#59;').replace(/&ampprerep/g, '&amp;').replace(/</g, '&lt;');
    str = str.replace(/>/g, '&gt;').replace(/ /g, '&#32;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/\//g, '&#47;');
    str = str.replace(/\\n/g, '&prerepn').replace(/\\/g, '&#92;').replace(/&prerepn/g, '\n').replace(/\(/g, '&#40;');
    str = str.replace(/\)/g, '&#41;').replace(/{/g, '&#123;').replace(/}/g, '&#125;');
    str = str.replace(/:/g, '&#58;').replace(/=/g, '&#61;').replace(/\?/g, '&#63;').replace(/@/g, '&#64;').replace(/\|/g, '&#124;');
    str = str.replace(/\[/g, '&#91;').replace(/]/g, '&#93;').replace(/\+/g, '&#43;').replace(/-/g, '&#45;').replace(/\*/g, '&#42;');
    str = str.replace(/,/g, '&#44;');

    str = str.replace(/leftbracetempprepswv/g, '&lt;');
    str = str.replace(/rightbracetempprepswv/g, '&gt;');
    str = str.replace(/ampersanttempprepswv/g, '&amp;');

    return str;
}

function escapeXSSDiff(str) {
    str = str.replace(/<a class="mw-diff-movedpara-left".*?<\/a>/g, '-').replace(/<a class="mw-diff-movedpara-right".*?<\/a>/g, '+').replace(/<a name="movedpara_.*?<\/a>/g, '');
    str = str.replace(/(<td class="diff-addedline"><div>)(.*?)(<\/div><\/td>)/g, function ($0, $1, $2, $3) {
        return $1 + escapeXSS($2) + $3;
    });
    str = str.replace(/(<td class="diff-deletedline"><div>)(.*?)(<\/div><\/td>)/g, function ($0, $1, $2, $3) {
        return $1 + escapeXSS($2) + $3;
    });
    str = str.replace(/(<td class="diff-context"><div>)(.*?)(<\/div><\/td>)/g, function ($0, $1, $2, $3) {
        return $1 + escapeXSS($2) + $3;
    });
    str = str.replace(/(<ins class="diffchange diffchange-inline">)(.*?)(<\/ins>)/g, function ($0, $1, $2, $3) {
        return $1 + escapeXSS($2) + $3;
    });
    str = str.replace(/(<del class="diffchange diffchange-inline">)(.*?)(<\/del>)/g, function ($0, $1, $2, $3) {
        return $1 + escapeXSS($2) + $3;
    });

    str = str.replace(/inspreptempswv/g, '<ins class="diffchange diffchange-inline">').replace(/insendpreptempswv/g, '</ins>');
    str = str.replace(/delpreptempswv/g, '<del class="diffchange diffchange-inline">').replace(/delendpreptempswv/g, '</del>');

    return str;
}