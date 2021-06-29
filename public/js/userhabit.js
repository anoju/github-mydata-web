/* eslint-disable */
var uhPlatform;
var uhWebviewName;

function userhabitSetPlatform(value){
    console.log('userhabitSetPlatform',value);
    uhPlatform = value;
}
function userhabitSetWebViewName(id){
    console.log('userhabitSetWebViewName',id);
    uhWebviewName = id;
}

function userhabitGetWebViewName() {
    console.log('userhabitGetWebViewName', uhWebviewName);
    return uhWebviewName;
}

function userhabitSetScreen(name){
    console.log('userhabitSetScreen', name, uhPlatform, uhWebviewName);
    if (uhPlatform == 1) {
        window.userhabit_interface.setScreen(uhWebviewName, name);
    } else if(uhPlatform == 21) {
        document.location = 'userhabit://setScreen/?screenName=' + name + '&webViewName=' + uhWebviewName;
    } else if(uhPlatform == 22) {
        webkit.messageHandlers.UserHabitMessageHandler.postMessage({"methodName"    : "setScreen",
                                                                    "webViewName"   : uhWebviewName,
                                                                    "name"          : name
                                                                });
    } else {
        console.log('web!!')
    }
}


function userhabitSetContent(uhKey, uhValue){
    if (uhPlatform == 1) {
        window.userhabit_interface.setContent(uhWebviewName, uhKey, uhValue);
    } else if(uhPlatform == 21) {
        document.location = 'userhabit://setContent/?key=' + uhKey + '&value=' + uhValue + '&webViewName=' + uhWebviewName;
    } else if(uhPlatform == 22) {
        webkit.messageHandlers.UserHabitMessageHandler.postMessage({"methodName"    : "setContent",
                                                                    "webViewName"   : uhWebviewName,
                                                                    "key"           : uhKey,
                                                                    "value"         : uhValue,
                                                                });
    } else {
        
    }
}

var objectList = [];
function userhabitReadObject(){

    var readObjectArray = [
        'a',
        'button',
        'input'
    ];
    
    for (var i = 0, len = readObjectArray.length; i < len; i++) {
        
        userhabitInputObjectList(readObjectArray[i]);
    }        

    if (uhPlatform == 1){
        window.userhabit_interface.getObjectList(uhWebviewName, JSON.stringify(objectList));
    } else if(uhPlatform == 21) {
        userhabitPostToUrl('userhabit://objectList/?webViewName=' + uhWebviewName, {'objects':JSON.stringify(objectList)});
    } else if(uhPlatform == 22) {
        webkit.messageHandlers.UserHabitMessageHandler.postMessage({"methodName"    : "objectList",
                                                                    "webViewName"   : uhWebviewName,
                                                                    "objects"       : objectList
                                                                });
    } else {
    }
};

function userhabitInputObjectList(objectKind){
    var obj_tag_all = document.getElementsByTagName(objectKind);
    for (var i = 0;i<obj_tag_all.length;i++){
        var objectId = userhabitGetIdForEventObject(obj_tag_all[i]);
        if (objectId){
            var inObject = {};
            inObject['top'] = obj_tag_all[i].offsetTop;
            inObject['left'] = obj_tag_all[i].offsetLeft;
            inObject['width'] = obj_tag_all[i].offsetWidth;
            inObject['height'] = obj_tag_all[i].offsetHeight;
            inObject['id'] = objectId;
            inObject['html'] = obj_tag_all[i].innerHTML;
            objectList.push(inObject);
        }
    }
}

function userhabitPostToUrl(path, params) {
    method = 'post';
    var form = document.createElement('form');
    form.setAttribute('method', method);
    form.setAttribute('action', path);

    for(var key in params) {
        var hiddenField = document.createElement('input');
        hiddenField.setAttribute('type', 'hidden');
        hiddenField.setAttribute('name', key);
        hiddenField.setAttribute('value', params[key]);
        form.appendChild(hiddenField);
    }

    document.body.appendChild(form);
    form.submit();
}

