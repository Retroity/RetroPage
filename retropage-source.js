// @license magnet:?xt=urn:btih:d3d9a9a6595521f9666a5e94cc830dab83b65699&dn=expat.txt Expat
window.onload = function() {
    var darkbtn = document.getElementById('darktoggle');
    var searchbox = document.getElementById('searchbox');
    var submitsearch = document.getElementById('submitsearch');
    var optionsbtn = document.getElementById('optionsbtn');
    var optionsbox = document.getElementById("options-box");
    var cssmodalbtn = document.getElementById('opencssmodal');
    var closecssmodal = document.getElementById('cssmodalclose');
    var cssmodal = document.getElementById('cssmodal');
    var customcsssubmit = document.getElementById('csssubmit');
    var clearcustomcss = document.getElementById('cssclear');
    var customcssbox = document.getElementById('customcss');
    var customcss = document.getElementById('customcssinput');
    var savedcustomcss = localStorage.getItem("customcss");
    var logomodalbtn = document.getElementById('openlogomodal');
    var logomodal = document.getElementById('logomodal');
    var logourlnotvalid = document.getElementById('logourlnotvalid');
    var closelogomodal = document.getElementById('logomodalclose');
    var logosubmit = document.getElementById('logosubmit');
    var logoclear = document.getElementById('logoclear');
    var logourl = document.getElementById('logourl');
    var savedlogourl = localStorage.getItem("logourl");
    var searchmodal = document.getElementById('searchmodal');
    var searchmodalbtn = document.getElementById('opensearchmodal');
    var customsearchname = document.getElementById('searchname');
    var customsearchurl = document.getElementById('searchurl');
    var customsearchsubmit = document.getElementById('customsearchsubmit');
    var customsearchclear = document.getElementById('customsearchclear');
    var closesearchmodal = document.getElementById('searchmodalclose');
    var customsearchinvalidurl = document.getElementById('csurlnotvalid');
    var savedcustomsearchname = localStorage.getItem('customsearchname');
    var savedcustomsearchurl = localStorage.getItem('customsearchurl');
    var kbdmodal = document.getElementById('kbdmodal');
    var kbdmodalbtn = document.getElementById('openkbdmodal');
    var kbdmodalmac = document.getElementById('kbd-mac');
    var kbdmodalother = document.getElementById('kbd-other');
    var closekbdmodal = document.getElementById('kbdmodalclose');
    var jsmodal = document.getElementById('jsmodal');
    var jsmodalbtn = document.getElementById('openjsmodal');
    var jsmodalsubmit = document.getElementById('jssubmit');
    var customjs = document.getElementById('customjsinput');
    var closejsmodal = document.getElementById('jsmodalclose');
    var jssubmit = document.getElementById('jssubmit');
    var jsclear = document.getElementById('jsclear');
    var savedcustomjs = localStorage.getItem("customjs");
    var darkstatus = localStorage.getItem("themestatus");
    var savedsearch = localStorage.getItem('selectedengine');
    var customsearchset = localStorage.getItem('customsearchset');
    var optionsopen = 0;
    var cssmodalopen = 0;
    var jsmodalopen = 0;
    var logomodalopen = 0;
    var searchmodalopen = 0;
    var kbdmodalopen = 0;

    function closeall() {
        optionsbox.style.display = "none";
        optionsopen = 0;
        cssmodal.style.display = "none";
        cssmodalopen = 0;
        jsmodal.style.display = "none";
        jsmodalopen = 0;
        logomodal.style.display = "none";
        logomodalopen = 0;
        searchmodal.style.display = "none";
        searchmodalopen = 0;
        kbdmodal.style.display = "none";
        kbdmodalopen = 0;
    }

    //Do search
    function dosearch() {
        var searchtextbox = document.getElementById("searchtext");
        var searchbox = document.searchbox;
        var googurl = "https://encrypted.google.com/#q=";
        var bingurl = "https://www.bing.com/search?q=";
        var yurl = "https://search.yahoo.com/search?p=";
        var ddgurl = "https://duckduckgo.com/?q=";
        var startpageurl = "https://www.startpage.com/do/search?query=";
        var searx = "https://searx.me/?q=";
        savedcustomsearchurl = localStorage.getItem('customsearchurl');
        savedsearch = localStorage.getItem('selectedengine');
        if (savedsearch == "google") {
            searchurl = googurl + escape(searchbox.searchtext.value);
            window.location.href = searchurl;
            return false;
        } else if (savedsearch == "bing") {
            searchurl = bingurl + escape(searchbox.searchtext.value);
            window.location.href = searchurl;
            return false;
        } else if (savedsearch == "yahoo") {
            searchurl = yurl + escape(searchbox.searchtext.value);
            window.location.href = searchurl;
            return false;
        } else if (savedsearch == "ddg") {
            searchurl = ddgurl + escape(searchbox.searchtext.value);
            window.location.href = searchurl;
            return false;
        } else if (savedsearch == "startpage") {
            searchurl = startpageurl + escape(searchbox.searchtext.value);
            window.location.href = searchurl;
            return false;
        } else if (savedsearch == "searx") {
            searchurl = searx + escape(searchbox.searchtext.value) + "&categories=general";
            window.location.href = searchurl;
            return false;
        } else if (savedsearch == "custom") {
            searchurl = savedcustomsearchurl + escape(searchbox.searchtext.value);
            window.location.href = searchurl;
            return false;
          }
    }
    searchbox.onsubmit = dosearch;
    submitsearch.onclick = dosearch;

    //Set search engine
    function setengine() {
        var selectedsearch = $("#searchoption").val();
        if (selectedsearch == "google") {
            $('input[name="searchtext"]').attr("placeholder", "Google Search");
            localStorage.setItem("selectedengine", "google");
            savedsearch = localStorage.getItem("selectedengine");
        } else if (selectedsearch == "bing") {
            $('input[name="searchtext"]').attr("placeholder", "Bing Search");
            localStorage.setItem("selectedengine", "bing");
            savedsearch = localStorage.getItem("selectedengine");
        } else if (selectedsearch == "yahoo") {
            $('input[name="searchtext"]').attr("placeholder", "Yahoo Search");
            localStorage.setItem("selectedengine", "yahoo");
            savedsearch = localStorage.getItem("selectedengine");
        } else if (selectedsearch == "ddg") {
            $('input[name="searchtext"]').attr("placeholder", "DuckDuckGo Search");
            localStorage.setItem("selectedengine", "ddg");
            savedsearch = localStorage.getItem("selectedengine");
        } else if (selectedsearch == "startpage") {
            $('input[name="searchtext"]').attr("placeholder", "StartPage Search");
            localStorage.setItem("selectedengine", "startpage");
            savedsearch = localStorage.getItem("selectedengine");
        } else if (selectedsearch == "searx") {
            $('input[name="searchtext"]').attr("placeholder", "Searx Search");
            localStorage.setItem("selectedengine", "searx");
            savedsearch = localStorage.getItem("selectedengine");
        } else if (selectedsearch == "custom") {
            localStorage.setItem("selectedengine", "custom");
            savedcustomsearchname = localStorage.getItem('customsearchname');
            var csplaceholdertext = savedcustomsearchname + " search";
            $('input[name="searchtext"]').attr("placeholder", csplaceholdertext);
        }
    }
    searchoption.onchange = setengine;

    //Set search engine on page load
    if (localStorage.getItem("selectedengine") !== null) {
        if (customsearchset == 1) {
            $("#searchoption").append('<option value="custom">' + localStorage.getItem("customsearchname") + '</option>');
            if (savedsearch == "custom") {
                $("#searchoption").val("custom");
                setengine();
            } else {
                searchoption.value = localStorage.getItem('selectedengine');
                setengine();
            }
        } else {
            searchoption.value = localStorage.getItem('selectedengine');
            setengine();
        }
    } else {
        $("#searchoption").val("google");
        localStorage.setItem("selectedengine", "google");
        setengine();
    }

    //Set theme on page load
    if (darkstatus === 0) {
        $('link[title=darktheme]')[0].disabled = true;
    } else if (darkstatus == 1) {
        $('link[title=darktheme]')[0].disabled = false;
    } else if (darkstatus == 2) {
        $('head').append('<style id="customstyling">' + savedcustomcss + '</style>');
        $('link[title=darktheme]')[0].disabled = true;
    } else {
        $('link[title=darktheme]')[0].disabled = true;
        localStorage.setItem("themestatus", "0");
        darkstatus = 0;
    }

    //remove darkmodeon and replace it with themestatus
    if (localStorage.getItem("darkmodeon") !== null) {
        localStorage.setItem("themestatus", localStorage.getItem("darkmodeon"));
        localStorage.removeItem("darkmodeon");
    } else {
        null;
    }

    //open options menu
    optionsbtn.onclick = function() {
        if (optionsopen === 0) {
            closeall();
            optionsbox.style.display = "block";
            optionsopen = 1;
        } else {
            closeall();
        }
    };

    //Turn dark theme on/off upon dark theme button being clicked
    function toggledark() {
        if (darkstatus === 0) {
            darkstatus = 1;
            localStorage.setItem("themestatus", "1");
            $('link[title=darktheme]')[0].disabled = false;
        } else if (darkstatus == 1) {
            darkstatus = 0;
            localStorage.setItem("themestatus", "0");
            $('link[title=darktheme]')[0].disabled = true;
        }
    }
    darkbtn.onclick = toggledark;

    //Open custom CSS modal upon button being clicked
    function opencssmodal() {
        if (cssmodalopen === 0) {
            closeall();
            cssmodal.style.display = "block";
            cssmodalopen = 1;
            optionsbox.style.display = "none";
            optionsopen = 0;
            $('textarea[name="customcssinput"]').val(localStorage.getItem("customcss"));
        } else {
            closeall();
        }
    }
    cssmodalbtn.onclick = opencssmodal;

    //Close CSS modal
    closecssmodal.onclick = closeall;

    //Set custom CSS upon submit button being selected
    customcsssubmit.onclick = function() {
        if (customcss.value !== "" && customcss.value !== "null") {
            localStorage.setItem("customcss", customcss.value);
            $("#customstyling").remove();
            $('head').append('<style id="customstyling">' + customcss.value + '</style>');
            darkstatus = 2;
            localStorage.setItem("themestatus", "2");
            $('link[title=darktheme]')[0].disabled = true;
            closeall();
            return false;
        } else {
            localStorage.removeItem("customcss");
            $("#customstyling").remove();
            localStorage.setItem("themestatus", "0");
            closeall();
            return false;
        }
    };

    //clear custom css
    clearcustomcss.onclick = function() {
        localStorage.removeItem("customcss");
        $("#customstyling").remove();
        localStorage.setItem("themestatus", "0");
        closeall();
        return false;
    };

    //Open custom JS modal upon button being clicked
    function openjsmodal() {
        if (jsmodalopen === 0) {
            closeall();
            jsmodal.style.display = "block";
            jsmodalopen = 1;
            optionsbox.style.display = "none";
            optionsopen = 0;
            $('textarea[name="customjsinput"]').val(localStorage.getItem("customjs"));
        } else {
            closeall();
        }
    }
    jsmodalbtn.onclick = openjsmodal;

    //Close JS modal
    closejsmodal.onclick = closeall;

    //Set custom JS upon submit button being selected
    jssubmit.onclick = function() {
        if (customjs.value !== "" && customjs.value !== "null") {
            localStorage.setItem("customjs", customjs.value);
            $("#customjs").remove();
            $('head').append('<script id="customjs">' + customjs.value + "</script>");
            closeall();
            return false;
        } else {
            localStorage.removeItem("customjs");
            $("#customjs").remove();
            closeall();
            location.reload();
            return false;
        }
    };

    //clear custom js
    jsclear.onclick = function() {
        localStorage.removeItem("customjs");
        $("#customjs").remove();
        closeall();
        location.reload();
        return false;
    };

    //autoload custom js
    if (savedcustomjs !== "null" && savedcustomjs !== "" && savedcustomjs !== null) {
        $('head').append('<script id="customjs">' + savedcustomjs + "</script>");
    } else {
      null;
    }


    //Open custom logo modal upon button being selected
    function openlogomodal() {
        if (logomodalopen === 0) {
            closeall();
            logomodal.style.display = "block";
            logomodalopen = 1;
            optionsbox.style.display = "none";
            optionsopen = 0;
            $('textarea[name="customcssinput"]').val(localStorage.getItem("customcss"));
        } else {
            closeall();
        }
    }
    logomodalbtn.onclick = openlogomodal;

    //close logo modal
    closelogomodal.onclick = closeall;

    //submit custom logo
    logosubmit.onclick = function() {
        if (logourl.value !== "" && logourl.value !== "null") {
            if (/^(http|https|ftp):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i.test($("#logourl").val())) {
                localStorage.setItem("logourl", logourl.value);
                $("#logo").attr("src", logourl.value);
                logourlnotvalid.style.display = "none";
                iscustomlogo = 1;
                closeall();
                return false;
            } else {
                logourlnotvalid.style.display = "block";
                return false;
            }
        } else {
            localStorage.removeItem("logourl");
            closeall();
            location.reload();
            return false;
        }
    };

    //clear custom logo
    logoclear.onclick = function() {
        localStorage.removeItem("logourl");
        closeall();
        location.reload();
        return false;
    };

    //Load logo on page load
    if (savedlogourl !== null && savedlogourl !== "") {
        $("#logo").attr("src", savedlogourl);
    } else {
        null;
    }

    //open search modal
    function opensearchmodal() {
        if (searchmodalopen === 0) {
            closeall();
            searchmodal.style.display = "block";
            searchmodalopen = 1;
            $("#searchname").val(localStorage.getItem('customsearchname'));
            $("#searchurl").val(localStorage.getItem('customsearchurl'));
        } else {
            searchmodal.style.display = "none";
            searchmodalopen = 0;
        }
    }
    searchmodalbtn.onclick = opensearchmodal;

    //close search modal
    closesearchmodal.onclick = closeall;

    customsearchsubmit.onclick = function() {
        if (customsearchname !== "" && customsearchname !== "null" && /^(http|https|ftp):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i.test($("#searchurl").val())) {
            customsearchinvalidurl.style.display = "none";
            localStorage.removeItem("customsearchname");
            localStorage.removeItem("customsearchurl");
            localStorage.removeItem("selectedengine");
            localStorage.setItem("customsearchname", customsearchname.value);
            localStorage.setItem("customsearchurl", customsearchurl.value);
            localStorage.setItem("customsearchset", "1");
            $("#searchoption option[value='custom']").remove();
            localStorage.setItem("selectedengine", "custom");
            $("#searchoption").append('<option value="custom">' + customsearchname.value + '</option>');
            $("#searchoption").val("custom");
            setengine();
            closeall();
            return false;
        } else if (customsearchurl.value !== "" && customsearchurl.value !== "null") {
            customsearchinvalidurl.style.display = "block";
            return false;
        }
    };
    
    customsearchclear.onclick = function() {
      localStorage.removeItem("customsearchname");
      localStorage.removeItem("customsearchurl");
      $("#searchoption").val("google");
      $("#searchoption option[value='custom']").remove();
      localStorage.setItem("selectedengine", "google");
      setengine();
      closeall();
      return false;
    }

    //open keyboard shortcut modal
    function openkbdmodal() {
        if (kbdmodalopen === 0) {
            if (window.navigator.platform == "Mac68K" || window.navigator.platform == "MacPPC" || window.navigator.platform == "MacIntel") {
                closeall();
                kbdmodal.style.display = "block";
                kbdmodalopen = 1;
                kbdmodalmac.style.display = "block";
                kbdmodalother.style.display = "none";
            } else {
                closeall();
                kbdmodal.style.display = "block";
                kbdmodalopen = 1;
                kbdmodalmac.style.display = "none";
                kbdmodalother.style.display = "block";
            }
        } else {
            kbdmodal.style.display = "none";
            kbdmodalopen = 0;
        }
    }
    kbdmodalbtn.onclick = openkbdmodal;
    closekbdmodal.onclick = closeall;

    //Keyboard Shortcuts
    document.onkeydown = function(e) {
        if (e.ctrlKey && e.altKey && e.which == 222) {
            e.preventDefault();
            e.stopPropagation();
            toggledark();
        } else if (e.ctrlKey && e.altKey && e.which == 186) {
            e.preventDefault();
            e.stopPropagation();
            opencssmodal();
        } else if (e.ctrlKey && e.altKey && e.which == 76) {
            e.preventDefault();
            e.stopPropagation();
            openlogomodal();
        } else if (e.ctrlKey && e.altKey && e.which == 75) {
            e.preventDefault();
            e.stopPropagation();
            openjsmodal();
        } else if (e.ctrlKey && e.altKey && e.which == 74) {
            e.preventDefault();
            e.stopPropagation();
            opensearchmodal();
        } else if (e.ctrlKey && e.altKey && e.which == 82) {
            e.preventDefault();
            e.stopPropagation();
            window.location.href = "/reset";
        } else if (e.ctrlKey && e.altKey && e.which == 83) {
            e.preventDefault();
            e.stopPropagation();
            openkbdmodal();
        } else if (e.ctrlKey && e.altKey && e.which == 88) {
            e.preventDefault();
            e.stopPropagation();
            closeall();
        }
    };
};
// @license-end