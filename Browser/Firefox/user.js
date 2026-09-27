//
/* You may copy+paste this file and use it as it is.
 *
 * If you make changes to your about:config while the program is running, the
 * changes will be overwritten by the user.js when the application restarts.
 *
 * To make lasting changes to preferences, you will have to edit the user.js.
 */

/****************************************************************************
 * Betterfox                                                                *
 * "Ad meliora"                                                             *
 * version: 154                                                             *
 * url: https://github.com/yokoffing/Betterfox                              *
****************************************************************************/

/****************************************************************************
 * SECTION: FASTFOX                                                         *
****************************************************************************/
/** GENERAL ***/
user_pref("gfx.content.skia-font-cache-size", 20);
user_pref("content.notify.interval", 100000);

/** GFX ***/
user_pref("gfx.canvas.accelerated.cache-size", 512);

/** MEDIA CACHE ***/
user_pref("media.cache_readahead_limit", 3600);
user_pref("media.cache_resume_threshold", 1800);

/** IMAGE CACHE ***/
user_pref("image.mem.decode_bytes_at_a_time", 32768);

/** NETWORKING ***/
user_pref("network.buffer.cache.size", 65535);
user_pref("network.buffer.cache.count", 48);
user_pref("network.http.max-connections", 1800);
user_pref("network.http.max-persistent-connections-per-server", 10);
user_pref("network.http.max-urgent-start-excessive-connections-per-host", 5);
user_pref("network.http.request.max-start-delay", 5);
user_pref("network.dnsCacheExpiration", 3600);

/****************************************************************************
 * SECTION: SECUREFOX                                                       *
****************************************************************************/
/** TRACKING PROTECTION ***/
user_pref("browser.contentblocking.category", "strict");
user_pref("browser.download.start_downloads_in_tmp_dir", true);
user_pref("browser.uitour.enabled", false);
user_pref("privacy.globalprivacycontrol.enabled", true);

/** OCSP & CERTS / HPKP ***/
user_pref("security.OCSP.enabled", 0);
user_pref("privacy.antitracking.isolateContentScriptResources", true);
user_pref("security.csp.reporting.enabled", false);

/** SSL / TLS ***/
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
user_pref("browser.xul.error_pages.expert_bad_cert", true);
user_pref("security.tls.enable_0rtt_data", false);

/** DISK AVOIDANCE ***/
user_pref("browser.cache.disk.enable", false);
user_pref("browser.privatebrowsing.forceMediaMemoryCache", true);
user_pref("media.memory_cache_max_size", 65536);
user_pref("browser.sessionstore.interval", 60000);

/** SHUTDOWN & SANITIZING ***/
user_pref("privacy.history.custom", true);

/** SPECULATIVE LOADING ***/
user_pref("network.http.speculative-parallel-limit", 0);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);
user_pref("browser.urlbar.speculativeConnect.enabled", false);
user_pref("browser.places.speculativeConnect.enabled", false);
user_pref("network.prefetch-next", false);

/** SEARCH / URL BAR ***/
user_pref("browser.urlbar.trimHttps", true);
user_pref("browser.urlbar.untrimOnUserInteraction.featureGate", true);
user_pref("browser.search.separatePrivateDefault.ui.enabled", true);
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.urlbar.quicksuggest.enabled", false);
user_pref("browser.urlbar.groupLabels.enabled", false);
user_pref("browser.formfill.enable", false);
user_pref("network.IDN_show_punycode", true);

/** HTTPS-ONLY MODE ***/
user_pref("dom.security.https_only_mode", true);
user_pref("dom.security.https_only_mode_error_page_user_suggestions", true);

/** PASSWORDS ***/
user_pref("signon.formlessCapture.enabled", false);
user_pref("signon.privateBrowsingCapture.enabled", false);
user_pref("network.auth.subresource-http-auth-allow", 1);
user_pref("editor.truncate_user_pastes", false);