function userhabitGetIdForEventObject(obj) {
    for (var i = 0; i < 3; i++) {
        if (obj != null) {
            if (userhabitIsCheckEvent(obj)) {
                if (obj.getAttribute('for')) {
                    obj = document.getElementById(obj.getAttribute('for'));
                }

                var uniqueName;
                obj.getAttribute('data-gps-track')
                if (obj.getAttribute('data-userhabit')) {
                    uniqueName = obj.getAttribute('data-userhabit');

                } else if (obj.getAttribute('userhabit')) {
                    uniqueName = obj.getAttribute('userhabit');

                }else if (obj.id) {
                    uniqueName = obj.id;
                } else if (obj.getAttribute('onclick')) {
                    uniqueName = obj.getAttribute('onclick');
                } else if (obj.getAttribute('href')) {
                    uniqueName = obj.getAttribute('href');

                } else if (obj.getAttribute('src')) {
                    uniqueName = obj.getAttribute('src');

                } else {
                    if (obj.length > 50) {
                        uniqueName = obj.innerHTML.substring(0,50);
                    } else {
                        uniqueName = obj.innerHTML
                    }
                }
                return uniqueName.trim();
            } else {
                obj = obj.parentElement;
            }
        } else {
            break;
        }
    }
    return null;
}
var userhabitXdown = null;
var userhabitYdown = null;
document.addEventListener('touchstart', userhabitHandleTouchStart, false);
document.addEventListener('touchend', userhabitHandleTouchEnd, false);
document.addEventListener('touchcancel', userhabitHandleTouchCancel, false);
document.addEventListener('click', userhabitHandleTouchStart, false);

