(function () {
    var a = {};
    function trans(c, d) {
        var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        a[e[0x0]] = e;
        return '';
    }
    function regTextVar(c, d) {
        var e = ![];
        d = d['toLowerCase']();
        var f = function () {
            var o = this['get']('data');
            o['updateText'](o['translateObjs'][c]);
        };
        var g = function (o) {
            var p = o['data']['nextSelectedIndex'];
            if (p >= 0x0) {
                var q = o['source']['get']('items')[p];
                var r = function () {
                    q['unbind']('start', r, this);
                    f['call'](this);
                };
                q['bind']('start', r, this);
            } else
                f['call'](this);
        };
        var h = function (o) {
            return function (p) {
                if (o in p) {
                    f['call'](this);
                }
            }['bind'](this);
        };
        var i = function (o, p) {
            return function (q, r) {
                if (o == q && p in r) {
                    f['call'](this);
                }
            }['bind'](this);
        };
        var j = function (o, p, q) {
            for (var r = 0x0; r < o['length']; ++r) {
                var s = o[r];
                var t = s['get']('selectedIndex');
                if (t >= 0x0) {
                    var u = p['split']('.');
                    var v = s['get']('items')[t];
                    if (q !== undefined && !q['call'](this, v))
                        continue;
                    for (var w = 0x0; w < u['length']; ++w) {
                        if (v == undefined)
                            return '';
                        v = 'get' in v ? v['get'](u[w]) : v[u[w]];
                    }
                    return v;
                }
            }
            return '';
        };
        var k = function (o) {
            var p = o['get']('player');
            return p !== undefined && p['get']('viewerArea') == this['getMainViewer']();
        };
        switch (d) {
        case 'title':
        case 'subtitle':
            var m = function () {
                switch (d) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (m) {
                return function () {
                    var o = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!e) {
                        for (var p = 0x0; p < o['length']; ++p) {
                            o[p]['bind']('changing', g, this);
                        }
                        e = !![];
                    }
                    return j['call'](this, o, m, k);
                };
            }
            break;
        default:
            if (d['startsWith']('quiz.') && 'Quiz' in TDV) {
                var n = undefined;
                var m = function () {
                    switch (d) {
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
                        var o = /quiz\.([\w_]+)\.(.+)/['exec'](d);
                        if (o) {
                            n = o[0x1];
                            switch ('quiz.' + o[0x2]) {
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
                if (m) {
                    return function () {
                        var o = this['get']('data')['quiz'];
                        if (o) {
                            if (!e) {
                                if (n != undefined)
                                    if (n == 'global') {
                                        var q = this['get']('data')['quizConfig'];
                                        var s = q['objectives'];
                                        for (var u = 0x0, w = s['length']; u < w; ++u) {
                                            o['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], i['call'](this, s[u]['id'], m), this);
                                        }
                                    } else {
                                        o['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], i['call'](this, n, m), this);
                                    }
                                else
                                    o['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], h['call'](this, m), this);
                                e = !![];
                            }
                            try {
                                var x = 0x0;
                                if (n != undefined) {
                                    if (n == 'global') {
                                        var q = this['get']('data')['quizConfig'];
                                        var s = q['objectives'];
                                        for (var u = 0x0, w = s['length']; u < w; ++u) {
                                            x += o['getObjective'](s[u]['id'], m);
                                        }
                                    } else {
                                        x = o['getObjective'](n, m);
                                    }
                                } else {
                                    x = o['get'](m);
                                    if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        x += 0x1;
                                }
                                return x;
                            } catch (y) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, c) {
        var d = {};
        d['player'] = player;
        d['playList'] = c;
        function e(h) {
            for (var j = 0x0; j < h['length']; ++j) {
                var k = h[j];
                if ('id' in k)
                    player[k['id']] = k;
            }
        }
        if (d['questions']) {
            e(d['questions']);
            for (var f = 0x0; f < d['questions']['length']; ++f) {
                var g = d['questions'][f];
                e(g['options']);
            }
        }
        if (d['objectives']) {
            e(d['objectives']);
        }
        if (d['califications']) {
            e(d['califications']);
        }
        if (d['score']) {
            player[d['score']['id']] = d['score'];
        }
        if (d['question']) {
            player[d['question']['id']] = d['question'];
        }
        if (d['timeout']) {
            player[d['timeout']['id']] = d['timeout'];
        }
        player['get']('data')['translateObjs'] = a;
        return d;
    }
    var b = {"mouseWheelEnabled":true,"start":"this.init()","backgroundColorDirection":"vertical","data":{"defaultLocale":"pt","name":"Player43899","textToSpeechConfig":{"speechOnTooltip":false,"pitch":1,"rate":1,"stopBackgroundAudio":false,"speechOnQuizQuestion":false,"volume":1,"speechOnInfoWindow":false},"locales":{"pt":"locale/pt.txt"}},"paddingBottom":0,"id":"rootPlayer","gap":10,"desktopMipmappingEnabled":false,"paddingLeft":0,"vrPolyfillScale":0.75,"verticalAlign":"top","scrollBarOpacity":0.5,"mobileMipmappingEnabled":false,"width":"100%","backgroundPreloadEnabled":true,"paddingRight":0,"children":["this.MainViewer","this.Container_0E561CF4_05BA_FE9E_4167_7CABDBA881D2"],"scripts":{"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"quizStart":TDV.Tour.Script.quizStart,"quizFinish":TDV.Tour.Script.quizFinish,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"cloneCamera":TDV.Tour.Script.cloneCamera,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"shareSocial":TDV.Tour.Script.shareSocial,"textToSpeech":TDV.Tour.Script.textToSpeech,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"setValue":TDV.Tour.Script.setValue,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"clone":TDV.Tour.Script.clone,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"historyGoForward":TDV.Tour.Script.historyGoForward,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"init":TDV.Tour.Script.init,"getPixels":TDV.Tour.Script.getPixels,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getOverlays":TDV.Tour.Script.getOverlays,"setLocale":TDV.Tour.Script.setLocale,"getMainViewer":TDV.Tour.Script.getMainViewer,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getKey":TDV.Tour.Script.getKey,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"historyGoBack":TDV.Tour.Script.historyGoBack,"existsKey":TDV.Tour.Script.existsKey,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"openLink":TDV.Tour.Script.openLink,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"resumePlayers":TDV.Tour.Script.resumePlayers,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getMediaByName":TDV.Tour.Script.getMediaByName,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"setMapLocation":TDV.Tour.Script.setMapLocation,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"isPanorama":TDV.Tour.Script.isPanorama,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"showPopupImage":TDV.Tour.Script.showPopupImage,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"initQuiz":TDV.Tour.Script.initQuiz,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"showWindow":TDV.Tour.Script.showWindow,"unregisterKey":TDV.Tour.Script.unregisterKey,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"translate":TDV.Tour.Script.translate,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"registerKey":TDV.Tour.Script.registerKey,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"playAudioList":TDV.Tour.Script.playAudioList,"getComponentByName":TDV.Tour.Script.getComponentByName,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"initAnalytics":TDV.Tour.Script.initAnalytics,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"quizShowScore":TDV.Tour.Script.quizShowScore,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"mixObject":TDV.Tour.Script.mixObject,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags},"backgroundColorRatios":[0],"contentOpaque":false,"defaultVRPointer":"laser","borderSize":0,"horizontalAlign":"left","backgroundColor":["#FFFFFF"],"class":"Player","height":"100%","mediaActivationMode":"window","borderRadius":0,"minHeight":20,"layout":"absolute","propagateClick":false,"minWidth":20,"menu":["this.TDVAuthor"],"backgroundOpacity":1,"shadow":false,"toolTipHorizontalAlign":"center","scrollBarColor":"#000000","buttonToggleMute":"this.IconButton_5266705B_5F07_7DC4_41D3_24192DF36080","downloadEnabled":false,"scrollBarMargin":2,"overflow":"hidden","paddingTop":0,"scrollBarVisible":"rollOver","scrollBarWidth":10,"definitions": [{"items":[{"begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","media":"this.panorama_0F79F0B0_05AA_E696_4193_3EF05031E7DB","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_0F79F0B0_05AA_E696_4193_3EF05031E7DB_camera"},{"begin":"this.setEndToItemIndex(this.mainPlayList, 1, 0)","media":"this.panorama_1474E14B_05A6_2789_4167_E69C46AAFAEA","end":"this.trigger('tourEnded')","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_1474E14B_05A6_2789_4167_E69C46AAFAEA_camera"}],"id":"mainPlayList","class":"PlayList"},{"paddingBottom":0,"id":"IconButton_5266705B_5F07_7DC4_41D5_17832A26EB46","transparencyActive":true,"width":40,"paddingLeft":0,"verticalAlign":"middle","pressedIconURL":"skin/IconButton_5266705B_5F07_7DC4_41D5_17832A26EB46_pressed.png","paddingRight":0,"horizontalAlign":"center","borderSize":0,"height":40,"class":"IconButton","borderRadius":0,"mode":"push","minHeight":0,"propagateClick":false,"minWidth":0,"rollOverIconURL":"skin/IconButton_5266705B_5F07_7DC4_41D5_17832A26EB46_rollover.png","backgroundOpacity":0,"shadow":false,"toolTipHorizontalAlign":"center","iconURL":"skin/IconButton_5266705B_5F07_7DC4_41D5_17832A26EB46.png","paddingTop":0,"cursor":"hand","data":{"name":"Button49923"}},{"paddingBottom":0,"id":"IconButton_5266705B_5F07_7DC4_41BA_9DC5EC13F0B8","transparencyActive":true,"width":40,"paddingLeft":0,"verticalAlign":"middle","pressedIconURL":"skin/IconButton_5266705B_5F07_7DC4_41BA_9DC5EC13F0B8_pressed.png","paddingRight":0,"horizontalAlign":"center","borderSize":0,"height":40,"class":"IconButton","borderRadius":0,"mode":"push","minHeight":0,"propagateClick":false,"minWidth":0,"rollOverIconURL":"skin/IconButton_5266705B_5F07_7DC4_41BA_9DC5EC13F0B8_rollover.png","backgroundOpacity":0,"shadow":false,"toolTipHorizontalAlign":"center","iconURL":"skin/IconButton_5266705B_5F07_7DC4_41BA_9DC5EC13F0B8.png","paddingTop":0,"cursor":"hand","data":{"name":"Button49921"}},{"paddingBottom":0,"id":"IconButton_5266705B_5F07_7DC4_41D3_24192DF36080","transparencyActive":true,"width":40,"paddingLeft":0,"verticalAlign":"middle","pressedIconURL":"skin/IconButton_5266705B_5F07_7DC4_41D3_24192DF36080_pressed.png","paddingRight":0,"horizontalAlign":"center","borderSize":0,"height":40,"class":"IconButton","borderRadius":0,"mode":"toggle","minHeight":0,"propagateClick":false,"minWidth":0,"backgroundOpacity":0,"shadow":false,"toolTipHorizontalAlign":"center","iconURL":"skin/IconButton_5266705B_5F07_7DC4_41D3_24192DF36080.png","paddingTop":0,"cursor":"hand","data":{"name":"Button49930"}},{"paddingBottom":0,"id":"IconButton_5266705B_5F07_7DC4_41C4_C06EEB3DBFC5","transparencyActive":true,"width":40,"paddingLeft":0,"verticalAlign":"middle","pressedIconURL":"skin/IconButton_5266705B_5F07_7DC4_41C4_C06EEB3DBFC5_pressed.png","paddingRight":0,"horizontalAlign":"center","borderSize":0,"height":40,"class":"IconButton","borderRadius":0,"mode":"push","minHeight":0,"propagateClick":false,"minWidth":0,"rollOverIconURL":"skin/IconButton_5266705B_5F07_7DC4_41C4_C06EEB3DBFC5_rollover.png","backgroundOpacity":0,"shadow":false,"toolTipHorizontalAlign":"center","iconURL":"skin/IconButton_5266705B_5F07_7DC4_41C4_C06EEB3DBFC5.png","paddingTop":0,"cursor":"hand","data":{"name":"Button49922"}},{"buttonZoomIn":"this.IconButton_5266705B_5F07_7DC4_41CA_4047298C87B0","buttonPlayLeft":"this.IconButton_5266705B_5F07_7DC4_41C4_C06EEB3DBFC5","class":"PanoramaPlayer","viewerArea":"this.MainViewer","buttonRestart":"this.IconButton_5266705B_5F07_7DC4_41BA_9DC5EC13F0B8","buttonZoomOut":"this.IconButton_5266705B_5F07_7DC4_41CE_F9B2B5401877","id":"MainViewerPanoramaPlayer","aaEnabled":true,"buttonMoveRight":"this.IconButton_5266705B_5F07_7DC4_41D1_2478984C07CA","arrowKeysAction":"translate","displayPlaybackBar":true,"mouseControlMode":"drag_rotation","touchControlMode":"drag_rotation","surfaceSelectionEnabled":false,"buttonMoveLeft":"this.IconButton_5266705B_5F07_7DC4_41D5_17832A26EB46","zoomEnabled":true,"buttonMoveUp":"this.IconButton_5266705B_5F07_7DC4_4166_35648BCE8FCF","gyroscopeVerticalDraggingEnabled":true,"buttonPause":"this.IconButton_5266705B_5F07_7DC4_41C7_A597F5CD8E3C","buttonMoveDown":"this.IconButton_5266705B_5F07_7DC4_41A9_D1B8058C1D69","buttonPlayRight":"this.IconButton_5266705B_5F07_7DC4_41B2_33DE428A6E68"},{"initialSequence":"this.sequence_0A23A220_05A6_25B6_418E_500E420D47DA","class":"PanoramaCamera","initialPosition":{"yaw":2.49,"class":"PanoramaCameraPosition","pitch":-38.3},"id":"panorama_1474E14B_05A6_2789_4167_E69C46AAFAEA_camera","automaticZoomSpeed":10,"hoverFactor":0},{"paddingBottom":0,"id":"IconButton_5266705B_5F07_7DC4_41CA_4047298C87B0","transparencyActive":true,"width":40,"paddingLeft":0,"verticalAlign":"middle","pressedIconURL":"skin/IconButton_5266705B_5F07_7DC4_41CA_4047298C87B0_pressed.png","paddingRight":0,"horizontalAlign":"center","borderSize":0,"height":40,"class":"IconButton","borderRadius":0,"mode":"push","minHeight":0,"propagateClick":false,"minWidth":0,"rollOverIconURL":"skin/IconButton_5266705B_5F07_7DC4_41CA_4047298C87B0_rollover.png","backgroundOpacity":0,"shadow":false,"toolTipHorizontalAlign":"center","iconURL":"skin/IconButton_5266705B_5F07_7DC4_41CA_4047298C87B0.png","paddingTop":0,"cursor":"hand","data":{"name":"Button49931"}},{"class":"PanoramaCamera","initialPosition":{"yaw":-7.92,"class":"PanoramaCameraPosition","pitch":-23.47},"automaticZoomSpeed":10,"initialSequence":"this.sequence_0C4EE2C0_05AA_2AF6_4192_87373524D64A","id":"panorama_0F79F0B0_05AA_E696_4193_3EF05031E7DB_camera","timeToIdle":6000,"displayOriginPosition":{"stereographicFactor":1,"hfov":165,"class":"RotationalCameraDisplayPosition","yaw":-7.92,"pitch":-90},"idleSequence":"this.sequence_0C4EE2C0_05AA_2AF6_4192_87373524D64A","displayMovements":[{"easing":"linear","class":"TargetRotationalCameraDisplayMovement","duration":1500},{"easing":"cubic_in_out","class":"TargetRotationalCameraDisplayMovement","targetStereographicFactor":0,"duration":3000,"targetPitch":-23.47}],"hoverFactor":0},{"paddingBottom":0,"id":"IconButton_5266705B_5F07_7DC4_41CE_F9B2B5401877","transparencyActive":true,"width":40,"paddingLeft":0,"verticalAlign":"middle","pressedIconURL":"skin/IconButton_5266705B_5F07_7DC4_41CE_F9B2B5401877_pressed.png","paddingRight":0,"horizontalAlign":"center","borderSize":0,"height":40,"class":"IconButton","borderRadius":0,"mode":"push","minHeight":0,"propagateClick":false,"minWidth":0,"rollOverIconURL":"skin/IconButton_5266705B_5F07_7DC4_41CE_F9B2B5401877_rollover.png","backgroundOpacity":0,"shadow":false,"toolTipHorizontalAlign":"center","iconURL":"skin/IconButton_5266705B_5F07_7DC4_41CE_F9B2B5401877.png","paddingTop":0,"cursor":"hand","data":{"name":"Button49920"}},{"paddingBottom":0,"id":"IconButton_5266705B_5F07_7DC4_41C7_A597F5CD8E3C","transparencyActive":true,"width":40,"paddingLeft":0,"verticalAlign":"middle","pressedIconURL":"skin/IconButton_5266705B_5F07_7DC4_41C7_A597F5CD8E3C_pressed.png","paddingRight":0,"horizontalAlign":"center","borderSize":0,"height":40,"class":"IconButton","borderRadius":0,"mode":"toggle","minHeight":0,"propagateClick":false,"minWidth":0,"backgroundOpacity":0,"shadow":false,"toolTipHorizontalAlign":"center","iconURL":"skin/IconButton_5266705B_5F07_7DC4_41C7_A597F5CD8E3C.png","paddingTop":0,"cursor":"hand","data":{"name":"Button49926"}},{"data":{"name":"Container49919"},"paddingBottom":0,"id":"Container_5266705B_5F07_7DC4_4164_13C497C5A794","gap":4,"width":392,"paddingLeft":0,"verticalAlign":"middle","scrollBarOpacity":0.5,"children":["this.IconButton_5266705B_5F07_7DC4_41CE_F9B2B5401877","this.IconButton_5266705B_5F07_7DC4_41BA_9DC5EC13F0B8","this.IconButton_5266705B_5F07_7DC4_41C4_C06EEB3DBFC5","this.IconButton_5266705B_5F07_7DC4_41D5_17832A26EB46","this.Container_5266705B_5F07_7DC4_41D1_DB7A4AB3DA6C","this.IconButton_5266705B_5F07_7DC4_41D1_2478984C07CA","this.IconButton_5266705B_5F07_7DC4_41B2_33DE428A6E68","this.IconButton_5266705B_5F07_7DC4_41D3_24192DF36080","this.IconButton_5266705B_5F07_7DC4_41CA_4047298C87B0"],"paddingRight":0,"contentOpaque":false,"borderSize":0,"horizontalAlign":"center","height":"100%","class":"Container","layout":"horizontal","borderRadius":0,"minHeight":20,"propagateClick":false,"minWidth":392,"backgroundOpacity":0,"shadow":false,"toolTipHorizontalAlign":"center","scrollBarColor":"#000000","scrollBarMargin":2,"overflow":"hidden","paddingTop":0,"scrollBarWidth":10,"scrollBarVisible":"rollOver"},{"class":"Panorama","hfovMin":"120%","label":trans('panorama_1474E14B_05A6_2789_4167_E69C46AAFAEA.label'),"id":"panorama_1474E14B_05A6_2789_4167_E69C46AAFAEA","data":{"label":"UNIVET","subtitle":trans('panorama_1474E14B_05A6_2789_4167_E69C46AAFAEA.subtitle','panorama_1474E14B_05A6_2789_4167_E69C46AAFAEA.data.subtitle')},"pitch":0,"overlays":["this.overlay_14266AE3_05A5_DABA_4196_CD2218619BA0","this.overlay_17B76514_05DA_6F9E_4184_D394B15F5FBE"],"partial":false,"thumbnailUrl":"media/panorama_1474E14B_05A6_2789_4167_E69C46AAFAEA_t.jpg","hfovMax":130,"frames":[{"class":"CubicPanoramaFrame","cube":{"levels":[{"url":"media/panorama_1474E14B_05A6_2789_4167_E69C46AAFAEA_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":"ondemand","colCount":36,"width":18432,"rowCount":6,"height":3072},{"url":"media/panorama_1474E14B_05A6_2789_4167_E69C46AAFAEA_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":"ondemand","colCount":18,"width":9216,"rowCount":3,"height":1536},{"url":"media/panorama_1474E14B_05A6_2789_4167_E69C46AAFAEA_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":"ondemand","colCount":12,"width":6144,"rowCount":2,"height":1024},{"url":"media/panorama_1474E14B_05A6_2789_4167_E69C46AAFAEA_0/{face}/3/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":["ondemand","preload"],"colCount":6,"width":3072,"rowCount":1,"height":512},{"url":"media/panorama_1474E14B_05A6_2789_4167_E69C46AAFAEA_0/{face}/vr/0.jpg","class":"TiledImageResourceLevel","tags":"mobilevr","colCount":6,"width":9216,"rowCount":1,"height":1536}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_1474E14B_05A6_2789_4167_E69C46AAFAEA_t.jpg"}],"vfov":180,"hfov":360,"adjacentPanoramas":[{"class":"AdjacentPanorama","backwardYaw":-25.22,"distance":15.93,"panorama":"this.panorama_0F79F0B0_05AA_E696_4193_3EF05031E7DB","yaw":-0.63,"data":{"overlayID":"overlay_14266AE3_05A5_DABA_4196_CD2218619BA0"},"select":"this.overlay_14266AE3_05A5_DABA_4196_CD2218619BA0.get('areas').forEach(function(a){ a.trigger('click') })"}]},{"paddingBottom":0,"id":"IconButton_5266705B_5F07_7DC4_4166_35648BCE8FCF","transparencyActive":true,"width":40,"paddingLeft":0,"verticalAlign":"middle","pressedIconURL":"skin/IconButton_5266705B_5F07_7DC4_4166_35648BCE8FCF_pressed.png","paddingRight":0,"horizontalAlign":"center","borderSize":0,"height":40,"class":"IconButton","borderRadius":0,"mode":"push","minHeight":0,"propagateClick":false,"minWidth":0,"rollOverIconURL":"skin/IconButton_5266705B_5F07_7DC4_4166_35648BCE8FCF_rollover.png","backgroundOpacity":0,"shadow":false,"toolTipHorizontalAlign":"center","iconURL":"skin/IconButton_5266705B_5F07_7DC4_4166_35648BCE8FCF.png","paddingTop":0,"cursor":"hand","data":{"name":"Button49925"}},{"data":{"name":"Container44746"},"paddingBottom":0,"id":"Container_0E561CF4_05BA_FE9E_4167_7CABDBA881D2","left":"0%","paddingLeft":0,"gap":10,"verticalAlign":"middle","scrollBarOpacity":0.5,"width":"100%","children":["this.Container_5266705B_5F07_7DC4_4164_13C497C5A794"],"paddingRight":0,"contentOpaque":false,"borderSize":0,"horizontalAlign":"center","height":142,"class":"Container","layout":"horizontal","borderRadius":0,"bottom":"0%","minHeight":1,"propagateClick":false,"minWidth":1,"backgroundOpacity":0,"shadow":false,"toolTipHorizontalAlign":"center","scrollBarColor":"#000000","scrollBarMargin":2,"overflow":"scroll","paddingTop":0,"scrollBarWidth":10,"scrollBarVisible":"rollOver"},{"progressBackgroundColorRatios":[0,1],"progressBottom":1,"id":"MainViewer","left":0,"playbackBarHeadShadowHorizontalLength":0,"playbackBarHeadShadowVerticalLength":0,"toolTipTextShadowBlurRadius":3,"surfaceReticleColor":"#FFFFFF","progressOpacity":1,"displayTooltipInSurfaceSelection":true,"subtitlesHorizontalAlign":"center","width":"100%","playbackBarHeadBorderRadius":0,"progressHeight":20,"translationTransitionDuration":1000,"playbackBarProgressOpacity":1,"subtitlesTextShadowOpacity":1,"playbackBarProgressBackgroundColorDirection":"vertical","playbackBarHeadShadowBlurRadius":3,"playbackBarBackgroundColor":["#EEEEEE","#CCCCCC"],"subtitlesTextShadowHorizontalLength":1,"progressBorderSize":2,"displayTooltipInTouchScreens":true,"subtitlesBorderSize":0,"borderSize":0,"playbackBarHeadBorderColor":"#000000","playbackBarHeight":20,"toolTipShadowHorizontalLength":0,"playbackBarHeadBackgroundColorDirection":"vertical","toolTipTextShadowOpacity":0,"playbackBarHeadWidth":6,"toolTipPaddingBottom":4,"subtitlesTextShadowVerticalLength":1,"class":"ViewerArea","height":"100%","transitionDuration":500,"progressBarBorderRadius":4,"subtitlesFontColor":"#FFFFFF","progressBackgroundOpacity":1,"firstTransitionDuration":0,"playbackBarBackgroundColorDirection":"vertical","progressBorderColor":"#AAAAAA","playbackBarProgressBorderSize":0,"playbackBarRight":0,"progressBarBackgroundColor":["#222222","#444444"],"progressBarBorderSize":0,"subtitlesFontWeight":"normal","propagateClick":false,"playbackBarBorderSize":2,"shadow":false,"toolTipFontColor":"#606060","toolTipPaddingRight":6,"subtitlesPaddingLeft":5,"progressBarBackgroundColorDirection":"vertical","playbackBarProgressBorderRadius":0,"progressBarBackgroundColorRatios":[0,1],"toolTipHorizontalAlign":"center","progressBarBorderColor":"#000000","subtitlesTop":0,"subtitlesBottom":50,"paddingTop":0,"playbackBarProgressBackgroundColor":["#222222","#444444"],"playbackBarLeft":0,"subtitlesPaddingRight":5,"toolTipShadowSpread":0,"toolTipFontWeight":"normal","paddingBottom":0,"playbackBarHeadShadowOpacity":0.7,"subtitlesTextShadowColor":"#000000","surfaceReticleSelectionColor":"#FFFFFF","subtitlesFontSize":"3vmin","vrPointerColor":"#FFFFFF","toolTipPaddingLeft":6,"subtitlesPaddingBottom":5,"toolTipOpacity":1,"toolTipDisplayTime":600,"surfaceReticleSelectionOpacity":1,"toolTipBackgroundColor":"#F6F6F6","progressBackgroundColorDirection":"vertical","playbackBarHeadHeight":30,"paddingLeft":0,"playbackBarHeadShadowColor":"#000000","subtitlesBorderColor":"#FFFFFF","playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesBackgroundOpacity":0.2,"surfaceReticleOpacity":0.6,"vrPointerSelectionColor":"#FF6600","paddingRight":0,"playbackBarHeadBorderSize":0,"subtitlesTextShadowBlurRadius":0,"subtitlesTextDecoration":"none","playbackBarHeadShadow":true,"progressBorderRadius":4,"playbackBarHeadOpacity":1,"doubleClickAction":"toggle_fullscreen","vrPointerSelectionTime":2000,"toolTipShadowColor":"#333333","subtitlesFontFamily":"Arial","progressLeft":10,"top":0,"toolTipBorderRadius":3,"toolTipShadowBlurRadius":3,"playbackBarProgressBackgroundColorRatios":[0,1],"toolTipShadowVerticalLength":0,"progressBackgroundColor":["#EEEEEE","#CCCCCC"],"borderRadius":0,"subtitlesPaddingTop":5,"toolTipShadowOpacity":1,"toolTipFontFamily":"Arial","minHeight":50,"subtitlesShadow":false,"playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarBorderRadius":4,"playbackBarOpacity":1,"subtitlesGap":0,"playbackBarProgressBorderColor":"#000000","subtitlesOpacity":1,"minWidth":100,"subtitlesBackgroundColor":"#000000","playbackBarBorderColor":"#AAAAAA","toolTipTextShadowColor":"#000000","progressBarOpacity":1,"transitionMode":"blending","toolTipBorderColor":"#767676","subtitlesEnabled":true,"playbackBarBottom":10,"toolTipFontSize":12,"toolTipBorderSize":1,"subtitlesVerticalAlign":"bottom","toolTipFontStyle":"normal","toolTipPaddingTop":4,"playbackBarBackgroundOpacity":1,"progressRight":10,"data":{"name":"Main Viewer"}},{"paddingBottom":0,"id":"IconButton_5266705B_5F07_7DC4_41B2_33DE428A6E68","transparencyActive":true,"width":40,"paddingLeft":0,"verticalAlign":"middle","pressedIconURL":"skin/IconButton_5266705B_5F07_7DC4_41B2_33DE428A6E68_pressed.png","paddingRight":0,"horizontalAlign":"center","borderSize":0,"height":40,"class":"IconButton","borderRadius":0,"mode":"push","minHeight":0,"propagateClick":false,"minWidth":0,"rollOverIconURL":"skin/IconButton_5266705B_5F07_7DC4_41B2_33DE428A6E68_rollover.png","backgroundOpacity":0,"shadow":false,"toolTipHorizontalAlign":"center","iconURL":"skin/IconButton_5266705B_5F07_7DC4_41B2_33DE428A6E68.png","paddingTop":0,"cursor":"hand","data":{"name":"Button49929"}},{"class":"Panorama","hfovMin":"120%","label":trans('panorama_0F79F0B0_05AA_E696_4193_3EF05031E7DB.label'),"id":"panorama_0F79F0B0_05AA_E696_4193_3EF05031E7DB","data":{"label":"REAL PET - Rio Preto"},"pitch":0,"overlays":["this.overlay_142A6ADF_05A5_DA8A_4152_7964AFB44406","this.overlay_170BA094_05A6_269F_4187_FFC21A9E9C9E"],"partial":false,"thumbnailUrl":"media/panorama_0F79F0B0_05AA_E696_4193_3EF05031E7DB_t.jpg","hfovMax":130,"frames":[{"class":"CubicPanoramaFrame","cube":{"levels":[{"url":"media/panorama_0F79F0B0_05AA_E696_4193_3EF05031E7DB_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":"ondemand","colCount":36,"width":18432,"rowCount":6,"height":3072},{"url":"media/panorama_0F79F0B0_05AA_E696_4193_3EF05031E7DB_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":"ondemand","colCount":18,"width":9216,"rowCount":3,"height":1536},{"url":"media/panorama_0F79F0B0_05AA_E696_4193_3EF05031E7DB_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":"ondemand","colCount":12,"width":6144,"rowCount":2,"height":1024},{"url":"media/panorama_0F79F0B0_05AA_E696_4193_3EF05031E7DB_0/{face}/3/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":["ondemand","preload"],"colCount":6,"width":3072,"rowCount":1,"height":512},{"url":"media/panorama_0F79F0B0_05AA_E696_4193_3EF05031E7DB_0/{face}/vr/0.jpg","class":"TiledImageResourceLevel","tags":"mobilevr","colCount":6,"width":9216,"rowCount":1,"height":1536}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_0F79F0B0_05AA_E696_4193_3EF05031E7DB_t.jpg"}],"vfov":180,"hfov":360,"adjacentPanoramas":[{"class":"AdjacentPanorama","backwardYaw":-0.63,"distance":27.47,"panorama":"this.panorama_1474E14B_05A6_2789_4167_E69C46AAFAEA","yaw":-25.22,"data":{"overlayID":"overlay_142A6ADF_05A5_DA8A_4152_7964AFB44406"},"select":"this.overlay_142A6ADF_05A5_DA8A_4152_7964AFB44406.get('areas').forEach(function(a){ a.trigger('click') })"}]},{"paddingBottom":0,"id":"IconButton_5266705B_5F07_7DC4_41A9_D1B8058C1D69","transparencyActive":true,"width":40,"paddingLeft":0,"verticalAlign":"middle","pressedIconURL":"skin/IconButton_5266705B_5F07_7DC4_41A9_D1B8058C1D69_pressed.png","paddingRight":0,"horizontalAlign":"center","borderSize":0,"height":40,"class":"IconButton","borderRadius":0,"mode":"push","minHeight":0,"propagateClick":false,"minWidth":0,"rollOverIconURL":"skin/IconButton_5266705B_5F07_7DC4_41A9_D1B8058C1D69_rollover.png","backgroundOpacity":0,"shadow":false,"toolTipHorizontalAlign":"center","iconURL":"skin/IconButton_5266705B_5F07_7DC4_41A9_D1B8058C1D69.png","paddingTop":0,"cursor":"hand","data":{"name":"Button49927"}},{"paddingBottom":0,"id":"IconButton_5266705B_5F07_7DC4_41D1_2478984C07CA","transparencyActive":true,"width":40,"paddingLeft":0,"verticalAlign":"middle","pressedIconURL":"skin/IconButton_5266705B_5F07_7DC4_41D1_2478984C07CA_pressed.png","paddingRight":0,"horizontalAlign":"center","borderSize":0,"height":40,"class":"IconButton","borderRadius":0,"mode":"push","minHeight":0,"propagateClick":false,"minWidth":0,"rollOverIconURL":"skin/IconButton_5266705B_5F07_7DC4_41D1_2478984C07CA_rollover.png","backgroundOpacity":0,"shadow":false,"toolTipHorizontalAlign":"center","iconURL":"skin/IconButton_5266705B_5F07_7DC4_41D1_2478984C07CA.png","paddingTop":0,"cursor":"hand","data":{"name":"Button49928"}},{"data":{"name":"Container49924"},"paddingBottom":0,"id":"Container_5266705B_5F07_7DC4_41D1_DB7A4AB3DA6C","gap":4,"width":40,"paddingLeft":0,"verticalAlign":"middle","scrollBarOpacity":0.5,"children":["this.IconButton_5266705B_5F07_7DC4_4166_35648BCE8FCF","this.IconButton_5266705B_5F07_7DC4_41C7_A597F5CD8E3C","this.IconButton_5266705B_5F07_7DC4_41A9_D1B8058C1D69"],"paddingRight":0,"contentOpaque":false,"borderSize":0,"horizontalAlign":"center","height":"100%","class":"Container","layout":"vertical","borderRadius":0,"minHeight":20,"propagateClick":false,"minWidth":20,"backgroundOpacity":0,"shadow":false,"toolTipHorizontalAlign":"center","scrollBarColor":"#000000","scrollBarMargin":2,"overflow":"hidden","paddingTop":0,"scrollBarWidth":10,"scrollBarVisible":"rollOver"},{"label":"Renato Zerati","id":"TDVAuthor","class":"PlayerMenuItem"},{"id":"sequence_0A23A220_05A6_25B6_418E_500E420D47DA","class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"easing":"linear","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"easing":"cubic_out","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5}],"restartMovementOnUserInteraction":false},{"id":"sequence_0C4EE2C0_05AA_2AF6_4192_87373524D64A","class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"easing":"linear","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"easing":"cubic_out","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5}],"restartMovementOnUserInteraction":false},{"areas":["this.HotspotPanoramaOverlayArea_17AC2C2D_05DA_DD89_4183_9A6A921013A4"],"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"useHandCursor":true,"items":[{"class":"HotspotPanoramaOverlayImage","verticalAlign":"middle","image":"this.AnimatedImageResource_1714A693_05EA_EA9A_4192_D53C97FE78F2","yaw":-0.63,"pitch":-6.08,"horizontalAlign":"center","scaleMode":"fit_inside","data":{"label":"GoToRealPet-RioPreto"},"hfov":12.2,"distance":50,"vfov":12.2}],"id":"overlay_14266AE3_05A5_DABA_4196_CD2218619BA0","data":{"label":"GoToRealPet-RioPreto","hasPanoramaAction":true},"maps":[]},{"areas":["this.HotspotPanoramaOverlayArea_17739552_05DA_6F9A_4177_3BD0C677E1A7"],"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"useHandCursor":true,"items":[{"class":"HotspotPanoramaOverlayImage","verticalAlign":"middle","image":"this.AnimatedImageResource_17148693_05EA_EA9A_4182_7175B38AD0B3","yaw":9.05,"pitch":-45.59,"horizontalAlign":"center","scaleMode":"fit_inside","data":{"label":"Arrow 06a"},"hfov":6.94,"distance":100,"vfov":6.07}],"id":"overlay_17B76514_05DA_6F9E_4184_D394B15F5FBE","data":{"label":"Arrow 06a"},"maps":[]},{"areas":["this.HotspotPanoramaOverlayArea_14521B28_05A5_DBB7_4194_C673EB1F79BC"],"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"useHandCursor":true,"items":[{"class":"HotspotPanoramaOverlayImage","verticalAlign":"middle","image":"this.AnimatedImageResource_17152691_05EA_EA96_417E_C66456F67CA9","yaw":-25.22,"pitch":-3.53,"horizontalAlign":"center","scaleMode":"fit_inside","data":{"label":"GoToUnivet"},"hfov":9.62,"distance":50,"vfov":10.83}],"id":"overlay_142A6ADF_05A5_DA8A_4152_7964AFB44406","data":{"label":"GoToUnivet","hasPanoramaAction":true},"maps":[]},{"areas":["this.HotspotPanoramaOverlayArea_1701309D_05A6_2689_4191_E5718BEC889A"],"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"useHandCursor":true,"items":[{"class":"HotspotPanoramaOverlayImage","verticalAlign":"middle","image":"this.AnimatedImageResource_1714E693_05EA_EA9A_4186_07EDD028BE66","yaw":-3.04,"pitch":-30.93,"horizontalAlign":"center","scaleMode":"fit_inside","data":{"label":"Arrow 06a"},"hfov":6.12,"distance":100,"vfov":5.74}],"id":"overlay_170BA094_05A6_269F_4187_FFC21A9E9C9E","data":{"label":"Arrow 06a"},"maps":[]},{"click":"this.mainPlayList.set('selectedIndex', 0)","id":"HotspotPanoramaOverlayArea_17AC2C2D_05DA_DD89_4183_9A6A921013A4","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"rowCount":6,"class":"AnimatedImageResource","colCount":4,"levels":[{"url":"media/res_178C731E_05DE_6B8B_4191_4BA7C16507ED_0.png","width":800,"class":"ImageResourceLevel","height":1200}],"id":"AnimatedImageResource_1714A693_05EA_EA9A_4192_D53C97FE78F2","frameCount":24,"frameDuration":41},{"click":"this.openLink(this.translate('LinkBehaviour_167F30D7_05DA_269A_4163_76899596D233.source'), '_blank')","id":"HotspotPanoramaOverlayArea_17739552_05DA_6F9A_4177_3BD0C677E1A7","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"rowCount":6,"class":"AnimatedImageResource","colCount":4,"levels":[{"url":"media/res_178DA31F_05DE_6B89_4190_7F1CD54A0812_0.png","width":480,"class":"ImageResourceLevel","height":420}],"id":"AnimatedImageResource_17148693_05EA_EA9A_4182_7175B38AD0B3","frameCount":24,"frameDuration":41},{"click":"this.mainPlayList.set('selectedIndex', 1)","id":"HotspotPanoramaOverlayArea_14521B28_05A5_DBB7_4194_C673EB1F79BC","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"rowCount":6,"class":"AnimatedImageResource","colCount":4,"levels":[{"url":"media/res_178C731E_05DE_6B8B_4191_4BA7C16507ED_0.png","width":800,"class":"ImageResourceLevel","height":1200}],"id":"AnimatedImageResource_17152691_05EA_EA96_417E_C66456F67CA9","frameCount":24,"frameDuration":41},{"click":"this.openLink(this.translate('LinkBehaviour_171EB1EF_05DA_2689_4190_66F432F11FB3.source'), '_blank')","id":"HotspotPanoramaOverlayArea_1701309D_05A6_2689_4191_E5718BEC889A","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"rowCount":6,"class":"AnimatedImageResource","colCount":4,"levels":[{"url":"media/res_178DA31F_05DE_6B89_4190_7F1CD54A0812_0.png","width":480,"class":"ImageResourceLevel","height":420}],"id":"AnimatedImageResource_1714E693_05EA_EA9A_4186_07EDD028BE66","frameCount":24,"frameDuration":41}]};
    if (b['data'] == undefined)
        b['data'] = {};
    b['data']['translateObjs'] = a;
    b['data']['history'] = {};
    b['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](b);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.1.5.js.map
//Generated with v2021.1.5, Mon Aug 2 2021