/** EXTENSIONS ***/
user_pref("extensions.enabledScopes", 5);

/** HEADERS / REFERERS ***/
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);

/** VARIOUS ***/
user_pref("pdfjs.enableScripting", false);

/** SAFE BROWSING ***/
user_pref("browser.safebrowsing.downloads.remote.enabled", false);

/** MOZILLA ***/
user_pref("permissions.default.desktop-notification", 2);
user_pref("permissions.default.geo", 2);
user_pref("geo.provider.network.url", "https://beacondb.net/v1/geolocate");
user_pref("browser.search.update", false);
user_pref("permissions.manager.defaultsUrl", "");
user_pref("extensions.getAddons.cache.enabled", false);

/** TELEMETRY ***/
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.coverage.opt-out", true);
user_pref("toolkit.coverage.opt-out", true);
user_pref("toolkit.coverage.endpoint.base", "");
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("datareporting.usage.uploadEnabled", false);

/** EXPERIMENTS ***/
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");
user_pref("nimbus.rollouts.enabled", false);

/** CRASH REPORTS ***/
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.crashReports.unsubmittedCheck.enabled", false);

/****************************************************************************
 * SECTION: PESKYFOX                                                        *
****************************************************************************/
/** MOZILLA UI ***/
user_pref("extensions.getAddons.showPane", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("browser.discovery.enabled", false);
user_pref("browser.shell.checkDefaultBrowser", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
user_pref("browser.preferences.moreFromMozilla", false);
user_pref("browser.aboutConfig.showWarning", false);
user_pref("browser.startup.homepage_override.mstone", "ignore");
user_pref("browser.aboutwelcome.enabled", false);
user_pref("browser.profiles.enabled", true);

/** THEME ADJUSTMENTS ***/
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("browser.compactmode.show", true);
user_pref("browser.privateWindowSeparation.enabled", false); // WINDOWS

/** AI ***/
user_pref("browser.ai.control.default", "blocked");
user_pref("browser.ml.enable", false);
user_pref("browser.ml.chat.enabled", false);
user_pref("browser.ml.chat.menu", false);
user_pref("browser.tabs.groups.smart.enabled", false);
user_pref("browser.ml.linkPreview.enabled", false);

/** FULLSCREEN NOTICE ***/
user_pref("full-screen-api.transition-duration.enter", "0 0");
user_pref("full-screen-api.transition-duration.leave", "0 0");
user_pref("full-screen-api.warning.timeout", 0);

/** URL BAR ***/
user_pref("browser.urlbar.trending.featureGate", false);

/** NEW TAB PAGE ***/
user_pref("browser.newtabpage.activity-stream.default.sites", "");
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredCheckboxes", false);

/** DOWNLOADS ***/
user_pref("browser.download.manager.addToRecentDocs", false);

/** PDF ***/
user_pref("browser.download.open_pdf_attachments_inline", true);

/** TAB BEHAVIOR ***/
user_pref("browser.bookmarks.openInTabClosesMenu", false);
user_pref("findbar.highlightAll", true);

/****************************************************************************
 * SECTION: SMOOTHFOX                                                       *
****************************************************************************/
// visit https://github.com/yokoffing/Betterfox/blob/main/Smoothfox.js
// Enter your scrolling overrides below this line:

/****************************************************************************************
 * OPTION: NATURAL SMOOTH SCROLLING V3 [MODIFIED]                                      *
****************************************************************************************/
// credit: https://github.com/AveYo/fox/blob/cf56d1194f4e5958169f9cf335cd175daa48d349/Natural%20Smooth%20Scrolling%20for%20user.js
// recommended for 120hz+ displays
// largely matches Chrome flags: Windows Scrolling Personality and Smooth Scrolling
user_pref("apz.overscroll.enabled", true); // DEFAULT NON-LINUX
user_pref("general.smoothScroll", true); // DEFAULT
user_pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS", 12);
user_pref("general.smoothScroll.msdPhysics.enabled", true);
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant", 600);
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant", 650);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS", 25);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaRatio", "2");
user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant", 250);
user_pref("general.smoothScroll.currentVelocityWeighting", "1");
user_pref("general.smoothScroll.stopDecelerationWeighting", "1");
user_pref("mousewheel.default.delta_multiplier_y", 300); // 250-400; adjust this number to your liking

/****************************************************************************
 * START: MY OVERRIDES                                                      *
****************************************************************************/
// visit https://github.com/yokoffing/Betterfox/wiki/Common-Overrides
// visit https://github.com/yokoffing/Betterfox/wiki/Optional-Hardening
// Enter your personal overrides below this line:

///SECUREFOX
user_pref("browser.cache.disk.enable", true);
user_pref("browser.pagethumbnails.capturing_disabled", true);
user_pref("privacy.sanitize.timeSpan", 0);
user_pref("privacy.clearSiteData.historyFormDataAndDownloads", true);
user_pref("privacy.clearHistory.formdata", true);
user_pref("privacy.clearHistory.siteSettings", true);
user_pref("privacy.history.custom", false);
user_pref("browser.urlbar.showSearchTerms.enabled", false);
user_pref("browser.search.separatePrivateDefault.ui.enabled", false);
user_pref("signon.management.page.breach-alerts.enabled", false);
user_pref("browser.contentblocking.report.lockwise.enabled", false);
user_pref("signon.firefoxRelay.feature", "");
user_pref("network.http.windows-sso.enabled", true);
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.creditCards.enabled", false);
user_pref("extensions.webextensions.restrictedDomains", "");
user_pref("accessibility.force_disabled", 1);
user_pref("identity.fxaccounts.enabled", false);
user_pref("browser.firefox-view.feature-tour", "{\"screen\":\"\",\"complete\":true}");
user_pref("geo.provider.ms-windows-location", false);
user_pref("geo.provider.use_corelocation", false);
user_pref("geo.provider.use_geoclue", false);
user_pref("geo.provider.network.logging.enabled", false);
user_pref("browser.region.update.enabled", false);
user_pref("extensions.update.enabled", false);
user_pref("captivedetect.canonicalURL", "");
user_pref("network.captive-portal-service.enabled", false);
user_pref("network.connectivity-service.enabled", false);
user_pref("dom.private-attribution.submission.enabled", false);
user_pref("default-browser-agent.enabled", false);
user_pref("extensions.abuseReport.enabled", false);
user_pref("browser.search.serpEventTelemetryCategorization.enabled", false);

// PESKYFOX
user_pref("browser.tabs.warnOnCloseOtherTabs", false);
user_pref("browser.tabs.warnOnOpen", false);
user_pref("browser.messaging-system.whatsNewPanel.enabled", false);
user_pref("browser.profiles.enabled", false);
user_pref("layout.css.prefers-color-scheme.content-override", 2);
user_pref("browser.theme.dark-private-windows", false);
user_pref("browser.newtabpage.activity-stream.newtabWallpapers.v2.enabled", true);
user_pref("widget.non-native-theme.scrollbar.style", 3);
user_pref("browser.ai.control.translations", "blocked");
user_pref("browser.ml.chat.enabled", true);
user_pref("browser.ml.chat.menu", true);
user_pref("browser.translations.enable", false);
user_pref("full-screen-api.warning.delay", -1);
user_pref("gfx.webrender.quality.force-subpixel-aa-where-possible", true);
user_pref("gfx.font_rendering.cleartype_params.rendering_mode", 5);
user_pref("gfx.font_rendering.cleartype_params.cleartype_level", 100);
user_pref("gfx.font_rendering.cleartype_params.force_gdi_classic_for_families", "");
user_pref("gfx.font_rendering.directwrite.use_gdi_table_loading", false);
user_pref("gfx.use_text_smoothing_setting", true);
user_pref("browser.urlbar.suggest.engines", false);
user_pref("browser.urlbar.quickactions.enabled", false);
user_pref("browser.urlbar.suggest.weather", false);
user_pref("browser.urlbar.suggest.calculator", false);
user_pref("browser.urlbar.unitConversion.enabled", false);
user_pref("browser.urlbar.suggest.topsites", false);
user_pref("browser.urlbar.suggest.trending", false);
user_pref("browser.urlbar.addons.featureGate", false);
user_pref("browser.urlbar.amp.featureGate", false);
user_pref("browser.urlbar.mdn.featureGate", false);
user_pref("browser.urlbar.wikipedia.featureGate", false);
user_pref("browser.urlbar.clipboard.featureGate", false);
user_pref("media.autoplay.default", 5);
user_pref("media.autoplay.blocking_policy", 2);
user_pref("browser.newtabpage.activity-stream.discoverystream.enabled", false);
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
user_pref("browser.newtabpage.activity-stream.showWeather", false);
user_pref("browser.download.alwaysOpenPanel", false);
user_pref("pdfjs.defaultZoomValue", page-width);
user_pref("dom.disable_window_move_resize", true);
user_pref("browser.link.open_newwindow.restriction", 0);
user_pref("browser.link.open_newwindow.override.external", 3);
user_pref("browser.tabs.loadDivertedInBackground", true);
user_pref("browser.tabs.loadBookmarksInTabs", true);
user_pref("browser.bookmarks.openInTabClosesMenu", true);
user_pref("browser.menu.showViewImageInfo", true);
user_pref("middlemouse.contentLoadURL", true);
user_pref("browser.tabs.insertAfterCurrent", true);
user_pref("editor.word_select.delete_space_after_doubleclick_selection", true);
user_pref("browser.tabs.hoverPreview.enabled", false);
user_pref("ui.key.menuAccessKeyFocuses", false);
user_pref("browser.taskbar.lists.frequent.enabled", false);
user_pref("reader.parse-on-load.enabled", false);
user_pref("toolkit.zoomManager.zoomValues", ".3,.5,.67,.8,.9,.95,1,1.1,1.2,1.3,1.4,1.5,1.6,1.7,2,2.4,3");
user_pref("browser.tabs.tabMinWidth", 120);

// Personal
user_pref("devtools.inspector.enabled", false);
user_pref("dom.serviceWorkers.privateBrowsing.enabled", false);
user_pref("extensions.formautofill.addresses.capture.enabled", false);
user_pref("extensions.formautofill.creditCards.capture.enabled", false);
user_pref("browser.ml.chat.provider", "https://gemini.google.com");
user_pref("browser.ml.chat.shortcuts", false);
user_pref("browser.startup.homepage.abouthome_cache.loglevel", "Error");
user_pref("browser.link.open_newwindow.override.external", 7);
user_pref("browser.urlbar.suggest.quickactions", false);
user_pref("browser.warnOnQuitShortcut", false);
user_pref("browser.policies.runOncePerModification.removeSearchEngines", "[\"Amazon.com\",\"eBay\",\"Bing\",\"Wikipedia (en)\",\"Perplexity\",\"Google\"]");
user_pref("intl.accept_languages", "en-us,zh-cn");
user_pref("font.default.x-western", "sans-serif");
user_pref("font.language.group", "x-western");
user_pref("font.name.monospace.x-western", "Sarasa Mono CL");
user_pref("font.name.monospace.zh-CN", "Sarasa Mono CL");
user_pref("font.name.sans-serif.x-western", "Sarasa Gothic CL");
user_pref("font.name.sans-serif.zh-CN", "Sarasa Gothic CL");
user_pref("font.name.serif.x-western", "PT Serif");
user_pref("browser.nova.enabled", true);
user_pref("browser.urlbar.quicksuggest.ampTopPickUseNovaIconSize", true);
user_pref("browser.uidensity", 1);
extensions.quarantinedDomains.enabled

/****************************************************************************
 * END: BETTERFOX                                                           *
****************************************************************************/
