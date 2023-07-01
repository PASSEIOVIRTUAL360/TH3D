(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    return i(g);
    function i(p, q) {
        switch (p['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var s = function () {
                switch (p['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (s) {
                return function () {
                    var x, y;
                    var z = (q && q['viewerName'] ? this['getComponentByName'](q['viewerName']) : undefined) || this['getMainViewer']();
                    if (p['toLowerCase']()['startsWith']('photo'))
                        x = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (B) {
                            var C = B['get']('player');
                            return C && C['get']('viewerArea') == z;
                        })['map'](function (D) {
                            return D['get']('media')['get']('playList');
                        });
                    else {
                        x = this['_getPlayListsWithViewer'](z);
                        y = o['bind'](this, z);
                    }
                    if (!h) {
                        for (var A = 0x0; A < x['length']; ++A) {
                            x[A]['bind']('changing', k, this);
                        }
                        h = !![];
                    }
                    return n['call'](this, x, s, y);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](p);
            };
        default:
            if (p['toLowerCase']()['startsWith']('viewer.')) {
                var t = p['split']('.');
                var u = t[0x1];
                if (u) {
                    var v = t['slice'](0x2)['join']('.');
                    return i(v, { 'viewerName': u });
                }
            } else if (p['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var w = undefined;
                var s = function () {
                    switch (p['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var E = /quiz\.([\w_]+)\.(.+)/['exec'](p);
                        if (E) {
                            w = E[0x1];
                            switch ('quiz.' + E[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (s) {
                    return function () {
                        var F = this['get']('data')['quiz'];
                        if (F) {
                            if (!h) {
                                if (w != undefined)
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, J[L]['id'], s), this);
                                        }
                                    } else {
                                        F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, w, s), this);
                                    }
                                else
                                    F['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], l['call'](this, s), this);
                                h = !![];
                            }
                            try {
                                var O = 0x0;
                                if (w != undefined) {
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            O += F['getObjective'](J[L]['id'], s);
                                        }
                                    } else {
                                        O = F['getObjective'](w, s);
                                    }
                                } else {
                                    O = F['get'](s);
                                    if (s == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        O += 0x1;
                                }
                                return O;
                            } catch (P) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function j() {
        var Q = this['get']('data');
        Q['updateText'](Q['translateObjs'][f]);
    }
    function k(R) {
        var S = R['data']['nextSelectedIndex'];
        if (S >= 0x0) {
            var T = R['source']['get']('items')[S];
            var U = function () {
                T['unbind']('begin', U, this);
                j['call'](this);
            };
            T['bind']('begin', U, this);
        }
    }
    function l(V) {
        return function (W) {
            if (V in W) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function m(X, Y) {
        return function (Z, a0) {
            if (X == Z && Y in a0) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function n(a1, a2, a3) {
        for (var a4 = 0x0; a4 < a1['length']; ++a4) {
            var a5 = a1[a4];
            var a6 = a5['get']('selectedIndex');
            if (a6 >= 0x0) {
                var a7 = a2['split']('.');
                var a8 = a5['get']('items')[a6];
                if (a3 !== undefined && !a3['call'](this, a8))
                    continue;
                for (var a9 = 0x0; a9 < a7['length']; ++a9) {
                    if (a8 == undefined)
                        return '';
                    a8 = 'get' in a8 ? a8['get'](a7[a9]) : a8[a7[a9]];
                }
                return a8;
            }
        }
        return '';
    }
    function o(aa, ab) {
        var ac = ab['get']('player');
        return ac !== undefined && ac['get']('viewerArea') == aa;
    }
}
var script = {"id":"rootPlayer","children":["this.MainViewer_mobile"],"backgroundColor":["#000000"],"scrollBarMargin":2,"data":{"textToSpeechConfig":{"speechOnQuizQuestion":false,"volume":1,"speechOnInfoWindow":false,"speechOnTooltip":false,"stopBackgroundAudio":false,"rate":1,"pitch":1},"locales":{"pt":"locale/pt.txt"},"defaultLocale":"pt","name":"Player468","history":{}},"hash": "dd990e3bb71475e8ae7f9b180df55079aec9ec2a2250a96bf2574b7f14a99e69", "definitions": [{"thumbnailUrl":"media/model_0CDDFC8D_128E_C0A2_41AC_18A2141FEE64_t.jpg","model":"this.res_0E651E0B_128E_C3A6_4174_A8031417AB27","label":trans('model_0CDDFC8D_128E_C0A2_41AC_18A2141FEE64.label'),"backgroundColor":"#333333","environmentIntensity":0.51,"castShadow":true,"id":"model_0CDDFC8D_128E_C0A2_41AC_18A2141FEE64","floorRadius":6.1,"surfaceReticleMinRadius":15,"lights":["this.light_0E62FE0B_128E_C3A6_41AE_B6F1F7232A74","this.light_0E63DE0C_128E_C3A2_4179_58C20F31B224"],"surfaceReticleMaxRadius":50,"objects":[],"surfaceReticleRadius":0.02,"bakedTextures":true,"data":{"showOnlyHotspotsLineSightInPanoramas":true,"showOnlyHotspotsLineSight":true,"label":"TH3D"},"surfaceSelectionCoef":2,"camera":"this.cam_0E62AE0B_128E_C3A6_41B2_9C2B236D59BE","class":"Model3D"},{"id":"mainPlayList","class":"PlayList","items":[{"player":"this.MainViewer_mobileModel3DPlayer","end":"this.trigger('tourEnded')","start":"this.MainViewer_mobileModel3DPlayer.set('displayPlaybackBar', true)","class":"Model3DPlayListItem","media":"this.model_0CDDFC8D_128E_C0A2_41AC_18A2141FEE64"}]},{"id":"MainViewer_mobileModel3DPlayer","class":"Model3DPlayer","viewerArea":"this.MainViewer_mobile"},{"id":"MainViewer_mobile","playbackBarBorderColor":"#FFFFFF","toolTipBorderColor":"#767676","toolTipPaddingBottom":3,"playbackBarBottom":5,"subtitlesTextShadowOpacity":1,"progressLeft":0,"progressBackgroundColorRatios":[0.00784313725490196],"vrPointerColor":"#FFFFFF","toolTipFontColor":"#FFFFFF","subtitlesFontColor":"#FFFFFF","progressRight":0,"toolTipPaddingRight":5,"playbackBarHeadShadowOpacity":0.7,"progressBarBorderColor":"#0066FF","subtitlesTextShadowHorizontalLength":1,"progressBarBackgroundColorRatios":[0],"playbackBarHeadShadowBlurRadius":1.5,"progressBorderColor":"#FFFFFF","playbackBarLeft":0,"toolTipBorderRadius":1,"subtitlesBottom":50,"playbackBarHeadBorderColor":"#000000","progressBarBackgroundColor":["#3399FF"],"progressBackgroundColor":["#FFFFFF"],"subtitlesTop":0,"toolTipShadowBlurRadius":1,"height":"100%","minHeight":25,"progressBottom":0,"subtitlesTextShadowColor":"#000000","subtitlesFontSize":"3vmin","firstTransitionDuration":0,"surfaceReticleColor":"#FFFFFF","playbackBarRight":0,"progressHeight":10,"subtitlesTextShadowVerticalLength":1,"toolTipShadowColor":"#333333","progressBorderSize":0,"playbackBarBorderRadius":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"minWidth":50,"subtitlesBackgroundOpacity":0.2,"progressBarBorderSize":0,"playbackBarHeadHeight":15,"toolTipTextShadowColor":"#000000","progressBarBorderRadius":0,"playbackBarHeadShadowColor":"#000000","toolTipFontFamily":"Georgia","toolTipFontSize":6.5,"toolTipOpacity":0.5,"playbackBarHeadWidth":6,"toolTipTextShadowBlurRadius":1,"subtitlesBorderColor":"#FFFFFF","toolTipPaddingTop":3,"toolTipPaddingLeft":5,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarBackgroundColor":["#FFFFFF"],"progressBorderRadius":0,"playbackBarProgressBorderColor":"#000000","playbackBarBorderSize":0,"playbackBarProgressBorderSize":0,"playbackBarBackgroundOpacity":1,"playbackBarProgressBorderRadius":0,"playbackBarHeadBorderRadius":0,"playbackBarHeadBackgroundColorRatios":[0,1],"width":"100%","class":"ViewerArea","top":0,"subtitlesFontFamily":"Arial","data":{"name":"Main Viewer"},"vrPointerSelectionTime":2000,"vrPointerSelectionColor":"#FF6600","playbackBarHeadBorderSize":0,"toolTipBackgroundColor":"#000000","playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarHeight":10,"playbackBarProgressBackgroundColorRatios":[0],"subtitlesGap":0,"playbackBarBackgroundColorDirection":"vertical","subtitlesBackgroundColor":"#000000","toolTipShadowOpacity":0,"left":0,"playbackBarHeadShadow":true},{"id":"res_0E651E0B_128E_C3A6_4174_A8031417AB27","levels":[{"class":"Model3DResourceLevel","url":"media/model_0CDDFC8D_128E_C0A2_41AC_18A2141FEE64/scene.glb"},{"class":"Model3DResourceLevel","url":"media/model_0CDDFC8D_128E_C0A2_41AC_18A2141FEE64/scene_mobile.glb","tags":"mobile"}],"class":"Model3DResource"},{"id":"light_0E62FE0B_128E_C3A6_41AE_B6F1F7232A74","castShadow":true,"pitch":45,"intensity":0.5,"yaw":-62,"class":"OrbitLight","shadowTolerance":2},{"id":"light_0E63DE0C_128E_C3A2_4179_58C20F31B224","castShadow":true,"pitch":75,"intensity":0.3,"yaw":135,"class":"OrbitLight","shadowTolerance":2},{"id":"cam_0E62AE0B_128E_C3A6_41B2_9C2B236D59BE","maxY":9.18,"initialZ":-0.19,"initialPitch":-30,"minY":-9.77,"maxDistance":10.38,"minDistance":1.3,"initialY":-0.29,"maxX":9.85,"minZ":-8.53,"initialX":0.7,"minX":-8.44,"initialDistance":5.19,"maxZ":8.14,"class":"OrbitModel3DCamera","autoNearFar":true}],"scrollBarColor":"#000000","defaultMenu":["fullscreen","mute","rotation"],"backgroundColorRatios":[0],"scripts":{"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"getPixels":TDV.Tour.Script.getPixels,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"showWindow":TDV.Tour.Script.showWindow,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getComponentByName":TDV.Tour.Script.getComponentByName,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"playAudioList":TDV.Tour.Script.playAudioList,"quizShowScore":TDV.Tour.Script.quizShowScore,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"createTween":TDV.Tour.Script.createTween,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"initQuiz":TDV.Tour.Script.initQuiz,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"historyGoForward":TDV.Tour.Script.historyGoForward,"showPopupImage":TDV.Tour.Script.showPopupImage,"quizStart":TDV.Tour.Script.quizStart,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"init":TDV.Tour.Script.init,"translate":TDV.Tour.Script.translate,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getKey":TDV.Tour.Script.getKey,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"historyGoBack":TDV.Tour.Script.historyGoBack,"shareSocial":TDV.Tour.Script.shareSocial,"setMapLocation":TDV.Tour.Script.setMapLocation,"setLocale":TDV.Tour.Script.setLocale,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"downloadFile":TDV.Tour.Script.downloadFile,"getMainViewer":TDV.Tour.Script.getMainViewer,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"initAnalytics":TDV.Tour.Script.initAnalytics,"clone":TDV.Tour.Script.clone,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"quizFinish":TDV.Tour.Script.quizFinish,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"registerKey":TDV.Tour.Script.registerKey,"unregisterKey":TDV.Tour.Script.unregisterKey,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"existsKey":TDV.Tour.Script.existsKey,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"setValue":TDV.Tour.Script.setValue,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"startMeasurement":TDV.Tour.Script.startMeasurement,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"textToSpeech":TDV.Tour.Script.textToSpeech,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"isPanorama":TDV.Tour.Script.isPanorama,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"mixObject":TDV.Tour.Script.mixObject,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getMediaByName":TDV.Tour.Script.getMediaByName,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getOverlays":TDV.Tour.Script.getOverlays,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"cloneBindings":TDV.Tour.Script.cloneBindings,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"executeJS":TDV.Tour.Script.executeJS,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"openLink":TDV.Tour.Script.openLink,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"resumePlayers":TDV.Tour.Script.resumePlayers,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"_initSplitViewer":TDV.Tour.Script._initSplitViewer},"vrPolyfillScale":0.5,"class":"Player","gap":10,"layout":"absolute","start":"this.init(); this.initAnalytics()","watermark":false,"width":"100%","height":"100%","minHeight":20,"minWidth":20};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var ad = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return ad;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2023.0.14.js.map
})();
//Generated with v2023.0.14, Sat Jul 1 2023