function userhabitIsCheckEvent(object) {
    var children = object.children;
    var totalWidth = object.offsetWidth;
    var totalHeight = object.offsetHeight;
    for (var i = 0; i < children.length; i++) {
        totalWidth += children[i].offsetWidth;
        totalHeight += children[i].offsetHeight;
    }
    if (object != null && object !== document.body && totalWidth > 0 && totalHeight > 0 && (object.getAttribute('href') || object.getAttribute('href') == '' || typeof object.onclick == 'function' || object.isUserhabitClick || object.tagName == 'INPUT' || (object.type == 'textarea' && object.getAttribute('readonly') == null) || object.type == 'submit')) {
        return true;
    } else if (object != null && object !== document.body && object.getAttribute('for')) {
        var userhabitForId = document.getElementById(object.getAttribute('for'));
        if (userhabitForId.tagName == 'INPUT') {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

function userhabitHandleTouchCancel(evt) {
    if (!userhabitXdown || !userhabitYdown) {
        return;
    }
    var xUp = evt.changedTouches[0].clientX;
    var yUp = evt.changedTouches[0].clientY;
    var disX = Math.abs(xUp - userhabitXdown);
    var disY = Math.abs(yUp - userhabitYdown);
    var distance = Math.sqrt(disX * disX + disY * disY);
    if (distance < 10) {
        var userhabitObj = evt.changedTouches[0].target;
        var userhabitId = userhabitGetIdForEventObject(userhabitObj);


        if (userhabitId) {
            if (uhPlatform == 1){
                window.userhabit_interface.clickObject(uhWebviewName, userhabitId, userhabitXdown, userhabitYdown, xUp, yUp, userhabitObj.offsetLeft , userhabitObj.offsetTop ,userhabitObj.offsetWidth , userhabitObj.offsetHeight);

            } else if(uhPlatform == 21){
                document.location = 'userhabit://clickObject/?webViewName=' + uhWebviewName + '&userhabitId=' + userhabitId + '&userhabitXdown=' + userhabitXdown + '&userhabitYdown=' + userhabitYdown + '&xUp=' + xUp + '&yUp=' + yUp + '&offsetLeft=' + userhabitObj.offsetLeft + '&offsetTop=' + userhabitObj.offsetTop + '&offsetWidth=' + userhabitObj.offsetWidth + '&offsetHeight='+ userhabitObj.offsetHeight + '&message1='+ userhabitObj.offset().top;
            } else if(uhPlatform == 22){
                webkit.messageHandlers.UserHabitMessageHandler.postMessage({'methodName'    : 'clickObject',
                                                                            'webViewName'   : uhWebviewName,
                                                                            'userhabitId'   : userhabitId,
                                                                            'userhabitXdown': userhabitXdown,
                                                                            'userhabitYdown': userhabitYdown,
                                                                            'xUp'           : xUp,
                                                                            'yUp'           : yUp,
                                                                            'offsetLeft'    : userhabitObj.offsetLeft,
                                                                            'offsetTop'     : userhabitObj.offsetTop,
                                                                            'offsetWidth'   : userhabitObj.offsetWidth,
                                                                            'offsetHeight'  : userhabitObj.offsetHeight,
                                                                        });
            } else {

            }
            
        } else {
            if (uhPlatform == 1){
                window.userhabit_interface.clickNoObject(uhWebviewName, userhabitXdown, userhabitYdown, xUp, yUp);
            } else if(uhPlatform == 21){
                document.location = 'userhabit://clickNoObject/?webViewName=' + uhWebviewName + '&userhabitXdown=' + userhabitXdown + '&userhabitYdown=' +  userhabitYdown + '&xUp=' +  xUp + '&yUp=' +  yUp;
            } else if(uhPlatform == 22){
                webkit.messageHandlers.UserHabitMessageHandler.postMessage({'methodName'    : 'clickNoObject',
                                                                            'webViewName'   : uhWebviewName,
                                                                            'userhabitXdown': userhabitXdown,
                                                                            'userhabitYdown': userhabitYdown,
                                                                            'xUp'           : xUp,
                                                                            'yUp'           : yUp
                                                                        });
            } else {
            }
           
        }
    } else {
        if (uhPlatform == 1){
            window.userhabit_interface.clickNoObject(uhWebviewName, userhabitXdown, userhabitYdown, xUp, yUp);    
        } else if(uhPlatform == 21){
            document.location = 'userhabit://clickNoObject/?webViewName=' + uhWebviewName + '&userhabitXdown=' + userhabitXdown + '&userhabitYdown=' +  userhabitYdown + '&xUp=' +  xUp + '&yUp=' +  yUp;
        } else if(uhPlatform == 22){
            webkit.messageHandlers.UserHabitMessageHandler.postMessage({'methodName'    : 'clickObject',
                                                                        'webViewName'   : uhWebviewName,
                                                                        'userhabitId'   : userhabitId,
                                                                        'userhabitXdown': userhabitXdown,
                                                                        'userhabitYdown': userhabitYdown,
                                                                        'xUp'           : xUp,
                                                                        'yUp'           : yUp,
                                                                        'offsetLeft'    : userhabitObj.offsetLeft,
                                                                        'offsetTop'     : userhabitObj.offsetTop,
                                                                        'offsetWidth'   : userhabitObj.offsetWidth,
                                                                        'offsetHeight'  : userhabitObj.offsetHeight,
                                                                    });
        } else {
        }
          
    }
    userhabitXdown = null;
    userhabitYdown = null;
}

function userhabitHandleTouchStart(evt) {
    if (typeof evt.touches  != "undefined") {
        userhabitXdown = evt.touches[0].clientX;
        userhabitYdown = evt.touches[0].clientY;
    } else {
        userhabitXdown = 0;
        userhabitYdown = 0;
    }
}

function userhabitHandleTouchEnd(evt) {
    if (!userhabitXdown || !userhabitYdown) {
        return;
    }
    var xUp = evt.changedTouches[0].clientX;
    var yUp = evt.changedTouches[0].clientY;
    var disX = Math.abs(xUp - userhabitXdown);
    var disY = Math.abs(yUp - userhabitYdown);
    var distance = Math.sqrt(disX * disX + disY * disY);

    if (distance < 10) {
        var userhabitObj = evt.changedTouches[0].target;
        var thisEle = evt.changedTouches[0].target;

        var userhabitId = userhabitGetIdForEventObject(userhabitObj);

        if (userhabitId) {
            if (uhPlatform == 1){
                window.userhabit_interface.clickObject(uhWebviewName, userhabitId, userhabitXdown, userhabitYdown, xUp, yUp, userhabitObj.offsetLeft , userhabitObj.offsetTop ,userhabitObj.offsetWidth , userhabitObj.offsetHeight);
            } else if(uhPlatform == 21){ //2019.03.29 remove jquery
                //document.location = 'userhabit://clickObject/?webViewName=' + uhWebviewName + '&userhabitId=' + userhabitId + '&userhabitXdown=' + userhabitXdown + '&userhabitYdown=' + userhabitYdown + '&xUp=' + xUp + '&yUp=' + yUp + '&offsetLeft=' + $(userhabitObj).offset().left + '&offsetTop=' + $(userhabitObj).offset().top + '&offsetWidth=' + userhabitObj.offsetWidth + '&offsetHeight='+ userhabitObj.offsetHeight;
                document.location = 'userhabit://clickObject/?webViewName=' + uhWebviewName + '&userhabitId=' + userhabitId + '&userhabitXdown=' + userhabitXdown + '&userhabitYdown=' + userhabitYdown + '&xUp=' + xUp + '&yUp=' + yUp + '&offsetLeft=' + userhabitObj.offset.left + '&offsetTop=' + userhabitObj.offset.top + '&offsetWidth=' + userhabitObj.offsetWidth + '&offsetHeight='+ userhabitObj.offsetHeight;
            } else if(uhPlatform == 22){                
                webkit.messageHandlers.UserHabitMessageHandler.postMessage({'methodName'    : 'clickObject',
                                                                            'webViewName'   : uhWebviewName,
                                                                            'userhabitId'   : userhabitId,
                                                                            'userhabitXdown': userhabitXdown,
                                                                            'userhabitYdown': userhabitYdown,
                                                                            'xUp'           : xUp,
                                                                            'yUp'           : yUp,
                                                                            'offsetLeft'    : userhabitObj.offsetLeft,
                                                                            'offsetTop'     : userhabitObj.offsetTop,
                                                                            'offsetWidth'   : userhabitObj.offsetWidth,
                                                                            'offsetHeight'  : userhabitObj.offsetHeight,
                                                                        });
            } else {
            }    
        } else {
            if (uhPlatform == 1){
                window.userhabit_interface.clickNoObject(uhWebviewName, userhabitXdown, userhabitYdown, xUp, yUp);
            } else if(uhPlatform == 21){
                document.location = 'userhabit://clickNoObject/?webViewName=' + uhWebviewName + '&userhabitXdown=' + userhabitXdown + '&userhabitYdown=' +  userhabitYdown + '&xUp=' +  xUp + '&yUp=' +  yUp;
            } else if(uhPlatform == 22){
                webkit.messageHandlers.UserHabitMessageHandler.postMessage({'methodName'    : 'clickNoObject',
                                                                            'webViewName'   : uhWebviewName,
                                                                            'userhabitXdown': userhabitXdown,
                                                                            'userhabitYdown': userhabitYdown,
                                                                            'xUp'           : xUp,
                                                                            'yUp'           : yUp
                                                                        });
            } else {
            }
            
        }
    } else {
        if (uhPlatform == 1){
            window.userhabit_interface.clickNoObject(uhWebviewName, userhabitXdown, userhabitYdown, xUp, yUp);
        } else if(uhPlatform == 21){
            document.location = 'userhabit://clickNoObject/?webViewName=' + uhWebviewName + '&userhabitXdown=' + userhabitXdown + '&userhabitYdown=' +  userhabitYdown + '&xUp=' +  xUp + '&yUp=' +  yUp;
        } else if(uhPlatform == 22){
            webkit.messageHandlers.UserHabitMessageHandler.postMessage({'methodName'    : 'clickNoObject',
                                                                        'webViewName'   : uhWebviewName,
                                                                        'userhabitXdown': userhabitXdown,
                                                                        'userhabitYdown': userhabitYdown,
                                                                        'xUp'           : xUp,
                                                                        'yUp'           : yUp 
                                                                    });
        } else {
        }
        
    }
    userhabitXdown = null;
    userhabitYdown = null;
}

/* debug */
function userhabitDebugMessage(message){
    if (uhPlatform == 1) {
    } else if(uhPlatform == 22){
        // console.log(message);
        // webkit.messageHandlers.UserHabitMessageHandler.postMessage(message);
    } else {
    }
}
